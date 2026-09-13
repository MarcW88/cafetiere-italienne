#!/usr/bin/env python3
from pathlib import Path
import json,re,sys
from comparison_publication import INDEXABLE_COMPARISON_ROUTES
ROOT=Path(__file__).resolve().parent
FAIL=[]; WARN=[]
def fail(x): FAIL.append(x)
def warn(x): WARN.append(x)
def robots(html):
 m=re.search(r'<meta\s+name="robots"\s+content="([^"]+)"',html,re.I)
 return m.group(1).lower().replace(' ','') if m else None
seen=set()
for fp in sorted((ROOT/'.content/comparisons').glob('*.json')):
 try:data=json.loads(fp.read_text(encoding='utf-8'))
 except Exception as e: fail(f'{fp.name}: invalid json ({e})'); continue
 slug=data.get('slug') or fp.stem; url=data.get('url'); intent=data.get('intent'); criteria=data.get('criteria'); universe=data.get('product_universe')
 if not isinstance(url,str) or not url.startswith('/comparatifs/'): fail(f'{fp.name}: comparison url')
 else: seen.add(url)
 if not isinstance(intent,dict) or not intent.get('query'): fail(f'{fp.name}: intent/query')
 elif not (intent.get('decision') or intent.get('user_job')): warn(f'{fp.name}: no explicit decision')
 ids=[]
 if universe is not None:
  if not isinstance(universe,list) or not universe: fail(f'{fp.name}: malformed product universe'); universe=[]
  for p in universe:
   if not isinstance(p,dict) or not p.get('id') or not p.get('name'): fail(f'{fp.name}: incomplete product universe entry'); continue
   ids.append(p['id'])
   if p.get('status') in {'ELIGIBLE','CONDITIONALLY_ELIGIBLE'} and not p.get('source'): fail(f'{fp.name}: eligible product without source ({p.get("id")})')
  if len(ids)!=len(set(ids)): fail(f'{fp.name}: duplicate product ids')
 if criteria is not None:
  if not isinstance(criteria,list) or not criteria: fail(f'{fp.name}: malformed criteria')
  else:
   cids=[c.get('id') for c in criteria if isinstance(c,dict)]
   if len(cids)!=len(criteria) or any(not x for x in cids): fail(f'{fp.name}: criterion ids')
   if len(cids)!=len(set(cids)): fail(f'{fp.name}: duplicate criteria')
 if data.get('affiliate_commission_used_in_ranking') is True: fail(f'{fp.name}: affiliate commission must not affect ranking')
 ranking=data.get('ranking')
 if ranking is not None:
  if not isinstance(ranking,list) or not ranking: fail(f'{fp.name}: malformed ranking')
  else:
   ranks=[]; rids=[]
   for row in ranking:
    if not isinstance(row,dict): fail(f'{fp.name}: malformed ranking row'); continue
    pid=row.get('product_id'); rids.append(pid); ranks.append(row.get('rank'))
    if not pid: fail(f'{fp.name}: ranking row without product_id')
    if ids and pid not in ids: fail(f'{fp.name}: ranked product outside universe ({pid})')
   if len(rids)!=len(set(rids)): fail(f'{fp.name}: duplicate ranked products')
   if sorted([r for r in ranks if isinstance(r,int)])!=list(range(1,len(ranks)+1)): fail(f'{fp.name}: non-contiguous ranking')
 if not data.get('methodology_note'): warn(f'{fp.name}: methodology note absent')
 page=ROOT/'comparatifs'/slug/'index.html'
 if not page.exists(): fail(f'{fp.name}: page missing'); continue
 html=page.read_text(encoding='utf-8')
 art=re.search(r'<article class="content-main">(.*?)</article>',html,re.S|re.I)
 if not art: fail(f'{slug}: article.content-main'); continue
 body=art.group(1)
 if 'Gabarit prêt à recevoir' in body or 'Zone de contenu à rédiger' in body or '<!-- Contenu à rédiger -->' in body: fail(f'{slug}: placeholder')
 rv=robots(html); expected='index,follow' if url in INDEXABLE_COMPARISON_ROUTES else 'noindex,follow'
 if rv!=expected: fail(f'{slug}: robots must be {expected} (found {rv})')
 if len(re.findall(r'<h1\b',html,re.I))!=1: fail(f'{slug}: expected exactly one H1')
 if not re.search(r'<link rel="canonical" href="https://cafetiere-italienne\.be/comparatifs/[^\"]+/">',html,re.I): fail(f'{slug}: canonical')
 if not re.search(r'href="https?://',body,re.I): fail(f'{slug}: no external evidence source rendered')
 plain=re.sub(r'<[^>]+>',' ',body)
 if re.search(r'\b(?:nous avons testé|nous avons mesuré|lors de notre test|après plusieurs semaines de test)\b',plain,re.I): fail(f'{slug}: possible undocumented hands-on language')
hub=ROOT/'comparatifs/index.html'; hub_route='/comparatifs/'
if not hub.exists(): fail('comparison hub missing')
else:
 expected='index,follow' if hub_route in INDEXABLE_COMPARISON_ROUTES else 'noindex,follow'
 if robots(hub.read_text(encoding='utf-8'))!=expected: fail(f'comparison hub robots must be {expected}')
for route in sorted(INDEXABLE_COMPARISON_ROUTES-seen-{hub_route}): fail(f'indexation manifest contains unknown comparison route: {route}')
if WARN: print('\n'.join('WARN '+x for x in WARN))
if FAIL:
 print('\n'.join('FAIL '+x for x in FAIL)); sys.exit(1)
print(f'PASS: {len(seen)} comparison page(s) have no machine-detectable publication blockers')
print('PASS: robots state matches the explicit comparison indexation manifest')
print('NOTE: ranking/scoring are optional; human PUBLISH_REVIEW remains required')

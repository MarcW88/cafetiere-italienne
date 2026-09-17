#!/usr/bin/env python3
from pathlib import Path
import re
import sys
from model_publication import INDEXABLE_MODEL_ROUTES

ROOT=Path(__file__).resolve().parent
ROUTES=[
    '/modeles/bialetti-moka-express/',
    '/modeles/bialetti-venus/',
    '/modeles/bialetti-moka-induction/',
    '/modeles/bialetti-brikka/',
    '/modeles/bialetti-mini-express/',
    '/modeles/alessi-9090/',
]
FAIL=[]


def robots(html):
    m=re.search(r'<meta\s+name="robots"\s+content="([^"]+)"',html,re.I)
    return m.group(1).lower().replace(' ','') if m else None

for route in ROUTES:
    fp=ROOT/route.strip('/')/'index.html'
    if not fp.exists():
        FAIL.append(f'{route}: page missing'); continue
    html=fp.read_text(encoding='utf-8')
    if len(re.findall(r'<h1\b',html,re.I))!=1: FAIL.append(f'{route}: expected one H1')
    if not re.search(r'<meta\s+name="description"\s+content="[^"]+"',html,re.I): FAIL.append(f'{route}: meta description')
    expected='index,follow' if route in INDEXABLE_MODEL_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'{route}: robots must be {expected}, found {robots(html)}')
    canonical='https://cafetiere-italienne.be'+route
    if not re.search(r'<link rel="canonical" href="'+re.escape(canonical)+r'">',html,re.I): FAIL.append(f'{route}: canonical')
    article=re.search(r'<article class="content-main">(.*?)</article>',html,re.S|re.I)
    if not article: FAIL.append(f'{route}: article.content-main'); continue
    body=article.group(1)
    text=re.sub(r'<[^>]+>',' ',body).lower().replace('’',"'")
    if any(x in text for x in ['gabarit prêt','zone de contenu','à compléter']): FAIL.append(f'{route}: placeholder')
    if not re.search(r'href="https?://',body,re.I): FAIL.append(f'{route}: external evidence source')
    hrefs=re.findall(r'href="([^"]+)"',body,re.I)
    internal=[h for h in hrefs if not re.match(r'^(?:https?://|mailto:|tel:|#)',h,re.I)]
    if not internal: FAIL.append(f'{route}: internal link')
    if re.search(r'\b(nous avons testé|lors de notre test|nous avons mesuré|nous avons constaté)\b',text,re.I): FAIL.append(f'{route}: possible fake hands-on')
    if re.search(r'\b(dans un monde où|en conclusion|solution idéale|choix parfait|produit incontournable)\b',text,re.I): FAIL.append(f'{route}: high-risk generic/promotional wording')
    if 'id="sources"' not in body: FAIL.append(f'{route}: sources section')

hub_route='/modeles/'
hub=ROOT/'modeles'/'index.html'
if not hub.exists():
    FAIL.append('/modeles/: hub missing')
else:
    html=hub.read_text(encoding='utf-8')
    expected='index,follow' if hub_route in INDEXABLE_MODEL_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'/modeles/: robots must be {expected}')
    if not re.search(r'<link rel="canonical" href="https://cafetiere-italienne\.be/modeles/">',html,re.I): FAIL.append('/modeles/: canonical')

unknown=INDEXABLE_MODEL_ROUTES-set(ROUTES)-{hub_route}
for route in sorted(unknown): FAIL.append(f'indexation manifest contains unknown model route: {route}')

if FAIL:
    print('\n'.join('FAIL '+x for x in FAIL)); sys.exit(1)
print(f'PASS: {len(ROUTES)} model page(s) have no machine-detectable publication blockers')
print('PASS: model robots state matches the explicit indexation manifest')
print('NOTE: machine validation does not replace PRODUCT editorial review or human judgment')

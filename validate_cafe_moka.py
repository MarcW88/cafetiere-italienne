#!/usr/bin/env python3
from pathlib import Path
import re
import sys
from cafe_moka_publication import INDEXABLE_CAFE_MOKA_ROUTES

ROOT=Path(__file__).resolve().parent
SLUGS=['quest-ce-que-le-cafe-moka','comment-preparer-un-cafe-moka']
ROUTES=[f'/cafe-moka/{s}/' for s in SLUGS]
FAIL=[]

def robots(html):
    m=re.search(r'<meta\s+name="robots"\s+content="([^"]+)"',html,re.I)
    return m.group(1).lower().replace(' ','') if m else None

for slug,route in zip(SLUGS,ROUTES):
    fp=ROOT/'cafe-moka'/slug/'index.html'
    if not fp.exists(): FAIL.append(f'{route}: missing'); continue
    html=fp.read_text(encoding='utf-8')
    if len(re.findall(r'<h1\b',html,re.I))!=1: FAIL.append(f'{route}: one H1 expected')
    if not re.search(r'<meta\s+name="description"\s+content="[^"]+"',html,re.I): FAIL.append(f'{route}: meta description')
    expected='index,follow' if route in INDEXABLE_CAFE_MOKA_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'{route}: robots {robots(html)} != {expected}')
    canonical='https://cafetiere-italienne.be'+route
    if not re.search(r'<link rel="canonical" href="'+re.escape(canonical)+r'">',html,re.I): FAIL.append(f'{route}: canonical')
    article=re.search(r'<article class="content-main">(.*?)</article>',html,re.S|re.I)
    if not article: FAIL.append(f'{route}: content-main'); continue
    body=article.group(1)
    text=re.sub(r'<[^>]+>',' ',body).lower().replace('’',"'")
    if any(x in text for x in ['gabarit prêt','zone de contenu','à compléter']): FAIL.append(f'{route}: placeholder')
    if 'id="sources"' not in body: FAIL.append(f'{route}: sources section')
    if not re.search(r'href="https?://',body,re.I): FAIL.append(f'{route}: external source')
    hrefs=re.findall(r'href="([^"]+)"',body,re.I)
    internal=[h for h in hrefs if not re.match(r'^(?:https?://|mailto:|tel:|#)',h,re.I)]
    if not internal: FAIL.append(f'{route}: internal link')
    if re.search(r'\b(nous avons testé|lors de notre test|nous avons mesuré|nous avons constaté)\b',text,re.I): FAIL.append(f'{route}: fake hands-on')
    if slug=='quest-ce-que-le-cafe-moka':
        if 'yémen' not in text or 'espresso' not in text: FAIL.append(f'{route}: definition distinctions missing')
    if slug=='comment-preparer-un-cafe-moka':
        for required in ['soupape','moyenne-fine','sans le tasser','faible à moyenne']:
            if required not in text: FAIL.append(f'{route}: missing procedure element {required}')

hub_route='/cafe-moka/'
hub=ROOT/'cafe-moka'/'index.html'
if not hub.exists(): FAIL.append('/cafe-moka/: hub missing')
else:
    html=hub.read_text(encoding='utf-8')
    expected='index,follow' if hub_route in INDEXABLE_CAFE_MOKA_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'/cafe-moka/: robots {robots(html)} != {expected}')
    if not re.search(r'<link rel="canonical" href="https://cafetiere-italienne\.be/cafe-moka/">',html,re.I): FAIL.append('/cafe-moka/: canonical')

unknown=INDEXABLE_CAFE_MOKA_ROUTES-set(ROUTES)-{hub_route}
for route in sorted(unknown): FAIL.append(f'indexation manifest contains unknown cafe moka route: {route}')

if FAIL:
    print('\n'.join('FAIL '+x for x in FAIL)); sys.exit(1)
print(f'PASS: {len(ROUTES)} cafe moka page(s) have no machine-detectable publication blockers')
print('PASS: cafe moka robots state matches the explicit indexation manifest')
print('NOTE: machine validation does not replace editorial review or human judgment')

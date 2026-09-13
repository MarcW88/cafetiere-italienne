#!/usr/bin/env python3
from pathlib import Path
import re
import sys
from capacity_publication import INDEXABLE_CAPACITY_ROUTES

ROOT=Path(__file__).resolve().parent
SLUGS=[
 'cafetiere-italienne-2-tasses',
 'cafetiere-italienne-4-tasses',
 'cafetiere-italienne-6-tasses',
 'cafetiere-italienne-10-tasses',
 'cafetiere-italienne-12-tasses',
]
ROUTES=[f'/capacites/{s}/' for s in SLUGS]
FAIL=[]


def robots(html):
    m=re.search(r'<meta\s+name="robots"\s+content="([^"]+)"',html,re.I)
    return m.group(1).lower().replace(' ','') if m else None

for slug,route in zip(SLUGS,ROUTES):
    fp=ROOT/'capacites'/slug/'index.html'
    if not fp.exists(): FAIL.append(f'{route}: missing'); continue
    html=fp.read_text(encoding='utf-8')
    if len(re.findall(r'<h1\b',html,re.I))!=1: FAIL.append(f'{route}: one H1 expected')
    if not re.search(r'<meta\s+name="description"\s+content="[^"]+"',html,re.I): FAIL.append(f'{route}: meta description')
    expected='index,follow' if route in INDEXABLE_CAPACITY_ROUTES else 'noindex,follow'
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
    # Critical editorial guard: cup counts must not be converted into people as a factual rule.
    if re.search(r'\b(?:2|4|6|10|12)\s+tasses?\s*=\s*(?:1|2|3|4|5|6|7|8|9|10|11|12)\s+personnes?',text,re.I): FAIL.append(f'{route}: unsupported cups-to-people equation')

hub_route='/capacites/'
hub=ROOT/'capacites'/'index.html'
if not hub.exists(): FAIL.append('/capacites/: hub missing')
else:
    html=hub.read_text(encoding='utf-8')
    expected='index,follow' if hub_route in INDEXABLE_CAPACITY_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'/capacites/: robots {robots(html)} != {expected}')
    if not re.search(r'<link rel="canonical" href="https://cafetiere-italienne\.be/capacites/">',html,re.I): FAIL.append('/capacites/: canonical')

unknown=INDEXABLE_CAPACITY_ROUTES-set(ROUTES)-{hub_route}
for route in sorted(unknown): FAIL.append(f'indexation manifest contains unknown capacity route: {route}')

if FAIL:
    print('\n'.join('FAIL '+x for x in FAIL)); sys.exit(1)
print(f'PASS: {len(ROUTES)} capacity page(s) have no machine-detectable publication blockers')
print('PASS: capacity robots state matches the explicit indexation manifest')
print('NOTE: machine validation does not replace editorial review or human judgment')

#!/usr/bin/env python3
from pathlib import Path
import re
import sys
from brand_publication import INDEXABLE_BRAND_ROUTES

ROOT=Path(__file__).resolve().parent
ROUTES=['/marques/bialetti/','/marques/alessi/','/marques/giannini/']
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
    expected='index,follow' if route in INDEXABLE_BRAND_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'{route}: robots must be {expected}, found {robots(html)}')
    canonical='https://cafetiere-italienne.be'+route
    if not re.search(r'<link rel="canonical" href="'+re.escape(canonical)+r'">',html,re.I): FAIL.append(f'{route}: canonical')
    article=re.search(r'<article class="content-main">(.*?)</article>',html,re.S|re.I)
    if not article: FAIL.append(f'{route}: article.content-main'); continue
    body=article.group(1)
    text=re.sub(r'<[^>]+>',' ',body).lower().replace('’',"'")
    if 'gabarit prêt' in text or 'zone de contenu' in text or 'à compléter' in text: FAIL.append(f'{route}: placeholder')
    if not re.search(r'href="https?://',body,re.I): FAIL.append(f'{route}: external evidence source')
    hrefs=re.findall(r'href="([^"]+)"',body,re.I)
    internal=[h for h in hrefs if not re.match(r'^(?:https?://|mailto:|tel:|#)',h,re.I)]
    if not internal: FAIL.append(f'{route}: internal link')
    if re.search(r'\b(nous avons testé|lors de notre test|nous avons mesuré|nous avons constaté)\b',text,re.I): FAIL.append(f'{route}: possible fake hands-on')
    if re.search(r'\b(dans un monde où|en conclusion|solution idéale|choix parfait|produit incontournable)\b',text,re.I): FAIL.append(f'{route}: high-risk generic/promotional wording')

hub_route='/marques/'
hub=ROOT/'marques'/'index.html'
if not hub.exists():
    FAIL.append('/marques/: hub missing')
else:
    html=hub.read_text(encoding='utf-8')
    expected='index,follow' if hub_route in INDEXABLE_BRAND_ROUTES else 'noindex,follow'
    if robots(html)!=expected: FAIL.append(f'/marques/: robots must be {expected}')
    if not re.search(r'<link rel="canonical" href="https://cafetiere-italienne\.be/marques/">',html,re.I): FAIL.append('/marques/: canonical')
    card_opens=len(re.findall(r'<a\b[^>]*class="[^"]*\bbrand-choice\b[^"]*"',html,re.I))
    card_blocks=len(re.findall(r'<a\b[^>]*class="[^"]*\bbrand-choice\b[^"]*"[^>]*>(?:(?!<a\b[^>]*class="[^"]*\bbrand-choice\b).)*?</a>',html,re.I|re.S))
    if card_opens!=len(ROUTES): FAIL.append(f'/marques/: expected {len(ROUTES)} brand cards, found {card_opens}')
    if card_blocks!=card_opens: FAIL.append('/marques/: malformed or nested brand-choice anchor detected')
    for route in ROUTES:
        if route not in html: FAIL.append(f'/marques/: missing card/link for {route}')

unknown=INDEXABLE_BRAND_ROUTES-set(ROUTES)-{hub_route}
for route in sorted(unknown): FAIL.append(f'indexation manifest contains unknown brand route: {route}')

if FAIL:
    print('\n'.join('FAIL '+x for x in FAIL)); sys.exit(1)
print(f'PASS: {len(ROUTES)} brand page(s) have no machine-detectable publication blockers')
print('PASS: brand hub cards are structurally valid')
print('PASS: brand robots state matches the explicit indexation manifest')
print('NOTE: machine validation does not replace brand-analysis-workflow / PUBLISH_REVIEW or human editorial judgment')
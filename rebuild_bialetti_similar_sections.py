#!/usr/bin/env python3
"""
Rebuilds the two similar-product sections on every Bialetti product page
linked from shop/percolators/bialetti.html:

  1. "Vergelijkbare producten van Bialetti"  → 4 Bialetti products (by similarity)
  2. "Andere product alternatieven"           → 4 non-Bialetti products

Also:
  - Adds a one-line intro under each section heading
  - Removes the grey border-top between the two sections (CSS fix)
"""

import re
import json
import random
from pathlib import Path

BASE_DIR     = Path('/Users/marc/Desktop/italiaanse-percolator')
BIALETTI_PAGE = BASE_DIR / 'shop/percolators/bialetti.html'
PRODUCTEN_DIR = BASE_DIR / 'producten'
ALL_PRODUCTS  = BASE_DIR / 'all_products.json'

# ── 1. Load product catalogue ────────────────────────────────────────────────
all_products = json.loads(ALL_PRODUCTS.read_text())

# Index by slug
by_slug = {p['slug']: p for p in all_products if p.get('slug')}

# Split into Bialetti / alternatives
bialetti_pool = [p for p in all_products
                 if p.get('brand') == 'Bialetti' and p.get('slug') and p.get('image')]

# "Andere" pool: Italian / well-known percolator brands – exclude Bialetti & Overig
ALT_BRANDS = {'G.A.T. Italia', 'PEZZETTI', 'Alessi', 'La Cafetière',
              'Leopold Vienna', 'Bodum', 'HENDI', 'Petromax', 'Alessandro'}
alt_pool = [p for p in all_products
            if p.get('brand') in ALT_BRANDS and p.get('slug') and p.get('image')]

# Fallback: any non-Bialetti if alt_pool too small
if len(alt_pool) < 20:
    alt_pool = [p for p in all_products
                if p.get('brand') not in ('Bialetti', 'Overig', '')
                and p.get('slug') and p.get('image')]


# ── 2. Helpers ───────────────────────────────────────────────────────────────
def similar_bialetti(current_slug, n=4):
    """Return n Bialetti products most similar to the current one."""
    current = by_slug.get(current_slug, {})
    cap   = current.get('capaciteit', 0)
    mat   = current.get('materiaal', '')
    ind   = current.get('inductie', '')

    def score(p):
        if p['slug'] == current_slug:
            return -1
        s = 0
        if cap and p.get('capaciteit') == cap:  s += 3
        if mat and p.get('materiaal')  == mat:  s += 2
        if ind and p.get('inductie')   == ind:  s += 1
        return s

    candidates = sorted(bialetti_pool, key=score, reverse=True)
    # Take top scorers (excluding current), dedupe slugs, pick n
    seen = set()
    result = []
    for p in candidates:
        if p['slug'] == current_slug:
            continue
        if p['slug'] in seen:
            continue
        seen.add(p['slug'])
        result.append(p)
        if len(result) == n:
            break
    return result


def similar_alt(current_slug, n=4):
    """Return n alternative-brand products, vary by page using slug as seed."""
    current = by_slug.get(current_slug, {})
    cap = current.get('capaciteit', 0)
    mat = current.get('materiaal', '')

    def score(p):
        s = 0
        if cap and p.get('capaciteit') == cap: s += 2
        if mat and p.get('materiaal')  == mat: s += 1
        return s

    # Sort by score then deterministically shuffle per-product using slug hash
    rng = random.Random(hash(current_slug) & 0xFFFFFFFF)
    scored = sorted(alt_pool, key=lambda p: (score(p), rng.random()), reverse=True)

    seen = set()
    result = []
    for p in scored:
        if p['slug'] in seen:
            continue
        seen.add(p['slug'])
        result.append(p)
        if len(result) == n:
            break
    return result


def card_html(p):
    price_str = f'€{p["price"]:.2f}'.replace('.', ',') if p.get('price') else ''
    return (
        f'                <a href="{p["slug"]}.html" class="similar-card">\n'
        f'                    <img src="{p["image"]}" alt="{p["name"]}" loading="lazy" onerror="this.style.display=\'none\'">\n'
        f'                    <h4>{p["name"][:60]}</h4>\n'
        f'                    <span class="card-price">{price_str}</span>\n'
        f'                </a>'
    )


def make_section(title, intro, cards, extra_class=''):
    class_attr = f'similar-section{" " + extra_class if extra_class else ""}'
    cards_html = '\n'.join(card_html(c) for c in cards)
    return (
        f'        <section class="{class_attr}">\n'
        f'            <h2>{title}</h2>\n'
        f'            <p class="similar-intro">{intro}</p>\n'
        f'            <div class="similar-grid">\n'
        f'{cards_html}\n'
        f'            </div>\n'
        f'        </section>'
    )


# ── 3. Extract slugs from bialetti.html allProducts ──────────────────────────
src = BIALETTI_PAGE.read_text()
m = re.search(r'const allProducts = (\[.*?\]);', src, re.DOTALL)
if not m:
    raise RuntimeError("allProducts not found in bialetti.html")
slugs = [p['slug'] for p in json.loads(m.group(1))]
print(f"Processing {len(slugs)} pages...\n")


# ── 4. CSS additions ─────────────────────────────────────────────────────────
CSS_PATCH = (
    '        .similar-intro { font-size:0.88rem;color:#666;margin:-0.75rem 0 1.25rem; }\n'
    '        .similar-section + .similar-section { border-top:none;margin-top:2rem; }\n'
)

stats = {'modified': 0, 'skipped': 0, 'not_found': 0}

for slug in slugs:
    page_path = PRODUCTEN_DIR / f'{slug}.html'
    if not page_path.exists():
        print(f"  NOT FOUND : {slug}")
        stats['not_found'] += 1
        continue

    html = page_path.read_text()

    # ── Find the entire block of similar-sections to replace ────────────────
    block_match = re.search(
        r'(<section class="similar-section[^>]*">.*</section>)',
        html, re.DOTALL
    )
    if not block_match:
        print(f"  SKIP (no section): {slug}")
        stats['skipped'] += 1
        continue

    original_block = block_match.group(1)

    # ── Build new sections ───────────────────────────────────────────────────
    bialetti_cards = similar_bialetti(slug, 4)
    alt_cards      = similar_alt(slug, 4)

    sec1 = make_section(
        'Vergelijkbare producten van Bialetti',
        'Andere populaire Bialetti modellen die goed bij jouw keuze passen.',
        bialetti_cards
    )
    sec2 = make_section(
        'Andere product alternatieven',
        'Kwalitatieve alternatieven van andere merken voor dezelfde koffiebeleving.',
        alt_cards,
        extra_class='similar-section-alt'
    )

    new_block = sec1 + '\n' + sec2

    # ── Inject CSS patch if not already present ──────────────────────────────
    if 'similar-intro' not in html:
        html = html.replace('    </style>', CSS_PATCH + '    </style>', 1)

    # ── Replace block ────────────────────────────────────────────────────────
    html = html.replace(original_block, new_block, 1)

    page_path.write_text(html)
    print(f"  OK : {slug}")
    stats['modified'] += 1

print(
    f"\n{'─'*55}\n"
    f"  Modified : {stats['modified']}\n"
    f"  Skipped  : {stats['skipped']}\n"
    f"  Not found: {stats['not_found']}\n"
    f"{'─'*55}"
)

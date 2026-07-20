#!/usr/bin/env python3
"""
Splits the "Vergelijkbare Producten" section on every Bialetti product page
linked from shop/percolators/bialetti.html into two sections:
  1. "Vergelijkbare producten van Bialetti"  (same-brand cards)
  2. "Andere product alternatieven"           (other-brand cards, only if any)
"""

import re
import json
from pathlib import Path

BASE_DIR = Path('/Users/marc/Desktop/italiaanse-percolator')
BIALETTI_PAGE = BASE_DIR / 'shop/percolators/bialetti.html'
PRODUCTEN_DIR = BASE_DIR / 'producten'


# ── 1. Extract all slugs from allProducts in bialetti.html ──────────────────
with open(BIALETTI_PAGE, 'r', encoding='utf-8') as f:
    bialetti_src = f.read()

match = re.search(r'const allProducts = (\[.*?\]);', bialetti_src, re.DOTALL)
if not match:
    raise RuntimeError("Could not find allProducts array in bialetti.html")

products = json.loads(match.group(1))
slugs = [p['slug'] for p in products]
print(f"Found {len(slugs)} products in bialetti.html\n")


# ── 2. Process each product page ────────────────────────────────────────────
stats = {'modified': 0, 'skipped': 0, 'not_found': 0}

for slug in slugs:
    page_path = PRODUCTEN_DIR / f'{slug}.html'

    if not page_path.exists():
        print(f"  NOT FOUND : {slug}.html")
        stats['not_found'] += 1
        continue

    with open(page_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Find all similar-section blocks (may be 1 old-style or 2 new-style)
    all_sections = re.findall(
        r'(<section class="similar-section">.*?</section>)',
        html,
        re.DOTALL
    )

    if not all_sections:
        print(f"  SKIP (no similar-section): {slug}.html")
        stats['skipped'] += 1
        continue

    # Collect ALL cards from ALL sections (handles both old & already-updated pages)
    cards = []
    for sec in all_sections:
        cards += re.findall(
            r'(<a\s+href="[^"]+"\s+class="similar-card">.*?</a>)',
            sec,
            re.DOTALL
        )

    if not cards:
        print(f"  SKIP (no cards): {slug}.html")
        stats['skipped'] += 1
        continue

    # Build the contiguous block that will be replaced
    # (from start of first section to end of last section)
    block_match = re.search(
        r'(<section class="similar-section">.*</section>)',
        html,
        re.DOTALL
    )
    if not block_match:
        stats['skipped'] += 1
        continue
    original_section = block_match.group(1)

    # Classify cards
    bialetti_cards = []
    other_cards = []

    for card in cards:
        href_match = re.search(r'<a\s+href="([^"]+)"', card)
        href = href_match.group(1) if href_match else ''
        # A card belongs to Bialetti when 'bialetti' appears anywhere in the href
        if 'bialetti' in href.lower():
            bialetti_cards.append(card)
        else:
            other_cards.append(card)

    # ── Build replacement HTML ───────────────────────────────────────────────
    indent = '                '  # 16 spaces – matches existing indentation

    def make_section(title, card_list):
        cards_html = ('\n' + indent).join(card_list)
        return (
            '        <section class="similar-section">\n'
            f'            <h2>{title}</h2>\n'
            '            <div class="similar-grid">\n'
            f'                {cards_html}\n'
            '            </div>\n'
            '        </section>'
        )

    new_html_parts = [make_section('Vergelijkbare producten van Bialetti', bialetti_cards)]

    if other_cards:
        new_html_parts.append(make_section('Andere product alternatieven', other_cards))

    replacement = '\n'.join(new_html_parts)

    new_html = html.replace(original_section, replacement, 1)

    with open(page_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

    b = len(bialetti_cards)
    o = len(other_cards)
    print(f"  MODIFIED  : {slug}.html  ({b} Bialetti, {o} other)")
    stats['modified'] += 1

# ── 3. Summary ───────────────────────────────────────────────────────────────
print(
    f"\n{'─'*55}\n"
    f"  Modified : {stats['modified']}\n"
    f"  Skipped  : {stats['skipped']}\n"
    f"  Not found: {stats['not_found']}\n"
    f"{'─'*55}"
)

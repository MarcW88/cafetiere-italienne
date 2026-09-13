"""Cafetière site adapter for the exact Bloc Notes comparison engine.

Unmigrated URLs preserve their currently rendered article body. A URL leaves
that transitional mode only after it has been rewritten through the vendored
comparison-content-workflow with its own evidence brief and content brief.
"""
from pathlib import Path
import re

from comparison_bespoke_cafetiere import CONTENT as CAFETIERE_CONTENT
from comparison_bespoke_remaining_cafetiere import CONTENT as REMAINING_CONTENT

ROOT = Path(__file__).resolve().parent
SLUGS = (
    'meilleure-cafetiere-italienne',
    'cafetiere-italienne-induction',
    'cafetiere-italienne-inox',
    'cafetiere-italienne-electrique',
    'cafetiere-italienne-design',
    'petite-cafetiere-italienne',
)

REVIEWED_CONTENT = {**CAFETIERE_CONTENT, **REMAINING_CONTENT}


def _existing_article(slug: str) -> str:
    page = ROOT / 'comparatifs' / slug / 'index.html'
    html = page.read_text(encoding='utf-8')
    match = re.search(r'<article class="content-main">(.*?)</article>', html, re.S | re.I)
    if not match:
        raise RuntimeError(f'article.content-main missing for {slug}')
    return match.group(1).strip()


CONTENT = {
    slug: _existing_article(slug)
    for slug in SLUGS
    if slug not in REVIEWED_CONTENT
}
CONTENT.update(REVIEWED_CONTENT)

# The Cafetière shell predates the Bloc Notes page-meta component. Keep META
# empty here and preserve the existing title/H1 shell until a site-specific
# shell migration is carried out separately from the upstream comparison core.
META = {}

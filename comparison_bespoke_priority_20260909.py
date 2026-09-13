"""Cafetière site adapter for the exact Bloc Notes comparison engine.

Until each URL is rewritten through comparison-content-workflow, preserve the
currently rendered article body. This prevents the upstream legacy renderer
from imposing a template while CLUSTER_AUDIT is being redone.
"""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
SLUGS = (
    'meilleure-cafetiere-italienne',
    'cafetiere-italienne-induction',
    'cafetiere-italienne-inox',
    'cafetiere-italienne-electrique',
    'cafetiere-italienne-design',
    'petite-cafetiere-italienne',
)

def _existing_article(slug: str) -> str:
    page = ROOT / 'comparatifs' / slug / 'index.html'
    html = page.read_text(encoding='utf-8')
    match = re.search(r'<article class="content-main">(.*?)</article>', html, re.S | re.I)
    if not match:
        raise RuntimeError(f'article.content-main missing for {slug}')
    return match.group(1).strip()

CONTENT = {slug: _existing_article(slug) for slug in SLUGS}
META = {}

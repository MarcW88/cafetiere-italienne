#!/usr/bin/env python3
"""Apply the explicit site-wide publication state after all content overrides.

Current routes are indexable only when they are present in the human-approved
publication registries (plus the home/trust pages below). New routes therefore
remain noindex by default until explicitly approved.
"""

from pathlib import Path
from xml.sax.saxutils import escape
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from publication_indexation import INDEXABLE_GUIDE_ROUTES
from model_publication import INDEXABLE_MODEL_ROUTES
from brand_publication import INDEXABLE_BRAND_ROUTES
from accessory_publication import INDEXABLE_ACCESSORY_ROUTES
from capacity_publication import INDEXABLE_CAPACITY_ROUTES
from cafe_moka_publication import INDEXABLE_CAFE_MOKA_ROUTES
from comparison_publication import INDEXABLE_COMPARISON_ROUTES

DOMAIN = "https://cafetiere-italienne.be"
PUBLIC_ROOTS = (
    "comparatifs",
    "marques",
    "modeles",
    "capacites",
    "guides",
    "accessoires",
    "cafe-moka",
    "a-propos",
    "notre-methode",
    "affiliation",
    "contact",
    "boutique",
)

CORE_INDEXABLE_ROUTES = {
    "/",
    "/a-propos/",
    "/notre-methode/",
    "/affiliation/",
    "/contact/",
    "/boutique/",
}

INDEXABLE_SITE_ROUTES = set().union(
    CORE_INDEXABLE_ROUTES,
    INDEXABLE_GUIDE_ROUTES,
    INDEXABLE_MODEL_ROUTES,
    INDEXABLE_BRAND_ROUTES,
    INDEXABLE_ACCESSORY_ROUTES,
    INDEXABLE_CAPACITY_ROUTES,
    INDEXABLE_CAFE_MOKA_ROUTES,
    INDEXABLE_COMPARISON_ROUTES,
)

ROBOTS_RE = re.compile(r'<meta\s+name="robots"\s+content="[^"]*"\s*/?>', re.I)
CANONICAL_RE = re.compile(r'<link\s+rel="canonical"\s+href="[^"]*"\s*/?>', re.I)


def route_for_page(page: Path) -> str:
    relative = page.relative_to(ROOT)
    if relative == Path("index.html"):
        return "/"
    return "/" + relative.parent.as_posix().strip("/") + "/"


def set_head_tag(html: str, pattern: re.Pattern, replacement: str, label: str) -> str:
    if pattern.search(html):
        return pattern.sub(replacement, html, count=1)
    if "</head>" not in html.lower():
        raise SystemExit(f"Missing </head> while adding {label}")
    return re.sub(r"</head>", replacement + "</head>", html, count=1, flags=re.I)


def public_pages() -> list[Path]:
    pages = []
    home = ROOT / "index.html"
    if home.exists():
        pages.append(home)
    for root_name in PUBLIC_ROOTS:
        root = ROOT / root_name
        if root.exists():
            pages.extend(sorted(root.rglob("index.html")))
    return sorted(set(pages), key=lambda p: route_for_page(p))


pages = public_pages()
page_by_route = {route_for_page(page): page for page in pages}
missing = sorted(INDEXABLE_SITE_ROUTES - set(page_by_route))
if missing:
    raise SystemExit("Approved indexable route(s) missing from generated site: " + ", ".join(missing))

for route, page in sorted(page_by_route.items()):
    html = page.read_text(encoding="utf-8")
    robots = "index,follow" if route in INDEXABLE_SITE_ROUTES else "noindex,follow"
    html = set_head_tag(
        html,
        ROBOTS_RE,
        f'<meta name="robots" content="{robots}">',
        "robots meta",
    )
    html = set_head_tag(
        html,
        CANONICAL_RE,
        f'<link rel="canonical" href="{DOMAIN}{route}">',
        "canonical",
    )
    page.write_text(html, encoding="utf-8")

# Sitemap contains only explicitly approved, generated, self-canonical routes.
urls = "\n".join(
    f"  <url><loc>{escape(DOMAIN + route)}</loc></url>"
    for route in sorted(INDEXABLE_SITE_ROUTES, key=lambda r: (r != "/", r))
)
(ROOT / "sitemap.xml").write_text(
    '<?xml version="1.0" encoding="UTF-8"?>\n'
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    f"{urls}\n"
    "</urlset>\n",
    encoding="utf-8",
)

(ROOT / "robots.txt").write_text(
    "User-agent: *\n"
    "Allow: /\n\n"
    f"Sitemap: {DOMAIN}/sitemap.xml\n",
    encoding="utf-8",
)

# Final self-check: approved pages must be index,follow and self-canonical.
for route in sorted(INDEXABLE_SITE_ROUTES):
    html = page_by_route[route].read_text(encoding="utf-8")
    if not re.search(r'<meta\s+name="robots"\s+content="index,follow"', html, re.I):
        raise SystemExit(f"Indexation finalizer failed robots state for {route}")
    canonical = re.escape(f'<link rel="canonical" href="{DOMAIN}{route}">')
    if not re.search(canonical, html, re.I):
        raise SystemExit(f"Indexation finalizer failed canonical for {route}")

print(f"PASS: {len(INDEXABLE_SITE_ROUTES)} approved public route(s) are index,follow")
print(f"PASS: sitemap.xml contains {len(INDEXABLE_SITE_ROUTES)} URL(s)")
print("PASS: robots.txt allows crawling and advertises the sitemap")

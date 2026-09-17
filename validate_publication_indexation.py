#!/usr/bin/env python3
"""Global indexation gate for every explicitly approved public route."""

from __future__ import annotations

from pathlib import Path
import re
import sys
from xml.etree import ElementTree as ET

from publication_indexation import INDEXABLE_GUIDE_ROUTES
from model_publication import INDEXABLE_MODEL_ROUTES
from brand_publication import INDEXABLE_BRAND_ROUTES
from accessory_publication import INDEXABLE_ACCESSORY_ROUTES
from capacity_publication import INDEXABLE_CAPACITY_ROUTES
from cafe_moka_publication import INDEXABLE_CAFE_MOKA_ROUTES
from comparison_publication import INDEXABLE_COMPARISON_ROUTES

ROOT = Path(__file__).resolve().parent
DOMAIN = "https://cafetiere-italienne.be"
CORE_INDEXABLE_ROUTES = {
    "/",
    "/a-propos/",
    "/notre-methode/",
    "/affiliation/",
    "/contact/",
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

ROBOTS_RE = re.compile(r'<meta\s+name="robots"\s+content="([^"]+)"', re.I)
CANONICAL_RE = re.compile(r'<link\s+rel="canonical"\s+href="([^"]+)"', re.I)


def page_for_route(route: str) -> Path:
    if route == "/":
        return ROOT / "index.html"
    return ROOT / route.strip("/") / "index.html"


def main() -> None:
    failures: list[str] = []

    for route in sorted(INDEXABLE_SITE_ROUTES):
        page = page_for_route(route)
        if not page.exists():
            failures.append(f"{route}: approved page missing")
            continue

        html = page.read_text(encoding="utf-8")
        robots = ROBOTS_RE.findall(html)
        if len(robots) != 1 or robots[0].lower().replace(" ", "") != "index,follow":
            failures.append(f"{route}: robots must be index,follow; found {robots!r}")

        canonicals = CANONICAL_RE.findall(html)
        expected_canonical = f"{DOMAIN}{route}"
        if len(canonicals) != 1 or canonicals[0] != expected_canonical:
            failures.append(
                f"{route}: canonical must be self-referential; expected {expected_canonical}, found {canonicals!r}"
            )

    sitemap = ROOT / "sitemap.xml"
    if not sitemap.exists():
        failures.append("sitemap.xml: missing")
    else:
        try:
            tree = ET.parse(sitemap)
            ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
            sitemap_urls = {
                (loc.text or "").strip()
                for loc in tree.findall(".//sm:loc", ns)
                if (loc.text or "").strip()
            }
            expected_urls = {f"{DOMAIN}{route}" for route in INDEXABLE_SITE_ROUTES}
            missing_urls = sorted(expected_urls - sitemap_urls)
            extra_urls = sorted(sitemap_urls - expected_urls)
            if missing_urls:
                failures.append("sitemap.xml: missing approved URL(s): " + ", ".join(missing_urls))
            if extra_urls:
                failures.append("sitemap.xml: contains unapproved URL(s): " + ", ".join(extra_urls))
        except ET.ParseError as exc:
            failures.append(f"sitemap.xml: invalid XML: {exc}")

    robots_txt = ROOT / "robots.txt"
    if not robots_txt.exists():
        failures.append("robots.txt: missing")
    else:
        robots_text = robots_txt.read_text(encoding="utf-8")
        if re.search(r"(?im)^\s*disallow\s*:\s*/\s*$", robots_text):
            failures.append("robots.txt: site-wide Disallow: / detected")
        if f"Sitemap: {DOMAIN}/sitemap.xml" not in robots_text:
            failures.append("robots.txt: sitemap declaration missing")

    if failures:
        print("FAIL — publication indexation blockers found")
        for failure in failures:
            print(f"FAIL {failure}")
        raise SystemExit(1)

    print(f"PASS: {len(INDEXABLE_SITE_ROUTES)} approved public route(s) are index,follow")
    print("PASS: every approved route has a self-referential canonical")
    print(f"PASS: sitemap.xml contains exactly {len(INDEXABLE_SITE_ROUTES)} approved URL(s)")
    print("PASS: robots.txt allows crawling and declares the sitemap")


if __name__ == "__main__":
    main()

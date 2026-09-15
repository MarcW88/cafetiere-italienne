#!/usr/bin/env python3
"""Machine-detectable quality floor for /marques/ detail pages.

This validator intentionally does not score substantive editorial quality. The
brand-analysis workflow remains responsible for intent, evidence, affiliate
value, cluster differentiation and human review.
"""

from __future__ import annotations

import re
from html import unescape
from pathlib import Path

ROOT = Path(__file__).resolve().parent
SITE_ORIGIN = "https://cafetiere-italienne.be"

BRAND_PAGES = {
    "/marques/bialetti/": {"brand": "Bialetti"},
    "/marques/alessi/": {"brand": "Alessi"},
}

TAG_RE = re.compile(r"<[^>]+>", re.S)
TITLE_RE = re.compile(r"<title>(.*?)</title>", re.S | re.I)
META_DESC_RE = re.compile(r'<meta\b[^>]*name="description"[^>]*content="([^"]*)"', re.I)
ROBOTS_RE = re.compile(r'<meta\b[^>]*name="robots"[^>]*content="([^"]*)"', re.I)
CANONICAL_RE = re.compile(r'<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"', re.I)
H1_RE = re.compile(r"<h1\b[^>]*>(.*?)</h1>", re.S | re.I)
ID_RE = re.compile(r'\bid="([^"]+)"', re.I)
EXTERNAL_LINK_RE = re.compile(r'<a\b[^>]*href="https?://', re.I)

BLOCKED_VISIBLE_PATTERNS = {
    "placeholder": [
        r"contenu à rédiger",
        r"contenu en préparation",
        r"zone de contenu à rédiger",
        r"à compléter",
    ],
    "editor-facing metadiscourse": [
        r"\bintention de recherche\b",
        r"\bmaillage interne\b",
        r"\bpage (?:hub|pilier)\b",
        r"\boptimis(?:er|é|ée|ation) (?:pour )?(?:le )?(?:seo|geo)\b",
    ],
    "fake hands-on": [
        r"\bnous avons testé\b",
        r"\blors de notre test\b",
        r"\bnous avons mesuré\b",
        r"\bnous avons constaté\b",
    ],
}


def clean(raw: str) -> str:
    return re.sub(r"\s+", " ", unescape(TAG_RE.sub(" ", raw))).strip()


def page_for_route(route: str) -> Path:
    return ROOT / route.strip("/") / "index.html"


def visible_text(html: str) -> str:
    main = re.search(r"<main>(.*?)</main>", html, re.S | re.I)
    return clean(main.group(1) if main else html).lower().replace("’", "'")


def validate(route: str, spec: dict[str, str]) -> list[str]:
    failures: list[str] = []
    page = page_for_route(route)
    if not page.exists():
        return ["generated page missing"]

    html = page.read_text(encoding="utf-8")
    text = visible_text(html)

    titles = TITLE_RE.findall(html)
    if len(titles) != 1 or not clean(titles[0]):
        failures.append("missing or duplicate title")

    descriptions = META_DESC_RE.findall(html)
    if len(descriptions) != 1 or not clean(descriptions[0]):
        failures.append("missing or duplicate meta description")

    robots = ROBOTS_RE.findall(html)
    if len(robots) != 1 or robots[0].strip().lower() != "noindex,follow":
        failures.append("robots must remain noindex,follow before human approval")

    canonicals = CANONICAL_RE.findall(html)
    expected_canonical = f"{SITE_ORIGIN}{route}"
    if len(canonicals) != 1 or canonicals[0] != expected_canonical:
        failures.append(f"canonical must be self-referential: {expected_canonical}")

    h1s = [clean(value) for value in H1_RE.findall(html)]
    if len(h1s) != 1:
        failures.append(f"expected exactly one H1, found {len(h1s)}")
    elif spec["brand"].lower() not in h1s[0].lower():
        failures.append("H1 does not identify the brand")

    if 'class="brand-layout"' not in html or 'class="content-main"' not in html:
        failures.append("brand-layout/content-main structure missing")

    ids = ID_RE.findall(html)
    duplicates = sorted({value for value in ids if ids.count(value) > 1})
    if duplicates:
        failures.append(f"duplicate HTML id(s): {', '.join(duplicates)}")

    for label, patterns in BLOCKED_VISIBLE_PATTERNS.items():
        if any(re.search(pattern, text, re.I) for pattern in patterns):
            failures.append(f"{label} detected in visible prose")

    if not EXTERNAL_LINK_RE.search(html):
        failures.append("no external evidence/source link found")

    if "sources" not in text:
        failures.append("visible sources section/label missing")

    return failures


def main() -> None:
    all_failures: dict[str, list[str]] = {}
    for route, spec in BRAND_PAGES.items():
        failures = validate(route, spec)
        if failures:
            all_failures[route] = failures

    if all_failures:
        print("FAIL — machine-detectable Brand blockers found")
        for route, failures in all_failures.items():
            print(f"FAIL {route}")
            for failure in failures:
                print(f"  - {failure}")
        raise SystemExit(1)

    print(f"PASS: {len(BRAND_PAGES)} Brand detail pages have no machine-detectable blockers")
    print("NOTE: substantive brand quality remains a brand-analysis-workflow / PUBLISH_REVIEW gate")


if __name__ == "__main__":
    main()

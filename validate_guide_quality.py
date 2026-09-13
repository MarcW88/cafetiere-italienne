#!/usr/bin/env python3
"""Machine-detectable publication blockers for authored /guides/ pages.

Adapted from MarcW88/bloc-notes-numerique/validate_guide_quality.py for the
progressive authoring model used on cafetiere-italienne.be. Placeholder Guide
routes are not considered authored pages; every authored Guide remains
noindex,follow until explicit human validation and indexation approval.
"""
from pathlib import Path
import html as html_lib
import re
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
GUIDES = ROOT / "guides"
SITE_ORIGIN = "https://cafetiere-italienne.be"
INDEXABLE_GUIDE_ROUTES: set[str] = set()

ARTICLE_RE = re.compile(
    r'<article\b[^>]*class="[^"]*guide-article[^"]*"[^>]*>(.*?)</article>',
    re.S | re.I,
)
H1_RE = re.compile(r'<h1\b[^>]*>(.*?)</h1>', re.S | re.I)
TITLE_RE = re.compile(r'<title>(.*?)</title>', re.S | re.I)
META_DESCRIPTION_RE = re.compile(
    r'<meta\b[^>]*name="description"[^>]*content="([^"]*)"[^>]*>', re.I
)
CANONICAL_RE = re.compile(
    r'<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>', re.I
)
ROBOTS_RE = re.compile(
    r'<meta\b[^>]*name="robots"[^>]*content="([^"]+)"[^>]*>', re.I
)
ID_RE = re.compile(r'\bid="([^"]+)"', re.I)
HREF_RE = re.compile(r'<a\b[^>]*href="([^"]+)"', re.I)
TAG_RE = re.compile(r"<[^>]+>", re.S)
SOURCES_SECTION_RE = re.compile(
    r'<section\b[^>]*class="[^"]*guide-sources[^"]*"[^>]*>(.*?)</section>',
    re.S | re.I,
)
EXTERNAL_LINK_RE = re.compile(r'<a\b[^>]*href="https?://', re.I)

PLACEHOLDER_PATTERNS = (
    "Zone de contenu à rédiger.",
    "Lorem ipsum",
    "TODO_CONTENT",
    "CONTENT_PLACEHOLDER",
)


def clean_text(raw: str) -> str:
    raw = TAG_RE.sub(" ", raw)
    raw = html_lib.unescape(raw)
    return re.sub(r"\s+", " ", raw).strip()


def route_for_page(page: Path) -> str:
    return f"/guides/{page.parent.name}/"


def expected_canonical(page: Path) -> str:
    return f"{SITE_ORIGIN}{route_for_page(page)}"


def expected_robots(route: str) -> str:
    return "index,follow" if route in INDEXABLE_GUIDE_ROUTES else "noindex,follow"


def local_target_exists(href: str) -> bool:
    parsed = urlsplit(href)
    if parsed.scheme or parsed.netloc:
        return True
    path = parsed.path
    if not path or path.startswith("#"):
        return True
    if not path.startswith("/"):
        path = "/" + path
    target = ROOT / path.lstrip("/")
    if target.is_dir():
        target = target / "index.html"
    return target.exists()


def inspect(page: Path):
    page_html = page.read_text(encoding="utf-8")
    issues = []
    route = route_for_page(page)

    article_matches = ARTICLE_RE.findall(page_html)
    if len(article_matches) != 1:
        issues.append(f"article.guide-article count={len(article_matches)} (expected 1)")
        article = article_matches[0] if article_matches else ""
    else:
        article = article_matches[0]

    if not clean_text(article):
        issues.append("article.guide-article empty")

    for marker in PLACEHOLDER_PATTERNS:
        if marker.lower() in page_html.lower():
            issues.append(f"placeholder present: {marker}")

    title = TITLE_RE.findall(page_html)
    if len(title) != 1 or not clean_text(title[0]):
        issues.append("missing or empty <title>")

    descriptions = META_DESCRIPTION_RE.findall(page_html)
    if len(descriptions) != 1 or not descriptions[0].strip():
        issues.append("missing or empty meta description")

    h1s = H1_RE.findall(page_html)
    if len(h1s) != 1 or not clean_text(h1s[0]):
        issues.append(f"H1 count={len(h1s)} (expected one non-empty H1)")

    robots = ROBOTS_RE.findall(page_html)
    normalized_robots = [
        ",".join(part.strip().lower() for part in value.split(","))
        for value in robots
    ]
    expected = expected_robots(route)
    if expected not in normalized_robots:
        issues.append(f"robots publication state mismatch: expected {expected}")

    canonicals = CANONICAL_RE.findall(page_html)
    expected_canonical_url = expected_canonical(page)
    if len(canonicals) != 1:
        issues.append(f"canonical count={len(canonicals)} (expected 1)")
    elif canonicals[0] != expected_canonical_url:
        issues.append(f"canonical mismatch: {canonicals[0]} != {expected_canonical_url}")

    ids = ID_RE.findall(page_html)
    duplicates = sorted({value for value in ids if ids.count(value) > 1})
    if duplicates:
        issues.append("duplicate IDs: " + ", ".join(duplicates))
    id_set = set(ids)

    for href in HREF_RE.findall(article):
        if href.startswith("#"):
            anchor = href[1:]
            if anchor and anchor not in id_set:
                issues.append(f"broken in-page anchor: {href}")
            continue
        if not local_target_exists(href):
            issues.append(f"broken internal link: {href}")

    sources = SOURCES_SECTION_RE.findall(article)
    if len(sources) != 1:
        issues.append(f"guide-sources section count={len(sources)} (expected 1)")
    elif not EXTERNAL_LINK_RE.search(sources[0]):
        issues.append("Sources section present but no external source link found")

    return issues


def main():
    pages = []
    for page in sorted(GUIDES.glob("*/index.html")):
        page_html = page.read_text(encoding="utf-8")
        if 'guide-article' in page_html:
            pages.append(page)

    if not pages:
        raise SystemExit("FAIL: no authored Guide page detected")

    failures = {}
    for page in pages:
        issues = inspect(page)
        if issues:
            failures[page.parent.name] = issues

    if failures:
        for slug, issues in failures.items():
            print(f"FAIL {slug}")
            for issue in issues:
                print(f"  - {issue}")
        raise SystemExit(1)

    print(
        f"PASS: {len(pages)} authored Guide route(s) have no machine-detectable "
        "publication blockers and match explicit indexation approval"
    )
    print(
        "NOTE: machine validation does not replace guide-analysis-workflow / "
        "PUBLISH_REVIEW or human editorial judgment."
    )


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
"""Machine-detectable quality blockers for the /guides/ cluster.

This is a port of the bloc-notes-numerique Guide gate, adapted to the current
static HTML and JS source architecture. It deliberately does not award a
content-quality score: substantive intent, evidence, naturality and usefulness
remain PUBLISH_REVIEW responsibilities.
"""

from __future__ import annotations

import html as html_lib
import re
from pathlib import Path
from urllib.parse import urlparse

from publication_indexation import INDEXABLE_GUIDE_ROUTES

ROOT = Path(__file__).resolve().parent
GUIDES = ROOT / "guides"
SITE_ORIGIN = "https://cafetiere-italienne.be"

TITLE_RE = re.compile(r"<title>(.*?)</title>", re.I | re.S)
META_DESC_RE = re.compile(r'<meta\s+name="description"\s+content="([^"]*)"', re.I)
ROBOTS_RE = re.compile(r'<meta\s+name="robots"\s+content="([^"]*)"', re.I)
CANONICAL_RE = re.compile(r'<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>', re.I)
H1_RE = re.compile(r"<h1\b[^>]*>(.*?)</h1>", re.I | re.S)
ID_RE = re.compile(r'\bid="([^"]+)"', re.I)
HREF_RE = re.compile(r'href="([^"]+)"', re.I)
ARTICLE_RE = re.compile(
    r'<article\b[^>]*class="[^"]*(?:guide-article|content-main)[^"]*"[^>]*>(.*?)</article>',
    re.I | re.S,
)
SOURCES_RE = re.compile(r'<section\b[^>]*class="[^"]*guide-sources[^"]*"[^>]*>(.*?)</section>', re.I | re.S)
TAG_RE = re.compile(r"<[^>]+>")

PLACEHOLDERS = (
    "Zone de contenu à rédiger",
    "Gabarit prêt à recevoir",
    "Contenu à rédiger",
    "À compléter",
    "Les contenus éditoriaux seront ajoutés ultérieurement",
)


def strip_tags(value: str) -> str:
    return " ".join(html_lib.unescape(TAG_RE.sub(" ", value)).split())


def route_for_page(page: Path) -> str:
    relative = page.relative_to(ROOT).as_posix()
    if relative == "guides/index.html":
        return "/guides/"
    return "/" + relative[: -len("index.html")]


def expected_robots(route: str) -> str:
    return "index,follow" if route in INDEXABLE_GUIDE_ROUTES else "noindex,follow"


def resolve_internal_target(href: str) -> Path | None:
    if href.startswith(("http://", "https://", "mailto:", "tel:", "#")):
        return None
    clean = href.split("#", 1)[0].split("?", 1)[0]
    if not clean:
        return None
    # The site declares <base href="/">, so both /guides/x/ and guides/x/
    # resolve from the site root.
    target = ROOT / clean.lstrip("/")
    if target.is_dir() or clean.endswith("/"):
        target = target / "index.html"
    return target


def validate_page(page: Path) -> list[str]:
    failures: list[str] = []
    html = page.read_text(encoding="utf-8")
    route = route_for_page(page)
    rel = page.relative_to(ROOT)

    title = TITLE_RE.search(html)
    if not title or not strip_tags(title.group(1)):
        failures.append(f"{rel}: title absent/vide")

    meta = META_DESC_RE.search(html)
    if not meta or not meta.group(1).strip():
        failures.append(f"{rel}: meta description absente/vide")

    h1s = H1_RE.findall(html)
    if len(h1s) != 1 or not strip_tags(h1s[0]):
        failures.append(f"{rel}: exige exactement un H1 non vide, trouvé {len(h1s)}")

    robots = ROBOTS_RE.search(html)
    expected = expected_robots(route)
    if not robots or robots.group(1).lower() != expected:
        failures.append(f"{rel}: robots={robots.group(1) if robots else None!r}, attendu={expected!r}")

    canonicals = CANONICAL_RE.findall(html)
    expected_canonical = f"{SITE_ORIGIN}{route}"
    if len(canonicals) != 1 or canonicals[0] != expected_canonical:
        failures.append(f"{rel}: canonical={canonicals!r}, attendu={[expected_canonical]!r}")

    ids = ID_RE.findall(html)
    duplicates = sorted({item for item in ids if ids.count(item) > 1})
    if duplicates:
        failures.append(f"{rel}: IDs dupliqués {duplicates}")

    for placeholder in PLACEHOLDERS:
        if placeholder.lower() in html.lower():
            failures.append(f"{rel}: placeholder détecté: {placeholder!r}")

    if route == "/guides/":
        if "guide-hub-group" not in html:
            failures.append(f"{rel}: hub Guide non structuré en parcours éditoriaux")
        return failures

    articles = ARTICLE_RE.findall(html)
    if len(articles) != 1:
        failures.append(f"{rel}: exige exactement un article Guide, trouvé {len(articles)}")
        return failures
    article = articles[0]

    # Contextual links must point to existing repository routes.
    for href in HREF_RE.findall(article):
        target = resolve_internal_target(href)
        if target is not None and not target.exists():
            failures.append(f"{rel}: lien contextuel cassé {href!r}")

    # In-page fragments must resolve when they target the same document.
    for href in HREF_RE.findall(article):
        if href.startswith("#") and href[1:] not in ids:
            failures.append(f"{rel}: ancre interne absente {href!r}")

    sources = SOURCES_RE.search(article)
    if sources:
        external = [h for h in HREF_RE.findall(sources.group(1)) if h.startswith(("http://", "https://"))]
        if not external:
            failures.append(f"{rel}: section Sources sans source externe")

    return failures


def main() -> None:
    failures: list[str] = []
    pages = sorted(GUIDES.rglob("index.html"))
    if not pages:
        raise SystemExit("Aucune page Guide trouvée")
    for page in pages:
        failures.extend(validate_page(page))

    if failures:
        print("FAIL Guide quality gate")
        print("\n".join(f"- {item}" for item in failures))
        raise SystemExit(1)

    detail_count = len([p for p in pages if p != GUIDES / "index.html"])
    print(f"PASS Guide quality gate: hub + {detail_count} guide(s), aucun blocker machine")


if __name__ == "__main__":
    main()

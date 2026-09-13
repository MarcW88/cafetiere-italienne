#!/usr/bin/env python3
"""Validate comparison workflow infrastructure and final-review gate coverage."""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
FAIL: list[str] = []
WARN: list[str] = []


def fail(message: str) -> None:
    FAIL.append(message)


def warn(message: str) -> None:
    WARN.append(message)


def read(path: str) -> str:
    fp = ROOT / path
    if not fp.exists():
        fail(f"missing required workflow file: {path}")
        return ""
    return fp.read_text(encoding="utf-8")


CONFIG_PATH = "comparison-workflow.config.yaml"
ANALYSIS_PATH = ".agents/skills/comparison-analysis-workflow/SKILL.md"
CONTENT_PATH = ".agents/skills/comparison-content-workflow/SKILL.md"
GEO_PATH = ".agents/skills/geo-aeo-comparison/SKILL.md"
REGISTRY_PATH = ".content/products/registry.json"

config = read(CONFIG_PATH)
analysis = read(ANALYSIS_PATH)
content = read(CONTENT_PATH)
geo = read(GEO_PATH)
registry_raw = read(REGISTRY_PATH)

required_config_tokens = {
    "80/20 minimum": "min_existing_skill_share: 0.80",
    "SEO content audit": "seo-content-audit",
    "SEO keyword": "seo-keyword",
    "evidence reviews": "evidence-based-reviews",
    "fact check": "fact-check",
    "affiliate value": "affiliate-value",
    "GEO/AEO": "geo-aeo-comparison",
    "anti AI slop": "anti-ai-slop",
    "humanizer": "humanizer",
    "on-page SEO": "seo-onpage",
    "technical SEO": "seo-technical",
    "internal linking": "internal-linking-audit",
    "editorial QA": "editorial-qa",
    "product registry": ".content/products/registry.json",
    "draft noindex": 'draft_robots: "noindex,follow"',
    "affiliate independence": "affiliate_commission_must_not_affect_candidates_or_ranking: true",
}
for label, token in required_config_tokens.items():
    if token not in config:
        fail(f"config missing {label}: {token}")

required_analysis_tokens = [
    "seo-content-audit",
    "seo-keyword",
    "jobs-to-be-done",
    "evidence-based-reviews",
    "fact-check",
    "affiliate-value",
    "geo-aeo-comparison",
    "anti-ai-slop",
    "seo-onpage",
    "seo-technical",
    "internal-linking-audit",
    "editorial-qa",
    ".content/products/registry.json",
    "PUBLISH_REVIEW",
]
for token in required_analysis_tokens:
    if token not in analysis:
        fail(f"analysis workflow missing required gate/reference: {token}")

required_content_tokens = [
    "seo-keyword",
    "jobs-to-be-done",
    "seo-content-audit",
    "evidence-based-reviews",
    "fact-check",
    "affiliate-value",
    "content-brief-authoring",
    "content-and-copy",
    "geo-aeo-comparison",
    "humanizer",
    "general-writing",
    "anti-ai-slop",
    "internal-linking-audit",
    "seo-onpage",
    "seo-technical",
    "editorial-qa",
    ".content/products/registry.json",
    "PUBLISH_REVIEW",
]
for token in required_content_tokens:
    if token not in content:
        fail(f"content workflow missing required gate/reference: {token}")

if "draft_noindex_is_not_geo_failure" not in config:
    fail("GEO workflow must explicitly preserve draft noindex semantics")
if "noindex" not in geo.lower():
    fail("GEO skill must explicitly address draft noindex")

try:
    registry = json.loads(registry_raw) if registry_raw else {}
except json.JSONDecodeError as exc:
    fail(f"invalid product registry JSON: {exc}")
    registry = {}

products = registry.get("products", {}) if isinstance(registry, dict) else {}
if not isinstance(products, dict) or not products:
    fail("product registry must contain a non-empty products object")

for product_id, product in products.items():
    if not isinstance(product, dict):
        fail(f"registry product is not an object: {product_id}")
        continue
    for field in ("name", "brand", "identity_scope", "evidence_status"):
        if not product.get(field):
            fail(f"registry product missing {field}: {product_id}")
    sources = product.get("primary_sources", [])
    if not isinstance(sources, list) or not sources:
        fail(f"registry product missing primary source: {product_id}")

comparison_dir = ROOT / ".content" / "comparisons"
for fp in sorted(comparison_dir.glob("*.json")):
    try:
        data = json.loads(fp.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(f"{fp.name}: invalid JSON ({exc})")
        continue

    universe = data.get("product_universe") or []
    for candidate in universe:
        if not isinstance(candidate, dict):
            fail(f"{fp.name}: malformed product candidate")
            continue
        pid = candidate.get("id")
        if not pid:
            fail(f"{fp.name}: candidate missing id")
        elif pid not in products:
            fail(f"{fp.name}: candidate absent from central registry ({pid})")

    if data.get("affiliate_commission_used_in_ranking") is not False:
        fail(f"{fp.name}: affiliate commission independence must be explicit false")

    # A page cannot graduate to human validation without a traceable final gate.
    if data.get("status") == "READY_FOR_HUMAN_VALIDATION":
        slug = data.get("slug") or fp.stem
        review_path = ROOT / ".content" / "reviews" / f"{slug}.comparison-review.md"
        if not review_path.exists():
            fail(f"{fp.name}: READY_FOR_HUMAN_VALIDATION without {review_path.relative_to(ROOT)}")
            continue
        review = review_path.read_text(encoding="utf-8")
        required_review_markers = [
            "PRODUCTS: PASS",
            "EVIDENCE: PASS",
            "AFFILIATION: PASS",
            "GEO: PASS",
            "ANTI_AI_SLOP: PASS",
            "SEO: PASS",
            "INTERNAL_LINKING: PASS",
            "TECHNICAL: PASS",
            "EDITORIAL_QA: PASS",
            "PASS — READY_FOR_HUMAN_VALIDATION",
        ]
        for marker in required_review_markers:
            if marker not in review:
                fail(f"{fp.name}: final review missing marker {marker}")

if WARN:
    print("\n".join(f"WARN {message}" for message in WARN))
if FAIL:
    print("\n".join(f"FAIL {message}" for message in FAIL))
    sys.exit(1)

print("PASS: comparison workflow contract includes product, evidence, affiliate, GEO, anti-AI-slop, SEO, internal-linking and technical gates")
print(f"PASS: {len(products)} product registry entries are structurally traceable")
print("PASS: no comparison can reach READY_FOR_HUMAN_VALIDATION without explicit multi-gate review markers")

#!/usr/bin/env python3
"""Validate the persisted MODEL v2 editorial workflow.

This validator intentionally does not decide whether a claim is true or whether an
editorial judgement is good. Those remain agent/human tasks. It verifies that the
required evidence/decision artifacts exist, are internally wired, and that a PASS
review is not older than the inputs it claims to review.
"""

from __future__ import annotations

import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RECORDS_DIR = ROOT / ".content/models/records"
REGISTRY_PATH = ROOT / ".content/products/registry.json"

REQUIRED_ARTIFACTS = (
    "research",
    "audit",
    "evidence",
    "ledger",
    "decision",
    "brief",
    "post_draft",
    "review",
)

# A methodology change invalidates an older editorial PASS until the model is
# reviewed again under the new method. Keep this list semantic, not operational:
# editing the CI YAML itself should not invalidate editorial work.
GLOBAL_REVIEW_INPUTS = (
    "model-workflow.config.yaml",
    ".agents/skills/model-analysis-workflow/SKILL.md",
    ".agents/skills/model-content-workflow/SKILL.md",
    ".content/products/registry.json",
    "scripts/model-content.mjs",
)

FAIL: list[str] = []


def fail(slug: str, message: str) -> None:
    FAIL.append(f"{slug}: {message}")


def load_json(path: Path, label: str):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        FAIL.append(f"{label}: missing file {path.relative_to(ROOT)}")
    except json.JSONDecodeError as exc:
        FAIL.append(f"{label}: invalid JSON in {path.relative_to(ROOT)}: {exc}")
    return None


def repo_path(raw: str) -> Path | None:
    candidate = (ROOT / raw).resolve()
    try:
        candidate.relative_to(ROOT.resolve())
    except ValueError:
        return None
    return candidate


def text_has(path: Path, tokens: tuple[str, ...], slug: str, label: str) -> str:
    text = path.read_text(encoding="utf-8")
    for token in tokens:
        if token not in text:
            fail(slug, f"{label} missing required marker: {token}")
    return text


def git_last_commit(path: Path) -> str | None:
    rel = str(path.relative_to(ROOT))
    proc = subprocess.run(
        ["git", "rev-list", "-1", "HEAD", "--", rel],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    sha = proc.stdout.strip()
    return sha or None


def is_ancestor(older: str, newer: str) -> bool:
    proc = subprocess.run(
        ["git", "merge-base", "--is-ancestor", older, newer],
        cwd=ROOT,
        text=True,
        capture_output=True,
        check=False,
    )
    return proc.returncode == 0


registry = load_json(REGISTRY_PATH, "registry")
products = registry.get("products", {}) if isinstance(registry, dict) else {}

if not RECORDS_DIR.exists():
    FAIL.append("records: .content/models/records is missing")
    records = []
else:
    records = sorted(RECORDS_DIR.glob("*.json"))

if not records:
    FAIL.append("records: no structured MODEL records found")

seen_urls: set[str] = set()

for record_path in records:
    record = load_json(record_path, record_path.stem)
    if not isinstance(record, dict):
        continue

    slug = str(record.get("slug") or record_path.stem)

    if record.get("schema_version") != 2:
        fail(slug, "record schema_version must be 2")
    if record.get("workflow_version") != 2:
        fail(slug, "record workflow_version must be 2")
    if record.get("page_type") != "PRODUCT":
        fail(slug, "page_type must be PRODUCT")

    expected_url = f"/modeles/{slug}/"
    url = record.get("url")
    if url != expected_url:
        fail(slug, f"record URL must be {expected_url}, found {url!r}")
    if isinstance(url, str):
        if url in seen_urls:
            fail(slug, f"duplicate model URL {url}")
        seen_urls.add(url)

    product_key = record.get("product_key")
    product = products.get(product_key) if isinstance(products, dict) else None
    if not isinstance(product, dict):
        fail(slug, f"product_key {product_key!r} missing from product registry")
    else:
        for record_key, registry_key in (
            ("name", "name"),
            ("brand", "brand"),
            ("page_type", "page_type"),
            ("url", "internal_url"),
        ):
            if record.get(record_key) != product.get(registry_key):
                fail(
                    slug,
                    f"registry mismatch for {record_key}: record={record.get(record_key)!r} registry={product.get(registry_key)!r}",
                )

    artifacts = record.get("artifacts")
    if not isinstance(artifacts, dict):
        fail(slug, "artifacts map missing")
        continue

    artifact_paths: dict[str, Path] = {}
    for key in REQUIRED_ARTIFACTS:
        raw = artifacts.get(key)
        if not isinstance(raw, str) or not raw:
            fail(slug, f"artifact pointer missing: {key}")
            continue
        path = repo_path(raw)
        if path is None:
            fail(slug, f"artifact path escapes repository: {raw}")
            continue
        artifact_paths[key] = path
        if not path.is_file():
            fail(slug, f"artifact file missing: {raw}")

    source_files = record.get("source_files")
    if not isinstance(source_files, list) or not source_files:
        fail(slug, "source_files must contain the reviewed content source(s)")
        source_files = []

    source_paths: list[Path] = []
    for raw in source_files:
        if not isinstance(raw, str):
            fail(slug, f"invalid source_files entry: {raw!r}")
            continue
        path = repo_path(raw)
        if path is None or not path.is_file():
            fail(slug, f"tracked content source missing: {raw}")
            continue
        source_paths.append(path)

    # Structural semantic markers: strict enough to prove the pass happened, but
    # deliberately not a machine attempt to judge editorial truth.
    if artifact_paths.get("audit", Path()).is_file():
        text_has(
            artifact_paths["audit"],
            ("Workflow version : 2", "search intent", "## Publication"),
            slug,
            "audit",
        )

    if artifact_paths.get("evidence", Path()).is_file():
        text_has(
            artifact_paths["evidence"],
            ("Workflow version : 2", "## Primary evidence", "## Decision impact"),
            slug,
            "evidence packet",
        )

    if artifact_paths.get("ledger", Path()).is_file():
        text_has(
            artifact_paths["ledger"],
            ("Workflow version : 2", "| Claim | Evidence | Status | Source | Decision impact |"),
            slug,
            "evidence ledger",
        )

    if artifact_paths.get("decision", Path()).is_file():
        text_has(
            artifact_paths["decision"],
            (
                "Workflow version : 2",
                "## JTBD",
                "## Push / Pull / Anxiety / Habit",
                "## Big Hire",
                "## Little Hire",
                "## Decision criteria",
                "## Editorial thesis",
            ),
            slug,
            "decision artifact",
        )

    if artifact_paths.get("brief", Path()).is_file():
        text_has(
            artifact_paths["brief"],
            (
                "Workflow version : 2",
                "## Target query / cluster",
                "## Search intent",
                "## Reader / JTBD",
                "## Decision to resolve",
                "## Scope",
                "## Decision criteria",
                "## Required evidence / entities",
                "## Internal-link handoffs",
                "## Anti-patterns",
                "## Editorial angle",
                "## Success criteria",
                "## Proposed outline",
            ),
            slug,
            "content brief",
        )

    if artifact_paths.get("post_draft", Path()).is_file():
        text_has(
            artifact_paths["post_draft"],
            (
                "Workflow version : 2",
                "Status: PASS",
                "## Claims rechecked",
                "## Unsupported-claim check",
                "## Decision coverage",
            ),
            slug,
            "post-draft fact-check",
        )

    review_path = artifact_paths.get("review")
    if review_path and review_path.is_file():
        review_text = text_has(
            review_path,
            (
                "Workflow version : 2",
                "Status : `PASS — READY_FOR_HUMAN_VALIDATION`",
                "## Machine gates",
                "validate_models.py",
                "validate_model_workflow.py",
                "## Research-to-draft coverage",
                "## Verdict",
            ),
            slug,
            "PUBLISH_REVIEW",
        )
        if re.search(r"\|[^\n|]+\|\s*`MISSING`\s*\|", review_text):
            fail(slug, "PUBLISH_REVIEW contains a decision-relevant MISSING row")

        # Freshness gate. The review must have been committed after the artifacts,
        # model source and semantic methodology it reviews.
        review_commit = git_last_commit(review_path)
        if not review_commit:
            fail(slug, "cannot resolve review commit for freshness check")
        else:
            freshness_inputs: list[Path] = [record_path]
            freshness_inputs.extend(
                path for key, path in artifact_paths.items() if key != "review" and path.is_file()
            )
            freshness_inputs.extend(source_paths)
            for raw in GLOBAL_REVIEW_INPUTS:
                path = repo_path(raw)
                if path is None or not path.is_file():
                    fail(slug, f"global review input missing: {raw}")
                else:
                    freshness_inputs.append(path)

            checked: set[Path] = set()
            for input_path in freshness_inputs:
                if input_path in checked:
                    continue
                checked.add(input_path)
                input_commit = git_last_commit(input_path)
                if not input_commit:
                    fail(slug, f"cannot resolve commit for freshness input {input_path.relative_to(ROOT)}")
                    continue
                if not is_ancestor(input_commit, review_commit):
                    fail(
                        slug,
                        f"stale PUBLISH_REVIEW: {input_path.relative_to(ROOT)} changed after the review",
                    )

if FAIL:
    print("\n".join("FAIL " + item for item in FAIL))
    sys.exit(1)

print(f"PASS: {len(records)} MODEL v2 record(s) have complete persisted workflow artifacts")
print("PASS: product registry identities and record URLs are aligned")
print("PASS: decision artifacts include JTBD + forces + Big/Little Hire + criteria")
print("PASS: content briefs and post-draft fact-checks are persisted")
print("PASS: every PUBLISH_REVIEW is newer than its tracked evidence/content/methodology inputs")
print("NOTE: this validator checks workflow integrity, not the truth of editorial claims")

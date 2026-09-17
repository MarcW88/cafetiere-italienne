# Model analysis — Bialetti Venus

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

- `validate_models.py` controls rendered page, canonical, robots and link blockers.
- `validate_model_workflow.py` controls v2 artifacts and freshness.

The page remains `noindex,follow`.

## Artifact / decision gate

PASS — research, audit, evidence packet, ledger, decision artifact, brief, post-draft and source files remain aligned. JTBD still centers on choosing a Venus whose real volume, size and hob compatibility fit the use case.

## Evidence / contradiction gate

PASS — current Bialetti care guidance overrides older dishwasher claims; anecdotal detection of a 2-cup Venus on isolated induction hobs remains a user signal, not official compatibility. No Venus-specific evidence changed during the Moka Induction retest.

## Research-to-draft coverage

| Decision element | Status | Draft consumption |
|---|---|---|
| 2 cup ≈85 ml and not officially induction compatible | `USED` | size matrix + induction hard gate |
| 4/6 cup volumes and base diameters | `USED` | size matrix + hob detection |
| nominal volume is approximate | `USED` | v2 clarification |
| hand wash / dishwasher contradiction | `USED` | care section |
| spare parts by family and size | `USED` | parts section |
| Moka Induction construction difference | `USED` | sibling comparison |
| capacity / dosage / grind / generic induction | `HANDOFF` | dedicated guides |
| decorative finishes and fixed price | `EXCLUDED` | no decision impact |

No decision-relevant coverage blocker remains.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness note: review refreshed after `model-workflow.config.yaml` registered the Moka Induction v2 reviewed override. No Venus-specific input changed.
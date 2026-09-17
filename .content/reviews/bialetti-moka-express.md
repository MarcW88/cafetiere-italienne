# Model analysis — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

- `validate_models.py` controls rendered page, canonical, robots and link blockers.
- `validate_model_workflow.py` controls v2 artifacts and freshness.

The page remains `noindex,follow`.

## Artifact / decision gate

PASS — research, audit, evidence packet, ledger, decision artifact, brief, post-draft and both reviewed content sources remain aligned. The previous retest correction limiting the official 13 cm induction plate to Moka Express sizes up to 6 cups remains consumed by the draft.

## Evidence / contradiction gate

PASS — the specific induction-plate product constraint takes precedence over broader FAQ wording. No Moka Express-specific evidence changed during the Moka Induction retest.

## Research-to-draft coverage

| Decision element | Status | Draft consumption |
|---|---|---|
| no direct induction | `USED` | opening hard gate |
| official induction plate limited to up to 6 cups | `USED` | opening + induction routes |
| 9/12/18 cups not covered by that official adapter statement | `USED` | explicit exclusion |
| sizes and prepared volumes | `USED` | size matrix |
| spare-parts dimensional differences | `USED` | parts section |
| hand wash / handle care | `USED` | care section |
| detailed capacity / dosage / materials / siblings | `HANDOFF` | dedicated cluster pages |
| history, fixed price, aluminium=taste claim | `EXCLUDED` | no decision value / unsupported |

No decision-relevant coverage blocker remains.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness note: review refreshed after `model-workflow.config.yaml` registered the Moka Induction v2 reviewed override. No Moka Express-specific input changed.
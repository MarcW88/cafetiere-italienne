# Model analysis — Alessi 9090

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

- `validate_models.py` controls rendered page, canonical, robots and link blockers.
- `validate_model_workflow.py` controls v2 artifacts and freshness.

The page remains `noindex,follow`.

## Artifact / decision gate

PASS — research, audit, evidence packet, ledger, decision artifact, brief, post-draft and reviewed content source remain aligned. The JTBD still tests whether the premium corresponds to mechanical/material differences the reader actually values.

## Evidence / contradiction gate

PASS — 9090 construction, lever mechanism, sizes, induction caveat, spare parts and the 1979/1980 historical discrepancy remain correctly qualified. No 9090-specific evidence changed during the Moka Induction retest.

## Research-to-draft coverage

| Decision element | Status | Draft consumption |
|---|---|---|
| stainless construction + magnetic base | `USED` | construction / induction |
| lever closure, wider base and anti-drip spout | `USED` | functional differences |
| 1/3/6/10 cup size matrix | `USED` | size decision |
| 1-cup induction detection threshold | `USED` | hard gate |
| dedicated spare parts | `USED` | parts section |
| 9090/3 CP edition differences | `USED` | exact-variant section |
| capacity / induction / brand / comparisons | `HANDOFF` | dedicated cluster pages |
| awards as performance proof, fixed price, design=taste claim | `EXCLUDED` | irrelevant or unsupported |

No decision-relevant coverage blocker remains.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness note: review refreshed after `model-workflow.config.yaml` registered the Moka Induction v2 reviewed override. No Alessi 9090-specific input changed.
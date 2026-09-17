# Model analysis — Bialetti Brikka

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

- `validate_models.py` controls rendered page, canonical, robots, external evidence, internal links and machine-detectable blockers.
- `validate_model_workflow.py` controls registry identity, structured record, all v2 artifacts and Git freshness.

The page must remain `noindex,follow` until explicit human validation and a separate indexing instruction.

## Artifact / decision gate

PASS — research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, reviewed source and post-draft fact-check are persisted and aligned with `/modeles/bialetti-brikka/`.

The JTBD is not “buy a Brikka”. It is deciding whether the user actually values the valve / more concentrated moka enough to accept a more specific preparation protocol, while choosing the correct hob, volume and part generation.

## Evidence / contradiction gate

PASS — current classic Brikka and verified Brikka Induction specs are kept separate.

- classic current: 2 cup ≈90 ml / 120 ml water; 4 cup ≈150 ml / 170 ml water; aluminium; no direct induction;
- Brikka Induction verified: 4 cup ≈160 ml / 170 ml water; bi-layer base; direct induction;
- older funnel generation 2016–2023 is not merged with current 2024 funnel dimensions;
- manufacturer « crema » / concentration claims stay attributed and are not converted into an independent espresso-performance claim.

## Flexible-capacity gate

PASS / not applicable — no verified reducer or manufacturer-supported half-capacity mode was found for the Brikka references in scope. The page therefore does not invent a flexible-capacity mode and instead preserves the manufacturer-specific water amount for each verified size.

## Research-to-draft coverage

| Decision element | Status | Draft consumption |
|---|---|---|
| classic Brikka aluminium construction | `USED` | choice matrix + induction section |
| classic 2 cup ≈90 ml / base ≈8.6 cm | `USED` | choice matrix |
| classic 4 cup ≈150 ml / base ≈10.2 cm | `USED` | choice matrix |
| classic not direct induction | `USED` | opening hard gate + induction section |
| classic induction adapter possible | `USED` | induction alternatives |
| 120 ml water for classic 2 cup | `USED` | protocol hard gate |
| 170 ml water for classic 4 cup | `USED` | protocol hard gate |
| Brikka Induction 4 ≈160 ml / base ≈11.5 cm | `USED` | choice matrix + induction section |
| Brikka Induction bi-layer construction | `USED` | induction section |
| 170 ml water for Brikka Induction 4 | `USED` | protocol hard gate |
| valve / more concentrated / foam claim | `USED` | difference section, explicitly qualified |
| no espresso-crema guarantee | `USED` | limitation / contraindication |
| user confusion around water amount | `USED` | resolved by explicit manufacturer quantities, not promoted as fact |
| funnel generation 2016–2023 vs 2024 | `USED` | parts section |
| 2 cup funnel dimensions old/current | `USED` | parts matrix |
| 4 cup funnel dimensions old/current | `USED` | parts matrix |
| Brikka 2 uses Moka 3 ring/filter pack | `USED` | parts hard gate |
| Brikka 4 uses Moka 6 ring/filter pack | `USED` | parts hard gate |
| hand wash / first 3 brews / handle care | `USED` | care section |
| general capacities | `HANDOFF` | `/capacites/` |
| generic induction | `HANDOFF` | induction guide / adapter page |
| generic dosage and grind | `HANDOFF` | dedicated guides |
| Bialetti range | `HANDOFF` | brand hub |
| fixed price | `EXCLUDED` | volatile |
| exact pressure value | `EXCLUDED` | not documented in retained evidence |
| global exhaustive Brikka Induction size range | `EXCLUDED` | not sufficiently evidenced across markets |
| community anecdotes as product specs | `EXCLUDED` | signal only |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — the page adds value beyond merchant copy by preventing five concrete mistakes: buying classic Brikka for direct induction, using a generic water-to-valve rule, choosing 2/4 cups without reading prepared volume, ordering a funnel for the wrong generation, or ordering a ring/filter pack by nominal Brikka cup count.

The page remains structurally distinct from Moka Express and Moka Induction because its core decision is valve/protocol plus variant identity, not simply material or hob compatibility.

## Trust / SEO / technical gate

PASS editorially — no fake hands-on language, no independent claim of superior taste, no price fixation, no unsupported pressure number and no community signal promoted to product fact.

Title/H1/canonical/robots, external sources, internal links and rendered output remain subject to the machine run.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness gate: this review is committed after the Brikka research, audit, evidence packet, ledger, decision artifact, content brief, source script, registry entry, structured record, post-draft check and updated MODEL source-of-truth configuration.

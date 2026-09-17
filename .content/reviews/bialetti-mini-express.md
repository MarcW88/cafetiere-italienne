# Model analysis — Bialetti Mini Express

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

- `validate_models.py` controls rendered page, canonical, robots, external evidence, internal links and machine-detectable blockers.
- `validate_model_workflow.py` controls registry identity, structured record, all v2 artifacts and Git freshness.

The page must remain `noindex,follow` until explicit human validation and a separate indexing instruction.

## Artifact / decision gate

PASS — research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, reviewed source and post-draft fact-check are persisted and aligned with `/modeles/bialetti-mini-express/`.

The JTBD is not “buy a small Bialetti”. The Big Hire is direct service into two small cups; the decision then depends on real volume, hob, exact set and part scope.

## Evidence / contradiction gate

PASS — classic and Induction references are kept separate.

- classic verified: aluminium, 2 cup ≈90 ml total, base ≈8.0 cm, no direct induction;
- Induction verified: 2 cup ≈90 ml total, bi-layer base, direct induction;
- induction-base dimensions ≈9.2–9.5 cm remain approximate across regional sources rather than flattened to a false universal exact value;
- cup inclusion is attached to the exact set, not generalized across the family;
- user reports of uneven dual-spout flow remain `OBSERVED` signals and are not promoted to product specifications.

## Flexible-capacity gate

PASS / not applicable — no verified reducer or manufacturer-supported one-cup / half-capacity mode was found for the Mini Express references in scope. The page therefore treats the verified product as a two-cup system delivering ≈90 ml total and does not invent a single-spout operating mode.

## Research-to-draft coverage

| Decision element | Status | Draft consumption |
|---|---|---|
| classic aluminium construction | `USED` | opening choice matrix |
| classic 2 cup ≈90 ml / base ≈8.0 cm | `USED` | choice matrix + volume section |
| direct service into two cups | `USED` | core differentiation / Big Hire |
| support plate warms cups during brewing | `USED` | service-value section, without extraction claim |
| classic not direct induction | `USED` | opening hard gate + induction section |
| classic induction adapter possible | `USED` | induction alternative |
| water just below valve / no tamp / low-medium heat | `USED` | use section |
| hand wash / first three brews | `USED` | care section |
| Induction 2 cup ≈90 ml | `USED` | choice matrix |
| Induction bi-layer construction | `USED` | choice matrix + induction section |
| Induction base ≈9.2–9.5 cm and hob detection constraint | `USED` | induction section |
| verified Induction set includes two cups | `USED` | exact-set section |
| cup inclusion varies by exact reference | `USED` | exact-set section |
| classic 2-cup ring/filter compatibility | `USED` | parts section |
| same spare kit for Mini Express Induction | `EXCLUDED` | evidence insufficient; limitation stated |
| community signal of uneven dual-spout flow | `USED` | qualified limitation, not a spec |
| generic capacities | `HANDOFF` | `/capacites/` |
| generic induction | `HANDOFF` | induction guide / adapter page |
| generic dosage and grind | `HANDOFF` | dedicated guides |
| Bialetti range | `HANDOFF` | brand hub |
| better taste / better extraction claim | `EXCLUDED` | unsupported |
| exact universal induction-base diameter | `EXCLUDED` | regional measurements differ slightly |
| fixed price | `EXCLUDED` | volatile |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — the page adds value beyond merchant copy by preventing four concrete mistakes: reading “2 cups” as two large drinks, buying the classic version for direct induction, assuming every set includes cups, or generalizing classic spare-parts compatibility to the Induction version.

The page remains structurally distinct from Moka Express, Brikka and Moka Induction because its core decision is direct dual-cup service and small-volume fit, not valve performance or induction alone.

## Trust / SEO / technical gate

PASS editorially — no fake hands-on language, no independent claim of superior taste, no guaranteed 50/50 flow claim, no price fixation and no community signal promoted to product fact.

Title/H1/canonical/robots, external sources, internal links and rendered output remain subject to the machine run after merge.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness gate: this review is committed after the Mini Express research, audit, evidence packet, ledger, decision artifact, content brief, source script, registry entry, structured record, post-draft check and updated MODEL source-of-truth configuration.

# PUBLISH_REVIEW — Cafetière italienne 12 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-12-tasses/`
Workflow: `.agents/skills/capacity-decision-workflow/SKILL.md`
Status: **MACHINE_RECHECK_PENDING**

## Workflow order evidence

1. AUDIT persisted first: `.content/capacities/audits/cafetiere-italienne-12-tasses-2026-09-13.md`
2. Evidence + fact-check persisted second: `.content/capacities/evidence-cafetiere-italienne-12-tasses-exact-2026-09-13.md`
3. Thinking Toolkit decision artifact persisted at the required path: `.content/capacities/decisions/cafetiere-italienne-12-tasses.md`
4. Affiliate-value gate persisted before the brief.
5. Content brief persisted after the decision artifact.
6. Draft/light update produced only after those artifacts.

## Post-draft fact-check

PASS.

Retained claims are supported by current manufacturer sources:
- Bialetti Moka Express 12: ~595 ml approximate brewed coffee volume; ~28.5 cm total height; ~13.5 cm base width; not direct induction;
- Bialetti Moka Express 9: ~410 ml approximate brewed volume;
- Cecotec Mokclassic 1200 Shiny: 600 ml nominal capacity; induction/gas/electric/ceramic; dimensions 21 x 12.5 x 26 cm;
- Forever Miss Moka Prestige item 120117: 12-cup variant, ~717 ml water quantity, gas/electric/ceramic glass/halogen, induction not listed;
- HAEGER Moka Pot 12 CP-12A.009A: current 12-cup aluminium variant for gas/electric/ceramic.

The draft does not rewrite water quantity or nominal capacity as brewed yield. It does not publish `12 cups = 600 ml` as a universal conversion.

## Internal-linking-audit

PASS.

Contextual handoffs:
- `/capacites/` for the central capacity decision;
- `/capacites/cafetiere-italienne-10-tasses/` when ~0.46–0.50 L is closer to the need;
- `/comparatifs/cafetiere-italienne-induction/` when cooktop becomes primary;
- `/comparatifs/` when product-level criteria begin.

No link quota or irrelevant cross-linking added.

## Humanizer

PASS after review.

- no fake hands-on;
- no promotional first-person authority;
- no vague expert attribution;
- no decorative long-dash rhythm;
- technical metric boundaries remain next to claims;
- prose keeps the LIGHT_UPDATE scope rather than inflating the page.

## General-writing

PASS.

The page answers the ml question immediately, explains only the decision-relevant distinctions, and stops at the product-comparison boundary.

## Anti-AI-slop

PASS.

- no symmetrical mini-reviews;
- no generic FAQ/conclusion padding;
- no product winner or score;
- the central distinction is specific to the 12-cup evidence: brewed volume vs nominal capacity vs water quantity;
- existing useful 9/10/12 logic is preserved rather than rewritten for novelty.

## SEO on-page

PASS editorially.

- title/H1 target `cafetière italienne 12 tasses` + ml intent;
- answer-first opening includes the claim boundary;
- meta describes the actual decision rather than a universal conversion;
- headings follow the user decision;
- adjacent 10-cup handoff remains explicit.

## SEO technical

Pending machine build recheck.

Expected:
- canonical `/capacites/cafetiere-italienne-12-tasses/`;
- `noindex,follow` preserved;
- valid generated HTML;
- no broken internal links;
- other reviewed capacity HTML unchanged.

## SEO best-practices

PASS editorially.

No keyword stuffing, doorway behavior, unsupported structured-data claims or deceptive review language introduced.

## GEO / AEO

PASS.

- direct answer is extractable;
- exact entities and units are named;
- each numerical claim keeps its metric label;
- uncertainty is local to the claim;
- the decision rule can be quoted without turning the cup label into a false standard.

## Editorial QA

PASS editorially.

The page keeps a distinct large-capacity role and does not cannibalize product comparisons.

## Publication state

`KEEP_NOINDEX`

No automatic indexation or monetization activation. Final status becomes `PASS — READY_FOR_HUMAN_VALIDATION` only after machine validation.
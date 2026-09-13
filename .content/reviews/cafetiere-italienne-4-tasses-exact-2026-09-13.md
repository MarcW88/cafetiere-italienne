# PUBLISH_REVIEW — Cafetière italienne 4 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-4-tasses/`
Workflow: `.agents/skills/capacity-decision-workflow/SKILL.md`
Status: **MACHINE_RECHECK_PENDING**

## Workflow order evidence

1. AUDIT persisted first: `.content/capacities/audits/cafetiere-italienne-4-tasses-2026-09-13.md`
2. Evidence + fact-check persisted second: `.content/capacities/evidence-cafetiere-italienne-4-tasses-exact-2026-09-13.md`
3. Thinking Toolkit decision artifact persisted at the required path: `.content/capacities/decisions/cafetiere-italienne-4-tasses.md`
4. Affiliate-value gate persisted before the brief.
5. Content brief persisted after the decision artifact.
6. Draft produced only after those artifacts.

## Post-draft fact-check

PASS.

Claims retained in the draft are supported by manufacturer sources:
- Moka Induction 4: ~150 ml approximate brewed coffee volume, base ~10 cm, induction caveat;
- Venus 4: ~170 ml approximate brewed coffee volume, base ~9.5 cm, induction caveat;
- Moka Express 4: ~185 ml approximate brewed coffee volume;
- Cecotec Moking 400: 200 ml nominal capacity and advertised cooktop compatibilities;
- Grønenberg 4: 200 ml and induction field from Ø 9.5 cm;
- Moka Express 3: ~130 ml and 6: ~250 ml used only as Bialetti-specific adjacent landmarks.

No nominal capacity is rewritten as guaranteed brewed yield. No universal `4 tasses = X ml` claim remains.

## Internal-linking-audit

PASS.

Contextual links serve distinct next questions:
- `/capacites/` for the capacity hub;
- `/capacites/cafetiere-italienne-6-tasses/` when the target volume exceeds the 4-cup zone;
- `/comparatifs/cafetiere-italienne-induction/` when cooktop compatibility becomes primary;
- `/comparatifs/` when the next decision is product-level.

No link is added merely to satisfy a quota.

## Humanizer

PASS after review.

- no fake first-person testing;
- no promotional tone;
- no vague expert attribution;
- no decorative em-dash rhythm;
- claims remain attached to named manufacturers and exact variants;
- technical distinctions between brewed volume and capacity are preserved.

## General-writing

PASS.

The page leads with the decision, keeps the language plain, avoids a generic conclusion and stops when the capacity decision is resolved.

## Anti-AI-slop

PASS.

The page is not structured as repeated product mini-reviews. The central reasoning is unique to this URL: the same 4-cup commercial label currently spans materially different published quantities. The compact product table appears late as evidence, not as the page architecture.

## SEO on-page

PASS.

- title: `Cafetière italienne 4 tasses : combien de ml ?`
- H1 matches the decision/query without stuffing;
- meta describes the real decision and current verified range;
- headings follow reader questions rather than a fixed template;
- internal links route adjacent intent cleanly.

## SEO technical

Pending machine build recheck.

Expected:
- canonical `/capacites/cafetiere-italienne-4-tasses/`;
- `noindex,follow` preserved;
- valid generated HTML;
- no broken internal links.

## GEO / AEO

PASS.

- answer-first statement includes the claim boundary;
- exact entities and units are named;
- manufacturer metric types remain explicit;
- uncertainty is placed next to the claim;
- the page provides extractable decision rules without claiming a universal conversion.

## Editorial QA

PASS editorially.

The page answers a distinct question, remains useful without affiliate links, does not rank products, and hands off correctly once the reader moves from capacity to product choice.

## Publication state

`KEEP_NOINDEX`

No automatic indexation and no monetization activation. Final status will become `PASS — READY_FOR_HUMAN_VALIDATION` only after machine build/check/validator success.

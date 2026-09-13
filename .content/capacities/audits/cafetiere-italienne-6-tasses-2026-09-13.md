# AUDIT — Cafetière italienne 6 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-6-tasses/`
Workflow: `.agents/skills/capacity-decision-workflow/SKILL.md`
Mode: AUDIT

## 1. Current role

The page should help the reader decide whether the nominal `6 tasses` tier corresponds to the amount they actually want to prepare. It must not choose a best 6-cup product.

## 2. Evidence available / missing

Available:
- current 6-tasses page and neighboring 4/10-tasses pages;
- cluster audit dated 2026-09-13;
- current manufacturer documentation for Bialetti, CRISTEL, Cecotec and Grønenberg;
- induction comparison for the product-level handoff.

Missing:
- page-level GSC query/click/impression data;
- conversion data;
- backlink data.

These gaps prevent performance conclusions but do not block an editorial-role and overlap audit.

## 3. Strongest existing value to preserve

- the page correctly rejects a universal `6 tasses = 250 ml` conversion;
- it distinguishes approximate brewed volume from nominal capacity/containment;
- it identifies a verified current range around 235–300 ml;
- it already separates capacity choice from product selection;
- it points toward 4 tasses and 9/10 tasses when the reader's target volume falls outside this band.

## 4. Overlap / cannibalization findings

The URL remains distinct from:
- `/capacites/cafetiere-italienne-4-tasses/`, now focused on the unusually broad 150–200 ml spread under the same label;
- `/capacites/cafetiere-italienne-10-tasses/`, focused on the near-half-litre tier and 9/10/12 choice;
- `/comparatifs/cafetiere-italienne-induction/`, which chooses products for an induction constraint;
- `/comparatifs/`, which handles product-level material, maintenance, price and design trade-offs.

The current page still uses a large multi-model table very early and then repeats a size-neighbor structure close to other capacity pages. The facts are useful, but the editorial reasoning remains too batch-like.

## 5. seo-content-audit action

`UPDATE`

The URL deserves to remain independent. The factual foundation is already strong, so the objective is to preserve it and rebuild only the decision path.

Site workflow mapping: `DEEP_REWRITE` because the cluster audit identified industrialized structure across 2/4/6 and the current 6-tasses page still exposes that pattern.

## 6. seo-keyword / intent confirmation

Target cluster:
- cafetière italienne 6 tasses
- cafetière moka 6 tasses
- cafetière italienne 6 tasses combien de ml
- moka 6 tasses ml

Dominant intent: informational / commercial-investigation hybrid focused on capacity choice.

Accepted page role: answer-first capacity explainer/choice page. Product ranking is out of scope.

## 7. Confidence and rationale

Confidence: 0.95.

Reason: current primary sources clearly show that 6-cup references span materially different published quantities and metric types. The page has a strong independent role, but its reasoning should be organized around the reader's target quantity and the metric distinction rather than around a product census.

## 8. Next workflow step

Run candidate/variant research, evidence ledger and fact-check before creating any new content brief.
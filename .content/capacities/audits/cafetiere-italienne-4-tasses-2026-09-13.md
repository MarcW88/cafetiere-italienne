# AUDIT — Cafetière italienne 4 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-4-tasses/`
Workflow: `.agents/skills/capacity-decision-workflow/SKILL.md`
Mode: AUDIT

## 1. Current role

The page should help the reader decide whether the commercial label `4 tasses` corresponds to the volume they actually want. It must not rank 4-cup products.

## 2. Evidence available / missing

Available:
- current page and neighboring capacity pages;
- cluster audit dated 2026-09-13;
- current manufacturer documentation for Bialetti, Cecotec and Grønenberg;
- neighboring comparison pages, including induction.

Missing:
- page-level GSC query/click/impression data;
- conversion data;
- backlink data.

These gaps prevent performance conclusions but do not block an editorial-role and overlap audit.

## 3. Strongest existing value to preserve

- the page already correctly says the 4-cup label is not a universal ml conversion;
- current examples show a meaningful spread between 150 and 200 ml;
- it correctly keeps induction diameter model-specific;
- it already routes product choice to `/comparatifs/`.

## 4. Overlap / cannibalization findings

The URL remains distinct from:
- `/capacites/cafetiere-italienne-2-tasses/`, where the main issue is very small volume + detection;
- `/capacites/cafetiere-italienne-6-tasses/`, which occupies a larger volume band;
- `/comparatifs/cafetiere-italienne-induction/`, which chooses products for induction;
- `/comparatifs/petite-cafetiere-italienne/`, which compares small products across nominal sizes.

The current page still overuses a product-example table as its central explanatory device. That makes the editorial shape too close to a comparison page even though the verdict is capacity-focused.

## 5. seo-content-audit action

`UPDATE`

The URL deserves to remain independent. The problem is not the role itself but the execution: the page should make the variation in real volume the decision mechanism, while product examples remain evidence rather than the page architecture.

Site workflow mapping: `DEEP_REWRITE` because the cluster audit already identified industrialized structure across 2/4/6 and the central explanatory device needs rebuilding.

## 6. seo-keyword / intent confirmation

Target cluster:
- cafetière italienne 4 tasses
- cafetière moka 4 tasses
- cafetière italienne 4 tasses combien de ml
- moka 4 tasses ml

Dominant intent: informational / commercial-investigation hybrid focused on capacity choice, not product ranking.

Accepted page role: a choice/explainer page that resolves the size label and routes to comparison only after the volume question is settled.

## 7. Confidence and rationale

Confidence: 0.94.

Reason: the current market evidence strongly supports the page's independent role because 4-cup variants currently span materially different published volumes. The main correction is structural and decision-focused, not a need to invent a new keyword target.

## 8. Next workflow step

Run candidate/variant research, evidence ledger and fact-check before any new content brief.
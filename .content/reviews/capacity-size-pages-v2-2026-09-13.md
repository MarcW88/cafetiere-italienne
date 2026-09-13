# PUBLISH_REVIEW — Capacity size pages V2

Date : 2026-09-13
URLs : 2 / 4 / 6 / 12 tasses
Workflow : exact Bloc Notes comparison/shared stack + pinned `ponomr/thinking-toolkit` decision layer
Status : **MACHINE_RECHECK_PENDING**

## Shared gates already reviewed

- `SEO_CONTENT_AUDIT`: PASS — each page now has a distinct decision problem.
- `SEO_KEYWORD / INTENT`: PASS — primary intent remains capacity/size, not product ranking.
- `THINKING_TOOLKIT`: PASS — Hard Choice Model applied; Decision Matrix NOT_REQUIRED on all four pages.
- `FACT_CHECK`: PASS on drafted claims against manufacturer sources dated 2026-09-13.
- `EVIDENCE_BASED_REVIEWS`: NOT_REQUIRED — no taste/ergonomy/durability performance judgment is made.
- `AFFILIATE_VALUE`: PASS — no product cards, merchant-driven selection or affiliate CTA.
- `CONTENT_BRIEF_AUTHORING`: PASS — four V2 briefs exist after evidence + decision artifacts.
- `CONTENT_AND_COPY`: PASS — bespoke structures; no cloned product cards.
- `HUMANIZER / GENERAL_WRITING`: PASS — claims remain attributed, conditional and concrete.
- `ANTI_AI_SLOP`: PASS — the four pages use different editorial problems and section orders.
- `SEO_ONPAGE`: PASS — unique title/H1/meta/canonical; no keyword quotas.
- `SEO_TECHNICAL`: PENDING machine recheck; robots intentionally `noindex,follow`.
- `GEO_AEO`: PASS — answer-first blocks, explicit entities, units and qualification of metric type.
- `INTERNAL_LINKING`: PASS — adjacent capacity handoffs + `/comparatifs/` when product selection starts.
- `EDITORIAL_QA`: PASS editorially; machine recheck pending.

## Page-specific review

### 2 tasses
Decision is unique: ~85–100 ml + induction detection constraint. Includes adjacent 3-tasse option instead of forcing 4. Multi-brand evidence includes Bialetti, Cecotec and Barazzoni. No product verdict.

### 4 tasses
Decision is unique: same commercial label spans ~150–200 ml. Page makes the 50 ml spread the central decision issue and keeps induction diameter as a secondary hard constraint. No universal 4-tasse conversion.

### 6 tasses
Decision is unique: ~235–300 ml across current verified references and different metric types. Explicitly distinguishes brewed volume from capacity/contents and routes 4 vs 6 vs 9/10 by volume.

### 12 tasses
Decision is unique: ~595–600 ml on chiffrable examples, with a correction that 12 tasses is not inherently non-induction. Moka Express dimensions are explicitly model-specific. Routes 9/10/12 by volume.

## Machine history

Initial regeneration run `34774616475`:
- `npm run build`: PASS
- `npm run check`: PASS (49 pages, no broken internal links)
- `python3 validate_capacities.py`: PASS
- custom boundary check: FAIL only because the guard matched the negated phrase `pas une « meilleure 2 tasses »`.

The guard was corrected to detect actual ranking/fake-hands-on markers rather than negated explanatory language. Final status will be updated after the corrected run.

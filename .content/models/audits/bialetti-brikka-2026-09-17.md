# PAGE_AUDIT — Bialetti Brikka

Date : 2026-09-17
Workflow version : 2
Decision : `NEW_PAGE`
Confidence : `HIGH`

## Role / search intent

PRODUCT page for readers comparing Brikka with a standard moka, especially Moka Express, and deciding between classic Brikka and Brikka Induction. Commercial investigation / product research intent.

## Search intent

The reader is not only asking what Brikka is. They need to resolve: expected volume, stovetop compatibility, how the pressure-valve recipe differs from a Moka Express, whether the crema claim matters, and which spare parts fit the exact generation.

## JTBD / decision problem

When I want a moka-style coffee that is stronger / foamier than a conventional Moka Express, I want to know whether Brikka's extra mechanism is worth the stricter recipe and which version actually fits my hob, so I do not buy for the word « crema » and discover incompatible usage or parts later.

## Cluster differentiation

- Distinct from `/marques/bialetti/`: model-level decision, not brand range overview.
- Distinct from `/modeles/bialetti-moka-express/`: pressure-valve protocol and generation-specific parts.
- Distinct from `/modeles/bialetti-moka-induction/`: Brikka Induction is a pressure-valve product, not simply a different finish of Moka Induction.
- Generic induction, capacity, grind and maintenance detail remain handoffs.

## Decision-relevant findings

1. Classic Brikka is aluminium and not induction-compatible directly.
2. Classic current sizes verified: 2 cup ≈90 ml and 4 cup ≈150 ml.
3. Brikka Induction verified: 4 cup ≈160 ml, bi-layer base, ≈11.5 cm base.
4. Brikka uses an explicit water protocol: 120 ml for classic 2 cup; 170 ml for classic 4 cup and verified Induction 4 cup.
5. The pressure valve is the core product distinction; manufacturer crema/concentration claims require qualification.
6. Brikka funnels changed between 2016–2023 and current 2024 generation.
7. Ring/filter compatibility is counter-intuitive: Brikka 2 uses 3-cup pack; Brikka 4 uses 6-cup pack.
8. Community discussions reveal recurring confusion about water amount and crema consistency; these remain user signals, not product facts.

## Blockers before publish review

- No product registry record yet.
- No persisted evidence packet / ledger / decision / brief / post-draft yet.
- No rendered model route yet.
- Hub/nav/validators do not yet know the Brikka route.

## Publication

Keep `noindex,follow`. Create through Model Workflow v2, then require machine validation + PUBLISH_REVIEW + human validation before any indexing decision.
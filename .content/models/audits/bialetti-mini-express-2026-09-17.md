# PAGE_AUDIT — Bialetti Mini Express

Date : 2026-09-17
Workflow version : 2
Decision : `NEW_PAGE`
Confidence : `HIGH`

## Role / search intent

PRODUCT page for readers deciding whether the direct-to-two-cups format is useful enough to justify Mini Express over a conventional moka, and whether they need the classic aluminium or Induction version.

## Search intent

Commercial investigation / product research. The reader needs to resolve direct service format, real volume, hob compatibility, cup/set differences, induction detection and spare-parts scope.

## JTBD / decision problem

When I want to prepare and serve two small moka coffees directly into cups, I want to know whether Mini Express fits my hob and my actual serving size, so I do not buy for the unusual design and discover that 2 cups means only about 90 ml total, that the classic version is not induction-ready, or that the set/parts differ by version.

## Cluster differentiation

- Distinct from `/marques/bialetti/`: model-level usage decision.
- Distinct from `/modeles/bialetti-moka-express/`: direct dual-spout service instead of an upper collector chamber.
- Distinct from `/modeles/bialetti-brikka/`: no valve/crema proposition; the differentiation is service format.
- Distinct from `/modeles/bialetti-moka-induction/`: Mini Express Induction keeps the direct-to-cups architecture.
- Generic induction, grind, dosage and maintenance remain handoffs.

## Decision-relevant findings

1. Classic Mini Express is aluminium, 2 cups ≈90 ml total and ≈8.0 cm base.
2. Classic Mini Express is not induction-compatible directly; an adapter is an alternative.
3. Mini Express Induction verified is also 2 cups ≈90 ml, with bi-layer stainless/aluminium base and direct induction compatibility.
4. The induction base is documented around 9.2–9.5 cm depending regional source, so hob detection remains a real constraint.
5. The distinctive function is coffee flowing directly into two cups; this is not evidence of better extraction or taste.
6. The exact set matters: some current Mini Express references include cups, others do not.
7. A 2-cup aluminium ring/filter kit is documented for classic Mini Express; do not extend that claim automatically to Induction.
8. Community discussions reveal occasional uneven flow between the two spouts; useful as anxiety/limitation signal only.

## Blockers before publish review

- No product registry record yet.
- No persisted evidence packet / ledger / decision / brief / post-draft yet.
- No rendered model route yet.
- Hub/nav/validators do not yet know the Mini Express route.

## Publication

Keep `noindex,follow`. Create through Model Workflow v2, then require machine validation + PUBLISH_REVIEW + human validation before any indexing decision.
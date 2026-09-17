# PAGE_AUDIT — Bialetti Venus

Date : 2026-09-17
Workflow version : 2
Decision : `LIGHT_UPDATE` after v1 deep rewrite

## Role / search intent

PRODUCT page for a named moka. The reader must decide whether Venus fits their usual volume, hob and material preference, not learn moka brewing in general.

## SEO / cluster

- Primary entity: Bialetti Venus.
- Distinguish from Moka Express (aluminium, no direct induction) and Moka Induction (hybrid construction).
- Capacity, generic induction, cleaning and grind questions are handoffs.
- No merge: the size-specific induction trap gives Venus a distinct decision role.

## Value already present

The v1 page already had strong official specs, size/volume/base mapping, care contradiction, spare-parts logic and sibling-model differentiation.

## v2 gap found

The previous workflow was too product-spec-centric. It did not persist JTBD or user-friction signals. Community questions show recurring confusion around cup labels vs expected yield and around whether a small Venus might happen to be detected by a specific induction hob. These are useful demand/anxiety signals, not compatibility facts.

## Action

- Keep official Bialetti compatibility as the buying rule.
- Add clarification that nominal prepared volume is a reference, not a guaranteed poured yield for every brew.
- Explicitly separate anecdotal hob detection from official compatibility.
- Route recipe/grind/heat adaptation to usage guides instead of asserting universal taste differences.

## Publication

Keep `noindex,follow`. v1 PASS is stale until all v2 artifacts + validators + PUBLISH_REVIEW v2 pass.

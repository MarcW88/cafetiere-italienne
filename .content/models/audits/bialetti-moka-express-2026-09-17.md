# PAGE_AUDIT — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2
Decision : `LIGHT_UPDATE`

## Role / search intent

PRODUCT page for the classic aluminium Moka Express. The practical decision is plate compatibility + adapter scope + usual brewed volume + maintenance/parts, not brand history.

## SEO / cluster

- Primary entity: Bialetti Moka Express.
- Distinct from Venus and Moka Induction through aluminium construction, very broad size range and no direct induction.
- Generic capacity, dosing, aluminium-vs-inox and induction education are handoffs.

## Value already present

The current draft has a complete size/volume matrix, the direct-induction blocker, adapter route, manual-care constraint and a high-value spare-parts example showing why 3/4-cup parts are not interchangeable merely because dimensions overlap.

## Test finding

A new verification pass found one decision-relevant omission in an otherwise strong page:

- the page presented the Bialetti induction adapter as a general route for the Moka Express family ;
- the dedicated Bialetti Induction Plate 13 cm page explicitly limits the accessory to coffee makers / Moka Express **up to 6 cups** ;
- the Moka Express Use & Care block repeats this limit ;
- therefore 9/12/18 cup Moka Express must not inherit the adapter recommendation.

This is not a reason for a deep rewrite. It is a targeted compatibility correction with direct purchase impact.

## Why the workflow should block

The omission can lead to a wrong induction purchase path for large-format Moka Express. It is therefore decision-relevant even though the page is already detailed and otherwise factually strong.

Pre-correction verdict for this test: `FAIL — KEEP_NOINDEX` until the adapter scope is corrected in evidence, decision, brief, rendered copy and post-draft fact-check.

## Action

- keep the existing bespoke structure ;
- qualify the adapter as officially documented up to 6 cups ;
- explicitly exclude 9/12/18 from that validated route ;
- add the dedicated accessory page to sources ;
- rerun PUBLISH_REVIEW after all artifacts and source files.

## Publication

Keep `noindex,follow` pending corrected v2 artifact gate, machine validators and human validation.

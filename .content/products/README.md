# Product registry — guarded product modules

This registry centralizes product presentation so a product is configured once and can be reused across selected editorial pages.

## Current operating mode (no Amazon API)

1. Keep editorial specs and `best_for` in `registry.json`.
2. When an exact Amazon.fr product has been verified, add its 10-character ASIN to `amazon.asin`.
3. The renderer automatically builds the direct affiliate URL in Amazon's documented format: `https://www.amazon.fr/dp/ASIN/ref=nosim?tag=TRACKING_ID`.
4. The Amazon.fr tracking ID and marketplace base URL are centralized in `affiliate.json`. Do not duplicate or hard-code another tracking ID in individual products.
5. `amazon.affiliate_url` remains available only as an explicit override for a verified Amazon URL. The validator rejects overrides that do not carry the configured tracking ID.
6. Until a verified ASIN or affiliate URL exists, the product shows only the internal editorial link; no fake or non-affiliate Amazon CTA is rendered.
7. Add an image only when its provenance is explicit:
   - `OWN`: an image owned by the site, usually stored under `/assets/products/`;
   - `MANUFACTURER_AUTHORIZED`: a manufacturer image whose reuse rights were checked (`rights_checked: true`);
   - `AMAZON_CREATORS_API`: reserved for the future API integration. The image stays remote and must not be downloaded into the repo.
8. Do not scrape Amazon product pages or copy Amazon-hosted images into the repository.
9. For model subject pages, run `python apply_inline_affiliate_links.py modeles`, then `python validate_inline_affiliate_links.py`.
10. For future multi-product decision modules, keep using `python apply_product_cards.py all` and `python validate_product_cards.py all`.

## Placement scope

The multi-product module scope is defined in `placements.json` and guarded by `validate_product_cards.py`. On this site it remains empty until a comparison/guide placement is explicitly approved.

Single-product model pages use the existing inline-affiliate pass instead. Their approved subject paths live in `inline-affiliate.json`. A model only receives an Amazon CTA when its exact Amazon.fr ASIN has been verified in `registry.json`; otherwise the editorial page remains unchanged.

Changing either scope is an explicit editorial decision and must remain validator-controlled.

## Commerce rules

- No static Amazon price is stored.
- Amazon CTAs render only when an exact ASIN or verified affiliate URL exists.
- Every rendered Amazon CTA must carry the tracking ID configured in `affiliate.json`.
- Affiliate links use `rel="sponsored nofollow noopener noreferrer"`.
- One card equals at most one main commercial link.
- Clicks emit an `affiliate_click` event to `window.dataLayer` when present and always emit an `affiliate:click` browser event. This makes GTM/analytics integration possible without coupling the cards to one analytics provider.

## Future Creators API mode

The registry deliberately separates editorial data from commerce/media data. When Creators API access becomes available, a sync layer can populate ASIN, availability and remote image URL while keeping editorial recommendations under site control.

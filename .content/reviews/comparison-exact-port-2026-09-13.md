# Exact port — Bloc Notes comparison workflow

Source: `MarcW88/bloc-notes-numerique`  
Pinned commit: `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`

## Vendored unchanged

- `comparison-analysis-workflow` complete directory
- `comparison-content-workflow` complete directory
- all 14 upstream/reused skills listed in the Bloc Notes inventory
- `apply_comparison_content.py`
- `apply_comparison_indexation.py`
- `comparison_content.py`
- `comparison_bespoke_output.py`
- `comparison_bespoke_remaining_20260909.py`
- `comparison_products.py`
- `generate_comparison_metadata.py`
- product-card / inline-affiliate rendering scripts
- product-card / inline-affiliate assets
- `regenerate-comparisons.yml`, `apply-product-modules.yml`, `maintain-inline-affiliate-links.yml`

Exact upstream copies of files that require site-specific adaptation are preserved under `.upstream/bloc-notes-comparison/`.

## Site-specific adaptation only

- project/domain/quality reference in `comparison-workflow.config.yaml`
- `comparison_pages.py`: six Cafetière comparison URLs and their intent/JTBD
- `comparison_bespoke_priority_20260909.py`: transition adapter preserving current bodies until each page is rewritten
- `comparison_publication.py`: empty indexation manifest
- product registry/placements: source schema, no approved commerce module before page-by-page review
- `validate_product_cards.py`: expected site scope only; upstream original preserved
- `validate_comparisons.py`: canonical host only; upstream original preserved
- `comparison-workflow.cafetiere-extension.yaml`: GEO/AEO extension and site publication state

No comparison content is approved by this port. A fresh `CLUSTER_AUDIT` using the exact upstream workflow is required before any page rewrite.

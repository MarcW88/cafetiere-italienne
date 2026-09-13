# AUDIT — /capacites/cafetiere-italienne-2-tasses/

Date: 2026-09-13
Mode: capacity-decision-workflow → comparison-analysis-workflow / AUDIT
Target: `/capacites/cafetiere-italienne-2-tasses/`

## 1. Current role

A capacity/size decision page. Its job is to help the reader determine whether the commercial label “2 tasses” matches the required volume and, when relevant, whether the exact variant can work on the reader's hob. It must not choose a winning product.

## 2. Evidence available / missing

Available:
- current page on `main`;
- cluster audit dated 2026-09-13;
- adjacent 4-cup page;
- nearby comparison pages `cafetiere-italienne-induction` and `petite-cafetiere-italienne`;
- existing manufacturer evidence for Bialetti, Cecotec and Barazzoni;
- current SERP inspection on 2026-09-13.

Missing:
- Search Console query/click/impression data for this URL;
- keyword-tool search volumes and difficulty;
- conversion data specific to this URL.

No metrics are inferred from those gaps.

## 3. seo-content-audit result

### Strongest existing value to preserve
- the explicit rejection of “2 tasses = 2 personnes”;
- the verified ~85–100 ml zone across cited 2-cup references;
- the distinction between a nominal capacity and an explicitly published brewed volume;
- the induction detection warning for very small bases;
- the boundary that product choice belongs to `/comparatifs/`.

### Structural problems
- the page still reads substantially like a product mini-comparison because named models and their table occupy too much of the decision path;
- it repeats the induction problem already treated in depth by `/comparatifs/cafetiere-italienne-induction/`;
- it overlaps with `/comparatifs/petite-cafetiere-italienne/`, whose role is to compare small products across 1–3 cups;
- its structure remains too close to sibling capacity pages, despite the cluster audit explicitly flagging industrialisation.

### Cannibalisation / role separation
- `/capacites/cafetiere-italienne-2-tasses/`: decide whether the **2-cup capacity band** fits the need; explain volume and capacity-specific hard constraints.
- `/comparatifs/petite-cafetiere-italienne/`: compare **specific small products/formats** and recommend among them.
- `/comparatifs/cafetiere-italienne-induction/`: compare **specific induction-compatible products** and decide which model to buy.

The URLs can coexist if the 2-cup page stops acting as a product shortlist.

### Upstream action
`UPDATE`

Reason: the URL has a valid distinct role and several strong facts worth preserving, but the decision architecture requires substantive reconstruction. No merge, redirect or delete is justified by the evidence available.

### Site workflow mapping
`DEEP_REWRITE`

This follows the existing cluster-audit mapping for a structurally industrialised capacity page while preserving the upstream `UPDATE` semantics.

Confidence: 0.95

## 4. seo-keyword / intent result

### Scope
Primary cluster:
- `cafetière italienne 2 tasses`

Relevant modifiers/sub-intents observed or directly implied by current SERP/pages:
- `cafetière italienne 2 tasses induction`
- `cafetière italienne 2 tasses ml`
- `moka 2 tasses`
- capacity/volume interpretation of “2 tasses”.

### SERP-derived intent
The exact query is strongly commercial/transactional: current results include retailer/category/product pages (for example Darty and Coolblue). A separate informational need remains visible around volume and induction compatibility.

The unique role for this URL is therefore a **commercial-supporting informational capacity page**: answer what “2 tasses” means in usable volume and when the size is coherent, then hand off model selection to `/comparatifs/`.

It should not imitate the retailer SERP by becoming a product listing, because the site already has dedicated comparison pages for product choice.

### Data gap
No keyword volume or GSC query data was available in this run. Priority is based on the existing site architecture, current SERP inspection and the already-approved cluster role, not invented demand figures.

## 5. Conditional skills

- `jobs-to-be-done`: NOT_REQUIRED. No distinct persona/context changes the underlying size decision; the decision is primarily volume + hob constraints.
- `evidence-based-reviews`: NOT_REQUIRED at audit stage because no experiential product judgment is required for the capacity verdict. If the draft introduces ergonomics/taste/durability judgments, this gate must be reopened.

## 6. Next workflow step

Proceed to candidate/variant research + evidence ledger + fact-check. Do not create the content brief yet. The decision artifact required at `.content/capacities/decisions/cafetiere-italienne-2-tasses.md` must be produced first.
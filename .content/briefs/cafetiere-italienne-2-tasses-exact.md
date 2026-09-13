# Content brief — Cafetière italienne 2 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-2-tasses/`
Workflow status: audit → evidence/fact-check → decision artifact → affiliate gate COMPLETE

## 1. Target query + supporting cluster

Primary:
- `cafetière italienne 2 tasses`

Supporting:
- `cafetière italienne 2 tasses ml`
- `cafetière italienne 2 tasses induction`
- `moka 2 tasses`
- queries that seek to understand whether the nominal 2-cup size matches a required volume.

## 2. Dominant SERP / intent and accepted format

Current exact-query SERP is strongly commercial/transactional, with retailer/category/product pages prominent. The site already has dedicated comparison pages for model choice.

Role for this URL: **commercial-supporting informational capacity page**. It should answer the sizing question clearly and then route product choice to `/comparatifs/`, rather than imitate a product listing.

No keyword-volume or GSC metrics were available in this run; do not invent them.

## 3. Reader and decision

Reader already considers a `2 tasses` moka or is trying to interpret that label.

Decision to make:
> Is the verified ~85–100 ml 2-cup capacity band appropriate for my usual moka serve, and is there a hard hob constraint that invalidates the size/model path?

## 4. JTBD

NOT_REQUIRED. The decision is not persona-led; it is driven by target volume and mandatory hob compatibility.

## 5. Scope

In scope:
- meaning of `2 tasses` as a commercial size label;
- verified order of magnitude across current manufacturer examples;
- distinction between brewed-volume and nominal-capacity metrics;
- adjacent size landmarks where they clarify the decision;
- induction/base-detection as a hard constraint;
- handoff to product comparison.

Out of scope:
- ranking 2-cup products;
- declaring a best model;
- material/maintenance/price/ergonomics comparisons except where needed to explain a hard capacity/hob boundary;
- experiential judgments;
- people-equivalence.

## 6. Decision criteria

Derived directly from the decision artifact:

1. target moka volume in ml;
2. exact published metric and variant;
3. mandatory hob compatibility;
4. base/detection constraint where manufacturer evidence exists;
5. nearest adjacent capacity band if the target falls outside ~85–100 ml.

No weighted scoring.

## 7. Required facts, entities and citations

Must support with manufacturer evidence:
- Bialetti Moka Express 2: ~90 ml approximate brewed coffee volume; base ~8 cm; not induction.
- Bialetti Moka Express 1/3/4: ~60 / 130 / 185 ml as **Bialetti-specific adjacent landmarks**.
- Bialetti Venus 2: ~85 ml; base ~8 cm; explicitly not induction.
- Bialetti Moka Induction 2: ~100 ml; base ~9.5 cm; induction; manufacturer warning to check the cooktop's accepted base diameter.
- Cecotec Piccolina 200: 2 cups, 100 ml **capacity**, induction/gas/electric/ceramic.
- Barazzoni La Caffettiera 2: 2-cup induction variant may be used only as corroboration that 2-cup induction exists; do not publish the unverified 8.5 cm figure.

Metric language must remain exact: `approximate brewed coffee volume` ≠ `capacity`.

## 8. Trade-offs / contraindications

- If ~85–100 ml is too small, the 2-cup band is the wrong capacity regardless of brand.
- If ~60 ml is enough, an adjacent 1-cup landmark may be closer.
- If ~130 ml is the real target, an adjacent 3-cup landmark may be closer.
- On induction, a compatible model can still require checking the hob's minimum accepted base diameter.
- A commercial `2 tasses` label is not a cross-brand universal ml standard.

## 9. Internal links

Required logical handoffs:
- `/capacites/` — broader size selection;
- `/capacites/cafetiere-italienne-4-tasses/` — larger adjacent site capacity page when the reader clearly needs more;
- `/comparatifs/petite-cafetiere-italienne/` — if the next question becomes which small model/format to buy;
- `/comparatifs/cafetiere-italienne-induction/` — if induction model selection becomes primary;
- `/guides/cafetiere-italienne-induction-compatibilite/` — if the reader needs the technical induction explanation.

Avoid linking every model page mechanically.

## 10. Anti-patterns specific to this piece

- no product-table-first architecture;
- no mini-ranking or shortlist;
- no repeated `model → volume → induction → verdict` cards;
- no `2 tasses = 2 personnes` shorthand;
- no universal `2 tasses = 90/100 ml` claim;
- no unverified Barazzoni diameter;
- no merchant adjectives or experiential claims;
- no clone of the 4/6-cup editorial order;
- no FAQ added by default;
- no conclusion that merely repeats the opening answer.

## 11. Success criteria

- the reader can decide whether ~85–100 ml is the right capacity band without choosing a product;
- brewed-volume vs capacity distinction is visible and understandable;
- adjacent sizes are presented as capacity landmarks, not product recommendations;
- induction is treated as a hard compatibility check without duplicating the induction comparison;
- the page remains useful without affiliate links;
- all model-specific capacity/compatibility claims pass fact-check;
- no fake hands-on;
- title/H1/meta/canonical/robots are coherent;
- `noindex,follow` remains;
- the page is structurally distinct from sibling capacity pages.

## 12. Editorial thesis

`2 tasses` is a small **capacity band**, not a serving-count promise. First decide whether roughly 85–100 ml matches the normal moka serve; then apply any mandatory hob/base constraint. Only after those two questions are resolved should the reader compare specific products.

## Proposed outline

### Opening answer — What does `2 tasses` mean in practice?
Purpose: answer immediately with the verified ~85–100 ml order of magnitude while stating that the underlying metrics differ by manufacturer.

### H2 — Is ~85–100 ml actually the volume you need?
Purpose: apply the Hard Choice result to the size decision, using adjacent ~60 / ~130 / ~185 ml Bialetti landmarks only as clearly attributed routing references.

### H2 — Why `2 tasses` is not a universal ml conversion
Purpose: explain the difference between commercial cup labels, approximate brewed volume and nominal capacity; use a few attributed manufacturer examples without building a product comparison table.

### H2 — What changes if you use induction?
Purpose: isolate the hard constraint. Show that Venus 2 fails it, Moka Induction 2 can pass it but requires hob/base verification, and other 2-cup induction variants exist. Do not recommend a winner.

### H2 — When should you leave the 2-cup page?
Purpose: give explicit handoffs: larger/smaller capacity if volume is wrong; `/comparatifs/` if the size is known and the next question is product choice.

### Sources
Purpose: expose the primary manufacturer evidence and research date.
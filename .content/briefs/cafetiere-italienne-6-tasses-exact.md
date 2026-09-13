# Content brief — Cafetière italienne 6 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-6-tasses/`
Workflow: exact `capacity-decision-workflow`

## Target query + supporting cluster

Primary:
- cafetière italienne 6 tasses

Supporting:
- cafetière moka 6 tasses
- cafetière italienne 6 tasses combien de ml
- moka 6 tasses ml

## Dominant intent and page format

Informational / commercial-investigation hybrid. The reader wants to know what volume a 6-cup moka actually represents and whether this tier fits their normal quantity before choosing a product.

Accepted format: answer-first capacity choice/explainer page. Not a product ranking.

## Reader decision

“Is my real need closer to roughly a quarter-litre or roughly 0.30 L, and does a 6-cup model actually match it?”

## Scope

In scope:
- verified current 6-cup published quantities;
- distinction between approximate brewed volume and nominal capacity;
- adjacent-size exit conditions toward 4 and 9/10 cups;
- exact-model induction constraints;
- handoff to comparisons after capacity is resolved.

Out of scope:
- best 6-cup moka;
- product scoring/ranking;
- taste, speed, ergonomics or durability claims;
- material, maintenance, repairability and price comparisons.

## Decision criteria

1. habitual target quantity;
2. exact model's published ml figure;
3. metric type: brewed volume vs capacity/containment;
4. exact-model cooktop compatibility / detection when relevant.

## Required facts / entities

- Bialetti Venus 6: ~235 ml approximate brewed coffee volume; base ~10.5 cm; induction caveat.
- Bialetti Moka Express 6: ~250 ml approximate brewed coffee volume.
- Bialetti Moka Exclusive Induction 6: ~250 ml approximate brewed volume; base ~10.5 cm; induction.
- Bialetti Moka Induction 6: ~280 ml approximate brewed volume; base ~11.5 cm; induction caveat.
- CRISTEL Torino 6: 0.30 L capacity; bottom 10 cm; all hobs; CRISTEL's 5 cl cup convention.
- Grønenberg 6: 300 ml; induction field from Ø 10.5 cm.
- Cecotec Moking 600: 300 ml nominal capacity; induction/gas/electric/ceramic advertised.
- Bialetti Moka Express 4: ~185 ml and 9: ~410 ml as same-family adjacent landmarks.

## Trade-offs / contraindications

- A reader targeting ~240–250 ml should not assume a 300 ml-capacity model is equivalent to a 250 ml brewed-volume reference.
- A reader regularly below ~200 ml should check the 4-cup tier.
- A reader regularly near ~400 ml should leave the 6-cup tier and investigate 9/10 cups.
- Induction compatibility does not remove exact-base/detection constraints.

## Internal-link destinations

- `/capacites/`
- `/capacites/cafetiere-italienne-4-tasses/`
- `/capacites/cafetiere-italienne-10-tasses/`
- `/comparatifs/cafetiere-italienne-induction/`
- `/comparatifs/`

## Anti-patterns specific to this piece

- opening with seven product rows;
- repeating the 4-tasses page's exact editorial shape;
- treating 235–300 ml as one interchangeable bucket;
- presenting 300 ml capacity as guaranteed brewed output;
- implying `6 tasses = 6 personnes`;
- using CRISTEL's 5 cl convention as a universal moka standard;
- introducing a winner, score, FAQ or generic conclusion merely for template consistency.

## Editorial thesis

The 6-cup tier is best understood as two nearby but materially different quantity zones: roughly 235–250 ml on some current brewed-volume references and roughly 280–300 ml on others. The reader should first decide which quantity zone matches their normal use, then check the metric type and cooktop, and only afterward compare products.

## Proposed outline and purpose

1. **Direct answer: 6 tasses currently spans roughly 235–300 ml** — answer the query with the claim boundary.
2. **Quarter-litre or 0.30 L?** — make the main decision explicit without opening with a product census.
3. **Why 250 ml brewed volume and 300 ml capacity are not interchangeable** — explain the metric distinction that changes interpretation.
4. **When to leave the 6-cup tier** — route below ~200 ml to 4 cups and around ~400 ml to 9/10 cups.
5. **Induction as a second constraint** — exact model and detection only, with handoff to the induction comparison.
6. **Manufacturer evidence block** — compact late table documenting the range without ranking.
7. **Handoff to product comparison** — stop capacity analysis once quantity and cooktop are resolved.
8. **Sources** — primary manufacturer sources.

## Success criteria

- reader can distinguish the ~235–250 ml and ~280–300 ml zones;
- brewed-volume and capacity metrics remain explicitly separated;
- page resolves size without ranking products;
- adjacent-size exit conditions are clear;
- no fake hands-on or experiential claims;
- canonical and `noindex,follow` remain unchanged pending human validation.
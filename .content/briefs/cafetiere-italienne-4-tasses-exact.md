# Content brief — Cafetière italienne 4 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-4-tasses/`
Workflow: exact `capacity-decision-workflow`

## Target query + supporting cluster

Primary:
- cafetière italienne 4 tasses

Supporting:
- cafetière moka 4 tasses
- cafetière italienne 4 tasses combien de ml
- moka 4 tasses ml

## Dominant intent and page format

Informational / commercial-investigation hybrid. The reader wants to understand the real volume behind the nominal 4-cup label and decide whether this size is appropriate before comparing exact products.

Accepted format: answer-first capacity choice/explainer page. Not a product ranking.

## Reader decision

“Does the 4-cup tier match the amount I actually want to prepare, and what exact check should I make before choosing a model?”

## Scope

In scope:
- verified 4-cup published quantities;
- difference between brewed volume and nominal capacity;
- adjacent-size exit conditions;
- induction detection as an exact-model hard constraint;
- handoff to comparisons after capacity is resolved.

Out of scope:
- best 4-cup moka;
- product ranking or scoring;
- material, maintenance, price and repairability comparisons;
- taste or ergonomics claims.

## Decision criteria

1. habitual target volume;
2. exact model's published ml metric and metric type;
3. exact-model induction compatibility / detection threshold when relevant.

## Required facts / entities

- Bialetti Moka Induction 4: ~150 ml approximate brewed volume; base ~10 cm; induction caveat.
- Bialetti Venus 4: ~170 ml approximate brewed volume; base ~9.5 cm; induction caveat.
- Bialetti Moka Express 4: ~185 ml approximate brewed volume.
- Cecotec Moking 400: 200 ml nominal capacity; induction/gas/electric/ceramic advertised.
- Grønenberg 4: 200 ml; induction field from Ø 9.5 cm.
- Bialetti Moka Express 3: ~130 ml; 6: ~250 ml as same-family adjacent landmarks.

## Trade-offs / contraindications

- A reader needing about 200 ml should not assume a 150 ml 4-cup variant is equivalent.
- A reader closer to ~130 ml should consider the 3-cup tier.
- A reader regularly above ~230 ml should consider the 6-cup tier.
- Induction compatibility does not remove cooktop detection constraints.

## Internal-link destinations

- `/capacites/`
- `/capacites/cafetiere-italienne-6-tasses/`
- `/comparatifs/cafetiere-italienne-induction/`
- `/comparatifs/`

Do not force a link to 2 tasses unless it answers a real next question.

## Anti-patterns specific to this piece

- opening with a multi-product comparison table;
- five symmetrical product mini-reviews;
- treating 150–200 ml as a universal standard;
- implying nominal capacity equals brewed yield;
- repeating the 2-tasses page's “small base detection” architecture;
- introducing a winner, score or “best 4-cup” verdict;
- generic FAQ or conclusion added only for template symmetry.

## Editorial thesis

The useful fact about “4 tasses” is not a single conversion but the spread itself: current verified products bearing the same 4-cup label publish quantities from roughly 150 to 200 ml. The reader should therefore choose by exact ml first, then verify cooktop constraints, and only afterward compare products.

## Proposed outline and purpose

1. **Direct answer: 4 tasses does not equal one volume** — answer the query immediately with the verified range and claim boundary.
2. **Why 50 ml matters at this size** — turn the spread into a decision consequence rather than a product list.
3. **Three decision zones inside/around the 4-cup tier** — ~130, ~150–200, ~235–300; show when to stay or move size.
4. **Induction is a second hard check, not the definition of 4 tasses** — cite exact examples only to establish the constraint.
5. **Manufacturer examples as evidence, not ranking** — compact evidence block/table late in the page, preserving metric labels.
6. **Handoff to comparison** — stop capacity analysis once volume and cooktop are resolved.
7. **Sources** — primary manufacturer sources only for central claims.

## Success criteria

- reader can explain why two 4-cup products may differ materially in ml;
- page resolves capacity without ranking products;
- metric types remain qualified;
- adjacent-size conditions are explicit;
- no fake hands-on;
- canonical and `noindex,follow` remain unchanged pending human validation.

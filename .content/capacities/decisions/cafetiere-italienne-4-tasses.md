# Decision artifact — Cafetière italienne 4 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-4-tasses/`
Decision owner: reader choosing a capacity tier
Decision skill: `ponomr/thinking-toolkit`

## Decision

Determine whether the reader's habitual target quantity belongs in the current verified 4-cup zone, and identify the condition that should move them to an adjacent size or to a product comparison.

## Observed facts

- verified 4-cup references currently publish quantities from ~150 to 200 ml;
- Bialetti publishes approximate brewed coffee volume for several models, while Cecotec publishes nominal capacity;
- current 4-cup induction examples have model-specific base/detection constraints;
- Moka Express provides adjacent same-family landmarks of ~130 ml for 3 cups and ~250 ml for 6 cups.

## Assumptions / unknowns

- the reader's target serving volume is unknown;
- the reader's cooktop type and induction detection threshold are unknown;
- no universal cup-to-ml standard exists across the market.

## Selected model

Hard Choice Model: APPLIED

Selection rationale: this is a low-stakes, reversible purchase-size decision with comparable options once the target volume is known. The model is used to calibrate effort before introducing any more complex comparison.

## Impact

Low.

Reasons:
- the purchase is reversible/replacable;
- the consequences are limited to fit of serving volume and cooktop compatibility;
- the decision does not justify elaborate scoring.

## Comparability

Easy, once the target volume and cooktop constraints are known.

The relevant options share measurable facts: published volume/capacity and exact-model cooktop compatibility.

## Decision type

`low impact + easy comparison = no-brainer`

## Approach

Use a simple rule, not a score:

1. start from the reader's habitual target volume;
2. compare it with the exact model's published ml figure, not with the label alone;
3. if induction is required, verify the exact variant and cooktop detection threshold;
4. move to an adjacent capacity when the target sits materially outside the chosen model's published volume;
5. once several exact products satisfy those constraints, hand off to `/comparatifs/`.

Decision Matrix: NOT_REQUIRED

Reason: the page is not selecting a product winner across multiple preferences. A matrix would add false precision to a capacity decision already resolved by hard facts.

## Constraints

- target volume must fit the exact variant's published quantity;
- induction requirement, when applicable, is a hard compatibility constraint;
- do not equate commercial cup count with people or with a universal ml number.

## Options eliminated / preserved

- A 4-cup variant around 150 ml is a poor fit for a reader explicitly needing around 200 ml.
- A 4-cup variant around 200 ml may overshoot a reader whose habitual target is closer to ~130 ml; a 3-cup tier deserves consideration.
- A reader regularly targeting ~235–300 ml should consider the 6-cup tier rather than forcing the 4-cup label.
- Exact product choice remains preserved for the comparison workflow after capacity is resolved.

## Option-preserving move

Before purchase, verify the exact variant's ml figure and, on induction, the cooktop manual's minimum accepted diameter. This keeps the reader free to switch model or capacity without relying on the nominal cup label.

## Review / stopping rule

Stop the capacity analysis once:
- target volume is matched to an exact published quantity; and
- cooktop compatibility is verified when relevant.

If the next question is material, maintenance, price, repairability or 'which model is best', route to `/comparatifs/`.

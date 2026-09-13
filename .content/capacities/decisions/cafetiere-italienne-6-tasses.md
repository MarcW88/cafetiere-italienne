# Decision artifact — Cafetière italienne 6 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-6-tasses/`
Decision owner: reader choosing a capacity tier
Decision skill: `ponomr/thinking-toolkit`

## Decision

Determine whether the reader's habitual target quantity belongs in the current verified 6-cup zone, and identify the condition that should move them to an adjacent size or to a product comparison.

## Observed facts

- verified current 6-cup references publish quantities from ~235 to 300 ml;
- some manufacturers publish approximate brewed coffee volume, while others publish capacity/containment;
- several current 6-cup products are induction capable, but compatibility remains exact-model and can be diameter-dependent;
- Bialetti Moka Express provides adjacent same-family landmarks of ~185 ml for 4 cups and ~410 ml for 9 cups.

## Assumptions / unknowns

- the reader's target serving volume is unknown;
- the reader's cooktop type and induction detection threshold are unknown;
- no universal cup-to-ml standard exists across the market.

## Selected model

Hard Choice Model: APPLIED

Selection rationale: this is a low-impact, reversible size choice with easily comparable options once the target volume and cooktop constraint are known.

## Impact

Low.

Reasons:
- the purchase is reversible/replacable;
- consequences are limited to volume fit and cooktop compatibility;
- the decision does not justify elaborate scoring.

## Comparability

Easy once target quantity and cooktop constraints are known.

Relevant options share measurable facts: exact-model published quantity, metric type and cooktop compatibility.

## Decision type

`low impact + easy comparison = no-brainer`

## Approach

Use a simple rule:

1. start from the habitual target quantity;
2. compare it with the exact model's published ml figure and note whether that figure is brewed volume or capacity;
3. if induction is required, verify the exact variant and any base/detection constraint;
4. reconsider 4 cups when the regular target sits below the 6-cup band;
5. reconsider 9/10 cups when the regular target sits materially above 300 ml;
6. once several exact products satisfy the size and cooktop constraints, hand off to `/comparatifs/`.

Decision Matrix: NOT_REQUIRED

Reason: the page is not selecting a winner across multiple product preferences. The capacity decision is already resolved by hard facts and one user-specific target quantity.

## Constraints

- do not equate `6 tasses` with one universal ml value;
- do not equate cup count with people;
- do not compare nominal capacity and approximate brewed yield as if they were identical measurements;
- induction remains exact-model and cooktop-specific.

## Options eliminated / preserved

- A 6-cup variant around 235 ml is a poor fit for a reader who explicitly needs about 300 ml.
- A 300 ml capacity model may be unnecessarily large for a regular target around 180–200 ml; the 4-cup tier should be checked.
- A reader regularly targeting ~400 ml should leave the 6-cup tier and investigate 9/10 cups.
- Product selection remains preserved for the comparison workflow after capacity is resolved.

## Option-preserving move

Before purchase, verify the exact model's metric and, on induction, the cooktop manual's minimum accepted diameter. If the target volume is close to a boundary, compare one adjacent nominal size before choosing a product.

## Review / stopping rule

Stop the capacity analysis once:
- the reader's target quantity is matched to a documented size range;
- the metric type is understood; and
- cooktop compatibility is verified when relevant.

If the next question becomes material, maintenance, repairability, price, design or 'which model is best', route to `/comparatifs/`.
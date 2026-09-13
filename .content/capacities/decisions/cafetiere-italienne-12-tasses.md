# Decision artifact — Cafetière italienne 12 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-12-tasses/`
Decision owner: reader choosing a large-capacity moka tier
Decision skill: ponomr/thinking-toolkit

## Decision

Determine whether the reader genuinely needs the 12-cup large-capacity tier, while preventing the nominal label from being treated as one universal ml value.

## Observed facts

- Bialetti Moka Express 12 publishes ~595 ml approximate brewed coffee volume;
- Cecotec Mokclassic 1200 publishes 600 ml nominal capacity;
- Forever Miss Moka Prestige 12 publishes about 717 ml water quantity;
- HAEGER currently sells a 12-cup variant without publishing a directly comparable ml figure on the product page used here;
- cooktop compatibility differs by exact model;
- Bialetti Moka Express 9 publishes ~410 ml approximate brewed volume, while the reviewed 10-cup page documents current examples around ~460–500 ml depending on model and metric.

## Assumptions / unknowns

- the reader's actual habitual target volume is unknown;
- the reader may interpret cup count as a universal volume or number of people;
- manufacturer metric types differ and cannot be merged into one guaranteed output figure;
- exact cooktop constraints depend on the product and hob.

## Selected model

`Hard Choice Model: APPLIED`

Selection rationale: this is a low-stakes, reversible size decision. Once the reader's target volume and cooktop constraint are known, the options are easy to compare using exact published quantities and metric labels.

## Impact

Low.

The main downside of a poor choice is a pot that is regularly too large/small or incompatible with the cooktop. The purchase does not justify elaborate preference scoring at the capacity stage.

## Comparability

Easy after normalizing the question to:
- target prepared quantity;
- type of published metric;
- exact-model cooktop compatibility.

## Decision type

`low impact + easy comparison = no-brainer`

## Approach

1. start from the reader's habitual target quantity, not from number of people;
2. use ~0.6 L as a useful landmark only where the exact model supports it;
3. keep brewed volume, nominal capacity and water quantity explicitly separate;
4. if the reader is regularly closer to ~0.4–0.5 L, examine 9/10-cup tiers before buying 12;
5. verify cooktop compatibility on the exact variant;
6. once capacity and cooktop are resolved, hand off product-level criteria to `/comparatifs/`.

## Decision Matrix

`Decision Matrix: NOT_REQUIRED`

Reason: the capacity question is resolved by hard facts and adjacent-size boundaries. Ranking materials, maintenance, price or handling would change the task into product comparison.

## Constraints

- do not publish `12 cups = 600 ml` as a universal conversion;
- do not transform 717 ml water quantity into brewed yield;
- do not convert 12 cups into 12 people;
- induction status must remain exact-model specific;
- preserve metric labels next to every quantity.

## Options eliminated / preserved

- A reader regularly targeting around 0.4 L should examine the 9-cup tier before 12.
- A reader targeting around 0.46–0.50 L should examine current 10-cup options before 12.
- A reader targeting roughly 0.6 L can reasonably keep 12 cups in scope, but must verify the exact model's published metric.
- A 12-cup label alone cannot resolve exact product choice because current primary sources publish materially different measurements.

## Option-preserving move

Before purchase, check the exact product sheet for the ml figure and what that figure means, then verify the hob requirement. This preserves the ability to switch between 9, 10 and 12 cups without anchoring to the commercial label.

## Review / stopping rule

Stop capacity analysis once:
- the reader's target quantity is matched to an exact product's published metric; and
- cooktop compatibility is verified where relevant.

If the next question becomes material, maintenance, handling, price or exact product preference, route to `/comparatifs/`.
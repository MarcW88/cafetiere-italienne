# Decision artifact — cafetiere-italienne-2-tasses

Date: 2026-09-13
Workflow: `capacity-decision-workflow`
Toolkit: `ponomr/thinking-toolkit` v1.0.0
Primary model: `Hard Choice Model`

## Decision

Determine whether the **2-cup capacity band** is an appropriate size for the reader's usual moka volume, and identify the condition that should move the reader to an adjacent capacity band. Product selection is outside this decision.

## Verified facts used

- Bialetti Moka Express 2: ~90 ml approximate brewed coffee volume; base ~8 cm; not induction.
- Bialetti Venus 2: ~85 ml approximate brewed coffee volume; base ~8 cm; not induction.
- Bialetti Moka Induction 2: ~100 ml approximate brewed coffee volume; base ~9.5 cm; induction, with a manufacturer warning to verify the cooktop's accepted minimum base diameter.
- Cecotec Piccolina 200: 2 cups; 100 ml nominal capacity; induction/gas/electric/ceramic claimed by the manufacturer.
- Bialetti Moka Express adjacent landmarks: 1 cup ~60 ml, 3 cup ~130 ml, 4 cup ~185 ml approximate brewed coffee volume.
- The reviewed manufacturers do not provide a universal `2 cups = X ml` standard across all brands/metrics.

## Assumptions

- The reader is choosing a size for a normal household moka purchase, not for a high-stakes professional workflow.
- The relevant target is the amount of moka coffee produced before any later dilution with milk or water.

## Unknowns that can change the decision

- the reader's actual usual target volume in ml;
- whether the reader uses induction;
- if induction is used, the minimum vessel/base diameter accepted by the exact cooking zone;
- whether a cited manufacturer's `capacity` is close enough to the user's desired served yield for their tolerance.

## Model selection rationale

The job is a consumer size decision. Stakes are modest and reversible, while the options are largely comparable on a shared numeric dimension (published volume/capacity) plus a hard compatibility condition (hob/base detection). Per the toolkit catalog, the `Hard Choice Model` is the narrowest model needed to calibrate decision effort.

## Hard Choice Model

### Impact

**Low.**

Reasons:
- ordinary consumer purchase;
- limited financial/long-term consequence relative to a high-stakes decision;
- reversible through exchange/resale/replacement more easily than a durable strategic commitment;
- the decision primarily affects convenience and fit of capacity.

### Comparability

**Easy, with explicit metric caveats.**

Reasons:
- the central sizing evidence is a shared volume/capacity dimension;
- hob compatibility is a hard pass/fail constraint rather than a preference score;
- manufacturer evidence is strong for the core examples;
- brewed-volume and nominal-capacity metrics must remain labeled separately, but this does not make the size bands incommensurable for coarse routing.

### Decision type

**Low impact + easy comparison = no-brainer.**

### Approach

Use a simple rule; do not create a weighted score:

1. Establish the reader's usual target moka volume in ml.
2. If the target is genuinely in the verified **~85–100 ml** zone, a 2-cup size is a plausible capacity band.
3. If the target is materially closer to **~130 ml**, consider an adjacent 3-cup size instead of forcing the 2-cup label.
4. If the target is materially closer to **~60 ml**, a 1-cup landmark may fit better.
5. If the target is closer to **~150–185 ml or above**, the 2-cup band is too small; move to a larger size band.
6. For induction, size fit alone is insufficient: the exact model must be induction-compatible **and** the hob must accept/detect its base dimensions.
7. Once size + hob constraints are satisfied, stop this workflow and hand off specific product choice to `/comparatifs/`.

### Hard constraints

- target volume cannot be materially above the useful 2-cup band if the reader expects one brew to satisfy the serve;
- if induction is mandatory, a non-induction exact variant is eliminated;
- if the hob's documented minimum accepted base is larger than the chosen product's compatible base, that exact product is eliminated.

### Options eliminated and why

- **2-cup band** is eliminated when the user's normal target volume is clearly above the verified ~85–100 ml band.
- **1-cup landmark** is eliminated when ~60 ml is clearly insufficient.
- **3/4-cup landmarks** are unnecessary when ~85–100 ml already matches the target.
- Any exact product that fails the user's hob constraint is eliminated at the product-selection stage, not ranked on this capacity page.

### Options still viable

- 2-cup capacity band when ~85–100 ml fits the normal serve and hob constraints can be met;
- adjacent smaller/larger capacity band when the user's measured target is outside that zone.

### Option-preserving move

Before purchase:
- measure/define the actual desired moka volume in ml;
- for induction, check the cooktop manual for the minimum accepted vessel/base diameter before selecting a specific product.

This resolves the two unknowns most likely to change the outcome without requiring a product ranking.

### Decision deadline / stopping rule

Decision deadline: **before selecting or purchasing a specific moka model**.

Stop the capacity analysis when:
- the target volume band is identified; and
- any mandatory hob constraint is known.

Then route specific product choice to `/comparatifs/`.

## Decision Matrix

**NOT_REQUIRED.**

Reason: the Hard Choice Model classifies this as a low-impact, easily comparable decision governed by one primary size dimension plus hard constraints. A weighted matrix would add false sophistication and risk mixing product preferences into a capacity decision.

## Result

The page must help the reader decide **whether ~85–100 ml is the right capacity band**, show the nearest useful size landmarks without claiming a universal cup conversion, and isolate induction/base detection as a hard compatibility condition. It must not recommend a winning 2-cup product.

## Sensitivity / review condition

Re-run the decision if:
- new primary manufacturer evidence materially shifts the verified 2-cup range;
- the site's keyword/SERP evidence shows the URL's dominant intent has changed to a product-comparison query;
- a user requirement introduces a distinct criterion that cannot be handled as a hard constraint.

## Handoff

If the next question is “which 2-cup model should I buy?” or “which induction 2-cup moka is best?”, hand off to `/comparatifs/`.
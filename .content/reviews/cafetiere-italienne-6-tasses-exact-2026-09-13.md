# PUBLISH_REVIEW — Cafetière italienne 6 tasses

Date: 2026-09-13
Route: `/capacites/cafetiere-italienne-6-tasses/`
Workflow: `.agents/skills/capacity-decision-workflow/SKILL.md`
Status: **PASS — READY_FOR_HUMAN_VALIDATION**

## Workflow order evidence

1. AUDIT persisted first: `.content/capacities/audits/cafetiere-italienne-6-tasses-2026-09-13.md`
2. Evidence + fact-check persisted second: `.content/capacities/evidence-cafetiere-italienne-6-tasses-exact-2026-09-13.md`
3. `ponomr/thinking-toolkit` decision artifact persisted at the required path: `.content/capacities/decisions/cafetiere-italienne-6-tasses.md`
4. Affiliate-value gate persisted before the brief.
5. Content brief persisted after the decision artifact.
6. Draft produced only after those artifacts in the shared `capacity-exact-reviewed` source.

## Post-draft fact-check

PASS.

Claims retained are supported by current manufacturer sources:
- Venus 6: ~235 ml approximate brewed volume, base ~10.5 cm, induction caveat;
- Moka Express 6: ~250 ml approximate brewed volume;
- Moka Exclusive Induction 6: ~250 ml approximate brewed volume, base ~10.5 cm;
- Moka Induction 6: ~280 ml approximate brewed volume, base ~11.5 cm;
- CRISTEL Torino 6: 0.30 L containment/capacity, 10 cm bottom, all hobs, 5 cl cup convention for this range;
- Grønenberg 6: 300 ml, induction field from Ø 10.5 cm;
- Cecotec Moking 600: 300 ml nominal capacity and advertised induction/gas/electric/ceramic compatibility.

No nominal capacity is rewritten as guaranteed brewed yield. No universal `6 tasses = X ml` claim is used.

## Internal-linking-audit

PASS.

Contextual links answer distinct next questions:
- `/capacites/` for the hub;
- `/capacites/cafetiere-italienne-4-tasses/` when the regular target is below the 6-cup zone;
- `/capacites/cafetiere-italienne-10-tasses/` when the reader approaches the 9/10-cup zone;
- `/comparatifs/cafetiere-italienne-induction/` when cooktop compatibility becomes primary;
- `/comparatifs/` when the next decision is product-level.

## Humanizer

PASS.

- no fake first-person testing;
- no promotional superlatives;
- no vague expert attribution;
- technical distinctions are preserved;
- product examples support the decision instead of replacing it;
- the final rendered 6-tasses HTML contains no em dash or en dash;
- the typography sanitizer is a generic rendering helper and does not own editorial methodology.

## General-writing

PASS.

The draft leads with the capacity decision, explains the metric problem only where it changes interpretation, and ends when product-level choice begins.

## Anti-AI-slop

PASS.

The page does not repeat the 4-tasses architecture mechanically. Its central reasoning is the split between the ~235 to 250 ml brewed-volume zone and the ~280 to 300 ml zone, plus the difference between brewed volume and capacity. The product table appears late as evidence.

## SEO on-page

PASS.

- title: `Cafetière italienne 6 tasses : combien de ml ?`;
- H1 answers the target query directly;
- meta states the verified range and claim boundary;
- headings follow reader decisions rather than a fixed capacity template;
- adjacent-capacity links are contextual.

## SEO technical

PASS.

GitHub Actions run `34778067207` completed successfully:
- `npm run build`: PASS;
- `npm run check`: PASS;
- `python3 validate_capacities.py`: PASS;
- 6-tasses output assertions: PASS;
- Humanizer typography assertions (`—`, `–`, malformed comma spacing): PASS;
- canonical preserved;
- `noindex,follow` preserved;
- generated reviewed HTML persisted;
- approved 2/4/10/12 HTML verified byte-identical to `main` during the run.

## GEO / AEO

PASS.

- answer-first range with explicit uncertainty;
- exact model entities and units;
- brewed volume vs capacity distinction kept next to claims;
- decision thresholds are extractable without pretending to be universal standards;
- handoff separates capacity choice from product recommendation.

## Editorial QA

PASS.

The page has a distinct role, remains useful without affiliate links, does not rank products, and routes product choice to Comparatifs.

## Publication state

`KEEP_NOINDEX`

No automatic indexation or monetization change. Human validation and a separate explicit indexation instruction remain required.
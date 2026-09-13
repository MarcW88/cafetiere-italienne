# PUBLISH_REVIEW — /capacites/cafetiere-italienne-2-tasses/

Date: 2026-09-13
Workflow: `capacity-decision-workflow` → `comparison-analysis-workflow / PUBLISH_REVIEW`
Status: **PASS — READY_FOR_HUMAN_VALIDATION**

## Workflow-order evidence

1. AUDIT: `.content/capacities/audits/cafetiere-italienne-2-tasses-2026-09-13.md`
2. keyword/intent classification: persisted inside the AUDIT artifact
3. candidate/variant research + evidence ledger + fact-check: `.content/capacities/evidence-ledgers/cafetiere-italienne-2-tasses-2026-09-13.md`
4. `thinking-toolkit` decision artifact: `.content/capacities/decisions/cafetiere-italienne-2-tasses.md`
5. affiliate-value gate: `.content/capacities/affiliate-value-cafetiere-italienne-2-tasses-2026-09-13.md`
6. content brief: `.content/briefs/cafetiere-italienne-2-tasses-exact.md`
7. content-and-copy draft: `scripts/capacity-2-tasses-exact-reviewed.mjs`
8. post-draft fact-check: `.content/capacities/post-draft-fact-check-cafetiere-italienne-2-tasses-2026-09-13.md`
9. internal linking + humanizer + general-writing + anti-ai-slop + SEO + GEO/AEO + editorial QA: `.content/capacities/post-draft-gates-cafetiere-italienne-2-tasses-2026-09-13.md`
10. machine validation: GitHub Actions runs `34776699035` and `34776757030`, both SUCCESS
11. this PUBLISH_REVIEW
12. human validation: PENDING

## Analysis / intent gate — PASS

- upstream `seo-content-audit`: UPDATE; valid URL and useful existing facts preserved;
- site workflow mapping: DEEP_REWRITE because the prior decision architecture was still too product-table-led and structurally close to sibling capacity pages;
- exact-query SERP inspected on 2026-09-13; dominant surface is commercial/transactional, with a supporting information need around ml and induction;
- unique URL role is now explicit: decide whether the 2-cup capacity band fits, not which product wins;
- overlap with `/comparatifs/petite-cafetiere-italienne/` and `/comparatifs/cafetiere-italienne-induction/` is handled through clear handoffs rather than duplicated product selection.

No GSC/keyword-volume metrics were available; none were invented.

## Evidence / factuality gate — PASS

Primary manufacturer evidence supports the retained claims:
- Bialetti Moka Express 1/2/3/4 size landmarks;
- Venus 2 ~85 ml / ~8 cm / non-induction;
- Moka Induction 2 ~100 ml / ~9.5 cm / induction with cooktop-diameter warning;
- Cecotec Piccolina 200 = 2 cups / 100 ml capacity / induction listed;
- Barazzoni = existence of a 2-cup induction variant.

Important correction versus earlier batch research:
- Barazzoni `8.5 cm` was not reverified in the current accessible primary source and is therefore excluded from the page.

`evidence-based-reviews`: NOT_REQUIRED because no experiential performance, taste, ergonomics or durability judgment is published.

No fake hands-on claim exists.

## Decision gate — PASS

Exact `ponomr/thinking-toolkit` Hard Choice Model applied before the brief.

Result:
- Impact: LOW
- Comparability: EASY, with explicit metric caveats
- Decision type: low impact + easy comparison = `no-brainer`
- method: simple capacity rule + hard compatibility constraints
- Decision Matrix: **NOT_REQUIRED**

The page decision is limited to:
1. target moka volume;
2. mandatory hob/base constraint when relevant;
3. adjacent capacity band if the target does not fit;
4. handoff to Comparatifs for product selection.

No scoring or product winner was introduced.

## Affiliate-value gate — PASS

The page remains useful with all affiliate links removed. It adds:
- metric interpretation;
- cross-manufacturer evidence boundaries;
- adjacent-size routing;
- induction detection constraint;
- explicit product-comparison handoff.

No merchant ranking, price steering or monetization-driven inclusion is present.

## Brief / content gate — PASS

The content brief was authored after the decision artifact and affiliate gate.

The final page follows the brief without a product-table-first structure. Named products are evidence for claims, not recommendation cards.

No fixed FAQ, word-count quota, heading quota or product-card symmetry was imposed.

## Post-draft writing gates — PASS

- post-draft fact-check: PASS;
- internal-linking-audit: PASS;
- humanizer: PASS;
- general-writing + evaluation checklist: PASS;
- anti-ai-slop single-artifact review: PASS.

The humanizer pass removed long-dash range typography and workflow-like headings without altering verified facts.

## SEO gate — PASS

- target query and URL role aligned;
- unique title, meta and H1;
- answer appears immediately;
- headings follow decision stages rather than a sibling template;
- contextual links route only to logical next questions;
- canonical self-reference is correct;
- no misleading Review/Product schema added.

`seo-best-practices` framework-specific React/Laravel checks are N/A for this static generator. Character-count heuristics are not treated as blockers because the authoritative `seo-onpage` skill forbids arbitrary length rules.

## Technical gate — PASS for page scope

Machine validation confirms:
- build succeeds;
- all internal links pass global `npm run check`;
- `validate_capacities.py` passes;
- canonical and robots state are correct;
- `noindex,follow` remains intentional under the publication contract;
- critical page content is static HTML.

No site-wide crawl/CWV/security result is fabricated from this page-only run.

## GEO/AEO extension — PASS

- answer-first capacity range;
- explicit named entities;
- units near claims;
- brewed-volume vs nominal-capacity distinction near the evidence;
- extractable rule: target volume → hard hob constraint → product handoff;
- uncertainty and scope are explicit;
- no unsupported schema or pseudo-hands-on evidence.

## Editorial QA — PASS

- Intent: PASS
- Original affiliate value: PASS
- Factuality: PASS
- Natural language: PASS for French content
- SEO preservation: PASS
- User usefulness without affiliation: PASS
- Editorial image planner: N/A because the Bloc Notes-specific referenced skill is not vendored in this repository and is not part of the exact capacity workflow contract. No filler image was generated.

## Machine gate — PASS

Latest validation run: `34776757030` — SUCCESS.

Passing steps:
- Build site
- Check internal links
- Validate capacity publication blockers
- Verify exact 2-cup output and workflow boundaries
- Verify sibling capacity HTML remains untouched
- Persist generated 2-cup HTML

The sibling check proves the build does not change:
- 4 tasses
- 6 tasses
- 10 tasses
- 12 tasses

## Source ownership gate — PASS

The legacy batch apply script now explicitly skips `cafetiere-italienne-2-tasses`.

The active reviewed source for this page is:
- `scripts/capacity-2-tasses-exact-reviewed.mjs`
- applied by `scripts/apply-capacity-2-tasses-exact-reviewed.mjs`

This removes the previous ambiguity where the old batch source could also write the 2-cup page during the same build.

## Publication safety — PASS

- robots remains `noindex,follow`;
- no indexation instruction is emitted;
- no monetization activation;
- no automatic merge;
- human validation still required.

# Final status

**PASS — READY_FOR_HUMAN_VALIDATION**

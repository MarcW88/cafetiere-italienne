# Post-draft gates — /capacites/cafetiere-italienne-2-tasses/

Date: 2026-09-13
Draft source: `scripts/capacity-2-tasses-exact-reviewed.mjs`

## Internal-linking-audit — PASS

Verified target pages exist:
- `/capacites/`
- `/capacites/cafetiere-italienne-4-tasses/`
- `/comparatifs/petite-cafetiere-italienne/`
- `/comparatifs/cafetiere-italienne-induction/`
- `/guides/cafetiere-italienne-induction-compatibilite/`

Each link answers a logical next question. No additional link quota was imposed.

## Humanizer — PASS after edits

Applied to the complete reader-visible draft, including title, headings, callout, source labels and sidebar.

Changes required by the skill:
- removed en/em-dash typography from visible prose and ranges;
- replaced `85–100` with `85 à 100` and equivalent French range wording;
- removed workflow-like heading language such as `Quand cette page a fini son travail`;
- preserved every verified number and metric distinction;
- kept neutral reference voice; no promotional personality added.

No new facts were introduced.

## General-writing — PASS

Checked against `general-writing/references/eval.md`.

- meaning/facts preserved: PASS
- direct opening: PASS
- concrete nouns/numbers preserved: PASS
- no banned hype vocabulary: PASS
- no ornamental binary contrast pattern: PASS
- no summary-recap ending: PASS
- no robotic product symmetry: PASS
- headings describe real reader decisions: PASS
- paragraph transitions are logical rather than formulaic: PASS

The final section ends with a specific routing decision rather than a generic conclusion.

## Anti-ai-slop — PASS

Output contract:
- audience: reader considering a 2-cup moka;
- job: decide whether the 2-cup capacity band fits, then route the next question;
- medium: informational SEO page;
- evidence requirement: manufacturer-sourced model-specific claims;
- success: reader can decide the capacity band without receiving a product ranking.

Purpose classification: `Inform quickly` / explanatory decision support.

Universal design gate:
- purpose fit: PASS, answer appears immediately;
- audience fit: PASS, volume and induction are the relevant constraints;
- specificity: PASS, exact units, variants and source boundaries are visible;
- evidence: PASS, claims are attributed and fact-checked;
- structure/rhythm: PASS, no product-table-first template;
- voice/judgment: PASS, page makes the capacity decision without inventing a winner;
- usability: PASS, adjacent capacity and product handoffs are explicit;
- actionability: PASS, reader knows when to stay in 2 cups and when to move on;
- localization/register: PASS, French wording and metric units are consistent.

The three capacity cards are retained because they form a functional adjacent-size decision set, not decorative card symmetry.

## seo-onpage — PASS

Target query: `cafetière italienne 2 tasses`.
Page role: commercial-supporting informational capacity decision.

1. Title: PASS — unique, query-aligned and accurately promises volume + choice.
2. Meta: PASS — unique and accurate, no keyword list.
3. Heading structure: PASS — one H1; H2s represent distinct decision stages.
4. Body: PASS — dominant sizing answer appears in hero and first section.
5. Internal links: PASS — descriptive and decision-led.
6. Images/media: N/A — no new editorial image introduced.
7. URL: PASS — existing clean canonical URL retained.
8. Schema: PASS — no Review/Product schema introduced for this non-hands-on capacity page.

No keyword-density or heading quotas used.

## seo-technical — PASS for scoped page checks

Scope is this URL only, not a site-wide technical audit.

- rendered critical content is static HTML: PASS
- canonical self-references exact public URL: PASS
- robots = `noindex,follow`: PASS **by explicit publication contract**, not an accidental indexability error;
- URL hierarchy: PASS;
- internal targets verified: PASS;
- no new structured data or JS dependency introduced: PASS.

Site-wide robots/sitemap/CWV/security are outside this page-rewrite scope and are not fabricated as checked.

## seo-best-practices — PASS / N/A by applicability

Applicable checks:
- unique title/meta/canonical: PASS;
- single H1 and semantic main/article/section structure: PASS;
- descriptive body links: PASS;
- viewport present in shared shell: PASS.

Framework-specific Laravel/Inertia and React rules: N/A for this static generator.
Title/meta character-count guidance is treated as advisory rather than a blocker because the authoritative `seo-onpage` skill explicitly rejects arbitrary length rules; relevance and accuracy pass.

## GEO/AEO extension — PASS

This is the site-specific extension explicitly allowed by `capacity-workflow.config.yaml`.

- answer-first: PASS, 85 to 100 ml is stated immediately;
- entity clarity: PASS, Bialetti Venus, Moka Express, Moka Induction, Cecotec Piccolina and Barazzoni are named only where evidence requires them;
- unit/metric clarity: PASS, brewed volume vs nominal capacity is explicit near the claims;
- extractable decision rule: PASS, target volume first, mandatory hob constraint second, product comparison after that;
- uncertainty: PASS, the range is limited to verified examples and is not presented as a universal conversion;
- no unsupported schema or fake first-hand evidence: PASS.

## Editorial image sub-gate

N/A for this repository/workflow execution. `editorial-qa` references an `editorial-image-planner` used for Bloc Notes content, but that skill is not vendored in this repository and is not listed in the exact `/capacites/` workflow contract. No image was generated merely to fill the page.

## editorial-qa — PASS editorially

Gate 1 intent: PASS.
Gate 2 original affiliate value: PASS.
Gate 3 factuality: PASS, with post-draft fact-check artifact.
Gate 4 natural language: PASS for French adaptation; no generic AI-formulation cluster remains.
Gate 5 SEO preservation: PASS.
Gate 6 user usefulness: PASS; page is fully useful without affiliate links.
Gate 7 image decision: N/A as documented above.

Machine validation remains required before PUBLISH_REVIEW.
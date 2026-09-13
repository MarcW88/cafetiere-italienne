# Provenance — workflow `/capacites/` V2

Date : 2026-09-13

## Contrat

Le workflow `/capacites/` ne possède pas ses propres méthodologies SEO, preuve, décision, scoring, rédaction, humanisation ou QA.

La couche custom est limitée au routing, à la normalisation de faits capacité déjà sourcés, aux frontières de catégorie, à l'intégration GEO/AEO et à l'état de publication.

## Couche 1 — moteur de diagnostic / recherche / preuve

Snapshot de référence :
- repo : `MarcW88/bloc-notes-numerique`
- commit : `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`
- orchestrateurs exacts :
  - `.agents/skills/comparison-analysis-workflow/`
  - `.agents/skills/comparison-content-workflow/`

Skills exacts réutilisés depuis ce snapshot :
- `seo-content-audit`
- `seo-keyword`
- `jobs-to-be-done`
- `evidence-based-reviews`
- `fact-check`
- `affiliate-value`
- `content-brief-authoring`
- `content-and-copy`
- `internal-linking-audit`
- `humanizer`
- `general-writing`
- `anti-ai-slop`
- `seo-onpage`
- `seo-technical`
- `seo-best-practices`
- `editorial-qa`

Le CI compare byte-for-byte ces dossiers avec le commit Bloc Notes épinglé.

### Upstreams connus derrière le snapshot Bloc Notes

- `rampstackco/claude-skills` : notamment `seo-content-audit`, `seo-keyword`, `content-brief-authoring`, `content-and-copy`, `evidence-based-reviews`, `seo-onpage` et autres briques SEO vendored/adaptées dans Bloc Notes.
- `wondelai/skills` : `jobs-to-be-done`.
- `msimchowitz/writing-skills` : `humanizer`, `general-writing`.
- `ch040602/anti-ai-slop` : source externe de la brique anti-slop vendored dans Bloc Notes.
- `MarcW88/italiaanse-percolator` : provenance de plusieurs briques historiques réutilisées/éprouvées telles que `fact-check`, `affiliate-value`, `internal-linking-audit`, `editorial-qa` avant leur snapshot Bloc Notes.

La référence active du workflow reste néanmoins le **snapshot Bloc Notes épinglé**, afin d'éviter qu'une mise à jour upstream non contrôlée ne modifie la méthode en production.

## Couche 2 — décision de capacité

Repo upstream : `ponomr/thinking-toolkit`
Version : `1.0.0`
Commit : `1e4c78dd0a0252ca7dab60e6fb3ce9e4404d3328`

Fichiers vendored byte-for-byte et contrôlés en CI :
- `SKILL.md`
- `VERSION`
- `references/catalog.md`
- `references/hard-choice-model.md`
- `references/decision-matrix.md`

Règle d'utilisation :
1. sélectionner le plus petit modèle utile avec le catalogue ;
2. utiliser `Hard Choice Model` pour calibrer l'effort et séparer contraintes dures / choix comparables ;
3. utiliser `Decision Matrix` uniquement si plusieurs options viables et comparables restent réellement à arbitrer ;
4. ne jamais forcer un score lorsqu'une contrainte dure ou une règle simple suffit.

## Couche 3 — rédaction / QA

Après l'artefact de décision :

`content-brief-authoring → content-and-copy → fact-check → internal-linking-audit → humanizer → general-writing → anti-ai-slop → seo-onpage → seo-technical → seo-best-practices → GEO/AEO → editorial-qa → PUBLISH_REVIEW`.

La décision est donc produite **avant** le brief éditorial.

## Couche custom réellement détenue par cafetiere-italienne

Autorisé :
- `capacity-decision-workflow` : routing/orchestration uniquement ;
- mapping des routes `/capacites/` ;
- normalisation de libellés et métriques déjà sourcés (`tasses`, ml, capacité nominale, brewed volume) ;
- handoff vers `/comparatifs/` ;
- adaptation de rendu au générateur du site ;
- extension GEO/AEO spécifique au site ;
- publication/indexation state.

Interdit :
- inventer une méthode SEO ;
- inventer une méthode de recherche/evidence ;
- inventer une méthode de décision ou un scoring ;
- inventer une méthode de rédaction/humanisation ;
- remplacer anti-AI-slop ou editorial QA.

## Scripts : distinction importante

Les scripts Python du moteur Comparatifs de Bloc Notes restent présents et protégés par leur propre CI de parité, mais ils ciblent structurellement `/comparatifs/`. Ils ne sont **pas** détournés pour écrire `/capacites/`, car cela créerait un faux comparatif et couplerait les routes.

Les scripts `capacity-*.mjs` sont donc des **scripts custom d'intégration/rendu**, pas une méthodologie. Ils n'ont pas le droit de choisir les critères, produire la décision ou scorer des options. La décision doit déjà exister dans `.content/capacities/decisions/` avant que ces scripts n'intègrent le contenu.

## Gates de provenance

- `verify-comparison-upstream-parity.yml` : protège le moteur Comparatifs exact + ses scripts.
- `check-capacity-workflow-parity.yml` V2 : protège les skills Comparatifs/shared utilisés par `/capacites/` et les fichiers `thinking-toolkit` exacts.
- `validate_capacities.py` + build/check : valident l'intégration du site, pas la méthodologie de décision.

## Résumé

Méthodologie externe/existante : diagnostic, SEO, intent, evidence, fact-check, affiliation, décision, writing, humanisation, anti-slop et QA.

Custom : orchestration et intégration métier/site uniquement.

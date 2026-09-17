# Model analysis — Bialetti Moka Induction

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

La review est structurée pour les deux gates obligatoires :

- `validate_models.py` — rendu, canonical, robots, sources, liens et blockers machine ;
- `validate_model_workflow.py` — registry, record, artefacts v2, markers sémantiques et fraîcheur Git de la review.

Le CI constitue l'autorité machine finale. La page reste `noindex,follow`.

## Artifact gate

PASS — le record v2 pointe vers research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, post-draft fact-check et review. Le registry et l'URL sont alignés. Le fichier source suivi est `scripts/apply-model-core-reviewed.mjs`.

## Intent / JTBD gate

PASS — le JTBD est centré sur le passage à l'induction tout en restant proche de la logique Moka Express, avec deux risques réels : détection du diamètre et identification de la bonne génération pour les pièces. Push/Pull/Anxiety/Habit, Big Hire/Little Hire et critères de décision sont persistés.

## Evidence / contradiction gate

PASS — la Bi-Layer actuelle, les volumes/bases 2/4/6, les différences d'éditions documentées et la génération pré-2020 sont distingués. Aucun chiffre d'une variante n'est généralisé à toute la famille. La mention “induction” n'est jamais transformée en garantie universelle de détection.

## Brief gate

PASS — le brief v2 dérive du decision artifact et du ledger : query/cluster, intent, JTBD, décision, scope, critères, preuves/entities, trade-offs, handoffs, anti-patterns, angle, success criteria et outline propre sont persistés.

## Post-draft fact-check

PASS — le contrôle confirme la construction hybride, les tailles/volumes/bases de la référence actuelle, l'entretien, la distinction D&G et le diagnostic générationnel des pièces. Aucun faux hands-on ni claim gustatif.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Base bi-layer inox + aluminium | `USED` | section construction |
| Partie supérieure aluminium | `USED` | construction + comparaison |
| Compatible induction, gaz, électrique, céramique | `USED` | ouverture |
| Vérifier le diamètre minimal détecté par la plaque | `USED` | hard gate induction |
| Tailles actuelles 2 / 4 / 6 | `USED` | matrice tailles |
| Volumes ≈ 100 / 150 / 280 ml | `USED` | matrice |
| Bases ≈ 9,5 / 10 / 11,5 cm | `USED` | matrice + hard gate |
| Lavage manuel | `USED` | entretien |
| Éviter pleine puissance / ébullition prolongée | `USED` | entretien |
| Éditions D&G avec volumes différents | `USED` | variante exacte |
| 2 tasses D&G ≈ 90 ml | `USED` | exemple de variation |
| 4 tasses D&G ≈ 190 ml | `USED` | exemple de variation |
| Funnel actuel Bi-Layer 2 / 4 / 6 | `USED` | pièces |
| Funnel pré-2020 distinct | `USED` | pièces / génération |
| Ancienne génération identifiable par bande silicone noire | `USED` | diagnostic génération |
| Anciennes tailles pré-2020 3 / 6 | `USED` | pièces / génération |
| Joints / filtres par taille | `USED` | pièces |
| Venus = tout inox | `USED` | modèle frère |
| Moka Express = aluminium hors induction directe | `USED` | modèle frère |
| Capacités générales | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Comparatif induction | `HANDOFF` | `/comparatifs/cafetiere-italienne-induction/` |
| Prix figé | `EXCLUDED` | volatil |
| Claim de goût supérieur | `EXCLUDED` | non démontré |
| Collaborations comme branche fonctionnelle autonome | `EXCLUDED` | seules les différences documentées sont utiles |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — la page évite des erreurs d'achat concrètes : badge induction interprété trop largement, taille choisie sans regarder les ml, variante confondue et pièce commandée pour la mauvaise génération.

## Trust / SEO / technical

PASS éditorial — pas de faux test, pas de claim gustatif, pas de prix figé et pas de généralisation de variante. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review est commitée après ses artefacts v2, son record, son fichier source, le registry et les inputs méthodologiques MODEL v2. Toute modification ultérieure doit rendre le PASS stale via `validate_model_workflow.py`.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

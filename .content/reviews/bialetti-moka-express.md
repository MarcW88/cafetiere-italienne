# Model analysis — Bialetti Moka Express

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

PASS — le JTBD porte sur une quantité de moka précise, une plaque compatible et la capacité à identifier les bonnes pièces. Push/Pull/Anxiety/Habit, Big Hire/Little Hire et critères `MUST_HAVE / HIGH / CONDITIONAL / CONTRAINDICATION` sont persistés.

## Evidence / contradiction gate

PASS — absence d'induction directe, tailles/volumes, entretien et pièces reposent sur les sources Bialetti actuelles. L'adaptateur est une route distincte et n'est jamais présenté comme compatibilité native. Aucun claim gustatif n'est déduit de l'aluminium.

## Brief gate

PASS — le brief v2 dérive du decision artifact et du ledger : query/cluster, intent, JTBD, décision, scope, critères, preuves, trade-offs, handoffs, anti-patterns, angle, success criteria et outline spécifique sont persistés.

## Post-draft fact-check

PASS — le contrôle confirme les tailles/volumes, l'absence d'induction directe, la route adaptateur, l'entretien manuel et la distinction des pièces. Aucun faux hands-on ni généralisation abusive.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Construction aluminium alimentaire | `USED` | section matériau + ouverture |
| Pas d'induction directe | `USED` | hard gate d'ouverture |
| Adaptateur induction comme route distincte | `USED` | bloc des trois routes |
| Tailles 1 / 2 / 3 / 4 / 6 / 9 / 12 / 18 | `USED` | matrice tailles / volumes |
| Volumes ≈ 60 / 90 / 130 / 185 / 250 / 410 / 595 / 800 ml | `USED` | matrice |
| Largeurs de base ≈ 7 à 13,5 cm | `USED` | matrice |
| Choisir la taille pour le volume habituel | `USED` | conséquence après la matrice |
| “Tasses” moka ≠ mugs | `USED` | introduction de la matrice |
| Lavage manuel / pas lave-vaisselle | `USED` | entretien |
| Ne pas utiliser la poignée comme levier | `USED` | entretien |
| Entonnoirs référencés par taille | `USED` | pièces |
| 3 et 4 tasses : même diamètre d'entonnoir mais longueur différente | `USED` | exemple de compatibilité fine |
| Joints + filtres référencés par taille | `USED` | pièces |
| 3 et 4 tasses : mêmes dimensions de joint / filtre | `USED` | contraste avec le funnel |
| Variantes aluminium ne deviennent pas induction par finition | `USED` | cadrage produit |
| Choix détaillé de capacité | `HANDOFF` | `/capacites/` |
| Dosage générique | `HANDOFF` | `/guides/dosage-cafe-cafetiere-italienne/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Venus | `HANDOFF` | `/modeles/bialetti-venus/` |
| Moka Induction | `HANDOFF` | `/modeles/bialetti-moka-induction/` |
| Origine 1933 comme axe principal | `EXCLUDED` | contexte non nécessaire à la décision |
| Prix figé | `EXCLUDED` | volatil |
| Meilleur goût lié à l'aluminium | `EXCLUDED` | preuve insuffisante |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — la page reste utile sans affiliation : elle donne une matrice de tailles, distingue les routes induction et montre pourquoi la pièce exacte dépend de plus qu'un simple diamètre.

## Trust / SEO / technical

PASS éditorial — pas de faux test, pas de prix figé, pas de matériau transformé en promesse gustative. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review est commitée après ses artefacts v2, son record, son fichier source, le registry et les inputs méthodologiques MODEL v2. Toute modification ultérieure doit rendre le PASS stale via `validate_model_workflow.py`.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

# Model analysis — Bialetti Moka Express

Date : 2026-09-17
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gate

PASS — le workflow Model cluster a régénéré le site, validé les liens internes et exécuté `validate_models.py` sans blocker. La page conserve `noindex,follow` et son canonical propre `/modeles/bialetti-moka-express/`.

## Intent gate

PASS — la page aide d'abord à choisir la bonne Moka Express selon plaque, volume habituel et taille, puis à éviter une erreur de pièce détachée. Elle ne se transforme ni en mode d'emploi générique ni en comparatif Bialetti exhaustif.

## Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Consommation dans le draft |
|---|---|---|
| Construction aluminium alimentaire | `USED` | section matériau + ouverture |
| Pas d'induction directe | `USED` | hard gate d'ouverture |
| Adaptateur induction comme route distincte | `USED` | ouverture + bloc des trois routes |
| Tailles 1 / 2 / 3 / 4 / 6 / 9 / 12 / 18 | `USED` | matrice tailles / volumes |
| Volumes ≈ 60 / 90 / 130 / 185 / 250 / 410 / 595 / 800 ml | `USED` | matrice |
| Largeurs de base ≈ 7 à 13,5 cm | `USED` | matrice |
| Choisir la taille pour le volume habituel | `USED` | conséquence sous la matrice |
| “Tasses” moka ≠ mugs | `USED` | introduction de la matrice |
| Lavage manuel / pas lave-vaisselle | `USED` | section entretien |
| Ne pas utiliser la poignée comme levier | `USED` | section entretien |
| Entonnoirs référencés par taille | `USED` | section pièces |
| 3 et 4 tasses : même diamètre d'entonnoir mais longueur différente | `USED` | exemple central de la section pièces |
| Joints + filtres référencés par taille | `USED` | section pièces |
| 3 et 4 tasses : mêmes dimensions de joint / filtre | `USED` | contraste avec le funnel |
| Variantes aluminium ne deviennent pas induction par leur finition | `USED` | ouverture |
| Choix détaillé de capacité | `HANDOFF` | `/capacites/` |
| Dosage générique | `HANDOFF` | `/guides/dosage-cafe-cafetiere-italienne/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Venus | `HANDOFF` | `/modeles/bialetti-venus/` |
| Moka Induction | `HANDOFF` | `/modeles/bialetti-moka-induction/` |
| Origine 1933 | `EXCLUDED` | contexte historique non nécessaire à la décision |
| Prix figé | `EXCLUDED` | volatil et non nécessaire au rôle PRODUCT |
| Claim de meilleur goût lié à l'aluminium | `EXCLUDED` | preuve insuffisante ; explicitement refusé dans le draft |

Aucun élément décisionnel du research brief n'est en statut `MISSING`.

## Factuality / evidence

PASS — les chiffres de taille, volumes, bases et pièces reposent sur les pages Bialetti actuelles. Le draft ne transforme pas la construction aluminium en avantage gustatif.

## Affiliate value

PASS — la page reste utile sans aucun lien affilié : elle donne une vraie matrice de tailles, distingue les trois routes sur induction et explique une incompatibilité de pièces qui n'est pas visible dans une simple fiche marchande.

## Model / cluster distinction

PASS — la Moka Express est structurée autour de son amplitude de tailles, de l'absence d'induction directe et de ses pièces. Cette architecture ne clone ni Venus ni Moka Induction.

## Trust / editorial

PASS — aucun faux hands-on, aucun prix figé, aucun raccourci matériau = goût, pas de métadiscours SEO et pas de conclusion promotionnelle artificielle.

## SEO / technical

PASS — title / H1 alignés, meta spécifique, canonical propre, `noindex,follow`, sources externes vérifiées et maillage contextuel.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page doit rester `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite de la rendre indexable.

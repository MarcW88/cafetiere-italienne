# Model analysis — Bialetti Moka Induction

Date : 2026-09-17
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gate

PASS — le workflow Model cluster a régénéré le site, validé les liens internes et exécuté `validate_models.py` sans blocker. La page conserve `noindex,follow` et son canonical propre `/modeles/bialetti-moka-induction/`.

## Intent gate

PASS — la page explique ce que la Moka Induction change réellement par rapport à Moka Express et Venus, puis traite les risques propres au modèle : détection induction, volume exact selon variante et génération des pièces.

## Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Consommation dans le draft |
|---|---|---|
| Base bi-layer inox + aluminium | `USED` | section construction |
| Partie supérieure aluminium | `USED` | section construction + comparaison |
| Compatible induction, gaz, électrique, céramique | `USED` | hard gate d'ouverture |
| Vérifier le diamètre minimal de la plaque | `USED` | hard gate d'ouverture |
| Tailles actuelles 2 / 4 / 6 | `USED` | matrice tailles |
| Volumes ≈ 100 / 150 / 280 ml | `USED` | matrice |
| Bases ≈ 9,5 / 10 / 11,5 cm | `USED` | hard gate + matrice |
| Lavage manuel | `USED` | section entretien |
| Éviter pleine puissance / ébullition prolongée | `USED` | section entretien |
| Éditions D&G avec volumes différents | `USED` | section variante exacte |
| 2 tasses D&G ≈ 90 ml | `USED` | exemple de variation |
| 4 tasses D&G ≈ 190 ml | `USED` | exemple de variation |
| Funnel actuel Bi-Layer 2 / 4 / 6 | `USED` | section pièces |
| Funnel pré‑2020 distinct | `USED` | section pièces |
| Ancien modèle identifiable par bande silicone noire | `USED` | section pièces |
| Anciennes tailles pré‑2020 3 / 6 | `USED` | section pièces |
| Joints / filtres par taille | `USED` | section pièces |
| Venus = tout inox | `USED` | comparaison modèle frère |
| Moka Express = aluminium hors induction directe | `USED` | comparaison modèle frère |
| Capacités générales | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Comparatif induction | `HANDOFF` | `/comparatifs/cafetiere-italienne-induction/` |
| Prix figé | `EXCLUDED` | volatil et non nécessaire au rôle PRODUCT |
| Claim de goût supérieur | `EXCLUDED` | non démontré |
| Collaborations comme branche fonctionnelle autonome | `EXCLUDED` | seules leurs différences documentées de volume sont utilisées |

Aucun élément décisionnel du research brief n'est en statut `MISSING`.

## Factuality / evidence

PASS — le draft distingue correctement la référence Bi-Layer actuelle, les éditions D&G consultées et l'ancien modèle pré‑2020. Les chiffres ne sont pas fusionnés entre variantes.

## Affiliate value

PASS — la page apporte des conséquences d'achat concrètes : diamètre réellement détectable, volumes non équivalents entre gammes, variante exacte et diagnostic de génération avant achat de pièces.

## Model / cluster distinction

PASS — Moka Induction est construite autour de l'hybridation des matériaux et du risque de génération. Elle ne duplique ni la page Venus ni la page Moka Express.

## Trust / editorial

PASS — aucun faux hands-on, pas de claim gustatif, pas de prix figé et pas de généralisation abusive d'une variante à toute la famille.

## SEO / technical

PASS — title / H1 alignés, meta spécifique, canonical propre, `noindex,follow`, sources externes et maillage contextuel.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page doit rester `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite de la rendre indexable.

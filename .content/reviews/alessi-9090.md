# Model analysis — Alessi 9090

Date : 2026-09-17
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gate

PASS — le workflow Model cluster a régénéré le site, validé les liens internes et exécuté `validate_models.py` sans blocker. La page conserve `noindex,follow` et son canonical propre `/modeles/alessi-9090/`.

## Intent gate

PASS — la page répond à la vraie question produit : ce que la 9090 apporte concrètement, quelle taille choisir, quelles limites vérifier sur induction et quelles pièces sont liées à la référence.

## Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Consommation dans le draft |
|---|---|---|
| Design Richard Sapper | `USED` | hero / cadrage sans prestige creux |
| Inox 18/10 | `USED` | ouverture + construction |
| Fond magnétique induction | `USED` | section induction |
| Fermeture à levier | `USED` | ouverture + bloc fonctionnel |
| Base élargie | `USED` | bloc fonctionnel |
| Bec anti-goutte | `USED` | bloc fonctionnel |
| Plus de 120 étapes de fabrication | `USED` | ouverture / justification du premium |
| Tailles 1 / 3 / 6 / 10 | `USED` | matrice tailles |
| 1 tasse ≈ 70 ml / 9,5 cm | `USED` | matrice + hard gate induction |
| Seuil de détection 90 mm à vérifier pour la 1 tasse | `USED` | hard gate dédié |
| 3 tasses ≈ 150 ml / 11 cm | `USED` | matrice |
| 6 tasses ≈ 300 ml / 12,5 cm | `USED` | matrice avec conversion qualifiée |
| 10 tasses ≈ 500 ml / 14,5 cm | `USED` | matrice avec conversion qualifiée |
| Contradiction officielle 1979 / 1980 | `USED` | formulation prudente “autour de 1980” |
| Compasso d'Oro / MoMA | `EXCLUDED` | contexte culturel non utilisé comme preuve de performance |
| Joints spécifiques 1 / 3 / 6 / 10 tasses | `USED` | section pièces |
| Funnel 6 tasses / microfiltre / réducteur / funnel 10 tasses | `USED` | section pièces |
| Édition 9090/3 CP 2026 | `USED` | section variante actuelle |
| PVD noir / 3 tasses / 15 cl / 999 pièces | `USED` | section CP avec distinction finition / architecture |
| Capacités générales | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Univers Alessi | `HANDOFF` | `/marques/alessi/` |
| Comparatif design | `HANDOFF` | `/comparatifs/cafetiere-italienne-design/` |
| Comparatif inox | `HANDOFF` | `/comparatifs/cafetiere-italienne-inox/` |
| Prix figé | `EXCLUDED` | volatil et non nécessaire à la décision |
| “meilleur café” grâce au design / inox | `EXCLUDED` | non démontré et explicitement refusé |

Aucun élément décisionnel du research brief n'est en statut `MISSING`.

## Factuality / evidence

PASS — les caractéristiques de conception et les tailles reposent sur les fiches Alessi. Les conversions impériales des 6 et 10 tasses sont explicitement arrondies. La contradiction 1979 / 1980 est conservée et qualifiée au lieu d'être lissée.

## Affiliate value

PASS — la page explique ce qui distingue réellement l'objet premium, donne des volumes et diamètres utiles, documente le seuil induction et montre que les pièces de rechange sont liées aux références / tailles.

## Model / cluster distinction

PASS — la 9090 a une architecture éditoriale propre : mécanique de fermeture, construction premium, tailles, pièces Alessi et édition CP. Elle ne copie pas la logique Bialetti des trois autres pages modèles.

## Trust / editorial

PASS — aucun faux test, aucun prestige transformé en qualité café, pas de prix figé et pas de date historique faussement absolutisée.

## SEO / technical

PASS — title / H1 alignés, meta spécifique, canonical propre, `noindex,follow`, sources officielles et maillage contextuel.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page doit rester `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite de la rendre indexable.

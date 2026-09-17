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

PASS — le record v2 pointe vers research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, post-draft fact-check et review. Les sources suivies sont `scripts/apply-model-core-reviewed.mjs` et l'override ciblé `scripts/apply-model-bialetti-moka-induction-v2-reviewed.mjs`.

## Retest finding resolved

Le retest a invalidé le précédent PASS sur un point précis : `≈100 ml` pour la 2 tasses était présenté comme chiffre courant unique, alors que les sources vérifiées ne sont pas homogènes.

- Bialetti NZ : ≈100 ml sur la Bi-Layer noire consultée ;
- shop officiel Bialetti Russie : ≈90 ml sur la Moka Induction 2020 ;
- retailer belge actuel : ≈90 ml sur la référence rouge européenne.

La page qualifie désormais la 2 tasses à `≈90–100 ml selon référence / marché` et rattache le diamètre 9,5 cm à la référence NZ vérifiée au lieu de le présenter comme invariant mondial.

## Intent / JTBD gate

PASS — le JTBD inclut explicitement la référence / le marché réellement acheté, en plus du diamètre de foyer et de la génération de pièces.

## Evidence / contradiction gate

PASS — la contradiction 90 vs 100 ml est conservée et résolue par qualification, pas lissée. Les éditions D&G restent attachées à leur édition exacte.

## Flexible-capacity gate

PASS / not decision-relevant — aucune source vérifiée du dossier Moka Induction ne documente un filtre réducteur ou un mode multi-rendement fabricant comparable à la 9090. Le nouveau contrôle MODEL ne crée donc pas de manque et n'autorise aucune extrapolation à partir des tailles 2/4/6.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Base bi-layer inox + aluminium | `USED` | section construction |
| Partie supérieure aluminium | `USED` | construction + comparaison |
| Compatible induction, gaz, électrique, céramique | `USED` | ouverture |
| Vérifier le diamètre minimal détecté par la plaque | `USED` | hard gate induction |
| Tailles actuelles 2 / 4 / 6 | `USED` | matrice tailles |
| 2 tasses ≈100 ml sur référence NZ | `USED` | qualifiée dans la plage marché/référence |
| 2 tasses ≈90 ml sur références RU / BE | `USED` | qualifiée dans la plage marché/référence |
| 2 tasses standard = ≈90–100 ml selon référence / marché | `USED` | matrice + paragraphe variante exacte |
| 4 / 6 standard ≈150 / 280 ml sur références vérifiées | `USED` | matrice |
| Bases NZ ≈9,5 / 10 / 11,5 cm | `USED` | matrice avec qualification de la 2 tasses |
| Variantes D&G aux volumes différents | `USED` | section variantes |
| Lavage manuel | `USED` | entretien |
| Funnel actuel Bi-Layer 2 / 4 / 6 | `USED` | pièces |
| Funnel pré-2020 distinct | `USED` | pièces / génération |
| Ancienne génération identifiable par bande silicone noire | `USED` | diagnostic génération |
| Joints / filtres par taille | `USED` | pièces |
| Venus = tout inox | `USED` | modèle frère |
| Moka Express = aluminium hors induction directe | `USED` | modèle frère |
| Capacités générales | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Prix figé | `EXCLUDED` | volatil |
| Claim de goût supérieur | `EXCLUDED` | non démontré |

Aucun élément décisionnel n'est en statut `MISSING`.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness note: review rafraîchie après l'ajout de la règle MODEL sur les réducteurs / multi-rendements. Aucun input spécifique à Moka Induction n'a changé et aucun mode de capacité flexible documenté n'est applicable sur les preuves actuelles.

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

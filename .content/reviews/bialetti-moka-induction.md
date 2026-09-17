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

PASS — le JTBD inclut maintenant explicitement la référence / le marché réellement acheté, en plus du diamètre de foyer et de la génération de pièces. Le lecteur ne doit plus transférer automatiquement une spec vue sur une autre locale.

## Evidence / contradiction gate

PASS — la contradiction 90 vs 100 ml est conservée et résolue par qualification, pas lissée. Les éditions D&G restent attachées à leur édition exacte : des 4 tasses vérifiées sont ≈150 ou ≈190 ml ; une Blu Mediterraneo 6 tasses vérifiée est ≈225 ml, contre ≈280 ml sur la standard vérifiée.

## Brief gate

PASS — le brief impose maintenant `référence exacte → marché → volume → diamètre → génération`. Il interdit explicitement de transformer 100 ml NZ en spec mondiale.

## Post-draft fact-check

PASS — le contrôle confirme la plage 2 tasses ≈90–100 ml selon référence / marché, les standards 4/6 ≈150/280 ml sur les références vérifiées, les variantes D&G attachées à leurs pages exactes, la séparation pré-2020 / Bi-Layer et l'absence de claims gustatifs.

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
| D&G 4 tasses ≈190 ml sur édition vérifiée | `USED` | section variantes |
| Blu Mediterraneo 4 tasses ≈150 ml | `USED` | section variantes |
| Blu Mediterraneo 6 tasses ≈225 ml | `USED` | section variantes |
| Lavage manuel | `USED` | entretien |
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
| Catalogue exhaustif des collaborations | `EXCLUDED` | seules les différences documentées utiles à la décision sont retenues |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — la page évite désormais quatre erreurs d'achat : badge induction interprété trop largement, volume marché généralisé, édition confondue et pièce commandée pour la mauvaise génération.

## Trust / SEO / technical

PASS éditorial — pas de faux test, pas de claim gustatif, pas de prix figé et pas de généralisation de variante ou de marché. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review est postérieure à la recherche, l'audit FAIL, l'evidence packet, le ledger, le decision artifact, le brief, le post-draft, le record, l'override rendu et la configuration MODEL mise à jour.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

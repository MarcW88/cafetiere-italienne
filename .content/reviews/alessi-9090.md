# Model analysis — Alessi 9090

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Test context

Cette review fait suite à un retest volontaire d'une page déjà en PASS. Le nouveau passage a trouvé un manque décisionnel réel : les réducteurs étaient mentionnés comme pièces, mais leur **fonction de capacité flexible** n'était pas consommée par la page.

Le test pré-correction a donc été traité comme `FAIL — DECISION-RELEVANT OMISSION`, puis corrigé par la chaîne research → audit → evidence → ledger → decision → brief → source → post-draft → PUBLISH_REVIEW.

## Machine gates

- `validate_models.py` contrôle rendu, canonical, robots, sources et liens ;
- `validate_model_workflow.py` contrôle artefacts v2, registry, source files et fraîcheur.

La page reste `noindex,follow`.

## Artifact / decision gate

PASS — research, audit, evidence packet, ledger, decision artifact, brief, post-draft et sources de contenu sont alignés.

Le JTBD inclut désormais le cas réel où l'utilisateur alterne entre deux volumes et veut savoir si une seule 9090 peut les couvrir sans acheter deux tailles.

## Reducer finding resolved

Le manuel 9090 documente trois couples de capacité avec filtre réducteur :

- 9090 3 tasses → 1 tasse ;
- 9090 6 tasses → 3 tasses ;
- 9090 10 tasses → 6 tasses.

Alessi commercialise toujours aujourd'hui les réducteurs dédiés correspondants : 17605/R, 17602/R et 17611/R. L'existence/compatibilité de ces pièces est donc vérifiée par source primaire actuelle ; les rendements exacts proviennent du manuel 9090 reproduit par des bibliothèques de manuels.

La page ne généralise aucun autre rendement et ne présente jamais un réducteur comme universel.

## Evidence / contradiction gate

PASS — inox 18/10, fond magnétique, levier, base, bec, fabrication, tailles, pièces et édition CP restent fondés sur les sources Alessi.

Les deux qualifications importantes restent explicites :

- 1979 / 1980 selon pages officielles → formulation prudente “autour de 1980” ;
- réducteurs actuels = source primaire Alessi ; mode d'emploi 3→1 / 6→3 / 10→6 = manuel 9090 reproduit, sans sur-promesse sur la source.

## Brief / post-draft gate

PASS — le brief impose maintenant la séquence `volume nominal → second rendement documenté éventuel → plaque → mécanique → pièces`.

Le post-draft confirme que seuls 3→1, 6→3 et 10→6 sont consommés, que chaque réducteur reste lié à sa taille et qu'aucun rendement intermédiaire n'est inventé.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Inox 18/10 + fond magnétique | `USED` | construction / induction |
| Fermeture à levier | `USED` | différence fonctionnelle |
| Base élargie + bec anti-goutte | `USED` | différence fonctionnelle |
| Plus de 120 étapes de fabrication | `USED` | premium tangible sans claim café |
| Tailles 1 / 3 / 6 / 10 | `USED` | matrice tailles |
| Volumes ≈ 70 / 150 / 300 / 500 ml | `USED` | matrice, conversions qualifiées |
| Diamètres ≈ 9,5 / 11 / 12,5 / 14,5 cm | `USED` | matrice + induction |
| Seuil induction 90 mm pour la 1 tasse | `USED` | hard gate induction |
| Réducteur 9090/3 = 17605/R | `USED` | section capacité flexible + pièces |
| 9090/3 : 3→1 tasse | `USED` | section capacité flexible |
| Réducteur 9090/6 = 17602/R | `USED` | section capacité flexible + pièces |
| 9090/6 : 6→3 tasses | `USED` | section capacité flexible |
| Réducteur 9090/M = 17611/R | `USED` | section capacité flexible + pièces |
| 9090 10 tasses : 10→6 tasses | `USED` | section capacité flexible |
| Réducteurs non universels | `USED` | callout + section pièces |
| Joints / funnels / microfiltres spécifiques | `USED` | réparabilité / exactitude pièce |
| Divergence officielle 1979 / 1980 | `USED` | formulation “autour de 1980” |
| 9090/3 CP 2026 | `USED` | section variante distincte |
| Capacité générale | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | guide induction |
| Inox / comparaison design | `HANDOFF` | guides et comparatifs dédiés |
| Compasso d'Oro / MoMA comme preuve de performance | `EXCLUDED` | contexte culturel, pas preuve café |
| Prix figé | `EXCLUDED` | volatil |
| Meilleur goût grâce à l'inox/design | `EXCLUDED` | non démontré |

Aucun élément décisionnel n'est en statut `MISSING` après correction.

## Affiliate value / cluster gate

PASS — la page apporte désormais une valeur d'achat supplémentaire : elle aide à choisir une taille non seulement par son volume nominal, mais aussi par sa **flexibilité documentée**. Un lecteur qui alterne entre 3 et 6 tasses peut comprendre pourquoi une 9090/6 avec son réducteur peut être plus cohérente qu'une lecture stricte des variantes.

## Workflow improvement produced by the test

PASS — le test a renforcé le workflow global : lorsqu'un modèle possède un réducteur, demi-capacité ou multi-rendement documenté capable de changer le choix, cette information doit désormais être recherchée et consommée comme critère de décision, pas rangée uniquement dans “pièces détachées”.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Freshness gate : cette review est postérieure au research corrigé, audit FAIL, evidence packet, ledger, decision artifact, brief, source override, record, post-draft, configuration MODEL et deux skills MODEL mis à jour.

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

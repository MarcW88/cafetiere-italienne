# Model analysis — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Test context

Cette review fait suite à un test volontaire du workflow sur une page déjà en PASS. Une nouvelle passe de recherche a trouvé un manque décisionnel réel : la limite de taille de l'adaptateur induction officiel Bialetti n'était pas consommée par le draft.

Le test pré-correction a donc été traité comme `FAIL — KEEP_NOINDEX`, puis corrigé par la chaîne complète research → evidence → ledger → decision → brief → source → post-draft → PUBLISH_REVIEW.

## Machine gates

La review est structurée pour les deux gates obligatoires :

- `validate_models.py` — rendu, canonical, robots, sources, liens et blockers machine ;
- `validate_model_workflow.py` — registry, record, artefacts v2, markers sémantiques et fraîcheur Git de la review.

Le CI constitue l'autorité machine finale. La page reste `noindex,follow`.

## Artifact gate

PASS — le record v2 pointe vers research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, post-draft fact-check et review. Le registry et l'URL sont alignés.

Fichiers source suivis :

- `scripts/apply-model-core-reviewed.mjs` ;
- `scripts/apply-model-bialetti-moka-express-v2-reviewed.mjs`.

## Intent / JTBD gate

PASS — le JTBD porte sur une quantité de moka précise, une plaque compatible et la capacité à identifier les bonnes pièces. L'anxiété induction inclut désormais la question correcte : **l'adaptateur officiel couvre-t-il réellement la taille choisie ?**

Push/Pull/Anxiety/Habit, Big Hire/Little Hire et critères `MUST_HAVE / HIGH / CONDITIONAL / CONTRAINDICATION` sont persistés.

## Evidence / contradiction gate

PASS — absence d'induction directe, tailles/volumes, entretien et pièces reposent sur les sources Bialetti actuelles.

Contradiction résolue :

- la FAQ générale de la page Moka Express formule largement l'adaptateur comme solution pour les modèles aluminium ;
- la fiche dédiée **Bialetti Induction Plate 13 cm** et le bloc Use & Care Moka Express indiquent explicitement une compatibilité **jusqu'à 6 tasses** ;
- pour la recommandation d'achat, la contrainte spécifique de l'accessoire prévaut.

La page ne présente donc plus l'adaptateur officiel comme route validée pour les Moka Express 9, 12 ou 18 tasses.

## Brief gate

PASS — le brief v2 dérive du decision artifact et du ledger et inclut désormais la limite de l'adaptateur dans le scope, les critères, contradictions, anti-patterns et success criteria.

## Post-draft fact-check

PASS — le contrôle confirme :

- aluminium et absence d'induction directe ;
- tailles/volumes documentés et caractère approximatif des ml ;
- adaptateur officiel 13 cm documenté jusqu'à 6 tasses ;
- aucune extension de cette compatibilité aux 9/12/18 ;
- entretien manuel ;
- distinction des pièces ;
- aucun faux hands-on ni claim gustatif.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Construction aluminium alimentaire | `USED` | section matériau + ouverture |
| Pas d'induction directe | `USED` | hard gate d'ouverture |
| Adaptateur induction comme route distincte | `USED` | ouverture + bloc des routes induction |
| Adaptateur officiel 13 cm limité jusqu'à 6 tasses | `USED` | ouverture et carte “Garder la Moka Express” |
| Moka Express 9/12/18 non couvertes par la compatibilité documentée de l'adaptateur officiel | `USED` | exclusion explicite dans les deux blocs induction |
| FAQ générique plus large que la fiche accessoire | `USED` | contradiction résolue en faveur de la source spécifique ; pas exposée inutilement comme métadiscours au lecteur |
| Tailles 1 / 2 / 3 / 4 / 6 / 9 / 12 / 18 | `USED` | matrice tailles / volumes |
| Volumes ≈ 60 / 90 / 130 / 185 / 250 / 410 / 595 / 800 ml | `USED` | matrice |
| Volumes préparés = valeurs approximatives | `USED` | formulation “approx.” + research/decision guardrail |
| Largeurs de base ≈ 7 à 13,5 cm | `USED` | matrice |
| Choisir la taille pour le volume habituel | `USED` | conséquence après la matrice |
| “Tasses” moka ≠ mugs | `USED` | introduction de la matrice |
| Lavage manuel / pas lave-vaisselle | `USED` | entretien |
| Ne pas utiliser la poignée comme levier | `USED` | entretien |
| Entonnoirs référencés par taille | `USED` | pièces |
| 3 et 4 tasses : même diamètre d'entonnoir mais longueur différente | `USED` | exemple de compatibilité fine |
| Joints + filtres référencés par taille | `USED` | pièces |
| 3 et 4 tasses : mêmes dimensions de joint / filtre | `USED` | contraste avec le funnel |
| Confusion utilisateurs taille/volume/induction | `HANDOFF` | sert au JTBD ; dosage/usage détaillé reste dans les guides |
| Choix détaillé de capacité | `HANDOFF` | `/capacites/` |
| Dosage générique | `HANDOFF` | `/guides/dosage-cafe-cafetiere-italienne/` |
| Aluminium vs inox | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Pièces Bialetti | `HANDOFF` | `/accessoires/pieces-detachees-bialetti/` |
| Venus | `HANDOFF` | `/modeles/bialetti-venus/` |
| Moka Induction | `HANDOFF` | `/modeles/bialetti-moka-induction/` |
| Origine 1933 comme axe principal | `EXCLUDED` | contexte non nécessaire à la décision |
| Prix figé | `EXCLUDED` | volatil |
| Meilleur goût lié à l'aluminium | `EXCLUDED` | preuve insuffisante |

Aucun élément décisionnel n'est en statut `MISSING` après correction.

## Affiliate value / cluster gate

PASS — la page apporte maintenant une valeur d'achat supplémentaire : elle empêche de transposer l'adaptateur officiel aux grands formats simplement parce qu'ils appartiennent à la même famille Moka Express.

## Trust / SEO / technical

PASS éditorial — pas de faux test, pas de prix figé, pas de matériau transformé en promesse gustative. La fiche officielle de l'adaptateur est ajoutée aux sources. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review est commitée après le research corrigé, l'audit de test, l'evidence packet, le ledger, le decision artifact, le brief, le post-draft, le record, les fichiers source et la configuration MODEL mise à jour.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

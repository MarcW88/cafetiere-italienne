# Model workflow parity — bloc-notes-numerique

Date : 2026-09-17
Référence : `MarcW88/bloc-notes-numerique` commit `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`
Scope : branche `PRODUCT` appliquée aux URLs `/modeles/`.

## Verdict initial

`PARITÉ MÉTHODOLOGIQUE PARTIELLE — PARITÉ OPÉRATIONNELLE ÉCHOUÉE`

Le workflow Model v1 de Cafetière Italienne avait correctement repris plusieurs principes : sources primaires, fact-check, valeur affiliée, absence de faux hands-on, architecture non templatisée et research-to-draft coverage. Il pouvait cependant produire un `PASS — READY_FOR_HUMAN_VALIDATION` sans matérialiser plusieurs étapes qui faisaient la profondeur du workflow PRODUCT de Bloc Notes.

## Écarts observés

Avant v2, il manquait comme obligations persistées :

- identité produit/variante structurée et alignée avec un registry ;
- audit SEO/intention séparé ;
- JTBD, Push/Pull/Anxiety/Habit, Big Hire/Little Hire ;
- decision artifact avant le content brief ;
- evidence packet séparé du draft ;
- evidence/claim ledger ;
- résolution traçable des contradictions ;
- post-draft fact-check persistant ;
- machine gate contrôlant l'existence et la cohérence de ces artefacts.

La profondeur de la page finale ne suffisait donc pas à démontrer la profondeur du processus.

## Principe de migration v2

Cible : réutiliser au moins 80 % des skills existants et limiter la couche MODEL custom à l'orchestration, aux particularités moka et à la publication.

La chaîne devient :

`cluster/page audit → SEO/search intent → JTBD → product record → evidence packet → evidence ledger → signaux d'usage si pertinents → contradictions → decision artifact → affiliate value → content brief → content-and-copy → post-draft fact-check → coverage → writing passes → linking → SEO → QA → validators → PUBLISH_REVIEW`.

## Garde-fou sur les signaux communautaires

Les avis/forums/Reddit servent à détecter questions, anxiétés, confusions et cas limites. Ils ne deviennent pas des faits produit. Compatibilité, dimensions, volumes, entretien et autres claims vérifiables restent liés à la hiérarchie de preuve.

## Parité opérationnelle cible

Une page ne peut plus obtenir un PASS v2 sans :

1. record JSON ;
2. audit ;
3. evidence packet ;
4. evidence ledger ;
5. decision artifact avec JTBD ;
6. post-draft check ;
7. review `Workflow version : 2` ;
8. registry aligné ;
9. `validate_models.py` + `validate_model_workflow.py` verts.

Les anciens PASS v1 sont considérés comme stale jusqu'à migration complète.

## Statut de migration

Les quatre pages existantes sont migrées dans cette passe :

- `bialetti-venus`
- `bialetti-moka-express`
- `bialetti-moka-induction`
- `alessi-9090`

L'indexation reste hors scope : toutes les pages restent `noindex,follow` jusqu'à validation humaine explicite et instruction séparée d'indexer.

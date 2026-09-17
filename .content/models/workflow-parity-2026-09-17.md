# Model workflow parity — bloc-notes-numerique

Date : 2026-09-17
Référence : `MarcW88/bloc-notes-numerique` commit `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`
Scope : branche `PRODUCT` appliquée aux URLs `/modeles/`.

## Verdict final

`PARITÉ MÉTHODOLOGIQUE ET OPÉRATIONNELLE ATTEINTE — MODEL WORKFLOW v2`

Le workflow Model v1 de Cafetière Italienne avait correctement repris plusieurs principes : sources primaires, fact-check, valeur affiliée, absence de faux hands-on, architecture non templatisée et research-to-draft coverage. Il pouvait cependant produire un `PASS — READY_FOR_HUMAN_VALIDATION` sans matérialiser plusieurs étapes qui faisaient la profondeur du workflow PRODUCT de Bloc Notes.

Le workflow v2 corrige désormais cet écart au niveau **des artefacts persistés, de l'orchestration et du CI**.

## Écarts v1 désormais corrigés

Le v2 rend obligatoires :

- identité produit/variante structurée et alignée avec un registry ;
- audit SEO/intention séparé ;
- JTBD, Push/Pull/Anxiety/Habit, Big Hire/Little Hire ;
- evidence packet séparé du draft ;
- evidence/claim ledger ;
- résolution traçable des contradictions ;
- decision artifact avant le content brief ;
- content brief persistant ;
- post-draft fact-check persistant ;
- research-to-draft coverage ;
- machine gate contrôlant existence, cohérence et fraîcheur de ces artefacts.

La profondeur de la page finale n'est donc plus utilisée comme preuve suffisante de la profondeur du processus.

## Chaîne v2

`cluster/page audit → SEO/search intent → JTBD → product record → evidence packet → evidence ledger → signaux d'usage si pertinents → contradictions → decision artifact → affiliate value → content brief → content-and-copy → post-draft fact-check → coverage → writing passes → linking → SEO → QA → validators → PUBLISH_REVIEW`.

## Garde-fou sur les signaux communautaires

Les avis/forums/Reddit servent à détecter questions, anxiétés, confusions et cas limites. Ils ne deviennent pas des faits produit. Compatibilité, dimensions, volumes, entretien et autres claims vérifiables restent liés à la hiérarchie de preuve.

Le cas Venus sert de test réel : des utilisateurs rapportent parfois qu'une Venus 2 tasses est détectée par leur foyer induction. Le workflow conserve ce signal comme `OBSERVED` mais maintient la compatibilité officielle Bialetti comme règle d'achat. La page explique désormais explicitement cette distinction.

## Artefacts requis par modèle

Une page ne peut obtenir un PASS v2 sans :

1. research brief ;
2. record JSON v2 ;
3. PAGE_AUDIT ;
4. evidence packet ;
5. evidence ledger ;
6. decision artifact avec JTBD ;
7. content brief ;
8. post-draft fact-check ;
9. review `Workflow version : 2` ;
10. registry aligné ;
11. fichiers source déclarés ;
12. `validate_models.py` + `validate_model_workflow.py` verts.

## Freshness gate

Le nouveau `validate_model_workflow.py` vérifie l'historique Git. La review doit être commitée après :

- son record ;
- tous les artefacts référencés ;
- les fichiers source du modèle ;
- le product registry ;
- la configuration et les deux skills MODEL v2.

Si un de ces inputs change après le PASS, la review devient automatiquement stale et le CI bloque jusqu'à un nouveau PUBLISH_REVIEW.

Cela ferme un défaut important du workflow v1 : une review pouvait rester `PASS` alors que la recherche ou le contenu avait changé.

## Migration des quatre modèles

Migrés et repassés en PUBLISH_REVIEW v2 :

- `bialetti-venus`
- `bialetti-moka-express`
- `bialetti-moka-induction`
- `alessi-9090`

Le registry `.content/products/registry.json` contient désormais les quatre identités produit et chaque record pointe vers la chaîne complète de ses artefacts.

## Validation réelle

GitHub Actions run `35237458351` — `Regenerate and quality-check Model cluster` : **SUCCESS**.

Étapes passées :

- regeneration du site ;
- validation de tous les liens internes ;
- `validate_models.py` ;
- `validate_model_workflow.py` ;
- commit du HTML régénéré.

Le HTML Venus généré contient bien la couche v2 : distinction entre volume documenté et rendement pratique, maintien de la règle officielle pour la 2 tasses sur induction et handoff vers les guides dosage/mouture.

## Publication

La parité workflow ne vaut pas validation humaine ni autorisation d'indexation. Les quatre pages restent `noindex,follow` jusqu'à validation humaine explicite et instruction séparée de les rendre indexables.

# Workflow test — Bialetti Moka Express

Date : 2026-09-17
Workflow : Model v2
Target : `/modeles/bialetti-moka-express/`

## Purpose

Tester le workflow sur une page déjà en `PASS — READY_FOR_HUMAN_VALIDATION` afin de vérifier qu'une nouvelle passe de recherche peut encore détecter un manque décisionnel réel et provoquer une correction ciblée plutôt qu'un simple ajout de texte.

## Pre-test state

La page indiquait correctement :

- Moka Express classique = aluminium ;
- pas d'induction directe ;
- adaptateur induction comme solution possible ;
- tailles 1 à 18, volumes, entretien et pièces.

Le research-to-draft coverage ne contenait aucun `MISSING`.

## Finding

`FAIL — DECISION-RELEVANT OMISSION`

La fiche officielle dédiée du Bialetti Induction Plate 13 cm précise :

- `Suitable for coffee makers up to 6 cups` ;
- `Suitable for Bialetti Moka Express Stovetops up to 6 cup`.

Le bloc Use & Care de la Moka Express précise également que le convertisseur est proposé pour les Moka jusqu'à 6 tasses.

En parallèle, la FAQ générale Moka Express formule plus largement l'adaptateur comme solution pour les modèles aluminium. Le draft suivait implicitement cette formulation large et présentait l'adaptateur comme route possible pour la gamme sans qualifier les tailles 9/12/18.

## Why it matters

C'est une erreur d'achat possible : un lecteur visant une Moka Express 9, 12 ou 18 tasses sur une cuisine induction pouvait croire que l'accessoire officiel constituait une route documentée.

Le manque est donc `MISSING` et bloquant, malgré :

- une page détaillée ;
- des sources officielles ;
- un ancien PASS ;
- une couverture correcte des autres décisions.

## Correction path

`research → evidence packet → evidence ledger → decision artifact → content brief → reviewed source → post-draft fact-check → PUBLISH_REVIEW`

Correction éditoriale :

- adaptateur officiel 13 cm = route documentée jusqu'à 6 tasses ;
- 9/12/18 = ne pas présenter l'adaptateur officiel comme compatibilité validée ;
- conserver Venus / Moka Induction / autre solution documentée comme alternatives rationnelles sur induction.

## Workflow result expected

Le test est réussi si :

1. le rendu final contient explicitement la limite `jusqu'à 6 tasses` ;
2. la fiche accessoire officielle est ajoutée aux sources ;
3. la review finale passe après tous les inputs ;
4. `validate_models.py` et `validate_model_workflow.py` passent ;
5. la page reste `noindex,follow`.

---
name: model-content-workflow
description: Workflow v2 de création/refonte des pages /modeles/ de cafetiere-italienne.be, aligné sur la profondeur PRODUCT de bloc-notes-numerique. Produit d'abord des artefacts JTBD, décision et preuve persistants, puis seulement une page décisionnelle sourcée et non templatisée.
metadata:
  adapted_for: cafetiere-italienne.be
  based_on: bloc-notes-numerique PRODUCT workflow
  workflow_version: 2
---

# Model Content Workflow v2

## Principe

> Pas de brief sans décision. Pas de décision sans JTBD et preuves. Pas de rédaction sans evidence ledger. Pas de PASS fondé uniquement sur le HTML final. Pas de PASS plus ancien que ses inputs.

Pour une page existante, commencer par `model-analysis-workflow / PAGE_AUDIT`.

## 1. Cluster, SEO et intention

Utiliser `content-audit`, `seo-content-audit`, `seo-keyword` et `search-intent` pour établir : rôle de l'URL, requête centrale, décisions du lecteur, modèle(s) frère(s), SERP/intention, chevauchements et handoffs.

Persist : `.content/models/audits/<slug>-YYYY-MM-DD.md`.

## 2. JTBD avant produit

Utiliser `jobs-to-be-done`. Formuler le progrès recherché sans nommer d'abord le produit. Documenter :

- circonstances ;
- Push / Pull / Anxiety / Habit ;
- Big Hire / Little Hire ;
- alternatives réelles ;
- critères `MUST_HAVE`, `HIGH`, `CONDITIONAL`, `CONTRAINDICATION` ;
- niveau de preuve des besoins (`OBSERVED`, `SUPPORTED`, `INFERRED`, `HYPOTHESIS`, `UNKNOWN`).

Les forums et avis peuvent révéler une friction ou une question ; ils ne remplacent pas une preuve produit.

## 3. Record produit / variante

Créer `.content/models/records/<slug>.json` avec identité canonique, URL, `PRODUCT`, marque, variante/génération importante, état `noindex,follow`, registry key, fichiers source et chemins de **tous** les artefacts v2 : research, audit, evidence, ledger, decision, brief, post-draft et review. Aligner ce record avec `.content/products/registry.json`.

Ne jamais inventer ASIN, prix, affiliation ou image.

## 4. Evidence packet

Construire `.content/models/evidence/<slug>-YYYY-MM-DD.md` depuis sources actuelles. Rechercher seulement ce qui peut changer le choix :

- version/génération/variante ;
- construction ;
- tailles et volumes ;
- plaque et diamètre de détection ;
- entretien ;
- pièces ;
- différences avec modèles frères ;
- contradictions ;
- limites capables d'écarter le produit.

Hiérarchie : fabricant/manual/support > distributeur officiel > retailer fiable > test indépendant nommé > patterns utilisateurs.

## 5. Evidence ledger / fact-check

Créer `.content/models/evidence-ledgers/<slug>-YYYY-MM-DD.md` avec au minimum :

| Claim | Evidence | Status | Source | Decision impact |
|---|---|---|---|---|

Statuts produit : `VERIFIED`, `SUPPORTED`, `INFERRED`, `UNKNOWN`, `OUTDATED`, `CONTRADICTED`.

Toute contradiction importante doit être arbitrée explicitement. `UNKNOWN` ne devient pas une certitude par besoin rédactionnel.

## 6. Signaux d'usage / review layer

Utiliser `evidence-based-reviews` lorsqu'un jugement d'ergonomie, fiabilité, expérience ou performance apparaît. Sans hands-on réel, ne jamais écrire “nous avons testé/mesuré/constaté”.

Les signaux communautaires servent à détecter questions, objections, confusion et edge cases ; ils restent attribués et ne deviennent pas une spec.

## 7. Decision artifact — obligatoire avant le brief

Créer `.content/models/decisions/<slug>-YYYY-MM-DD.md` avec :

- JTBD ;
- Push / Pull / Anxiety / Habit ;
- Big Hire / Little Hire ;
- critères de décision ;
- hard gates ;
- contraindications ;
- alternatives / modèles frères ;
- ce qui doit être `USED`, `HANDOFF` ou `EXCLUDED` ;
- angle éditorial et thèse.

Sans cet artefact, **interdiction de rédiger le content brief**.

## 8. Valeur originale

Avec `affiliate-value`, définir ce que la page apporte au-delà d'une fiche fabricant : erreur d'achat probable, conséquence pratique, incompatibilité partielle, pièce/génération, compromis, alternative rationnelle ou raison de ne pas acheter.

Test : la page reste-t-elle utile si tous les liens affiliés disparaissent ?

## 9. Content brief persistant

Utiliser `content-brief-authoring` et enregistrer `.content/models/briefs/<slug>-YYYY-MM-DD.md`.

Le brief consomme le decision artifact et l'evidence ledger. Il doit contenir au minimum :

- target query / cluster ;
- search intent ;
- reader / JTBD ;
- décision à résoudre ;
- scope et hors-scope ;
- critères de décision ;
- preuves / entities requises ;
- trade-offs / contradictions ;
- handoffs internes ;
- anti-patterns ;
- angle éditorial ;
- success criteria ;
- outline bespoke avec raison de chaque section.

Le modèle `PRODUCT` ne définit jamais une structure fixe.

## 10. Rédaction

Utiliser `content-and-copy`. Chaque section doit avoir une raison décisionnelle. Préserver les faits forts existants, corriger la structure avant d'ajouter de la prose, et ne jamais utiliser la longueur comme proxy de profondeur.

## 11. Post-draft fact-check persistant

Réextraire les claims du draft et enregistrer `.content/models/post-draft/<slug>-YYYY-MM-DD.md` avec verdict `PASS` ou `FAIL`, corrections, contradictions résolues, généralisations supprimées et contrôle des variantes.

## 12. Research-to-draft coverage

Pour chaque élément décisionnel du decision artifact/evidence ledger : `USED`, `HANDOFF`, `EXCLUDED`, `MISSING`. Tout `MISSING` décisionnel bloque le PUBLISH_REVIEW.

## 13. Finition rédactionnelle

Ordre : `humanizer` puis `general-writing`, en laissant leurs sous-passes internes jouer leur rôle ; ne pas relancer artificiellement les mêmes transformations. Ensuite `anti-ai-slop`.

Le skill `natural-writing` local est adapté au néerlandais et n'est donc pas imposé aux pages FR.

## 14. Maillage, SEO, visuel, QA

Appliquer :

- `internal-linking-audit` ;
- `seo-onpage` + `seo-technical` + `seo-best-practices` ;
- `editorial-image-planner` seulement si une image apporte une preuve/clarification réelle ;
- `site-design-review` si la structure visuelle a significativement changé ;
- `editorial-qa`.

## 15. Gate final

Appeler `model-analysis-workflow / PUBLISH_REVIEW` puis exécuter :

- `python3 validate_models.py` ;
- `python3 validate_model_workflow.py`.

Le résultat requis est `PASS — READY_FOR_HUMAN_VALIDATION`, `Workflow version : 2`, avec :

- artefact gate complet ;
- brief gate complet ;
- zéro `MISSING` décisionnel ;
- **freshness gate** : le commit de review doit être postérieur au record, aux artefacts, aux fichiers source du modèle, au registry et aux inputs méthodologiques déclarés.

Toute modification ultérieure d'un de ces inputs rend le PASS stale jusqu'à un nouveau PUBLISH_REVIEW.

## 16. Publication

Toujours `noindex,follow` tant que machine validation + PUBLISH_REVIEW v2 + validation humaine + instruction explicite d'indexer ne sont pas réunis.

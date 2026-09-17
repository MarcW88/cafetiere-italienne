---
name: model-content-workflow
description: Workflow de création et refonte des pages /modeles/ de cafetiere-italienne.be, adapté de la branche PRODUCT du workflow bloc-notes-numerique. Produit une fiche produit décisionnelle, sourcée, fact-checkée, non templatisée et sans faux hands-on.
metadata:
  adapted_for: cafetiere-italienne.be
  based_on: bloc-notes-numerique PRODUCT workflow
---

# Model Content Workflow

## Principe

> Pas de plan avant l'intention et les preuves. Pas de claim important sans source. Pas de structure fixe entre deux modèles.

Pour une page existante, commencer par `model-analysis-workflow / AUDIT`.

## 1. Intention

Avec `search-intent`, établir : topic principal, décision du lecteur, rôle de l'URL, modèle(s) frère(s) à distinguer, prochaine question logique et risque de cannibalisation.

## 2. Audit et récupération

Utiliser `content-audit`, puis `content-refresh` si nécessaire. Conserver les faits, tableaux ou liens encore utiles ; ne pas remplacer une information précise par une prose plus générique.

## 3. Research / evidence brief

Avec `fact-check`, construire avant le plan un registre :

| Claim / question | Source | Date | Status | Impact décisionnel |
|---|---|---|---|---|

Hiérarchie : fabricant/manual/support > distributeur officiel > retailer fiable > test indépendant nommé > patterns utilisateurs multi-sources.

Statuts : `VERIFIED`, `SUPPORTED`, `INFERRED`, `UNKNOWN`, `OUTDATED`, `CONTRADICTED`.

Pour une fiche modèle, rechercher en priorité **si pertinent** :

- référence/version/génération actuelle ;
- matériau et construction ;
- tailles et volumes réellement préparés ;
- plaques compatibles par taille ;
- diamètre/base induction et contraintes de détection ;
- entretien et première utilisation ;
- pièces, joints, filtres ou entonnoirs compatibles ;
- différence fonctionnelle avec le ou les modèles frères ;
- limitation qui suffit à écarter le produit pour un profil donné.

Ne pas forcer un champ absent ou non décisionnel.

## 4. Jugements

Utiliser `evidence-based-reviews` dès qu'un jugement de qualité, ergonomie, fiabilité ou expérience apparaît. Une observation d'un tiers reste attribuée au tiers. Sans vrai hands-on, ne jamais écrire “nous avons testé/constaté”.

## 5. Valeur originale

Avec `affiliate-value`, identifier ce que la page explique mieux qu'une fiche fabricant : erreur d'achat probable, conséquence d'une taille, compatibilité partielle, coût/contrainte, pièce particulière, alternative rationnelle ou raison de ne pas acheter.

Test : la page reste-t-elle utile sans lien affilié ?

## 6. Architecture

Construire le plan seulement après les étapes précédentes. Chaque section doit répondre à :

1. quelle question réelle ?
2. quelles preuves ?
3. quelle décision change-t-elle ?
4. pourquoi mérite-t-elle une section ?

Interdits : nombre fixe de H2, tableau obligatoire, FAQ automatique, “pour/contre” obligatoire, conclusion automatique, minimum de mots, clonage de la page sœur.

## 7. Rédaction

Écrire uniquement depuis l'evidence brief. Expliquer les conséquences pratiques, les limites et les cas où un modèle frère est plus rationnel. Ne pas transformer “inox”, “aluminium”, “premium”, “design” ou “induction” en promesse de goût/performance sans preuve.

## 8. Fact-check post-draft

Réextraire les claims, comparer au brief, corriger `OUTDATED`/`CONTRADICTED`, qualifier ou supprimer `UNKNOWN`, vérifier que les variantes/tailles ne sont pas généralisées abusivement.

## 9. Research-to-draft coverage

Avant finition, attribuer à chaque élément décisionnel du brief : `USED`, `HANDOFF`, `EXCLUDED`, `MISSING`.

Un `MISSING` doit être corrigé ou justifié avant le PUBLISH_REVIEW. Il ne s'agit pas d'un quota de specs.

## 10. Finition et maillage

Ordre : `humanizer` → `general-writing` → `anti-ai-slop`, puis `internal-linking-audit`.

Les liens internes répondent seulement aux prochaines questions logiques : capacité, induction, inox/aluminium, usage, accessoire, comparatif ou modèle frère.

## 11. SEO et QA

Utiliser `seo-technical`, `seo-best-practices` lorsque applicable puis `editorial-qa`. Contrôler title, H1, canonical, robots, breadcrumbs, crawlabilité et schema honnête.

## 12. Gate final

Appeler `model-analysis-workflow / PUBLISH_REVIEW` :

- `python3 validate_models.py` ;
- coverage sans `MISSING` décisionnel ;
- preuves, intention, structure, maillage et valeur ;
- comparaison avec pages modèles sœurs pour détecter le clonage.

Résultat requis : `PASS — READY_FOR_HUMAN_VALIDATION`.

## 13. Persistance

Conserver dans `.content/models/<slug>.md` : intention, evidence brief, sources/date, claims, valeur originale, architecture et décisions de scope.

Conserver dans `.content/reviews/<slug>.md` : audit/PUBLISH_REVIEW et tableau `USED / HANDOFF / EXCLUDED / MISSING`.

Le HTML ne doit jamais être le seul endroit où la preuve est documentée.

## 14. Publication

Toujours `noindex,follow` tant que machine validation + PUBLISH_REVIEW PASS + validation humaine + instruction explicite d'indexer ne sont pas réunis.

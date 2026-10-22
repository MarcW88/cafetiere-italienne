---
name: guide-content-workflow
description: Workflow unique de production et correction des guides SEO/GEO sous /guides/ de cafetiere-italienne.be. Utiliser après guide-analysis-workflow pour LIGHT_UPDATE ou DEEP_REWRITE, ou pour créer un nouveau guide. Orchestre les skills existants pour intention, recherche, preuves, brief, rédaction, humanisation, anti-AI, SEO, images et QA, puis renvoie obligatoirement vers PUBLISH_REVIEW.
metadata:
  adapted_for: cafetiere-italienne.be
  orchestration_target: ">=80% existing GitHub skills"
  custom_scope: "moka guide routing + category boundaries + JS source-of-truth integration + traceability"
---

# Guide Content Workflow

## Rôle

C'est le **seul workflow de production/correction** pour `/guides/`.

Séquence normale :

`guide-analysis-workflow / AUDIT` → décision → correction ciblée → `guide-analysis-workflow / PUBLISH_REVIEW`.

- `KEEP` : ne pas réécrire.
- `LIGHT_UPDATE` : modifier uniquement le scope de l'audit.
- `DEEP_REWRITE` : reconstruire en préservant les faits, sources, passages et raisonnements valides identifiés.
- `MERGE` / `NOINDEX` : ne pas produire une nouvelle version sans décision humaine sur le rôle de l'URL.

Le workflow ne retire jamais `noindex,follow` de lui-même.

---

# 1. Source de vérité du site

Les Guides sont générés depuis :

- `scripts/guide-content.mjs` ;
- `scripts/guide-content-howto.mjs` ;
- `scripts/guide-content-first-use.mjs` ;
- `scripts/guide-content-brew-basics.mjs` ;
- `scripts/guide-content-materials-care.mjs` ;
- `scripts/guide-content-troubleshooting.mjs` ;
- `scripts/build.mjs` ;
- `scripts/apply-guide-hub-reviewed.mjs` pour le hub.

**Ne jamais corriger seulement `guides/**/index.html`.** Toute correction de contenu doit être portée dans le module JS qui la génère, puis `npm run build` doit reproduire le résultat.

---

# 2. Entrées

Lire avant toute production :

- `AGENTS.md` et `DESIGN.md` si le rendu est concerné ;
- `guide-analysis-workflow/SKILL.md` ;
- audit/review existant ;
- module JS source + HTML rendu ;
- `.content/briefs/<slug>.md` ;
- guides voisins et hub ;
- pages Capacités, Café moka, Comparatifs, Marques/Modèles et Accessoires proches ;
- données sémantiques/GSC disponibles ;
- sources actuelles nécessaires aux claims.

Pour une mise à jour, lister explicitement la valeur existante à préserver avant d'écrire.

---

# 3. Router le travail sans imposer un template

- `CHOICE` : arbitrer entre options/contraintes sans ranking produit.
- `EXPLAINER` : expliquer un mécanisme, une distinction ou une conséquence.
- `HOW_TO` : permettre une procédure ou un diagnostic vérifiable.

Lire les références `choice-guide.md`, `explainer-guide.md`, `how-to-guide.md` comme questions de contrôle uniquement. Elles ne fixent ni nombre de H2, ni tableau, ni FAQ, ni nombre d'étapes.

### Frontières moka

Arrêter et renvoyer vers l'analyse si la page devient :

- un guide de capacité dont le rôle appartient à `/capacites/` ;
- un article culturel général qui appartient à `/cafe-moka/` ;
- un classement de produits qui appartient à `/comparatifs/` ;
- une fiche marque/modèle ;
- une fiche accessoire/pièce.

---

# 4. Chaîne de production — chaque passe reste distincte

## Étape 1 — intention, cluster et rôle

Utiliser `seo-keyword`, `search-intent`, `seo-content-audit` et `content-refresh` selon le besoin.

Confirmer : topic, tâche lecteur, périmètre, exclusions, chevauchements, prochaine étape logique et valeur propre de l'URL.

## Étape 2 — registre de preuves

Utiliser `fact-check` **avant rédaction** pour les claims qui structureront la page.

Pour chaque claim important conserver : affirmation, type, source, date, modèle/taille/condition, stabilité, statut et action.

Hiérarchie par défaut pour ce site :

1. fabricant ou manuel officiel ;
2. documentation/distributeur officiel ;
3. source technique ou institutionnelle pertinente ;
4. retailer pour disponibilité/spec complémentaire ;
5. retours utilisateurs multiples pour expérience, explicitement attribués.

Pour soupape, sécurité, compatibilité, matériau, capacité, pièces ou procédure fabricant : ne pas généraliser au-delà de la variante documentée.

## Étape 3 — questions spécifiques au type

### CHOICE
Décision, critères éliminatoires, compromis, contre-indications, conséquences pratiques. Pas de podium.

### EXPLAINER
Concept, distinctions, mécanisme, causalité, conséquence, limites, exceptions.

### HOW_TO
Contexte, prérequis, méthode documentée, variante/modèle, résultat attendu, erreurs, diagnostic et alternative. Pas d'étape plausible mais non vérifiée.

## Étape 4 — valeur affiliée

Utiliser `affiliate-value` si la page influence l'achat. La page doit être utile si tous les liens affiliés disparaissent.

## Étape 5 — brief

Utiliser `content-brief-authoring` et persister `.content/briefs/<slug>.md`.

Le brief doit contenir : intention/tâche, type dominant, rôle cluster, valeur propre, exclusions, faits/entités, registre de preuves, risques, valeur à préserver, maillage logique, angle et structure **dérivée de la recherche**.

Ne pas créer une architecture standard « Guide moka ».

## Étape 6 — rédaction/correction

Utiliser `content-and-copy`.

Règles :

- réponse utile tôt ;
- français naturel et précis ;
- expliquer les conséquences des faits ;
- séparer fait, interprétation, conseil et inconnue ;
- aucun faux test ni mesure inventée ;
- tableaux/listes/étapes seulement s'ils clarifient ;
- ne pas convertir chaque page en checklist identique ;
- préserver le scope de `LIGHT_UPDATE` ;
- intégrer dans le module `scripts/guide-content*.mjs` approprié.

---

# 5. Contrôles après rédaction — ne pas les fusionner

## Étape 7 — fact-check post-rédaction
Relancer `fact-check` sur les claims réellement écrits. Toute nouvelle affirmation introduite après ce gate doit repasser par lui.

## Étape 8 — maillage
Utiliser `internal-linking-audit`. Vérifier la prochaine question logique et l'existence réelle des cibles. Pas de quota.

## Étape 9 — finition éditoriale
Dans cet ordre :

1. `humanizer` sur l'intégralité visible ;
2. `general-writing` avec changements minimaux ;
3. `anti-ai-slop` en review/detection ;
4. comparaison manuelle avec les guides voisins pour détecter structure/CTA/transitions clonés ;
5. `seo-drift` uniquement avec baseline utile.

Après finition, refaire un mini fact-check des passages modifiés si la formulation a changé le sens.

## Étape 10 — SEO et technique

Utiliser : `seo-onpage`, `seo-technical`, puis `seo-best-practices` uniquement lorsque pertinent.

Confirmer title/meta/H1, canonical, robots, maillage, HTML, données structurées honnêtes, absence de placeholder et cohérence avec la page rendue.

## Étape 11 — image éditoriale

Exécuter le skill existant `editorial-image-planner` :

- `NOT_NEEDED` si aucune image n'apporte assez ;
- `PENDING` uniquement pour scène générique à faible risque via BFL ;
- `BLOCKED` si une vraie image produit/pièce/marque est nécessaire.

Une image IA n'est jamais une preuve technique ou produit.

## Étape 12 — editorial QA

Utiliser `editorial-qa` comme dernier contrôle générique. Il ne remplace ni fact-check, ni anti-AI, ni PUBLISH_REVIEW.

---

# 6. Validation machine et rendu

Exécuter :

```bash
npm run build
python3 apply_section_indexation.py guides
npm run check
python3 validate_guide_quality.py
```

Si structure, layout ou médias ont changé, exécuter le `site-design-review` existant sur le scope Guides desktop/mobile.

Une machine PASS signifie uniquement : absence de blocker détectable. Elle ne prouve pas la qualité éditoriale.

---

# 7. Review obligatoire et traçabilité

Mettre à jour `.content/reviews/<slug>.md` avec le **format complet** demandé par `guide-analysis-workflow` : intention, architecture, preuves, valeur préservée, naturalité, anti-AI/similarité, SEO/maillage, technique, blockers, corrections et verdict.

Ne pas condenser un PUBLISH_REVIEW en une liste de 5–10 lignes. Ne pas déclarer `fact-check`, `humanizer`, `anti-ai-slop` ou `editorial-qa` PASS uniquement parce que le build passe.

Statuts possibles du travail : `BRIEF_READY`, `DRAFT_READY`, `QA_IN_PROGRESS`, `REVISION_REQUIRED`, `HUMAN_APPROVED`, `PUBLISHABLE`.

`PUBLISHABLE` exige : PUBLISH_REVIEW PASS + validation humaine + contrôle technique. L'indexation est une décision séparée.

---

# 8. Handoff final obligatoire

Passer à `guide-analysis-workflow / PUBLISH_REVIEW`.

Résultats possibles :

- `PASS — READY_FOR_HUMAN_VALIDATION`
- `FAIL — KEEP_NOINDEX`

Un FAIL renvoie vers la passe réellement en cause ; il ne déclenche pas automatiquement une réécriture complète.

---

# 9. Ce workflow n'ajoute pas

- quota de mots ;
- nombre minimum de H2 ;
- quota de liens/sources ;
- FAQ ou tableau obligatoire ;
- score qualité artificiel ;
- nombre fixe d'étapes ;
- architecture clonée par type de Guide ;
- copie locale des méthodologies déjà présentes dans les skills spécialisés.

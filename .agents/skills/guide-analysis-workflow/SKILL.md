---
name: guide-analysis-workflow
description: Workflow unique d'analyse des pages /guides/ de cafetiere-italienne.be. Audite une URL ou tout le cluster, orchestre les skills SEO/editoriaux existants, contrôle intention, preuves, fraîcheur, frontières de catégories, similarité structurelle et qualité de correction, puis décide KEEP, LIGHT_UPDATE, DEEP_REWRITE, MERGE ou NOINDEX. En PUBLISH_REVIEW, produit le gate détaillé avant validation humaine.
metadata:
  adapted_for: cafetiere-italienne.be
  orchestration_target: ">=80% existing GitHub skills"
  custom_scope: "orchestration + moka guide integrity + category boundaries + cluster similarity + publish review traceability"
---

# Guide Analysis Workflow

## Rôle

C'est le **seul workflow d'analyse** à utiliser pour les URLs sous `/guides/`.

Il ne rédige pas la page. Il orchestre les skills existants, documente ce qui a réellement été contrôlé et décide si une correction est nécessaire. `guide-content-workflow` prend ensuite le relais uniquement pour `LIGHT_UPDATE` ou `DEEP_REWRITE`.

Frontières du site :

- `/guides/` = expliquer un critère, un mécanisme, un arbitrage ou une procédure moka ;
- `/capacites/` = répondre au besoin de taille/volume et à la décision de capacité ;
- `/cafe-moka/` = culture et compréhension éditoriale de la boisson/méthode ;
- `/comparatifs/` = sélectionner ou classer des produits ;
- `/marques/` et `/modeles/` = documenter une marque, une gamme ou un modèle identifiable ;
- `/accessoires/` = traiter les pièces et accessoires comme objets distincts.

Un guide peut soutenir une décision d'achat sans devenir un classement produit.

---

# 1. Modes

## `AUDIT`
Analyse une URL existante, compare ses voisines et retourne une décision **sans réécriture automatique**.

## `CLUSTER_AUDIT`
Analyse ensemble les guides afin de détecter : chevauchements d'intention, trous utiles, fragmentation, cannibalisation, répétitions, structures clonées, mêmes conclusions/CTA et frontières mal placées avec Capacités, Café moka, Comparatifs, Marques/Modèles ou Accessoires.

## `PUBLISH_REVIEW`
Gate final après correction. Il réexécute le validateur machine, relit les preuves et le contenu rendu, compare au sous-cluster et retourne exactement :

- `PASS — READY_FOR_HUMAN_VALIDATION`
- `FAIL — KEEP_NOINDEX`

Un PASS n'autorise jamais l'indexation. `publication_indexation.py` reste la source explicite des routes approuvées.

---

# 2. Entrées obligatoires

Lire selon disponibilité :

- `AGENTS.md`, `DESIGN.md` si le rendu est concerné ;
- page générée + source réelle `scripts/guide-content*.mjs` ;
- `.content/briefs/<slug>.md` ;
- `.content/reviews/<slug>.md` ;
- guides voisins et hub `/guides/` ;
- Capacités, Café moka, Comparatifs, Marques/Modèles et Accessoires proches ;
- données sémantiques/GSC/historique disponibles ;
- SERP actuelle si l'intention est incertaine ;
- sources actuelles pour les faits variables.

Ne jamais combler une donnée absente avec la mémoire du modèle. Un unknown important doit apparaître dans l'audit.

---

# 3. Chaîne de skills réutilisés

Exécuter les briques existantes séparément lorsque pertinentes. Ne pas les remplacer par une relecture générique.

1. `seo-content-audit` : KEEP / UPDATE / MERGE / REDIRECT / DELETE en amont ; toute action destructive reste une recommandation.
2. `seo-keyword` : topic principal, intention, cluster, proximité d'autres URLs, données réelles si disponibles.
3. `search-intent` : résultat attendu, maturité, sous-questions, éléments inutiles.
4. `content-refresh` : intent drift, obsolescence, thin value, trust gap, cannibalisation, prose générique.
5. `fact-check` : chaque claim vérifiable avec preuve proportionnée à son risque.
6. `evidence-based-reviews` : uniquement pour un jugement expérientiel réel ; jamais pour simuler un test.
7. `affiliate-value` : lorsque le guide influence l'achat ; la page doit rester utile sans affiliation.
8. `internal-linking-audit` : prochaine question logique, pas quota de liens.
9. `anti-ai-slop` : prose générique, symétries artificielles, architecture répétée, transitions mécaniques.
10. `seo-onpage` puis `seo-technical` : title/meta/H1, canonical, robots, HTML, schema honnête.
11. `editorial-qa` : gate final générique après les passes spécialisées.

Aucun quota de mots, H2, tableaux, FAQ, liens ou sources ne remplace une analyse de qualité.

---

# 4. Type dominant = grille de risque, pas template

## `CHOICE`
Exemples moka : choisir sa cafetière, aluminium ou inox, quel café utiliser.

Contrôler : décision exacte, critères qui la changent, critères éliminatoires, compromis, contre-indications, passage logique vers un comparatif sans podium déguisé.

## `EXPLAINER`
Exemples : moka vs espresso, rôle du matériau, mécanisme lié à la mouture.

Contrôler : termes distingués, causalité honnête, conséquence pratique, limites, absence de pseudo-précision.

## `HOW_TO`
Exemples : utiliser, première utilisation, nettoyer, détartrer, changer un joint, diagnostiquer une fuite.

Contrôler : prérequis, ordre uniquement lorsqu'il compte, modèle concerné, résultat attendu, échecs probables, sécurité, absence d'étape inventée.

Un guide peut être hybride. Ne jamais forcer le même nombre de sections ou d'étapes.

---

# 5. Niveau de preuve moka

Distinguer :

- principe physique ou définition stable ;
- recommandation éditoriale ;
- instruction fabricant ;
- compatibilité d'un modèle/taille ;
- mesure/capacité ;
- sécurité/soupape ;
- expérience utilisateur ;
- véritable test propriétaire.

Pour les instructions fabricant, compatibilités, capacités, pièces et sécurité : préférer fabricant ou manuel officiel et préciser modèle/taille lorsque nécessaire.

Ne pas généraliser une consigne de Moka Express à toutes les moka. Ne pas convertir un rendu BFL en preuve produit. Ne pas écrire « nous avons testé » sans données réellement fournies.

---

# 6. Intégrité pédagogique

Une page n'est pas jugée à sa longueur mais à sa capacité à rendre une chose plus claire, plus faisable ou plus décidable.

Vérifier :

- réponse principale assez tôt ;
- chaque section remplit une fonction distincte ;
- faits expliqués par leur conséquence pour le lecteur ;
- tableaux/listes utilisés lorsqu'ils améliorent réellement la compréhension ;
- cas limites et contre-indications visibles ;
- différenciation entre procédure de base, optimisation de recette et diagnostic ;
- prochaine étape pertinente sans CTA automatique identique sur tous les guides.

---

# 7. Similarité structurelle du cluster

Comparer le guide à ses voisins. Chercher :

- mêmes fonctions de H2 dans le même ordre ;
- intros/conclusions avec simple substitution du sujet ;
- mêmes tableaux/callouts/CTA par réflexe ;
- procédures artificiellement de même longueur ;
- même rythme de paragraphes ;
- répétition des mêmes conseils sans spécialisation ;
- page qui pourrait garder son architecture en changeant uniquement quelques noms.

Les composants visuels partagés sont normaux. La pensée éditoriale clonée ne l'est pas.

---

# 8. Décisions

## `KEEP`
Tâche claire, distincte, actuelle et suffisamment prouvée.

## `LIGHT_UPDATE`
Correction ciblée de faits, source, passage, maillage, métadonnées, nuance, exemple ou frontière. Architecture conservée.

## `DEEP_REWRITE`
Intention mal cadrée, procédure peu fiable, explication sans causalité utile, choix impossible à arbitrer, valeur faible, preuves centrales insuffisantes, cannibalisation forte ou structure industrialisée.

Préserver explicitement tout ce qui est déjà valable.

## `MERGE`
Une autre URL couvre essentiellement la même tâche. Indiquer la cible sans action automatique.

## `NOINDEX`
Valeur/preuve/rôle insuffisant. Aucune suppression automatique.

Pour chaque URL, documenter : décision, confiance, rôle, type dominant, valeur à préserver, preuves, unknowns, blockers, améliorations secondaires, cannibalisation et handoff.

---

# 9. Standard de rapport — NON CONDENSABLE

Un `AUDIT`, `CLUSTER_AUDIT` ou `PUBLISH_REVIEW` Guide ne peut pas être réduit à quelques puces de verdict. Le fichier `.content/reviews/<slug>.md` doit rendre visibles les contrôles réellement effectués.

Pour une page, inclure au minimum :

1. **Métadonnées de review** : URL, date, mode, décision, robots, source de vérité.
2. **Intention et rôle dans le cluster** : tâche du lecteur, type dominant, frontières.
3. **Architecture et profondeur utile** : fonction de chaque grande section, répétitions, sections trop faibles ou inutiles. Des métriques descriptives peuvent être données, jamais utilisées seules comme score.
4. **Preuves et factualité** : claims centraux, niveau de preuve, sources, conditions, unknowns.
5. **Valeur existante à préserver / content refresh**.
6. **Naturalité / humanizer / general-writing** : rythme, répétitions, transitions, ton.
7. **Anti-AI-slop / similarité cluster** : composants éditoriaux clonés et résultat de la comparaison.
8. **SEO / GEO / maillage** : réponse initiale, title/meta/H1, entités, prochaines questions, cannibalisation.
9. **Technique** : build, canonical, robots, liens, validateur machine, rendu desktop/mobile si concerné.
10. **Blockers et corrections requises**.
11. **Verdict et prochaine étape**.

Ne jamais écrire qu'un skill est PASS si seule une heuristique machine a été exécutée.

---

# 10. `PUBLISH_REVIEW`

Étape A :

```bash
npm run build
python3 apply_section_indexation.py guides
npm run check
python3 validate_guide_quality.py
```

Étape B : réexécuter les gates substantiels : intention, preuves, niveau de preuve, frontière de catégorie, valeur sans affiliation, naturalité, anti-AI, SEO/maillage et comparaison cluster.

Étape C : vérifier le rendu lorsque la correction change structure ou médias via le workflow `site-design-review` existant.

Résultat final uniquement :

- `PASS — READY_FOR_HUMAN_VALIDATION`
- `FAIL — KEEP_NOINDEX`

La validation humaine et l'instruction d'indexation restent séparées.

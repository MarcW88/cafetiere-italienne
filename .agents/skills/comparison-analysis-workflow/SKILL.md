---
name: comparison-analysis-workflow
description: Workflow unique d'analyse des pages /comparatifs/ de cafetiere-italienne.be. Orchestre majoritairement des skills GitHub existants pour l'intention, l'audit, les produits, les preuves, l'affiliation, le SEO, le GEO/AEO, l'anti-AI-slop et la QA. Décisions: KEEP, LIGHT_UPDATE, DEEP_REWRITE, MERGE ou NOINDEX. En PUBLISH_REVIEW, sert de gate final avant validation humaine.
metadata:
  adapted_for: cafetiere-italienne.be
  orchestration_target: ">=80% existing GitHub skills"
  custom_scope: "orchestration + comparison sanity + cluster similarity + publication state"
---

# Comparison Analysis Workflow

## Rôle

C'est le **seul workflow d'analyse** à utiliser pour `/comparatifs/`.

Il reste un orchestrateur : il appelle les skills spécialisés et ne recrée pas leur méthode. La couche custom doit rester <=20 % et se limiter à la logique réellement spécifique à un comparatif.

Principe :

> Évaluer la qualité de la décision offerte au lecteur, la traçabilité produit/preuve et la différenciation de la page — pas la sophistication apparente d'un scoring.

---

# 1. Modes

## `AUDIT`
Analyse une URL existante et retourne `KEEP`, `LIGHT_UPDATE`, `DEEP_REWRITE`, `MERGE` ou `NOINDEX`, sans réécriture.

## `CLUSTER_AUDIT`
Compare plusieurs URLs `/comparatifs/` pour contrôler architecture, cannibalisation, réutilisation de recommandations, biais de sélection et industrialisation éditoriale.

## `PUBLISH_REVIEW`
Gate final après rédaction. Seuls résultats valides :

- `PASS — READY_FOR_HUMAN_VALIDATION`
- `FAIL — KEEP_NOINDEX`

Un PASS ne retire jamais `noindex,follow`.

---

# 2. Entrées obligatoires

Lire selon disponibilité :

- page cible et pages comparatives voisines ;
- `comparison-workflow.config.yaml` ;
- `.content/comparisons/<slug>.json` ;
- `.content/products/registry.json` ;
- GSC / analyse sémantique / historique si disponibles ;
- SERP actuelle lorsque l'intention ou le marché peut avoir changé ;
- pages Marques, Modèles, Capacités et Guides pertinentes ;
- sources actuelles nécessaires aux faits évolutifs.

L'absence de données doit être signalée. Ne jamais combler un trou par mémoire du modèle.

---

# 3. Chaîne de skills obligatoire

## 3.1 SEO / rôle de l'URL

### `seo-content-audit` — Rampstack
Déterminer valeur existante, cannibalisation et niveau de changement raisonnable.

### `seo-keyword` — Rampstack
Confirmer requête, intention, cluster, forme de SERP et rôle unique de l'URL.

### `jobs-to-be-done` — Wondel.ai
À utiliser lorsque le contexte d'usage change réellement le choix. Aucun persona inventé.

## 3.2 Produits / candidats

Le produit n'est pas une simple variable de rédaction.

Utiliser `.content/products/registry.json` comme source de vérité d'identité : marque, famille, modèle/variante, statut de preuve et sources primaires.

Pour chaque candidat recommandé ou sérieusement comparé :

- vérifier qu'il existe dans le registre ;
- identifier la variante exacte si taille/génération change le verdict ;
- rechercher les candidats plausibles susceptibles de changer la décision ;
- documenter une exclusion majeure lorsqu'elle est décisionnelle ;
- ne jamais définir l'univers à partir des seuls produits affiliables.

L'univers n'a pas besoin d'être exhaustif. Il doit être **raisonnable et défendable**.

## 3.3 Preuves

### `evidence-based-reviews` — Rampstack
Skill principal pour specs, synthèses d'expérience et niveau de preuve. Une fiche fabricant soutient un fait, pas automatiquement une sensation d'usage.

### `fact-check`
Vérifier génération, modèle, taille, matière, compatibilité, fonctions, disponibilité, prix lorsqu'il est mentionné et tout claim qui change l'achat.

Aucun faux hands-on.

## 3.4 Affiliation

### `affiliate-value`
Vérifier que la page reste utile si tous les liens affiliés sont retirés.

Contrôler : arbitrages originaux, limites, alternatives, incompatibilités, indépendance du ranking, transparence de l'affiliation et absence de réécriture marchande.

## 3.5 GEO / AEO

### `geo-aeo-comparison`
Utiliser `.agents/skills/geo-aeo-comparison/SKILL.md` pour contrôler :

- réponse et verdict extractibles ;
- entités/modèles/variantes non ambigus ;
- attribution des faits décisionnels ;
- blocs autonomes citables sans sur-optimisation ;
- fraîcheur ;
- tableaux/listes réellement utiles ;
- structured data fidèle au contenu visible.

Le `noindex,follow` de draft n'est **pas** un échec GEO.

## 3.6 Anti-slop et qualité éditoriale

### `anti-ai-slop`
Chercher structure interchangeable, blocs trop symétriques, transitions répétées, verdicts génériques, phrases creuses et conclusions clonées.

### `editorial-qa`
Contrôle final de l'intention, de la valeur, de la factualité, de la voix et de l'utilité.

## 3.7 SEO final / maillage / technique

### `internal-linking-audit`
Vérifier le rôle des liens vers Guides, Capacités, Modèles, Marques et autres Comparatifs. Pas de quotas.

### `seo-onpage` — Rampstack
Title, meta, H1, headings, contenu, ancres, URL et schema honnête.

### `seo-technical`
Canonical, robots, crawlabilité, HTML, structured data et intégrité technique.

---

# 4. Couche custom <=20 % — sanity check comparatif

Cette couche ne remplace aucun skill ci-dessus.

## A. Scope crédible
Les options sont plausibles pour la requête. Les candidats évidents capables de changer le verdict sont examinés ou explicitement exclus.

## B. Critères avant le vainqueur
Les critères viennent de l'intention/JTBD et des différences réelles entre produits. Ne jamais choisir le gagnant puis fabriquer les critères.

## C. Verdict traçable
Le lecteur doit comprendre : pourquoi ce choix ; quand un autre devient meilleur ; quelle limite fait basculer la décision.

## D. Comparabilité honnête
Lorsque deux options ne sont pas parfaitement équivalentes, l'écart est expliqué au lieu d'être masqué par un score.

## E. Coût proportionné
Approfondir seulement lorsqu'il change réellement la décision.

## F. Scoring optionnel
Aucun scoring obligatoire. S'il existe, les notes restent des jugements éditoriaux sauf mesure réelle et doivent être explicables.

---

# 5. Contrôle cluster / industrialisation

Comparer aux pages sœurs :

- même fonction de H2 dans le même ordre ;
- même intro avec substitution de requête ;
- mêmes fiches produit symétriques ;
- même verdict repondéré ;
- mêmes arguments sous plusieurs intentions ;
- mêmes transitions et conclusions ;
- sélection systématiquement limitée aux mêmes marques sans raison.

Les composants UI partagés sont normaux. La **pensée éditoriale** ne doit pas être clonée.

---

# 6. Décisions

## `KEEP`
Intention distincte, sélection crédible, preuves suffisantes, affiliation propre, SEO/GEO cohérents, structure éditoriale non industrialisée.

## `LIGHT_UPDATE`
Corrections locales sans reconstruire la décision.

## `DEEP_REWRITE`
À réserver aux problèmes structurants : mauvaise intention, candidats inadéquats, verdict non justifiable, preuves faibles, valeur affiliée insuffisante, scope biaisé, GEO/entités profondément ambigus, forte industrialisation ou obsolescence majeure.

## `MERGE`
Une autre URL sert essentiellement la même décision.

## `NOINDEX`
La page ne possède pas encore assez de valeur/justification pour l'indexation. Aucune suppression automatique.

Pour chaque URL fournir : confiance ; valeur à préserver ; blockers ; améliorations secondaires ; données manquantes ; prochaine étape.

---

# 7. PUBLISH_REVIEW — gates obligatoires

Après rédaction :

1. exécuter `python3 validate_comparison_workflow.py` ;
2. exécuter `python3 validate_comparisons.py` ;
3. rejouer les skills pertinents sur la version finale ;
4. vérifier le registre produit et les variantes ;
5. vérifier preuves + fact-check ;
6. vérifier `affiliate-value` ;
7. vérifier `geo-aeo-comparison` ;
8. vérifier `humanizer` / `general-writing` si utilisés puis `anti-ai-slop` ;
9. vérifier `internal-linking-audit` ;
10. vérifier `seo-onpage` + `seo-technical` ;
11. vérifier `editorial-qa` ;
12. comparer la structure aux pages sœurs.

Le fichier final `.content/reviews/<slug>.comparison-review.md` doit contenir explicitement :

- `PRODUCTS: PASS`
- `EVIDENCE: PASS`
- `AFFILIATION: PASS`
- `GEO: PASS`
- `ANTI_AI_SLOP: PASS`
- `SEO: PASS`
- `INTERNAL_LINKING: PASS`
- `TECHNICAL: PASS`
- `EDITORIAL_QA: PASS`

Puis seulement : `PASS — READY_FOR_HUMAN_VALIDATION`.

En cas d'échec : `FAIL — KEEP_NOINDEX` avec le gate concerné.

---

# 8. Indexation

Conserver `noindex,follow` par défaut.

Indexation uniquement après :

1. validateurs machine sans blocker ;
2. PUBLISH_REVIEW PASS ;
3. validation humaine explicite ;
4. instruction explicite de rendre la route indexable.

---

# 9. Répartition 80/20

La méthode provient prioritairement de skills GitHub existants : Rampstack (`seo-content-audit`, `seo-keyword`, `evidence-based-reviews`, `seo-onpage`, `content-brief-authoring`, `content-and-copy`), Wondel.ai (`jobs-to-be-done`), OnVoyage AI (`improve-aeo-geo` adapté en `geo-aeo-comparison`), msimchowitz (`general-writing`) et les skills externes déjà vendored (`humanizer`, `anti-ai-slop`, `seo-technical`, `internal-linking-audit`, etc.).

Custom autorisé uniquement pour : orchestration, sanity check candidats, critères/verdict comparatif, contrôle de similarité du cluster et état de publication.

Ne jamais réimplémenter dans ce workflow ce qu'un skill spécialisé couvre déjà.

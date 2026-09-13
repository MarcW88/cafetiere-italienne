---
name: comparison-content-workflow
description: Workflow unique de création et de réécriture des pages /comparatifs/ de cafetiere-italienne.be. Orchestre majoritairement des skills GitHub existants pour l'intention, les produits, les preuves, l'affiliation, le SEO, le GEO/AEO, la rédaction, l'anti-AI-slop et la QA. La logique custom reste limitée à la décision comparative.
metadata:
  adapted_for: cafetiere-italienne.be
  orchestration_target: ">=80% existing GitHub skills"
  custom_scope: "orchestration + comparison decision logic + publication state"
---

# Comparison Content Workflow

## Rôle

C'est le **seul workflow de production** pour créer ou réécrire une URL `/comparatifs/`.

Principe :

> AUDIT → intention → produits → preuves → affiliation → décision → brief → rédaction → GEO → humanisation/anti-slop → maillage/SEO → QA → PUBLISH_REVIEW.

La couche custom doit rester <=20 %. Aucun sous-workflow maison ne doit remplacer une méthode déjà couverte par un skill existant.

---

# 1. Entrées obligatoires

Pour une page existante, lire d'abord le dernier `comparison-analysis-workflow / AUDIT`.

Lire aussi :

- page actuelle ;
- comparatifs voisins ;
- `comparison-workflow.config.yaml` ;
- `.content/comparisons/<slug>.json` ;
- `.content/products/registry.json` ;
- GSC / analyse sémantique / historique si disponible ;
- pages Marques, Modèles, Capacités et Guides utiles ;
- sources actuelles nécessaires.

Ne jamais démarrer un draft en choisissant d'abord trois produits “connus”.

---

# 2. Chaîne principale — skills existants

## 2.1 `seo-keyword` — Rampstack

Confirmer query/cluster, intent, forme de SERP, rôle unique de l'URL et chevauchements.

## 2.2 `jobs-to-be-done` — Wondel.ai

À utiliser lorsque le contexte d'usage change le choix. Pas de persona inventé.

## 2.3 `seo-content-audit` — Rampstack

Préserver ce qui fonctionne. Respecter `LIGHT_UPDATE` vs `DEEP_REWRITE` sauf nouvelle découverte majeure.

## 2.4 Produits — registre + recherche candidats

Utiliser `.content/products/registry.json` comme source de vérité des identités produit.

Avant toute recommandation :

1. définir ce qu'est un candidat éligible pour la requête ;
2. rechercher un ensemble raisonnable de produits susceptibles de changer la décision ;
3. ajouter/mettre à jour les produits dans le registre ;
4. distinguer gamme, modèle, taille et variante ;
5. documenter les exclusions majeures ;
6. vérifier qu'aucun produit n'est retenu parce qu'il possède simplement un lien affilié.

Une variante qui change l'induction, la capacité, la disponibilité ou une fonction doit être traitée comme une identité décisionnelle distincte.

## 2.5 `evidence-based-reviews` — Rampstack

Construire la base de preuve : specs primaires, sources indépendantes quand un claim d'usage le demande, retours utilisateurs synthétisés avec prudence, hands-on uniquement s'il existe réellement.

## 2.6 `fact-check`

Vérifier tous les faits qui peuvent changer l'achat : modèle, génération, taille, matériau, compatibilité, fonctions, disponibilité, prix si mentionné.

## 2.7 `affiliate-value`

Avant rédaction, expliciter la valeur originale : arbitrages, limites, alternatives, incompatibilités, coût caché si pertinent et information difficile à obtenir depuis une seule fiche fabricant.

La page doit rester utile sans aucun lien affilié. La commission ne peut influencer ni candidats ni ranking.

## 2.8 Couche custom légère — scope, critères, verdict

Custom autorisé uniquement ici :

- scope raisonnable ;
- critères définis avant le gagnant ;
- comparabilité honnête ;
- verdict conditionnel ou ranking si réellement utile ;
- coût approfondi seulement s'il est décisionnel.

Scoring et pondération sont optionnels. Aucune fausse précision.

## 2.9 `content-brief-authoring` — Rampstack

Créer le brief **avant** le draft. Il contient : query/intent, rôle de l'URL, candidats/exclusions, critères, preuves obligatoires, arbitrages, angle, risques de cannibalisation, anti-patterns et outline spécifique.

Aucun template éditorial universel.

## 2.10 `content-and-copy` — Rampstack

Rédiger depuis le brief et les preuves. Priorités : décision claire, substance, trade-offs, structure propre à la requête, voix naturelle.

---

# 3. Post-draft obligatoire

## 3.1 `fact-check`

Réextraire les claims du draft et vérifier qu'aucune reformulation n'a augmenté la certitude au-delà des sources.

## 3.2 `geo-aeo-comparison`

Contrôler la citabilité sans écrire pour les robots :

- réponse/verdict extractibles ;
- produits et variantes explicitement nommés ;
- attribution claire des faits décisionnels ;
- passages autonomes lorsque cela améliore la compréhension ;
- fraîcheur ;
- tableaux/listes utiles ;
- structured data fidèle au contenu visible.

Le draft reste `noindex,follow` jusqu'à validation humaine : ne jamais traiter ce statut comme un échec GEO.

## 3.3 `humanizer`

Corriger prose générique, répétitive ou trop lisse sans toucher aux faits.

## 3.4 `general-writing` — msimchowitz/writing-skills

Passage de clarté, précision et voix. Éditer le minimum nécessaire.

## 3.5 `anti-ai-slop`

Gate explicite. Contrôler notamment :

- blocs produit interchangeables ;
- “avantages / limites / pour qui” cloné ;
- transitions mécaniques ;
- phrases abstraites sans information ;
- conclusion qui répète le ranking ;
- même architecture que les comparatifs voisins ;
- généralités applicables à n'importe quelle moka.

Un finding sévère bloque le PUBLISH_REVIEW.

## 3.6 `internal-linking-audit`

Vérifier les liens contextuels vers Guides, Capacités, Modèles, Marques et autres Comparatifs. Aucun quota fixe. Chaque lien doit aider à résoudre une sous-question ou éviter une cannibalisation.

## 3.7 `seo-onpage` — Rampstack

Title, meta, H1, headings, contenu, ancres, URL, canonical logique et schema honnête.

## 3.8 `seo-technical`

Canonical, robots, crawlabilité, données structurées, intégrité HTML et état `noindex,follow` de draft.

## 3.9 `editorial-qa`

Dernière QA sur intention, valeur, factualité, naturel, utilité sans affiliation et cohérence globale.

---

# 4. Architecture éditoriale

Aucun template obligatoire par type de comparatif.

Interdit d'imposer : nombre fixe de H2/H3, tableau obligatoire, FAQ obligatoire, nombre de produits fixe, même longueur par produit, même ordre `méthode → critères → ranking → fiches → FAQ → conclusion` ou quotas de mots/liens.

La structure doit découler de la décision. Exemples possibles mais non obligatoires :

- induction : gate d'éligibilité puis sélection ;
- électrique : fonctions et scénarios d'autonomie ;
- design : familles esthétiques / conception / usage ;
- meilleure : arbre de décision ;
- petite : volume réel + dimensions + plaque.

Ne pas transformer ces exemples en templates.

---

# 5. Persistance méthodologique

`.content/comparisons/<slug>.json` doit contenir uniquement ce qui est réellement utilisé, mais doit rendre la décision traçable :

- intent/JTBD ;
- candidats et exclusions importantes ;
- références vers les IDs du registre produit ;
- criteria ;
- evidence/sources nécessaires ;
- recommendation logic ;
- prix/configuration si décisionnel ;
- score/weights/ranking uniquement s'ils sont réellement utilisés ;
- research_date ;
- status.

Ne jamais remplir un champ factice pour satisfaire une structure.

---

# 6. PUBLISH_REVIEW

Une fois le draft stable :

1. `python3 validate_comparison_workflow.py`
2. `python3 validate_comparisons.py`
3. `comparison-analysis-workflow` en mode `PUBLISH_REVIEW`

Le review final doit être enregistré dans `.content/reviews/<slug>.comparison-review.md` avec :

- `PRODUCTS: PASS`
- `EVIDENCE: PASS`
- `AFFILIATION: PASS`
- `GEO: PASS`
- `ANTI_AI_SLOP: PASS`
- `SEO: PASS`
- `INTERNAL_LINKING: PASS`
- `TECHNICAL: PASS`
- `EDITORIAL_QA: PASS`

Puis seulement :

`PASS — READY_FOR_HUMAN_VALIDATION`

Sinon :

`FAIL — KEEP_NOINDEX`

Le statut du record ne peut passer à `READY_FOR_HUMAN_VALIDATION` que si ce review existe.

---

# 7. Indexation

`noindex,follow` par défaut.

Indexation uniquement après validation machine, PUBLISH_REVIEW PASS, validation humaine explicite et instruction explicite d'indexer.

---

# 8. Orchestration 80/20

```text
comparison-analysis-workflow / AUDIT
  ↓
seo-keyword + jobs-to-be-done + seo-content-audit
  ↓
PRODUCT REGISTRY + candidate research
  ↓
evidence-based-reviews + fact-check
  ↓
affiliate-value
  ↓
CUSTOM <=20%: scope + criteria + recommendation logic
  ↓
content-brief-authoring
  ↓
content-and-copy
  ↓
fact-check
  ↓
geo-aeo-comparison
  ↓
humanizer → general-writing → anti-ai-slop
  ↓
internal-linking-audit
  ↓
seo-onpage + seo-technical
  ↓
editorial-qa
  ↓
validate_comparison_workflow.py + validate_comparisons.py
  ↓
comparison-analysis-workflow / PUBLISH_REVIEW
  ↓
human validation → explicit indexation approval
```

Upstream principal : Rampstack, Wondel.ai, OnVoyage AI, msimchowitz et les skills externes déjà vendored dans le repo. Le custom reste limité à l'orchestration et à la logique comparative spécifique au site.

---
name: model-analysis-workflow
description: Workflow d'analyse v2 des pages /modeles/ de cafetiere-italienne.be, aligné sur la profondeur PRODUCT de bloc-notes-numerique. Audite rôle, intent, JTBD, preuve, variantes, compatibilités, pièces, valeur originale, SEO et chaîne d'artefacts avant tout PASS.
metadata:
  adapted_for: cafetiere-italienne.be
  based_on: bloc-notes-numerique PRODUCT workflow
  workflow_version: 2
---

# Model Analysis Workflow v2

## Rôle

Une URL `/modeles/` est une fiche `PRODUCT` documentaire et décisionnelle, pas un faux test. Le workflow doit montrer non seulement que la page finale est correcte, mais aussi **comment la décision éditoriale a été construite**.

Modes : `PARITY_AUDIT`, `CLUSTER_AUDIT`, `PAGE_AUDIT`, `PUBLISH_REVIEW`.

Un ancien `PASS — READY_FOR_HUMAN_VALIDATION` produit avec le workflow v1 est considéré comme **stale** tant que les artefacts v2 ne sont pas présents, cohérents et plus anciens que la review qui les valide.

## Référence méthodologique

La référence est la branche PRODUCT du workflow de `MarcW88/bloc-notes-numerique` au commit déclaré dans `model-workflow.config.yaml`. Réutiliser les skills existants ; la couche custom MODEL ne doit porter que l'orchestration et les particularités moka.

## Entrées obligatoires

Lire :

- `AGENTS.md` et `model-workflow.config.yaml` ;
- page cible, hub `/modeles/` et modèles frères pertinents ;
- research brief `.content/models/<slug>.md` ;
- product registry `.content/products/registry.json` ;
- record, audit, evidence packet, evidence ledger, decision artifact, content brief et post-draft du modèle ;
- review existante ;
- fichiers source déclarés dans le record ;
- sources actuelles lorsque les caractéristiques peuvent évoluer.

## Chaîne d'analyse obligatoire

Orchestrer les skills existants :

1. `content-audit` + `seo-content-audit` — rôle autonome, récupération, obsolescence, duplication, cannibalisation ;
2. `seo-keyword` + `search-intent` — requête, SERP/intention, décision et handoffs ;
3. `jobs-to-be-done` — circonstances, progrès recherché, Push/Pull/Anxiety/Habit, Big Hire/Little Hire, critères de décision ;
4. record produit/variante — identité canonique, taille/génération pertinente, URL, état de publication et fichiers source ;
5. `fact-check` — evidence packet et claim ledger ;
6. signaux indépendants/communautaires lorsque nécessaires pour révéler questions, frictions ou objections ;
7. résolution des contradictions ;
8. decision artifact avant tout content brief ;
9. `affiliate-value` — valeur sans lien affilié et raisons de ne pas acheter ;
10. `content-brief-authoring` — brief persistant alimenté par JTBD + décision + preuve ;
11. contrôle post-draft puis `USED / HANDOFF / EXCLUDED / MISSING` ;
12. `internal-linking-audit`, `seo-onpage`, `seo-technical`, `seo-best-practices`, `editorial-qa` ;
13. `site-design-review` si l'architecture visuelle change significativement.

## Signaux utilisateurs : règle stricte

Un témoignage, forum, Reddit, commentaire retailer ou avis sert d'abord à détecter :

- une question récurrente ;
- une confusion de nomenclature ;
- une anxiété avant achat ;
- un cas limite à vérifier ;
- un sujet d'usage qui mérite une source plus forte.

Il ne devient **jamais** automatiquement un fait produit. Toute caractéristique, compatibilité, mesure ou verdict expérientiel important suit la hiérarchie de preuve. Un cas isolé peut être `OBSERVED` comme signal de demande sans être une vérité généralisable.

## Contrôles MODEL

Vérifier uniquement ce qui change réellement la décision :

- référence, génération et variante exacte ;
- matériau/construction sans promesse gustative induite ;
- taille, capacité nominale et volume documenté ;
- **flexibilité de capacité documentée** : filtre réducteur, mode demi-capacité ou multi-rendement lorsqu'il peut changer le choix de taille ;
- compatibilité plaque par taille + diamètre de détection lorsqu'il compte ;
- pièces par famille/taille/génération ;
- entretien et première utilisation ;
- différence avec modèle frère ;
- raisons rationnelles de choisir **ou d'écarter** le modèle ;
- écart éventuel entre claim fabricant et friction utilisateur à clarifier.

Lorsqu'un réducteur ou mode multi-rendement est pertinent, vérifier séparément :

- le rendement exact documenté ;
- la référence de pièce ou le mécanisme exact ;
- les limites — ne jamais inventer d'autres rendements par symétrie ;
- l'impact réel sur le JTBD et le choix de taille.

Aucun de ces blocs n'est un quota. Il devient requis uniquement si l'analyse le rend décisionnel.

## Artefacts v2 requis

Pour chaque modèle migré :

- `.content/models/records/<slug>.json` ;
- `.content/models/<slug>.md` ;
- `.content/models/audits/<slug>-YYYY-MM-DD.md` ;
- `.content/models/evidence/<slug>-YYYY-MM-DD.md` ;
- `.content/models/evidence-ledgers/<slug>-YYYY-MM-DD.md` ;
- `.content/models/decisions/<slug>-YYYY-MM-DD.md` ;
- `.content/models/briefs/<slug>-YYYY-MM-DD.md` ;
- `.content/models/post-draft/<slug>-YYYY-MM-DD.md` ;
- `.content/reviews/<slug>.md`.

Le HTML ou le seul research brief ne suffit plus à prouver la profondeur du workflow.

## PAGE_AUDIT

Retourner `KEEP`, `LIGHT_UPDATE`, `DEEP_REWRITE`, `MERGE` ou `NOINDEX` avec : confiance, JTBD, critères, preuves, unknowns/contradictions, valeur existante, blockers et prochaine étape.

## PUBLISH_REVIEW

### A — machine

Exécuter après build :

- `python3 validate_models.py` ;
- `python3 validate_model_workflow.py`.

Le machine PASS vérifie la présence/cohérence déclarative ; il ne juge pas la pertinence sémantique des preuves ou du JTBD.

### B — artifact gate

Avant PASS, vérifier que le research, record, audit, evidence packet, evidence ledger, decision artifact, content brief, post-draft et registry sont cohérents avec l'URL réellement produite.

### C — decision gate

Vérifier que le decision artifact contient un vrai JTBD, les forces de changement, Big Hire/Little Hire, critères `MUST_HAVE / HIGH / CONDITIONAL / CONTRAINDICATION` et les handoffs. Les critères doivent découler de la situation et de la preuve, pas d'une liste de specs.

### D — brief gate

Le content brief doit être postérieur au decision artifact dans la logique éditoriale et contenir : query/cluster, intent, reader/JTBD, décision, scope, critères, preuves/entities, trade-offs, handoffs, anti-patterns, angle, critères de succès et outline justifié. Il ne doit jamais devenir un template PRODUCT fixe.

### E — research-to-draft coverage

Pour chaque élément décisionnel :

- `USED` ;
- `HANDOFF` ;
- `EXCLUDED` avec justification ;
- `MISSING`.

Un `MISSING` décisionnel bloque le PASS. Le volume de texte, le nombre de sources ou de sections ne compense jamais un manque.

### F — freshness gate

Un `PASS` n'est valide que si la review a été commitée **après** :

- son record ;
- tous les artefacts qu'il référence ;
- les fichiers source déclarés pour le modèle ;
- le registry produit ;
- la configuration et les deux skills MODEL v2.

`validate_model_workflow.py` contrôle cette relation via l'historique Git. Une modification ultérieure d'un input rend donc automatiquement la review stale jusqu'à un nouveau PUBLISH_REVIEW.

### G — trust / value / cluster

Vérifier factualité, contradictions, absence de faux hands-on, utilité sans affiliation, raison de ne pas acheter, distinction face aux pages sœurs, architecture non clonée, title/H1/canonical/robots et maillage logique.

### H — résultat

PASS : `PASS — READY_FOR_HUMAN_VALIDATION` + `Workflow version : 2` + artefact/brief/freshness gates + tableau de coverage.

FAIL : `FAIL — KEEP_NOINDEX` avec la correction ciblée nécessaire.

## Indexation

Toujours `noindex,follow` par défaut. Indexation seulement après les deux validateurs, PUBLISH_REVIEW v2, validation humaine explicite et instruction explicite d'indexer.

## Anti-patterns

Pas de quotas de mots/H2/liens, scoring artificiel, FAQ obligatoire, plan PRODUCT fixe, synthèse d'avis décorative, faux verdict d'essai, promotion d'un signal communautaire en fait, ni PASS éditorial fondé uniquement sur la page rendue ou sur une review plus ancienne que ses inputs.

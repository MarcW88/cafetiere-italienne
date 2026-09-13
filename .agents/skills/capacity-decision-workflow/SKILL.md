---
name: capacity-decision-workflow
description: Orchestrateur des pages /capacites/ de cafetiere-italienne.be. Réutilise le moteur Comparatifs exact de bloc-notes-numerique pour diagnostic/recherche/preuves, puis le skill upstream ponomr/thinking-toolkit pour la décision de taille. La couche custom est limitée au routing, au mapping des routes et aux handoffs.
metadata:
  adapted_for: cafetiere-italienne.be
  orchestration_target: ">=80% existing GitHub skills"
  custom_scope: "routing + capacity route mapping + category handoffs + GEO/publication integration"
---

# Capacity Decision Workflow

## Rôle

Ce fichier ne définit aucune méthodologie SEO, de preuve, de décision, de scoring, de rédaction ou de QA.

Il orchestre des briques existantes :

1. `comparison-analysis-workflow` et la chaîne de skills qu'il réutilise pour le diagnostic ;
2. `comparison-content-workflow` pour la recherche candidats/variantes, les preuves, le fact-check, la valeur affiliée, le brief, la rédaction et les passes post-draft ;
3. `thinking-toolkit` pour transformer les faits vérifiés en décision de capacité ;
4. les gates SEO/GEO/anti-AI/editorial existants ;
5. les scripts du site uniquement pour intégrer et valider le rendu.

Les workflows Comparatifs restent inchangés et byte-identiques à leur upstream Bloc Notes épinglé.

---

## 1. Entrées obligatoires

Lire :

- `capacity-workflow.config.yaml` ;
- la page cible et les pages capacité voisines ;
- le dernier audit de cluster ;
- les preuves existantes ;
- les comparatifs proches ;
- `.agents/skills/comparison-analysis-workflow/SKILL.md` ;
- `.agents/skills/comparison-content-workflow/SKILL.md` ;
- `.agents/skills/thinking-toolkit/SKILL.md` ;
- `.agents/skills/thinking-toolkit/references/catalog.md`.

Ne jamais produire le brief éditorial avant l'artefact de décision.

---

## 2. Diagnostic et recherche : moteur Comparatifs exact

Réutiliser les briques partagées définies dans les workflows Comparatifs, sans recopier leurs méthodes ici :

- `seo-content-audit` ;
- `seo-keyword` ;
- `jobs-to-be-done` seulement si le contexte change réellement le besoin ;
- recherche candidats/variantes plausibles ;
- `evidence-based-reviews` seulement lorsqu'un claim expérientiel existe ;
- `fact-check` ;
- `affiliate-value` lorsque la page influence un achat.

Pour une page capacité, la recherche candidat sert à établir les variantes et volumes réellement disponibles. Elle ne doit pas devenir un ranking produit.

Les données commerciales ou affiliées ne définissent jamais le périmètre de recherche.

---

## 3. Normalisation capacité — custom autorisé, sans décision

La seule préparation métier custom autorisée avant le skill de décision est de normaliser des faits déjà sourcés :

- libellé commercial de taille ;
- capacité nominale ;
- volume de café préparé lorsqu'il est explicitement publié comme tel ;
- variante exacte ;
- compatibilité plaque ;
- diamètre de base ;
- tailles adjacentes disponibles ;
- source, date et niveau d'incertitude.

Ne jamais convertir arbitrairement `X tasses` en personnes ou en ml lorsqu'une source ne le permet pas.

Ne pas décider ici quelle taille est meilleure.

---

## 4. Décision : thinking-toolkit exact

Lire le catalogue upstream, puis sélectionner le plus petit modèle utile.

### Étape obligatoire — Hard Choice Model

Utiliser `references/hard-choice-model.md` pour calibrer l'effort de décision et distinguer :

- contraintes dures qui suffisent à éliminer des options ;
- options réellement comparables ;
- inconnues pouvant changer la conclusion.

Si une contrainte vérifiée suffit à trancher, arrêter là. Ne pas créer de score décoratif.

### Decision Matrix — conditionnelle

Utiliser `references/decision-matrix.md` seulement si plusieurs options viables restent comparables sur plusieurs critères distincts et que la matrice clarifie réellement le choix.

Respecter intégralement le modèle upstream : contraintes avant scores, critères avant scoring, preuves/incertitudes explicites, sensitivity check et interdiction de fausse précision.

Aucun score n'est obligatoire pour une page capacité.

---

## 5. Artefact de décision obligatoire

Persister avant le content brief :

`.content/capacities/decisions/<slug>.md`

Il doit contenir au minimum :

- décision exacte à prendre ;
- faits vérifiés utilisés ;
- hypothèses et inconnues séparées ;
- modèle(s) sélectionné(s) et raison ;
- contraintes dures ;
- options éliminées et pourquoi ;
- options encore viables ;
- résultat du modèle ;
- sensitivity / condition de révision si pertinente ;
- handoff vers `/comparatifs/` si la prochaine question devient un choix de produit précis.

Cet artefact est interne. Il n'impose pas une table ou un scoring dans la page publiée.

---

## 6. Brief et rédaction : reprendre la chaîne existante

Après la décision seulement :

1. `content-brief-authoring` ;
2. `content-and-copy` ;
3. `fact-check` post-draft ;
4. `internal-linking-audit` ;
5. `humanizer` ;
6. `general-writing` ;
7. `anti-ai-slop` ;
8. `seo-onpage` ;
9. `seo-technical` ;
10. `seo-best-practices` lorsque pertinent ;
11. extension GEO/AEO du site ;
12. `editorial-qa`.

Aucune de ces méthodes ne doit être redéfinie dans ce workflow.

---

## 7. Frontière avec Comparatifs

Une page `/capacites/` peut citer des modèles pour documenter les volumes, variantes et contraintes.

Elle doit faire un handoff vers `/comparatifs/` dès que la question principale devient :

- quel modèle précis acheter ;
- quel produit est meilleur ;
- quel produit offre le meilleur rapport qualité/prix ;
- quel modèle gagne sur plusieurs critères produit.

Le verdict d'une page capacité porte sur un **palier de volume / une adéquation de taille**, jamais sur un gagnant produit.

---

## 8. PUBLISH_REVIEW

Le review final doit rejouer les gates pertinents et vérifier en plus :

- artefact de décision présent avant le brief ;
- faits/claims cohérents avec les sources ;
- aucune méthodologie de décision custom parallèle ;
- aucune matrice forcée lorsque des contraintes suffisent ;
- aucune recommandation produit déguisée ;
- SEO/GEO/maillage/robots/canonical corrects ;
- valeur indépendante de l'affiliation ;
- absence de faux hands-on ;
- `noindex,follow` conservé jusqu'à validation humaine et instruction d'indexation.

Résultat :

- `PASS — READY_FOR_HUMAN_VALIDATION`
- `FAIL — KEEP_NOINDEX`

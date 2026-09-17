---
name: model-analysis-workflow
description: Workflow unique d'analyse des pages /modeles/ de cafetiere-italienne.be. Audite une fiche produit, contrôle intention, preuves, variantes, compatibilités, tailles, pièces, entretien, valeur affiliée et SEO, puis décide KEEP, LIGHT_UPDATE, DEEP_REWRITE, MERGE ou NOINDEX. En mode PUBLISH_REVIEW, bloque toute recherche décisionnelle non consommée.
metadata:
  adapted_for: cafetiere-italienne.be
  based_on: bloc-notes-numerique PRODUCT workflow
---

# Model Analysis Workflow

## Rôle

C'est le workflow d'analyse de référence pour les URLs sous `/modeles/`. Une page modèle est une fiche `PRODUCT`, pas un faux test : elle aide à décider si une référence précise convient, à quelle taille/variante, et avec quelles contraintes.

Modes : `AUDIT`, `CLUSTER_AUDIT`, `PUBLISH_REVIEW`.

Un `PASS — READY_FOR_HUMAN_VALIDATION` ne retire jamais `noindex,follow` automatiquement.

## Entrées

Lire avant analyse :

- `AGENTS.md` ;
- `model-workflow.config.yaml` ;
- page cible et modèles frères pertinents ;
- `.content/models/` et `.content/reviews/` ;
- données historiques disponibles ;
- sources actuelles lorsque les caractéristiques peuvent évoluer.

## Chaîne obligatoire

Orchestrer les skills existants plutôt que recopier leurs checklists :

1. `content-audit` — rôle autonome, valeur existante, obsolescence, duplication ;
2. `search-intent` — requête, intention, décision du lecteur, chevauchements ;
3. `content-refresh` si UPDATE — correction locale, révision majeure ou reconstruction ;
4. `affiliate-value` — utilité sans affiliation, limites, alternatives et raisons de ne pas acheter ;
5. `fact-check` — registre des claims et hiérarchie des preuves ;
6. `evidence-based-reviews` si un jugement d'usage/qualité/fiabilité est formulé ;
7. `internal-linking-audit` — handoff vers capacité, comparatif, guide, accessoire ou modèle frère ;
8. `anti-ai-slop` — architecture réellement propre au produit ;
9. `seo-technical` + `seo-best-practices` lorsque pertinents ;
10. `editorial-qa`.

## Contrôles spécifiques MODEL

Le modèle sert de grille de risque, pas de template. Vérifier uniquement ce qui change la décision :

- **statut et variante exacte** : version actuelle, génération ou finition seulement si cela change specs/compatibilité/pièces ;
- **construction** : matériaux utiles, sans transformer un matériau en promesse gustative non prouvée ;
- **tailles et volume préparé** : ne pas confondre “tasses” moka et mugs ; donner les volumes lorsque la source les documente et qu'ils changent le choix ;
- **compatibilité plaque** : par taille/variante, avec seuil ou diamètre de détection induction lorsque documenté ;
- **pièces et consommables** : compatibilité par famille/taille/génération, sans supposer l'universalité ;
- **entretien** : lave-vaisselle, lavage, première utilisation ou précautions seulement si la source est explicite ;
- **modèles frères** : expliquer la différence qui change le choix, sans refaire un comparatif général ;
- **usage** : ne reprendre les conseils génériques moka que lorsqu'une particularité du modèle l'exige ;
- **jugements** : aucune expérience propre sans vrai hands-on documenté.

Une page peut être excellente sans traiter tous ces points. Un point devient requis seulement si la recherche montre qu'il est décisionnel pour ce modèle.

## Preuves

Hiérarchie :

1. fabricant / manuel / support officiel ;
2. distributeur officiel ;
3. retailer fiable pour disponibilité ou information commerciale complémentaire ;
4. tests indépendants nommés ;
5. plusieurs sources utilisateurs pour un pattern d'expérience.

Statuts : `VERIFIED`, `SUPPORTED`, `INFERRED`, `UNKNOWN`, `OUTDATED`, `CONTRADICTED`.

`UNKNOWN` et `CONTRADICTED` ne deviennent jamais des certitudes rédactionnelles.

## Décision AUDIT

Retourner `KEEP`, `LIGHT_UPDATE`, `DEEP_REWRITE`, `MERGE` ou `NOINDEX` avec : confiance, preuves, unknowns, blockers, valeur existante, actions et prochaine étape.

`DEEP_REWRITE` route vers `model-content-workflow`.

## PUBLISH_REVIEW

### A — machine

Exécuter `python3 validate_models.py` après build. Le PASS machine est un plancher, pas un verdict éditorial.

### B — research-to-draft coverage

Relire le research/evidence brief. Pour chaque élément **décisionnel** attribuer exactement :

- `USED` — exploité correctement ;
- `HANDOFF` — volontairement routé vers une URL plus adaptée ;
- `EXCLUDED` — hors scope avec raison cohérente ;
- `MISSING` — important dans la recherche mais disparu sans justification.

Un `MISSING` décisionnel bloque la publication. Le nombre de sources, de mots ou de sections ne compense jamais un `MISSING`.

Tracer en priorité, lorsqu'ils sont décisionnels : variante/génération, tailles/volumes, compatibilité plaque, diamètre induction, entretien, pièces, différence avec modèle frère, limite ou raison de ne pas acheter.

### C — gates substantiels

Vérifier : intention, valeur originale, factualité, niveau de preuve, zéro `MISSING` décisionnel, aucun faux hands-on, pas de merchant rewrite, pas de cannibalisation non résolue, architecture justifiée par le research brief, title/H1/canonical/robots cohérents, maillage logique, page utile sans affiliation.

### D — résultat

PASS : `PASS — READY_FOR_HUMAN_VALIDATION` avec tableau de coverage.

FAIL : `FAIL — KEEP_NOINDEX` avec gate en échec et correction locale ou profonde adaptée.

## Indexation

Conserver `noindex,follow` par défaut. Indexation seulement après :

1. `validate_models.py` sans blocker ;
2. PUBLISH_REVIEW PASS ;
3. validation humaine explicite ;
4. instruction explicite de rendre la page indexable.

## Anti-patterns

Ne pas ajouter de quotas de mots/headings/liens, score artificiel, plan fixe “caractéristiques → avantages → avis → FAQ”, conclusion automatique ni faux verdict d'essai. La structure doit venir de l'intention, des preuves et des risques propres au modèle.

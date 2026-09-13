# PUBLISH_REVIEW — Cafetière italienne 10 tasses

Date : 2026-09-13
URL : `/capacites/cafetiere-italienne-10-tasses/`
Workflow : Guide Bloc Notes exact + extension capacité
Cluster decision : `DEEP_REWRITE`

## Status

**PASS — READY_FOR_HUMAN_VALIDATION**

La page doit rester `noindex,follow` jusqu'à validation humaine et instruction explicite d'indexation.

## Gates

### SEO_CONTENT_AUDIT — PASS

- l'ancien cadrage « 10 tasses presque introuvable » a été supprimé ;
- l'intention est recentrée sur le volume réel / capacité annoncée et l'arbitrage 9–10–12 ;
- la page ne duplique ni le hub `/capacites/` ni les comparatifs produits.

### SEO_KEYWORD / INTENT — PASS

- primary intent : `cafetiere italienne 10 tasses` ;
- sous-intentions couvertes : ml, 9 vs 10, 10 vs 12, induction, personnes ;
- réponse autonome placée immédiatement dans le hero et le premier bloc.

### FACT_CHECK — PASS

- Bialetti Moka Express 9 ~410 ml et 12 ~595 ml sont attribués à une source qui parle explicitement de `Approximate Brewed Coffee Volume` ;
- Bialetti Venus 10 est traitée comme capacité annoncée 460 ml, pas comme yield garanti ;
- CRISTEL Torino/Capri sont traitées comme contenances 0,50 l ;
- CRISTEL Capri `tous feux` a été recontrôlé sur la fiche actuelle ;
- Alessi 9090/M 10 est attribuée à la variante exacte ;
- Pedrini prouve la présence d'une 10 tasses mais pas un volume précis : aucun chiffre n'est inventé ;
- aucune équation `10 tasses = 10 personnes`.

### EVIDENCE_BASED_REVIEWS — NOT_REQUIRED

La page n'émet aucun claim expérientiel sur le goût, l'ergonomie, la vitesse, la durabilité ou la qualité relative des modèles. Les avis clients vus pendant la recherche n'ont pas été transformés en preuve éditoriale.

### AFFILIATE_VALUE — PASS

- aucune carte affiliée ;
- aucun exemple sélectionné selon sa monétisation ;
- aucun podium / ranking ;
- la page garde toute sa valeur sans lien marchand ;
- la sélection produit est explicitement renvoyée au workflow Comparatifs.

### CONTENT_BRIEF_AUTHORING — PASS

Brief dédié : `.content/briefs/cafetiere-italienne-10-tasses.md`.

La structure est propre à cette page : existence réelle du palier 10 → données multi-marques → 9/10/12 → métriques non équivalentes → induction → décision → handoff Comparatifs.

### CONTENT_AND_COPY — PASS

- contenu bespoke ;
- réponse concrète et qualifiée ;
- tableaux utilisés pour comparer des données, pas des scores ;
- pas de pseudo-test ni de langage d'expérience directe.

### INTERNAL_LINKING — PASS

Handoffs utiles vers :
- `/capacites/` ;
- `/capacites/cafetiere-italienne-12-tasses/` ;
- `/comparatifs/` ;
- `/comparatifs/cafetiere-italienne-induction/` ;
- `/comparatifs/cafetiere-italienne-inox/`.

Le maillage suit le parcours de décision et ne repose pas sur un quota de liens.

### HUMANIZER — PASS

- variations de rythme et de longueur ;
- formulations décisionnelles concrètes ;
- pas de remplissage marketing ;
- les réserves méthodologiques restent lisibles sans transformer la page en documentation technique.

### GENERAL_WRITING — PASS

- distinction claire entre concepts proches ;
- phrases à responsabilité explicite (`Bialetti publie`, `CRISTEL définit`, etc.) ;
- pas de claims vagues ou d'intensifiants inutiles.

### ANTI_AI_SLOP — PASS

- architecture différente des anciennes pages 2/4/6 ;
- aucun gabarit répétitif « volume / tableau / choix / sources » utilisé mécaniquement ;
- pas de conclusion récapitulative générique ;
- pas de série symétrique de fiches produits ;
- pas de « top 5 », badges winner ou transitions creuses.

### SEO_ONPAGE — PASS

- title : `Cafetière italienne 10 tasses : volume réel, 9 ou 12 ?` ;
- H1 : `Cafetière italienne 10 tasses : combien de ml et quand la choisir ?` ;
- meta orientée volume et tailles adjacentes ;
- canonical exact ;
- une seule intention dominante.

### SEO_TECHNICAL — PASS

- canonical : `https://cafetiere-italienne.be/capacites/cafetiere-italienne-10-tasses/` ;
- robots : `noindex,follow` ;
- build complet : PASS ;
- check global : PASS ;
- `validate_capacities.py` : PASS.

### SEO_BEST_PRACTICES — PASS

- pas de keyword stuffing ;
- entités marque + modèle explicites pour les chiffres spécifiques ;
- sources visibles ;
- pas de schema/review inventé.

### GEO_AEO — PASS

Blocs extractibles présents pour :
- combien de ml pour une 10 tasses ;
- pourquoi 10 tasses n'est pas universel ;
- 9 vs 10 vs 12 ;
- 10 tasses et induction ;
- 10 tasses ≠ 10 personnes.

Les réponses restent attribuées et conditionnelles lorsque la donnée dépend de la gamme.

### EDITORIAL_QA — PASS

- rôle de page = capacité / choice, pas comparatif produit ;
- les autres pages 2/4/6/12 restent inchangées dans ce test ;
- pas de cannibalisation créée avec le comparatif induction ou inox ;
- aucune affirmation d'expérience directe ;
- section Sources visible et datée.

## Evidence brief

`.content/capacities/evidence-cafetiere-italienne-10-tasses-2026-09-13.md`

## Validation machine

Le workflow test a passé :

- `npm run build` — PASS ;
- `npm run check` — PASS ;
- `python3 validate_capacities.py` — PASS ;
- markers spécifiques 10 tasses — PASS ;
- contrôle anti-ranking / fake hands-on — PASS ;
- contrôle que les pages 2/4/6/12 restent inchangées — PASS.

## Publication

`KEEP_NOINDEX`

Aucune indexation automatique. Aucune activation de monétisation automatique. Validation humaine requise avant toute étape suivante.

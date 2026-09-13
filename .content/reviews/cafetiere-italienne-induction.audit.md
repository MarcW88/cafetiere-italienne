# AUDIT — `/comparatifs/cafetiere-italienne-induction/`

Date : 13 septembre 2026  
Mode : `comparison-analysis-workflow / AUDIT`  
Décision : **DEEP_REWRITE — confiance HIGH**

## Valeur existante à préserver

- La page avait identifié le risque de petite base sur induction.
- Le cas critique Venus 2 tasses non compatible était déjà présent.
- Les claims santé/goût non prouvés n'étaient pas utilisés.
- Aucun faux hands-on n'était revendiqué.

## Blockers de l'ancienne version

- Le brief fixait Venus 4/6 comme verdict avant le sourcing candidat.
- Univers trop centré Bialetti/Alessi et absence de justification d'exclusions majeures.
- Pas de matrice de preuve variante × critère.
- Ranking 1→5 non reconstructible depuis les preuves.
- Pas de distinction assez forte entre faits fabricant et jugements d'usage.
- Architecture encore trop proche des autres comparatifs.
- Ancien PUBLISH_REVIEW réalisé avant le durcissement des gates : invalidé.

## Intention confirmée

La requête est commerciale/comparative : le lecteur cherche **quel modèle induction acheter**, pas seulement comment fonctionne l'induction.

Frontière :
- `/guides/cafetiere-italienne-induction-compatibilite/` = expliquer/tester la compatibilité ;
- `/comparatifs/cafetiere-italienne-induction/` = choisir entre des variantes d'achat réellement documentées.

## Données manquantes qui ont déclenché la recherche

- variantes exactes Bialetti et dimensions de base ;
- alternatives hors Bialetti/Alessi ;
- modèles tout inox / lave-vaisselle ;
- seuils de détection publiés ;
- signaux indépendants sur l'usage ;
- exclusions explicites pour les produits à preuve incomplète.

## Handoff au content workflow

Reconstruction sans ranking numérique :
1. hard gates de compatibilité ;
2. univers candidat raisonnable ;
3. critères avant verdict ;
4. preuve primaire pour les specs ;
5. preuve indépendante uniquement pour les claims d'usage observés ;
6. verdicts conditionnels ;
7. architecture spécifique à l'induction ;
8. passage obligatoire par PRODUCTS, EVIDENCE, AFFILIATION, GEO, ANTI_AI_SLOP, SEO, INTERNAL_LINKING, TECHNICAL et EDITORIAL_QA.

Robots : conserver `noindex,follow`.

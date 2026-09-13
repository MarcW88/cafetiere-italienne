---
url: /capacites/cafetiere-italienne-10-tasses/
slug: cafetiere-italienne-10-tasses
status: BRIEF_READY_V2
primary_keyword: cafetière italienne 10 tasses
search_intent: comprendre le volume associé au palier 10 tasses et décider entre 9, 10 et 12 selon le besoin réel
last_researched: 2026-09-13
workflow_reference: exact Bloc Notes comparison/shared stack + ponomr/thinking-toolkit v1.0.0
evidence_brief: .content/capacities/evidence-cafetiere-italienne-10-tasses-2026-09-13.md
decision_artifact: .content/capacities/decisions/cafetiere-italienne-10-tasses.md
supersedes_for_methodology: .content/briefs/cafetiere-italienne-10-tasses.md
---

# Décision éditoriale V2

La page doit aider à décider **si le palier 10 tasses correspond au volume recherché**, pas à élire le meilleur modèle 10 tasses.

Le skill upstream `thinking-toolkit` conclut :
- `Hard Choice Model: APPLIED` ;
- décision low-impact / easy-comparison au niveau capacité ;
- le volume est le critère principal ;
- les contraintes exactes de plaque/diamètre viennent ensuite ;
- `Decision Matrix: NOT_REQUIRED` ;
- une comparaison pondérée de produits serait hors scope et doit passer à `/comparatifs/`.

## Réponse centrale

Sur les références actuelles vérifiées, le palier commercial 10 tasses se situe souvent autour de **460 à 500 ml de capacité annoncée**, mais ce n'est pas une norme universelle. Pour un besoin proche de ~410 ml, une 9 tasses documentée peut être plus cohérente ; pour ~595 ml, une 12 tasses peut l'être davantage.

## Faits obligatoires

- Bialetti Venus 10 : ~460 ml de capacité annoncée ;
- CRISTEL Torino/Capri 10 : 0,50 l ;
- Alessi 9090/M 10 : ~500 ml ;
- Cecotec Moking 1000 : 500 ml ;
- Pedrini Steel Moka : existence de la variante 10 confirmée, volume exact non publié dans la fiche consultée ;
- Moka Express 9 : ~410 ml de café préparé ;
- Moka Express 12 : ~595 ml de café préparé.

Toujours distinguer la nature de la métrique publiée.

## Hard constraints issues du skill de décision

1. volume réellement visé ;
2. nature de la métrique disponible ;
3. compatibilité induction si obligatoire ;
4. diamètre/détection si documenté et décisionnel ;
5. existence de la taille dans la gamme exacte.

## Règle de décision

- cible proche de ~0,4 l → regarder aussi 9 tasses ;
- cible proche de ~0,46–0,50 l → le palier 10 tasses est cohérent ;
- cible proche de ~0,6 l → regarder aussi 12 tasses.

Cette règle ne choisit aucun produit précis.

## Architecture justifiée

La version actuelle peut être conservée si elle maintient :

1. réponse autonome sur la zone 460–500 ml ;
2. preuve multi-marques que le palier 10 existe réellement ;
3. comparaison 9/10/12 par volume ;
4. distinction capacité nominale / brewed volume ;
5. contraintes induction attribuées au modèle exact ;
6. bloc explicite expliquant pourquoi cette page ne désigne pas de « meilleure 10 tasses » ;
7. sources visibles et datées.

Aucun score ni ranking n'est nécessaire.

## Frontière Comparatifs

Dès qu'il faut départager Venus, Torino, 9090/M, Cecotec ou Pedrini sur matériau, entretien, prix, réparabilité ou valeur globale, handoff vers `/comparatifs/`.

## Affiliation

Aucune carte produit n'est nécessaire au raisonnement. La sélection d'exemples repose sur la couverture factuelle du marché, pas sur la monétisation.

## SEO / GEO / AEO

Conserver :
- title centré sur volume réel / 9 ou 12 ;
- H1 centré sur ml + quand choisir ;
- réponse answer-first ;
- marque + gamme + variante pour chaque chiffre spécifique ;
- canonical exact ;
- `noindex,follow` ;
- blocs extractibles sur 10 tasses en ml, 9/10/12 et induction ;
- pas de FAQ artificielle ni schema de review.

## Post-draft gates obligatoires

`fact-check → internal-linking-audit → humanizer → general-writing → anti-ai-slop → seo-onpage → seo-technical → seo-best-practices → GEO/AEO → editorial-qa → PUBLISH_REVIEW`.

## Critère de validation V2

Si le contenu rendu respecte déjà le nouvel artefact de décision et tous les gates, ne pas le réécrire pour le seul motif que le workflow a changé. Le nouveau skill doit améliorer la traçabilité de la décision, pas provoquer du churn éditorial inutile.

---
url: /capacites/
slug: capacites
status: BRIEF_READY_V2
primary_keyword: taille cafetière italienne
search_intent: choisir une capacité de cafetière italienne à partir du volume documenté
last_researched: 2026-09-13
workflow_reference: exact Bloc Notes comparison/shared stack + ponomr/thinking-toolkit v1.0.0
evidence_brief: .content/capacities/evidence-capacites-hub-2026-09-13.md
decision_artifact: .content/capacities/decisions/capacites-hub.md
supersedes_for_methodology: .content/briefs/capacites-hub.md
---

# Décision éditoriale V2

Le hub doit résoudre une décision de **palier de capacité**, pas une décision de produit.

L'artefact `thinking-toolkit` conclut :
- `Hard Choice Model: APPLIED` ;
- décision low-impact / easy-comparison après normalisation en ml ;
- règle simple préférable ;
- `Decision Matrix: NOT_REQUIRED` ;
- aucune pondération ou score produit à ajouter.

## Réponse centrale

Choisir d'abord le volume habituel en ml, puis éliminer les variantes incompatibles avec la plaque ou le diamètre. Le nombre de « tasses » reste un libellé de gamme et ne constitue ni une unité de volume universelle ni une équivalence de personnes.

## Faits obligatoires

Préserver les exemples documentés qui démontrent la variabilité :
- Moka Express 4 ~185 ml ;
- Venus 4 ~170 ml ;
- Moka Induction 4 ~150 ml ;
- Moka Express 9 ~410 ml ;
- CRISTEL Torino 10 = 0,50 l ;
- Moka Express 12 ~595 ml ;
- les autres paliers doivent toujours être attribués à la gamme exacte.

Ne pas mélanger capacité nominale et volume de café préparé lorsqu'une source distingue les métriques.

## Hard constraints issues du skill de décision

1. volume recherché ;
2. compatibilité de plaque lorsqu'elle est obligatoire ;
3. diamètre de détection lorsqu'il est documenté et décisionnel ;
4. existence réelle de la variante dans la gamme.

Ces contraintes s'appliquent avant toute préférence secondaire.

## Architecture justifiée par la décision

La version actuelle du hub peut être conservée si elle maintient cette progression :

1. réponse courte en ml ;
2. repères multi-gammes démontrant que le nombre de tasses n'est pas universel ;
3. explication de la variabilité à taille égale ;
4. règle de décision volume → contraintes de plaque/diamètre ;
5. tailles adjacentes / paliers absents selon les gammes ;
6. handoffs vers les pages capacité et vers `/comparatifs/` pour le choix produit ;
7. sources primaires visibles.

Aucun tableau de scores n'est demandé.

## Frontière Comparatifs

La recherche de variantes et preuves reprend le moteur Comparatifs exact, mais la page doit s'arrêter avant :
- winner ;
- ranking ;
- meilleur rapport qualité/prix ;
- recommandation d'un produit précis sur plusieurs critères.

Ces questions passent à `/comparatifs/`.

## Affiliation

Aucune disponibilité affiliée ne doit déterminer le palier ou les exemples. Le hub doit rester intégralement utile sans carte produit.

## SEO / GEO / AEO

Conserver :
- réponse answer-first ;
- entités marque + gamme pour chaque valeur ;
- unités explicites ;
- canonical `/capacites/` ;
- `noindex,follow` jusqu'à instruction distincte ;
- blocs extractibles sur la variabilité des 4 tasses et sur la méthode volume → plaque → taille ;
- pas de FAQ ou schema artificiel.

## Post-draft gates obligatoires

`fact-check → internal-linking-audit → humanizer → general-writing → anti-ai-slop → seo-onpage → seo-technical → seo-best-practices → GEO/AEO → editorial-qa → PUBLISH_REVIEW`.

## Critère de validation V2

Le contenu existant peut être conservé sans réécriture si la nouvelle couche de décision n'identifie aucune contradiction. Une modification de méthodologie n'impose pas une réécriture cosmétique.

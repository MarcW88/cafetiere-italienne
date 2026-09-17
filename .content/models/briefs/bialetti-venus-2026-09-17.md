# Content brief — Bialetti Venus

Date : 2026-09-17
Workflow version : 2
Page type : `PRODUCT`
URL : `/modeles/bialetti-venus/`

## Target query / cluster

- Primary topic : `Bialetti Venus`
- Supporting intents : tailles, volume, induction, inox, pièces, Venus vs Moka Induction.
- Cluster role : fiche produit décisionnelle ; ne pas absorber les guides génériques capacité, dosage, nettoyage ou induction.

## Search intent

Commercial investigation / product research. Le lecteur cherche surtout à savoir si la Venus convient à sa plaque, à son volume habituel et à son attente d'une moka inox.

## Reader / JTBD

Quand je prépare régulièrement un petit ou moyen volume de moka et que l'induction peut compter, je veux choisir une taille réellement adaptée à ma quantité et officiellement compatible avec ma plaque, afin d'éviter une cafetière trop grande ou inutilisable.

## Decision to resolve

1. Quelle taille correspond au volume recherché ?
2. Cette taille est-elle officiellement compatible induction ?
3. Son diamètre sera-t-il détecté par la plaque ?
4. Est-ce bien l'inox que je recherche plutôt qu'une architecture hybride/aluminium ?
5. Les pièces et contraintes d'entretien sont-elles acceptables ?

## Scope

À traiter : Venus 2/4/6 ; 10 tasses uniquement avec qualification marché. Construction inox 18/10, volumes, bases, compatibilité induction, entretien actuel, pièces par taille, différence locale avec Moka Induction.

Hors scope : mode d'emploi complet, réglage de mouture, prix figé, verdict gustatif, couleurs décoratives sans conséquence fonctionnelle.

## Decision criteria

- `MUST_HAVE` — taille officiellement compatible avec la plaque utilisée.
- `MUST_HAVE` — volume documenté cohérent avec la quantité habituelle.
- `HIGH` — diamètre accepté par le foyer induction.
- `HIGH` — préférence réelle pour une construction inox.
- `CONDITIONAL` — disponibilité 10 tasses selon marché.
- `CONDITIONAL` — pièce exacte par famille + taille.
- `CONTRAINDICATION` — Venus 2 tasses si une compatibilité induction garantie est indispensable.
- `CONTRAINDICATION` — besoin d'un lavage systématique au lave-vaisselle.

## Required evidence / entities

- Bialetti Venus actuelle.
- 2 tasses ≈ 85 ml, base ≈ 8 cm, non induction.
- 4 tasses ≈ 170 ml, base ≈ 9,5 cm, induction.
- 6 tasses ≈ 235 ml, base ≈ 10,5 cm, induction.
- 10 tasses européenne : disponibilité/volume qualifiés selon marché.
- Bialetti funnels et ring/filter packs Venus/Musa/Kitty.
- Moka Induction uniquement pour expliquer la différence de construction et de volume.

## Trade-offs / contradictions

- Des utilisateurs rapportent parfois qu'une Venus 2 tasses est détectée par leur propre foyer. Ce signal explique la confusion mais ne remplace pas la compatibilité officielle.
- Des documents anciens mentionnent parfois le lave-vaisselle ; la documentation actuelle de la référence prévaut.
- Les volumes documentés sont des repères comparatifs approximatifs, pas une promesse de rendement versé identique à chaque préparation.

## Internal-link handoffs

- `/capacites/`
- `/guides/cafetiere-italienne-induction-compatibilite/`
- `/guides/dosage-cafe-cafetiere-italienne/`
- `/guides/mouture-cafetiere-italienne/`
- `/guides/cafetiere-italienne-aluminium-ou-inox/`
- `/guides/nettoyer-cafetiere-italienne/`
- `/modeles/bialetti-moka-induction/`
- `/accessoires/joint-cafetiere-italienne/`
- `/accessoires/filtre-cafetiere-italienne/`

## Anti-patterns

- écrire “Venus = induction” sans distinction de taille ;
- transformer un cas utilisateur de détection en compatibilité officielle ;
- assimiler “4 tasses” à quatre mugs ;
- affirmer `inox = meilleur goût` ;
- généraliser l'assortiment 10 tasses à tous les marchés ;
- simuler un test produit.

## Editorial angle

La Venus se choisit par l'intersection **taille → volume → diamètre → plaque**, puis par préférence de construction inox. Le nom du modèle ne suffit pas.

## Success criteria

Le lecteur doit pouvoir éliminer une mauvaise taille avant achat, comprendre pourquoi la 2 tasses est un cas à part sur induction, interpréter correctement les volumes, identifier la logique des pièces et savoir quand regarder plutôt Moka Induction.

## Proposed outline

1. Hard gate taille + plaque — résoudre l'erreur la plus coûteuse dès l'ouverture.
2. Matrice tailles / volumes / bases / induction — transformer la nomenclature en décision.
3. Volume nominal vs résultat pratique — éviter la lecture trop littérale des ml.
4. Détection induction — distinguer compatibilité produit et seuil du foyer.
5. Inox : ce que cela change réellement — construction sans promesse gustative.
6. Entretien et contradiction documentaire — donner la consigne actuelle.
7. Pièces par famille + taille — réduire le risque d'achat incompatible.
8. Venus vs Moka Induction — comparaison locale, uniquement sur les variables qui changent le choix.
9. Cas où ne pas choisir Venus — expliciter les contraindications.
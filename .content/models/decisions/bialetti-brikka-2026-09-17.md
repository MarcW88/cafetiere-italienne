# Decision artifact — Bialetti Brikka

Date : 2026-09-17
Workflow version : 2

## JTBD

Quand je veux un café moka plus concentré et plus mousseux qu'avec une Moka Express, je veux savoir si la Brikka correspond vraiment à mon usage, à ma plaque et à mon volume habituel, afin de ne pas acheter uniquement pour la promesse de « crema » et découvrir ensuite un protocole ou des pièces incompatibles.

## Circumstances

- utilisateur de moka qui compare Brikka et Moka Express ;
- recherche d'un café plus concentré / d'une mousse plus marquée ;
- plaque gaz, électrique, céramique ou induction ;
- besoin individuel autour de 90 ml ou plus proche de 150–160 ml ;
- achat neuf ou entretien d'une Brikka plus ancienne.

## Push / Pull / Anxiety / Habit

- **Push** : Moka Express jugée trop classique, envie d'un résultat plus concentré ou plus mousseux.
- **Pull** : valve Brikka, promesse fabricant de mousse/crema, alternative induction dédiée, formats compacts.
- **Anxiety** : la mousse sera-t-elle vraiment présente ? quelle quantité d'eau utiliser ? la classique fonctionne-t-elle sur induction ? quelle pièce commander selon l'année ?
- **Habit** : rester sur une Moka Express plus simple et plus tolérante, ou choisir Moka Induction/Venus pour l'induction sans chercher l'effet Brikka.

## Big Hire

Choisir Brikka plutôt qu'une moka standard parce que l'utilisateur valorise réellement sa logique de valve et accepte le protocole spécifique qui l'accompagne.

## Little Hire

Continuer à utiliser la Brikka parce que le volume, la plaque, la préparation mesurée et le résultat en tasse correspondent réellement au rituel quotidien — pas parce qu'un terme marketing promet une crema automatique.

## Decision criteria

- `MUST_HAVE` — choisir la bonne architecture pour la plaque : classique non induction directe vs Brikka Induction.
- `MUST_HAVE` — choisir le bon volume : classique 2 ≈90 ml, classique 4 ≈150 ml, Induction 4 vérifiée ≈160 ml.
- `MUST_HAVE` — accepter et suivre la quantité d'eau spécifique : 120 ml ou 170 ml selon référence vérifiée.
- `HIGH` — valoriser réellement le mécanisme de valve / le café plus concentré plutôt qu'une moka conventionnelle.
- `HIGH` — être à l'aise avec une préparation un peu moins tolérante au protocole.
- `HIGH` — identifier la génération avant d'acheter un funnel.
- `HIGH` — vérifier le mapping ring/filter Brikka plutôt que commander uniquement sur le nombre de tasses inscrit sur la cafetière.
- `CONDITIONAL` — utiliser un adaptateur si l'on veut absolument la Brikka classique sur induction.
- `CONTRAINDICATION` — priorité à la simplicité maximale et à une recette de moka standard.
- `CONTRAINDICATION` — achat motivé uniquement par l'attente d'une crema identique et garantie comme sur une machine espresso.

## Hard gates

1. Brikka classique : pas d'induction directe.
2. Brikka : quantité d'eau mesurée spécifique, pas règle générique « jusqu'à la soupape ».
3. Pièces : génération 2016–2023 vs 2024 pour les funnels.
4. Rings/filters : Brikka 2 → pack Moka 3 ; Brikka 4 → pack Moka 6.
5. « Crema » : claim fabricant à qualifier, pas garantie universelle.

## Flexible-capacity check

Aucun filtre réducteur ni mode multi-rendement fabricant n'est documenté dans le dossier Brikka actuel. La page ne doit donc pas inventer de demi-capacité. Bialetti recommande au contraire de choisir une taille correspondant au service habituel et d'utiliser la quantité d'eau prévue.

## Alternatives / handoffs

- `/modeles/bialetti-moka-express/` — plus simple, pas de valve Brikka.
- `/modeles/bialetti-moka-induction/` — induction directe sans objectif Brikka/crema.
- `/guides/cafetiere-italienne-induction-compatibilite/` — plaque et adaptateur.
- `/capacites/` — volume réel.
- `/guides/dosage-cafe-cafetiere-italienne/` et `/guides/mouture-cafetiere-italienne/` — technique générique.
- `/accessoires/pieces-detachees-bialetti/` — diagnostic pièce.
- `/marques/bialetti/` — gamme.

## Editorial thesis

La Brikka n'est pas « une Moka Express qui fait automatiquement de la crema ». C'est une famille plus sensible au protocole, où la bonne décision passe d'abord par **plaque → taille/volume → quantité d'eau → génération des pièces**, puis seulement par l'intérêt pour la valve et la mousse recherchée.
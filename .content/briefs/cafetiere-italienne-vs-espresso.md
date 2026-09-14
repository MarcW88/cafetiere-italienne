# Brief — Cafetière italienne vs espresso

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: EXPLAINER + CHOICE
Date: 14 septembre 2026

## Intention
Expliquer pourquoi moka et espresso ne sont pas la même méthode, puis aider le lecteur à choisir l’équipement cohérent avec son usage sans transformer la comparaison en palmarès de produits.

## Thèse éditoriale
Une moka n’est pas une machine espresso simplifiée. Les deux méthodes utilisent de la pression et produisent un café concentré, mais elles diffèrent par le mécanisme, le lit de café, le contrôle de l’extraction, le volume servi et l’équipement. Le bon choix dépend donc du résultat et du rituel recherchés, pas d’une hiérarchie absolue.

## Parcours de décision
1. Comprendre le mécanisme et la pression sans inventer un chiffre universel pour la moka.
2. Distinguer mouture et tassement.
3. Comparer le volume et la texture en tasse avec des exemples documentés.
4. Comprendre le niveau de contrôle disponible.
5. Examiner le workflow lait / boissons lactées sans prétendre que toute machine espresso possède une buse vapeur.
6. Comparer encombrement fonctionnel et entretien par composants, pas par slogans de prix.
7. Choisir selon l’usage : moka concentré sur plaque ou espresso sous pression de machine.

## Registre de preuves

### Moka Express / Bialetti
- La Moka Express utilise une chauffe externe ; l’air emprisonné dans la chaudière participe à la poussée de l’eau à travers le café.
- Bialetti demande un remplissage sous la soupape, un café moulu non tassé et une chauffe faible à moyenne.
- Bialetti NZ recommande une mouture medium-fine et précise qu’un café moulu pour machine espresso électrique est généralement trop fin pour la moka.
- Les volumes brassés publiés pour la Moka Express varient selon la taille : environ 130 ml pour 3 tasses et 250 ml pour 6 tasses.
- Ces chiffres décrivent la Moka Express, pas toutes les moka.

### Fonctionnement moka / étude thermo-fluidique
- Navarini et al., Applied Thermal Engineering (2009) : la moka utilise la pression produite dans la chaudière chauffée pour pousser l’eau vers le haut à travers le lit de café.
- L’étude montre que l’extraction peut commencer avant l’ébullition à pression atmosphérique et que la quantité initiale d’air dans la chaudière influence le fonctionnement.
- Ne pas réduire le mécanisme à « de la vapeur à 100 °C qui pousse l’eau ».
- Ne pas publier de valeur de pression moka comme règle universelle à partir d’un seul dispositif expérimental.

### Espresso / Specialty Coffee Association
- La spécification SCA 2021 des machines espresso définit l’espresso comme un café concentré brassé sous pression et l’espresso machine comme une machine qui force de l’eau pressurisée à travers un lit de café et un filtre.
- La définition historique SCAA reprise par la SCA donnait un cadre d’environ 25–35 ml, 9–10 atmosphères et 20–30 s pour un espresso ; la SCA elle-même la présente comme une définition historique et montre que les pratiques réelles ont évolué.
- Ne pas présenter 9 bar comme l’unique définition contemporaine obligatoire de tout espresso.
- La SCA décrit le lit de café espresso comme un « coffee cake », généralement tassé, dans un panier de porte-filtre.
- La crema est caractéristique de l’espresso pressurisé, mais ne doit pas être utilisée comme score universel de qualité.

## Claims interdits ou à qualifier
- « La moka fait 1–2 bar » : ne pas généraliser sans protocole/modèle précis.
- « Une moka fait un vrai espresso » : éviter ; certaines marques utilisent le mot espresso commercialement, mais la méthode n’est pas celle d’une machine espresso.
- « Espresso = toujours 9 bar » : remplacer par un repère historique / courant, pas une loi universelle.
- « Moka = plus forte / plus caféinée » : impossible sans dose, café et volume comparables.
- « Machine espresso = toujours plus chère / meilleure » : pas de hiérarchie ni claim de prix non sourcé.
- « Toute machine espresso a une buse vapeur » : faux ; parler uniquement des machines qui en disposent.

## Frontières du cluster
- Définition et histoire du mot moka → `/cafe-moka/quest-ce-que-le-cafe-moka/`.
- Méthode moka → `/guides/comment-utiliser-cafetiere-italienne/`.
- Mouture moka → `/guides/mouture-cafetiere-italienne/`.
- Choix d’une moka → `/guides/comment-choisir-cafetiere-italienne/`.
- Sélection de produits → `/comparatifs/`.

## Valeur originale attendue
- Tableau de décision fondé sur le besoin, pas sur un vainqueur.
- Distinction « pression présente dans les deux méthodes » vs « architecture et contrôle différents ».
- Exemple de volumes Moka Express explicitement borné au modèle.
- Section dédiée aux faux raccourcis : crema, caféine, 9 bar, mot « espresso » sur les fiches moka.
- Handoff clair vers le choix d’une moka seulement si le lecteur a déjà choisi cette méthode.

## Sources vérifiées
- Bialetti — Comment utiliser la Moka Express : https://bialetti-cookware.zendesk.com/hc/fr/articles/5416235346322-Comment-utiliser-la-Moka-Express
- Bialetti NZ — Moka Express, volumes et mouture : https://www.bialetti.co.nz/products/moka-express
- Bialetti NZ — Tips and Care : https://www.bialetti.co.nz/blogs/making-great-coffee/tips-and-care
- Specialty Coffee Association — Competition Espresso Machines — Specifications and Test Methods (2021) : https://sca.coffee/s/Competition-Espresso-Machine-Specifications-2021.pdf
- Specialty Coffee Association — Defining the Ever-Changing Espresso : https://sca.coffee/sca-news/25-magazine/issue-3/defining-ever-changing-espresso-25-magazine-issue-3-zyx36
- Navarini et al. — Experimental investigation of steam pressure coffee extraction in a stove-top coffee maker, Applied Thermal Engineering 29 (2009) : https://www.sciencedirect.com/science/article/pii/S1359431108002299

## Image decision
NO_NEW_IMAGE.

Une illustration générique n’ajouterait pas de preuve utile ici. Les différences décisives sont mieux servies par le tableau comparatif et les explications de mécanisme. Si un visuel est ajouté plus tard, il doit rester illustratif et ne jamais simuler une mesure de pression ou un test produit.

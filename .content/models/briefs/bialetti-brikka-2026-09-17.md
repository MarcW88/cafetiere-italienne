# Content brief — Bialetti Brikka

Date : 2026-09-17
Workflow version : 2
Page type : `PRODUCT`
URL : `/modeles/bialetti-brikka/`

## Target query / cluster

- Primary topic : `Bialetti Brikka`
- Supporting intents : Brikka 2 ou 4 tasses, Brikka Induction, Brikka vs Moka Express, crema, eau Brikka, pièces Brikka, funnel Brikka 2024.
- Cluster role : fiche produit / famille modèle centrée sur valve, protocole, plaque, volumes et génération.

## Search intent

Commercial investigation / product research. Le lecteur veut savoir si Brikka est pertinente pour lui et quelle version exacte choisir, pas seulement lire une description marketing de la valve.

## Reader / JTBD

Quand je veux un café moka plus concentré et plus mousseux qu'avec une Moka Express, je veux savoir si la Brikka correspond vraiment à mon usage, à ma plaque et à mon volume habituel, afin de ne pas acheter uniquement pour la promesse de « crema » et découvrir ensuite un protocole ou des pièces incompatibles.

## Decision to resolve

1. Brikka classique ou Brikka Induction ?
2. 2 tasses ≈90 ml ou 4 tasses ≈150–160 ml ?
3. Quelle quantité d'eau utiliser réellement ?
4. Que peut-on raisonnablement attendre de la valve et de la « crema » ?
5. Quelle génération de funnel / quel ring-filter pack correspond à la cafetière ?
6. Dans quel cas une Moka Express ou Moka Induction est plus rationnelle ?

## Scope

À traiter : Brikka classique actuelle 2/4, Brikka Induction 4 vérifiée, volumes préparés, base, plaque, recette d'eau mesurée, valve comme différence fonctionnelle, entretien, génération 2016–2023 vs 2024 des funnels, mapping ring/filter.

Hors scope : pression exacte non documentée, catalogue mondial exhaustif, prix, promesse d'espresso professionnel, optimisation avancée de mouture, techniques communautaires non validées.

## Decision criteria

- `MUST_HAVE` — architecture compatible avec la plaque.
- `MUST_HAVE` — volume réel adapté au service habituel.
- `MUST_HAVE` — accepter la quantité d'eau spécifique à la Brikka.
- `HIGH` — intérêt réel pour la valve et un café plus concentré / plus mousseux.
- `HIGH` — tolérance à un protocole plus spécifique qu'une Moka Express.
- `HIGH` — génération exacte pour les funnels.
- `HIGH` — bon mapping ring/filter.
- `CONDITIONAL` — adaptateur induction pour la classique.
- `CONTRAINDICATION` — priorité à la simplicité ou attente d'une crema espresso garantie.

## Required evidence / entities

- Bialetti Brikka classique actuelle 2/4.
- Bialetti Brikka Induction 4 vérifiée.
- 90 / 150 / 160 ml préparés selon référence.
- 120 / 170 ml d'eau de préparation selon référence.
- aluminium classique vs base bi-layer induction.
- funnel 2016–2023 vs funnel actuel 2024 avec dimensions.
- Brikka 2 → ring/filter pack 3 ; Brikka 4 → pack 6.
- claim fabricant sur valve / concentration / mousse explicitement attribué.

## Trade-offs / contradictions

- Des anciennes générations et revendeurs affichent d'autres volumes : ne pas fusionner les specs sans génération/référence.
- Le mot « crema » est marketing/fonctionnel ; ne pas l'assimiler à une crema espresso professionnelle ni à un résultat garanti.
- Des utilisateurs remplissent à la soupape ou ajustent la recette ; la page suit les quantités fabricant actuelles et utilise ces discussions seulement comme signal de confusion.
- Une Brikka classique sur induction via adaptateur n'est pas identique à une Brikka Induction bi-layer.

## Internal-link handoffs

- `/modeles/bialetti-moka-express/`
- `/modeles/bialetti-moka-induction/`
- `/guides/cafetiere-italienne-induction-compatibilite/`
- `/capacites/`
- `/guides/dosage-cafe-cafetiere-italienne/`
- `/guides/mouture-cafetiere-italienne/`
- `/accessoires/pieces-detachees-bialetti/`
- `/marques/bialetti/`

## Anti-patterns

- titre/intro centrés uniquement sur « crema » ;
- dire « remplissez jusqu'à la soupape » sans tenir compte du protocole Brikka ;
- présenter 2 et 4 tasses comme des mugs ;
- présenter Brikka classique et Brikka Induction comme la même construction ;
- promettre une crema constante ou un espresso de machine ;
- commander un funnel sans année/génération ;
- commander un ring/filter Brikka uniquement par équivalence nominale de tasses ;
- simuler un test produit.

## Editorial angle

**La Brikka demande d'abord de choisir le bon système, pas de croire une promesse de crema.** La page part de plaque/volume/protocole, puis explique ce que la valve ajoute et où ses promesses doivent être qualifiées.

## Success criteria

Le lecteur doit repartir capable de :
- choisir classique 2, classique 4 ou Induction 4 vérifiée ;
- utiliser la quantité d'eau correcte ;
- comprendre pourquoi Brikka n'est pas une Moka Express standard ;
- ne pas surinterpréter « crema » ;
- identifier la génération et la bonne pièce ;
- savoir quand une autre moka est plus rationnelle.

## Proposed outline

1. Premier choix — classique ou Induction, avec matrice plaque/volume/eau.
2. Valve Brikka — différence réelle et limite du mot crema.
3. Recette d'eau — pourquoi 120/170 ml est un hard gate.
4. 2 vs 4 tasses — raisonner en rendement préparé, pas en mugs.
5. Induction — classique + adaptateur vs Brikka Induction bi-layer.
6. Pièces — génération funnels 2016–2023 vs 2024 + mapping ring/filter.
7. Entretien / première utilisation — contraintes utiles.
8. Brikka vs Moka Express / Moka Induction — contraindications et handoffs.
9. Sources vérifiées.
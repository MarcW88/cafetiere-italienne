# MODEL RESEARCH — Bialetti Brikka

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-brikka/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit aider à décider si la Brikka est réellement plus adaptée qu'une Moka Express lorsque l'on cherche un café plus concentré / plus mousseux, et surtout quelle version choisir : Brikka aluminium classique 2 ou 4 tasses, ou Brikka Induction 4 tasses. Le cœur de la décision n'est pas le mot « crema », mais la recette spécifique, la plaque, le volume réel, la génération des pièces et la tolérance de l'utilisateur à un produit plus sensible au protocole.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Brikka classique actuelle : aluminium | https://www.bialetti.co.nz/products/bialetti-brikka-new | VERIFIED | construction |
| Brikka classique actuelle : 2 tasses ≈ 90 ml, base ≈ 8,6 cm | même source | VERIFIED | taille / volume |
| Brikka classique actuelle : 4 tasses ≈ 150 ml, base ≈ 10,2 cm | même source | VERIFIED | taille / volume |
| Brikka classique : non compatible induction directe ; gaz, électrique, céramique ; adaptateur induction possible | même source | VERIFIED | hard gate plaque |
| Brikka classique : 120 ml d'eau pour la 2 tasses, 170 ml pour la 4 tasses via gobelet doseur | même source | VERIFIED | protocole spécifique |
| Brikka classique : mouture medium-fine recommandée, café versé librement, chauffe faible à moyenne | même source | VERIFIED | protocole spécifique |
| Brikka classique : retirer du feu quand le café est prêt, ne pas laisser bouillir / ne pas utiliser pleine puissance | même source | VERIFIED | limite usage |
| Brikka classique : lavage manuel, pas de lave-vaisselle, trois premières préparations à jeter | même source | VERIFIED | entretien |
| Bialetti décrit la valve Brikka comme produisant un café plus concentré et une mousse/« crema » plus marquée que la Moka Express | même source | VERIFIED AS MANUFACTURER CLAIM | différence produit, à ne pas transformer en garantie sensorielle |
| Brikka Induction vérifiée : 4 tasses, ≈ 160 ml préparés, base ≈ 11,5 cm | https://www.bialetti.co.nz/products/bialetti-brikka-induction | VERIFIED | taille / induction |
| Brikka Induction : base bi-layer avec extérieur inox et intérieur aluminium ; compatible induction, gaz, électrique, céramique | même source | VERIFIED | construction / plaque |
| Brikka Induction : 170 ml d'eau mesurés, chauffe faible à moyenne, lavage manuel | même source | VERIFIED | protocole |
| Belgique : Brikka classique 2/4 et Brikka Induction 4 sont actuellement référencées chez un retailer belge | https://www.interismo.be/fr-BE/bialetti/cafetieres-italiennes-brikka | SUPPORTED | contexte marché BE, pas source primaire de specs |
| Funnel Brikka 2016–2023 : 2 tasses Ø60 x 60 mm ; 4 tasses Ø65 x 85 mm | https://www.bialetti.co.nz/products/funnel-new-brikka | VERIFIED | génération / pièces |
| Funnel Brikka modèle actuel 2024 : 2 tasses Ø60 x 69 mm ; 4 tasses Ø65 x 93 mm | https://www.bialetti.co.nz/products/funnel-brikka-2016-to-current-models-only-copy | VERIFIED | génération / pièces |
| Rings & filters : Brikka 2 tasses utilise le pack correspondant Moka 3 tasses ; Brikka 4 tasses le pack Moka 6 tasses | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-ring-filter-pack | VERIFIED | pièce contre-intuitive |
| Des discussions utilisateurs montrent une confusion récurrente sur quantité d'eau, rendement et niveau à utiliser ; elles sont conservées comme signaux de friction, pas comme specs | Reddit r/mokapot, threads Brikka 2024–2026 | OBSERVED | JTBD / anxiété / besoin d'explication |
| Des utilisateurs rapportent une mousse/crema variable selon préparation ou exemplaire | Reddit r/mokapot | OBSERVED | limite de promesse, pas preuve de performance moyenne |

## Décisions / hard gates à consommer

- `HARD_GATE` : la Brikka aluminium classique n'est pas compatible induction directement ; la Brikka Induction vérifiée l'est.
- `HARD_GATE` : le protocole d'eau Brikka est spécifique — 120 ml pour la classique 2 tasses, 170 ml pour la classique 4 tasses et la Brikka Induction 4 tasses vérifiée. Ne pas appliquer mécaniquement la règle « jusqu'à la soupape » d'une Moka Express.
- `DECISION` : classique 2 tasses ≈90 ml vs classique 4 tasses ≈150 ml vs Induction 4 tasses ≈160 ml ; choisir sur volume réel + plaque.
- `DECISION` : la valve et la promesse de mousse/crema sont la différence fonctionnelle centrale, mais ne constituent pas une garantie d'espresso ni de crema identique à une machine espresso.
- `DECISION` : pour une réparation, distinguer génération 2016–2023 vs modèle actuel 2024 ; les longueurs d'entonnoir diffèrent.
- `DECISION` : les packs ring/filter sont contre-intuitifs : Brikka 2 → pack 3 tasses ; Brikka 4 → pack 6 tasses.
- `LIMIT` : si l'utilisateur veut une moka très simple, tolérante et sans protocole spécifique, la Moka Express reste une alternative plus rationnelle.

## Handoffs

- Moka Express → `/modeles/bialetti-moka-express/`
- Moka Induction → `/modeles/bialetti-moka-induction/`
- induction générale → `/guides/cafetiere-italienne-induction-compatibilite/`
- capacités → `/capacites/`
- dosage / remplissage → `/guides/dosage-cafe-cafetiere-italienne/`
- mouture → `/guides/mouture-cafetiere-italienne/`
- pièces Bialetti → `/accessoires/pieces-detachees-bialetti/`
- marque → `/marques/bialetti/`

## À exclure ou qualifier

- ne pas promettre une « vraie crema espresso » au sens d'une machine espresso ;
- ne pas transformer le claim fabricant « plus concentré » en mesure indépendante universelle ;
- ne pas généraliser les pièces 2024 aux Brikka 2016–2023 ;
- ne pas supposer que toute Brikka Induction mondiale existe dans les mêmes tailles que la référence 4 tasses vérifiée ;
- ne pas utiliser les témoignages Reddit comme specs ;
- ne pas figer de prix.
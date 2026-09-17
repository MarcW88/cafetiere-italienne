# MODEL RESEARCH — Bialetti Moka Induction

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-moka-induction/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit expliquer ce que la Moka Induction ajoute réellement par rapport à Moka Express et Venus, puis éviter trois erreurs d'achat : supposer qu'une mention induction garantit la détection par toute plaque, supposer qu'une “4 tasses” donne le même volume dans toutes les gammes, et commander une pièce pour la mauvaise génération.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Modèle actuel Bi-Layer : base inox + aluminium, partie supérieure aluminium, silicone | https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black | VERIFIED | architecture du produit |
| Compatible induction, gaz, électrique et céramique | même source | VERIFIED | plaque |
| Il faut vérifier que la plaque détecte le diamètre de la base | même source | VERIFIED | hard gate induction |
| Tailles actuelles documentées : 2 / 4 / 6 tasses | même source | VERIFIED | variantes actuelles |
| Volumes approx. : 100 / 150 / 280 ml | même source | VERIFIED | choix taille |
| Largeurs de base approx. : 9,5 / 10 / 11,5 cm | même source | VERIFIED | détection induction |
| Lavage manuel en eau chaude ; éviter pleine puissance / ébullition prolongée | même source | VERIFIED | entretien / usage |
| Les éditions Dolce&Gabbana consultées n'ont pas exactement les mêmes volumes documentés : 2 tasses ≈ 90 ml ; 4 tasses ≈ 190 ml | https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-2-cup ; https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-2-cup-blumed | VERIFIED | la variante exacte compte |
| Les éditions D&G restent bi-layer / haut aluminium mais utilisent un autre set de dimensions documentées | mêmes sources | VERIFIED | éviter de généraliser à toute la famille |
| Funnel actuel Moka Induction Bi-Layer : 2 / 4 / 6 tasses avec dimensions propres | https://www.bialetti.co.nz/products/funnel-moka-induction-bi-layer | VERIFIED | pièces exactes |
| Funnel Moka Induction pré-2020 distinct, réservé aux anciens modèles 3 / 6 tasses | https://www.bialetti.co.nz/products/moka-induction-funnels | VERIFIED | génération / pièces |
| Ancienne génération pré-2020 identifiable par une bande silicone noire au milieu | même source | VERIFIED | diagnostic génération |
| Rings + filters sont référencés avec Moka Express / Moka Induction par taille | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-ring-filter-pack | VERIFIED | pièces d'usure |
| Venus est tout inox ; Moka Induction reste hybride acier/aluminium | https://www.bialetti.co.nz/products/bialetti-venus-induction-copper ; https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black | VERIFIED | différence modèle frère |
| Moka Express classique est aluminium et non induction directe | https://www.bialetti.co.nz/products/moka-express | VERIFIED | différence modèle frère |

## Décisions / hard gates à consommer

- `HARD_GATE` : induction-compatible ne suffit pas ; la plaque doit détecter une base de 9,5 à 11,5 cm selon la taille actuelle.
- `DECISION` : le nombre de tasses n'est pas comparable directement avec Venus ; afficher les volumes.
- `DECISION` : la variante exacte compte : les éditions / références consultées peuvent avoir des volumes différents de la Bi-Layer noire actuelle.
- `DECISION` : pour les pièces, distinguer génération actuelle Bi-Layer et Moka Induction pré-2020 ; l'ancien modèle à bande noire n'utilise pas le même funnel.
- `DECISION` : Moka Induction est un compromis matériel hybride, pas une Venus “avec un autre design”.
- `LIMIT` : ne pas prétendre qu'elle reproduit un goût supérieur ou identique sur base de la seule construction.

## Handoffs

- capacités → `/capacites/`
- induction générale → `/guides/cafetiere-italienne-induction-compatibilite/`
- aluminium vs inox → `/guides/cafetiere-italienne-aluminium-ou-inox/`
- pièces Bialetti → `/accessoires/pieces-detachees-bialetti/`
- Moka Express → `/modeles/bialetti-moka-express/`
- Venus → `/modeles/bialetti-venus/`
- comparatif induction → `/comparatifs/cafetiere-italienne-induction/`

## À exclure ou qualifier

- ne pas fusionner les chiffres de différentes variantes ; toujours nommer la référence ou qualifier comme famille / édition ;
- pas de prix figé ;
- pas de promesse de goût ;
- ne pas traiter les collaborations comme une branche fonctionnelle si seule la décoration change, mais conserver les différences documentées de volume / dimensions lorsqu'elles existent.
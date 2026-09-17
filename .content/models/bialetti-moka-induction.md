# MODEL RESEARCH — Bialetti Moka Induction

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-moka-induction/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit expliquer ce que la Moka Induction ajoute réellement par rapport à Moka Express et Venus, puis éviter quatre erreurs d'achat : supposer qu'une mention induction garantit la détection par toute plaque, supposer qu'une “4 tasses” donne le même volume dans toutes les gammes, traiter un volume de marché comme une spécification universelle, et commander une pièce pour la mauvaise génération.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Modèle actuel Bi-Layer : base inox + aluminium, partie supérieure aluminium, silicone | https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black | VERIFIED | architecture du produit |
| Compatible induction, gaz, électrique et céramique | même source | VERIFIED | plaque |
| Il faut vérifier que la plaque détecte le diamètre de la base | même source | VERIFIED | hard gate induction |
| Tailles actuelles documentées : 2 / 4 / 6 tasses | même source + références européennes | VERIFIED | variantes actuelles |
| Bialetti NZ documente ≈100 ml pour la 2 tasses noire Bi-Layer ; Bialetti Russie et une fiche belge actuelle documentent ≈90 ml pour des références européennes | https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black ; https://bialetti.ru/catalog/geyzernye_kofevarki/geyzernaya_kofevarka_bialetti_moka_induction_2020_chyernaya.html ; https://www.interismo.be/fr-BE/bialetti/moka-induction-rouge | CONTRADICTED / QUALIFY | ne pas publier 100 ml comme invariant ; utiliser ≈90–100 ml selon référence / marché |
| 4 tasses standard ≈150 ml et 6 tasses standard ≈280 ml sur les références standard vérifiées | mêmes sources | VERIFIED | choix taille |
| Largeurs de base NZ approx. : 9,5 / 10 / 11,5 cm | Bialetti NZ | VERIFIED_FOR_REFERENCE | détection induction ; ne pas généraliser sans qualification |
| Lavage manuel en eau chaude ; éviter pleine puissance / ébullition prolongée | Bialetti NZ | VERIFIED | entretien / usage |
| D&G Sicilia-style : 2 tasses ≈90 ml ; 4 tasses ≈190 ml | https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-2-cup ; https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-4-cup | VERIFIED | la variante exacte compte |
| D&G Blu Mediterraneo : 4 tasses ≈150 ml ; 6 tasses ≈225 ml | https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-2-cup-blumed | VERIFIED | même une collaboration D&G n'a pas une seule matrice de volumes |
| Funnel actuel Moka Induction Bi-Layer : 2 / 4 / 6 tasses avec dimensions propres | https://www.bialetti.co.nz/products/funnel-moka-induction-bi-layer | VERIFIED | pièces exactes |
| Funnel Moka Induction pré-2020 distinct, réservé aux anciens modèles 3 / 6 tasses | https://www.bialetti.co.nz/products/moka-induction-funnels | VERIFIED | génération / pièces |
| Ancienne génération pré-2020 identifiable par une bande silicone noire au milieu | même source | VERIFIED | diagnostic génération |
| Rings + filters sont référencés avec Moka Express / Moka Induction par taille | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-ring-filter-pack | VERIFIED | pièces d'usure |
| Venus est tout inox ; Moka Induction reste hybride acier/aluminium | sources Bialetti Venus + Moka Induction | VERIFIED | différence modèle frère |
| Moka Express classique est aluminium et non induction directe | source Bialetti Moka Express | VERIFIED | différence modèle frère |

## Décisions / hard gates à consommer

- `HARD_GATE` : induction-compatible ne suffit pas ; la plaque doit détecter le diamètre réel de la référence.
- `HARD_GATE` : ne pas transformer un chiffre de volume d'un marché en spécification universelle ; pour la 2 tasses standard, utiliser ≈90–100 ml selon référence / marché.
- `DECISION` : le nombre de tasses n'est pas comparable directement avec Venus ; afficher les volumes.
- `DECISION` : la variante exacte compte : des éditions D&G 4 tasses vérifiées documentent ≈150 ml ou ≈190 ml selon l'édition ; une 6 tasses Blu Mediterraneo est ≈225 ml, contre ≈280 ml sur la standard vérifiée.
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

- ne pas fusionner les chiffres de marchés ou variantes différentes ; toujours nommer la référence ou qualifier la plage ;
- pas de prix figé ;
- pas de promesse de goût ;
- ne pas traiter les collaborations comme une branche fonctionnelle si seule la décoration change, mais conserver les différences documentées de volume / dimensions lorsqu'elles existent.
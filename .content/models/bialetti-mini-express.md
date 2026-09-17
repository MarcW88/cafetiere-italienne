# MODEL RESEARCH — Bialetti Mini Express

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-mini-express/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit aider à décider si la Mini Express apporte une vraie valeur par rapport à une moka classique : son intérêt principal est le service direct dans deux petites tasses, pas une promesse de meilleur café. La décision oppose surtout la Mini Express classique aluminium à la Mini Express Induction bi-layer, puis vérifie le volume réel, la taille des tasses, la plaque et les pièces.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Mini Express classique actuelle : aluminium alimentaire | https://www.bialetti.co.nz/products/bialetti-mini-express-black | VERIFIED | construction |
| Mini Express classique : 2 tasses, rendement préparé ≈90 ml, base ≈8,0 cm | même source | VERIFIED | taille / volume |
| Le café sort directement par deux becs vers deux tasses placées sur la plaque aluminium | même source | VERIFIED | Big Hire / différenciation |
| Classique : gaz, électrique, céramique ; pas induction directe ; adaptateur possible | même source | VERIFIED | hard gate plaque |
| Classique : remplissage d'eau juste sous la soupape, café non tassé, chauffe faible à moyenne | même source | VERIFIED | usage |
| Classique : lavage manuel et trois premières préparations à jeter | même source | VERIFIED | entretien |
| La fiche actuelle précise que certains sets n'incluent pas les tasses et que la plupart des petites tasses espresso adaptées peuvent être utilisées | même source | VERIFIED | compatibilité tasse / achat |
| Mini Express Induction : 2 tasses, rendement ≈90 ml | https://www.bialetti.co.nz/products/bialetti-mini-express-induction-2-cup-set | VERIFIED | choix variante |
| Mini Express Induction : base bi-layer, extérieur inox + intérieur aluminium | même source | VERIFIED | construction / induction |
| Mini Express Induction : base ≈9,5 cm sur la fiche Bialetti NZ ; un distributeur européen indique ≈9,2 cm | même source + https://bialetti-shop.de/Espressokocher-Edelstahl-Induktion/mini-espress-induktion.html | VERIFIED WITH REGIONAL APPROXIMATION | détection induction ; éviter faux chiffre universel |
| Mini Express Induction compatible induction, gaz, électrique, céramique ; vérifier le diamètre minimal accepté par la plaque | même source | VERIFIED | hard gate plaque |
| Mini Express Induction : deux tasses noires incluses sur la référence vérifiée | même source | VERIFIED | contenu du set |
| Belgique : Mini Express classique 2 tasses ≈90 ml est actuellement référencée chez Interismo Belgique | https://www.interismo.be/fr-BE/bialetti/mini-express | SUPPORTED | pertinence marché BE |
| Kit joint + filtre 2 tasses pour cafetières aluminium listé comme compatible Mini Express sur une boutique régionale Bialetti | https://bialetti.ru/catalog/komplektuyushchie/ | VERIFIED REGIONAL | pièce classique 2 tasses |
| Guide pièces indépendant : Mini Express partage des familles de joints/filtres avec Moka Express/Dama selon taille | https://brewitalia.com/pages/bialetti-spares-guide | SUPPORTED | réparation / double vérification |
| Discussions récentes : certains utilisateurs rapportent un débit inégal entre les deux becs | Reddit r/mokapot, 2026 | OBSERVED | anxiété / limite d'usage, pas spec |
| Discussions récentes : la Mini Express est souvent comparée à Moka Express ou Brikka alors que son différenciateur est surtout le service direct | Reddit r/mokapot, 2026 | OBSERVED | JTBD |

## Décisions / hard gates à consommer

- `HARD_GATE` : la Mini Express classique aluminium n'est pas compatible induction directement ; la Mini Express Induction vérifiée l'est.
- `HARD_GATE` : raisonner en volume réel — environ 90 ml au total pour les références 2 tasses vérifiées, pas deux mugs.
- `DECISION` : le bénéfice distinctif est le service direct dans deux tasses, avec réchauffement sur la plaque support ; ne pas lui attribuer un avantage gustatif non démontré.
- `DECISION` : la version induction a une base bi-layer et un diamètre d'environ 9,2–9,5 cm selon source régionale ; la détection dépend donc aussi de la plaque.
- `DECISION` : les tasses incluses dépendent du set exact ; la fiche classique Bialetti NZ vérifiée n'en inclut pas, tandis que la référence Induction vérifiée en inclut deux.
- `DECISION` : pour les pièces, la compatibilité classique 2 tasses est documentée ; ne pas extrapoler automatiquement cette compatibilité à la Mini Express Induction.
- `LIMIT` : des utilisateurs signalent parfois un partage inégal entre les deux becs ; conserver ce point comme signal d'usage et non comme défaut universel.

## Handoffs

- Moka Express → `/modeles/bialetti-moka-express/`
- Brikka → `/modeles/bialetti-brikka/`
- Moka Induction → `/modeles/bialetti-moka-induction/`
- induction générale → `/guides/cafetiere-italienne-induction-compatibilite/`
- capacités → `/capacites/`
- dosage → `/guides/dosage-cafe-cafetiere-italienne/`
- mouture → `/guides/mouture-cafetiere-italienne/`
- pièces Bialetti → `/accessoires/pieces-detachees-bialetti/`
- marque → `/marques/bialetti/`

## À exclure ou qualifier

- ne pas promettre un goût supérieur à une Moka Express ;
- ne pas appeler le café un espresso de machine sans qualification ;
- ne pas présenter le débit inégal comme un défaut systématique ;
- ne pas figer un diamètre induction unique quand les sources régionales donnent ≈9,2 et ≈9,5 cm ;
- ne pas supposer que tous les sets contiennent les mêmes tasses ;
- ne pas généraliser les pièces de la classique aluminium à l'Induction sans preuve ;
- ne pas figer de prix.
# MODEL RESEARCH — Bialetti Moka Express

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-moka-express/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit aider à répondre à cinq questions avant achat :

1. ma plaque est-elle compatible directement ?
2. si je suis sur induction, l'adaptateur officiel couvre-t-il réellement la taille que je vise ?
3. quelle taille correspond réellement à mon volume habituel ?
4. suis-je prêt à rester sur une construction aluminium et un entretien manuel ?
5. les pièces d'usure de ma taille sont-elles correctement identifiables ?

La page ne doit pas devenir un guide général d'utilisation de la moka ni un comparatif exhaustif de toutes les Bialetti.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Moka Express en aluminium alimentaire, poignée et bouton nylon, soupape Bialetti | https://www.bialetti.co.nz/products/moka-express | VERIFIED | construction du modèle |
| Pas d'induction directe sur le modèle aluminium classique | https://www.bialetti.co.nz/products/moka-express | VERIFIED | hard gate plaque |
| Adaptateur Bialetti 13 cm possible pour la Moka Express **jusqu'à 6 tasses** | https://www.bialetti.co.nz/collections/accessories/products/bialetti-induction-plate ; https://www.bialetti.co.nz/products/moka-express | VERIFIED | limite l'option adaptateur selon taille |
| La FAQ générique Moka Express dit aussi que la plaque permet d'utiliser les Bialetti aluminium, formulation plus large que la fiche produit de l'adaptateur | https://www.bialetti.co.nz/products/moka-express | CONTRADICTED / QUALIFIED | ne pas généraliser l'adaptateur à 9/12/18 tasses |
| Tailles actuelles documentées : 1, 2, 3, 4, 6, 9, 12, 18 tasses | https://www.bialetti.co.nz/products/moka-express | VERIFIED | choix de taille |
| Volumes approximatifs : 60 / 90 / 130 / 185 / 250 / 410 / 595 / 800 ml | https://www.bialetti.co.nz/products/moka-express | VERIFIED | éviter l'interprétation “tasses = mugs” |
| Le volume préparé réel dépend notamment du niveau d'eau et de la mouture/type de café | https://www.bialetti.co.nz/products/moka-express | VERIFIED | ne pas transformer les ml en promesse au millilitre près |
| Largeurs de base approx. : 7 / 8 / 9 / 9,5 / 10,5 / 11,5 / 13,5 / 13,5 cm | https://www.bialetti.co.nz/products/moka-express | VERIFIED | lecture taille / encombrement |
| Une moka doit être choisie pour le volume habituel ; Bialetti déconseille l'under-filling | https://www.bialetti.co.nz/products/moka-express | VERIFIED | conséquence d'achat importante |
| Les “tasses” désignent des portions espresso mais le volume préparé varie selon taille et préparation | https://www.bialetti.co.nz/products/moka-express | VERIFIED | clarification de nomenclature |
| Lavage manuel, pas lave-vaisselle ; ne pas utiliser la poignée comme levier pour dévisser | https://www.bialetti.co.nz/products/moka-express | VERIFIED | entretien / durabilité |
| Entonnoirs Moka Express référencés par taille 1 à 18 tasses | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-funnels | VERIFIED | pièces exactes |
| Les 3 et 4 tasses partagent le même diamètre d'entonnoir (60 mm) mais pas la même longueur (60 vs 76 mm) | même source | VERIFIED | montre pourquoi “diamètre proche” ne suffit pas |
| Joints + filtres référencés par taille ; 3 et 4 tasses partagent les mêmes dimensions dans la table officielle | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-ring-filter-pack | VERIFIED | compatibilité pièce |
| Des utilisateurs expriment régulièrement une confusion entre nombre de tasses et quantité réellement recherchée | Reddit /r/mokapot, signal de demande uniquement | OBSERVED | renforce le JTBD taille/volume sans devenir une spec |

## Contradiction à résoudre

La page Moka Express contient une FAQ générale disant que l'adaptateur permet d'utiliser les modèles aluminium sur induction. La fiche dédiée de l'**Induction Plate 13 cm** est plus précise : elle indique explicitement `Suitable for coffee makers up to 6 cups` et `Suitable for Bialetti Moka Express Stovetops up to 6 cup`.

Règle éditoriale : pour la compatibilité de l'accessoire, la fiche produit spécifique de l'adaptateur prévaut sur la formulation générique de FAQ. La page ne doit donc pas présenter l'adaptateur officiel comme solution garantie pour les Moka Express 9, 12 ou 18 tasses.

## Décisions / hard gates à consommer

- `HARD_GATE` : aluminium classique = pas d'induction directe.
- `HARD_GATE` : l'adaptateur officiel 13 cm est documenté jusqu'à 6 tasses ; au-delà, ne pas le présenter comme route validée.
- `HARD_GATE` : la taille se choisit d'abord par volume préparé habituel, pas par “polyvalence”.
- `DECISION` : sur induction, les routes dépendent aussi de la taille : adaptateur officiel pour les formats documentés jusqu'à 6 tasses, ou modèle directement compatible.
- `DECISION` : 1 à 18 tasses couvrent des volumes très différents ; afficher les ml est plus utile que le seul nombre de tasses.
- `DECISION` : pièces = famille + taille + dimensions ; ne pas présenter les consommables comme universels.
- `LIMIT` : entretien manuel ; pas de promesse de meilleur goût liée à l'aluminium.

## Handoffs

- choix détaillé de capacité → `/capacites/`
- dosage / charge moka → `/guides/dosage-cafe-cafetiere-italienne/`
- induction générale → `/guides/cafetiere-italienne-induction-compatibilite/`
- adaptateur → `/accessoires/adaptateur-induction-cafetiere-italienne/`
- pièces Bialetti → `/accessoires/pieces-detachees-bialetti/`
- modèle inox → `/modeles/bialetti-venus/`
- modèle hybride induction → `/modeles/bialetti-moka-induction/`

## À exclure ou qualifier

- ne pas transformer l'origine 1933 en axe principal : contexte, pas décision ;
- pas de prix figé ;
- pas de “meilleur goût” ou “meilleure extraction” sans test ;
- ne pas traiter les coloris / collaborations comme familles fonctionnelles lorsque seul le décor change ;
- ne pas recopier le mode d'emploi complet : handoff vers les guides.
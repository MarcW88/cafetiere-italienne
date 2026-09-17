# MODEL RESEARCH — Bialetti Moka Express

Date de vérification : 2026-09-17
URL : `/modeles/bialetti-moka-express/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit aider à répondre à quatre questions avant achat :

1. ma plaque est-elle compatible directement ?
2. quelle taille correspond réellement à mon volume habituel ?
3. suis-je prêt à rester sur une construction aluminium et un entretien manuel ?
4. les pièces d'usure de ma taille sont-elles correctement identifiables ?

La page ne doit pas devenir un guide général d'utilisation de la moka ni un comparatif exhaustif de toutes les Bialetti.

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Moka Express en aluminium alimentaire, poignée et bouton nylon, soupape Bialetti | https://www.bialetti.co.nz/products/moka-express | VERIFIED | construction du modèle |
| Pas d'induction directe sur le modèle aluminium classique | https://www.bialetti.co.nz/products/moka-express ; https://www.bialetti.co.nz/products/moka-express-black | VERIFIED | hard gate plaque |
| Adaptateur Bialetti 13 cm possible pour utiliser les modèles aluminium sur induction | https://www.bialetti.co.nz/products/moka-express-black | VERIFIED | troisième voie vs changer de modèle |
| Tailles actuelles documentées : 1, 2, 3, 4, 6, 9, 12, 18 tasses | https://www.bialetti.co.nz/products/moka-express | VERIFIED | choix de taille |
| Volumes approximatifs : 60 / 90 / 130 / 185 / 250 / 410 / 595 / 800 ml | https://www.bialetti.co.nz/products/moka-express | VERIFIED | éviter l'interprétation “tasses = mugs” |
| Largeurs de base approx. : 7 / 8 / 9 / 9,5 / 10,5 / 11,5 / 13,5 / 13,5 cm | https://www.bialetti.co.nz/products/moka-express | VERIFIED | lecture taille / encombrement et adaptateur |
| Une moka doit être choisie pour le volume habituel ; Bialetti déconseille l'under-filling | https://www.bialetti.co.nz/products/moka-express | VERIFIED | conséquence d'achat importante |
| Les “tasses” désignent des portions espresso d'environ 30 ml mais le volume préparé réel varie selon taille et préparation | https://www.bialetti.co.nz/products/moka-express | VERIFIED | clarification de nomenclature |
| Lavage manuel, pas lave-vaisselle ; ne pas utiliser la poignée comme levier pour dévisser | https://www.bialetti.co.nz/products/moka-express | VERIFIED | entretien / durabilité |
| Entonnoirs Moka Express référencés par taille 1 à 18 tasses | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-funnels | VERIFIED | pièces exactes |
| Les 3 et 4 tasses partagent le même diamètre d'entonnoir (60 mm) mais pas la même longueur (60 vs 76 mm) | même source | VERIFIED | montre pourquoi “diamètre proche” ne suffit pas |
| Joints + filtres référencés par taille ; 3 et 4 tasses partagent les mêmes dimensions dans la table officielle | https://www.bialetti.co.nz/products/moka-express-dama-mini-express-break-ring-filter-pack | VERIFIED | compatibilité pièce |
| Variante Moka Exclusive classique reste aluminium et nécessite aussi l'adaptateur sur induction | https://www.bialetti.co.nz/products/bialetti-moka-exclusive-black | VERIFIED | éviter de confondre finition et compatibilité |

## Décisions / hard gates à consommer

- `HARD_GATE` : aluminium classique = pas d'induction directe.
- `HARD_GATE` : la taille se choisit d'abord par volume préparé habituel, pas par “polyvalence”.
- `DECISION` : sur induction, trois options distinctes existent : adaptateur, Venus, Moka Induction / autre modèle directement compatible.
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
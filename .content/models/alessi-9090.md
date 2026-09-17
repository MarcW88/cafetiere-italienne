# MODEL RESEARCH — Alessi 9090

Date de vérification : 2026-09-17
URL : `/modeles/alessi-9090/`
Type : `PRODUCT`

## Intention et décision lecteur

La page doit aider à décider si la 9090 mérite son positionnement premium pour un usage réel. L'angle principal n'est pas “icône du design”, mais : quelles différences fonctionnelles achète-t-on, quelles tailles existent, quelle flexibilité de volume offrent réellement les tailles avec réducteur, quelle contrainte induction s'applique, et les pièces restent-elles identifiables ?

## Evidence brief

| Élément / claim | Source | Statut | Utilité décisionnelle |
|---|---|---|---|
| Design Richard Sapper, inox 18/10, fond magnétique induction | https://alessi.com/products/9090-espresso-coffee-maker | VERIFIED | construction / plaque |
| Base élargie, bec anti-goutte, fermeture à levier | même source | VERIFIED | différence fonctionnelle |
| La fermeture à levier remplace le vissage classique et la base élargie vise la stabilité / exploitation de la chaleur | même source | VERIFIED | justification du surcoût |
| La 9090 est produite en plus de 120 étapes dans l'atelier Alessi | même source | VERIFIED | fabrication / premium tangible |
| Gamme actuelle affichée : 1 / 3 / 6 / 10 tasses | même source | VERIFIED | choix taille |
| 1 tasse : 7 cl, diamètre 9,5 cm, hauteur 15 cm | même source | VERIFIED | taille / induction |
| Alessi avertit explicitement de vérifier que la plaque induction s'active avec un objet d'au moins 90 mm pour la 1 tasse | même source | VERIFIED | hard gate induction |
| 3 tasses : env. 15 cl, diamètre env. 11 cm | https://uk.alessi.com/products/9090-espresso-coffee-maker?variant=33749646082179 | VERIFIED | comparaison tailles |
| 6 tasses : env. 10,1 fl oz ≈ 299 ml, diamètre env. 4,92 in ≈ 12,5 cm | https://uk.alessi.com/products/9090-espresso-coffee-maker?variant=33749646114947 | VERIFIED + conversion | comparaison tailles |
| 10 tasses : env. 16,9 fl oz ≈ 500 ml, diamètre env. 5,71 in ≈ 14,5 cm | https://uk.alessi.com/products/9090-espresso-coffee-maker?variant=33749646147715 | VERIFIED + conversion | comparaison tailles |
| Le manuel 9090 documente un filtre réducteur : 3 tasses → 1 tasse, 6 tasses → 3 tasses, 10 tasses → 6 tasses | https://manualzz.com/doc/5066106/alessi-9090-coffee-maker-user-manual ; https://www.manualslib.fr/manual/488734/Alessi-9090.html?page=7 | SUPPORTED — manuel 9090 reproduit par deux bibliothèques | flexibilité réelle de capacité |
| Alessi vend toujours les réducteurs dédiés 9090/3 (17605/R), 9090/6 (17602/R) et 9090/M 10 tasses (17611/R) | https://alessi.com/products/17605-r ; https://alessi.com/products/17602-r ; https://alessi.com/products/17611-r | VERIFIED | confirme l'écosystème de réducteurs actuel |
| Les pages officielles affichent 1979 ou 1980 selon variante / locale pour le début de production | pages officielles ci-dessus | CONTRADICTED | ne pas figer une date unique sans qualification |
| Compasso d'Oro et présence au MoMA sont documentés par Alessi | https://alessi.com/products/9090-espresso-coffee-maker | VERIFIED | contexte design, secondaire à la décision |
| Joints 9090 spécifiques existent par taille : 1 tasse (29703), 3 tasses (29704), 6 tasses (29705), 10 tasses (9090MGUARN) | https://alessi.com/products/29703 ; https://alessi.com/products/29704 ; https://alessi.com/products/29705 ; https://alessi.com/products/9090mguarn | VERIFIED | réparabilité / exactitude pièce |
| Funnel 6 tasses dédié 17602/F ; microfiltre 17603 ; reducer 17602/R ; funnel 10 tasses 17611/F | https://alessi.com/products/17602-f ; https://alessi.com/products/17603 ; https://alessi.com/products/17602-r ; https://alessi.com/products/17611-f | VERIFIED | écosystème pièces |
| Édition 9090/3 CP 2026 : PVD noir, 3 tasses, 15 cl, fond magnétique, édition limitée 999 pièces | https://alessi.com/products/9090-3-cp-espresso-coffee-maker | VERIFIED | distinguer édition décorative / finition de la gamme standard |

## Décisions / hard gates à consommer

- `HARD_GATE` : la petite 1 tasse peut être trop petite pour être détectée par certaines plaques ; Alessi donne un seuil de 90 mm à vérifier.
- `DECISION` : le premium se justifie par des choix de conception concrets — levier, bec, base, inox, fabrication — pas par un “meilleur café” démontré.
- `DECISION` : les tailles changent fortement le volume et le diamètre ; ne pas traiter 1 / 3 / 6 / 10 comme simples variantes esthétiques.
- `DECISION` : 3, 6 et 10 tasses ont une flexibilité documentée via réducteur : 3→1, 6→3 et 10→6. Cette possibilité peut éviter d'acheter deux tailles si les deux volumes correspondent réellement aux usages du lecteur.
- `DECISION` : les réducteurs sont eux-mêmes spécifiques à la taille/référence ; ne pas présenter un seul réducteur comme universel.
- `DECISION` : les pièces de rechange sont liées à la référence et à la taille ; l'écosystème de pièces réduit le risque d'un objet premium irréparable mais ne rend pas les pièces universelles.
- `DECISION` : une édition CP 2026 existe, mais elle ne doit pas brouiller la lecture de la 9090 standard.
- `LIMIT` : pas de conclusion gustative sans test comparatif ; pas de justification du prix par le prestige seul.

## Handoffs

- capacité générale → `/capacites/`
- induction → `/guides/cafetiere-italienne-induction-compatibilite/`
- inox → `/guides/cafetiere-italienne-aluminium-ou-inox/`
- univers Alessi → `/marques/alessi/`
- comparatif design → `/comparatifs/cafetiere-italienne-design/`
- comparatif inox → `/comparatifs/cafetiere-italienne-inox/`

## À exclure ou qualifier

- dater l'origine comme “fin des années 1970 / autour de 1980” si le contexte historique est nécessaire, car les pages officielles ne sont pas parfaitement cohérentes ;
- ne pas utiliser le Compasso d'Oro ou le MoMA comme preuve de performance café ;
- ne pas figer le prix ;
- l'édition CP 2026 est une variante distincte, pas une nouvelle architecture de base de la 9090 standard ;
- les conversions impériales → métriques pour 6 et 10 tasses doivent être présentées comme approximatives ;
- la fonction exacte des réducteurs est soutenue par le manuel 9090 reproduit par des bibliothèques de manuels, tandis que l'existence actuelle des pièces est confirmée directement par Alessi : conserver cette hiérarchie de preuve.
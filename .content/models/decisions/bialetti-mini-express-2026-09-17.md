# Decision artifact — Bialetti Mini Express

Date : 2026-09-17
Workflow version : 2

## JTBD

Quand je veux préparer deux petits cafés moka et les servir directement sans transvaser depuis une chambre supérieure, je veux savoir si la Mini Express correspond vraiment à mon volume, à ma plaque et à mon rituel, afin de ne pas acheter uniquement pour son design et découvrir ensuite que le volume est très petit ou que la version choisie n'est pas compatible avec ma cuisine.

## Circumstances

- préparation pour une ou deux personnes ;
- recherche d'un petit volume autour de 90 ml au total ;
- attrait pour le service direct dans deux tasses ;
- plaque gaz, électrique, céramique ou induction ;
- hésitation avec Moka Express, Brikka ou Moka Induction ;
- achat neuf, remplacement de tasses ou entretien de la version classique.

## Push / Pull / Anxiety / Habit

- **Push** : envie d'un service plus direct et plus visuel qu'une moka classique avec chambre supérieure.
- **Pull** : deux becs, deux tasses, plaque support qui les réchauffe, format compact, version induction dédiée.
- **Anxiety** : 2 tasses représente-t-il deux vraies boissons ? la classique fonctionne-t-elle sur induction ? les deux becs remplissent-ils toujours pareil ? les tasses sont-elles incluses ? quelles pièces commander ?
- **Habit** : rester sur une Moka Express plus conventionnelle, choisir Brikka pour sa valve ou Moka Induction pour l'induction sans double bec.

## Big Hire

Choisir Mini Express parce que le service direct dans deux petites tasses est réellement utile ou agréable dans le rituel quotidien.

## Little Hire

Continuer à l'utiliser parce que le volume d'environ 90 ml total, la place sous les becs, la plaque et le nettoyage correspondent au quotidien — pas parce que le format inhabituel serait supposé améliorer automatiquement le café.

## Decision criteria

- `MUST_HAVE` — accepter un rendement d'environ 90 ml total pour la référence 2 tasses vérifiée.
- `MUST_HAVE` — choisir l'architecture adaptée à la plaque : classique aluminium non induction directe vs Induction bi-layer.
- `HIGH` — valoriser réellement le service direct dans deux petites tasses.
- `HIGH` — vérifier le diamètre minimal détecté par la plaque pour la version Induction.
- `HIGH` — vérifier si les tasses sont incluses dans le set exact acheté.
- `HIGH` — ne pas extrapoler les pièces classiques à la version Induction.
- `CONDITIONAL` — utiliser un adaptateur si l'on veut la version classique sur induction.
- `CONTRAINDICATION` — besoin d'un volume nettement supérieur à 90 ml par préparation.
- `CONTRAINDICATION` — achat motivé par l'idée non prouvée que le double bec donne un meilleur goût.
- `CONTRAINDICATION` — forte intolérance à l'idée d'un partage parfois imparfait entre deux sorties, même si ce point n'est qu'un signal utilisateur et non une fréquence mesurée.

## Big Hire / Little Hire summary

Le **Big Hire** est le service direct à deux. Le **Little Hire** est la compatibilité du rituel réel : petit volume, bonne plaque, bonnes tasses et entretien simple.

## Hard gates

1. Classique : pas d'induction directe.
2. Volume : ≈90 ml total, pas deux mugs.
3. Induction : base ≈9,2–9,5 cm selon source régionale ; vérifier la détection de la plaque.
4. Set : tasses incluses ou non selon la référence.
5. Pièces : compatibilité documentée pour la classique 2 tasses, pas automatiquement pour l'Induction.

## Flexible-capacity check

Aucun réducteur ni mode demi-capacité fabricant n'est documenté dans le dossier Mini Express actuel. La page ne doit pas inventer de mode « une seule tasse » en modifiant ou orientant les becs. Le produit vérifié est traité comme un système 2 tasses / ≈90 ml total.

## Alternatives / handoffs

- `/modeles/bialetti-moka-express/` — rituel moka classique avec chambre supérieure.
- `/modeles/bialetti-brikka/` — valve / café plus concentré comme différenciation.
- `/modeles/bialetti-moka-induction/` — induction directe sans double service.
- `/guides/cafetiere-italienne-induction-compatibilite/` — détection plaque et adaptateur.
- `/capacites/` — volume réel.
- `/accessoires/pieces-detachees-bialetti/` — diagnostic pièce.
- `/marques/bialetti/` — gamme.

## Editorial thesis

La Mini Express n'est pas « une Moka Express plus performante » : c'est surtout **une autre manière de servir**. La décision doit donc suivre **volume réel → plaque → utilité du double service → contenu du set → pièces**, et non une promesse gustative.
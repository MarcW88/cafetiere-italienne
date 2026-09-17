# Content brief — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2
Page type : `PRODUCT`
URL : `/modeles/bialetti-moka-express/`

## Target query / cluster

- Primary topic : `Bialetti Moka Express`
- Supporting intents : tailles, volumes, induction, adaptateur, pièces, entretien.
- Cluster role : fiche produit décisionnelle de la moka aluminium classique.

## Search intent

Commercial investigation / product research. Le lecteur doit déterminer si la Moka Express classique est compatible avec sa cuisine et quelle taille correspond réellement à sa consommation.

## Reader / JTBD

Quand je veux préparer régulièrement une quantité précise de moka, je veux choisir la taille classique Bialetti correspondant à mon volume et à ma plaque, afin d'éviter une cafetière trop grande, un adaptateur non documenté pour ma taille ou une mauvaise pièce.

## Decision to resolve

1. Ma plaque est-elle compatible directement ?
2. Si je suis sur induction, l'adaptateur officiel Bialetti couvre-t-il la taille que je vise ?
3. Quelle taille correspond au volume habituel ?
4. Puis-je identifier correctement joint, filtre et entonnoir ?
5. L'entretien manuel est-il acceptable ?

## Scope

À traiter : construction aluminium, absence d'induction directe, **limite de l'adaptateur officiel jusqu'à 6 tasses**, tailles 1/2/3/4/6/9/12/18, volumes documentés et leur caractère approximatif, largeur de base quand utile, entretien, pièces par taille, alternatives Venus/Moka Induction.

Hors scope : histoire de la marque comme axe principal, mode d'emploi complet, prix figé, promesse gustative liée à l'aluminium, coloris sans différence fonctionnelle.

## Decision criteria

- `MUST_HAVE` — plaque directement compatible ou route induction documentée pour la taille choisie.
- `MUST_HAVE` — volume documenté cohérent avec la quantité habituelle.
- `HIGH` — pièce exacte identifiable par famille + taille + dimensions pertinentes.
- `HIGH` — acceptation de l'entretien manuel.
- `CONDITIONAL` — adaptateur Bialetti si induction **et format jusqu'à 6 tasses**.
- `CONDITIONAL` — largeur de base/encombrement des grands formats.
- `CONTRAINDICATION` — Moka Express 9/12/18 sur induction si le plan repose sur l'adaptateur officiel 13 cm.
- `CONTRAINDICATION` — induction-only si l'utilisateur refuse une route compatible ou un autre modèle.
- `CONTRAINDICATION` — exigence de lave-vaisselle systématique.

## Required evidence / entities

- Bialetti Moka Express actuelle.
- Aluminium, poignée/bouton, soupape.
- Pas d'induction directe.
- Bialetti Induction Plate 13 cm : option distincte, **documentée jusqu'à 6 tasses**.
- Tailles et volumes documentés 1 à 18 tasses.
- Note fabricant : volumes approximatifs dépendant aussi de la préparation.
- Funnels et ring/filter packs par taille.
- Venus et Moka Induction uniquement comme alternatives rationnelles.

## Trade-offs / contradictions

- Le nombre de “tasses” ne correspond pas à des mugs.
- Une taille plus grande n'est pas une solution polyvalente si l'usage réel exige de sous-remplir.
- Un diamètre proche entre deux pièces ne suffit pas à conclure à l'interchangeabilité.
- L'adaptateur rend possible l'usage de certaines Moka Express sur induction mais ne transforme pas la gamme en modèle nativement compatible.
- La FAQ générale Bialetti est plus large que la fiche spécifique de l'Induction Plate ; la page doit appliquer la limite spécifique `jusqu'à 6 tasses`.

## Internal-link handoffs

- `/capacites/`
- `/guides/dosage-cafe-cafetiere-italienne/`
- `/guides/cafetiere-italienne-induction-compatibilite/`
- `/accessoires/adaptateur-induction-cafetiere-italienne/`
- `/accessoires/pieces-detachees-bialetti/`
- `/modeles/bialetti-venus/`
- `/modeles/bialetti-moka-induction/`

## Anti-patterns

- raconter 1933 avant de résoudre la plaque et la taille ;
- écrire “compatible induction” grâce à l'adaptateur sans distinguer compatibilité native et accessoire ;
- présenter l'adaptateur officiel comme solution universelle 1–18 tasses ;
- recommander de surdimensionner la moka “au cas où” ;
- déduire un meilleur goût de l'aluminium ;
- présenter les pièces comme universelles ;
- simuler un test.

## Editorial angle

La Moka Express est simple, mais le bon achat dépend de quatre choses très concrètes : **plaque, limite de l'adaptateur, volume réel, référence exacte des pièces**.

## Success criteria

Le lecteur doit pouvoir choisir une taille sur la base des ml plutôt que du seul nombre de tasses, comprendre que l'adaptateur officiel est documenté seulement jusqu'à 6 tasses, éviter un achat de pièce incompatible et savoir quand Venus ou Moka Induction est plus rationnelle.

## Proposed outline

1. Plaque avant tout — clarifier l'absence d'induction directe.
2. Adaptateur : solution uniquement dans le périmètre documenté jusqu'à 6 tasses.
3. Trois routes si induction — adaptateur compatible, Venus, Moka Induction.
4. Matrice tailles / volumes / bases — choisir par quantité habituelle.
5. Pourquoi ne pas prendre trop grand — conséquence pratique de l'under-filling.
6. Aluminium : construction, pas promesse gustative.
7. Entretien — contraintes actuelles.
8. Pièces par taille — montrer pourquoi le détail de référence compte.
9. Quand choisir un modèle frère — comparaison locale et décisionnelle.

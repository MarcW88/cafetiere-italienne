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

Quand je veux préparer régulièrement une quantité précise de moka sur une plaque compatible, je veux choisir la taille classique Bialetti correspondant à mon volume et rester capable de l'entretenir et la réparer, afin d'éviter une cafetière trop grande ou une mauvaise pièce.

## Decision to resolve

1. Ma plaque est-elle compatible directement ?
2. Si je suis sur induction, est-ce que j'accepte un adaptateur ou dois-je changer de modèle ?
3. Quelle taille correspond au volume habituel ?
4. Puis-je identifier correctement joint, filtre et entonnoir ?
5. L'entretien manuel est-il acceptable ?

## Scope

À traiter : construction aluminium, absence d'induction directe, route adaptateur, tailles 1/2/3/4/6/9/12/18, volumes documentés, largeur de base quand utile, entretien, pièces par taille, alternatives Venus/Moka Induction.

Hors scope : histoire de la marque comme axe principal, mode d'emploi complet, prix figé, promesse gustative liée à l'aluminium, coloris sans différence fonctionnelle.

## Decision criteria

- `MUST_HAVE` — plaque directement compatible ou acceptation explicite d'un adaptateur.
- `MUST_HAVE` — volume documenté cohérent avec la quantité habituelle.
- `HIGH` — pièce exacte identifiable par famille + taille + dimensions pertinentes.
- `HIGH` — acceptation de l'entretien manuel.
- `CONDITIONAL` — adaptateur si la cuisine est à induction.
- `CONDITIONAL` — largeur de base/encombrement des grands formats.
- `CONTRAINDICATION` — induction-only si l'utilisateur refuse un adaptateur ou un autre modèle.
- `CONTRAINDICATION` — exigence de lave-vaisselle systématique.

## Required evidence / entities

- Bialetti Moka Express actuelle.
- Aluminium, poignée/bouton, soupape.
- Pas d'induction directe.
- Adaptateur Bialetti comme option distincte.
- Tailles et volumes documentés 1 à 18 tasses.
- Funnels et ring/filter packs par taille.
- Venus et Moka Induction uniquement comme alternatives rationnelles.

## Trade-offs / contradictions

- Le nombre de “tasses” ne correspond pas à des mugs.
- Une taille plus grande n'est pas une solution polyvalente si l'usage réel exige de sous-remplir.
- Un diamètre proche entre deux pièces ne suffit pas à conclure à l'interchangeabilité.
- L'adaptateur rend possible l'usage sur induction mais ne transforme pas la Moka Express en modèle nativement compatible.

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
- recommander de surdimensionner la moka “au cas où” ;
- déduire un meilleur goût de l'aluminium ;
- présenter les pièces comme universelles ;
- simuler un test.

## Editorial angle

La Moka Express est simple, mais le bon achat dépend de trois choses très concrètes : **plaque, volume réel, référence exacte des pièces**.

## Success criteria

Le lecteur doit pouvoir choisir une taille sur la base des ml plutôt que du seul nombre de tasses, comprendre les trois routes sur induction, éviter un achat de pièce incompatible et savoir quand Venus ou Moka Induction est plus rationnelle.

## Proposed outline

1. Plaque avant tout — clarifier l'absence d'induction directe.
2. Trois routes si induction — adaptateur, Venus, Moka Induction.
3. Matrice tailles / volumes / bases — choisir par quantité habituelle.
4. Pourquoi ne pas prendre trop grand — conséquence pratique de l'under-filling.
5. Aluminium : construction, pas promesse gustative.
6. Entretien — contraintes actuelles.
7. Pièces par taille — montrer pourquoi le détail de référence compte.
8. Quand choisir un modèle frère — comparaison locale et décisionnelle.
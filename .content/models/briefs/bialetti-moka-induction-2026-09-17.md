# Content brief — Bialetti Moka Induction

Date : 2026-09-17
Workflow version : 2
Page type : `PRODUCT`
URL : `/modeles/bialetti-moka-induction/`

## Target query / cluster

- Primary topic : `Bialetti Moka Induction`
- Supporting intents : tailles, volumes, induction, diamètre de base, génération, pièces, Moka Induction vs Venus.
- Cluster role : fiche produit décisionnelle de la famille hybride Bialetti conçue pour l'induction.

## Search intent

Commercial investigation / product research. Le lecteur veut savoir ce que Moka Induction change réellement par rapport à Moka Express et Venus, et éviter une erreur de taille, de foyer ou de génération.

## Reader / JTBD

Quand je passe à l'induction mais veux rester proche de la logique matérielle de la Moka Express, je veux choisir une taille réellement détectée par ma plaque et identifier la bonne génération, afin d'éviter une incompatibilité de foyer ou l'achat d'une mauvaise pièce.

## Decision to resolve

1. Le diamètre de la taille voulue sera-t-il détecté par la plaque ?
2. Quel volume correspond réellement à la référence actuelle ?
3. S'agit-il de la Bi-Layer actuelle, d'une ancienne génération ou d'une édition aux dimensions différentes ?
4. Quelle pièce correspond à cette génération ?
5. Venus serait-elle plus logique si l'utilisateur veut du tout inox ?

## Scope

À traiter : Bi-Layer actuelle 2/4/6, volumes et bases documentés, compatibilité induction, construction hybride, éditions uniquement lorsqu'elles changent dimensions/volumes, génération pré-2020 pour les pièces, comparaison locale avec Venus et Moka Express.

Hors scope : catalogue complet des collaborations, prix figé, promesse gustative, guide général induction, mode d'emploi complet.

## Decision criteria

- `MUST_HAVE` — diamètre réellement détectable par la plaque.
- `MUST_HAVE` — variante/génération exacte identifiée pour les pièces.
- `HIGH` — volume documenté de la référence effectivement achetée.
- `HIGH` — préférence assumée pour la construction hybride acier/aluminium + haut aluminium.
- `CONDITIONAL` — disponibilité des pièces d'une génération ancienne.
- `CONDITIONAL` — édition/collaboration uniquement si ses dimensions ou volumes diffèrent.
- `CONTRAINDICATION` — besoin d'une construction tout inox : regarder Venus.
- `CONTRAINDICATION` — foyer incapable de détecter le diamètre de la taille voulue.

## Required evidence / entities

- Bialetti Moka Induction Bi-Layer actuelle.
- Tailles 2/4/6, volumes ≈ 100/150/280 ml, bases ≈ 9,5/10/11,5 cm.
- Construction base acier/aluminium + partie supérieure aluminium.
- Consignes d'entretien actuelles.
- Éditions D&G consultées lorsque leurs volumes diffèrent.
- Funnel Bi-Layer actuel et funnel Moka Induction pré-2020.
- Critère visuel de l'ancienne génération à bande silicone noire.
- Venus et Moka Express comme modèles frères.

## Trade-offs / contradictions

- “Compatible induction” ne garantit pas que tout foyer détectera toute taille.
- Même nombre de tasses ne signifie pas même volume entre familles ou éditions.
- Les pièces de la génération pré-2020 ne doivent pas être généralisées à la Bi-Layer actuelle.
- Une collaboration décorative n'est pas une nouvelle famille fonctionnelle sauf différence documentée.

## Internal-link handoffs

- `/capacites/`
- `/guides/cafetiere-italienne-induction-compatibilite/`
- `/guides/cafetiere-italienne-aluminium-ou-inox/`
- `/accessoires/pieces-detachees-bialetti/`
- `/modeles/bialetti-moka-express/`
- `/modeles/bialetti-venus/`
- `/comparatifs/cafetiere-italienne-induction/`

## Anti-patterns

- traiter “induction” comme garantie universelle de détection ;
- fusionner les chiffres de variantes différentes ;
- ignorer la génération dans les pièces ;
- présenter Moka Induction comme une Venus au design différent ;
- déduire un goût supérieur de la construction hybride ;
- simuler un test.

## Editorial angle

Le vrai sujet n'est pas le badge “induction”, mais **référence exacte → volume → diamètre → génération**. C'est cette séquence qui sécurise l'achat.

## Success criteria

Le lecteur doit comprendre pourquoi la taille et le diamètre comptent encore sur induction, distinguer la Bi-Layer actuelle des anciennes références, éviter une mauvaise pièce et savoir quand Venus ou Moka Express + adaptateur répond mieux au besoin.

## Proposed outline

1. Ce que Moka Induction change réellement — cadrer l'architecture hybride.
2. Hard gate diamètre / foyer — aller au-delà du badge induction.
3. Matrice tailles / volumes / bases — choisir la référence exacte.
4. Variantes et éditions — expliquer pourquoi les ml peuvent différer.
5. Génération pré-2020 vs actuelle — préparer la décision de pièce.
6. Entretien — contraintes utiles uniquement.
7. Moka Induction vs Venus vs Moka Express — comparaison locale fondée sur construction, plaque et volume.
8. Cas où ne pas choisir Moka Induction — expliciter les contraindications.
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

Commercial investigation / product research. Le lecteur veut savoir ce que Moka Induction change réellement par rapport à Moka Express et Venus, et éviter une erreur de taille, de foyer, de marché/référence ou de génération.

## Reader / JTBD

Quand je passe à l'induction mais veux rester proche de la logique matérielle de la Moka Express, je veux choisir une référence dont le volume documenté et le diamètre correspondent réellement à ma plaque et à mon usage, puis identifier la bonne génération.

## Decision to resolve

1. Le diamètre de la taille voulue sera-t-il détecté par la plaque ?
2. Quel volume est documenté sur la référence / le marché réellement acheté ?
3. S'agit-il de la Bi-Layer actuelle, d'une ancienne génération ou d'une édition aux dimensions différentes ?
4. Quelle pièce correspond à cette génération ?
5. Venus serait-elle plus logique si l'utilisateur veut du tout inox ?

## Scope

À traiter : Bi-Layer actuelle 2/4/6, volumes et bases documentés avec qualification marché/référence, compatibilité induction, construction hybride, éditions uniquement lorsqu'elles changent dimensions/volumes, génération pré-2020 pour les pièces, comparaison locale avec Venus et Moka Express.

Hors scope : catalogue complet des collaborations, prix figé, promesse gustative, guide général induction, mode d'emploi complet.

## Decision criteria

- `MUST_HAVE` — diamètre réellement détectable par la plaque.
- `MUST_HAVE` — volume vérifié sur la référence réellement achetée quand la quantité est critique.
- `MUST_HAVE` — variante/génération exacte identifiée pour les pièces.
- `HIGH` — préférence assumée pour la construction hybride acier/aluminium + haut aluminium.
- `CONDITIONAL` — disponibilité des pièces d'une génération ancienne.
- `CONDITIONAL` — édition/collaboration uniquement si ses dimensions ou volumes diffèrent.
- `CONTRAINDICATION` — besoin d'une construction tout inox : regarder Venus.
- `CONTRAINDICATION` — foyer incapable de détecter le diamètre de la taille voulue.

## Required evidence / entities

- Bialetti Moka Induction Bi-Layer actuelle.
- Standard 2 cup : ≈90–100 ml selon référence/marché vérifié ; 4 cup ≈150 ml ; 6 cup ≈280 ml sur les références standard vérifiées.
- Bases NZ ≈9,5/10/11,5 cm, clairement rattachées à cette référence.
- Construction base acier/aluminium + partie supérieure aluminium.
- Consignes d'entretien actuelles.
- D&G Sicilia-style 4 cup ≈190 ml et Blu Mediterraneo 4 cup ≈150 ml / 6 cup ≈225 ml comme preuves de variation par édition.
- Funnel Bi-Layer actuel et funnel Moka Induction pré-2020.
- Critère visuel de l'ancienne génération à bande silicone noire.
- Venus et Moka Express comme modèles frères.

## Trade-offs / contradictions

- “Compatible induction” ne garantit pas que tout foyer détectera toute taille.
- Une fiche marché n'est pas une spec universelle : la 2 tasses standard vérifiée varie entre ≈90 et ≈100 ml.
- Même nombre de tasses ne signifie pas même volume entre familles ou éditions.
- D&G n'est pas une matrice unique : des 4 tasses vérifiées sont documentées à ≈150 ou ≈190 ml selon l'édition.
- Les pièces de la génération pré-2020 ne doivent pas être généralisées à la Bi-Layer actuelle.

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
- transformer 100 ml NZ en volume mondial de la 2 tasses ;
- fusionner les chiffres de variantes ou marchés différents ;
- ignorer la génération dans les pièces ;
- présenter Moka Induction comme une Venus au design différent ;
- déduire un goût supérieur de la construction hybride ;
- simuler un test.

## Editorial angle

Le vrai sujet n'est pas le badge “induction”, mais **référence exacte → marché → volume → diamètre → génération**. C'est cette séquence qui sécurise l'achat.

## Success criteria

Le lecteur doit comprendre pourquoi taille, marché/référence et diamètre comptent encore sur induction, distinguer la Bi-Layer actuelle des anciennes références, éviter une mauvaise pièce et savoir quand Venus ou Moka Express + adaptateur répond mieux au besoin.

## Proposed outline

1. Ce que Moka Induction change réellement — cadrer l'architecture hybride.
2. Hard gate diamètre / foyer — aller au-delà du badge induction.
3. Matrice tailles / volumes / bases — qualifier le marché de la 2 tasses.
4. Variantes et éditions — expliquer pourquoi les ml peuvent différer.
5. Génération pré-2020 vs actuelle — préparer la décision de pièce.
6. Entretien — contraintes utiles uniquement.
7. Moka Induction vs Venus vs Moka Express — comparaison locale fondée sur construction, plaque et volume.
8. Cas où ne pas choisir Moka Induction — expliciter les contraindications.

# Decision artifact — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2

## JTBD

Quand je veux préparer régulièrement une quantité précise de moka, je veux choisir une Moka Express adaptée à mon volume **et à ma plaque**, afin d'éviter une cafetière surdimensionnée, un adaptateur inadapté à la taille ou une mauvaise pièce de rechange.

## Circumstances

- achat d'une première moka ou remplacement d'une Moka Express ;
- plaque gaz, électrique ou vitrocéramique, ou cuisine induction ;
- quantité habituelle relativement stable ;
- volonté de rester sur l'architecture aluminium classique ;
- besoin de pouvoir identifier les pièces d'usure.

## Push / Pull / Anxiety / Habit

- **Push** : ancienne cafetière usée, mauvais volume, nouvelle plaque, besoin d'une taille différente.
- **Pull** : architecture simple, vaste choix de tailles, pièces de rechange documentées.
- **Anxiety** : “3/4/6 tasses” donnera-t-il la quantité attendue ? l'induction fonctionnera-t-elle ? l'adaptateur couvre-t-il ma taille ? la pièce commandée sera-t-elle réellement compatible ?
- **Habit** : conserver une moka existante, une autre méthode de café ou une grande taille utilisée par habitude.

## Big Hire

Acheter la Moka Express plutôt qu'une moka inox ou induction dédiée.

## Little Hire

Continuer à l'utiliser au quotidien parce que sa taille correspond au volume réellement préparé, sa plaque est compatible et son entretien/réparation ne créent pas de friction.

## Decision criteria

- `MUST_HAVE` — plaque compatible directement, ou route induction explicitement compatible avec la taille choisie.
- `MUST_HAVE` — volume documenté cohérent avec la quantité habituellement préparée.
- `HIGH` — taille et pièce de rechange identifiables sans ambiguïté.
- `HIGH` — acceptation de l'entretien manuel.
- `CONDITIONAL` — adaptateur Bialetti 13 cm si induction **et Moka Express jusqu'à 6 tasses**.
- `CONDITIONAL` — largeur de base / encombrement pour les très grands formats.
- `CONTRAINDICATION` — Moka Express 9/12/18 sur induction si l'utilisateur compte uniquement sur l'adaptateur officiel 13 cm.
- `CONTRAINDICATION` — cuisine induction-only si l'utilisateur refuse un adaptateur compatible ou un autre modèle.
- `CONTRAINDICATION` — besoin d'un passage systématique au lave-vaisselle.

## Hard gates

1. Aluminium classique = pas d'induction directe.
2. L'adaptateur officiel Bialetti 13 cm est documenté pour les Moka Express **jusqu'à 6 tasses** ; ne pas l'étendre aux 9/12/18.
3. Taille = volume habituel, pas “prendre plus grand au cas où”.
4. Pièce = famille + taille + dimensions pertinentes ; un diamètre similaire ne suffit pas.

## Evidence-to-decision rule

Quand une FAQ générale et la fiche dédiée d'un accessoire diffèrent en précision, la contrainte spécifique de la fiche accessoire prévaut pour la recommandation de compatibilité.

## Alternatives / handoffs

- Venus : construction inox et induction selon taille.
- Moka Induction : architecture hybride directement induction.
- Adaptateur induction : conserver la Moka Express classique uniquement dans les tailles documentées comme compatibles avec l'accessoire officiel.
- `/capacites/` : arbitrer le volume.
- guides dosage/usage : préparation, hors scope du verdict produit.

## Editorial thesis

La force décisionnelle de la Moka Express n'est pas son histoire : c'est une architecture simple avec un très large éventail de tailles, mais dont le bon achat dépend d'abord du **volume réel**, de la **plaque**, de la **limite de l'éventuel adaptateur** et de la **bonne référence de pièce**.

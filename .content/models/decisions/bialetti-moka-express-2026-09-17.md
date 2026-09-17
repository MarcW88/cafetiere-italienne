# Decision artifact — Bialetti Moka Express

Date : 2026-09-17
Workflow version : 2

## JTBD

Quand je veux préparer régulièrement une quantité précise de moka sur une plaque compatible, je veux choisir la taille classique Bialetti qui correspond réellement à mon volume et rester capable de l'entretenir et la réparer, afin d'éviter une cafetière surdimensionnée ou une mauvaise pièce.

## Circumstances

- achat d'une première moka ou remplacement d'une Moka Express ;
- plaque gaz, électrique ou vitrocéramique, ou acceptation d'un adaptateur sur induction ;
- quantité habituelle relativement stable ;
- volonté de rester sur l'architecture aluminium classique ;
- besoin de pouvoir identifier les pièces d'usure.

## Push / Pull / Anxiety / Habit

- **Push** : ancienne cafetière usée, mauvais volume, besoin d'une taille différente.
- **Pull** : architecture simple, vaste choix de tailles, pièces de rechange documentées.
- **Anxiety** : “3/4/6 tasses” donnera-t-il la quantité attendue ? l'induction fonctionnera-t-elle ? la pièce commandée sera-t-elle réellement compatible ?
- **Habit** : conserver une moka existante, une autre méthode de café ou une grande taille utilisée par habitude.

## Big Hire

Acheter la Moka Express plutôt qu'une moka inox ou induction dédiée.

## Little Hire

Continuer à l'utiliser au quotidien parce que sa taille correspond au volume réellement préparé et que sa plaque/entretien ne créent pas de friction.

## Decision criteria

- `MUST_HAVE` — plaque compatible directement, ou acceptation explicite d'un adaptateur.
- `MUST_HAVE` — volume documenté cohérent avec la quantité habituellement préparée.
- `HIGH` — taille et pièce de rechange identifiables sans ambiguïté.
- `HIGH` — acceptation de l'entretien manuel.
- `CONDITIONAL` — adaptateur si la cuisine passe à l'induction.
- `CONDITIONAL` — largeur de base / encombrement pour les très grands formats.
- `CONTRAINDICATION` — cuisine induction-only si l'utilisateur refuse un adaptateur ou un autre modèle.
- `CONTRAINDICATION` — besoin d'un passage systématique au lave-vaisselle.

## Hard gates

1. Aluminium classique = pas d'induction directe.
2. Taille = volume habituel, pas “prendre plus grand au cas où”.
3. Pièce = famille + taille + dimensions pertinentes ; un diamètre similaire ne suffit pas.

## Alternatives / handoffs

- Venus : construction inox et induction selon taille.
- Moka Induction : architecture hybride directement induction.
- Adaptateur induction : conserver la Moka Express classique.
- `/capacites/` : arbitrer le volume.
- guides dosage/usage : préparation, hors scope du verdict produit.

## Editorial thesis

La force décisionnelle de la Moka Express n'est pas son histoire : c'est une architecture simple avec un très large éventail de tailles, mais dont le bon achat dépend d'abord du **volume réel**, de la **plaque** et de la **bonne référence de pièce**.

# PUBLISH_REVIEW — Comment choisir une cafetière italienne ?

- URL : `/guides/comment-choisir-cafetiere-italienne/`
- Workflow : `guide-analysis-workflow / PUBLISH_REVIEW`
- Date : 2026-09-13
- Résultat : `PASS — READY_FOR_HUMAN_VALIDATION`
- Robots conservé : `noindex,follow`

## Validation machine

- `npm run build` : PASS — 49 pages générées.
- `npm run check` : PASS — 49 pages vérifiées, aucun lien interne cassé.
- `python3 validate_guide_quality.py` : PASS — 1 Guide rédigé sans blocker détectable et état d'indexation conforme.

## Gates substantiels

### Intention et rôle éditorial — PASS

La page aide à définir les critères de choix avant de comparer des modèles. Elle ne produit ni podium ni classement produit et renvoie les décisions de sélection vers `/comparatifs/`.

### Réponse utile et architecture — PASS

La réponse courte donne immédiatement les quatre contrôles prioritaires. L'ordre plaque → volume réel → matériau → entretien/pièces découle des erreurs de choix et des preuves disponibles, pas d'un template imposé.

### Preuves et factualité — PASS

Les exemples techniques utilisés dans le texte sont reliés à des sources fabricants documentées dans le brief et dans la section Sources : Bialetti et Alessi. Aucun prix, test, mesure de température, durée de vie ou expérience personnelle n'est inventé.

### Niveau de preuve — PASS

Le texte distingue les caractéristiques fabricants des déductions éditoriales. Il évite notamment de présenter l'inox comme automatiquement compatible avec toute plaque à induction ou comme garant d'un meilleur goût.

### Frontière Guides / Comparatifs — PASS

Le guide explique les critères et les hard gates. Il ne classe aucun produit. Les comparatifs sont utilisés uniquement comme prochaine étape lorsque les critères sont définis.

### Limites et alternatives — PASS

La page indique explicitement les cas où une moka peut ne pas être le bon choix et cite d'autres familles de préparation selon le besoin.

### Valeur sans affiliation — PASS

Le guide reste entièrement utile sans lien affilié et ne dépend d'aucune offre, promotion ou commission.

### Naturalité / anti-AI-slop — PASS

Pas de blocs produits clonés, pas de symétrie artificielle entre marques, pas de conclusion répétant un classement, pas de métadiscours SEO/GEO dans le contenu utilisateur.

### SEO / technique — PASS

- un seul H1 ;
- title et meta description non vides ;
- canonical explicite ;
- `noindex,follow` conservé ;
- liens internes valides ;
- sources externes présentes ;
- build et check du dépôt passants.

## Décision finale

`PASS — READY_FOR_HUMAN_VALIDATION`

Ne pas passer la page en `index,follow` avant validation humaine explicite et instruction explicite d'indexation.

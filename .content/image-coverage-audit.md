# Image coverage audit — 2026-09-14

## Règle

Audit piloté par `.agents/skills/editorial-image-planner/SKILL.md`. Une image générée n'est ajoutée que si elle améliore la compréhension ou la respiration éditoriale avec un risque de vérité faible. Les produits, pièces, logos et compatibilités techniques qui exigent une fidélité visuelle restent hors BFL.

## Couverture actuelle

49 pages HTML dans le site. 12 pages disposent maintenant d'une image éditoriale BFL générée et persistante après rebuild :

- `/` — hero photographique moka en cuisine
- `/guides/comment-utiliser-cafetiere-italienne/` — remplissage du filtre sans tassage
- `/guides/premiere-utilisation-cafetiere-italienne/` — rinçage initial
- `/guides/dosage-cafe-cafetiere-italienne/` — pesée du panier
- `/guides/mouture-cafetiere-italienne/` — réglage du moulin
- `/guides/nettoyer-cafetiere-italienne/` — séchage des pièces
- `/guides/quel-cafe-pour-cafetiere-italienne/` — grains vs café moulu
- `/guides/cafetiere-italienne-aluminium-ou-inox/` — finitions aluminium et inox génériques
- `/guides/detartrer-cafetiere-italienne/` — dépôts minéraux légers et contexte de rinçage
- `/guides/cafetiere-italienne-cafe-amer-brule/` — chauffe maîtrisée
- `/cafe-moka/comment-preparer-un-cafe-moka/` — chauffe modérée
- `/cafe-moka/quest-ce-que-le-cafe-moka/` — café servi depuis une moka générique

## Deuxième vague — terminée

Trois adaptations ont été ajoutées et générées uniquement via le workflow BFL :

- `/` — le média BFL remplace visuellement l'ancienne illustration CSS du hero lorsqu'il est disponible ; l'illustration CSS reste un fallback avant génération
- `/guides/detartrer-cafetiere-italienne/` — dépôts minéraux légers et contexte de rinçage, sans dosage précis ni géométrie fabricant
- `/guides/cafetiere-italienne-cafe-amer-brule/` — petite flamme maîtrisée et retrait de la moka, sans simuler un test

`/guides/comment-choisir-cafetiere-italienne/` reste volontairement sans génération : les critères, tableaux et liens accomplissent déjà la tâche, et un visuel supplémentaire serait surtout décoratif.

## Décisions par famille

### Homepage

Couverte. Le hero utilise désormais une scène générique de moka en cuisine, sans marque ou référence produit identifiable.

### Marques

`/marques/` : pas de génération nécessaire à ce stade.

`/marques/bialetti/` et `/marques/alessi/` : **BLOCKED pour BFL** si un visuel de marque ou de gamme est souhaité. Utiliser des visuels officiels ou des photos produit autorisées.

### Modèles

`/modeles/` : pas de génération nécessaire à ce stade.

Toutes les fiches modèles (`bialetti-moka-express`, `bialetti-venus`, `bialetti-moka-induction`, `alessi-9090`) : **BLOCKED pour BFL** pour les visuels principaux. La fidélité produit est nécessaire.

### Comparatifs

Le hub `/comparatifs/` n'a pas besoin d'une image générée.

Les six comparatifs détaillés concernent des produits et caractéristiques réelles : **BLOCKED pour BFL** pour toute image censée représenter les références comparées. Préférer des visuels officiels ou issus des marchands autorisés.

### Capacités

Le système visuel de mesure remplit déjà la fonction de compréhension. Pas de génération BFL ajoutée pour `/capacites/` ni les pages 2, 4, 6, 10 et 12 tasses.

### Guides

Couverts : utilisation, première utilisation, dosage, mouture, nettoyage, choix du café, aluminium/inox, détartrage, café amer/brûlé.

À laisser sans génération : `comment-choisir` et `moka-vs-espresso` — le texte et les structures comparatives remplissent déjà la fonction.

**BLOCKED pour BFL** : `cafetiere-italienne-induction-compatibilite`, `cafetiere-italienne-fuite-vapeur`, `changer-joint-cafetiere-italienne` lorsque l'image doit montrer une compatibilité, un défaut ou une pièce exacte.

### Accessoires

`/accessoires/` : pas de génération nécessaire.

`adaptateur-induction`, `joint`, `filtre`, `pieces-detachees-bialetti` : **BLOCKED pour BFL** pour les représentations de produit/pièce. Utiliser des images fidèles et sourcées.

### Café moka

`/cafe-moka/` : pas de génération nécessaire au niveau hub.

`/cafe-moka/comment-preparer-un-cafe-moka/` et `/cafe-moka/quest-ce-que-le-cafe-moka/` sont couverts.

### Trust

`/a-propos/`, `/notre-methode/`, `/affiliation/`, `/contact/` : aucune image BFL nécessaire. Le contenu de confiance reste volontairement sobre.

## Principe pour la suite

Le niveau de couverture est maintenant considéré comme suffisant pour le site actuel. Ne pas ouvrir de nouveau lot BFL par défaut. Ajouter une nouvelle image seulement lorsqu'une nouvelle page ou un nouveau besoin éditorial explicite le justifie. Aucun visuel produit identifiable n'est généré par IA.

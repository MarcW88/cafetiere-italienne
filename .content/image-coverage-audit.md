# Image coverage audit — 2026-09-14

## Règle

Audit piloté par `.agents/skills/editorial-image-planner/SKILL.md`. Une image générée n'est ajoutée que si elle améliore la compréhension ou la respiration éditoriale avec un risque de vérité faible. Les produits, pièces, logos et compatibilités techniques qui exigent une fidélité visuelle restent hors BFL.

## Couverture actuelle

49 pages HTML dans le site. 6 pages disposent déjà d'une image éditoriale BFL générée et persistante après rebuild :

- `/guides/comment-utiliser-cafetiere-italienne/` — remplissage du filtre sans tassage
- `/guides/premiere-utilisation-cafetiere-italienne/` — rinçage initial
- `/guides/dosage-cafe-cafetiere-italienne/` — pesée du panier
- `/guides/mouture-cafetiere-italienne/` — réglage du moulin
- `/guides/nettoyer-cafetiere-italienne/` — séchage des pièces
- `/cafe-moka/comment-preparer-un-cafe-moka/` — chauffe modérée

## Première vague issue de l'audit

Trois nouvelles pages ont un besoin éditorial clair et un risque faible. Elles sont ouvertes en `PENDING` dans `.content/image-requests/` et doivent être générées uniquement par le workflow BFL :

- `/guides/quel-cafe-pour-cafetiere-italienne/` — visualiser grains vs café moulu sans prétendre représenter Arabica/Robusta
- `/guides/cafetiere-italienne-aluminium-ou-inox/` — distinguer visuellement deux finitions de matériau génériques sans représenter un modèle réel
- `/cafe-moka/quest-ce-que-le-cafe-moka/` — contextualiser le café servi depuis une moka générique

## Décisions par famille

### Homepage

Candidate forte pour un vrai visuel identitaire, mais à traiter dans une vague dédiée car le visuel doit s'intégrer au hero et remplacer/compléter l'illustration CSS plutôt qu'ajouter une image éditoriale standard au fil de page.

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

Le système visuel de mesure remplit déjà la fonction de compréhension. Pas de génération BFL ajoutée lors de cette passe pour `/capacites/` ni les pages 2, 4, 6, 10 et 12 tasses. Une scène de contexte pourrait être envisagée plus tard uniquement si elle n'implique aucun volume exact.

### Guides

Déjà couverts : utilisation, première utilisation, dosage, mouture, nettoyage.

Première vague : choix du café et aluminium/inox.

À laisser sans génération pour l'instant : `comment-choisir`, `detartrer`, `cafe-amer-brule`, `moka-vs-espresso` — le texte/tableaux remplissent déjà la fonction ou une image risquerait d'être surtout décorative.

**BLOCKED pour BFL** : `cafetiere-italienne-induction-compatibilite`, `cafetiere-italienne-fuite-vapeur`, `changer-joint-cafetiere-italienne` lorsque l'image doit montrer une compatibilité, un défaut ou une pièce exacte.

### Accessoires

`/accessoires/` : pas de génération nécessaire.

`adaptateur-induction`, `joint`, `filtre`, `pieces-detachees-bialetti` : **BLOCKED pour BFL** pour les représentations de produit/pièce. Utiliser des images fidèles et sourcées.

### Café moka

`/cafe-moka/` : pas de génération nécessaire au niveau hub.

`/cafe-moka/comment-preparer-un-cafe-moka/` : déjà couvert.

`/cafe-moka/quest-ce-que-le-cafe-moka/` : première vague `PENDING`.

### Trust

`/a-propos/`, `/notre-methode/`, `/affiliation/`, `/contact/` : aucune image BFL nécessaire pour le moment. Le contenu de confiance doit rester sobre et ne pas fabriquer d'illustration pseudo-documentaire.

## Principe pour les vagues suivantes

Après chaque lot : génération via BFL, réinsertion par le build, check des liens, revue Playwright desktop/mobile, puis seulement ouverture du lot suivant. Aucun visuel produit identifiable n'est généré par IA.

# Brief éditorial — Comment choisir une cafetière italienne ?

- URL : `/guides/comment-choisir-cafetiere-italienne/`
- Date de vérification : 14 septembre 2026
- Workflow : `guide-analysis-workflow / AUDIT` → `guide-content-workflow`
- Décision : `DEEP_REWRITE`
- Type : `CHOICE`
- Source de vérité : `scripts/guide-content.mjs`
- Publication : conserver `noindex,follow` jusqu’à validation humaine explicite.

## 1. Tâche lecteur

Aider une personne qui envisage une moka à éliminer d’abord les mauvais choix, puis à définir des critères suffisamment précis pour passer ensuite à un comparatif produit.

La page ne doit pas classer de produits. Elle doit répondre à : « quels critères dois-je fixer avant de comparer des modèles ? »

## 2. Thèse

L’ordre de décision est plus important qu’une liste générique de caractéristiques :

1. plaque et compatibilité réelle ;
2. taille / volume brassé réellement nécessaire ;
3. modèle et matériau ;
4. entretien, pièces et manipulation ;
5. seulement ensuite design, marque et prix.

Deux hard gates dominent : une moka incompatible avec la plaque est inutilisable en direct ; une taille mal choisie correspond mal au volume réellement préparé et ne doit pas être supposée librement sous-remplissable.

## 3. Recherche d’intention / SERP

Sous-questions récurrentes observées :

- quelle taille choisir ;
- combien représente une « tasse » moka ;
- peut-on utiliser une grande moka pour une petite quantité ;
- induction / diamètre de fond ;
- aluminium ou inox ;
- entretien / lave-vaisselle ;
- disponibilité des joints et filtres ;
- quand une moka n’est pas la méthode la plus adaptée.

Raccourcis SERP à ne pas reprendre sans preuve :

- `inox = induction` ;
- `inox = lave-vaisselle` ;
- `aluminium = meilleur goût` ;
- conversion universelle « x tasses = y ml » ;
- `une grande moka est plus polyvalente` ;
- prix ou durées de vie génériques.

## 4. Registre de preuves

### Bialetti — Moka Express
Source : https://www.bialetti.co.nz/products/moka-express

- aluminium ;
- volumes brassés approximatifs publiés par taille ;
- 1 tasse 60 ml, 2 tasses 90 ml, 3 tasses 130 ml, 4 tasses 185 ml, 6 tasses 250 ml, etc. sur la fiche consultée ;
- lavage à la main / pas de lave-vaisselle ;
- eau sous la soupape dans la procédure de préparation.

Classe : `PRIMARY_BRAND_DISTRIBUTOR`.

### Bialetti — Moka Induction
Source : https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black

- base bi-matière acier inoxydable / aluminium ;
- adaptée à l’induction ;
- contrôle du diamètre auprès du fabricant de la plaque recommandé ;
- volumes brassés approximatifs publiés : 2 tasses 100 ml, 4 tasses 150 ml, 6 tasses 280 ml.

Classe : `PRIMARY_BRAND_DISTRIBUTOR`.

### Bialetti — FAQ taille / remplissage
Sources : pages produit Bialetti NZ actuelles, notamment gammes Moka Express / Moka Induction.

- le nombre de tasses est présenté comme un repère de petites tasses espresso ;
- Bialetti recommande de choisir une taille correspondant au service habituel et indique de ne pas sous-remplir eau / café sur ses stovetop documentées.

Classe : `PRIMARY_BRAND_DISTRIBUTOR`.

### Bialetti — pièces et induction
Source : https://www.bialetti.co.nz/products/bialetti-moka-exclusive-black

- Moka aluminium non compatible directement à l’induction, usage possible avec plaque d’induction Bialetti ;
- pièces de rechange proposées pour plusieurs modèles / tailles ;
- cela ne signifie pas qu’une même pièce convient à toutes les tailles ou générations.

Classe : `PRIMARY_BRAND_DISTRIBUTOR`.

### Alessi — 9090
Source : https://alessi.com/products/9090-espresso-coffee-maker

- inox 18/10 ;
- fond en acier magnétique pour induction ;
- version 1 tasse affichée : 7 cl ;
- avertissement : vérifier que la plaque s’active avec un objet d’au moins 90 mm.

Classe : `PRIMARY_MANUFACTURER`.

## 5. Correction d’une donnée antérieure

L’ancienne version utilisait une fiche Bialetti Uruguay indiquant 270 ml pour une Moka Express 6 tasses. La source actuelle retenue pour la passe stricte est la fiche Bialetti NZ qui affiche environ 250 ml pour la Moka Express 6 tasses. La page ne doit donc pas figer 270 ml comme vérité universelle.

Cette divergence renforce la règle éditoriale : vérifier la fiche de la variante / du marché concerné plutôt que mémoriser une conversion générique.

## 6. Déductions éditoriales autorisées

- le même nombre de « tasses » ne garantit pas un volume identique entre deux gammes ;
- sur induction, modèle + taille + plaque forment une seule vérification de compatibilité ;
- le matériau est un critère secondaire après plaque et volume ;
- les pièces doivent être vérifiées pour la taille / génération exacte ;
- une moka ne doit pas être présentée comme adaptée à tous les volumes si la documentation du modèle prévoit un remplissage nominal ;
- si les besoins de volume varient fortement, comparer deux tailles ou une autre méthode est une recommandation éditoriale raisonnable, pas un claim fabricant universel.

## 7. Architecture finale

1. réponse courte avec ordre de décision ;
2. plaque = premier hard gate ;
3. taille réelle = second hard gate ;
4. matériau sans doublonner le guide aluminium/inox ;
5. entretien, pièces et manipulation ;
6. matrice situation → priorité → décision ;
7. erreurs à éviter ;
8. cas où la moka n’est pas le meilleur format ;
9. passage aux comparatifs ;
10. sources.

## 8. Frontières du cluster

- induction détaillée → `/guides/cafetiere-italienne-induction-compatibilite/` ;
- aluminium vs inox → `/guides/cafetiere-italienne-aluminium-ou-inox/` ;
- volumes par taille → `/capacites/` ;
- sélection de produits → `/comparatifs/meilleure-cafetiere-italienne/` ;
- sélection induction → `/comparatifs/cafetiere-italienne-induction/` ;
- usage → `/guides/comment-utiliser-cafetiere-italienne/`.

## 9. Internal linking

Liens contextuels nécessaires :

- induction au moment du hard gate plaque ;
- capacités au moment du choix de taille ;
- aluminium/inox après plaque + volume ;
- comparatifs uniquement lorsque les critères sont fixés.

Pas de lien produit ou affilié nécessaire à la valeur de cette page.

## 10. Image decision

`NO_NEW_IMAGE`.

Cette intention est principalement décisionnelle. Les tableaux et liens spécialisés apportent plus de valeur qu’un nouveau visuel décoratif. Aucun appel BFL supplémentaire n’est justifié.

## 11. Interdits

- faux test / faux hands-on ;
- podium ou « meilleur modèle » ;
- prix génériques non sourcés ;
- conversion universelle tasse → ml ;
- généraliser une consigne Bialetti à toutes les marques ;
- généraliser `inox = induction` ou `inox = lave-vaisselle` ;
- promettre un goût supérieur à partir du seul matériau ;
- inventer une durée de vie ou une réparabilité non documentée.

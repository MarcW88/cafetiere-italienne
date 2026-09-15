# Evidence brief — `/marques/bialetti/`

Date de vérification : 15 septembre 2026  
Workflow : `brand-analysis-workflow` → `brand-content-workflow`  
Page type : `BRAND_HUB`  
Décision AUDIT : `DEEP_REWRITE`  
Confiance : élevée

## 1. Intention et rôle

Intent principal : commercial investigation / orientation dans la gamme Bialetti.

La page doit répondre à une question plus large que les fiches modèles : **quelle logique Bialetti correspond à ma plaque, mon volume habituel et au type de moka que je veux utiliser ?**

Elle ne doit pas :
- refaire les fiches `/modeles/bialetti-*` ;
- devenir un classement général des meilleures cafetières italiennes ;
- reprendre les Guides sur induction, capacité, mouture ou préparation ;
- prétendre couvrir chaque coloris, collaboration ou SKU du catalogue mondial.

Handoffs naturels :
- référence précise → `/modeles/` ;
- comparaison entre marques → `/comparatifs/` ;
- quantité → `/capacites/` ;
- contrainte induction → guide/comparatif induction ;
- compatibilité des pièces → `/accessoires/pieces-detachees-bialetti/`.

## 2. Valeur existante à conserver

La page actuelle contient déjà plusieurs choix éditoriaux justes :
- partir de la plaque et de la taille avant le prestige du modèle ;
- isoler l’exception Venus 2 tasses sur induction ;
- distinguer Moka Express, Venus, Moka Induction et Brikka ;
- signaler que les pièces détachées peuvent dépendre de la génération ;
- éviter toute promesse de meilleur goût fondée uniquement sur aluminium vs inox.

Ces éléments sont conservés, mais l’architecture actuelle sous-estime la largeur réelle de la gamme 2026.

## 3. Pourquoi `DEEP_REWRITE`

### 3.1 Gamme actuelle trop réduite

Le H2 « Quatre familles suffisent pour comprendre l’essentiel » est devenu trop simplificateur. La collection stovetop officielle consultée inclut aujourd’hui, au-delà de Moka Express / Venus / Moka Induction / Brikka :
- Mini Express ;
- Mini Express Induction ;
- Moka Exclusive ;
- Moka Exclusive Induction ;
- plusieurs déclinaisons visuelles et collaborations de Moka Express.

Toutes ne méritent pas une section autonome, mais Mini Express et Moka Exclusive Induction changent réellement la décision : service direct dans deux tasses pour la première, silhouette Moka Exclusive avec base induction pour la seconde.

### 3.2 Absence de distinction entre variante fonctionnelle et variante esthétique

Une page marque doit éviter de faire croire que chaque couleur ou édition constitue une nouvelle logique de cafetière. Les déclinaisons Black / Italia / collaborations peuvent rester dans la famille Moka Express lorsqu’aucune différence fonctionnelle documentée ne justifie une nouvelle branche de décision.

### 3.3 Manque d’un vrai arbre de décision de marque

La page actuelle liste des familles mais n’explique pas assez clairement les quatre bifurcations qui changent réellement l’achat :
1. induction directe ou non ;
2. moka classique ou service direct dans les tasses ;
3. préparation classique ou système Brikka ;
4. taille/volume effectivement préparé.

### 3.4 Écosystème de pièces à approfondir

La disponibilité de pièces est une vraie valeur Bialetti, mais elle doit être présentée avec sa limite : les pièces ne sont pas « Bialetti universelles ». Le catalogue officiel sépare notamment Moka Induction actuelle vs pré-2020 et Brikka 2016–2023 vs modèle 2024.

## 4. Cartographie de l’entité / gamme utile

Cette cartographie est éditoriale, pas un inventaire exhaustif de SKU.

### Famille A — moka classique en aluminium
- Moka Express ;
- Moka Express Black / Italia / éditions graphiques lorsque la construction reste celle de la famille ;
- Moka Exclusive classique : variante de design en aluminium, pas induction directe.

### Famille B — induction directe
- Venus : inox 18/10 ; exception documentée de la 2 tasses non compatible induction ;
- Moka Induction : chaudière bi-layer inox/aluminium + partie haute aluminium ;
- Moka Exclusive Induction : même logique de silhouette Exclusive, chaudière bi-layer ;
- Brikka Induction ;
- Mini Express Induction.

### Famille C — préparation Brikka
- Brikka classique : aluminium, valve spécifique, non induction directe ;
- Brikka Induction : construction adaptée à l’induction.

Le nom « Brikka » seul ne suffit donc pas à conclure sur la plaque.

### Famille D — service direct
- Mini Express : le café sort directement dans deux tasses placées sous les becs ;
- Mini Express Induction : même principe avec base bi-layer compatible induction.

## 5. Evidence ledger

| Claim / question | Source principale | Date vérifiée | Statut | Utilité éditoriale |
|---|---|---:|---|---|
| Bialetti a lancé la Moka Express en 1933 | Bialetti NZ — History & Heritage | 2026-09-15 | VERIFIED | contexte de marque, sans transformer la page en histoire corporate |
| La collection stovetop actuelle consultée comprend Moka Express, Venus, Moka Induction, Brikka Induction, Mini Express, Mini Express Induction et Moka Exclusive | Bialetti NZ — Stovetop Espresso | 2026-09-15 | VERIFIED | invalide la réduction à quatre familles comme représentation complète de la gamme actuelle |
| Moka Express classique en aluminium : pas induction directe | Bialetti NZ — Moka Express / FAQ | 2026-09-15 | VERIFIED | premier hard gate plaque |
| Moka Exclusive classique : aluminium, pas induction directe ; adaptateur possible | Bialetti NZ — Moka Exclusive | 2026-09-15 | VERIFIED | montre qu’Exclusive classique reste dans la logique aluminium |
| Moka Exclusive Induction : chaudière bi-layer inox extérieur / aluminium intérieur, compatible induction | Bialetti NZ — Moka Exclusive Induction | 2026-09-15 | VERIFIED | alternative induction conservant la silhouette Exclusive |
| Venus : inox 18/10 ; 4 et 6 tasses compatibles induction, 2 tasses explicitement exclue sur la fiche consultée | Bialetti NZ — Venus Induction Copper | 2026-09-15 | VERIFIED | exemple central de compatibilité dépendante de la taille |
| Moka Induction : base bi-layer inox/aluminium, haut aluminium, 2/4/6 tasses documentées sur la fiche consultée | Bialetti NZ — Moka Induction Bi-Layer | 2026-09-15 | VERIFIED | distingue la construction de Venus |
| Brikka classique : valve spécifique, aluminium, tailles 2 et 4 sur la fiche consultée | Bialetti NZ — Brikka | 2026-09-15 | VERIFIED | branche de préparation distincte |
| Brikka classique et Moka Express ne fonctionnent pas directement sur induction | Bialetti NZ — FAQ produit | 2026-09-15 | VERIFIED | empêche le raccourci « Brikka = induction » |
| Brikka Induction : base bi-layer compatible induction ; fiche actuelle consultée en 4 tasses | Bialetti NZ — Brikka Induction | 2026-09-15 | VERIFIED | variante fonctionnelle distincte |
| Mini Express sert directement le café dans deux tasses et n’est pas induction dans sa version classique | Bialetti NZ — Mini Express | 2026-09-15 | VERIFIED | nouvelle branche de décision absente de la page actuelle |
| Mini Express Induction sert directement dans deux tasses et utilise une base bi-layer compatible induction | Bialetti NZ — Mini Express Induction | 2026-09-15 | VERIFIED | même usage disponible sur induction |
| Bialetti rappelle qu’une « tasse » stovetop est une petite portion de type espresso et recommande une taille correspondant au service habituel | fiches Bialetti NZ | 2026-09-15 | VERIFIED | évite de choisir le modèle avant le volume |
| Sur induction, il faut aussi vérifier le diamètre accepté par le foyer | fiches Venus / Moka Induction / Moka Exclusive Induction | 2026-09-15 | VERIFIED | deuxième hard gate après le matériau/base |
| Bialetti commercialise joints/filtres et entonnoirs pour plusieurs familles | Bialetti NZ — Spare Parts | 2026-09-15 | VERIFIED | valeur d’écosystème après achat |
| Certaines pièces sont séparées par génération : Moka Induction pré-2020 ; Brikka 2016–2023 vs 2024 | Bialetti NZ — Spare Parts | 2026-09-15 | VERIFIED | montre pourquoi marque + taille ne suffisent pas toujours pour une pièce |
| Plusieurs références sont actuellement proposées par un retailer belge, dont Moka Express, Mini Express, Moka Exclusive Induction, Brikka Induction, Venus et Moka Induction | Printemps Belgique | 2026-09-15 | SUPPORTED / CHANNEL-SENSITIVE | confirme une présence commerciale locale, sans prétendre à une disponibilité permanente |

## 6. Sources prioritaires

- https://www.bialetti.co.nz/collections/stovetop-espresso
- https://www.bialetti.co.nz/products/moka-express
- https://www.bialetti.co.nz/products/bialetti-venus-induction-copper
- https://www.bialetti.co.nz/products/copy-of-bialetti-moka-induction-red
- https://www.bialetti.co.nz/products/bialetti-brikka-new
- https://www.bialetti.co.nz/products/bialetti-brikka-induction
- https://www.bialetti.co.nz/products/bialetti-mini-express-red-2-cup-set
- https://www.bialetti.co.nz/products/bialetti-mini-express-induction-2-cup-set
- https://www.bialetti.co.nz/products/bialetti-moka-exclusive-red
- https://www.bialetti.co.nz/collections/stainless-stovetop/products/bialetti-moka-exclusive-induction-grey
- https://www.bialetti.co.nz/collections/spare-parts
- https://www.bialetti.co.nz/pages/history-heritage

Source commerciale locale complémentaire :
- https://www.printemps.com/be/fr/bialetti-maison/cat0/Cafeti%C3%A8res

## 7. Sources indépendantes / evidence-based reviews

`evidence-based-reviews` : **N/A pour le draft prévu**.

La page ne doit pas noter la qualité en tasse, la facilité, la fiabilité ou l’ergonomie à partir de tests tiers. Les différences publiées peuvent être expliquées à partir de construction, compatibilité et documentation fabricant.

Si un futur draft introduit des jugements tels que « plus facile », « plus fiable », « meilleure crema », « plus tolérante » ou « plus durable », le gate devient obligatoire avec sources indépendantes suffisantes.

## 8. Unknowns / limites de preuve

- La gamme varie par marché ; la collection Bialetti NZ sert ici de source officielle structurée, pas de promesse que tous les SKU sont distribués en Belgique.
- Les coloris et collaborations évoluent vite et ne justifient pas un inventaire exhaustif sur un hub de marque.
- Ne pas attribuer une compatibilité induction à toute une famille sans vérifier la variante et la taille.
- Ne pas comparer le goût entre aluminium, inox, Moka Express, Venus ou Moka Induction sans protocole indépendant.
- Ne pas transformer la formulation marketing « espresso » de Bialetti en équivalence technique avec un espresso de machine.
- Ne pas affirmer qu’une pièce est compatible sur le seul critère « x tasses » : génération et famille peuvent changer la référence.

## 9. Valeur originale recherchée

Même sans aucun lien affilié, la page doit permettre de :
- réduire le catalogue à quelques décisions réellement discriminantes ;
- comprendre quelles références sont de simples variations visuelles et lesquelles changent le fonctionnement ou la plaque ;
- éliminer les mauvaises familles avant de lire les fiches modèles ;
- comprendre pourquoi taille, variante et génération comptent après l’achat pour les pièces ;
- savoir quand quitter le hub vers une fiche modèle, un comparatif ou un guide.

## 10. Architecture justifiée après recherche

Le plan ne part pas d’un nombre fixe de modèles.

1. **Réponse courte : quatre décisions avant le nom du modèle** — plaque, style de préparation, service direct ou chambre haute, volume.
2. **Carte de gamme par logique, pas par SKU** — classique aluminium / induction directe / Brikka / Mini Express.
3. **Induction : trois voies différentes** — Venus, construction bi-layer, adaptateur ; préciser l’exception Venus 2 et le diamètre du foyer.
4. **Brikka n’est pas une Moka Express « premium »** — système distinct, classique vs Induction ; pas de promesse gustative non prouvée.
5. **Mini Express change le service, pas seulement le look** — justification de sa présence dans le hub.
6. **Moka Exclusive et éditions : distinguer design de fonction** — éviter le faux catalogue.
7. **Taille avant finition** — handoff vers capacités sans dupliquer le guide.
8. **Pièces et générations** — vraie valeur d’écosystème et limite de compatibilité.
9. **Route vers la prochaine page** — fiches Moka Express / Venus / Moka Induction lorsque la famille est choisie ; comparatifs si le lecteur hésite encore entre marques.

Aucune FAQ, aucun quota de mots, aucun bloc « avantages/inconvénients » symétrique n’est imposé.

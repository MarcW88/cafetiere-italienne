# Capacity cluster — /capacites/

Date: 2026-09-13

## Audit

Les cinq URLs sont des placeholders : 2, 4, 6, 10 et 12 tasses. Décision éditoriale : `DEEP_REWRITE` pour les cinq, sans fusion. Chaque page doit répondre à une décision de volume différente sans devenir un classement produit.

## Méthode

Aucun workflow `/capacites/` dédié n’existe dans le repo. Utiliser les skills `search-intent`, `fact-check`, `affiliate-value`, `content-brief-authoring`, `content-and-copy`, `internal-linking-audit`, `anti-ai-slop`, `seo-onpage`, `seo-technical` et `editorial-qa`. Réutiliser seulement la logique JTBD utile de `usage-content-workflow` : circonstances → volume réel → contraintes → familles/alternatives, sans ranking produit.

## Fait structurant

Le nombre de « tasses » n’est pas un volume standard entre gammes. Bialetti indique que le mot cup renvoie à une petite tasse espresso, mais les volumes brassés documentés varient selon les modèles.

### Moka Express — source officielle/distributeur officiel
Source : https://www.bialetti.co.nz/products/moka-express
- 2 cups : ~90 ml ; base ~8.0 cm
- 4 cups : ~185 ml ; base ~9.5 cm
- 6 cups : ~250 ml ; base ~10.5 cm
- 9 cups : ~410 ml
- 12 cups : ~595 ml ; base ~13.5 cm
- la gamme listée ne comporte pas de 10 cups sur cette fiche actuelle.

### Venus
Source : https://www.bialetti.co.nz/products/bialetti-venus-induction-copper
- 2 cups : ~85 ml ; non induction
- 4 cups : ~170 ml ; induction
- 6 cups : ~235 ml ; induction

### Moka Induction
Source : https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black
- 2 cups : ~100 ml ; base ~9.5 cm ; induction
- 4 cups : ~150 ml ; base ~10.0 cm ; induction
- 6 cups : ~280 ml ; base ~11.5 cm ; induction
- toujours vérifier le diamètre minimal accepté par la plaque.

### Brikka
Source : https://www.bialetti.co.nz/products/bialetti-brikka-new
- 2 cups : ~90 ml
- 4 cups : ~150 ml

### Alessi 9090
Source : https://alessi.com/products/9090-espresso-coffee-maker
- gamme actuelle : 1, 3, 6 et 10 cups
- 1 cup : 7 cl ; diamètre 9.5 cm ; Alessi demande de vérifier une détection induction à partir de 90 mm.
- la version 10 cups est explicitement proposée ; source complémentaire : https://uk.alessi.com/products/9090-espresso-coffee-maker?variant=33749646147715

## Rôle unique par URL

- `2 tasses` : petit volume, une préparation courte ; piège induction et diamètres faibles.
- `4 tasses` : zone intermédiaire où plusieurs gammes convergent mais avec 150–185 ml réels.
- `6 tasses` : volume nettement plus généreux, ~235–280 ml selon les gammes principales.
- `10 tasses` : capacité moins standardisée ; ne pas laisser croire qu’une Moka Express actuelle existe forcément en 10 cups. Expliquer 9/10/12 selon marque/gamme.
- `12 tasses` : grande Moka Express, ~595 ml ; rappeler qu’une moka doit être choisie pour le volume habituel et utilisée à sa charge prévue.

## Garde-fous

- Ne jamais convertir automatiquement « X tasses » en « X personnes ».
- Ne pas inventer un ratio de ml universel par tasse.
- Ne pas transformer les pages en podium produit.
- Ne pas recommander de sous-remplir une grande moka pour un petit besoin.
- Induction : distinguer matériau magnétique et diamètre détectable.
- Conserver `noindex,follow` jusqu’à validation humaine et instruction explicite d’indexation.
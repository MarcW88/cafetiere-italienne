# Cafetière Italienne

Site éditorial et comparateur spécialisé dans les cafetières moka.

## Développement

Le site est statique et ne nécessite aucune dépendance.

```bash
npm run build
npm run check
SITE_BASE=/ npm run build
python3 -m http.server 8080
```

Les pages sont définies dans `scripts/build.mjs`. Le build crée chaque route sous la forme `route/index.html`, compatible avec GitHub Pages.
Le préfixe GitHub Pages `/cafetiere-italienne/` est utilisé par défaut ; `SITE_BASE=/` permet un aperçu local à la racine.

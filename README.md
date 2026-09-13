# Cafetière Italienne

Site éditorial et comparateur spécialisé dans les cafetières moka.

## Développement

Le site est statique et ne nécessite aucune dépendance.

```bash
npm run build
npm run check
SITE_BASE=/cafetiere-italienne/ npm run build
python3 -m http.server 8080
```

Les pages sont définies dans `scripts/build.mjs`. Le build crée chaque route sous la forme `route/index.html`, compatible avec GitHub Pages.
Le domaine personnalisé est servi à la racine `/`. `SITE_BASE=/cafetiere-italienne/` permet au besoin de produire une version pour l’URL de projet GitHub Pages.

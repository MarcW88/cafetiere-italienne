# Vérification visuelle avec Playwright

## Origine du workflow

Cette intégration reprend le workflow Playwright déjà utilisé dans `MarcW88/bloc-notes-numerique` et l’adapte aux familles de pages réellement présentes dans `cafetiere-italienne`. Elle ne crée pas un nouveau skill : elle exécute `site-design-review` et s’appuie sur les règles de `DESIGN.md` et les briques existantes d’`anti-ai-slop`.

## Installation

Depuis la racine du dépôt :

```bash
npm ci
npm run visual:install
```

La seconde commande télécharge la version de Chromium attendue par la version de Playwright verrouillée dans `package-lock.json`.

## Audits par catégorie

Les scopes disponibles sont :

```bash
npm run visual:home
npm run visual:brands
npm run visual:comparisons
npm run visual:models
npm run visual:capacities
npm run visual:guides
npm run visual:accessories
npm run visual:cafe-moka
npm run visual:trust
npm run visual:all
```

Chaque commande lance le site statique localement, visite toutes les routes du scope en desktop (1440 × 1000) et mobile (390 × 844), puis écrit dans `.artifacts/design-review/` :

- une capture pleine page par URL et viewport ;
- une capture du menu mobile ouvert pour la première route du scope lorsqu’un bouton `.menu-btn` est présent ;
- `report.json`, avec le statut HTTP, les erreurs console/page, les débordements horizontaux, la structure des titres, les tableaux, les contrôles accessibles, le focus clavier et les métriques spécifiques aux contenus éditoriaux lorsqu’elles existent.

Le script échoue uniquement sur des problèmes techniques objectivement bloquants pour la revue : route en erreur HTTP, erreur JavaScript de page ou débordement horizontal global. Les constats esthétiques restent à qualifier humainement avec `DESIGN.md` et `anti-ai-slop`.

Inspecter les captures avec un outil de lecture d’image. Le rapport automatique aide à trouver les pages à regarder en priorité, mais ne remplace pas le jugement visuel.

## Routes ponctuelles

Pour limiter le contrôle à une ou plusieurs pages :

```bash
node .agents/skills/site-design-review/scripts/run-visual-review.mjs \
  --route /guides/comment-choisir-cafetiere-italienne/ \
  --route /comparatifs/cafetiere-italienne-induction/
```

Pour contrôler un déploiement existant :

```bash
node .agents/skills/site-design-review/scripts/run-visual-review.mjs \
  --base-url https://cafetiere-italienne.be \
  --scope comparisons
```

Options utiles :

- `--scope brands|comparisons|models|capacities|guides|accessories|cafe-moka|trust|all` contrôle une famille ou toutes les familles ;
- `--base-url https://example.com` contrôle un déploiement existant sans lancer le serveur local ;
- `--output chemin` change le dossier des captures ;
- `--port 4173` change le port du serveur local.

## Ce que Playwright valide et ce qu’il ne valide pas

Playwright valide des faits observables : chargement, erreurs, overflow, comportement responsive, menu mobile, focus et structure de base.

Il ne décide pas qu’un design est « humain » ou « IA ». La revue qualitative doit ensuite confronter les captures à :

- `DESIGN.md` ;
- `.agents/skills/anti-ai-slop/protocols/output_design_review_gate.md` ;
- `.agents/skills/anti-ai-slop/checklists/global_ai_smell_checklist.md` ;
- `.agents/skills/anti-ai-slop/checklists/remediation_patterns.md`.

## Exécution dans GitHub

Le workflow `.github/workflows/visual-design-review.yml` lance les scopes sur les pull requests et les pushes `main` qui touchent les pages, styles, assets ou générateurs concernés. Les captures et rapports sont publiés pendant 14 jours dans les artifacts :

- `home-design-review` ;
- `brands-design-review` ;
- `comparisons-design-review` ;
- `models-design-review` ;
- `capacities-design-review` ;
- `guides-design-review` ;
- `accessories-design-review` ;
- `cafe-moka-design-review` ;
- `trust-design-review`.

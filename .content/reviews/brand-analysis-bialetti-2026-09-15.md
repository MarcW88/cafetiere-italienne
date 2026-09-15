# PUBLISH_REVIEW — `/marques/bialetti/`

## 1. Statut

- Date : 15 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Page type : `BRAND_HUB`
- Décision AUDIT : `DEEP_REWRITE`
- État : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/brand-content.mjs`
- Evidence brief : `.content/brands/bialetti.md`
- Publication : validation humaine explicite requise avant toute indexation

## 2. Search intent / rôle

Intent : commercial investigation / orientation dans une gamme de marque.

Le lecteur ne cherche pas encore une fiche technique précise ; il veut comprendre **quelle logique Bialetti regarder** selon sa plaque, sa quantité habituelle et le type de moka souhaité.

Frontières confirmées :
- caractéristiques détaillées Moka Express / Venus / Moka Induction → `/modeles/` ;
- meilleure cafetière entre marques → `/comparatifs/` ;
- quantité → `/capacites/` ;
- induction détaillée → Guide + comparatif induction ;
- pièces compatibles → Accessoires.

La page finale respecte ces frontières : elle réduit la gamme et route vers la prochaine décision sans devenir une fiche modèle ou un comparatif général.

## 3. Content audit / refresh

### Valeur conservée

- plaque et taille avant le nom du modèle ;
- exception Venus 2 tasses ;
- distinction Moka Express / Venus / Moka Induction / Brikka ;
- pièces détachées et générations ;
- absence de promesse gustative par matériau.

### Problèmes corrigés

- `Thin value` partiel : la gamme n’est plus ramenée arbitrairement à quatre familles ;
- `Weak structure` : la page est maintenant un arbre de décision de marque, pas une simple liste ;
- `Outdated / incomplete range context` : Mini Express et Moka Exclusive Induction sont intégrées lorsqu’elles changent réellement l’usage ;
- `Generic prose` : les descriptions sont rattachées aux bifurcations plaque / architecture / service / volume ;
- `Trust gap` : evidence ledger détaillé, sources datées, unknowns et limites persistés hors HTML.

Décision `DEEP_REWRITE` confirmée a posteriori : la valeur initiale a été récupérée, mais l’architecture fondamentale devait être reconstruite.

## 4. Fact-check / evidence

PASS.

Evidence brief détaillé construit avant rédaction puis recontrôlé après le draft.

Hiérarchie utilisée :
1. Bialetti officiel / distributeur officiel Bialetti NZ ;
2. source commerciale belge uniquement pour signaler une présence locale, jamais pour les specs ;
3. pas de tests indépendants utilisés pour inventer des jugements d’usage.

Claims principaux bornés dans le rendu final :
- Moka Express / Brikka classiques : pas induction directe ;
- Venus : inox 18/10, exception 2 tasses sur induction sur la fiche consultée ;
- Moka Induction : base bi-layer + haut aluminium ;
- Moka Exclusive classique vs Moka Exclusive Induction ;
- Mini Express classique vs Mini Express Induction ;
- Brikka classique vs Brikka Induction ;
- taille exprimée en petites tasses, volumes exacts variables selon famille ;
- diamètre du fond à vérifier sur induction ;
- pièces séparées par famille et parfois génération.

Le post-draft fact-check a aussi supprimé deux formulations trop éditoriales : la page ne parle plus de « ce que cette page prétend » ni de « page de marque ». La limite sur Brikka est désormais formulée directement en termes de niveau de preuve : la valve documente une différence de fonctionnement, pas une supériorité gustative universelle.

## 5. Evidence-based reviews

`N/A`.

Aucun verdict de qualité en tasse, de fiabilité, d’ergonomie ou de durabilité n’est attribué à partir d’un test tiers ou d’un faux hands-on.

Le texte refuse explicitement de transformer la valve Brikka en preuve automatique de meilleur goût, facilité ou crema supérieure. Si un futur contenu ajoute ce type de jugement, ce gate devra être réouvert.

## 6. Affiliate value

PASS.

La page reste utile si tous les liens affiliés disparaissent :
- réduction du catalogue en choix fonctionnels ;
- distinction variante esthétique vs variante fonctionnelle ;
- prévention des erreurs d’induction et de taille ;
- compatibilité des pièces expliquée jusqu’aux différences de générations ;
- orientation vers la bonne page suivante seulement une fois la logique de marque comprise.

Aucun CTA achat n’est nécessaire pour que la page remplisse sa fonction.

## 7. Architecture spécifique à Bialetti

PASS.

Architecture finale :
1. quatre décisions avant le modèle ;
2. gamme par logique d’usage ;
3. induction comme bifurcation principale ;
4. Brikka comme architecture distincte ;
5. Mini Express comme service direct ;
6. Exclusive / éditions : fonction vs design ;
7. taille réelle ;
8. pièces / générations ;
9. handoff vers fiches et comparatifs.

Chaque section correspond à une décision du lecteur et à des preuves du ledger. Aucun bloc n’existe uniquement pour reproduire une structure de page-type.

## 8. Cluster similarity

PASS.

Comparaison finale avec `/marques/alessi/` :
- Bialetti organise la décision par plaque, architecture de préparation, mode de service, volume et écosystème de pièces ;
- Alessi reste organisée autour des modèles de designers, matériaux, constructions et variantes induction.

Les composants visuels sont partagés, mais les rôles des sections et l’ordre des questions ne sont pas clonés. Aucun motif substantiel de structure industrialisée n’a été identifié dans cette passe.

## 9. Naturalité / humanizer / general-writing / anti-AI

PASS.

Contrôles finaux :
- pas de répétition mécanique « modèle = pour qui » ;
- tableau utilisé pour réduire une ambiguïté de gamme, pas comme catalogue exhaustif ;
- pas de blocs symétriques avantages / inconvénients ;
- pas de conclusion générique ;
- histoire de marque non utilisée comme remplissage ;
- métadiscours éditeur supprimé du rendu final ;
- pas de faux test ou de première personne expérientielle ;
- rythme varié entre décision, explication, exemples et handoffs.

## 10. Internal linking

PASS.

Les liens suivent la prochaine question logique :
- `/modeles/bialetti-moka-express/` ;
- `/modeles/bialetti-venus/` ;
- `/modeles/bialetti-moka-induction/` ;
- `/comparatifs/cafetiere-italienne-induction/` ;
- `/guides/cafetiere-italienne-induction-compatibilite/` ;
- `/capacites/` ;
- `/guides/dosage-cafe-cafetiere-italienne/` ;
- `/accessoires/pieces-detachees-bialetti/` ;
- `/comparatifs/meilleure-cafetiere-italienne/` pour sortir de la logique mono-marque.

Aucun quota de liens n’a été appliqué. `npm run check` confirme leur validité dans le dépôt.

## 11. SEO / technique

PASS.

Rendu final vérifié :
- title : `Bialetti : quelle cafetière italienne choisir ? | Cafetière Italienne` ;
- meta enrichie avec Moka Express, Venus, Moka Induction, Brikka, Mini Express et Exclusive ;
- un seul H1 cohérent ;
- canonical : `https://cafetiere-italienne.be/marques/bialetti/` ;
- robots : `noindex,follow` ;
- aucun placeholder ;
- sources externes visibles ;
- liens internes validés ;
- HTML reproductible depuis `scripts/brand-content.mjs` ;
- rendu visuel Brands capturé avec succès.

Gates exécutés sur le draft final :
- `Regenerate and quality-check Brand cluster` #13 — run `34959015161` — success ;
- `Validate Brand workflow` #9 — run `34959035303` — success ;
- `Visual design review` #214 — run `34959015305`, job `visual-pages (brands)` `104347871425` — success.

Le workflow final exécute deux couches machine :
- `validate_brands.py` pour l’état de publication et les garde-fous Brand déjà présents ;
- `validate_brand_quality.py` pour les blockers adaptés au site JS.

Le `Validate Brand workflow` reconstruit ensuite le site et confirme que le HTML Brand commité est reproductible.

### Incidents de mise en place documentés

Les premières tentatives de la nouvelle orchestration, runs Brand #9 puis #10, ont échoué sur le nouveau validateur parce qu’il cherchait littéralement `class="brand-layout"` alors que le HTML utilise plusieurs classes sur le même élément (`container template-grid brand-layout`).

Ce défaut du validateur a été corrigé en parsant les tokens de classes CSS. Le contenu n’a pas été déclaré PASS pendant ces échecs. Le run #11 a ensuite validé ce correctif ; le workflow a encore été renforcé avec les deux couches de validation avant le run final #13.

## 12. Trace skill par skill

| Skill / contrôle | Statut final | Note |
|---|---|---|
| `content-audit` | PASS | fonction autonome confirmée ; valeur historique récupérée |
| `search-intent` | PASS | BRAND_HUB / commercial investigation |
| `content-refresh` | PASS | deep rewrite justifié par gamme et architecture incomplètes |
| `fact-check` pré-draft | PASS | evidence ledger détaillé et daté |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel publié |
| `affiliate-value` | PASS | valeur réelle sans affiliation |
| architecture spécifique | PASS | plan fondé sur décisions + preuves |
| `content-and-copy` | PASS | réécriture dans `scripts/brand-content.mjs` |
| `fact-check` post-draft | PASS | claims recontrôlés ; métadiscours retiré |
| `humanizer` | PASS | prose utilisateur directe, sans pseudo-expérience |
| `general-writing` | PASS | progression décisionnelle lisible |
| `anti-ai-slop` | PASS | pas de squelette symétrique ni de remplissage générique |
| cluster similarity | PASS | architecture Bialetti distincte d’Alessi |
| `internal-linking-audit` | PASS | handoffs contextuels, liens CI valides |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable | règles pertinentes au HTML statique contrôlées |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-qa` | PASS | intention, preuves, valeur, naturel, technique et visuel validés |

## 13. Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Le test montre que le workflow Marques de `bloc-notes-numerique` peut être porté de façon crédible sur ce dépôt à condition de l’adapter à sa source de vérité JavaScript et à ses propres validateurs, plutôt que de copier seulement les fichiers de skills.

Aucun blocker éditorial, factuel, machine ou visuel restant n’a été identifié sur `/marques/bialetti/` dans cette passe.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite puis instruction distincte d’indexation.

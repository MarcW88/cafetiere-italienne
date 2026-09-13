# PUBLISH_REVIEW — Capacity size pages V2

Date : 2026-09-13
URLs : 2 / 4 / 6 / 12 tasses
Workflow : exact Bloc Notes comparison/shared stack + pinned `ponomr/thinking-toolkit` decision layer

## Status

**PASS — READY_FOR_HUMAN_VALIDATION**

Toutes les pages restent `noindex,follow`. Ce PASS ne vaut ni instruction d'indexation ni activation de monétisation.

## Shared gates

- `SEO_CONTENT_AUDIT`: PASS — chaque page porte désormais un problème de décision distinct.
- `SEO_KEYWORD / INTENT`: PASS — intention primaire = taille/capacité, jamais ranking produit.
- `THINKING_TOOLKIT`: PASS — Hard Choice Model appliqué ; Decision Matrix NOT_REQUIRED sur les quatre pages.
- `FACT_CHECK`: PASS — claims principaux vérifiés sur sources fabricants au 13 septembre 2026.
- `EVIDENCE_BASED_REVIEWS`: NOT_REQUIRED — aucun jugement de goût, ergonomie, durabilité ou performance relative.
- `AFFILIATE_VALUE`: PASS — aucune carte produit, sélection dictée par la commission ou CTA marchand.
- `CONTENT_BRIEF_AUTHORING`: PASS — quatre briefs V2 existent après evidence briefs et decision artifacts.
- `CONTENT_AND_COPY`: PASS — contenu bespoke, sans fiches produits clonées.
- `HUMANIZER / GENERAL_WRITING`: PASS — claims attribués, conditionnels et concrets ; pas de ton catalogue.
- `ANTI_AI_SLOP`: PASS — chaque page possède un angle, une progression et des blocs décisionnels propres.
- `SEO_ONPAGE`: PASS — title/H1/meta/canonical uniques ; pas de quotas artificiels.
- `SEO_TECHNICAL`: PASS — build, liens, canonical et robots contrôlés.
- `SEO_BEST_PRACTICES`: PASS — pas de keyword stuffing, schema/review inventé ou fausse précision.
- `GEO_AEO`: PASS — réponse answer-first, entités explicites, unités, type de métrique et limites proches des claims.
- `INTERNAL_LINKING`: PASS — tailles adjacentes + handoff `/comparatifs/` dès que la décision devient produit.
- `EDITORIAL_QA`: PASS — aucun faux hands-on, aucune conversion tasses/personnes, aucun podium déguisé.

## Page-specific review

### 2 tasses — PASS
Décision propre : ~85–100 ml + contrainte de détection induction. La page introduit le palier 3 tasses (~130 ml) lorsque 100 ml est insuffisant, plutôt que de forcer immédiatement 4 tasses. Les preuves sont multi-marques (Bialetti, Cecotec, Barazzoni) et aucun modèle n'est déclaré gagnant.

### 4 tasses — PASS
Décision propre : la même étiquette couvre ~150–200 ml sur les références actuelles vérifiées. Les ~50 ml d'écart deviennent le cœur du raisonnement. La plaque/diamètre reste un filtre secondaire documenté ; le choix produit est renvoyé aux Comparatifs.

### 6 tasses — PASS
Décision propre : ~235–300 ml et plusieurs types de métriques publiées. La page distingue explicitement volume de café préparé et capacité/contenance, puis arbitre 4 → 6 → 9/10 selon le volume réel plutôt que les personnes.

### 12 tasses — PASS
Décision propre : zone ~595–600 ml sur les références chiffrées, avec correction du biais Bialetti-only. Une 12 tasses peut être compatible induction selon le modèle ; les dimensions 28,5 cm / base 13,5 cm restent explicitement propres à Moka Express 12. Arbitrage 9 → 10 → 12 par volume.

### 10 tasses — KEEP benchmark
Rejouée dans la décision de cluster mais non réécrite dans cette branche. Le benchmark déjà validé reste cohérent avec la nouvelle couche `thinking-toolkit` : zone ~460–500 ml, distinction métriques, arbitrage 9/10/12, handoff produit vers Comparatifs.

## Machine validation

### Initial run
Run `34774616475` :
- `npm run build`: PASS
- `npm run check`: PASS — 49 pages, aucun lien interne cassé
- `python3 validate_capacities.py`: PASS
- boundary guard: faux positif uniquement sur la phrase négative `pas une « meilleure 2 tasses »`.

### Corrected runs
Runs `34774666962` et `34774703519` : **SUCCESS**.

Contrôles passés :
- build complet avec overrides reviewés ;
- check global ;
- `validate_capacities.py` ;
- `noindex,follow` sur 2/4/6/12 ;
- présence des sources et handoffs `/comparatifs/` ;
- absence de faux hands-on, Top 5, scoring ou ranking ;
- marqueurs de volumes propres à chaque page ;
- persistance des quatre HTML générés.

Le workflow temporaire de génération a ensuite été retiré de la branche ; le comportement permanent passe désormais par `npm run build` et `scripts/apply-capacity-size-pages-reviewed.mjs`.

## Publication

`KEEP_NOINDEX`

Aucune indexation automatique. Aucune monétisation automatique. Validation humaine requise avant toute instruction d'indexation.

# PUBLISH_REVIEW — /capacites/

Date : 2026-09-13
Workflow : Capacity adapter over exact Bloc Notes Guide workflow
Evidence brief : `.content/capacities/evidence-capacites-hub-2026-09-13.md`
Content brief : `.content/briefs/capacites-hub.md`
Reviewed source : `scripts/capacity-hub-reviewed.mjs`
Rendered page : `capacites/index.html`

## Résultat

**PASS — READY_FOR_HUMAN_VALIDATION**

La page reste `noindex,follow`. Ce PASS n'autorise ni indexation ni publication automatique sans validation humaine explicite.

## Gates

### FACT_CHECK: PASS

- Moka Express : tailles et volumes repris de la fiche Bialetti actuelle.
- Venus : 2/4/6 tasses et volumes repris de la fiche Bialetti actuelle.
- Moka Induction : 2/4/6 tasses, volumes et avertissement de diamètre repris de Bialetti.
- CRISTEL Torino : 6=300 ml, 10=500 ml et convention de tasse expresso 5 cl repris de la fiche officielle.
- Alessi 9090 : gamme 1/3/6/10 et 10 tasses ≈500 ml repris des fiches officielles.
- Les volumes Bialetti restent explicitement qualifiés d'approximatifs.
- Aucun prix ni disponibilité n'est utilisé dans le raisonnement.

### EVIDENCE_BASED_REVIEWS: NOT_REQUIRED

La page n'émet pas de jugement expérientiel sur la qualité de préparation, l'ergonomie, la durabilité ou les performances comparées. Les produits servent uniquement d'exemples factuels de volumes/gammes. Le skill reste conditionnel conformément au workflow Guide et n'est pas simulé artificiellement.

### AFFILIATION: PASS

- La page est utile sans lien marchand.
- Aucune carte produit ou CTA marchand.
- Aucun modèle n'est favorisé selon une commission ou une disponibilité affiliée.
- Les handoffs produits vont vers les workflows Comparatifs lorsque l'intention devient transactionnelle.

### CONTENT_BRIEF: PASS

Le draft suit le brief construit après le registre de preuves. Le rôle du hub est distinct des pages 2/4/6/10/12 et des comparatifs.

### CONTENT_AND_COPY: PASS

La réponse centrale arrive immédiatement : choisir en ml avant le nombre de personnes. La page explique les conséquences des écarts de volume au lieu d'aligner des fiches produits.

### HUMANIZER / GENERAL_WRITING: PASS

Relecture intégrale : formulations naturelles, pas de ton de catalogue, pas de superlatifs artificiels, pas de faux hands-on, pas d'affirmation de préférence utilisateur universelle.

### ANTI_AI_SLOP: PASS

- Architecture spécifique au hub : repères en ml → démonstration de variabilité → trois questions de décision → paliers non universels → handoffs.
- Pas de structure répétée `avantages/inconvénients/pour qui`.
- Pas de cinq fiches taille clonées.
- Pas de conclusion générique ou de répétition du même verdict sous plusieurs formes.

### SEO: PASS

- Title : `Taille cafetière italienne : 2, 4, 6, 10 ou 12 tasses ?`.
- H1 : `Quelle taille de cafetière italienne choisir ?`.
- Meta description centrée sur volume réel + induction.
- Canonical : `https://cafetiere-italienne.be/capacites/`.
- Robots : `noindex,follow` conservé.
- Intention CHOICE/EXPLAINER satisfaite sans basculer vers un ranking produit.

### GEO_AEO: PASS

- Réponse centrale autonome dans l'introduction.
- Entités qualifiées par gamme : Moka Express, Venus, Moka Induction, CRISTEL Torino, Alessi 9090.
- Valeurs extractibles avec unités et contexte.
- La phrase centrale `« 4 tasses » peut vouloir dire 150, 170 ou 185 ml` est immédiatement expliquée et attribuable aux gammes nommées.
- Sources visibles et proches du raisonnement.
- Pas de FAQ artificielle ni de schema inventé.

### INTERNAL_LINKING: PASS

Handoffs vérifiés vers :
- `/capacites/cafetiere-italienne-2-tasses/`
- `/capacites/cafetiere-italienne-4-tasses/`
- `/capacites/cafetiere-italienne-6-tasses/`
- `/capacites/cafetiere-italienne-10-tasses/`
- `/capacites/cafetiere-italienne-12-tasses/`
- `/comparatifs/cafetiere-italienne-induction/`
- `/guides/cafetiere-italienne-induction-compatibilite/`
- `/comparatifs/`

Les liens servent une prochaine question logique ; aucun quota artificiel.

### TECHNICAL: PASS

CI `Test reviewed capacity hub` :
- `npm run build` PASS
- `npm run check` PASS
- `python3 validate_capacities.py` PASS
- validation des marqueurs/boundaries du hub PASS

Le build général applique ensuite `scripts/apply-capacity-hub-reviewed.mjs`, ce qui empêche le générateur historique d'écraser la version reviewée.

### EDITORIAL_QA: PASS

- Aucun `X tasses = Y personnes`.
- Aucun classement produit déguisé.
- La page explique explicitement que les tailles de navigation du site ne constituent pas une norme universelle.
- Le cas 9 vs 10 tasses montre pourquoi le volume prime sur le libellé.
- Les limites et incertitudes sont visibles.
- La page ne cannibalise pas le comparatif induction : elle lui transmet la décision lorsque la plaque devient le filtre principal.

## Risques résiduels / prochains travaux

- Les pages enfants 2/4/6/10/12 n'ont pas encore été repassées dans ce nouveau workflow ; leurs anciens reviews ne valent pas validation du nouveau standard.
- La page 10 tasses nécessite un DEEP_REWRITE séparé, car le marché actuel contient davantage de vraies références 10 tasses/500 ml que le contenu historique ne le laisse entendre.
- Avant indexation du hub, faire une validation humaine du rendu et terminer au minimum la cohérence éditoriale des pages enfants principales.

## Image éditoriale

`NOT_NEEDED` pour ce test : le cœur de la décision est un tableau de volumes et des règles de choix. Une image générée de cafetières précises risquerait d'introduire des variantes visuelles inexactes sans améliorer la décision.

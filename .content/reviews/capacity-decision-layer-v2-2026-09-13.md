# PUBLISH_REVIEW — Capacity Decision Layer V2

Date : 2026-09-13
Scope : `/capacites/` + `/capacites/cafetiere-italienne-10-tasses/` comme benchmarks méthodologiques

## Résultat

**PASS — READY_FOR_HUMAN_VALIDATION**

Ce PASS valide la migration méthodologique. Il ne retire pas `noindex,follow` et n'autorise pas l'indexation automatique.

## Architecture validée

### Recherche / diagnostic

Réutilisation byte-for-byte du snapshot :
- `MarcW88/bloc-notes-numerique@534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`
- `comparison-analysis-workflow`
- `comparison-content-workflow`
- 16 skills partagés associés : SEO audit/keyword, JTBD, evidence, fact-check, affiliate value, brief, copy, linking, humanizer, general-writing, anti-AI-slop, SEO on-page/technical/best-practices, editorial QA.

Le workflow de parité a vérifié les répertoires exacts contre le commit épinglé.

### Décision

Upstream :
- `ponomr/thinking-toolkit`
- version `1.0.0`
- commit `1e4c78dd0a0252ca7dab60e6fb3ce9e4404d3328`

Fichiers vendored et contrôlés byte-for-byte :
- `SKILL.md`
- `VERSION`
- `references/catalog.md`
- `references/hard-choice-model.md`
- `references/decision-matrix.md`

### Custom

Le custom est limité à :
- orchestration ;
- route mapping `/capacites/` ;
- normalisation de métriques déjà sourcées ;
- frontières/handoffs ;
- intégration GEO/AEO ;
- publication state ;
- scripts de rendu du site.

Le custom est explicitement interdit pour : SEO methodology, intent methodology, evidence, fact-check, affiliation, décision, scoring, writing, humanization, anti-AI-slop et editorial QA.

## Replay — hub `/capacites/`

Decision artifact : `.content/capacities/decisions/capacites-hub.md`

- `Hard Choice Model: APPLIED`
- impact : low
- comparability : easy après normalisation vers des volumes sourcés
- résultat : règle simple `volume → contraintes dures → palier → handoff produit`
- `Decision Matrix: NOT_REQUIRED`

Le modèle upstream confirme qu'un scoring ajouterait de la fausse sophistication. Aucun changement HTML n'est donc nécessaire.

Brief V2 construit après la décision : `.content/briefs/capacites-hub-decision-v2.md`.

## Replay — `/capacites/cafetiere-italienne-10-tasses/`

Decision artifact : `.content/capacities/decisions/cafetiere-italienne-10-tasses.md`

- `Hard Choice Model: APPLIED`
- impact : low
- comparability : easy au niveau capacité
- critère principal : volume documenté
- contraintes secondaires éliminatoires : métrique, plaque, diamètre, variante exacte
- `Decision Matrix: NOT_REQUIRED`

La règle ~410 ml / ~460–500 ml / ~595 ml reste cohérente comme décision de capacité. Le choix d'un modèle précis reste hors scope et passe à `/comparatifs/`.

Brief V2 construit après la décision : `.content/briefs/cafetiere-italienne-10-tasses-decision-v2.md`.

## Gates post-draft conservés

### FACT_CHECK — PASS

Les preuves existantes restent le source-of-truth. Le skill de décision ne crée aucun nouveau fait.

### EVIDENCE_BASED_REVIEWS — NOT_REQUIRED sur ces deux benchmarks

Aucun claim expérientiel produit n'est nécessaire. Le skill reste disponible et obligatoire si un futur contenu introduit un jugement expérientiel.

### AFFILIATE_VALUE — PASS

Aucun choix de taille ou exemple n'est déterminé par la monétisation. Les pages restent utiles sans liens affiliés.

### CONTENT_BRIEF_AUTHORING — PASS

Les V2 briefs consomment explicitement les decision artifacts, donc la décision précède désormais formellement le brief.

### CONTENT_AND_COPY — PASS

Aucune réécriture cosmétique : le nouveau modèle confirme les décisions déjà exprimées dans le contenu.

### INTERNAL_LINKING — PASS

La frontière capacité → choix produit reste un handoff vers `/comparatifs/`.

### HUMANIZER / GENERAL_WRITING — PASS

Pas de changement requis : aucune nouvelle prose publiée n'a été introduite par la migration.

### ANTI_AI_SLOP — PASS

Le nouveau skill réduit même le risque de faux scoring : la matrice n'est utilisée que si l'upstream la juge nécessaire.

### SEO / TECHNICAL / BEST_PRACTICES — PASS

Aucune régression title/H1/canonical/robots. Les pages restent `noindex,follow`.

### GEO_AEO — PASS

La décision reste answer-first, attribuée aux variantes/gammes et fondée sur des unités explicites. Aucun changement de contenu n'est requis.

### EDITORIAL_QA — PASS

Aucun ranking produit, faux hands-on ou conversion `tasses = personnes` n'a été introduit.

## Validation machine

### Upstream parity

Run `34773586395` — **SUCCESS**

Passes :
- pinned Bloc Notes checkout ;
- pinned thinking-toolkit checkout ;
- 80/20 contract + upstream pins ;
- exact Bloc Notes comparison/shared skill directories ;
- exact thinking-toolkit decision files ;
- custom methodology exclusions ;
- traceability of decision artifacts.

### Capacity decision layer V2

Run `34773698105` — **SUCCESS**

Passes :
- `npm run build` ;
- `npm run check` ;
- `python3 validate_capacities.py` ;
- decision artifacts before V2 briefs ;
- capacity/comparison boundary + noindex ;
- **zero HTML churn** on the hub and 10-tasses benchmark.

## Conclusion

La nouvelle architecture est plus stricte que la V1 :

`Bloc Notes exact comparison/shared stack → evidence/fact-check → ponomr thinking-toolkit → V2 brief → writing/post-draft gates → SEO/GEO/anti-slop/QA`.

Les scripts custom de capacité restent des intégrateurs de rendu ; ils ne possèdent plus la logique de décision.

**PASS — READY_FOR_HUMAN_VALIDATION**

# Model analysis — Alessi 9090

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

La review est structurée pour les deux gates obligatoires :

- `validate_models.py` — rendu, canonical, robots, sources, liens et blockers machine ;
- `validate_model_workflow.py` — registry, record, artefacts v2, markers sémantiques et fraîcheur Git de la review.

Le CI constitue l'autorité machine finale. La page reste `noindex,follow`.

## Artifact gate

PASS — le record v2 pointe vers research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, post-draft fact-check et review. Le registry et l'URL sont alignés. Le fichier source suivi est `scripts/apply-model-core-reviewed.mjs`.

## Intent / JTBD gate

PASS — le JTBD ne consiste pas à “acheter une icône”, mais à savoir si le premium correspond à des différences mécaniques et matérielles réellement valorisées, tout en choisissant une taille compatible avec la plaque. Push/Pull/Anxiety/Habit, Big Hire/Little Hire et critères de décision sont persistés.

## Evidence / contradiction gate

PASS — inox 18/10, fond magnétique, fermeture à levier, base, bec, fabrication, tailles, pièces et édition CP reposent sur les sources Alessi. La contradiction 1979/1980 reste qualifiée au lieu d'être lissée. Les conversions impériales restent présentées comme approximatives.

## Brief gate

PASS — le brief v2 dérive du decision artifact et du ledger : query/cluster, intent, JTBD, décision, scope, critères, preuves/entities, contradictions, handoffs, anti-patterns, angle, success criteria et outline propre sont persistés.

## Post-draft fact-check

PASS — le contrôle confirme les dimensions/volumes utiles, le seuil induction de la 1 tasse, la logique de pièces et la distinction entre 9090 standard et édition CP. Aucun prestige n'est transformé en performance café et aucun faux hands-on n'est utilisé.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Design Richard Sapper | `USED` | cadrage produit sans prestige creux |
| Inox 18/10 | `USED` | construction |
| Fond magnétique induction | `USED` | induction |
| Fermeture à levier | `USED` | différence fonctionnelle |
| Base élargie | `USED` | différence fonctionnelle |
| Bec anti-goutte | `USED` | différence fonctionnelle |
| Plus de 120 étapes de fabrication | `USED` | justification documentée du premium |
| Tailles 1 / 3 / 6 / 10 | `USED` | matrice tailles |
| 1 tasse ≈ 70 ml / 9,5 cm | `USED` | matrice + induction |
| Seuil de détection 90 mm à vérifier pour la 1 tasse | `USED` | hard gate dédié |
| 3 tasses ≈ 150 ml / 11 cm | `USED` | matrice |
| 6 tasses ≈ 300 ml / 12,5 cm | `USED` | matrice, conversion qualifiée |
| 10 tasses ≈ 500 ml / 14,5 cm | `USED` | matrice, conversion qualifiée |
| Contradiction officielle 1979 / 1980 | `USED` | formulation prudente autour de 1980 |
| Joints spécifiques 1 / 3 / 6 / 10 | `USED` | pièces |
| Funnel 6 tasses / microfiltre / réducteur / funnel 10 tasses | `USED` | pièces |
| Édition 9090/3 CP 2026 | `USED` | variante actuelle distincte |
| PVD noir / 3 tasses / 15 cl / 999 pièces | `USED` | variante CP |
| Capacités générales | `HANDOFF` | `/capacites/` |
| Induction générale | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Univers Alessi | `HANDOFF` | `/marques/alessi/` |
| Comparatif design | `HANDOFF` | `/comparatifs/cafetiere-italienne-design/` |
| Comparatif inox | `HANDOFF` | `/comparatifs/cafetiere-italienne-inox/` |
| Compasso d'Oro / MoMA comme preuve de performance | `EXCLUDED` | contexte culturel, pas performance café |
| Prix figé | `EXCLUDED` | volatil |
| “meilleur café” grâce au design / inox | `EXCLUDED` | non démontré |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — la page distingue valeur fonctionnelle et prestige, donne des repères de taille/diamètre, traite le cas induction 1 tasse et documente la logique des pièces. Elle reste utile sans lien affilié.

## Trust / SEO / technical

PASS éditorial — aucun faux test, aucun prestige transformé en qualité café, pas de prix figé et pas de date historique faussement absolutisée. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review est commitée après ses artefacts v2, son record, son fichier source, le registry et les inputs méthodologiques MODEL v2. Toute modification ultérieure doit rendre le PASS stale via `validate_model_workflow.py`.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite d'indexer.

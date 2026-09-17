# Model analysis — Bialetti Venus

Date : 2026-09-17
Workflow version : 2
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gates

La review est structurée pour les deux gates obligatoires :

- `validate_models.py` — rendu, canonical, robots, sources, liens et blockers machine ;
- `validate_model_workflow.py` — registry, record, artefacts v2, markers sémantiques et fraîcheur Git de la review.

Le CI constitue l'autorité machine finale. La page doit rester `noindex,follow`.

## Artifact gate

PASS — le record v2 pointe vers : research, PAGE_AUDIT, evidence packet, evidence ledger, decision artifact, content brief, post-draft fact-check et cette review. Le registry produit contient la même identité canonique et la même URL.

Les fichiers source suivis sont :

- `scripts/apply-model-bialetti-venus-reviewed.mjs` ;
- `scripts/apply-model-bialetti-venus-v2-reviewed.mjs`.

## Intent / JTBD gate

PASS — le JTBD n'est plus “acheter une Venus”, mais choisir une moka dont **volume, taille et compatibilité réelle avec la plaque** correspondent à la situation. Push/Pull/Anxiety/Habit, Big Hire/Little Hire et critères `MUST_HAVE / HIGH / CONDITIONAL / CONTRAINDICATION` sont persistés dans le decision artifact.

Le principal risque d'achat reste double : choisir une taille qui ne donne pas le volume attendu ou supposer que le nom Venus suffit à garantir l'induction.

## Evidence / contradiction gate

PASS — les caractéristiques centrales restent fondées d'abord sur Bialetti. Deux contradictions/frictions sont explicitement résolues :

- anciennes mentions lave-vaisselle vs documentation actuelle → suivre la documentation actuelle de la référence ;
- utilisateurs rapportant parfois une détection de la 2 tasses sur leur foyer vs compatibilité officielle → conserver la règle officielle comme règle d'achat.

Les signaux communautaires sont `OBSERVED` comme révélateurs d'anxiété, jamais promus en specs.

## Brief gate

PASS — le brief v2 est dérivé du decision artifact et du ledger. Il fixe la query/cluster, l'intent, le reader/JTBD, la décision, le scope, les critères, les preuves requises, les contradictions, les handoffs, les anti-patterns, l'angle, les critères de succès et un outline propre à Venus.

L'architecture n'est donc pas un template PRODUCT réutilisé mécaniquement.

## Post-draft fact-check

PASS — le contrôle v2 confirme :

- 2 tasses ≈ 85 ml, non induction officiellement ;
- 4 tasses ≈ 170 ml et 6 tasses ≈ 235 ml avec compatibilité induction documentée ;
- les volumes sont des repères approximatifs de comparaison, pas une promesse au millilitre près ;
- la détection d'un petit fond par un foyer particulier ne remplace pas la compatibilité fabricant ;
- la 10 tasses reste qualifiée selon marché ;
- pièces et entretien ne sont pas généralisés abusivement ;
- aucun claim `inox = meilleur goût` ni faux hands-on.

## Research-to-draft coverage

| Élément décisionnel | Statut | Consommation dans le draft |
|---|---|---|
| Construction inox 18/10 | `USED` | section construction, sans claim gustatif |
| 2 tasses ≈ 85 ml | `USED` | matrice tailles / volumes |
| 2 tasses non compatible induction officiellement | `USED` | hard gate d'ouverture + matrice + clarification v2 |
| Cas individuels de détection de la 2 tasses | `USED` | clarification v2 comme exception anecdotique, pas comme compatibilité |
| 4 tasses ≈ 170 ml / base ≈ 9,5 cm / induction | `USED` | matrice + détection induction |
| 6 tasses ≈ 235 ml / base ≈ 10,5 cm / induction | `USED` | matrice + détection induction |
| Volume documenté = repère approximatif | `USED` | clarification v2 dédiée |
| 10 tasses ≈ 460–500 ml selon marché | `USED` | matrice qualifiée marché |
| Diamètre minimal détecté par la plaque | `USED` | hard gate distinct de la compatibilité matériau |
| “Tasses” moka ≠ mugs | `USED` | section tailles / volumes |
| Choisir la moka pour sa quantité habituelle | `USED` | conséquence pratique après la matrice |
| Entretien actuel : lavage manuel / pas lave-vaisselle | `USED` | section entretien |
| Anciennes fiches “dishwasher safe” contradictoires | `USED` | contradiction explicitée et arbitrée |
| Entonnoirs Venus/Musa/Kitty par taille | `USED` | section pièces |
| Joints et filtres Venus/Musa/Kitty par taille | `USED` | section pièces |
| Moka Induction = base bi-layer + haut aluminium | `USED` | comparaison modèle frère |
| Volumes Moka Induction différents | `USED` | comparaison modèle frère |
| Guide détaillé des capacités | `HANDOFF` | `/capacites/` |
| Dosage générique moka | `HANDOFF` | `/guides/dosage-cafe-cafetiere-italienne/` |
| Mouture / réglage de préparation | `HANDOFF` | `/guides/mouture-cafetiere-italienne/` |
| Vérification générale de l'induction | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Aluminium vs inox en général | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Nettoyage générique | `HANDOFF` | `/guides/nettoyer-cafetiere-italienne/` |
| Couleurs / finitions décoratives | `EXCLUDED` | pas de différence fonctionnelle documentée nécessaire ici |
| Prix figé | `EXCLUDED` | volatil et non nécessaire au rôle PRODUCT |
| Verdict gustatif depuis les avis | `EXCLUDED` | preuve insuffisante et hors rôle documentaire |

Aucun élément décisionnel n'est en statut `MISSING`.

## Affiliate value / cluster gate

PASS — la page reste utile sans affiliation : elle évite l'achat d'une 2 tasses pour une induction garantie, remet les “tasses” en contexte, traite le diamètre du foyer, qualifie le volume nominal, sécurise l'achat de pièces et distingue Venus de Moka Induction sans absorber le comparatif général.

## Trust / SEO / technical

PASS éditorial — aucun faux hands-on, pas de prix figé, pas de raccourci matériau = goût, pas de métadiscours SEO. Title/H1/canonical/robots et maillage restent contrôlés par `validate_models.py`.

## Freshness gate

Cette review v2 est volontairement commitée après ses artefacts, ses deux fichiers source, le registry et les inputs méthodologiques MODEL v2. Toute modification ultérieure d'un de ces inputs doit rendre ce PASS stale via `validate_model_workflow.py`.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow`. Indexation uniquement après validation humaine explicite puis instruction séparée de la rendre indexable.

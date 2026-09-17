# Model workflow — skills inventory

Date : 2026-09-17
Objectif : retrouver la profondeur PRODUCT de Bloc Notes sans dupliquer les méthodologies génériques.

## Skills réutilisés

| Étape | Skill existant | Rôle dans MODEL v2 |
|---|---|---|
| Audit | `content-audit`, `seo-content-audit` | récupération, obsolescence, duplication, rôle autonome |
| Intent | `seo-keyword`, `search-intent` | requête, décision, SERP, handoffs |
| Besoin | `jobs-to-be-done` | circonstances, forces de changement, Big/Little Hire, critères |
| Preuve | `fact-check` | claim/evidence/status |
| Expérience tierce | `evidence-based-reviews` | attribuer les jugements et éviter le faux hands-on |
| Valeur | `affiliate-value` | utilité sans affiliation et raisons de ne pas acheter |
| Brief | `content-brief-authoring` | transformer décision + preuve en brief |
| Rédaction | `content-and-copy` | structure et prose au service de la décision |
| Refresh | `content-refresh` | conserver/corriger plutôt que réécrire mécaniquement |
| Style | `humanizer`, `general-writing`, `anti-ai-slop` | finition sans padding ni pattern IA |
| Maillage | `internal-linking-audit` | prochaines questions logiques |
| SEO | `seo-onpage`, `seo-technical`, `seo-best-practices` | on-page et technique |
| Visuel | `editorial-image-planner`, `site-design-review` | image/structure seulement quand utile |
| QA | `editorial-qa` | contrôle final éditorial |

## Couche MODEL custom

La couche custom reste limitée à :

- orchestration de la chaîne ;
- identité modèle / variante / génération ;
- taille, volume, plaque, diamètre induction, pièces et entretien quand décisionnels ;
- artefacts persistants propres au cluster ;
- publication `noindex,follow` et validateurs de cohérence.

Elle ne redéfinit ni JTBD, ni fact-check, ni SEO, ni méthodologie de review, ni règles génériques de rédaction.

## Exception volontaire

Le skill local `natural-writing` n'est pas ajouté à la chaîne obligatoire : son adaptation locale cible le néerlandais, alors que les pages `/modeles/` sont en français. Les passes FR restent gérées par `humanizer`, `general-writing` et `anti-ai-slop`.

## Ratio cible

- skills existants : `>=80 %` de la méthodologie ;
- custom MODEL : `<=20 %`, uniquement lorsque le contexte moka l'exige.

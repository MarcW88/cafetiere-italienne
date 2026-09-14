# AUDIT — mouture-cafetiere-italienne

- URL : `/guides/mouture-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `LIGHT_UPDATE` → strict skill-by-skill review
- Décision actuelle : `LIGHT_UPDATE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` à conserver
- Source de vérité : `scripts/guide-content-brew-basics.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `EXPLAINER / HOW_TO`.

Tâche lecteur : choisir une mouture de départ pour moka, la traduire sur son propre moulin, diagnostiquer prudemment un réglage trop fin ou trop grossier et savoir quand le problème n’est plus seulement la mouture.

Frontières :
- dosage / remplissage → `/guides/dosage-cafe-cafetiere-italienne/` ;
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/` ;
- méthode complète → `/guides/comment-utiliser-cafetiere-italienne/` ;
- amertume / brûlé → `/guides/cafetiere-italienne-cafe-amer-brule/` ;
- fuite / soupape → `/guides/cafetiere-italienne-fuite-vapeur/`.

La page existante était déjà solide. Un nouveau `DEEP_REWRITE` n’était pas justifié. Le `LIGHT_UPDATE` renforce surtout la preuve fabricant, le diagnostic, le café prémoulu et la frontière sécurité.

## 2. Architecture et profondeur utile

Structure finale :
1. réponse immédiate en quatre repères ;
2. preuves fabricant ;
3. pourquoi il n’existe pas de cran universel ;
4. diagnostic trop fin / trop grossier ;
5. méthode d’ajustement sur moulin ;
6. café prémoulu ;
7. ne pas tasser ;
8. stop sécurité / passage au dépannage ;
9. amertume / brûlé ;
10. sources.

La page reste centrée sur la granulométrie et n’absorbe ni le dosage, ni tout le dépannage mécanique.

## 3. Preuves et factualité

Claims vérifiés le 14 septembre 2026 :
- Bialetti NZ — Moka Express : recommandation `medium-fine`, granuleuse au toucher et non poudreuse ;
- Bialetti NZ — moulin manuel : 1–2 pour espresso et 2–3 pour Moka Express sur ce moulin précis ;
- Bialetti NZ — Coffee Beans / FAQ : les moka demandent une mouture medium-fine, plus fine que drip et plus grossière qu’espresso ; les cafés Bialetti prémoulus moka sont moulus à la consistance prévue pour ce mode de préparation ;
- Bialetti NZ — Coffee Buying Guide : une mouture trop fine peut étouffer la moka et rendre la tasse amère ; une mouture trop grossière laisse l’eau traverser trop vite ;
- Bialetti NZ — Troubleshooting : le café ne doit pas être tassé ; une mouture espresso fine peut colmater la cafetière ;
- Bialetti NZ — Troubleshooting : une activation régulière de la soupape de sécurité ne doit pas être ignorée et, si elle persiste après les contrôles prévus, la marque recommande de cesser immédiatement l’utilisation.

Limites de preuve :
- les symptômes restent multifactoriels ;
- aucun chiffre de pression moka n’est utilisé pour déduire la mouture ;
- aucun nombre de microns n’est présenté comme standard ;
- le réglage 2–3 est explicitement limité au moulin Bialetti concerné ;
- les pages Bialetti NZ sont des sources fabricant régionales et sont présentées comme telles.

## 4. Search intent / concurrence / content refresh

La SERP actuelle converge sur « entre espresso et filtre », mais plusieurs résultats ajoutent des affirmations fragiles :
- analogies `sel`, `sucre`, `farine` présentées comme normes ;
- pression moka chiffrée comme explication unique ;
- symptômes de goût présentés comme preuve certaine ;
- `7 g par tasse` ou autres règles de dosage mêlées à la mouture ;
- mouture espresso proposée comme fallback générique.

Le positionnement retenu est plus robuste :
- vocabulaire fabricant `medium-fine` ;
- repère tactile granuleux / non poudreux ;
- réglage propre au moulin ;
- symptômes utilisés comme hypothèses à tester ;
- espresso prémoulu non recommandé par défaut puisque Bialetti avertit qu’il peut être trop fin.

Valeur existante préservée :
- medium-fine comme point de départ ;
- ajustement une variable à la fois ;
- refus du tassage ;
- handoffs vers dosage et amertume.

Renforcé :
- table de preuves fabricant ;
- explication claire de l’absence de cran universel ;
- diagnostic plus actionnable ;
- section café prémoulu ;
- stop sécurité si soupape / blocage / fuite ;
- légende explicite du visuel BFL.

## 5. Naturalité / humanizer / general-writing

PASS éditorial.

Le texte évite les analogies sensationnalistes, le faux ton de barista expert et les certitudes de type « si c’est amer, c’est forcément trop fin ». Il reste pratique : observer, ajuster, garder les autres variables stables, puis passer au diagnostic si le comportement devient anormal.

Aucun faux hands-on, aucun produit déclaré testé, aucun réglage personnel présenté comme standard.

## 6. Anti-AI / comparaison cluster

PASS éditorial.

La structure est propre à la mouture : repère → échelle de moulin → diagnostic → réglage → prémoulu → frontière sécurité.

Elle reste distincte :
- de `dosage`, centré sur eau / remplissage / pesée ;
- de `comment-utiliser`, centré sur toute la préparation ;
- de `quel-cafe`, centré sur composition et préférences ;
- de `cafe-amer-brule`, centré sur un symptôme final ;
- de `fuite-vapeur`, centré sur le dépannage mécanique.

Les tableaux ont une fonction probatoire et diagnostique précise, pas une fonction de remplissage rédactionnel.

## 7. SEO / GEO / maillage

- title/H1 : intention directe « quelle mouture cafetière italienne » ;
- meta enrichie avec medium-fine, espresso, diagnostic et ajustement ;
- réponse courte extractible ;
- sous-réponses citables : medium-fine, granuleux/non poudreux, pas de cran universel, ne pas tasser, espresso fin peut colmater ;
- entités : Bialetti Moka Express, Bialetti Hand Coffee Grinder ;
- maillage vers dosage, choix du café, fuite vapeur et café amer/brûlé ;
- aucune affiliation nécessaire pour répondre à l’intention.

## 8. Technique

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/mouture-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-brew-basics.mjs` ;
- image BFL existante conservée avec caption explicite ;
- aucun numéro de moulin lisible dans le visuel ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité du HTML ;
- rendu visuel Guides valide ;
- aucun nouvel appel BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | page solide ; manque principal = diagnostic et portée des preuves |
| `seo-keyword` | PASS avec limite | intention et formulations SERP validées qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | couvre point de départ, trop fin/trop grossier, moulin, prémoulu, tassage et dépannage |
| `content-refresh` | PASS | noyau conservé, preuves et utilité pratique renforcées |
| `fact-check` pré-rédaction | PASS | registre de preuves actualisé dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel revendiqué |
| `affiliate-value` | PASS | réponse complète sans achat requis |
| `content-brief-authoring` | PASS | brief actualisé avec preuves, exclusions, frontières et image decision |
| `content-and-copy` | PASS | corrections dans la source JS |
| `fact-check` post-rédaction | PASS éditorial | claims bornés aux sources fabricant ; machine gates à confirmer |
| `internal-linking-audit` | PASS éditorial | dosage, café, amertume et fuite vapeur sont les suites logiques |
| `humanizer` | PASS | pas de ton dogmatique ni de pseudo-expertise |
| `general-writing` | PASS | réponse directe puis méthode d’ajustement lisible |
| `anti-ai-slop` | PASS | pas de FAQ générique ni d’allongement artificiel |
| comparaison cluster | PASS | rôle distinct des autres Guides Préparer / dépannage |
| `seo-onpage` | PASS éditorial | title/meta/H1 cohérents ; HTML final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers et reproductibilité à confirmer |
| `seo-best-practices` | PASS / applicable limité | aucune addition structurelle artificielle requise |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | image existante conservée et qualifiée ; aucun nouvel appel BFL |
| `editorial-qa` | PASS éditorial | intention, valeur, factualité, naturel et frontières validés ; machine/visuel à confirmer |

## 10. Blockers et corrections requises

Manques corrigés :
- ancienne review trop condensée → review complète skill par skill ;
- brief encore marqué `DEEP_REWRITE` → reclassé `LIGHT_UPDATE` ;
- symptômes trop fin/trop grossier encore trop peu sourcés → ancrage Bialetti ajouté ;
- café prémoulu espresso traité avec trop de neutralité → avertissement Bialetti sur le colmatage ajouté ;
- réglage 2–3 présent mais peu contextualisé → portée limitée au moulin exact renforcée ;
- frontière sécurité absente → ajout d’un stop soupape / blocage ;
- visuel BFL sans qualification suffisante → caption ajoutée dans la requête persistée.

Blocker restant avant verdict final :
- confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu Guides.

## 11. Verdict et prochaine étape

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.

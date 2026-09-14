# AUDIT — quel-cafe-pour-cafetiere-italienne

- URL : `/guides/quel-cafe-pour-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision d’origine : `DEEP_REWRITE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-brew-basics.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `CHOICE`.

Tâche lecteur : choisir un café adapté à une moka sans confondre compatibilité de mouture et préférences de goût.

Frontières :
- mouture technique → `/guides/mouture-cafetiere-italienne/` ;
- dosage → `/guides/dosage-cafe-cafetiere-italienne/` ;
- diagnostic amer/brûlé → `/guides/cafetiere-italienne-cafe-amer-brule/` ;
- aucun classement de marques ou de cafés commerciaux.

L’ancienne version couvrait correctement Arabica/Robusta et torréfaction mais restait trop courte pour accomplir tout le parcours de décision.

## 2. Architecture et profondeur utile

Nouvel ordre fonctionnel :
1. mouture comme hard gate ;
2. grains vs moulu ;
3. Arabica / Robusta / assemblage ;
4. torréfaction comme préférence ;
5. intensité vs caféine ;
6. origine / blend / décaféiné ;
7. conservation ;
8. protocole d’essai à une variable.

La page ne cherche pas à proposer un palmarès de cafés. Elle apprend à isoler les variables.

## 3. Preuves et factualité

Claims vérifiés :
- Bialetti : moka = mouture medium-fine, plus fine que drip et plus grossière qu’espresso ;
- Bialetti : grains utilisables pour différentes méthodes si la mouture est adaptée ;
- Bialetti : les Perfetto Moka pré-moulus sont destinés à la moka ;
- Bialetti : intensité = richesse / profondeur / arôme / corps, pas caféine ;
- Bialetti : conservation en contenant hermétique, à l’abri lumière/chaleur/humidité, température ambiante ; éviter frigo/congélateur à cause de la condensation ;
- Bialetti : existence d’un Perfetto Moka décaféiné ;
- Lavazza : Robusta généralement plus caféiné qu’Arabica ;
- Lavazza : Qualità Rossa = mélange Arabica/Robusta, torréfaction moyenne et usage moka annoncé.

Limites de preuve :
- les descripteurs Arabica/Robusta sont traités comme tendances larges, jamais comme garantie ;
- aucune origine géographique n’est déclarée bonne ou mauvaise pour la moka ;
- aucune torréfaction n’est déclarée obligatoire ;
- aucun score d’intensité n’est converti en caféine.

## 4. Valeur existante à préserver / content refresh

Préservé :
- pas de “meilleur café” universel ;
- medium-fine comme point de départ ;
- Arabica non présenté comme intrinsèquement supérieur ;
- intensité séparée de la caféine ;
- méthode d’essai à une variable.

Renforcé :
- grains vs pré-moulu ;
- décaféiné ;
- conservation ;
- origine / blend sans règle arbitraire ;
- tableau décisionnel par objectif ;
- séparation explicite compatibilité technique / préférence sensorielle.

## 5. Naturalité / humanizer / general-writing

PASS éditorial.

La prose évite :
- le ton de classement ;
- les superlatifs commerciaux ;
- les formulations “le meilleur pour…” sans preuve ;
- les blocs artificiellement symétriques ;
- le méta-discours SEO/GEO.

Le texte conserve des nuances là où la preuve ne permet pas un verdict fort.

## 6. Anti-AI / comparaison cluster

PASS éditorial.

La structure n’est pas copiée des guides aluminium/inox ou induction. Ici, le mécanisme est : hard gate de mouture → choix sensoriels → protocole d’essai.

Rôle distinct des voisins :
- `mouture` = réglage technique ;
- `dosage` = remplissage/eau/panier ;
- `amer-brule` = diagnostic d’un résultat négatif ;
- `quel-cafe` = choix du café une fois la technique stabilisée.

## 7. SEO / GEO / maillage

- H1 aligné sur l’intention principale ;
- réponse immédiate ;
- meta élargie à mouture, format, composition, torréfaction, intensité et conservation ;
- entités utiles : Bialetti, Lavazza, Arabica, Robusta, décaféiné, torréfaction, medium-fine ;
- sous-réponses citables : `mouture d’abord`, `intensité ≠ caféine`, `aucune torréfaction obligatoire`, `origine ≠ compatibilité` ;
- liens vers mouture, dosage et diagnostic amer/brûlé placés selon la prochaine question logique ;
- aucun lien commercial forcé.

## 8. Technique

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/quel-cafe-pour-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML généré depuis `scripts/guide-content-brew-basics.mjs` ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité du HTML ;
- rendu visuel Guides valide ;
- aucun nouvel asset BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | ancienne page utile mais profondeur insuffisante sur format, décaféiné, conservation et origine |
| `seo-keyword` | PASS avec limite | intention qualitative et sous-thèmes SERP validés ; aucune donnée GSC / volume propre au site disponible |
| `search-intent` | PASS | couvre choix technique + sensoriel sans dériver en ranking produit |
| `content-refresh` | PASS | valeur utile conservée, claims faibles resserrés, nouveaux besoins ajoutés |
| `fact-check` pré-rédaction | PASS | registre de preuves persisté dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel ou hands-on revendiqué |
| `affiliate-value` | PASS | page autonome sans lien marchand, méthode de décision réutilisable |
| `content-brief-authoring` | PASS | brief complet avec thèse, preuves, SERP, risques, frontières et image decision |
| `content-and-copy` | PASS | correction portée dans la source JS |
| `fact-check` post-rédaction | PASS éditorial | tous les nouveaux claims restent dans le périmètre des sources ; CI à confirmer |
| `internal-linking-audit` | PASS éditorial | mouture, dosage et amer/brûlé correspondent aux prochaines questions logiques |
| `humanizer` | PASS | prose décisionnelle, non mécanique, sans faux vécu |
| `general-writing` | PASS | formulations simplifiées sans gommer les limites de preuve |
| `anti-ai-slop` | PASS | aucune FAQ générique, aucun top produits, structure spécifique au choix du café |
| comparaison cluster | PASS | rôle distinct de mouture/dosage/diagnostic |
| `seo-onpage` | PASS éditorial | title/meta/H1/intention cohérents ; rendu final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers et reproductibilité à confirmer |
| `seo-best-practices` | PASS / applicable limité | aucune règle additionnelle imposant une modification |
| `seo-drift` | N/A | aucune baseline exploitable avant/après |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | besoin conceptuel mieux servi par tableaux/maillage ; aucun appel BFL nécessaire |
| `editorial-qa` | PASS éditorial | intention, valeur, factualité, naturel et frontières validés ; machine/visuel à confirmer |

## 10. Blockers et corrections requises

Blockers éditoriaux corrigés :
- page trop proche d’un résumé Arabica/Robusta → corrigé ;
- grains vs moulu insuffisamment décisionnel → corrigé ;
- décaféiné absent → corrigé ;
- conservation absente → corrigé ;
- risque de règle arbitraire par origine / torréfaction → corrigé explicitement ;
- intensité vs caféine renforcé ;
- absence de protocole clair pour isoler le café de la technique → corrigé.

Blocker restant avant verdict final :
- confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu.

## 11. Verdict et prochaine étape

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.

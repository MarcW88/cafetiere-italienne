# AUDIT — dosage-cafe-cafetiere-italienne

- URL : `/guides/dosage-cafe-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `LIGHT_UPDATE` → strict skill-by-skill review
- Décision actuelle : `LIGHT_UPDATE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` à conserver
- Source de vérité : `scripts/guide-content-brew-basics.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `HOW_TO / EXPLAINER`.

Tâche lecteur : savoir combien d’eau et de café mettre dans une moka, comprendre pourquoi les tableaux de ratios se contredisent, puis obtenir malgré tout un repère chiffré reproductible si une balance est utilisée.

Frontières :
- choix de taille → `/capacites/` ;
- mouture → `/guides/mouture-cafetiere-italienne/` ;
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/` ;
- séquence complète de préparation → `/guides/comment-utiliser-cafetiere-italienne/`.

La page existante était déjà utile et correctement méfiante envers les ratios universels. Un nouveau `DEEP_REWRITE` n’était pas justifié. Le `LIGHT_UPDATE` renforce surtout la preuve du remplissage complet, la réponse au besoin de grammage et la validation inter-fabricants.

## 2. Architecture et profondeur utile

Structure retenue :
1. réponse immédiate en quatre repères ;
2. pourquoi « x tasses » n’est pas un multiplicateur universel ;
3. ce que les fabricants demandent réellement ;
4. dosage pratique ;
5. méthode pour créer son propre repère en grammes ;
6. balance facultative ;
7. sous-remplissage ;
8. distinction volume / intensité ;
9. variables de diagnostic ;
10. sources.

La page répond désormais à la requête « combien de grammes ? » sans éluder la question : elle explique comment obtenir le chiffre pertinent pour sa propre moka.

## 3. Preuves et factualité

Claims vérifiés le 14 septembre 2026 :
- Bialetti Europe, Moka Express : eau jusque sous la soupape ; entonnoir rempli de café moulu sans appuyer ni compacter ;
- Bialetti NZ, Moka Express : même méthode de remplissage ;
- Bialetti NZ : une moka stovetop doit être préparée pleine ; sous-remplir eau ou café affecte la pression et la qualité de la préparation ; la taille doit correspondre au service habituel ;
- Bialetti NZ : volumes approximatifs publiés par variante, notamment environ 130 ml pour 3 tasses et 250 ml pour 6 tasses ; le volume réellement obtenu dépend aussi de l’eau et du café ;
- Alessi : eau sous la soupape et café ajouté au filtre puis nivelé doucement jusqu’au bord.

Limites de preuve :
- la recommandation explicite « toujours préparer pleine » est attribuée à Bialetti NZ et n’est pas transformée en loi universelle de toute moka ;
- les volumes Bialetti servent uniquement d’exemple montrant que le libellé « tasse » ne doit pas devenir une formule inter-marques ;
- aucun ratio 1:7, 1:10 ou grammage par tasse n’a été trouvé dans les sources fabricants retenues comme règle universelle ;
- le nombre de grammes d’un panier rempli reste une mesure propre à la configuration réelle.

## 4. Search intent / concurrence / content refresh

La SERP observée le 14 septembre 2026 confirme une forte confusion :
- certains contenus publient des tableaux en grammes par taille ;
- certains imposent un ratio 1:10 ;
- d’autres utilisent 1:7 ;
- plusieurs reviennent malgré tout au panier rempli et à l’eau sous la soupape.

Le positionnement retenu reste donc différenciant et plus robuste :
- ne pas prétendre qu’un tableau tiers est une norme ;
- répondre à l’envie de mesurer par une procédure de tare et de pesée personnelle ;
- utiliser les instructions fabricants comme hard gates.

Valeur existante préservée :
- absence de ratio magique ;
- balance présentée comme outil de répétabilité ;
- handoffs vers capacité, mouture, chauffe et choix du café.

Renforcé :
- preuve du remplissage complet ;
- exemple concret montrant que « tasse » est un libellé de variante ;
- validation Alessi en plus de Bialetti ;
- méthode de pesée reproductible ;
- séparation « moins de boisson » / « moins intense » ;
- qualification explicite du visuel BFL.

## 5. Naturalité / humanizer / general-writing

PASS éditorial.

Le texte évite le ton dogmatique « voici le ratio parfait » et ne remplace pas un chiffre artificiel par une longue dissertation. Les phrases restent orientées action : remplir, tarer, peser, noter, choisir une taille adaptée.

Pas de faux vécu, pas de prétention de test produit, pas de « secret italien » ou de recette personnelle présentée comme norme.

## 6. Anti-AI / comparaison cluster

PASS éditorial.

La structure est spécifique au problème du dosage : unités trompeuses → instructions fabricant → pesée personnelle → sous-remplissage → intensité. Elle ne copie pas :
- le guide d’utilisation, qui déroule toute la préparation ;
- le guide de mouture, qui règle la granulométrie ;
- le guide « quel café », qui traite les préférences de profil ;
- le guide de capacité, qui aide à choisir la taille du produit.

Le tableau fabricants a une fonction probatoire précise et ne constitue pas un gabarit répétitif ajouté pour la forme.

## 7. SEO / GEO / maillage

- title et H1 couvrent directement « dosage cafetière italienne », « combien de café » et « combien d’eau » ;
- meta répond au conflit ratio universel / repères physiques ;
- réponse courte immédiatement extractible ;
- sous-réponses citables : eau sous soupape, café sans tassage, moka Bialetti pleine, pesée personnelle ;
- entités : Bialetti Moka Express, Bialetti NZ, Alessi ;
- liens vers capacité, mouture, utilisation et choix du café ;
- aucun lien commercial requis pour obtenir la réponse.

## 8. Technique

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/dosage-cafe-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-brew-basics.mjs` ;
- image BFL existante conservée avec caption explicite ;
- aucun chiffre lisible dans le visuel présenté comme dosage ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité du HTML ;
- rendu visuel Guides valide ;
- aucun nouvel appel BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | page déjà utile ; manque principal = preuve du remplissage complet + meilleure réponse au besoin de grammes |
| `seo-keyword` | PASS avec limite | intention et formulations SERP validées qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | couvre combien d’eau, combien de café, grammes, ratio, sous-remplissage et balance |
| `content-refresh` | PASS | noyau préservé, preuves et utilité pratique renforcées |
| `fact-check` pré-rédaction | PASS | registre de preuves actualisé dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel revendiqué |
| `affiliate-value` | PASS | réponse complète sans achat ni clic marchand |
| `content-brief-authoring` | PASS | brief complet avec claims, unknowns, exclusions et image decision |
| `content-and-copy` | PASS | corrections dans la source JS |
| `fact-check` post-rédaction | PASS éditorial | nouveaux claims bornés aux fabricants et variantes ; machine gates à confirmer |
| `internal-linking-audit` | PASS éditorial | capacité, mouture, méthode et café sont les suites logiques |
| `humanizer` | PASS | ton pratique, pas de surpromesse ni faux protocole personnel |
| `general-writing` | PASS | réponse directe puis justification ; jargon limité |
| `anti-ai-slop` | PASS | pas de FAQ générique ni remplissage rédactionnel artificiel |
| comparaison cluster | PASS | rôle distinct de capacité / utilisation / mouture / café |
| `seo-onpage` | PASS éditorial | title/meta/H1 cohérents ; HTML final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers et reproductibilité à confirmer |
| `seo-best-practices` | PASS / applicable limité | aucune addition structurelle artificielle nécessaire |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | visuel de pesée conservé ; caption explicite ; aucun nouvel appel BFL |
| `editorial-qa` | PASS éditorial | intention, utilité, factualité, frontières et naturel validés ; machine/visuel à confirmer |

## 10. Blockers et corrections requises

Manques corrigés :
- ancien brief encore marqué `DEEP_REWRITE` alors que la page avait déjà été reconstruite → décision réévaluée en `LIGHT_UPDATE` ;
- recommandation contre le sous-remplissage insuffisamment sourcée → ajout de la consigne Bialetti NZ ;
- besoin utilisateur « combien de grammes ? » traité surtout par négation → ajout d’une vraie procédure de pesée personnelle ;
- « tasse » encore trop abstrait → exemple de volumes fabricant ajouté sans créer un tableau de normes ;
- dépendance presque exclusive à Bialetti → validation du principe de remplissage auprès d’Alessi ;
- visuel BFL sans qualification suffisante → caption ajoutée dans la requête persistée.

Blocker restant avant verdict final :
- confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu Guides.

## 11. Verdict et prochaine étape

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.

# AUDIT — cafetiere-italienne-cafe-amer-brule

- URL : `/guides/cafetiere-italienne-cafe-amer-brule/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision actuelle : `DEEP_REWRITE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-troubleshooting.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `HOW_TO / DIAGNOSTIC`.

Tâche lecteur : comprendre pourquoi une moka donne un café amer, brûlé ou simplement trop intense, puis corriger la cause la plus probable sans modifier plusieurs variables à la fois.

Frontières :
- eau / remplissage → `/guides/dosage-cafe-cafetiere-italienne/` ;
- mouture → `/guides/mouture-cafetiere-italienne/` ;
- méthode complète → `/guides/comment-utiliser-cafetiere-italienne/` ;
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/` ;
- fuite / soupape → `/guides/cafetiere-italienne-fuite-vapeur/`.

L’ancienne page avait la bonne direction mais restait trop courte pour un vrai diagnostic : elle listait cinq causes sans distinguer suffisamment symptôme sensoriel, comportement de la cafetière et problème mécanique. Le `DEEP_REWRITE` est donc justifié.

## 2. Architecture et profondeur utile

Structure finale :
1. réponse immédiate / ordre de vérification ;
2. tableau amer / brûlé / intense / symptôme mécanique ;
3. niveau d’eau ;
4. chauffe ;
5. fin d’extraction ;
6. mouture / tassage ;
7. café / torréfaction ;
8. méthode en deux préparations ;
9. erreurs à éviter ;
10. passage au diagnostic mécanique ;
11. sources.

La page répond à la requête de goût sans dériver vers un cours complet sur la torréfaction ou un guide de réparation.

## 3. Preuves et factualité

Claims vérifiés le 14 septembre 2026 :
- Bialetti NZ — Moka Express : eau juste sous la soupape ; surremplissage associé à un café bouilli, amer ou brûlé ; mouture medium-fine ; chauffe faible à moyenne ; retrait immédiat de la chaleur ; ne pas laisser bouillir ;
- Bialetti NZ — Venus : mêmes consignes centrales de niveau d’eau, chauffe et fin de préparation sur la page vérifiée ;
- Bialetti NZ — Moka Induction : mêmes consignes centrales sur la page vérifiée ;
- Bialetti NZ — Using Bialetti Coffee Makers : une mouture espresso destinée aux machines électriques est généralement trop fine et peut bloquer une Bialetti ;
- Bialetti : le café ne doit pas être compacté dans le panier moka ;
- Hu et al. 2025 : revue scientifique identifiant plusieurs facteurs d’amertume, notamment variété, traitement, torréfaction et préparation ;
- Cleve et al. 2025 : dans l’étude concernée, les perceptions amères et brûlées étaient plus dominantes sur le profil de torréfaction sombre étudié.

Limites de preuve :
- Bialetti NZ reste une documentation fabricant régionale ; les formulations sont bornées aux modèles/gammes vérifiés ;
- un goût amer n’identifie jamais à lui seul une mouture trop fine ;
- une torréfaction sombre n’est pas déclarée mauvaise ou incompatible avec la moka ;
- aucune température, puissance, durée ou ratio universel n’est inventé ;
- aucun refroidissement sous eau froide n’est présenté comme étape fabricant obligatoire, car cette consigne n’apparaît pas dans les sources retenues ;
- aucun test produit ou protocole de dégustation propre au site n’est revendiqué.

## 4. Search intent / concurrence / content refresh

La SERP autour de la moka amère/brûlée mélange fréquemment :
- eau préchauffée vs froide ;
- refroidissement sous l’eau comme règle absolue ;
- ratios universels ;
- « dark roast = mauvais » ;
- mouture comme cause unique ;
- hacks de barista non distingués des consignes fabricant.

Positionnement retenu :
- commencer par les hard gates fabricant ;
- distinguer comportement de la moka et préférence sensorielle ;
- utiliser les symptômes comme hypothèses, pas comme verdicts ;
- ne changer qu’une variable à la fois ;
- arrêter la logique de recette lorsqu’un symptôme mécanique apparaît.

Valeur existante préservée :
- ordre eau → chauffe → tassement → mouture → café ;
- liens vers dosage, mouture et choix du café ;
- refus du feu maximal et du tassage.

Renforcé :
- distinction amer / brûlé / intense ;
- fin d’extraction séparée de l’intensité du feu ;
- preuve multi-gammes Bialetti ;
- tableau diagnostic ;
- protocole en deux préparations ;
- preuves scientifiques pour la variabilité de l’amertume ;
- frontière sécurité ;
- qualification explicite du visuel BFL.

## 5. Naturalité / humanizer / general-writing

PASS.

Le texte reste pratique et évite les formules de type « secret italien », « extraction parfaite » ou « cette astuce change tout ». Il ne prétend pas que le site a dégusté les cafés ou mesuré une extraction.

La progression suit une logique de dépannage domestique : observer → corriger le comportement → goûter → changer le café seulement ensuite.

## 6. Anti-AI / comparaison cluster

PASS.

La structure est propre au symptôme « amer / brûlé » : elle ne copie ni la page mouture, ni la page dosage, ni le guide d’utilisation.

- `dosage` explique le remplissage nominal ; ici il n’intervient que comme cause de surremplissage ;
- `mouture` règle la granulométrie ; ici elle apparaît comme hypothèse après eau/chauffe ;
- `quel-cafe` traite les préférences ; ici le café n’est changé qu’après stabilisation de la technique ;
- `fuite-vapeur` prend le relais dès qu’un symptôme mécanique apparaît.

Le tableau de diagnostic et la méthode en deux préparations ont une fonction propre à cette URL et ne sont pas des blocs génériques ajoutés pour la longueur.

## 7. SEO / GEO / maillage

- title/H1 : cible directe « cafetière italienne café amer brûlé » ;
- meta enrichie avec distinction goût / préparation et principales variables ;
- réponse courte immédiatement extractible ;
- sous-réponses citables : surremplissage, chauffe faible-moyenne, retrait immédiat, medium-fine, ne pas tasser ;
- entités : Bialetti Moka Express, Venus, Moka Induction ;
- preuves scientifiques séparées des recommandations fabricant ;
- liens contextuels vers dosage, utilisation, mouture, choix du café et fuite/vapeur ;
- aucune affiliation requise pour résoudre l’intention.

## 8. Technique

Résultat confirmé :
- canonical : `https://cafetiere-italienne.be/guides/cafetiere-italienne-cafe-amer-brule/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-troubleshooting.mjs` ;
- image BFL existante conservée, aucun nouvel appel ;
- caption du visuel explicitement non probatoire ;
- marker image toujours lié au H2 `2. Une chauffe trop forte accélère mal l’extraction` ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé.

Gates exécutés sur la version finale :
- `Regenerate and quality-check Guide cluster` #73 — success ;
- `Validate Guide workflow` #74 — success, reproductibilité HTML comprise ;
- `Visual design review` #186, job `visual-pages (guides)` — success.

Le HTML final conserve la nouvelle meta, `noindex,follow`, le canonical attendu, le tableau de diagnostic, la frontière sécurité et le visuel BFL qualifié.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | ancien contenu trop court pour l’intention diagnostic → `DEEP_REWRITE` justifié |
| `seo-keyword` | PASS avec limite | intention et formulations SERP validées qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | couvre amer, brûlé, trop intense, chauffe, eau, mouture, tassage et profil du café |
| `content-refresh` | PASS | noyau utile préservé, profondeur et hiérarchie de diagnostic renforcées |
| `fact-check` pré-rédaction | PASS | registre de preuves complet dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel / hands-on revendiqué |
| `affiliate-value` | PASS | réponse entièrement utile sans lien marchand |
| `content-brief-authoring` | PASS | brief avec claims, exclusions, sources, frontières et image decision |
| `content-and-copy` | PASS | corrections dans la source JS, pas uniquement le HTML généré |
| `fact-check` post-rédaction | PASS | nouveaux claims bornés aux sources et rendu final contrôlé |
| `internal-linking-audit` | PASS | dosage, utilisation, mouture, café et fuite sont les suites logiques ; liens contrôlés par CI |
| `humanizer` | PASS | ton concret, pas de pseudo-expertise ni de faux vécu |
| `general-writing` | PASS | hiérarchie de diagnostic claire, jargon limité |
| `anti-ai-slop` | PASS | pas de FAQ générique ni de remplissage artificiel |
| comparaison cluster | PASS | rôle distinct des Guides dosage / mouture / café / fuite |
| `seo-onpage` | PASS | title/meta/H1 cohérents et HTML final vérifié |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | aucune structure SEO artificielle ajoutée |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | visuel existant réutilisé ; caption qualifiée ; aucun nouvel appel BFL |
| `editorial-qa` | PASS | intention, valeur, factualité, naturel, frontières, machine gates et rendu visuel validés |

## 10. Blockers et corrections requises

Manques corrigés :
- review ancienne trop courte → review skill par skill ;
- absence de distinction amer / brûlé / intense → ajoutée ;
- fin d’extraction noyée dans la chauffe → section séparée ;
- mouture encore trop proche d’un diagnostic automatique → requalifiée en hypothèse ;
- profil du café peu sourcé → sources scientifiques ajoutées avec portée limitée ;
- aucune méthode de test reproductible → protocole en deux préparations ;
- aucune frontière de sécurité → handoff fuite / soupape ;
- visuel BFL sans qualification → caption explicite ajoutée et vérifiée dans le HTML final.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 11. Verdict et prochaine étape

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides avec une trace skill par skill comparable aux URLs déjà validées.

Deux gates restent volontairement `N/A` :
- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucune baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.

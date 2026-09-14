# AUDIT — premiere-utilisation-cafetiere-italienne

- URL : `/guides/premiere-utilisation-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `LIGHT_UPDATE` → strict skill-by-skill review
- Décision actuelle : `LIGHT_UPDATE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-first-use.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `HOW_TO` de mise en service.

Tâche lecteur : savoir quoi faire avant de boire le premier café d’une moka neuve, sans confondre consigne fabricant, entretien courant et croyance de « culottage ».

Frontières :
- utilisation quotidienne → `/guides/comment-utiliser-cafetiere-italienne/` ;
- nettoyage courant → `/guides/nettoyer-cafetiere-italienne/` ;
- dosage → `/guides/dosage-cafe-cafetiere-italienne/` ;
- mouture → `/guides/mouture-cafetiere-italienne/` ;
- induction → `/guides/cafetiere-italienne-induction-compatibilite/`.

La page existante était déjà exploitable. La passe actuelle ne justifiait pas un nouveau deep rewrite : elle renforce surtout la portée des preuves et l’anti-mythologie.

## 2. Architecture et profondeur utile

Ordre fonctionnel conservé puis renforcé :
1. réponse immédiate ;
2. identification du modèle ;
3. premier lavage ;
4. cafés à jeter ;
5. préparation de ces cafés ;
6. manipulation de la poignée ;
7. passage à l’usage normal ;
8. tableau « ce que l’on sait / ce que l’on ne doit pas inventer » ;
9. limites de généralisation ;
10. handoff vers l’usage quotidien.

La page reste volontairement plus courte que le guide d’utilisation quotidienne et ne répète pas toute la procédure moka.

## 3. Preuves et factualité

Claims vérifiés le 14 septembre 2026 :
- Bialetti Europe : pour la Moka Express, lavage des pièces à l’eau chaude avant première utilisation ;
- Bialetti Europe : jeter les trois premières infusions ;
- Bialetti Europe : ne pas utiliser la poignée lors du dévissage ;
- Bialetti Europe : procédure quotidienne avec eau sous la soupape, café non tassé, chauffe douce à moyenne et retrait du feu une fois la partie supérieure remplie ;
- Bialetti NZ : la Venus reprend actuellement lavage à l’eau chaude, trois préparations à jeter et précaution sur la poignée ;
- Bialetti NZ : la Moka Induction reprend actuellement la même routine ;
- les pages Bialetti consultées indiquent également que les modèles vérifiés ne sont pas compatibles lave-vaisselle.

Limites de preuve :
- les sources Bialetti donnent la consigne de jeter trois préparations mais n’en explicitent pas la raison ;
- aucune source vérifiée ne permet donc d’attribuer cette étape au « culottage », à une protection de l’aluminium, à un traitement sanitaire ou à la suppression d’un goût métallique ;
- une cohérence entre plusieurs gammes Bialetti n’est pas une preuve d’universalité inter-marques ;
- les fiches Bialetti NZ sont des sources fabricant régionales et sont présentées comme telles.

## 4. Valeur existante à préserver / content refresh

Préservé :
- séparation première utilisation / routine quotidienne ;
- règle des trois préparations correctement limitée à Bialetti ;
- priorité donnée à la notice du modèle ;
- absence de faux hands-on et d’affiliation forcée.

Renforcé :
- Moka Express n’est plus l’unique exemple vérifié : Venus et Moka Induction servent à qualifier une cohérence de marque ;
- la cause des trois cafés est explicitement laissée inconnue au lieu d’être remplie par une explication populaire ;
- distinction plus claire entre premier lavage et détartrage/nettoyage intensif ;
- lave-vaisselle borné aux modèles effectivement vérifiés ;
- ajout du tableau « connu / non démontré » ;
- lien vers le guide induction ajouté au moment logique.

## 5. Naturalité / humanizer / general-writing

PASS.

Le texte évite le folklore de la moka présenté comme science, les injonctions absolues et les formulations de type « secret italien ». Il explique ce que l’on sait et assume explicitement ce que les sources ne disent pas.

## 6. Anti-AI / comparaison cluster

PASS.

Structure propre à la mise en service : modèle → lavage initial → préparations à jeter → fin de mise en service. Elle reste distincte :
- de `comment-utiliser`, centré sur la routine quotidienne ;
- de `nettoyer`, centré sur l’entretien ;
- de `detartrer`, centré sur les dépôts minéraux ;
- de `dosage` et `mouture`, centrés sur le réglage de recette.

Le tableau final sert à gérer l’incertitude, pas à reproduire le même gabarit décisionnel que les guides de choix.

## 7. SEO / GEO / maillage

- H1 et title conservent l’intention « première utilisation cafetière italienne » ;
- meta couvre lavage, cafés à jeter, précautions et limites de généralisation ;
- réponse directe à « faut-il jeter les premiers cafés ? » ;
- sous-réponses citables : routine Bialetti, trois cafés non universels, raison non explicitée, culottage non requis pour exécuter la notice ;
- entités : Bialetti, Moka Express, Venus, Moka Induction ;
- liens vers usage quotidien, nettoyage, dosage, mouture et induction ;
- aucun lien marchand nécessaire à la réponse.

## 8. Technique

Résultat confirmé :
- canonical : `https://cafetiere-italienne.be/guides/premiere-utilisation-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-first-use.mjs` ;
- image BFL existante conservée avec caption explicite ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé ;
- aucun nouvel appel BFL.

Gates exécutés sur cette version :
- `Regenerate and quality-check Guide cluster` #57 — success ;
- `Validate Guide workflow` #57 — success ;
- `Visual design review` #159 — success.

Le HTML final conserve explicitement `noindex,follow`, le canonical attendu, la nouvelle meta, la table « ce que l’on sait / ce que l’on ne doit pas inventer » et la légende de qualification du visuel BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | page utile déjà construite ; manque principal = portée des preuves et mythes de première utilisation |
| `seo-keyword` | PASS avec limite | intention validée qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | réponse à première mise en service + sous-question « faut-il jeter les premiers cafés ? » |
| `content-refresh` | PASS | noyau conservé, preuves élargies, explications non démontrées retirées/refusées |
| `fact-check` pré-rédaction | PASS | registre de preuves actualisé dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel revendiqué |
| `affiliate-value` | PASS | page autonome sans achat requis |
| `content-brief-authoring` | PASS | brief actualisé avec claims, portée, unknowns et image decision |
| `content-and-copy` | PASS | corrections dans la source JS |
| `fact-check` post-rédaction | PASS | claims bornés aux modèles et régions des sources, rendu final contrôlé |
| `internal-linking-audit` | PASS | handoffs vers usage, nettoyage, dosage, mouture et induction ; liens contrôlés par CI |
| `humanizer` | PASS | ton pédagogique, pas de folklore présenté comme preuve |
| `general-writing` | PASS | distinction connu / inconnu lisible |
| `anti-ai-slop` | PASS | pas de FAQ générique ni d’allongement artificiel |
| comparaison cluster | PASS | rôle distinct du guide d’utilisation et des guides entretien/réglage |
| `seo-onpage` | PASS | title/meta/H1 cohérents et HTML final vérifié |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | aucune addition artificielle requise |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | image existante conservée, caption ajoutée, aucun nouvel appel BFL |
| `editorial-qa` | PASS | intention, valeur, factualité, naturel, frontières, machine gates et rendu visuel validés |

## 10. Blockers et corrections requises

Manques corrigés :
- ancienne review encore liée à l’état placeholder / deep rewrite historique → remise à niveau ;
- routine documentée seulement via Moka Express → enrichie avec Venus et Moka Induction, sans universaliser ;
- raison des trois cafés laissée implicite → statut « non explicité par les sources vérifiées » rendu clair ;
- risque de reprendre « culottage = raison fabricant » → explicitement refusé ;
- lavage initial et détartrage risquaient d’être confondus → séparés ;
- image BFL sans qualification suffisante → caption ajoutée et vérifiée dans le HTML final.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 11. Verdict et prochaine étape

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides avec une trace skill par skill comparable aux URLs déjà validées.

Deux gates restent volontairement `N/A` :
- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucune baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.

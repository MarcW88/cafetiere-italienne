# AUDIT — comment-utiliser-cafetiere-italienne

- URL : `/guides/comment-utiliser-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `LIGHT_UPDATE` → strict skill-by-skill review
- Décision d’origine : `LIGHT_UPDATE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-howto.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `HOW_TO`.

Tâche lecteur : exécuter correctement une préparation moka quotidienne, puis savoir quels réglages relèvent d’un autre guide.

Frontières :
- première mise en service → `/guides/premiere-utilisation-cafetiere-italienne/` ;
- dosage → `/guides/dosage-cafe-cafetiere-italienne/` ;
- mouture → `/guides/mouture-cafetiere-italienne/` ;
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/` ;
- café amer/brûlé → `/guides/cafetiere-italienne-cafe-amer-brule/` ;
- induction → `/guides/cafetiere-italienne-induction-compatibilite/` ;
- fuite / soupape → `/guides/cafetiere-italienne-fuite-vapeur/`.

La version précédente était déjà une vraie procédure. Le besoin n’était pas une reconstruction complète mais une mise à niveau de précision : bord du filtre, poignée, service et séparation claire entre instruction fabricant et astuce de recette.

## 2. Architecture et profondeur utile

Structure finale :
1. méthode en six gestes ;
2. pré-check avant préparation ;
3. eau et niveau sous la soupape ;
4. filtre non tassé + bord propre ;
5. fermeture correcte sans levier sur la poignée ;
6. chauffe douce à moyenne ;
7. retrait du feu en fin de préparation ;
8. service, mélange optionnel Bialetti et refroidissement ;
9. tableau instruction / conseil / option ;
10. erreurs à éviter ;
11. handoff vers ajustements de recette.

La page reste un HOW_TO, pas une recette de barista exhaustive.

## 3. Preuves et factualité

Claims vérifiés :
- Bialetti France : eau juste sous la soupape, entonnoir rempli sans compacter, fermeture ferme, feu doux à moyen, flamme gaz sous la base, retrait immédiat lorsque la cafetière est pleine, lavage à la main ;
- Bialetti NZ : medium-fine pour la Moka Express, 3–6 minutes selon taille/chauffe, bord de l’entonnoir à garder propre, poignée à ne pas utiliser comme levier, mélange doux avant service ;
- Bialetti première utilisation : lavage initial + trois préparations à jeter + avertissement poignée ;
- Alessi : eau froide sous soupape, filtre rempli et nivelé doucement, fermeture ferme, chauffe moyen-bas.

Limites de preuve respectées :
- eau préchauffée non érigée en obligation ;
- couvercle ouvert non érigé en règle universelle ;
- aucun signal sonore ou changement de couleur présenté comme critère universel ;
- refroidissement de la base sous l’eau non présenté comme étape fabricant ;
- 3–6 minutes borné à la Moka Express et non généralisé ;
- aucune valeur universelle de grammage ou de mouture ;
- mélange avant service qualifié comme conseil Bialetti, pas comme condition de fonctionnement.

## 4. Valeur existante à préserver / content refresh

Préservé :
- niveau d’eau ;
- non-tassement ;
- chauffe modérée ;
- retrait en fin de préparation ;
- séparation entre mode d’emploi et réglages de recette ;
- handoffs vers les pages dédiées.

Renforcé :
- propreté du bord avant fermeture ;
- usage correct de la poignée ;
- nuance eau froide / préchauffée ;
- différence entre repère fabricant et astuces populaires ;
- mélange Bialetti avant service ;
- tableau « instruction / conseil / option » ;
- qualification du visuel BFL.

## 5. Naturalité / humanizer / general-writing

PASS.

La prose reste procédurale, sans faux vécu, sans « secret de barista », sans promesse de café parfait et sans surcharge de jargon. Les répétitions concernent uniquement des consignes critiques.

## 6. Anti-AI / comparaison cluster

PASS.

La structure reste propre à un HOW_TO : pré-check → préparation → chauffe → arrêt → service → handoffs.

Rôles voisins distincts :
- `premiere-utilisation` = mise en service ;
- `dosage` = remplissage et reproductibilité ;
- `mouture` = réglage technique ;
- `amer-brule` = diagnostic ;
- `comment-utiliser` = séquence quotidienne complète.

Le tableau sur les statuts de gestes apporte une valeur spécifique sans recopier les matrices des Guides de choix.

## 7. SEO / GEO / maillage

- H1 aligné sur « comment utiliser une cafetière italienne » ;
- réponse immédiate et exécutable ;
- meta élargie à fermeture, chauffe, retrait, service et distinction astuces/règles ;
- entités : Moka Express, Bialetti, Alessi, soupape de sécurité, filtre-entonoir ;
- sous-réponses citables : `ne pas tasser`, `bord propre`, `poignée ≠ levier`, `eau préchauffée ≠ obligation`, `3–6 min ≠ règle universelle` ;
- maillage vers première utilisation, induction, dosage, mouture, fuite, amertume et nettoyage ;
- aucun lien commercial forcé.

## 8. Technique

Résultat confirmé :
- canonical : `https://cafetiere-italienne.be/guides/comment-utiliser-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-howto.mjs` ;
- image BFL existante conservée avec légende explicite ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé ;
- aucun nouvel asset BFL.

Gates exécutés sur cette version :
- `Regenerate and quality-check Guide cluster` #52 — success ;
- `Validate Guide workflow` #53 — success ;
- `Visual design review` #152, job `visual-pages (guides)` — success.

Le HTML final conserve explicitement `noindex,follow`, le canonical attendu, la nouvelle meta, la table de qualification des gestes et la légende du visuel généré.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | page déjà utile ; complétude améliorée sur fermeture, service et limites de preuve |
| `seo-keyword` | PASS avec limite | intention HOW_TO et sous-thèmes SERP validés qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | procédure quotidienne complète, sans dérive en recette experte universelle |
| `content-refresh` | PASS | valeur existante conservée, manques ciblés corrigés |
| `fact-check` pré-rédaction | PASS | registre de preuves mis à jour dans le brief |
| `evidence-based-reviews` | N/A | aucun test ou vécu personnel revendiqué |
| `affiliate-value` | PASS | page autonome, sans dépendance à un lien marchand |
| `content-brief-authoring` | PASS | brief actualisé avec preuves, exclusions et claims refusés |
| `content-and-copy` | PASS | corrections dans la source JS |
| `fact-check` post-rédaction | PASS | nouveaux claims bornés aux sources et rendu final contrôlé |
| `internal-linking-audit` | PASS | cibles correspondant aux prochaines questions logiques ; liens contrôlés par CI |
| `humanizer` | PASS | ton naturel, pas de faux témoignage ni de surpromesse |
| `general-writing` | PASS | phrases procédurales simples, distinctions explicites |
| `anti-ai-slop` | PASS | pas de FAQ générique, pas de checklist artificielle sans fonction |
| comparaison cluster | PASS | rôle distinct des pages première utilisation/dosage/mouture/diagnostic |
| `seo-onpage` | PASS | title/meta/H1 cohérents et HTML final vérifié |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | aucune addition artificielle nécessaire |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | visuel existant conservé ; caption explicite ajoutée ; aucun nouvel appel BFL |
| `editorial-qa` | PASS | intention, valeur, factualité, naturel, frontières, machine gates et rendu Guides validés |

## 10. Blockers et corrections requises

Blockers / manques éditoriaux corrigés :
- bord du filtre non traité → corrigé ;
- poignée encore présentée surtout comme consigne de première utilisation → corrigé comme règle d’usage Bialetti ;
- eau préchauffée / couvercle ouvert / signaux sonores risquaient d’être interprétés comme règles implicites → statut explicitement optionnel/non universel ;
- mélange avant service absent → ajouté comme conseil Bialetti, correctement borné ;
- temps 3–6 minutes insuffisamment qualifié → borné à la Moka Express ;
- visuel BFL sans qualification suffisante → caption ajoutée et vérifiée dans le HTML final.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 11. Verdict et prochaine étape

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides avec une trace skill par skill comparable aux autres URLs déjà validées.

Deux gates restent volontairement `N/A` :
- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucune baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.

# PUBLISH REVIEW — Comment choisir une cafetière italienne ?

- URL : `/guides/comment-choisir-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision d’origine : `DEEP_REWRITE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `CHOICE`.

Tâche lecteur : définir les critères de choix avant de passer à une sélection de produits.

Ordre de décision final :

1. plaque / compatibilité ;
2. volume réellement préparé ;
3. modèle et matériau ;
4. entretien, pièces et manipulation ;
5. design, marque et prix seulement après les hard gates.

Sous-intentions confirmées lors de la passe actuelle : taille / tasses, sous-remplissage, induction, aluminium vs inox, entretien, pièces et limites de la moka comme méthode.

La page reste volontairement sans podium, sans classement produit et sans recommandation de « meilleur modèle ».

## 2. Architecture et profondeur utile

L’ancienne structure était déjà saine, mais elle sous-exploitait deux points importants :

- la taille était traitée comme une simple question de ml, sans expliquer suffisamment pourquoi une grande moka n’est pas nécessairement une petite moka polyvalente ;
- le guide général devait être réaligné avec les nouvelles pages spécialisées induction et aluminium/inox afin de ne pas conserver d’anciens raccourcis.

Architecture finale :

1. réponse courte / ordre de décision ;
2. plaque comme premier hard gate ;
3. taille comme second hard gate ;
4. matériau en niveau intermédiaire, sans doublonner la page dédiée ;
5. entretien, pièces et manipulation ;
6. tableau de décision selon la situation ;
7. erreurs fréquentes ;
8. frontières d’usage de la moka ;
9. handoff vers comparatifs ;
10. sources.

La structure suit la décision, pas un template « avantages / inconvénients ».

## 3. Registre de preuves et factualité

Claims centraux vérifiés :

- la Moka Express classique est une construction aluminium et n’est pas directement compatible induction ;
- la Moka Induction possède une base acier/aluminium adaptée à l’induction ;
- Bialetti demande aussi de vérifier que le diamètre du fond est accepté par la plaque ;
- Alessi 9090 1 tasse = 7 cl, fond magnétique, avertissement de détection à 90 mm ;
- Bialetti publie des volumes brassés approximatifs par taille, et le même libellé « 6 tasses » n’implique pas le même volume selon la gamme ;
- fiche Bialetti NZ actuelle : Moka Express 6 tasses ≈ 250 ml ; Moka Induction 6 tasses ≈ 280 ml ;
- Bialetti recommande sur ses stovetop documentées de choisir une taille correspondant au service habituel plutôt que de sous-remplir eau / café ;
- la Moka Express documentée n’est pas prévue pour le lave-vaisselle ;
- Bialetti propose des pièces de rechange pour plusieurs modèles / tailles, sans que cela implique une interchangeabilité universelle.

Correction de preuve : l’ancienne page utilisait 270 ml pour la Moka Express 6 tasses via une fiche Uruguay. La passe actuelle retient les données Bialetti NZ vérifiées le 14 septembre 2026 et supprime cette valeur comme règle générique.

Claims volontairement exclus :

- `inox = toujours induction` ;
- `inox = toujours lave-vaisselle` ;
- `aluminium = meilleur goût` ;
- prix / durée de vie génériques ;
- une conversion universelle « tasse = x ml » ;
- une règle universelle de remplissage dérivée d’une seule marque.

## 4. Valeur existante à préserver / content-refresh

Préservé :

- plaque avant marque ;
- volume réel avant matériau ;
- frontière Guide / Comparatif ;
- importance du joint, filtre et entretien ;
- avertissement contre `inox = induction` ;
- section expliquant quand une moka n’est pas forcément la bonne méthode.

Renforcé :

- la taille devient un vrai hard gate ;
- comparaison 6 tasses Moka Express / Moka Induction pour démontrer que le libellé de taille n’est pas une conversion universelle ;
- sous-remplissage traité avec attribution explicite à la documentation Bialetti ;
- pièces rattachées à la taille / génération exacte ;
- matériau raccourci et réaligné avec le guide spécialisé ;
- données obsolètes / divergentes corrigées.

## 5. Naturalité / humanizer / general-writing

Le texte a été relu comme parcours de décision continu.

Résultat :

- réponse immédiate ;
- transitions plaque → taille → matériau → usage ;
- pas de « nous avons trouvé » dans le corps ;
- pas de superlatif non prouvé ;
- pas de symétrie artificielle aluminium / inox ;
- pas de remplissage SEO ;
- nuances conservées quand une règle appartient à Bialetti plutôt qu’à toutes les moka.

## 6. Anti-AI-slop / similarité cluster

Comparaison manuelle effectuée avec :

- `/guides/cafetiere-italienne-induction-compatibilite/` ;
- `/guides/cafetiere-italienne-aluminium-ou-inox/` ;
- `/capacites/` ;
- `/comparatifs/meilleure-cafetiere-italienne/`.

Rôle distinct :

- `comment-choisir` séquence les critères ;
- induction diagnostique la compatibilité plaque / fond / diamètre ;
- aluminium/inox sépare propriétés matériau et propriétés modèle ;
- capacités documente les volumes ;
- comparatif classe ou sélectionne les produits.

Pas de duplication de H2 ni de tableau identique imposé par template.

## 7. SEO / GEO / maillage

- H1 : `Comment choisir une cafetière italienne ?` ;
- réponse courte directement exploitable ;
- meta centrée sur plaque, taille réelle, matériau, entretien et pièces ;
- unités de réponse distinctes : `plaque = hard gate`, `taille = volume exact`, `6 tasses ≠ volume universel`, `matériau ≠ score de qualité`, `pièce = taille/génération` ;
- liens vers induction au moment de la compatibilité ;
- lien vers capacités au moment du volume ;
- lien vers aluminium/inox après fixation plaque + taille ;
- comparatifs uniquement en handoff final ;
- aucune FAQ ajoutée artificiellement.

## 8. Technique

Résultat confirmé :

- canonical : `https://cafetiere-italienne.be/guides/comment-choisir-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content.mjs` ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé ;
- aucun nouvel asset BFL.

Gates exécutés sur cette version :

- `Regenerate and quality-check Guide cluster` #37 — success ;
- `Validate Guide workflow` #38 — success ;
- `Visual design review` #128, job `visual-pages (guides)` — success.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | ancienne page solide mais taille et fraîcheur des données insuffisamment traitées ; correction appliquée |
| `seo-keyword` | PASS avec limite | intention et variantes SERP validées qualitativement ; pas de GSC / volume propre au site inventé |
| `search-intent` | PASS | plaque, taille, remplissage, matériau, entretien, pièces et limites de méthode couverts |
| `content-refresh` | PASS | valeur existante préservée, claims datés corrigés, sections renforcées sans réécriture gratuite |
| `fact-check` pré-rédaction | PASS | registre de preuves actualisé dans le brief |
| `evidence-based-reviews` | N/A | aucun test produit ni jugement expérientiel revendiqué |
| `affiliate-value` | PASS | page entièrement utile sans lien marchand |
| `content-brief-authoring` | PASS | brief actualisé avec preuves, correction de donnée, frontières et image decision |
| `content-and-copy` | PASS | correction effectuée dans la source JS |
| `fact-check` post-rédaction | PASS | nouveaux claims reliés aux sources Bialetti / Alessi et rendu validé |
| `internal-linking-audit` | PASS | liens positionnés selon la prochaine question logique et contrôlés par CI |
| `humanizer` | PASS | lecture continue, phrases fonctionnelles, pas de méta-discours artificiel |
| `general-writing` | PASS | formulation resserrée tout en conservant les nuances de preuve |
| `anti-ai-slop` | PASS | structure décisionnelle non clonée, pas de FAQ générique ni de conclusion vide |
| comparaison cluster | PASS | rôles distincts des pages induction, matériau, capacités et comparatif |
| `seo-onpage` | PASS | title/meta/H1/intention cohérents et HTML généré validé |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | aucune règle additionnelle imposant une modification |
| `seo-drift` | N/A | aucune baseline exploitable avant/après |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | intention décisionnelle mieux servie par tableaux et liens ; aucun appel BFL requis |
| `editorial-qa` | PASS | intention, valeur, factualité, naturel, frontières, machine gates et rendu Guides validés |

## 10. Blockers et corrections requises

Blockers éditoriaux corrigés :

- ancienne valeur 270 ml figée depuis une autre fiche marché → corrigée ;
- taille encore trop traitée comme simple conversion → corrigée ;
- sous-remplissage insuffisamment contextualisé → corrigé avec attribution Bialetti ;
- guide général partiellement désynchronisé des nouvelles pages induction / aluminium-inox → corrigé ;
- pièces pas assez rattachées à taille / génération → corrigé.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 11. Verdict et prochaine étape

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides, avec une trace skill par skill comparable à `bloc-notes-numerique`.

Deux gates restent volontairement `N/A` :

- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucun baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.

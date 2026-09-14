# AUDIT — nettoyer-cafetiere-italienne

- URL : `/guides/nettoyer-cafetiere-italienne/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision actuelle : `DEEP_REWRITE`
- État après correction : `PASS — READY_FOR_HUMAN_VALIDATION`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` conservé
- Source de vérité : `scripts/guide-content-materials-care.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `HOW_TO / entretien courant`.

Tâche lecteur : savoir quoi faire immédiatement après usage, quels gestes et produits sont réellement documentés pour son modèle, quelles zones contrôler et quand arrêter de « nettoyer » pour passer au détartrage ou au dépannage.

Frontières :
- détartrage → `/guides/detartrer-cafetiere-italienne/` ;
- joint usé → `/guides/changer-joint-cafetiere-italienne/` ;
- fuite / soupape persistante → `/guides/cafetiere-italienne-fuite-vapeur/` ;
- matériau → `/guides/cafetiere-italienne-aluminium-ou-inox/`.

La version précédente donnait une bonne routine de base, mais restait trop courte pour l’intention réelle : elle traitait surtout la Moka Express et ne démontait pas suffisamment les raccourcis `inox = lave-vaisselle`, `sans détergent = toutes les moka` ou `plus de nettoyage = solution à une fuite`.

## 2. Architecture et profondeur utile

Structure finale :
1. réponse immédiate après chaque préparation ;
2. tableau par modèle avant de choisir eau / détergent / lave-vaisselle ;
3. procédure Moka Express documentée ;
4. filtre / soupape / joint ;
5. lave-vaisselle et limites du raccourci matériau ;
6. nettoyage vs détartrage vs remplacement ;
7. raccourcis à éviter ;
8. frontière sécurité / diagnostic ;
9. sources.

La page reste centrée sur l’entretien courant et n’absorbe pas la procédure détaillée de détartrage ni le dépannage complet d’une fuite.

## 3. Preuves et factualité

Claims vérifiés le 14 septembre 2026 :
- Bialetti Zendesk FR — Moka Express : démonter et laver à la main dans de l’eau tiède après utilisation ;
- Bialetti Moka Express NZ : modèle explicitement `NOT dishwasher safe` ;
- manuel Moka Express 2021 : lavage avec eau, sans détergents ni éponges abrasives ; pas de lave-vaisselle ; stockage complètement sec et non fermé ;
- manuel Moka Express 2021 : ne pas frapper l’entonnoir pour retirer le marc ;
- manuel Moka Express 2021 : vérifier la plaque filtrante et, si nécessaire, libérer les trous avec une brosse souple ou une aiguille ;
- manuel Moka Express 2021 : actionner périodiquement le petit piston de la soupape pendant les opérations normales de lavage ;
- Bialetti NZ — Venus Induction Copper : Venus déclarée non compatible lave-vaisselle ; les produits chimiques agressifs du lave-vaisselle peuvent endommager la surface colorée de cette variante ;
- Bialetti NZ — Moka Induction Bi-Layer Black : Moka Induction déclarée non compatible lave-vaisselle ;
- BfR : sur les cafetières espresso en aluminium, le lave-vaisselle peut retirer la couche protectrice formée à l’usage et augmenter temporairement le transfert d’aluminium lors de la préparation suivante.

Limites de preuve :
- la règle `sans détergent` est bornée à la notice Moka Express documentée ;
- les pages Bialetti NZ sont régionales et servent ici à montrer la portée modèle, pas à déclarer une règle mondiale sur toutes les générations ;
- la raison chimique donnée pour la Venus Copper concerne cette finition ;
- le BfR est utilisé pour expliquer l’enjeu du lave-vaisselle sur l’aluminium, pas pour créer une alerte sanitaire ;
- aucune procédure de nettoyage d’Alessi ou d’autres marques n’est inventée.

## 4. Search intent / content refresh

Questions couvertes après réécriture :
- comment nettoyer après chaque café ;
- peut-on mettre une moka au lave-vaisselle ;
- faut-il utiliser du savon ;
- comment contrôler filtre et soupape ;
- faut-il sécher avant remontage ;
- différence entre nettoyage et détartrage ;
- quand remplacer le joint ;
- quand une fuite ou une soupape sort du simple entretien.

Valeur existante préservée :
- refroidissement avant démontage ;
- ne pas forcer sur la poignée ;
- ne pas frapper l’entonnoir ;
- contrôle filtre / soupape / joint ;
- frontière avec le détartrage.

Renforcé :
- modèle avant matériau ;
- preuves actuelles Venus / Moka Induction ;
- stockage Moka Express sec et non fermé ;
- tableau de décision nettoyage / détartrage / remplacement / diagnostic ;
- anti-mythe `inox = lave-vaisselle` ;
- anti-mythe `ne jamais laver une moka pour garder les huiles` ;
- frontière de sécurité plus explicite ;
- qualification du visuel BFL.

## 5. Naturalité / humanizer / general-writing

PASS.

Le texte est procédural et concret. Il évite le ton « secret italien », les recettes maison non sourcées et les injonctions universelles. Il ne prétend ni avoir testé les produits, ni avoir observé personnellement une usure ou une réaction chimique.

Le langage reste orienté décision : identifier le modèle → suivre sa notice → sécher → distinguer tartre / usure / fuite.

## 6. Anti-AI / comparaison cluster

PASS.

La structure est propre au nettoyage : routine, notice, passages, séchage, limites du lave-vaisselle, handoff entretien/dépannage.

Elle reste distincte :
- du détartrage, qui traite les dépôts minéraux et une procédure acide ponctuelle ;
- du guide joint, qui traite la pièce d’usure et son remplacement ;
- du guide fuite, qui traite jonction, soupape et sécurité ;
- du guide aluminium/inox, qui traite le matériau comme critère de choix.

Les tableaux servent à distinguer les actions et les niveaux de preuve, pas à remplir artificiellement la page.

## 7. SEO / GEO / maillage

- title/H1 : intention directe `nettoyer une cafetière italienne` ;
- meta enrichie avec lave-vaisselle, filtre, soupape, séchage et détartrage ;
- réponse courte extractible ;
- sous-réponses citables : Moka Express à la main, Venus non lave-vaisselle, Moka Induction non lave-vaisselle, filtre / soupape / joint distincts ;
- entités : Bialetti Moka Express, Venus, Moka Induction ;
- maillage vers détartrage, changement du joint et fuite / soupape ;
- aucune affiliation requise pour rendre la page utile.

## 8. Technique

Résultat confirmé :
- canonical : `https://cafetiere-italienne.be/guides/nettoyer-cafetiere-italienne/` ;
- robots : `noindex,follow` ;
- HTML régénéré depuis `scripts/guide-content-materials-care.mjs` ;
- heading image `La Moka Express : lavage à la main` conservé pour le marker existant ;
- image BFL existante conservée ;
- caption explicite et non probatoire ;
- aucun nouvel appel BFL ;
- liens internes contrôlés ;
- blockers Guide machine contrôlés ;
- reproductibilité du HTML généré contrôlée ;
- rendu visuel Guides contrôlé.

Gates exécutés sur la version finale :
- `Regenerate and quality-check Guide cluster` #78 — success ;
- `Validate Guide workflow` #79 — success, reproductibilité HTML comprise ;
- `Visual design review` #194, job `visual-pages (guides)` — success.

Le HTML final conserve la nouvelle meta, `noindex,follow`, le canonical attendu, le tableau par modèle, la procédure Moka Express bornée, les handoffs vers détartrage / joint / fuite et la légende qualifiée du visuel BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | manque principal = portée modèle insuffisante et intention lave-vaisselle/savon trop peu traitée |
| `seo-keyword` | PASS avec limite | intention et sous-intentions validées qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | couvre routine, savon, lave-vaisselle, pièces, séchage, tartre et dépannage |
| `content-refresh` | PASS | routine existante conservée et enrichie avec preuves actuelles |
| `fact-check` pré-rédaction | PASS | registre de preuves actualisé dans le brief |
| `evidence-based-reviews` | N/A | aucun jugement expérientiel revendiqué |
| `affiliate-value` | PASS | réponse complète sans achat requis |
| `content-brief-authoring` | PASS | brief avec preuves, exclusions, frontières et image decision |
| `content-and-copy` | PASS | réécriture dans la source JS |
| `fact-check` post-rédaction | PASS | claims bornés aux notices/pages fabricant et BfR ; rendu final contrôlé |
| `internal-linking-audit` | PASS | détartrage, joint et fuite sont les handoffs logiques ; liens contrôlés par CI |
| `humanizer` | PASS | pas de pseudo-expertise ni de folklore |
| `general-writing` | PASS | progression actionnable, phrases et tableaux fonctionnels |
| `anti-ai-slop` | PASS | pas de FAQ générique ni de listes de produits maison |
| comparaison cluster | PASS | rôle distinct entretien courant / détartrage / réparation |
| `seo-onpage` | PASS | title/meta/H1 cohérents et HTML final vérifié |
| `seo-technical` | PASS | canonical, robots, liens, blockers et reproductibilité validés |
| `seo-best-practices` | PASS / applicable limité | aucune structure artificielle ajoutée |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — EXISTING_IMAGE | visuel existant conservé et qualifié ; aucun nouvel appel BFL |
| `editorial-qa` | PASS | intention, valeur, factualité, naturel, frontières, machine gates et rendu visuel validés |

## 10. Blockers et corrections requises

Manques corrigés :
- ancienne review trop condensée → review skill par skill ;
- page trop centrée sur Moka Express sans comparaison de portée → ajout Venus / Moka Induction ;
- risque `inox = lave-vaisselle` → contredit avec exemples fabricant actuels ;
- règle `sans détergent` susceptible d’être généralisée → explicitement bornée à la Moka Express documentée ;
- séchage/rangement trop vague → stockage sec et non fermé ajouté pour la Moka Express ;
- filtre / soupape / joint peu hiérarchisés → section et tableau dédiés ;
- frontière nettoyage / détartrage / usure / sécurité trop courte → matrice de décision ajoutée ;
- visuel BFL sans caption → qualification persistée et vérifiée dans le HTML final.

Blocker restant : aucun blocker éditorial, machine ou visuel identifié dans cette passe.

## 11. Verdict et prochaine étape

`PASS — READY_FOR_HUMAN_VALIDATION`

La page atteint le niveau de profondeur retenu pour les Guides avec une trace skill par skill comparable aux URLs déjà validées.

Deux gates restent volontairement `N/A` :
- `evidence-based-reviews`, car aucun jugement expérientiel n’est revendiqué ;
- `seo-drift`, car aucune baseline avant/après exploitable n’est disponible.

Le `seo-keyword` reste limité à une validation qualitative faute de données GSC / volume propres au site.

Ne pas indexer automatiquement. Conserver `noindex,follow` jusqu’à validation humaine explicite.
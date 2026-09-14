# AUDIT — cafetiere-italienne-vs-espresso

- URL : `/guides/cafetiere-italienne-vs-espresso/`
- Date : 14 septembre 2026
- Mode : `AUDIT` → `DEEP_REWRITE` → strict skill-by-skill review
- Décision d’origine : `DEEP_REWRITE`
- État après correction : `PUBLISH_REVIEW_IN_PROGRESS`
- Confiance éditoriale : élevée
- Robots : `noindex,follow` à conserver
- Source de vérité : `scripts/guide-content-troubleshooting.mjs`
- Publication : validation humaine requise avant toute décision d’indexation

## 1. Intention et rôle dans le cluster

Type dominant : `EXPLAINER + CHOICE`.

Tâche lecteur : comprendre pourquoi moka et espresso ne sont pas la même méthode, puis choisir le système cohérent avec son usage.

Frontières :
- définition/histoire du moka → `/cafe-moka/quest-ce-que-le-cafe-moka/` ;
- préparation moka → `/guides/comment-utiliser-cafetiere-italienne/` ;
- mouture moka → `/guides/mouture-cafetiere-italienne/` ;
- choix d’une moka → `/guides/comment-choisir-cafetiere-italienne/` ;
- sélection de produits → `/comparatifs/`.

L’ancienne version avait la bonne thèse mais restait un résumé technique trop court. Elle ne traitait presque pas le volume, le degré de contrôle, les boissons au lait, les faux raccourcis ou la décision finale d’usage.

## 2. Architecture et profondeur utile

Nouvel ordre fonctionnel :
1. choix rapide par usage ;
2. mécanisme de pression ;
3. statut des « 9 bar » ;
4. mouture et tassement ;
5. volume servi ;
6. texture / crema ;
7. niveau de contrôle ;
8. boissons au lait ;
9. entretien / système complet ;
10. raccourcis à éviter ;
11. tableau final de décision.

La page explique avant de recommander. Elle ne transforme pas le sujet en duel de produits.

## 3. Preuves et factualité

Claims vérifiés :
- Bialetti : Moka Express remplie sous la soupape, café non tassé, chauffe faible à moyenne ;
- Bialetti NZ : mouture medium-fine recommandée pour la moka ; une mouture pour machine espresso électrique peut être trop fine ;
- Bialetti NZ : Moka Express 3 tasses ≈ 130 ml et 6 tasses ≈ 250 ml, chiffres bornés explicitement à cette gamme ;
- Navarini et al. : la moka utilise la pression développée dans la chaudière chauffée ; l’air initial dans la chaudière intervient et l’extraction peut commencer avant l’ébullition atmosphérique ;
- SCA 2021 : l’espresso est un café concentré brassé sous pression ; la machine espresso force de l’eau pressurisée à travers un lit de café et un filtre ;
- SCA : la définition historique SCAA situe l’espresso autour de 25–35 ml, 9–10 atmosphères et 20–30 s ;
- SCA : la pratique réelle a évolué et ne justifie pas de transformer « 9 bar » en loi universelle ;
- SCA : le lit de café espresso est placé dans un panier et généralement tassé ;
- SCA : la buse vapeur est un composant possible des machines espresso, pas une propriété universelle de toutes les machines.

Limites de preuve respectées :
- aucun chiffre universel de pression moka ;
- aucune hiérarchie de qualité moka vs espresso ;
- aucune généralisation de caféine par méthode ;
- aucune affirmation que toute machine espresso possède une buse vapeur ;
- aucun claim de prix ou de coût d’entretien non vérifié ;
- le vocabulaire marketing « espresso » employé sur certaines fiches moka n’est pas repris comme définition technique.

## 4. Valeur existante à préserver / content refresh

Préservé :
- moka ≠ espresso machine ;
- différence de mécanisme ;
- non-tassement côté moka ;
- absence de hiérarchie absolue.

Renforcé :
- nuance historique sur les 9–10 atmosphères ;
- explication thermo-fluidique plus précise de la moka ;
- comparaison des volumes avec exemple Moka Express borné ;
- crema et texture sans faux score de qualité ;
- contrôle des variables ;
- usage lait ;
- système complet et routine ;
- tableau de décision par priorité ;
- section anti-raccourcis.

## 5. Naturalité / humanizer / general-writing

PASS éditorial.

La prose évite :
- « la machine espresso est meilleure » ;
- les slogans « 9 bar = vrai espresso » ;
- les faux chiffres universels pour la moka ;
- le vocabulaire pseudo-scientifique sans utilité ;
- les formulations commerciales de type « upgrade » ;
- la répétition mécanique de la structure des guides matériaux/induction.

Le texte assume les zones variables selon l’équipement au lieu de fabriquer des règles absolues.

## 6. Anti-AI / comparaison cluster

PASS éditorial.

Structure propre à ce sujet : mécanisme → repère de pression → gestes incompatibles → résultat en tasse → niveau de contrôle → usages → décision.

Rôles voisins distincts :
- `quest-ce-que-le-cafe-moka` = définition et polysémie du mot moka ;
- `comment-utiliser` = procédure ;
- `mouture` = réglage technique ;
- `comment-choisir` = choix d’un modèle moka ;
- `vs-espresso` = choix entre deux méthodes.

Le nouveau contenu ne duplique pas l’histoire de la moka ni un comparatif produit.

## 7. SEO / GEO / maillage

- H1 conserve l’intention principale « cafetière italienne ou machine espresso » ;
- réponse immédiate par usage ;
- meta couvre mécanisme, pression, mouture, volume, crema, contrôle et choix ;
- entités utiles : Bialetti, Moka Express, Specialty Coffee Association, espresso, porte-filtre, crema ;
- sous-réponses citables : « 9 bar = repère historique, pas loi universelle », « ne pas tasser la moka », « volume moka ≠ shot espresso », « pression dans les deux méthodes ≠ même système » ;
- liens internes vers mouture, capacités, choix et utilisation moka ;
- aucun lien marchand ou comparatif produit forcé dans le corps décisionnel.

## 8. Technique

Attendus après CI :
- canonical : `https://cafetiere-italienne.be/guides/cafetiere-italienne-vs-espresso/` ;
- robots : `noindex,follow` ;
- HTML généré depuis `scripts/guide-content-troubleshooting.mjs` ;
- liens internes valides ;
- blockers Guide machine passants ;
- reproductibilité du HTML ;
- rendu visuel Guides valide ;
- aucun nouvel asset BFL.

## 9. Trace skill par skill — parité `bloc-notes-numerique`

| Skill / gate | Statut | Trace / résultat |
|---|---|---|
| `seo-content-audit` | PASS | bonne thèse initiale, mais profondeur de décision insuffisante |
| `seo-keyword` | PASS avec limite | intention comparative validée qualitativement ; pas de GSC/volume propre au site |
| `search-intent` | PASS | comparaison de méthodes + aide au choix, sans dérive produit |
| `content-refresh` | PASS | noyau correct conservé, raccourcis corrigés, nouveaux arbitrages ajoutés |
| `fact-check` pré-rédaction | PASS | registre de preuves complet persisté dans le brief |
| `evidence-based-reviews` | N/A | aucun test ou avis expérientiel revendiqué |
| `affiliate-value` | PASS | page utile sans lien affilié, choix fondé sur besoins et contraintes |
| `content-brief-authoring` | PASS | brief étendu avec thèse, preuves, claims interdits, frontières et image decision |
| `content-and-copy` | PASS | correction portée dans la source JS, pas dans le HTML généré uniquement |
| `fact-check` post-rédaction | PASS éditorial | claims bornés aux sources ; validation machine encore à confirmer |
| `internal-linking-audit` | PASS éditorial | liens vers mouture, capacités, choix et utilisation au moment logique |
| `humanizer` | PASS | ton pédagogique, pas de duel artificiel ni faux vécu |
| `general-writing` | PASS | jargon expliqué, nuances conservées |
| `anti-ai-slop` | PASS | aucun bloc FAQ générique, structure dictée par la décision |
| comparaison cluster | PASS | frontières nettes avec définition moka, utilisation et comparatifs |
| `seo-onpage` | PASS éditorial | title/meta/H1/intention cohérents ; rendu final à confirmer |
| `seo-technical` | PENDING CI | canonical, robots, liens, blockers et reproductibilité à confirmer |
| `seo-best-practices` | PASS / applicable limité | aucun ajout artificiel requis |
| `seo-drift` | N/A | aucune baseline avant/après exploitable |
| `editorial-image-planner` | PASS — NO_NEW_IMAGE | tableau + explication plus probants qu’une illustration ; aucun appel BFL |
| `editorial-qa` | PASS éditorial | intention, valeur, factualité, naturel et frontières validés ; machine/visuel à confirmer |

## 10. Blockers et corrections requises

Blockers éditoriaux corrigés :
- page trop courte pour une vraie décision moka vs espresso → corrigé ;
- « 9–10 atmosphères » trop proche d’une définition absolue → requalifié comme repère historique ;
- mécanisme moka simplifié en « pression de vapeur » → reformulé avec rôle de la chaudière chauffée et de l’air initial ;
- volume en tasse absent → ajouté avec exemples Moka Express explicitement bornés ;
- lait / buse vapeur absent → ajouté avec qualification « selon le modèle » ;
- risque de hiérarchie qualité → neutralisé ;
- risque de généralisation caféine / crema / prix → traité explicitement ;
- choix final trop abstrait → tableau par besoin ajouté.

Blocker restant avant verdict final :
- confirmer les gates GitHub réels de régénération, liens, blockers, reproductibilité et rendu Guides.

## 11. Verdict et prochaine étape

État actuel : `PUBLISH_REVIEW_IN_PROGRESS`.

Verdict final à inscrire uniquement après confirmation des gates :
- `PASS — READY_FOR_HUMAN_VALIDATION`, ou
- `FAIL — KEEP_NOINDEX`.

Ne pas indexer automatiquement.

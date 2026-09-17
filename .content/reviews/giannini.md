# PUBLISH_REVIEW — Giannini

Date : 17 septembre 2026  
Mode : `brand-analysis-workflow` → `PUBLISH_REVIEW`

Status: `PASS — READY_FOR_HUMAN_VALIDATION`

## 1. Machine gate

PASS sur le workflow Brand final après intégration de Giannini :

- build global ;
- liens internes ;
- `validate_brands.py` ;
- `validate_brand_quality.py` ;
- contrôle structurel du hub `/marques/`.

La page conserve `noindex,follow` et un canonical self-referential vers `/marques/giannini/`.

## 2. Intention

PASS.

La page remplit un rôle de `BRAND_HUB` distinct de Bialetti et Alessi. Elle n’essaie pas de reproduire un catalogue de modèles ni une lecture purement design : elle aide d’abord à arbitrer entre architecture de fermeture, taille, filtre réducteur et compatibilité induction réelle.

## 3. Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Observation |
|---|---|---|
| Giannina en inox avec fermeture non vissée | `USED` | C’est le premier critère de la réponse courte et le principal axe différenciant de la page. |
| Tua en inox avec fermeture à vis | `USED` | Présent dans le tableau de gamme et développé dans une section dédiée. |
| Giannina vs Tua comme différence mécanique, pas comme hiérarchie de prestige | `USED` | La page exclut explicitement la lecture « moins chère / plus haut de gamme ». |
| Tradizione associée à Carlo Giannini et 1968 | `USED` | Contexte bref dans la section Tradizione vs Restyling, sans dérive corporate. |
| Restyling associé à Khodi Feiz | `USED` | Présent dans la section dédiée. |
| Restyling : évolution du manche et du couvercle | `USED` | Les changements sont expliqués comme fonctionnels et esthétiques, pas comme simple coloris. |
| Giannina Restyling 3/1 et 6/3 documentées pour l’induction | `USED` | Présent dès la réponse courte puis développé dans la section induction. |
| Giannina Restyling 1 tasse non induction sur la fiche actuelle consultée | `USED` | Utilisé comme contre-exemple pour empêcher la généralisation « inox = induction ». |
| Petit diamètre / seuil de détection du foyer | `USED` | Deuxième hard gate explicite, avec les dimensions documentées dans les sources consultées. |
| Filtre réducteur des formats 3/1 et 6/3 | `USED` | Fait partie des quatre décisions et dispose d’une section dédiée. |
| Absence de filtre réducteur sur la 1 tasse consultée | `USED` | Sert de limite à la généralisation des formats réductibles. |
| Tua 3/1 et 6/3 documentées compatibles induction sur la source consultée | `USED` | Présent dans la section Tua avec qualification de la source. |
| Écosystème de pièces / après-vente | `USED` | Présent avec limitation explicite : pas de promesse de stock permanent ni d’universalité. |
| Handoff vers le guide induction | `USED` | Présent dans la section induction et dans la route finale. |
| Handoff vers les capacités | `USED` | Présent dans la section filtre réducteur et dans la route finale. |
| Handoff vers le comparatif inox | `USED` | Présent dans la section Tua et dans la route finale. |
| Handoff vers le comparatif général | `USED` | Présent pour les lecteurs qui hésitent encore entre marques. |
| Handoff vers le comparatif design | `EXCLUDED` | Non nécessaire au parcours final : l’angle dominant Giannini est mécanique/architecture ; les routes inox et comparaison générale couvrent mieux l’étape suivante. |
| Nina et autres lignes secondaires du catalogue historique | `EXCLUDED` | Documentation actuelle et disponibilité insuffisamment fortes pour en faire une branche de décision centrale en 2026. |
| Assortiment mondial exact / disponibilité par marché | `EXCLUDED` | Donnée channel-sensitive et non nécessaire au rôle du hub. |

**MISSING décisionnel : aucun.**

## 4. Fact-check et limites de preuve

PASS avec limitation documentée.

Les claims publiés restent dans le périmètre effectivement vérifié : architecture, fermeture, tailles, filtre réducteur, compatibilité induction et diamètre de détection. La page n’affirme pas que Giannina produit un meilleur café, qu’elle est plus fiable ou que sa fermeture augmente automatiquement la durée de vie du joint.

La principale limite est la source : le catalogue officiel Giannini 2026 n’a pas fourni une base facilement exploitable lors de la recherche. Les éléments actuels sont donc triangulés avec des distributeurs spécialisés et complétés par une documentation de gamme antérieure. Cette limite est prise en compte en excluant les branches insuffisamment actuelles plutôt qu’en complétant le catalogue de mémoire.

## 5. Autres gates substantiels

- Intention : PASS.
- Valeur affiliée originale : PASS ; la page reste utile sans lien marchand.
- Hands-on : PASS ; aucun test propriétaire n’est revendiqué.
- Evidence-based reviews : N/A ; aucun claim subjectif de goût, facilité ou fiabilité n’est utilisé comme argument.
- AI-slop / industrialisation : PASS ; la structure est dictée par la fermeture, le filtre réducteur et l’induction, et ne reproduit ni Bialetti ni Alessi.
- Cannibalisation : aucun blocker identifié ; aucun faux modèle Giannini n’a été créé pour remplir le cluster.
- SEO / technique : PASS ; title, H1, meta, canonical, robots, navigation, liens internes et sources sont cohérents.
- Hub Marques : PASS après correction de l’insertion de la troisième carte ; le validateur contrôle désormais les cartes imbriquées/mal fermées.

## 6. Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

Aucun `MISSING` décisionnel n’est identifié. La page doit rester `noindex,follow` tant que la validation humaine explicite et une instruction distincte d’indexation n’ont pas été données.
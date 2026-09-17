# Model analysis — Bialetti Venus

Date : 2026-09-17
Mode : `model-analysis-workflow` → `PUBLISH_REVIEW`
Status : `PASS — READY_FOR_HUMAN_VALIDATION`

## Machine gate

`validate_models.py` doit rester au vert après régénération. La page conserve `noindex,follow` et son canonical propre `/modeles/bialetti-venus/`.

## Intent gate

PASS — la page remplit un rôle `PRODUCT` précis : aider à choisir une Venus selon la taille, le volume préparé, la plaque et les contraintes propres au modèle, sans simuler un test produit.

## Research-to-draft coverage

| Élément décisionnel du research brief | Statut | Consommation dans le draft |
|---|---|---|
| Construction inox 18/10 | `USED` | section construction ; différenciation sans claim gustatif |
| 2 tasses ≈ 85 ml | `USED` | matrice tailles / volumes |
| 2 tasses non compatible induction | `USED` | hard gate d'ouverture + matrice + conclusion |
| 4 tasses ≈ 170 ml / base ≈ 9,5 cm / induction | `USED` | matrice + section détection induction |
| 6 tasses ≈ 235 ml / base ≈ 10,5 cm / induction | `USED` | matrice + section détection induction |
| 10 tasses ≈ 460–500 ml selon marché | `USED` | matrice avec qualification marché / disponibilité |
| Diamètre minimal détecté par la plaque | `USED` | hard gate induction distinct de la seule compatibilité matériau |
| Les “tasses” moka ne sont pas des mugs | `USED` | section tailles / volumes |
| Choisir la moka pour sa quantité habituelle | `USED` | conséquence pratique après la matrice |
| Entretien actuel : lavage manuel / pas lave-vaisselle | `USED` | section entretien |
| Anciennes fiches “dishwasher safe” contradictoires | `USED` | contradiction explicitée et arbitrée en faveur de la documentation actuelle |
| Entonnoirs Venus/Musa/Kitty par taille | `USED` | section pièces / consommables |
| Joints et filtres Venus/Musa/Kitty par taille | `USED` | section pièces / consommables |
| Moka Induction = base bi-layer inox/aluminium + haut aluminium | `USED` | comparaison modèle frère |
| Volumes Moka Induction 2/4/6 ≈ 100/150/280 ml | `USED` | comparaison modèle frère ; évite l'équivalence trompeuse du nombre de tasses |
| Guide détaillé des capacités | `HANDOFF` | `/capacites/` |
| Dosage générique moka | `HANDOFF` | `/guides/dosage-cafe-cafetiere-italienne/` |
| Vérification générale de l'induction | `HANDOFF` | `/guides/cafetiere-italienne-induction-compatibilite/` |
| Aluminium vs inox en général | `HANDOFF` | `/guides/cafetiere-italienne-aluminium-ou-inox/` |
| Nettoyage générique | `HANDOFF` | `/guides/nettoyer-cafetiere-italienne/` |
| Couleurs / finitions décoratives | `EXCLUDED` | ne changent pas la décision fonctionnelle documentée ici |
| Prix figé | `EXCLUDED` | information volatile, non nécessaire au rôle de la fiche |
| Synthèse d'avis utilisateurs | `EXCLUDED` | pas nécessaire pour une fiche PRODUCT sans verdict expérientiel |

Aucun élément décisionnel du research brief n'est en statut `MISSING`.

## Factuality / evidence

PASS — les caractéristiques centrales reposent d'abord sur les sources Bialetti. La 10 tasses est volontairement qualifiée comme disponibilité européenne / variable selon marché au lieu d'être présentée comme assortiment universel. La contradiction lave-vaisselle est conservée au lieu d'être lissée.

## Affiliate value

PASS — la page apporte des conséquences d'achat absentes d'une simple paraphrase marchand : taille réellement préparée, exclusion de la 2 tasses sur induction, détection du diamètre, compatibilité des pièces et différence de construction/volume avec Moka Induction.

## Model / cluster distinction

PASS — Venus est traitée comme une fiche tout inox où taille et plaque sont les hard gates. La comparaison avec Moka Induction reste locale et décisionnelle ; elle ne remplace pas un comparatif général et ne duplique pas la page sœur.

## Trust / editorial

PASS — aucun faux hands-on, aucun raccourci `inox = meilleur goût`, pas de prix figé, pas de métadiscours SEO et pas de structure imposée par un template PRODUCT.

## SEO / technical

PASS sous réserve du workflow machine final : title et H1 alignés, canonical propre, `noindex,follow`, sources externes, maillage contextuel vers capacités, guides, accessoires, comparatif et modèle frère.

## Verdict

`PASS — READY_FOR_HUMAN_VALIDATION`

La page doit rester `noindex,follow` jusqu'à validation humaine explicite puis instruction explicite de la rendre indexable.

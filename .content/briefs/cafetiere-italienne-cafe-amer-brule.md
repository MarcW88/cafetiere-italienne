# Brief — cafetiere-italienne-cafe-amer-brule

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type dominant: HOW_TO / DIAGNOSTIC

## Intention
Répondre à « pourquoi ma cafetière italienne fait un café amer / brûlé ? » avec un ordre de diagnostic qui distingue le goût du café, un défaut de préparation et un problème mécanique.

## Tâches lecteur
1. Comprendre que « amer », « brûlé » et « intense » ne sont pas synonymes.
2. Corriger d’abord les causes explicitement documentées par le fabricant.
3. Savoir quand ajuster la mouture ou le café.
4. Savoir quand arrêter les essais de recette et passer au dépannage mécanique.

## Thèse
Sur les modèles Bialetti actuellement vérifiés, le premier diagnostic ne consiste pas à changer de grains : contrôler le niveau d’eau, utiliser une chauffe faible à moyenne et retirer la moka dès que la préparation est terminée. Ensuite seulement viennent mouture, tassage puis profil du café.

## Valeur propre de l’URL
- diagnostic ordonné plutôt qu’une liste de « hacks » ;
- distinction goût / comportement de la cafetière ;
- hard gates fabricant avant préférences sensorielles ;
- séparation claire entre amertume de préparation et profil de torréfaction ;
- protocole domestique simple qui ne change qu’une variable à la fois ;
- frontière sécurité explicite.

## Frontières du cluster
- remplissage / quantité → `/guides/dosage-cafe-cafetiere-italienne/` ;
- réglage de mouture → `/guides/mouture-cafetiere-italienne/` ;
- séquence complète → `/guides/comment-utiliser-cafetiere-italienne/` ;
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/` ;
- fuite / soupape → `/guides/cafetiere-italienne-fuite-vapeur/`.

## Registre de preuves — vérifié le 14 septembre 2026

| Claim | Source | Statut / portée |
|---|---|---|
| Eau juste sous la soupape | Bialetti NZ Moka Express / Venus / Moka Induction | VERIFIED pour ces gammes |
| Surremplissage → café bouilli, amer ou brûlé | Bialetti NZ Moka Express / Venus / Moka Induction | VERIFIED, formulation fabricant |
| Chauffe faible à moyenne | Bialetti NZ | VERIFIED |
| Sur gaz, flamme sous la base | Bialetti NZ | VERIFIED |
| Retirer immédiatement quand la partie supérieure est remplie | Bialetti NZ | VERIFIED |
| Ne pas laisser bouillir / ne pas chauffer à pleine puissance | Bialetti NZ | VERIFIED |
| Medium-fine, granuleux et non poudreux | Bialetti NZ Moka Express | VERIFIED pour la Moka Express |
| Mouture espresso très fine peut colmater une Bialetti | Bialetti NZ, Using Bialetti Coffee Makers | VERIFIED dans la documentation fabricant régionale |
| Ne pas tasser | Bialetti | VERIFIED |
| Amertume influencée par variété, traitement, torréfaction et préparation | Hu et al., 2025, revue scientifique | VERIFIED comme facteurs multiples, pas causalité unique |
| Torréfaction sombre étudiée avec perceptions plus amères / brûlées | Cleve et al., 2025 | VERIFIED dans le protocole étudié ; ne pas généraliser à tout café |
| Refroidir systématiquement la chaudière sous l’eau froide | sources fabricant consultées | NOT FOUND comme instruction obligatoire ; ne pas présenter comme règle fabricant |
| Un goût amer prouve une mouture trop fine | — | EXCLUDED : symptôme multifactoriel |
| Une torréfaction foncée est mauvaise pour moka | — | EXCLUDED : préférence / profil, pas incompatibilité technique |

## Sources retenues
1. Bialetti NZ — Moka Express : `https://www.bialetti.co.nz/products/moka-express`
2. Bialetti NZ — Venus : `https://www.bialetti.co.nz/products/bialetti-venus-induction-copper`
3. Bialetti NZ — Moka Induction : `https://www.bialetti.co.nz/products/bialetti-moka-induction-bi-layer-black`
4. Bialetti NZ — Using Bialetti Coffee Makers : `https://www.bialetti.co.nz/blogs/making-great-coffee/using-bialetti-coffee-makers`
5. Hu et al., 2025 — coffee bitterness review : `https://pubmed.ncbi.nlm.nih.gov/40460304/`
6. Cleve et al., 2025 — roasting level and sensory perception : `https://pubmed.ncbi.nlm.nih.gov/40392949/`

## Structure dérivée de la recherche
1. réponse courte / ordre de vérification ;
2. distinguer amer, brûlé, intense ;
3. niveau d’eau ;
4. chauffe ;
5. fin d’extraction ;
6. mouture / tassage ;
7. café / torréfaction ;
8. protocole en deux préparations ;
9. erreurs à éviter ;
10. stop sécurité ;
11. sources.

## Editorial boundaries
- ne pas inventer de température, temps ou puissance universels ;
- ne pas imposer eau froide sur la chaudière comme geste obligatoire ;
- ne pas transformer un résultat sensoriel en diagnostic certain ;
- ne pas dire que « dark roast = mauvais » ;
- ne pas recommander de continuer les essais si soupape / fuite / blocage ;
- ne pas revendiquer de test produit ou de dégustation réalisée par le site.

## Internal linking
- dosage après section niveau d’eau ;
- méthode complète après fin d’extraction ;
- mouture après diagnostic flux lent ;
- choix du café après stabilisation de la technique ;
- fuite / vapeur dès qu’un symptôme mécanique apparaît.

## Image decision
EXISTING_IMAGE — conserver `cafe-amer-chauffe-maitrisee.webp`.

Le visuel doit rester une illustration générique d’une chauffe modérée : aucune puissance, température, durée, flamme « parfaite » ou preuve expérimentale ne peut être déduite de l’image. Aucun nouvel appel BFL nécessaire.

## Risques
- surinterpréter le goût comme preuve mécanique ;
- reprendre des « hacks moka » populaires sans source fabricant ;
- mélanger diagnostic de goût et dépannage de sécurité ;
- présenter les données Bialetti NZ comme universelles à toute cafetière italienne ;
- transformer des résultats scientifiques sur la torréfaction en recommandation absolue.

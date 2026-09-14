# Brief — Cafetière italienne aluminium ou inox

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: CHOICE
Date de vérification: 14 septembre 2026

## Intention

Aider à choisir entre aluminium et inox sans transformer le matériau en proxy de qualité, de goût, de durabilité ou de compatibilité universelle.

La recherche actuelle autour de la requête fait apparaître quatre sous-questions récurrentes qui doivent être couvertes sans reprendre les raccourcis de la SERP :

1. compatibilité induction ;
2. différences de chauffe / conductivité ;
3. entretien ;
4. sécurité / exposition à l’aluminium.

Aucune donnée GSC ou volume de recherche propre au site n’est disponible dans cette passe : ne pas inventer de priorité quantitative.

## Tâche lecteur

À la fin de la page, le lecteur doit pouvoir :

- éliminer un matériau ou une variante incompatible avec sa plaque ;
- comprendre ce que la conductivité et la densité changent réellement, sans en déduire automatiquement un temps d’extraction ou un goût ;
- distinguer propriété du matériau et propriété du modèle ;
- ne pas considérer l’inox comme synonyme automatique d’induction ;
- ne pas considérer une moka aluminium comme dangereuse par principe ;
- savoir quand le matériau ne suffit plus et qu’il faut comparer les références exactes.

## Thèse

Le matériau est un filtre et un ensemble de propriétés physiques, pas une note globale. La plaque et la taille éliminent d’abord les variantes impossibles ; la conductivité et la densité expliquent ensuite certaines tendances, tandis que la compatibilité, le poids réel, l’entretien, les pièces, l’ergonomie et le prix restent des propriétés à vérifier sur le modèle exact.

## Valeur propre de l’URL

Cette page doit aller plus loin que `/guides/comment-choisir-cafetiere-italienne/` en répondant spécifiquement aux mythes et arbitrages liés aux matériaux :

- aluminium vs inox au niveau physique ;
- matériau vs construction réelle ;
- induction et diamètre ;
- entretien documenté par modèle ;
- question sanitaire de l’aluminium ;
- cas où les deux matériaux restent valables.

Elle ne doit pas devenir un comparatif de modèles.

## Registre de preuves

| Claim | Type | Source | Portée / condition | Statut |
|---|---|---|---|---|
| Moka Express = aluminium de qualité alimentaire | fabricant | Bialetti | gamme Moka Express documentée | vérifié |
| Moka Express classique non compatible induction directe | fabricant | Bialetti | versions classiques ; adaptateur possible selon taille | vérifié |
| Moka Express = lavage à la main, pas lave-vaisselle | fabricant | Bialetti | modèle Moka Express | vérifié |
| Venus = inox 18/10 | fabricant/distributeur officiel | Bialetti NZ | Venus présentée sur la fiche consultée | vérifié |
| Venus 4 et 6 tasses adaptées à l’induction, 2 tasses non | fabricant/distributeur officiel | Bialetti NZ | tailles listées sur la fiche consultée | vérifié |
| 9090 = inox 18/10 + fond magnétique | fabricant | Alessi | gamme 9090 documentée | vérifié |
| 9090 1 tasse : vérifier une détection d’au moins 90 mm | fabricant | Alessi | variante 1 tasse | vérifié |
| L’aluminium possède une conductivité thermique nettement supérieure à l’acier / inox courant | source matériau | European Aluminium + Outokumpu | propriété matériau générale ; ne prédit pas le comportement d’une moka précise | vérifié |
| L’aluminium est beaucoup moins dense que l’inox | source matériau | Hydro + Outokumpu | propriété matériau générale ; ne prédit pas le poids final sans géométrie | vérifié |
| Les cafetières espresso aluminium ne doivent pas être écartées pour raison sanitaire par principe | institutionnel | BfR | usage normal ; entretien conforme | vérifié |
| Une couche protectrice se forme à l’usage et limite le transfert d’aluminium | institutionnel | BfR | cafetières espresso aluminium étudiées | vérifié |
| Le lave-vaisselle peut retirer cette couche et augmenter temporairement la libération | institutionnel | BfR | cafetières espresso aluminium étudiées | vérifié |
| Le BfR ne voit pas de raison de déconseiller leur usage mais recommande de ne pas les passer au lave-vaisselle | institutionnel | BfR | usage normal | vérifié |
| Aluminium ou inox produit systématiquement un meilleur goût | aucun niveau de preuve suffisant | — | ne pas affirmer | exclu |
| Inox est toujours plus durable / plus facile à entretenir | trop dépendant du modèle, finition et usage | — | ne pas généraliser | exclu |

## Sources principales

- Bialetti — composition de la Moka Express.
- Bialetti — utilisation, compatibilité et lavage de la Moka Express.
- Bialetti NZ — Venus, inox 18/10 et compatibilité induction selon taille.
- Alessi — 9090, inox 18/10, fond magnétique et diamètre minimal.
- European Aluminium — conductivité thermique générale de l’aluminium.
- Outokumpu — propriétés physiques des aciers inoxydables.
- Hydro — densité et conductivité typiques d’alliages d’aluminium.
- BfR — aluminium dans les aliments et produits de consommation, avec section spécifique aux cafetières espresso aluminium.

## Structure dérivée de la recherche

1. Réponse courte : compatibilité d’abord, propriétés physiques ensuite.
2. Ce que le matériau change réellement vs ce que le modèle doit confirmer.
3. Conductivité et densité : différences physiques sans extrapolation au goût ou au temps exact.
4. Cas aluminium : Moka Express, compatibilité et entretien.
5. Cas inox : Venus + 9090 pour montrer les limites du raccourci « inox = induction ».
6. Aluminium et santé : réponse institutionnelle BfR.
7. Si les deux matériaux conviennent : retour aux critères du modèle exact.
8. Matrice situation → décision.
9. Raccourcis à éviter.
10. Passage vers les comparatifs uniquement après clarification du besoin.

## Frontières

- choix général de la moka → `/guides/comment-choisir-cafetiere-italienne/`
- compatibilité induction détaillée → `/guides/cafetiere-italienne-induction-compatibilite/`
- nettoyage détaillé → `/guides/nettoyer-cafetiere-italienne/`
- sélection / classement de modèles → `/comparatifs/`
- volumes et besoins de contenance → `/capacites/`

## Maillage logique

- vers le guide induction lorsque la compatibilité devient la prochaine question ;
- vers le guide nettoyage lorsque l’entretien du modèle devient la prochaine question ;
- vers les comparatifs seulement après la décision matériau / plaque ;
- pas de quota de liens.

## Risques

- généraliser les propriétés d’une Moka Express à toutes les moka aluminium ;
- généraliser la Venus à tous les modèles inox ;
- confondre conductivité matériau et temps de chauffe réel du produit ;
- transformer la question sanitaire en discours anxiogène ;
- présenter l’inox comme systématiquement plus durable ou plus facile à nettoyer ;
- créer un faux classement aluminium vs inox ;
- dupliquer le guide général `comment-choisir`.

## Valeur existante à préserver

- priorité donnée à la plaque ;
- avertissement `inox ≠ induction automatique` ;
- exemples Moka Express, Venus et 9090 ;
- absence de faux test propriétaire ;
- passage vers les comparatifs seulement après clarification ;
- distinction entre matériau et modèle.

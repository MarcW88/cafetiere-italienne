# Brief — dosage-cafe-cafetiere-italienne

## Statut
UPDATED_AFTER_LIGHT_UPDATE

## Décision d’audit
- Décision : `LIGHT_UPDATE`
- Confiance : élevée
- Type dominant : `HOW_TO / EXPLAINER`
- État avant correction : article déjà utile, mais la justification du remplissage complet, le statut du libellé « tasse » et la validation inter-fabricants étaient encore insuffisamment documentés.

## Intention / tâche
Répondre à « combien de café et d’eau mettre dans une cafetière italienne ? » sans fabriquer un ratio universel en grammes, puis donner une méthode reproductible à quelqu’un qui veut malgré tout peser sa propre dose.

## Thèse
Sur une moka, le premier dosage est imposé par la géométrie et la notice du modèle : eau sous la soupape, panier rempli/nivelé sans tassage. La balance sert ensuite à mémoriser cette configuration sur sa propre cafetière ; elle ne remplace pas les repères physiques par une formule universelle.

## Valeur propre
- répondre directement au besoin « combien ? » sans recopier des tableaux de grammages non sourcés ;
- expliquer pourquoi « 3 tasses », « 6 tasses », etc. ne sont pas des multiplicateurs universels de grammes ou de millilitres ;
- distinguer remplissage mécanique, intensité en tasse et répétabilité ;
- documenter le sous-remplissage au lieu de le déconseiller par simple intuition ;
- donner une méthode de pesée personnelle : tarer le panier sec, remplir comme prévu, peser, noter modèle + café + mouture ;
- proposer une alternative cohérente quand on veut moins de boisson ou une tasse moins intense.

## Frontières
- mouture détaillée → `/guides/mouture-cafetiere-italienne/`
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/`
- méthode complète → `/guides/comment-utiliser-cafetiere-italienne/`
- choix de capacité → `/capacites/`
- goût amer/brûlé → `/guides/cafetiere-italienne-cafe-amer-brule/`

## Registre de preuves

### Claim 1 — Eau sous la soupape et café non tassé
- Affirmation : pour la Moka Express, Bialetti demande de remplir la base juste sous la soupape, d’insérer l’entonnoir et de le remplir de café moulu sans appuyer ni compacter.
- Source primaire : Bialetti Europe, « Comment utiliser la Moka Express ? »
- URL : https://bialetti-cookware.zendesk.com/hc/fr/articles/5416235346322-Comment-utiliser-la-Moka-Express
- Vérifié : 2026-09-14.
- Portée : Moka Express.
- Stabilité : élevée.

### Claim 2 — Une Bialetti stovetop doit être préparée pleine
- Affirmation : Bialetti NZ indique qu’une moka doit être préparée pleine ; sous-remplir l’eau ou le café affecte la pression et la qualité de la préparation, d’où la recommandation de choisir une taille correspondant au service habituel.
- Source primaire régionale : Bialetti NZ, Moka Express / FAQ « What size Bialetti Stovetop should I buy? »
- URL : https://www.bialetti.co.nz/products/moka-express
- Vérifié : 2026-09-14.
- Portée : gamme stovetop Bialetti décrite par ce site régional.
- Stabilité : moyenne à élevée.

### Claim 3 — Le nombre de « tasses » est un libellé de taille, pas une formule de dosage
- Affirmation : la fiche Moka Express Bialetti NZ publie des volumes approximatifs par taille, par exemple 3 tasses ≈ 130 ml et 6 tasses ≈ 250 ml ; elle précise que le volume réellement obtenu dépend notamment du volume d’eau et du café utilisé.
- Source : Bialetti NZ, Moka Express.
- Vérifié : 2026-09-14.
- Portée : Moka Express, données régionales produit.
- Usage éditorial : démontrer qu’il faut regarder la variante exacte plutôt que multiplier un chiffre générique « par tasse ».

### Claim 4 — La logique n’est pas propre à Bialetti
- Affirmation : Alessi décrit pour ses moka un rituel avec eau sous la soupape et café moulu ajouté dans le filtre puis nivelé doucement jusqu’au bord.
- Source primaire : Alessi, « Design icons for the perfect coffee ritual ».
- URL : https://uk.alessi.com/blogs/news/design-icons-for-the-perfect-coffee-ritual
- Vérifié : 2026-09-14.
- Portée : moka Alessi présentées dans ce guide de marque.
- Stabilité : moyenne.

## Unknowns / nuances
- Aucun fabricant vérifié ici ne fournit un tableau officiel universel de grammes de café par « tasse » applicable à toutes les moka.
- Ne pas transformer les exemples de volumes Moka Express en norme inter-marques.
- Le nombre de grammes occupant un panier peut changer avec le café et la mouture ; la page l’utilise seulement pour expliquer pourquoi la pesée doit être propre à la configuration réelle, pas pour imposer un chiffre.
- La formulation « sous-remplir affecte la pression et la qualité » est attribuée à Bialetti NZ ; ne pas l’universaliser comme loi constructeur de toutes les marques.
- Ne pas prétendre qu’un ratio 1:7, 1:10 ou autre est un standard moka en l’absence de source fabricant robuste.

## Claims à refuser
- « 7 g par tasse » comme règle universelle ;
- ratio universel eau/café applicable à toutes les moka ;
- demi-remplissage présenté comme équivalent à une moka plus petite ;
- tasse moka = volume fixe identique pour tous les fabricants ;
- causalité absolue entre une dose donnée et un goût précis ;
- visuel BFL utilisé comme preuve d’un grammage.

## Structure retenue
1. Réponse immédiate : eau / café / remplissage complet / balance optionnelle.
2. Pourquoi « x tasses » ne donne pas un grammage universel.
3. Ce que disent Bialetti et Alessi sur le remplissage.
4. Méthode de dosage pratique.
5. Comment créer son propre repère en grammes.
6. Pourquoi éviter le sous-remplissage sur les modèles Bialetti vérifiés.
7. Que changer si le café semble trop intense.
8. Variables à séparer : mouture, chauffe, café.
9. Sources.

## Maillage attendu
- `/capacites/`
- `/guides/mouture-cafetiere-italienne/`
- `/guides/comment-utiliser-cafetiere-italienne/`
- `/guides/quel-cafe-pour-cafetiere-italienne/`
- `/guides/cafetiere-italienne-cafe-amer-brule/` uniquement si le diagnostic le justifie.

## Image decision
- Visuel existant : `dosage-peser-panier.webp`.
- Décision : `EXISTING_IMAGE`.
- Rôle : illustrer la pesée d’un panier correctement rempli pour mémoriser une dose personnelle.
- Limite : aucun chiffre lisible ; aucune prétention à un grammage universel ; visuel non probant.

## Risques
- Être trop « anti-ratio » sans répondre au besoin de répétabilité.
- Remplacer un faux standard universel par un autre faux standard de marque.
- Cannibaliser le guide capacité en développant un tableau complet de tailles.
- Présenter le sous-remplissage comme dangereux sans source : rester sur la formulation fabricant vérifiée concernant pression/qualité.

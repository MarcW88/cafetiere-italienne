# Content brief — petite cafetière italienne

Date : 13 septembre 2026  
URL : `/comparatifs/petite-cafetiere-italienne/`

## Requête et intention
- Requête : `petite cafetière italienne`
- Intent : comparer de petits formats avant achat
- Rôle : décider par volume réel + plaque, pas répéter une page capacité.

## Décision du lecteur
Choisir un petit format qui correspond à la quantité réellement bue et à la plaque utilisée, sans supposer qu’une « 2 tasses » équivaut partout au même volume ou à deux personnes.

## Thèse
Hors induction, **Moka Express 1/2/3** donne l’échelle la plus lisible : env. 60/90/130 ml. Sur induction, **Moka Induction 2** (env. 100 ml, base 9,5 cm) devient plus cohérente si la plaque la détecte. **Alessi 9090 1** offre 70 ml avec un seuil induction explicite de 90 mm pour un choix premium ; **Pulcina 1** est une alternative design de 70 ml hors priorité induction ; **Carmencita** apporte une logique design/héritage avec des volumes plus élevés. Mini Express reste un format spécialisé à service direct.

## Sélection finale
- Moka Express 1/2/3
- Moka Induction 2
- Alessi 9090 1
- Alessi Pulcina 1
- Carmencita Pop 1/2 selon plaque

Reconsidérés : Mini Express 2, Venus 2, Barazzoni 2, ILSA Slancio 1/2.

## Critères
1. volume documenté en ml/cl ;
2. largeur/base ;
3. induction exacte ;
4. format standard vs service direct ;
5. entretien ;
6. design seulement après les contraintes physiques.

## Preuves obligatoires
Voir `.content/comparisons/petite-cafetiere-italienne-evidence-2026-09-13.md`.

## Architecture proposée
### 1. Commencer par les millilitres
Tableau 60 / 70 / 90 / 100 / 130 / 150 ml selon modèles.

### 2. Hors induction : Moka Express 1/2/3
Aider à choisir entre 60, 90 et 130 ml.

### 3. Sur induction : le petit diamètre devient le vrai problème
Moka Induction 2 et 9090 1 ; renvoi au comparatif induction.

### 4. Design compact : Pulcina et Carmencita
Expliquer les compromis et la plaque.

### 5. Pourquoi Mini Express n’est pas notre choix général
Service direct dans deux tasses = autre expérience d’usage.

### 6. Les modèles reconsidérés
Venus 2, Barazzoni 2, Slancio 1/2.

### 7. “1 personne” ne veut pas dire “1 tasse moka”
Expliquer sans inventer de portion standard.

### 8. Méthode + sources

## Anti-patterns
- pas de « 2 tasses = 2 personnes » ;
- pas de tableau basé uniquement sur les noms de taille ;
- pas de répétition des pages Capacités ;
- pas de “petite = induction facile” ;
- pas de faux test de goût ;
- pas de podium universel.

## Maillage
- `/comparatifs/cafetiere-italienne-induction/`
- `/capacites/cafetiere-italienne-2-tasses/`
- `/capacites/cafetiere-italienne-4-tasses/`
- `/modeles/bialetti-moka-express/`
- `/modeles/alessi-9090/`

## SEO / GEO
- volumes exacts proches du nom produit.
- variante et compatibilité explicites.
- blocs extractibles sur Moka Express 1/2/3, Moka Induction 2 et 9090 1.
- canonical inchangé ; `noindex,follow`.

## Critère de réussite
Le lecteur doit pouvoir choisir un petit format à partir de **la quantité qu’il veut vraiment obtenir**, puis vérifier si sa plaque l’accepte.
# Content brief — cafetière italienne électrique

Date : 13 septembre 2026  
URL : `/comparatifs/cafetiere-italienne-electrique/`

## Requête et intention
- Requête : `cafetière italienne électrique`
- Intent : choisir une moka autonome sans plaque
- Rôle : distinguer fonctions électriques réellement utiles et statut actuel des gammes.

## Décision du lecteur
Acheter un modèle électrique encore cohérent en 2026, sans confondre stock revendeur, support historique et produit réellement actif.

## Thèse
La famille **Ariete Moka Aroma 1358A** est aujourd’hui le choix le plus facile à justifier pour 2/4 tasses : plateforme active, nouvelles variantes Capri/Positano, 400 W, arrêt auto, base 360° et maintien au chaud 30 min. La **1368** répond mieux au besoin 4/6 tasses mais son stock officiel est plus fragile. **De’Longhi Alicia** doit être traitée comme achat de stock/legacy à vérifier, pas comme gagnante actuelle. Les références explicitement arrêtées comme **Rommelsbacher EKO 376/G** sont sorties du noyau.

## Sélection finale
- Ariete Moka Aroma 1358A (White/Black/Capri/Positano = même plateforme)
- Ariete Moka Aroma 1368
- De’Longhi Alicia EMK/EMKM comme famille legacy conditionnelle

Reconsidérés : Rommelsbacher EKO 376/G, Bialetti Easy Timer/Moka Timer/Elettrika, autres références de comparateurs.

## Critères
1. documentation fabricant actuelle ;
2. capacité ;
3. arrêt automatique ;
4. maintien au chaud ;
5. base cordless/360° ;
6. disponibilité/statut actuel ;
7. éviter de compter les coloris comme modèles différents.

## Preuves obligatoires
Voir `.content/comparisons/cafetiere-italienne-electrique-evidence-2026-09-13.md`.

## Architecture proposée
### 1. Réponse immédiate
1358A pour 2/4 ; 1368 pour 4/6 si stock ; Alicia seulement si disponibilité vérifiée.

### 2. Le marché électrique est trompeur
Expliquer pourquoi 72 résultats Idealo ne veulent pas dire 72 modèles actuels.

### 3. 1358A : la plateforme active
Black/White + Capri/Positano, mêmes fonctions, ne pas dupliquer.

### 4. 1368 : plus grande capacité, mais vérifier le stock
Fonctions + statut temporairement indisponible sur store.

### 5. Alicia : support officiel ≠ production actuelle
Montrer l’ambiguïté et recommander une vérification avant achat.

### 6. Ce que nous avons écarté
Rommelsbacher arrêté ; Bialetti legacy sans fiche fabricante actuelle assez claire.

### 7. Les fonctions qui comptent vraiment
Auto-off, keep-warm, réducteur, base 360°. Expliquer ce qui n’est pas « programmable ».

### 8. Méthode / limites
Pas de test thermique ou gustatif propriétaire.

## Anti-patterns
- pas de “top 5” rempli avec des produits arrêtés ;
- pas de coloris traités comme modèles distincts ;
- pas de prix fixes ;
- pas de “programmable” sans minuterie documentée ;
- pas de goût supérieur supposé ;
- pas de dispo garantie depuis un comparateur.

## Maillage
- `/comparatifs/meilleure-cafetiere-italienne/`
- `/guides/comment-utiliser-cafetiere-italienne/`
- `/capacites/`

## SEO / GEO
- distinguer clairement modèle, code et famille.
- passages extractibles sur statut : `CURRENT`, `VERIFY_AVAILABILITY`, `DISCONTINUED`.
- date de recherche visible.
- canonical inchangé ; `noindex,follow`.

## Critère de réussite
Le lecteur doit surtout éviter d’acheter un modèle ancien uniquement parce qu’il apparaît encore chez plusieurs vendeurs.
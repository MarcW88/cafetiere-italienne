# Brief — Nettoyer une cafetière italienne

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: HOW_TO / entretien courant
Date de vérification : 14 septembre 2026

## Intention de recherche

Aider le lecteur à nettoyer sa moka après usage sans abîmer la cafetière, sans transposer automatiquement les règles d’un matériau à tous les modèles, et sans confondre nettoyage courant, détartrage et remplacement d’une pièce.

Questions lecteur prioritaires :
- faut-il seulement rincer ou laver davantage ?
- peut-on utiliser du savon / détergent ?
- peut-on mettre une moka au lave-vaisselle ?
- comment nettoyer filtre, soupape et joint ?
- faut-il laisser sécher démonté ?
- quand un problème n’est-il plus du nettoyage mais du détartrage ou du dépannage ?

## Thèse / valeur unique

La bonne routine dépend d’abord de la **référence exacte**, pas du seul matériau.

Trois exemples actuels Bialetti permettent d’éviter les raccourcis :
- Moka Express : lavage à la main ; notice 2021 = eau sans détergent ni abrasif, pas de lave-vaisselle, stockage complètement sec et non fermé ;
- Venus : la page Bialetti NZ consultée indique `NOT dishwasher safe` ;
- Moka Induction : la page Bialetti NZ consultée indique également `NOT dishwasher safe`.

La page doit donc distinguer :
1. routine quotidienne ;
2. consigne propre au modèle ;
3. entretien des passages / soupape ;
4. détartrage ;
5. pièce usée ou symptôme de sécurité.

## Registre de preuves

| Claim | Source | Portée / limite |
|---|---|---|
| Moka Express : démonter et laver à la main à l’eau tiède après usage | Bialetti Zendesk FR — `Comment utiliser la Moka Express ?` | Moka Express uniquement |
| Moka Express : eau sans détergent ni abrasif ; pas de lave-vaisselle | Manuel Moka Express 2021 | Ne pas généraliser à toutes les moka |
| Moka Express : stocker toutes les pièces complètement sèches et sans refermer la cafetière | Manuel Moka Express 2021 | Consigne de cette notice |
| Ne pas utiliser la poignée pour dévisser | Bialetti Zendesk / pages NZ | Geste documenté sur plusieurs pages Bialetti |
| Ne pas frapper l’entonnoir pour retirer le marc | Manuel Moka Express 2021 | Entonnoir Moka Express documenté |
| Plaque filtrante : contrôler les trous et utiliser brosse souple ou aiguille si obstrués | Manuel Moka Express 2021 | Ne pas transformer en conseil agressif / perçage |
| Soupape : actionner périodiquement le petit piston pendant le lavage | Manuel Moka Express 2021 | Soupape Bialetti inspectable documentée |
| Venus : non compatible lave-vaisselle | Bialetti NZ — Venus Induction Copper | Page régionale / variante actuellement vérifiée |
| Moka Induction : non compatible lave-vaisselle | Bialetti NZ — Moka Induction Bi-Layer Black | Page régionale / variante actuellement vérifiée |
| Venus Copper : les produits chimiques du lave-vaisselle peuvent abîmer la surface colorée | Bialetti NZ — Venus Induction Copper | Motif propre à cette finition |
| Lave-vaisselle et aluminium : peut enlever la couche protectrice et augmenter temporairement le transfert d’aluminium | BfR FAQ aluminium | Contexte cafetières espresso aluminium ; ne pas transformer en alerte sanitaire générale |

## Structure issue de la recherche

1. réponse courte après chaque préparation ;
2. tableau modèle → consigne ;
3. procédure Moka Express détaillée ;
4. filtre / soupape / joint ;
5. lave-vaisselle : pourquoi matériau ≠ autorisation ;
6. nettoyer vs détartrer vs remplacer ;
7. raccourcis à éviter ;
8. stop diagnostic / sécurité ;
9. sources.

## Frontières éditoriales

- détartrage → `/guides/detartrer-cafetiere-italienne/` ;
- fuite / soupape persistante → `/guides/cafetiere-italienne-fuite-vapeur/` ;
- joint usé → `/guides/changer-joint-cafetiere-italienne/` ;
- choix aluminium / inox → `/guides/cafetiere-italienne-aluminium-ou-inox/`.

La page ne doit pas devenir :
- un guide complet de détartrage ;
- une page de santé sur l’aluminium ;
- un guide pièces détachées ;
- un inventaire universel de produits de nettoyage.

## Exclusions / claims à éviter

- `inox = lave-vaisselle` ;
- `toutes les moka = eau uniquement` ;
- `toutes les moka = savon autorisé/interdit` ;
- `il ne faut jamais laver une moka pour garder les huiles` ;
- fréquence universelle de détartrage ;
- vinaigre / bicarbonate / produit maison présenté comme routine universelle ;
- huile ou patine présentée comme preuve de qualité ;
- visuel BFL présenté comme preuve d’une procédure fabricant.

## Internal linking

Liens sortants utiles :
- détartrage ;
- changement du joint ;
- fuite / soupape ;
- aluminium vs inox uniquement si utile à la frontière matériau/modèle.

## Image decision

`EXISTING_IMAGE` — conserver `nettoyage-sechage-pieces.webp`.

Le visuel doit rester une illustration générique de pièces démontées qui sèchent après rinçage. Il ne doit prouver ni matériau, ni compatibilité lave-vaisselle, ni consigne propre à une marque.

Aucun nouvel appel BFL requis.

## Risques principaux

- universaliser la notice Moka Express ;
- faire de l’inox un raccourci d’entretien ;
- laisser croire qu’un nettoyage peut réparer joint ou soupape ;
- conseiller des produits non documentés ;
- transformer une recommandation BfR sur l’aluminium en argument anxiogène ;
- confondre nettoyage quotidien et détartrage.
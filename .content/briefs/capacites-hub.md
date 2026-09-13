---
url: /capacites/
slug: capacites
status: BRIEF_READY
guide_type: choice-explainer
primary_keyword: taille cafetière italienne
search_intent: choisir la capacité d'une cafetière italienne selon le volume réellement préparé
audience: acheteur en découverte ou présélection
last_researched: 2026-09-13
refresh_level: deep rewrite
workflow_reference: bloc-notes-numerique guide workflow
---

## Décision éditoriale

- Question centrale : quelle taille de cafetière italienne choisir ?
- Valeur propre : remplacer la règle trompeuse « nombre de tasses = nombre de personnes » par une méthode de choix fondée sur les millilitres réellement documentés, puis la plaque et le diamètre.
- Traitement : reconstruction du hub ; l'annuaire actuel est trop faible pour porter l'intention.
- Hors périmètre : podium produit, meilleur modèle, prix, promos, pseudo-test, conversion universelle tasses/personnes.
- Evidence brief : `.content/capacities/evidence-capacites-hub-2026-09-13.md`.

## Intention et rôle dans le cluster

Le hub doit être la page de décision générale du cluster `/capacites/`. Il ne doit pas dupliquer les pages 2/4/6/10/12 tasses : il fournit la méthode de choix, les repères comparables et les bifurcations vers la bonne page détaillée.

La page doit aussi protéger les frontières :
- si le lecteur veut savoir quel modèle acheter → `/comparatifs/` ;
- si la contrainte principale est l'induction → comparatif et guide induction ;
- si le lecteur cherche une procédure de préparation → `/guides/`.

## Evidence / faits structurants

- Moka Express : 2=90 ml, 4=185 ml, 6=250 ml, 9=410 ml, 12=595 ml.
- Venus : 2=85 ml, 4=170 ml, 6=235 ml.
- Moka Induction : 2=100 ml, 4=150 ml, 6=280 ml.
- CRISTEL Torino : 6=300 ml, 10=500 ml et convention explicite de 5 cl par tasse expresso.
- Alessi 9090 : tailles 1/3/6/10 ; 10 tasses ≈500 ml.

Ces valeurs servent à démontrer la variabilité du libellé, pas à établir un classement de marques.

## Angle / thèse

« Choisissez une moka en millilitres, pas en nombre de personnes. Le chiffre de tasses est un nom de taille propre à une gamme ; la bonne taille est celle qui correspond à votre quantité habituelle et à votre plaque. »

## Architecture proposée — bespoke

### Ouverture
Réponse immédiate : partir du volume réellement bu/préparé. Expliquer en 2–3 phrases pourquoi le nombre de tasses ne suffit pas.

### 1. Le tableau qui remet les tailles dans le bon ordre
Créer une table de repères par besoin de volume et exemples documentés :
- petit : ~85–100 ml → exemples 2 tasses Bialetti ;
- intermédiaire : ~150–185 ml → exemples 4 tasses ;
- généreux : ~235–300 ml → exemples 6 tasses ;
- grand : ~410–500 ml → 9/10 tasses selon gamme ;
- très grand : ~595 ml et plus → 12 tasses Moka Express et grandes variantes.

Le tableau doit montrer des fourchettes et exemples, pas prétendre qu'une taille universelle existe.

### 2. Pourquoi « 4 tasses » ne veut pas toujours dire la même chose
Démontrer avec Moka Express 4 / Venus 4 / Moka Induction 4. Ajouter CRISTEL comme preuve inter-marques. Cette section porte la logique centrale du hub.

### 3. La méthode de choix en trois questions
Pas une checklist générique : trois questions réellement déterminantes.
1. Combien de ml préparez-vous le plus souvent ?
2. Votre plaque impose-t-elle une compatibilité ou un diamètre minimal ?
3. Votre besoin varie-t-il fortement entre quotidien et occasions ?

Pour la question 3, rester prudent : ne pas conseiller de sous-remplir arbitrairement une moka. Orienter vers une taille plus proche du besoin habituel ou plusieurs tailles si la variation est très forte.

### 4. Les tailles voisines ne sont pas toujours 2/4/6/10/12
Montrer que le marché propose aussi 1/3/9/18 chez Bialetti et 1/3/6/10 chez Alessi. Objectif : éviter que la navigation du site soit interprétée comme une norme universelle.

### 5. Handoffs
- 2 tasses : petit volume, diamètre critique sur induction.
- 4 tasses : zone ~150–185 ml.
- 6 tasses : ~235–300 ml selon gamme.
- 10 tasses : vérifier la gamme ; plusieurs vraies références ~500 ml existent.
- 12 tasses : grande préparation ~595 ml sur Moka Express.
- comparatif induction si la plaque est le premier filtre.
- comparatif général si l'intention devient « quel modèle acheter ? ».

### 6. Sources
Section visible avec fabricants primaires.

## Affiliation

La page influence indirectement l'achat mais doit rester intégralement utile sans liens marchands. Aucune carte produit n'est nécessaire au test. Si affiliation ajoutée plus tard : elle vient après la décision de taille, ne change pas les repères et ne crée aucun ranking.

## SEO

- Title proposé : `Taille cafetière italienne : 2, 4, 6, 10 ou 12 tasses ?`
- H1 : `Quelle taille de cafetière italienne choisir ?`
- Meta : expliquer choix en ml + tailles + induction sans promettre de conversion universelle.
- Canonical : `/capacites/`.
- Robots : conserver `noindex,follow` jusqu'à validation humaine explicite.

## GEO / AEO

Créer des blocs extractibles et autonomes :
- réponse courte à « combien de ml fait une moka 4 tasses ? » avec qualification par gamme ;
- règle générale « le nombre de tasses n'est pas un volume universel » ;
- tableau avec entités et valeurs nommées ;
- questions de décision explicites ;
- sources visibles et proches des faits.

Ne pas ajouter de FAQ artificielle uniquement pour le balisage.

## Anti-AI-slop

Le hub ne doit pas copier le squelette des cinq pages taille. Éviter :
- cinq cartes identiques avec phrase interchangeable ;
- répétition « pour qui / avantages / inconvénients » ;
- conclusion générique ;
- adjectifs vagues comme « idéal », « parfait », « polyvalent » sans condition.

## Maillage

Liens nécessaires seulement : 2/4/6/10/12, comparatif induction, comparatif général, guide choisir si la question quitte la capacité.

## Critères de PUBLISH_REVIEW

PASS seulement si :
- FACT_CHECK : chaque volume/modèle cité est sourcé ;
- AFFILIATION : aucune sélection dictée par marchands/commission ;
- ANTI_AI_SLOP : architecture propre au hub ;
- SEO : intention, title/meta/H1/canonical/robots cohérents ;
- GEO_AEO : réponse extractible, entités qualifiées, faits attribuables ;
- INTERNAL_LINKING : handoffs exacts et non redondants ;
- TECHNICAL : build/check valides ;
- EDITORIAL_QA : aucune conversion tasses→personnes ni ranking produit déguisé.

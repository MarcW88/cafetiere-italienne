# CLUSTER_AUDIT — /capacites/ — Guide workflow Bloc Notes

Date : 13 septembre 2026
Site : `cafetiere-italienne.be`
Scope : `/capacites/`
Mode : `guide-analysis-workflow / CLUSTER_AUDIT`

## Référence méthodologique

Workflow retenu : Guide workflow de `MarcW88/bloc-notes-numerique`, commit `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`.

Raison : les pages capacité sont surtout des pages `CHOICE` / `EXPLAINER` sur une mesure et un arbitrage. Elles ne décrivent pas un job complet comme `/usages/` et ne doivent pas construire de podium produit comme `/comparatifs/`.

Toutes les URLs restent `noindex,follow` pendant l'audit.

---

# 1. Résumé exécutif

Le cluster possède un **bon principe éditorial** : ne pas traduire mécaniquement « X tasses » en nombre de personnes et partir des millilitres réellement documentés.

Ce principe doit être conservé.

Le problème est l'exécution actuelle :

- le hub `/capacites/` est essentiellement un annuaire de liens, alors qu'il devrait porter la décision centrale « quelle taille choisir ? » ;
- les pages 2 / 4 / 6 tasses suivent une architecture très similaire et utilisent surtout les gammes Bialetti comme tableau central ;
- plusieurs pages glissent vers un mini-comparatif produit alors que leur rôle est d'expliquer une capacité ;
- la page 10 tasses repose sur un marché trop étroit et est devenue factuellement incomplète ;
- les volumes « tasses » varient selon marque, gamme et parfois source/distribution, ce qui doit devenir une règle éditoriale explicite ;
- les pages doivent être mieux séparées des futurs Comparatifs : la capacité explique la taille, le Comparatif choisit le produit.

## Décisions

| URL | Décision | Confiance | Raison principale |
|---|---|---:|---|
| `/capacites/` | **DEEP_REWRITE** | 0.98 | Le hub doit être la page CHOICE centrale ; aujourd'hui il ne fait presque qu'énumérer les tailles. |
| `/capacites/cafetiere-italienne-2-tasses/` | **DEEP_REWRITE** | 0.94 | Angle utile mais page trop centrée sur quatre modèles Bialetti et très proche du comparatif induction. |
| `/capacites/cafetiere-italienne-4-tasses/` | **DEEP_REWRITE** | 0.92 | Bonne donnée volume, mais structure clonée et tableau produit trop dominant pour une page de capacité. |
| `/capacites/cafetiere-italienne-6-tasses/` | **DEEP_REWRITE** | 0.92 | Même problème d'industrialisation ; le marché montre aussi des 6 tasses autour de 300 ml hors Bialetti. |
| `/capacites/cafetiere-italienne-10-tasses/` | **DEEP_REWRITE** | 0.99 | Le cadrage actuel est obsolète/incomplet : plusieurs vraies 10 tasses / ~500 ml existent aujourd'hui. |
| `/capacites/cafetiere-italienne-12-tasses/` | **LIGHT_UPDATE** | 0.86 | La logique grande capacité est déjà distincte ; surtout besoin de renforcer les sources, les variations de volume et les frontières. |

Aucun merge immédiat recommandé. Les intentions sont suffisamment distinctes pour conserver les URLs tant que la demande sémantique les justifie.

---

# 2. Ce qu'il faut préserver

- utiliser le **volume réel en ml** comme repère principal ;
- ne pas convertir automatiquement la taille en nombre de personnes ;
- rappeler qu'une moka doit être choisie pour sa charge/quantité habituelle plutôt que volontairement surdimensionnée ;
- faire remonter le diamètre / la détection induction surtout sur les petites tailles ;
- relier vers les tailles voisines lorsqu'un volume est trop grand ou trop petit ;
- conserver les sources fabricant pour les capacités et dimensions ;
- garder les pages capacité comme aide à la taille, pas comme classement de produits.

Bialetti documente actuellement des volumes différents selon gamme : par exemple Moka Express 4 = ~185 ml, Venus 4 = ~170 ml et certaines gammes induction = ~150 ml. Le principe éditorial « le chiffre de tasses n'est pas un volume universel » est donc solide.

---

# 3. Findings transversaux

## 3.1 Le hub doit devenir la vraie page de décision

`/capacites/` répond à la requête la plus générale : « quelle taille de cafetière italienne choisir ? ».

Aujourd'hui : une courte explication + cinq liens.

Rôle recommandé : `CHOICE` central.

La page devrait permettre de décider à partir de :

1. volume habituel réellement souhaité ;
2. taille nominale approximative selon les gammes ;
3. besoin ou non d'induction ;
4. fréquence des grandes préparations ;
5. cas où deux tailles sont plus rationnelles qu'une grande moka utilisée trop rarement.

Elle ne doit pas classer les modèles ; elle peut renvoyer vers les Comparatifs pour cela.

## 3.2 Les pages 2 / 4 / 6 sont trop industrialisées

Pattern actuel :

`réponse ml → tableau Bialetti → plaque/usage → taille voisine → sources`

Le contenu factuel n'est pas mauvais. Le problème est que la pensée éditoriale est trop clonée.

Le workflow Guide demande une architecture issue de la question propre à la taille :

- 2 tasses : mini-volume + diamètre/détection + vraie alternative si induction ;
- 4 tasses : format intermédiaire où la même étiquette peut recouvrir plusieurs volumes ;
- 6 tasses : grand format courant / environ un quart à 0,30 L selon les marques ;
- 10 tasses : taille très dépendante de la gamme, souvent autour de 0,5 L mais pas standardisée ;
- 12 tasses : grande moka proche de 0,6 L sur la Moka Express officielle actuelle.

## 3.3 Les tableaux produit doivent redevenir des exemples, pas le cœur de la décision

Les pages capacité peuvent montrer que :

- Moka Express 4, Venus 4, Moka Induction 4 ou Brikka 4 ne donnent pas exactement le même volume ;
- une 10 tasses existe chez plusieurs marques/gammes alors qu'une autre gamme saute de 9 à 12.

Mais elles ne doivent pas répondre à « lequel acheter ? ».

Si une comparaison de modèles devient nécessaire, handoff vers `/comparatifs/`.

## 3.4 La page 10 tasses est la priorité factuelle

Le texte actuel dit en substance que 10 tasses est un palier peu standard et oppose surtout Moka Express 9/12 à Alessi 9090 10.

Le marché vérifié en septembre 2026 montre davantage d'options :

- Bialetti Venus 10 vendue en Europe autour de 0,5 L ;
- Cristel Torino 10 = 0,50 L ;
- VeoHome 10 = 500 ml ;
- d'autres offres inox / induction 10 tasses sont présentes chez des distributeurs.

La page doit donc devenir : « 10 tasses signifie souvent environ 0,46–0,50 L selon le modèle, mais vérifiez la fiche exacte », et non « cette taille existe à peine ».

Les sources distributeur servent ici de signal marché ; avant rédaction, les specs centrales doivent être confirmées sur source primaire quand elle existe.

## 3.5 Les grands formats montrent des écarts de source à gérer explicitement

Pour la Moka Express 12, Bialetti NZ publie actuellement environ 595 ml, 28,5 cm de haut et 13,5 cm de largeur de base.

Des détaillants européens affichent parfois ~0,495 L, ~0,6 L ou ~0,67 L pour une référence présentée comme 12 tasses.

Le workflow `fact-check` doit donc :

- privilégier la source fabricant pour le volume de référence utilisé sur le site ;
- signaler qu'un volume est approximatif ;
- éviter d'agréger des chiffres de versions/régions différentes comme s'ils étaient identiques.

## 3.6 Couverture potentiellement incomplète : 3 et 9 tasses

Bialetti Moka Express liste actuellement 1, 2, 3, 4, 6, 9, 12 et 18 tasses.

Le cluster du site couvre 2, 4, 6, 10 et 12.

Cela ne signifie pas qu'il faut automatiquement créer 3 et 9 tasses. Il faut d'abord vérifier l'analyse sémantique / demande réelle / cannibalisation. Mais ce sont deux trous de couverture à investiguer avant de considérer le cluster comme définitif.

---

# 4. Audit URL par URL

## 4.1 `/capacites/`

### Rôle recommandé

Guide `CHOICE` central : choisir une taille à partir du volume réel.

### Valeur actuelle à préserver

- « volume avant personnes » ;
- avertissement qu'une 4 tasses varie selon la gamme ;
- navigation claire vers les tailles.

### Blockers

- trop peu de décision : le lecteur doit déjà savoir quelle taille cliquer ;
- aucune vraie matrice volume ↔ taille ↔ plage de variation ;
- pas de distinction assez forte entre petites tailles critiques sur induction et grandes tailles ;
- pas de prochaine étape vers le comparatif pertinent selon la contrainte.

### Décision

**DEEP_REWRITE — confiance 0.98**

---

## 4.2 `2 tasses`

### Rôle recommandé

Guide hybride `EXPLAINER + CHOICE` : comprendre le petit volume et vérifier qu'il est réellement compatible avec l'usage/plaque.

### Valeur à préserver

- plage 85–100 ml sur les modèles Bialetti documentés ;
- Venus 2 non induction ;
- Moka Induction 2 autour de 9,5 cm ;
- avertissement contre « 2 tasses = 2 personnes ».

### Blockers

- tableau de modèles trop proche d'un mini-comparatif ;
- overlap important avec le comparatif induction ;
- structure identique aux pages 4/6 ;
- manque de règle de décision sur 2 vs 3/4 tasses.

### Décision

**DEEP_REWRITE — confiance 0.94**

---

## 4.3 `4 tasses`

### Rôle recommandé

Guide `EXPLAINER + CHOICE` : montrer pourquoi « 4 » correspond à une plage de volumes et quand ce palier est cohérent.

### Valeur à préserver

- Moka Express ~185 ml ; Venus ~170 ml ; Moka Induction/Brikka autour de 150 ml dans les sources utilisées ;
- comparaison utile avec 6 tasses.

### Blockers

- page trop Bialetti-centric ;
- tableau produit fait presque tout le travail ;
- architecture clonée ;
- « format intermédiaire courant » n'est pas assez transformé en règle de décision.

### Décision

**DEEP_REWRITE — confiance 0.92**

---

## 4.4 `6 tasses`

### Rôle recommandé

Guide `CHOICE` : comprendre la zone ~235–300 ml selon modèle/marque et décider si ce volume correspond réellement au service habituel.

### Valeur à préserver

- distinction Moka Express / Venus / Moka Induction ;
- choix à partir du volume, pas des personnes ;
- renvoi vers 4 et 12.

### Blockers

- même architecture que 4 tasses ;
- scope Bialetti trop étroit : des modèles actuels comme Cristel Milano ou Cecotec montrent aussi ~300 ml pour 6 tasses ;
- l'affirmation que la détection devient « moins problématique » doit rester qualifiée par la plaque et le diamètre exact.

### Décision

**DEEP_REWRITE — confiance 0.92**

---

## 4.5 `10 tasses`

### Rôle recommandé

Guide `EXPLAINER + CHOICE` : expliquer qu'une 10 tasses est souvent un format autour de 0,5 L, mais que l'existence et le volume dépendent fortement de la gamme.

### Valeur à préserver

- excellente intuition de départ : le nombre de tasses n'est pas universel ;
- comparaison par millilitres ;
- distinction avec 12 tasses.

### Blockers

- scope actuel obsolète/incomplet ;
- trop forte focalisation sur Moka Express 9/12 et Alessi 9090 ;
- présence actuelle d'autres 10 tasses dont Bialetti Venus, Cristel Torino, VeoHome, etc. ;
- la page doit distinguer « taille commerciale » de « volume réel » et traiter les specs primaires avec plus de rigueur.

### Décision

**DEEP_REWRITE — confiance 0.99**

---

## 4.6 `12 tasses`

### Rôle recommandé

Guide `CHOICE` grande capacité : vérifier si ~0,6 L est réellement nécessaire et exposer les contraintes de taille/plaque.

### Valeur à préserver

- Moka Express officielle ~595 ml ;
- dimensions 28,5 cm / base ~13,5 cm dans la source Bialetti NZ ;
- bon angle « ne pas acheter grand juste pour avoir de la marge » ;
- séparation claire avec 6 tasses.

### Corrections nécessaires

- préciser que le volume reste approximatif ;
- consolider les écarts de chiffres entre fabricants/distributeurs ;
- vérifier si d'autres 12 tasses changent suffisamment la décision pour être cités comme exemples ;
- renforcer les liens vers guide dosage / utilisation sans dupliquer ces guides.

### Décision

**LIGHT_UPDATE — confiance 0.86**

---

# 5. Architecture recommandée du cluster

Le cluster doit fonctionner comme :

- `/capacites/` = décision centrale sur la taille ;
- chaque taille = page d'explication / choix de **volume**, pas page de meilleur produit ;
- `/comparatifs/` = sélection de produits lorsque la plaque, le matériau, le design ou une fonction deviennent la vraie décision ;
- `/guides/` = procédure, dosage, utilisation, induction technique.

Le maillage doit refléter ce parcours et non reproduire le même CTA partout.

---

# 6. Prochaine étape recommandée

Avant production :

1. vérifier la parité complète du moteur Guide avec Bloc Notes : skills, scripts appelés, validateur, CI ;
2. isoler une extension `/capacites/` sans modifier le cœur upstream ;
3. réauditer les sources primaires des volumes 2/4/6/10/12 ;
4. vérifier la demande sémantique pour 3 et 9 tasses avant toute création ;
5. reprendre d'abord le hub `/capacites/` comme page test, puis 2, 4, 6, 10 et 12 selon les décisions ci-dessus ;
6. conserver toutes les pages en `noindex,follow` jusqu'au PUBLISH_REVIEW + validation humaine.

Aucune réécriture n'est autorisée par cet audit seul.
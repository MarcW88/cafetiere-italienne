# Evidence brief — /capacites/

Date de recherche : 2026-09-13
Workflow : Guide CHOICE/EXPLAINER basé sur `MarcW88/bloc-notes-numerique@534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`
Statut : EVIDENCE_READY

## Question à résoudre

Aider un lecteur à choisir une taille de cafetière italienne en partant du volume réellement préparé, puis des contraintes de plaque/diamètre, sans convertir mécaniquement un nombre de « tasses » en nombre de personnes et sans transformer le hub en classement produit.

## Thèse soutenue par les preuves

Le nombre de tasses est un libellé de taille propre à une gamme, pas une unité de volume universelle. La décision la plus robuste consiste à partir de la quantité de café souhaitée en millilitres, puis à vérifier la gamme, la plaque et, sur induction, le diamètre minimal détecté.

## Registre de preuves

### E1 — Bialetti Moka Express : les paliers et volumes réels

Source primaire : https://www.bialetti.co.nz/products/moka-express
Consultée : 2026-09-13
Stabilité : moyenne ; gamme et variantes peuvent évoluer.

Données actuellement publiées :
- 1 tasse : ~60 ml
- 2 tasses : ~90 ml
- 3 tasses : ~130 ml
- 4 tasses : ~185 ml
- 6 tasses : ~250 ml
- 9 tasses : ~410 ml
- 12 tasses : ~595 ml
- 18 tasses : ~800 ml

Portée : utile comme repère pour la gamme Moka Express, pas comme conversion universelle « X tasses = Y ml ».

### E2 — Bialetti Venus : même nombre de tasses, volumes différents

Source primaire : https://www.bialetti.co.nz/products/bialetti-venus-induction-copper
Consultée : 2026-09-13
Stabilité : moyenne.

Données :
- 2 tasses : ~85 ml ; non compatible induction
- 4 tasses : ~170 ml ; base ~9,5 cm
- 6 tasses : ~235 ml ; base ~10,5 cm

Conséquence éditoriale : une « 4 tasses » n'a pas le même volume selon la gamme ; le matériau et la plaque peuvent également changer avec la taille.

### E3 — Bialetti Moka Induction : autre conversion encore

Source primaire : https://www.bialetti.co.nz/products/copy-of-bialetti-moka-induction-red
Consultée : 2026-09-13
Stabilité : moyenne.

Données :
- 2 tasses : ~100 ml ; base ~9,5 cm
- 4 tasses : ~150 ml ; base ~10 cm
- 6 tasses : ~280 ml ; base ~11,5 cm

Le fabricant demande de vérifier dans le manuel de la plaque le diamètre de récipient nécessaire à l'activation de l'induction.

### E4 — CRISTEL Torino : convention de tasse différente

Source primaire : https://www.cristel.com/fr/produits/cafetiere-italienne-torino-inox-brosse
Consultée : 2026-09-13
Stabilité : moyenne.

CRISTEL indique explicitement que le nombre de tasses correspond à des tasses expresso de 5 cl :
- 6 tasses : 0,30 l
- 10 tasses : 0,50 l

Conséquence : la convention « tasse » n'est pas identique à celle observée dans les volumes Bialetti. Cela confirme qu'il faut lire le volume indiqué par la gamme plutôt que multiplier une valeur supposée.

### E5 — Alessi 9090 : un autre découpage de gamme

Source primaire : https://alessi.com/products/9090-espresso-coffee-maker
Source variante 10 tasses : https://uk.alessi.com/products/9090-espresso-coffee-maker?variant=33749646147715
Consultée : 2026-09-13
Stabilité : moyenne.

Gamme affichée : 1, 3, 6 et 10 tasses.
- 1 tasse : 7 cl
- 10 tasses : 16.9 fl oz, soit environ 500 ml

La 9090 possède un fond magnétique pour induction. Sur la 1 tasse, Alessi avertit de vérifier qu'une plaque peut s'activer avec un objet d'au moins 90 mm de diamètre.

Conséquence : les paliers 2/4/6/10/12 du site ne doivent jamais être présentés comme la seule échelle possible sur le marché.

### E6 — « une tasse = environ 30 ml » chez certaines références Bialetti

Source primaire : https://www.bialetti.co.nz/products/bialetti-moka-exclusive-black
Consultée : 2026-09-13
Stabilité : moyenne.

Bialetti précise sur cette fiche que le nombre de tasses renvoie à une tasse expresso d'environ 30 ml. Toutefois les volumes brassés publiés sur les différentes gammes ne se réduisent pas proprement à une multiplication de 30 ml. Cette information doit donc être utilisée comme explication du vocabulaire, pas comme formule universelle.

## Conclusions sûres pour le hub

1. Ne jamais écrire « 4 tasses = 2 personnes » ou équivalent comme règle factuelle.
2. Donner des fourchettes ou exemples de volumes avec le modèle/gamme explicitement nommé.
3. Expliquer que le bon ordre de décision est : volume souhaité → gamme/taille → plaque/diamètre → matériau/entretien si nécessaire.
4. Montrer que les paliers diffèrent selon les marques : Moka Express 1/2/3/4/6/9/12/18 ; Alessi 9090 1/3/6/10 ; CRISTEL Torino 6/10.
5. Pour l'induction, ne pas assimiler « matériau magnétique » à « fonctionnera sur toute plaque » : le diamètre de détection peut être déterminant.
6. Le hub ne doit pas classer de produits. Si le lecteur veut choisir un modèle, handoff vers `/comparatifs/`.

## Inconnues / limites

- Les volumes réels en tasse peuvent légèrement varier selon quantité d'eau, mouture et café ; Bialetti qualifie ses volumes d'approximatifs.
- Toutes les marques ne publient pas les mêmes mesures ni les mêmes conventions de tasse.
- Ne pas créer de table exhaustive de tout le marché sans recherche dédiée par taille.
- Les prix et disponibilités ne sont pas nécessaires à la décision du hub et sont exclus.

## Claims interdits

- « Une tasse moka fait toujours 30 ml. »
- « 6 tasses convient à 3 personnes. »
- « 10 tasses est une taille rare / non standard » sans qualifier la gamme et le marché.
- « Plus grand est toujours plus pratique. »
- Toute recommandation de modèle présentée comme verdict du hub.

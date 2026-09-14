# Brief — Changer le joint d’une cafetière italienne

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: HOW_TO / diagnostic
Date: 14 septembre 2026

## Reader task
Le lecteur veut savoir si sa fuite vient réellement du joint, acheter la bonne pièce et la remplacer sans créer un nouveau problème d’étanchéité.

## Thèse
Le remplacement n’est pas d’abord un geste de bricolage : c’est un problème d’identification de pièce. La bonne séquence est : localiser la fuite → confirmer le rôle possible du joint → identifier marque + modèle + taille → valider la référence compatible → remplacer à froid → contrôler la jonction au prochain usage.

## Valeur unique de l’URL
Cette page doit rester procédurale et diagnostique. Elle ne doit ni devenir une page catalogue de joints, ni absorber le guide fuite/vapeur.

Valeur ajoutée attendue :
- distinguer joint usé, portée sale, mauvais serrage, mauvaise pièce et autre défaut d’étanchéité ;
- traiter modèle + taille + référence comme hard gate avant achat ;
- montrer que le libellé « x tasses » n’est pas une norme inter-marques de joint ;
- documenter le remplacement sans serrage excessif ni faux test ;
- basculer vers le guide sécurité si la vapeur vient de la soupape.

## Evidence register

### Claim A — une fuite latérale n’implique pas automatiquement un joint usé
Source : Bialetti NZ, Troubleshooting / FAQ.
Preuve : pour une fuite eau/vapeur sur les côtés, Bialetti demande de vérifier le ring/joint et de remplacer s’il est usé, mais aussi de s’assurer que le haut de la chambre et le ring sont propres.
Usage : tableau de diagnostic et priorité au nettoyage de la portée avant remplacement inutile.

### Claim B — la taille exacte doit être vérifiée avant commande
Source : Bialetti NZ, Ring & Filter Pack.
Preuve : la page demande explicitement de vérifier le bon nombre de tasses et publie un tableau de dimensions par taille ; certaines tailles peuvent partager un jeu uniquement parce que le tableau fabricant le prévoit.
Usage : hard gate modèle + taille + compatibilité documentée.

### Claim C — la Moka Express recommande le remplacement du joint si usé et au moins annuel
Source : notice Moka Express 2021.
Preuve : la notice demande de remplacer le joint s’il est usé et recommande un remplacement au moins une fois par an.
Portée : uniquement la notice Moka Express vérifiée ; ne pas généraliser à toutes les marques ni à toutes les moka.

### Claim D — les pièces doivent être compatibles avec le modèle
Source : notice Moka Express 2021 + gamme pièces Bialetti NZ.
Preuve : Bialetti demande des pièces adaptées au modèle utilisé ; les jeux ring + filtre sont structurés par familles de modèles et tailles.
Usage : exclure les pièces « presque adaptées » et le raisonnement par apparence seule.

### Claim E — Alessi 9090 utilise des références de joint distinctes selon la taille
Sources officielles Alessi :
- 9090/1 → réf. 29703 ;
- 9090/3 → réf. 29704 ;
- 9090/6 → réf. 29705 ;
- 9090/M 10 tasses → réf. 9090MGUARN.
Usage : preuve indépendante que « même famille / même nombre de tasses » ne suffit pas à généraliser un joint à d’autres modèles.

## Structure cible
1. Réponse courte et stop sécurité.
2. Tableau : symptôme → hypothèse → action.
3. Taille/référence comme hard gate.
4. Quand remplacer le joint.
5. Procédure pas à pas à froid.
6. Contrôle au premier usage normal après remplacement.
7. Raccourcis à éviter.
8. Pièces compatibles et handoff vers pages accessoires.
9. Sources.

## Frontières
- vapeur par soupape / fuite persistante → `/guides/cafetiere-italienne-fuite-vapeur/` ;
- nettoyage courant de la portée → `/guides/nettoyer-cafetiere-italienne/` si nécessaire ;
- page transactionnelle / inventaire → `/accessoires/joint-cafetiere-italienne/` ;
- pièces Bialetti → `/accessoires/pieces-detachees-bialetti/`.

## Risques à éviter
- affirmer que toutes les moka doivent recevoir un joint neuf chaque année ;
- supposer que deux joints « 6 tasses » sont interchangeables ;
- recommander de compenser une fuite par un serrage excessif ;
- traiter une soupape qui ventile comme un simple problème de joint ;
- conseiller une pièce tierce sur la seule base d’un diamètre approximatif ;
- inventer une procédure de test à vide ou sous pression ;
- revendiquer un test hands-on non réalisé.

## SEO / GEO
Intent principal : HOW_TO + diagnostic + compatibilité de pièce.
Entités utiles : joint, ring, plaque filtrante, portée, Moka Express, Alessi 9090, taille/tasses, référence pièce.
`seo-keyword` : validation qualitative uniquement ; aucune donnée GSC ou volume propre au site disponible dans cette passe.

## Image decision
`NO_NEW_IMAGE`.

Le geste peut être expliqué sans nouveau visuel BFL et le principal risque est la fausse précision mécanique (orientation, modèle, dimensions). Une image générique n’ajouterait pas assez de preuve pour justifier une génération. Les références exactes de pièces doivent venir des fabricants, pas d’un visuel généré.

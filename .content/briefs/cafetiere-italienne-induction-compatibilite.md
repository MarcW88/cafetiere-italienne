# Brief — Cafetière italienne et induction

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: EXPLAINER + CHOICE

## Intention

Permettre au lecteur de déterminer si une moka précise fonctionnera réellement sur sa plaque à induction, puis de diagnostiquer un échec de détection sans confondre matériau, compatibilité de la cafetière et seuil de détection du foyer.

## Tâche lecteur

Répondre dans cet ordre :

1. la référence exacte est-elle conçue pour l’induction ?
2. la taille exacte est-elle elle-même compatible ?
3. la plaque détecte-t-elle le diamètre / la partie ferromagnétique du fond ?
4. si non, s’agit-il d’une incompatibilité directe, d’un problème de taille ou d’un cas où un adaptateur peut être pertinent ?

## Thèse

Une compatibilité induction réelle nécessite deux validations indépendantes :

- une base conçue pour être chauffée par induction ;
- une taille / partie ferromagnétique suffisamment détectable par la plaque utilisée.

La mention `inox`, le nom d’une gamme ou une valeur de diamètre trouvée sur une autre cafetière ne suffisent pas.

## Valeur propre de la page

Le guide ne doit pas être un simple catalogue de moka induction. Sa valeur est de fournir une méthode de vérification et de diagnostic réutilisable :

- modèle exact ;
- variante / taille exacte ;
- seuil de détection de la plaque ;
- foyer approprié ;
- décision direct vs adaptateur.

## Registre de preuves

### Claim A — Moka Express classique

- Claim : la Moka Express classique convient au gaz, à l’électrique et à la vitrocéramique, mais pas à l’induction directe.
- Niveau : fabricant first-party.
- Source : Bialetti Zendesk, `Comment utiliser la Moka Express ?`.
- Scope : Moka Express classique ; ne pas généraliser à toutes les Bialetti.

### Claim B — Moka Induction

- Claim : la Moka Induction utilise une base bi-layer acier / aluminium et est annoncée compatible induction ; Bialetti demande malgré tout de vérifier que le diamètre de la base fonctionne avec la plaque utilisée.
- Niveau : fabricant / distributeur officiel Bialetti NZ.
- Source : fiche `Bialetti Moka Induction Bi-Layer Black`.
- Scope : gamme / tailles listées sur cette fiche ; ne pas extrapoler à une autre gamme.

### Claim C — taille de la gamme Venus

- Claim : Venus 4 et 6 tasses sont annoncées compatibles induction, Venus 2 tasses ne l’est pas.
- Niveau : fabricant / distributeur officiel Bialetti NZ.
- Source : fiche `Bialetti Venus Induction Copper`.
- Utilité : prouver que la taille exacte peut modifier la compatibilité au sein d’une même famille.

### Claim D — détection par la plaque

- Claim : chaque foyer induction possède une limite inférieure de détection liée notamment au diamètre de la partie ferromagnétique du récipient et au matériau du fond ; il faut utiliser le foyer dont la taille correspond le mieux.
- Niveau : fabricant de plaque.
- Source : Siemens, FAQ / dépannage induction Belgique.
- Scope : mécanisme de détection ; ne pas en déduire un diamètre universel.

### Claim E — Alessi 9090 1 tasse

- Claim : fond en acier magnétique compatible induction ; Alessi demande de vérifier que la plaque s’active avec un objet d’au moins 90 mm pour la version 1 tasse.
- Niveau : fabricant first-party.
- Source : Alessi 9090.
- Scope : 9090 1 tasse uniquement ; 90 mm ne doit jamais devenir une règle générale.

### Claim F — adaptateur Bialetti

- Claim : la plaque induction Bialetti 13 cm est conçue pour permettre l’usage de cafetières aluminium sur induction ; Bialetti l’annonce pour des cafetières jusqu’à 6 tasses, recommande une puissance moyenne et interdit l’usage à vide.
- Niveau : fabricant / distributeur officiel Bialetti NZ.
- Source : fiche `Bialetti Induction Plate 13cm`.
- Scope : cet adaptateur précis ; ne pas généraliser les limites à tous les adaptateurs.

## Structure issue de la recherche

1. réponse courte : deux validations nécessaires ;
2. référence et taille exactes ;
3. fonctionnement de la détection côté plaque ;
4. diagnostic si la moka n’est pas reconnue ;
5. adaptateur : rôle et limites ;
6. choix direct vs adaptateur ;
7. raccourcis à éviter ;
8. passage vers le comparatif induction ;
9. sources.

## Frontières

- matériau aluminium vs inox → `/guides/cafetiere-italienne-aluminium-ou-inox/` ;
- sélection / ranking de modèles → `/comparatifs/cafetiere-italienne-induction/` ;
- accessoire adaptateur en détail → `/accessoires/adaptateur-induction-cafetiere-italienne/` ;
- volumes et tailles → `/capacites/`.

## Maillage attendu

- vers aluminium/inox lorsqu’un lecteur confond matériau et compatibilité ;
- vers l’adaptateur quand il possède déjà une moka non compatible ;
- vers le comparatif induction seulement après validation des contraintes.

## Risques / exclusions

Ne pas :

- écrire `inox = induction` ;
- donner un diamètre minimal universel ;
- présenter 90 mm comme règle générale ;
- dire que toutes les tailles d’une gamme partagent la même compatibilité ;
- présenter l’adaptateur comme une compatibilité directe ;
- transformer une absence de détection en panne de la cafetière sans vérifier d’abord la plaque ;
- ajouter un test aimant comme preuve suffisante de compatibilité si le fabricant et la plaque ne sont pas vérifiés ;
- produire un classement produit dans cette page.

## Editorial image planner

`NO_NEW_IMAGE` pour cette passe. Le besoin est décisionnel et textuel ; une image décorative n’apporterait pas de preuve supplémentaire. Une illustration technique ne serait utile que si elle pouvait représenter fidèlement un mécanisme documenté, ce qui n’est pas nécessaire ici.

# Brief — Fuite ou vapeur

Status: BRIEF_READY
Decision: DEEP_REWRITE
Type: HOW_TO / diagnostic sécurité
Date de vérification: 14 septembre 2026

## Intention

Permettre à l’utilisateur de distinguer immédiatement :
- une fuite à la jonction ;
- une soupape de sécurité qui libère vapeur / pression ;
- un circuit qui ne laisse plus monter le café normalement ;
- une situation qui peut encore être contrôlée à froid ;
- une situation où il faut cesser l’utilisation.

La page doit privilégier la sécurité avant l’optimisation de recette.

## Rôle unique dans le cluster

Cette URL est le guide de diagnostic mécanique / sécurité du cluster Guide.

Frontières :
- joint usé ou remplacement de joint → `/guides/changer-joint-cafetiere-italienne/` ;
- détartrage → `/guides/detartrer-cafetiere-italienne/` ;
- mouture → `/guides/mouture-cafetiere-italienne/` ;
- préparation normale → `/guides/comment-utiliser-cafetiere-italienne/` ;
- achat de pièces → pages Accessoires.

## Décision éditoriale

DEEP_REWRITE.

La version initiale séparait déjà jonction et soupape mais manquait de profondeur sur :
- le stop immédiat avant démontage ;
- l’interdiction d’ouvrir à chaud ;
- le circuit complet pouvant être obstrué ;
- la distinction entre joint défectueux et restriction du passage ;
- les limites d’un geste de maintenance de soupape propre à Bialetti ;
- le seuil clair où le dépannage domestique s’arrête.

## Architecture retenue

1. Réponse courte : arrêter la chauffe, refroidir, localiser.
2. Tableau symptôme → zone → premier geste.
3. Fuite à la jonction : joint, portée, assemblage, blocage éventuel.
4. Soupape active : circuit / soupape, pas simple « fuite ».
5. Contrôle du circuit : eau, mouture, tassage, filtre, entonnoir, colonne.
6. Maintenance de soupape : uniquement selon la notice du modèle.
7. Tartre : facteur possible, mais pas justification d’un bricolage.
8. Nouvel essai uniquement si les contrôles documentés sont passés.
9. Raccourcis dangereux à éviter.
10. Seuil d’arrêt définitif du dépannage maison.

## Evidence register

### Bialetti NZ — Troubleshooting / FAQ’s
Source : https://www.bialetti.co.nz/blogs/making-great-coffee/troubleshooting-faqs

Claims utilisables :
- fuite eau/vapeur sur les côtés : vérifier ring/joint, propreté du dessus de la chambre d’eau et du joint, assemblage ferme ;
- mouture trop fine pouvant obstruer la zone de sortie ;
- café qui ne monte pas : plaque filtrante, entonnoir, café tassé, mouture trop fine ou trop grossière ;
- soupape qui libère régulièrement vapeur/pression = possible blocage ou soupape défectueuse ;
- contrôle du circuit : ring/filter, colonne supérieure, entonnoir ;
- sur les modèles concernés, petit piston de soupape à vérifier en rotation pour dépôts / sédiments ;
- si la soupape continue à s’activer après ces contrôles : cesser immédiatement l’utilisation et faire contrôler / entretenir.

### Bialetti NZ — Using Bialetti Coffee Makers
Source : https://www.bialetti.co.nz/blogs/making-great-coffee/using-bialetti-coffee-makers

Claims utilisables :
- eau juste sous la soupape ;
- mouture medium-fine ;
- ne pas tasser ;
- retirer le marc du bord ;
- assembler fermement sans utiliser la poignée comme levier ;
- chauffe faible à moyenne ;
- retirer quand la partie haute est remplie.

### Bialetti NZ — Moka Express
Source : https://www.bialetti.co.nz/products/moka-express

Usage : recouper les consignes de préparation et d’entretien actuelles.

### Alessi — 19660 Safety valve
Source : https://alessi.com/products/19660

Usage : montrer qu’une soupape est une pièce identifiée pour des modèles précis (9090, 90002, MA01), donc qu’un geste ou une pièce ne doit pas être généralisé à toutes les moka.

## Guardrails de factualité

- Ne jamais dire que toute fuite latérale = joint usé.
- Ne jamais dire que toute soupape active = tartre.
- Ne jamais recommander de boucher, supprimer ou modifier la soupape.
- Ne jamais recommander d’ouvrir la moka chaude ou potentiellement sous pression.
- Ne pas transformer la manipulation du petit piston documentée par Bialetti en règle universelle.
- Ne pas promettre qu’un détartrage résout une soupape défectueuse.
- Ne pas conseiller plusieurs cycles de test si la soupape continue à s’activer.
- Ne pas prescrire le remplacement d’une soupape générique sans référence fabricant.
- Ne pas inventer de seuil de pression, température ou fréquence universelle.

## Seuil de sécurité retenu

Si la soupape libère encore régulièrement vapeur ou pression après les contrôles prévus par la documentation du modèle, arrêter l’utilisation et faire contrôler la cafetière.

## SEO / GEO

Intent principal :
- cafetière italienne fuite vapeur ;
- soupape cafetière italienne vapeur ;
- moka fuit sur le côté ;
- cafetière italienne ne monte plus / pression.

Entités / relations à couvrir naturellement :
- soupape de sécurité ;
- joint / ring ;
- plaque filtrante ;
- entonnoir ;
- colonne / spout ;
- mouture trop fine ;
- café tassé ;
- niveau d’eau ;
- blocage / obstruction ;
- maintenance fabricant.

Pas de FAQ artificielle ni de répétition de mots-clés.

## Internal linking

Liens contextuels :
- changement du joint ;
- mouture ;
- détartrage ;
- préparation complète.

Ne pas envoyer trop tôt vers une page transactionnelle de pièce : le diagnostic précède l’achat.

## Image decision

`NO_NEW_IMAGE`.

Raison : un visuel générique de vapeur n’apporte aucune preuve et peut être ambigu sur un sujet sécurité. Aucune image BFL ne doit servir à illustrer une position ou un fonctionnement de soupape comme si elle était technique.

## Publication

Conserver `noindex,follow` jusqu’à validation humaine explicite.

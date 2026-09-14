# Brief — mouture-cafetiere-italienne

Status: BRIEF_READY
Decision: LIGHT_UPDATE
Type dominant: EXPLAINER / HOW_TO

## Intention
Répondre à « quelle mouture utiliser pour une cafetière italienne ? » puis aider à ajuster un moulin ou choisir un café prémoulu sans confondre la mouture avec le dosage, la chauffe ou le dépannage mécanique.

## Tâche lecteur
1. choisir un point de départ cohérent ;
2. reconnaître si la mouture semble trop fine ou trop grossière ;
3. ajuster par petits pas ;
4. savoir quand arrêter de régler la mouture et passer au diagnostic de la cafetière.

## Réponse centrale
Commencer en `medium-fine` : plus fin que filtre, plus grossier qu’espresso. Bialetti décrit ce point de départ comme granuleux au toucher, pas poudreux. Les numéros de moulin restent propres à chaque appareil : le réglage 2–3 publié par Bialetti vaut pour son moulin manuel, pas pour toutes les marques.

## Valeur propre
- donner un repère tactile fabricant plutôt qu’une analogie alimentaire approximative ;
- distinguer zone de mouture et numéro de moulin ;
- documenter les effets d’un réglage trop fin ou trop grossier avec des sources Bialetti ;
- expliquer comment régler une seule variable à la fois ;
- traiter le café prémoulu espresso comme un risque de finesse excessive plutôt qu’un substitut automatique ;
- poser un stop de sécurité lorsque soupape, fuite ou blocage sortent du simple réglage de mouture.

## Frontières
- dosage / remplissage du panier → `/guides/dosage-cafe-cafetiere-italienne/`
- choix du café → `/guides/quel-cafe-pour-cafetiere-italienne/`
- méthode complète → `/guides/comment-utiliser-cafetiere-italienne/`
- café amer ou brûlé → `/guides/cafetiere-italienne-cafe-amer-brule/`
- fuite / soupape / blocage → `/guides/cafetiere-italienne-fuite-vapeur/`

## Registre de preuves — vérifié le 14 septembre 2026

| Claim | Source | Portée / qualification |
|---|---|---|
| Moka Express : mouture medium-fine, granuleuse au toucher, pas poudreuse | Bialetti NZ — Moka Express | repère fabricant pour cette gamme ; utilisé comme point de départ moka |
| Moulin manuel Bialetti : 1–2 espresso, 2–3 moka | Bialetti NZ — Hand Coffee Grinder | exemple strictement limité à ce moulin ; ne pas universaliser les crans |
| Bialetti vend des cafés moulus à la consistance prévue pour moka | Bialetti NZ — Coffee Beans Classico FAQ | valide l’option « prémoulu moka » |
| Trop fin : la moka peut s’étouffer et le café devenir amer ; trop grossier : passage trop rapide / tasse très légère | Bialetti NZ — Coffee Buying Guide | diagnostic utile, pas causalité unique pour chaque tasse |
| Café tassé gêne le passage de l’eau ; espresso fin peut colmater la cafetière | Bialetti NZ — Troubleshooting / FAQ | renforce « ne pas tasser » et prudence avec mouture espresso |
| Soupape qui libère régulièrement vapeur/pression : ne pas ignorer ; si persiste après contrôles, cesser l’usage | Bialetti NZ — Troubleshooting / FAQ | règle de sécurité et frontière vers dépannage mécanique |

## Search intent / concurrence
La SERP actuelle converge sur « entre espresso et filtre », mais mélange fréquemment :
- analogies non standardisées (`sel fin`, `sucre`, `farine`) ;
- chiffres de pression utilisés comme preuve simpliste ;
- symptômes présentés comme diagnostics certains ;
- réglages de moulin génériques ;
- mouture espresso proposée comme fallback alors que Bialetti avertit qu’elle peut être trop fine.

Positionnement retenu : partir du vocabulaire fabricant `medium-fine`, expliquer comment l’appliquer sur n’importe quel moulin sans faux cran universel, puis utiliser les symptômes comme hypothèses à tester.

## Structure issue de l’intention
Réponse courte → preuves fabricant → pourquoi pas de cran universel → diagnostic trop fin/trop grossier → méthode d’ajustement → café prémoulu → ne pas tasser → stop sécurité / dépannage → amertume → sources.

## Claims à éviter
- nombre de microns universel non mesuré ;
- comparaison alimentaire présentée comme norme technique ;
- « 2–3 » comme réglage universel ;
- toute mouture espresso forcément inutilisable ;
- toute amertume forcément causée par une mouture trop fine ;
- toute fuite ou activation de soupape forcément causée par la mouture ;
- pression moka universelle chiffrée sans contexte modèle/protocole.

## Image decision
Conserver l’image BFL existante `mouture-reglage-moulin.webp`.

Elle doit illustrer le principe d’un ajustement progressif sur un moulin générique, sans afficher de numéro lisible et sans prétendre représenter une granulométrie mesurée. Aucun nouvel appel BFL n’est requis.

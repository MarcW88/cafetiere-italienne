# Direction visuelle — cafetiere-italienne.be

## Positionnement

Le site doit ressembler à un guide éditorial spécialisé dans la cafetière italienne : chaleureux, précis, utile et légèrement premium.

Il ne doit pas ressembler à :

- une landing page SaaS ;
- un catalogue Amazon ;
- un comparateur affilié agressif ;
- un blog café générique ;
- une interface manifestement assemblée à partir de composants standards ou générés automatiquement.

Le produit est un objet domestique simple, durable et très identifiable. Le design doit donc laisser davantage de place à l’objet, au geste, aux matériaux, aux volumes et à l’information éditoriale qu’aux artifices d’interface.

## Public et objectif

Le lecteur cherche à choisir, dimensionner, utiliser ou entretenir une cafetière moka adaptée à une contrainte concrète : plaque, volume, matériau, modèle, budget ou usage.

L’interface doit aider à comprendre les compromis avant d’envoyer éventuellement vers un marchand. Le contenu doit rester utile si les liens affiliés disparaissent.

## Principes visuels

- Direction éditoriale inspirée de la cuisine italienne contemporaine, du métal, du café et de l’objet moka, sans folklore décoratif forcé.
- Mise en page lisible, avec une densité d’information maîtrisée et des longueurs de ligne adaptées à la lecture.
- Hiérarchie typographique nette et rythme moins mécanique qu’une succession de cartes.
- Espaces blancs généreux, sans créer artificiellement de grandes zones vides.
- Les surfaces encadrées servent une fonction précise : produit, outil, comparaison, alerte ou décision. Une section n’a pas besoin d’une carte par défaut.
- Photographies ou illustrations directement liées à la moka, aux pièces, aux matériaux, aux volumes ou au geste de préparation.
- Tableaux comparatifs sobres, lisibles et cohérents entre les pages.
- États interactifs visibles au clavier comme à la souris.
- Responsive pensé pour le contenu, pas seulement obtenu par empilement automatique.

## Palette actuelle

Ces couleurs constituent la base du système existant et doivent rester centralisées dans les tokens CSS.

| Rôle | Couleur |
|---|---|
| Fond principal | `#F7F2E9` |
| Surface papier | `#FFFCF7` |
| Texte principal | `#28231F` |
| Moka / structure | `#713F2A` |
| Accent / action | `#C65D38` |
| Olive secondaire | `#7C8564` |
| Sable | `#EEE5D8` |
| Bordure | `#DED2C2` |
| Texte secondaire | `#746A62` |

Le terracotta sert principalement aux actions et aux accents de décision. Le brun moka structure l’identité. Les contrastes doivent rester conformes à WCAG AA.

## Typographie

Le système actuel utilise :

- `DM Serif Display` pour les grands titres éditoriaux ;
- `DM Sans` pour le corps, les menus, données et contrôles.

Ces familles peuvent être conservées tant qu’elles servent la lisibilité. Ne pas multiplier les familles ni transformer chaque titre en élément spectaculaire. Les grands titres doivent rester proportionnés à la quantité d’information disponible au-dessus de la ligne de flottaison.

## Composants distinctifs

- Verdict rapide avec condition : « choix logique si », limite principale et point à vérifier.
- Fiche modèle avec caractéristiques réellement comparables.
- Tableau comparatif stable entre les modèles lorsque la comparaison en bénéficie.
- Échelle de capacité fondée sur le volume réel plutôt qu’une simple grille de cartes.
- Moka Finder traité comme un outil d’aide à la décision, pas comme une section marketing.
- Encadré méthodologique et niveau de preuve lorsque nécessaire.
- Date de vérification visible sur les contenus sensibles à la fraîcheur.
- Actions commerciales distinctes des liens éditoriaux.

## Différenciation des familles de pages

Les pages doivent partager une identité, pas un template visuel unique.

- **Homepage** : orientation, découverte et accès aux principaux chemins de décision.
- **Comparatifs** : priorité aux critères, données, arbitrages et verdicts conditionnels.
- **Guides** : lecture fluide, geste, procédure, schémas ou détails utiles ; limiter les boîtes décoratives.
- **Marques et modèles** : logique monographique, caractéristiques, variantes, limites et liens vers les décisions pertinentes.
- **Capacités** : priorité aux volumes, équivalences documentées et situations d’usage.
- **Accessoires** : compatibilité et utilité réelle avant logique commerciale.
- **Café moka** : contenu explicatif plus éditorial, moins proche d’une fiche produit.
- **Pages de confiance** : sobres, textuelles et sans sur-design.

## Règles anti-design IA

Éviter notamment :

- les énormes titres suivis de deux CTA lorsque l’écran ne contient presque aucune information concrète ;
- les glows, glassmorphism, grandes ombres molles et effets de profondeur sans fonction ;
- les coins très arrondis sur la majorité des éléments ;
- les boutons systématiquement en forme de pill ;
- les badges décoratifs répétés ;
- les grilles systématiques de trois cartes identiques ;
- les icônes ou glyphes placés uniquement pour remplir l’espace ;
- les grands cercles ou formes abstraites servant seulement de décor ;
- les illustrations génériques sans lien avec une vraie moka, un matériau, une pièce ou un geste ;
- les animations de hover ou de translation qui ne communiquent aucun état utile ;
- la répétition du même bloc « eyebrow + titre + texte + cartes » sur toute la page ;
- les sections de réassurance génériques qui pourraient appartenir à n’importe quel site ;
- les faux témoignages, fausses statistiques, faux tests ou faux signaux d’urgence ;
- les notes globales sans méthode explicite ;
- les boutons d’achat répétés après chaque paragraphe ;
- une symétrie parfaite et répétitive sur toute la page.

Un pattern isolé n’est pas automatiquement mauvais. C’est son accumulation, sa répétition et son absence de justification fonctionnelle qui créent un rendu générique.

## Affiliation et confiance

- Identifier sans ambiguïté les liens affiliés.
- Ne pas masquer une publicité sous l’apparence d’un verdict éditorial.
- Présenter au moins une limite significative lorsqu’un produit est recommandé.
- Expliquer les critères de recommandation et la méthodologie lorsque nécessaire.
- Ne pas prétendre avoir testé physiquement une cafetière sans preuve documentée.
- Distinguer faits fabricant, tests externes, synthèse éditoriale et expérience réelle.
- Présenter les prix comme datés et susceptibles d’évoluer lorsqu’ils sont affichés.

## Critères de validation

Une page est visuellement validée si :

1. son objectif et son action principale sont compris rapidement ;
2. elle paraît appartenir à un média spécialisé identifiable sur la moka ;
3. la hiérarchie reste claire sur mobile et desktop ;
4. les informations commerciales ne dominent pas l’éditorial ;
5. les composants sont cohérents sans rendre toutes les sections et familles de pages identiques ;
6. le contraste, le focus clavier, les noms accessibles et la structure sémantique sont corrects ;
7. aucun débordement horizontal ou contenu essentiel tronqué n’est présent ;
8. aucun pattern anti-design IA important n’est présent par accumulation ;
9. les captures Playwright des routes concernées ont été examinées, pas seulement le code.

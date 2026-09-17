# Research brief — Alessi

URL: `/marques/alessi/`
Page type: `BRAND_HUB`
Audit initial: `DEEP_REWRITE`
Ré-audit du contenu actuel: `LIGHT_UPDATE`
Research date: 2026-09-17

## Intention

Aider à comprendre la gamme de cafetières italiennes Alessi comme collection de design fonctionnel : modèles, designers, matériaux, compatibilités et conséquences pratiques des choix de conception.

La page ne doit pas devenir un inventaire exhaustif de SKU ni déduire la qualité du café du prix, du designer ou du prestige de l'objet.

## Valeur originale

- distinguer les logiques de 9090, Menhir, Vite, Pulcina, Moka, La Cupola et La Conica lorsque ces références changent réellement la décision ;
- relier le design aux conséquences pratiques plutôt qu’au prestige seul ;
- distinguer les modèles directement compatibles induction des modèles qui exigent une variante dédiée ;
- expliquer que certaines icônes sont en aluminium, d’autres en inox, et que la compatibilité dépend de la référence exacte ;
- aider le lecteur à choisir une logique avant de descendre vers une fiche modèle ou un comparatif.

## Evidence registry

- `VERIFIED` — collection actuelle Alessi : 9090, Vite, Menhir, La Conica, La Cupola, Pulcina, Moka, avec plusieurs références induction. Source : https://alessi.com/fr/collections/coffee-makers
- `VERIFIED` — 9090 : Richard Sapper, inox 18/10, fond en acier magnétique compatible induction, base élargie, bec anti-goutte et fermeture à levier ; production depuis 1980. Source : https://alessi.com/fr/products/9090-espresso-coffee-maker
- `VERIFIED` — Menhir : Michael Anastassiades, inox 18/10, chaudière en acier magnétique compatible induction ; production depuis 2024. Source : https://alessi.com/fr/products/menhir-espresso-coffee-maker
- `VERIFIED` — Vite : Philippe Malouin, fonte d’aluminium, fond en acier magnétique compatible induction ; production depuis 2026. Source : https://alessi.com/fr/products/vite-espresso-coffee-maker
- `VERIFIED` — Pulcina : Michele De Lucchi, fonte d’aluminium ; variante induction distincte avec fond en acier magnétique. Sources : https://alessi.com/fr/products/pulcina-espresso-coffee-maker-1 et https://alessi.com/fr/products/pulcina-espresso-coffee-maker-induction
- `VERIFIED` — La Cupola : Aldo Rossi, dessin original de 1988 en fonte d’aluminium ; version induction spécifique lancée en 2025 avec fond en acier magnétique. Sources : https://alessi.com/fr/products/la-cupola-espresso-coffee-maker et https://alessi.com/fr/products/la-cupola-espresso-coffee-maker-1
- `VERIFIED` — Moka : David Chipperfield, interprétation contemporaine de la moka classique ; une version induction officielle en fonte d’aluminium avec fond en acier magnétique existe. Sources : https://alessi.com/fr/products/moka-espresso-coffee-maker et https://alessi.com/fr/products/moka-espresso-coffee-maker-induction
- `VERIFIED` — La Conica : Aldo Rossi, inox 18/10 avec fond en cuivre ; production depuis 1984. Source : https://alessi.com/fr/products/la-conica-espresso-coffee-maker

## Unknowns / limites

- Ne pas transformer le prix, le statut de designer ou l’ancienneté du modèle en preuve de qualité du café.
- Ne pas attribuer à toutes les tailles d’un nom de modèle la compatibilité d’une variante précise.
- Ne pas imiter un test d’usage sans données first-hand.
- La présence dans la collection officielle confirme l’existence actuelle de la référence, pas une disponibilité permanente sur tous les marchés.
- Une différence de matériau ou de design ne doit devenir un bénéfice d’usage que lorsque la conséquence pratique est documentée.
- Les formulations marketing du fabricant sur le goût ne sont pas reprises comme conclusion éditoriale sans preuve indépendante.

## Architecture justifiée

1. **Positionnement de la marque** — design fonctionnel : le nom du designer n’est pas un critère suffisant ; matériau, fermeture, plaque et taille changent la décision.
2. **Carte de gamme sélective** — présenter les références qui ajoutent une logique distincte plutôt qu’un nombre arbitraire de modèles.
3. **Inox / induction directe** — 9090 et Menhir comme deux propositions en inox ; ne pas les réduire à une hiérarchie de prestige.
4. **Aluminium + induction** — Vite est directement compatible induction ; Pulcina, Moka et La Cupola demandent de vérifier la variante exacte.
5. **Icônes architecturales** — La Cupola et La Conica relèvent toutes deux d’Aldo Rossi mais diffèrent par matériau et construction ; leur présence doit servir la décision, pas l’histoire du design seule.
6. **Taille et variante** — handoff vers `/capacites/` lorsque le volume devient le critère principal.
7. **Prochaine étape** — `/modeles/alessi-9090/`, comparatifs inox, induction ou design selon l’incertitude restante.

Aucun quota de modèles, de mots, de H2/H3 ou de cartes n’est imposé.

## Research-to-draft coverage attendu

Chaque élément ci-dessous doit être explicitement classé pendant le `PUBLISH_REVIEW` :

| Élément décisionnel | Attendu |
|---|---|
| 9090 : inox + innovations fonctionnelles + induction | `USED` |
| Menhir : autre voie inox + induction | `USED` ou `EXCLUDED` avec justification |
| Vite : aluminium + induction directe + nouveauté 2026 | `USED` |
| Pulcina : variante induction distincte | `USED` |
| Moka : variante induction distincte | `USED` |
| La Cupola : variante induction 2025 | `USED` |
| La Conica : inox + fond cuivre, logique distincte | `USED` ou `EXCLUDED` avec justification |
| taille / volume comme critère | `USED` ou `HANDOFF` vers `/capacites/` |

Un élément marqué `MISSING` qui peut modifier le choix du lecteur bloque le `PUBLISH_REVIEW`.
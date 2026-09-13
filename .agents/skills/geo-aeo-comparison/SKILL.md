---
name: geo-aeo-comparison
description: Contrôle GEO/AEO des pages comparatives de cafetiere-italienne.be. Adaptation ciblée du skill MIT `improve-aeo-geo` de onvoyage-ai/gtm-engineer-skills, limitée aux signaux utiles aux contenus de comparaison et à leur citabilité par les moteurs génératifs.
license: MIT
metadata:
  upstream: "onvoyage-ai/gtm-engineer-skills/improve-aeo-geo"
  adapted_for: "cafetiere-italienne.be /comparatifs/"
---

# GEO / AEO — Comparatifs

## Rôle

Ce skill intervient après la stabilisation des faits et du verdict. Il ne remplace ni le SEO, ni le fact-check, ni l'evidence review.

Objectif : rendre le comparatif plus facile à **comprendre, extraire, attribuer et citer** par des systèmes génératifs sans dégrader l'expérience humaine ni fabriquer artificiellement du contenu pour les LLMs.

## Règles de base

1. Le GEO ne justifie jamais une affirmation non sourcée.
2. Le GEO ne change jamais un verdict pour maximiser la citabilité.
3. Le SEO classique reste obligatoire.
4. Une page en phase de validation peut rester `noindex,follow` : ce statut de draft n'est pas un échec GEO.
5. Ne jamais ajouter une FAQ, un tableau, un schema ou des chiffres uniquement pour cocher une case.
6. Les données structurées doivent décrire fidèlement du contenu visible.

## Gate 1 — réponse et décision extractibles

Vérifier que les passages décisionnels peuvent être compris hors contexte :

- le produit ou la famille est nommé explicitement ;
- la condition de recommandation est explicite ;
- la limite principale est présente à proximité ;
- les pronoms ambigus ne rendent pas l'extrait incompréhensible ;
- une réponse importante apparaît avant un long préambule lorsque cela améliore réellement la page.

Exemple de forme utile :

> La Bialetti Venus est le choix à privilégier sur induction lorsque la taille choisie est documentée comme compatible. Pour les petits formats, le diamètre minimal détecté par la plaque reste à vérifier.

La formulation doit découler des preuves déjà validées.

## Gate 2 — entités et variantes non ambiguës

Pour chaque recommandation importante :

- nom complet du produit ;
- marque ;
- modèle/génération si nécessaire ;
- taille ou variante lorsque celle-ci change une compatibilité ou un verdict ;
- distinction claire entre gamme et variante exacte.

Ne jamais écrire qu'une gamme entière possède une propriété si la preuve ne vaut que pour certaines tailles.

## Gate 3 — attribution des faits

Pour les faits qui changent la décision :

- nommer la source lorsque c'est utile ;
- préférer la source primaire pour les spécifications ;
- relier la conclusion éditoriale au fait vérifié sans la présenter comme une mesure indépendante ;
- conserver les sources suffisamment proches ou clairement accessibles dans la page.

Le but est qu'un moteur puisse distinguer : **fait source → interprétation éditoriale → recommandation**.

## Gate 4 — blocs citables

Chercher les passages à forte valeur décisionnelle : définition, compatibilité, exclusion, comparaison courte, verdict conditionnel.

Ils doivent idéalement :

- avoir un sujet explicite ;
- exprimer une idée principale ;
- contenir la condition qui borne le claim ;
- rester exacts s'ils sont extraits seuls.

Ne pas transformer toute la page en succession de micro-blocs artificiels.

## Gate 5 — tableaux et listes

Utiliser un tableau ou une liste seulement lorsque la structure améliore l'extraction et la décision.

Un bon tableau comparatif :

- compare les mêmes dimensions ;
- évite les cellules marketing vagues ;
- n'introduit pas de données absentes des preuves ;
- conserve les nuances importantes dans le texte.

## Gate 6 — fraîcheur

Pour les éléments susceptibles d'évoluer :

- disponibilité ;
- génération ;
- gamme ;
- compatibilité annoncée ;
- fonctionnalités électriques ;
- prix ou positionnement marchand ;

vérifier la date de recherche et éviter les formulations qui figent inutilement une situation marchande.

## Gate 7 — structured data honnête

Vérifier seulement les schemas réellement applicables au rendu final.

- `BreadcrumbList` : OK si breadcrumb visible/cohérent.
- `Article` / `WebPage` : OK si les propriétés sont vraies.
- `Product` : uniquement si la page représente réellement un produit et si les données requises sont fiables ; ne pas transformer automatiquement un comparatif multi-produit en fiche Product unique.
- `FAQPage` : uniquement si une FAQ réelle et visible existe et si son usage reste conforme aux pratiques actuelles des moteurs.

Aucun schema ne doit inventer une note, un avis, un prix, une disponibilité ou un auteur.

## Gate 8 — accès technique GEO

Le contrôle technique global (robots, rendu HTML, canonical, crawlabilité, données structurées) est effectué avec `seo-technical`.

Ce skill ne doit pas exiger la suppression du `noindex` pendant la phase de draft. L'indexation reste contrôlée par le workflow de publication.

## Output attendu

Retourner :

- `GEO_PASS` ou `GEO_FAIL` ;
- passages décisionnels insuffisamment extractibles ;
- ambiguïtés d'entités/variantes ;
- claims importants sans attribution claire ;
- problèmes de fraîcheur ;
- structured data potentiellement trompeuse ;
- corrections minimales recommandées.

## Interdictions

- pas de keyword stuffing GEO ;
- pas de répétition artificielle du nom des produits ;
- pas de citations ou statistiques ajoutées sans nécessité éditoriale ;
- pas de phrases écrites uniquement pour « plaire à ChatGPT » ;
- pas de `llms.txt` considéré comme substitut à une bonne architecture ou à de bonnes preuves ;
- pas de retrait automatique du `noindex`.

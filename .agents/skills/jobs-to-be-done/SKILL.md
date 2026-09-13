---
name: jobs-to-be-done
description: Analyser le progrès recherché par un utilisateur dans une situation donnée avant de raisonner en produit, persona ou fonctionnalité. Utiliser pour cadrer les pages /usages/, identifier les circonstances, jobs fonctionnels/émotionnels/sociaux, forces de changement, alternatives actuelles et critères d'adoption. Adapté du skill MIT wondelai/skills/jobs-to-be-done.
license: MIT
metadata:
  upstream: https://github.com/wondelai/skills/tree/main/jobs-to-be-done
  upstream_author: Wondel.ai sp. z o.o.
  adapted_for: cafetiere-italienne.be
---

# Jobs to Be Done — adaptation éditoriale

Ce skill sert à comprendre **le progrès qu'une personne cherche à accomplir dans des circonstances précises**. Il ne sert pas à fabriquer un persona marketing ni à choisir directement un produit.

Principe : partir de la situation et du progrès recherché, puis seulement relier ce besoin à des contraintes, des familles de solutions et, si nécessaire, à un comparatif séparé.

## 1. Formuler le job sans nommer la solution

Utiliser la structure :

> Quand [circonstances], je veux [progrès], afin de [résultat recherché].

Le job principal doit pouvoir être formulé sans mentionner « cafetière italienne », un matériau, une marque ou un modèle. Si la solution apparaît dans le job, le cadrage est trop produit-centric.

## 2. Décrire les circonstances plutôt que les seules caractéristiques du public

Une catégorie comme « amateur de café », « utilisateur quotidien » ou « campeur » n’est pas encore un job.

Décrire :
- le moment ou contexte déclencheur ;
- le type de café, la quantité ou le matériel manipulé ;
- la fréquence et la durée de l'activité ;
- l’environnement physique et la source de chaleur disponible ;
- ce qui rend la situation actuelle difficile ;
- le résultat concret attendu.

Une même personne peut avoir plusieurs jobs selon la situation.

## 3. Examiner les trois dimensions du job

### Fonctionnelle
Ce que l’utilisateur doit réellement accomplir : doser, moudre, chauffer, extraire, servir, nettoyer, transporter, etc.

### Émotionnelle
Ce que l’utilisateur cherche à ressentir ou éviter : obtenir un résultat fiable, garder un rituel simple, éviter un café amer ou brûlé, limiter la frustration d’une préparation imprévisible, etc.

### Sociale
Ce que l’usage change dans l’interaction avec d’autres personnes : préparer plusieurs cafés, servir des invités, partager un rituel ou s’adapter aux préférences du foyer, etc.

**Règle de preuve :** ne pas inventer de motivation émotionnelle ou sociale. Sans donnée utilisateur ou source crédible, la marquer comme `HYPOTHESIS` et ne pas la présenter comme un fait établi dans le contenu final.

## 4. Cartographier les forces de changement

Pour chaque usage, distinguer :

- **Push** : ce qui rend la situation actuelle insatisfaisante ;
- **Pull** : ce qui attire vers une nouvelle manière de travailler ;
- **Anxiety** : les risques perçus lors du changement ;
- **Habit** : ce qui rend la solution actuelle facile à conserver.

Le contenu doit traiter les freins autant que les bénéfices. Une page usage crédible explique donc aussi pourquoi quelqu’un pourrait rester avec une machine expresso, une cafetière filtre, une machine à capsules, une French press ou sa méthode actuelle.

## 5. Identifier la concurrence réelle

Lister tout ce qui peut être « engagé » pour faire le même job :

- machine expresso ;
- cafetière filtre ;
- machine à capsules ;
- French press ;
- AeroPress ;
- café soluble ;
- combinaison de plusieurs méthodes ;
- ne rien changer.

Ne pas limiter la comparaison aux cafetières italiennes.

## 6. Séparer Big Hire et Little Hire

- **Big Hire** : la décision d'acheter ou d'adopter une solution.
- **Little Hire** : la décision répétée de l'utiliser dans la situation réelle.

Une caractéristique peut aider à vendre le produit sans améliorer l’usage quotidien. Pour une page `/usages/`, privilégier les critères qui changent le Little Hire : simplicité du dosage, régularité de l’extraction, compatibilité avec la plaque, capacité adaptée, nettoyage, encombrement ou transport, etc.

## 7. Transformer le job en critères de décision

À partir des circonstances et du workflow réel, classer les critères en :

- `MUST_HAVE` — sans ce critère, le job échoue ;
- `HIGH` — influence fortement l'expérience ;
- `CONDITIONAL` — important seulement dans certaines circonstances ;
- `LOW` — secondaire pour ce job ;
- `CONTRAINDICATION` — caractéristique ou contrainte qui peut rendre cette famille de solution inadaptée.

Ce skill **ne fait pas de scoring produit**. Dès qu'il faut comparer et classer des modèles, passer la main à `comparison-content-workflow`.

## 8. Niveau de preuve

Pour chaque élément important, utiliser l'un des statuts :

- `OBSERVED` — comportement ou besoin fourni par une source utilisateur/documentée ;
- `SUPPORTED` — appuyé par plusieurs sources crédibles ;
- `INFERRED` — déduction éditoriale raisonnable depuis des faits vérifiés ;
- `HYPOTHESIS` — hypothèse à confirmer ;
- `UNKNOWN` — information insuffisante.

Ne jamais transformer `INFERRED` ou `HYPOTHESIS` en expérience utilisateur réelle.

## Diagnostic rapide

Avant de considérer l'analyse prête, vérifier :

- le job peut-il être formulé sans nommer le produit ?
- les circonstances sont-elles concrètes ?
- le workflow réel est-il décrit ?
- Push, Pull, Anxiety et Habit sont-ils couverts ?
- les alternatives hors catégorie ont-elles été considérées ?
- les critères découlent-ils du job plutôt que des fiches produits ?
- les hypothèses sont-elles explicitement distinguées des preuves ?
- la page usage peut-elle rester utile sans recommander un modèle précis ?

Si plusieurs réponses sont non, l'analyse n'est pas prête pour la rédaction.

## Attribution

Adaptation éditoriale du skill `jobs-to-be-done` du dépôt public `wondelai/skills`, distribué sous licence MIT. Voir `LICENSE` dans ce dossier.
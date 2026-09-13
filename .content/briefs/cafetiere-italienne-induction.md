# Brief — cafetiere-italienne-induction

## Handoff audit

- Décision du CLUSTER_AUDIT : **DEEP_REWRITE — HIGH confidence**.
- L'ancien brief est invalidé parce qu'il fixait Venus comme gagnante avant l'étude du marché.
- La page doit rester distincte de `/guides/cafetiere-italienne-induction-compatibilite/` : le guide explique la compatibilité ; le comparatif aide à choisir une variante à acheter.

## Query et décision

- Query principale : **cafetière italienne induction**.
- Job : acheter une moka réellement détectable par sa plaque, dans un volume adapté.
- Question centrale : **quelle variante précise choisir, sachant que le nom de gamme ou le matériau ne suffisent pas à garantir la détection ?**

## Hard gates avant recommandation

1. La variante exacte doit être annoncée compatible induction par le fabricant.
2. Si la petite taille peut poser problème, afficher le diamètre de base ou le seuil de détection publié ; sinon signaler l'incertitude.
3. Vérifier le volume/taille utile avant de comparer les fonctions secondaires.
4. Ne jamais déduire `inox = induction` ou `gamme induction = toutes les tailles compatibles`.

## Univers réellement étudié

- Bialetti Venus 4 et 6 tasses ; la Venus 2 tasses est explicitement exclue.
- Bialetti Moka Induction 2, 4 et 6 tasses.
- Bialetti Brikka Induction 4 tasses.
- Bialetti Mini Express Induction : considérée mais exclue du noyau, car service direct dans deux tasses et format différent.
- BRA Magna 4, 6 et 10 tasses.
- Grønenberg inox induction 4 et 6 tasses.
- Alessi 9090 1 tasse.
- Alessi Vite 3 tasses : considérée mais non retenue comme choix pratique principal ; différenciation surtout design.
- Milu induction 6 tasses : considérée mais preuve de diamètre de base insuffisante sur la source fabricant consultée.

Le scope n'est pas exhaustif : il doit couvrir les candidats plausibles capables de changer la décision, pas remplir artificiellement une liste.

## Critères définis avant verdict

- compatibilité induction de la variante exacte ;
- diamètre de base / seuil de détection ;
- volume réellement préparé ;
- construction et entretien ;
- fonction spécialisée qui change l'usage ;
- qualité de la preuve disponible.

Pas de scoring numérique. La page doit fonctionner comme un **gate d'éligibilité puis un arbre de choix**.

## Verdicts conditionnels attendus après preuve

- **4/6 tasses, choix général documenté : Bialetti Venus 4 ou 6**. Bialetti donne 170/235 ml et des bases de 9,5/10,5 cm ; Selectos fournit un signal indépendant positif sur l'usage/nettoyage, mais son test n'a pas été réalisé sur induction.
- **2 tasses : Bialetti Moka Induction 2**. 100 ml, base 9,5 cm ; contrairement à Venus 2, la variante est annoncée induction.
- **Inox intégral + lave-vaisselle : BRA Magna**. Full Induction, inox 18/10, bases 9/9,3/11 cm selon 4/6/10 tasses.
- **Flexibilité via réducteur : Grønenberg 4/6**. 200/300 ml et zone induction minimale 9,5/10,5 cm publiés. Le réducteur est un avantage documenté, mais ne doit pas être surpromis : un avis vérifié Trusted Shops signale qu'il ne lui convenait pas.
- **Petit format premium : Alessi 9090 1 tasse**. 70 ml, diamètre 9,5 cm, avertissement fabricant : plaque capable de s'activer dès 90 mm.
- **Usage Brikka spécifique : Brikka Induction 4**. À traiter comme choix spécialisé, pas comme meilleur modèle universel.

## Architecture éditoriale spécifique

Ne pas reprendre le squelette des cinq autres comparatifs.

1. Réponse directe + avertissement : **une cafetière “induction” peut échouer si la taille exacte ou la zone de cuisson ne correspondent pas**.
2. **Gate en 3 vérifications** avant toute sélection.
3. **Matrice des variantes exactes** avec volume et base/seuil de plaque.
4. **Arbre de choix** par situation, pas classement 1→N.
5. Section **ce que nous avons volontairement écarté** et pourquoi.
6. Méthode/preuves/affiliation + sources.

Pas de FAQ obligatoire, pas de fiches produits symétriques, pas de répétition du tableau sous forme de six mini-fiches.

## Preuves obligatoires

Sources primaires : Bialetti pour Venus/Moka Induction/Brikka ; BRA pour Magna ; Grønenberg ; Alessi pour 9090/Vite ; Milu pour son modèle.

Sources indépendantes proportionnées :
- Selectos : test New Venus 6 tasses, uniquement pour facilité de préparation/nettoyage ; ne pas lui faire prouver l'induction car le protocole était au gaz.
- Trusted Shops : signaux vérifiés sur Grønenberg ; ne pas transformer des avis en mesures scientifiques.

## GEO / AEO

- Réponse utile dans le premier écran de contenu.
- Nommer systématiquement le modèle **et la taille** quand celle-ci change la compatibilité.
- Paragraphes autonomes pour les faits de décision.
- Sources nommées à proximité des claims critiques.
- Données exactes facilement extractibles : ml, cm, 90 mm, compatibilité, matériau.
- Pas de bourrage de questions ni de FAQ artificielle.
- `noindex,follow` pendant le draft n'est pas un échec GEO.

## Affiliate value

- La page doit être entièrement utile sans CTA marchand.
- Aucune sélection selon l'affiliabilité ou la commission.
- Les limites doivent être aussi visibles que les raisons de choisir.
- Un futur lien rémunéré devra être `sponsored nofollow` et signalé.

## Anti-AI slop

Interdits :
- « notre top 5 » générique ;
- avantages/inconvénients identiques pour chaque produit ;
- transitions clonées ;
- superlatifs sans critère ;
- conclusion qui répète le tableau ;
- phrases génériques sur « le café authentique italien » sans rôle décisionnel.

## Maillage

Liens contextuels vers :
- `/guides/cafetiere-italienne-induction-compatibilite/` pour comprendre/tester la compatibilité ;
- `/accessoires/adaptateur-induction-cafetiere-italienne/` pour une moka aluminium déjà possédée ;
- `/modeles/bialetti-venus/` et `/modeles/bialetti-moka-induction/` pour les fiches modèles ;
- `/capacites/cafetiere-italienne-2-tasses/`, `/capacites/cafetiere-italienne-4-tasses/`, `/capacites/cafetiere-italienne-6-tasses/` selon le volume ;
- `/comparatifs/meilleure-cafetiere-italienne/` seulement comme retour vers la décision générale.

## Publication

Draft : `noindex,follow`.
Le statut `READY_FOR_HUMAN_VALIDATION` n'est autorisé qu'après le nouveau PUBLISH_REVIEW multi-gates.

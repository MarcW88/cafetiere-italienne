# PUBLISH_REVIEW — Première utilisation d’une cafetière italienne

## Résultat
`PASS — READY_FOR_HUMAN_VALIDATION`

La page reste `noindex,follow`. Ce PASS n’autorise pas l’indexation sans validation humaine explicite.

## Audit amont
- Décision : `DEEP_REWRITE`
- Type dominant : `HOW_TO`
- Cause : placeholder sans procédure de mise en service exploitable.

## Passes réellement effectuées

### Intention / frontière — PASS
- Tâche : mise en service initiale, pas mode d’emploi quotidien.
- Le guide reste distinct de `comment-utiliser-cafetiere-italienne`, du nettoyage courant, du dosage et de la mouture.
- Aucun classement produit ni recommandation marchande.

### Fact-check — PASS
Claims centraux revérifiés après rédaction :
- Bialetti recommande de laver toutes les pièces de la Moka Express à l’eau chaude avant la première utilisation ;
- Bialetti recommande de jeter les trois premières infusions ;
- Bialetti déconseille d’utiliser la poignée lors du dévissage ;
- la procédure quotidienne renvoyée dans la page correspond aux instructions officielles de la Moka Express.

Source principale : Bialetti, consultée le 13 septembre 2026.

### Généralisation / incertitude — PASS
- La règle des trois préparations est explicitement limitée à la Moka Express.
- Pour les autres modèles, la notice du fabricant est présentée comme source prioritaire.
- Aucun conseil de savon, lave-vaisselle, vinaigre, bicarbonate ou « culottage » n’est posé comme règle universelle.

### Evidence / faux hands-on — PASS
- Aucun essai personnel revendiqué.
- Aucun résultat sensoriel inventé.
- Pas de causalité non documentée ajoutée pour justifier les trois préparations à jeter.

### Affiliate value — PASS
- Page pleinement utile sans affiliation.
- Aucun lien commercial nécessaire à la réponse.

### Internal linking — PASS
Les liens servent les étapes suivantes : utilisation quotidienne, nettoyage, dosage et mouture. Les cibles ont été vérifiées par `npm run check`.

### Humanizer / general writing / anti-AI-slop — PASS
- Architecture propre à la mise en service, plus courte et plus conditionnelle que le guide d’utilisation.
- Pas de FAQ générique.
- Pas de répétition artificielle du même squelette éditorial que les deux guides précédents.

### SEO on-page / technique — PASS
- Title, description et H1 présents.
- Canonical : `https://cafetiere-italienne.be/guides/premiere-utilisation-cafetiere-italienne/`
- Robots : `noindex,follow`.
- Section sources unique avec liens externes.
- Aucun lien interne cassé détecté.

### Validation machine — PASS
Exécuté sur la branche :
- `npm run build` → PASS ; 49 pages générées.
- `npm run check` → PASS ; 49 pages HTML, aucun lien interne cassé.
- `python3 validate_guide_quality.py` → PASS ; 3 Guides rédigés sans blocker machine.

## Risques résiduels
- Les consignes de première utilisation des autres marques restent modèle-dépendantes ; le texte le dit explicitement.
- Les futurs guides nettoyage/détartrage devront conserver cette distinction de matériau et de notice.

## Blockers
Aucun blocker identifié pour une validation humaine du contenu.

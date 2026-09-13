# Decision artifact — /capacites/cafetiere-italienne-10-tasses/

Date: 2026-09-13
Upstream decision skill: `ponomr/thinking-toolkit` v1.0.0 @ `1e4c78dd0a0252ca7dab60e6fb3ce9e4404d3328`
Evidence input: `.content/capacities/evidence-cafetiere-italienne-10-tasses-2026-09-13.md`
Research methodology: exact Bloc Notes comparison/shared skill stack @ `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`

## Frame

**Decision:** déterminer quand le palier commercial « 10 tasses » est réellement le bon choix de capacité, et quand un palier voisin 9 ou 12 tasses correspond mieux au volume recherché.

**Decision owner:** lecteur qui cherche un grand format moka.

**Scope:** volume documenté, nature de la métrique publiée, compatibilité plaque/diamètre lorsqu'elle élimine une option, tailles voisines.

**Out of scope:** décider si Venus, Torino, Alessi, Cecotec ou Pedrini est le meilleur produit.

## Facts used

- Plusieurs variantes 10 tasses actuelles existent : Bialetti Venus 10 (~460 ml de capacité annoncée), CRISTEL Torino/Capri 10 (0,50 l), Alessi 9090/M 10 (~500 ml), Cecotec Moking 1000 (500 ml), Pedrini Steel Moka 10 (taille confirmée, volume exact non chiffré dans la fiche consultée).
- La Moka Express n'a pas de 10 tasses dans la gamme documentée et passe de 9 tasses (~410 ml de café préparé) à 12 tasses (~595 ml de café préparé).
- Les métriques ne sont pas strictement équivalentes : certaines sources publient une capacité/continence, Bialetti Moka Express publie un volume approximatif de café préparé.
- Plusieurs références 10 tasses sont compatibles induction, mais cette propriété reste spécifique au modèle et à la plaque.

## Assumptions / unknowns

- Le besoin du lecteur doit être ramené à une zone de volume plutôt qu'au chiffre « 10 » seul.
- Quelques dizaines de ml peuvent ou non être décisionnelles selon l'usage ; la page ne peut pas inventer ce seuil pour tous les lecteurs.
- La disponibilité commerciale peut évoluer et ne doit pas être confondue avec l'existence technique de la taille.

## Selected model(s)

### Hard Choice Model: APPLIED

**Selection rationale:** les options 9/10/12 partagent un critère principal directement comparable — le volume documenté — et les autres facteurs servent surtout de contraintes éliminatoires. Le modèle est utilisé pour vérifier qu'une analyse pondérée n'est pas nécessaire par défaut.

**Impact:** low. Achat réversible et décision de portée limitée.

**Comparability:** easy at capacity level, once metric type is kept explicit.

**Decision type:** low impact + easy comparison → simple rule / no-brainer.

**Approach:** utiliser le volume cible comme règle principale, puis appliquer les contraintes exactes du modèle/plaque.

### Decision Matrix: NOT_REQUIRED

Reason: pour décider entre ~410 ml, ~460–500 ml et ~595 ml, une matrice de scores serait artificielle. Le volume recherché est le critère principal et les contraintes de plaque peuvent éliminer une option. Si plusieurs produits 10 tasses restent ensuite viables et que le lecteur veut les départager sur prix, matériau, entretien ou réparabilité, ce choix appartient au workflow Comparatifs.

## Hard constraints before preferences

1. **Besoin proche de ~0,4 l :** une option documentée autour de 410 ml peut suffire ; ne pas forcer le label 10.
2. **Besoin proche de ~0,46–0,50 l :** le palier 10 tasses devient cohérent sur plusieurs gammes actuelles.
3. **Besoin proche de ~0,6 l :** un palier 12 tasses documenté autour de 595 ml peut être plus cohérent.
4. **Induction obligatoire :** éliminer toute variante non compatible et vérifier les contraintes de détection/diamètre du modèle exact.
5. **Métrique :** ne pas traiter une capacité nominale de 500 ml comme exactement équivalente à 500 ml de café servi.

## Options eliminated by the method

- « 10 tasses » choisi uniquement parce que le nombre semble correspondre à 10 personnes : éliminé.
- « 10 tasses = toujours 500 ml » : éliminé par les preuves.
- « 10 tasses est rare / presque introuvable » : éliminé par le marché documenté actuel.
- Classement des modèles 10 tasses : éliminé de cette page par frontière de catégorie.
- Scoring pondéré 9 vs 10 vs 12 : éliminé car le volume suffit à structurer la décision.

## Viable decision rule

- **≈410 ml recherchés :** regarder aussi 9 tasses.
- **≈460–500 ml recherchés :** le palier 10 tasses est cohérent, sous réserve de la métrique et de la plaque.
- **≈595 ml recherchés :** regarder aussi 12 tasses.

Cette règle ne choisit aucun produit précis.

## Sensitivity / review condition

Revoir la décision si :
- une grande gamme modifie ses volumes ou ajoute/supprime une taille ;
- une source officielle requalifie une donnée de capacité en volume de café préparé ou inversement ;
- l'intention de recherche devient principalement « meilleure cafetière 10 tasses » plutôt que « combien de ml / quelle taille ».

## Action

Conserver la page comme **capacity explainer/choice**, avec décision par volume et handoff explicite vers `/comparatifs/` dès qu'il faut départager des modèles précis.

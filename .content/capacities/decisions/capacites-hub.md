# Decision artifact — /capacites/

Date: 2026-09-13
Upstream decision skill: `ponomr/thinking-toolkit` v1.0.0 @ `1e4c78dd0a0252ca7dab60e6fb3ce9e4404d3328`
Evidence input: `.content/capacities/evidence-capacites-hub-2026-09-13.md`
Research methodology: exact Bloc Notes comparison/shared skill stack @ `534e9fd7e0fc2f7bd83da5b053987ac327c4e9fe`

## Frame

**Decision:** aider un lecteur à choisir le bon palier de capacité d'une moka sans transformer le hub en classement produit.

**Decision owner:** lecteur qui connaît ou peut estimer son volume de café souhaité.

**Scope:** capacité/volume, tailles disponibles, plaque et diamètre lorsque ces contraintes éliminent une option.

**Out of scope:** choisir le meilleur modèle précis, le meilleur rapport qualité/prix, la meilleure marque ou produire un podium.

## Facts used

- Moka Express publie des volumes approximatifs différents selon la taille : notamment 2 ~90 ml, 4 ~185 ml, 6 ~250 ml, 9 ~410 ml, 12 ~595 ml.
- Venus publie notamment 2 ~85 ml, 4 ~170 ml, 6 ~235 ml.
- Moka Induction publie notamment 2 ~100 ml, 4 ~150 ml, 6 ~280 ml.
- CRISTEL Torino documente 6 tasses = 0,30 l et 10 tasses = 0,50 l avec sa propre convention de tasse.
- Alessi 9090 utilise encore un autre découpage de gamme, notamment 1/3/6/10 tasses.
- La compatibilité induction peut dépendre du modèle exact et du diamètre minimal accepté par la plaque.

## Assumptions / unknowns

- Le lecteur doit exprimer son besoin en volume ou au moins en ordre de grandeur ; une conversion fiable en nombre de personnes n'existe pas.
- Les volumes publiés ne sont pas tous la même métrique : capacité nominale et volume de café préparé doivent rester distingués.
- Les gammes et disponibilités peuvent évoluer.

## Selected model(s)

### Hard Choice Model: APPLIED

**Selection rationale:** le problème paraît complexe parce que les libellés « X tasses » changent selon les gammes, mais les options restent largement comparables dès que le besoin est reformulé en ml. Le modèle sert à calibrer l'effort avant d'imposer un scoring.

**Impact:** low. Le choix est réversible et de portée limitée pour le lecteur.

**Comparability:** easy once normalized to verified volume ranges and hard constraints.

**Decision type:** low impact + easy comparison → `no-brainer` / simple rule.

**Approach selected by the upstream model:** décider avec une règle simple plutôt qu'avec une optimisation pondérée.

### Decision Matrix: NOT_REQUIRED

Reason: le volume recherché et les contraintes vérifiées de plaque/diamètre suffisent généralement à réduire l'espace de choix. Une matrice pondérée ajouterait de la fausse sophistication. Si le lecteur veut ensuite départager plusieurs produits précis sur matériau, entretien, prix ou réparabilité, la décision n'est plus une décision de capacité et doit passer au workflow Comparatifs.

## Hard constraints before preferences

1. **Volume recherché:** éliminer les tailles dont le volume documenté est clairement trop faible ou trop élevé pour le besoin.
2. **Plaque obligatoire:** si induction, éliminer les variantes non compatibles.
3. **Détection / diamètre:** lorsqu'une source ou le fabricant de la plaque impose un diamètre minimal, l'utiliser comme contrainte dure.
4. **Variante réellement existante:** ne pas inventer une taille intermédiaire absente de la gamme choisie.

## Options eliminated by the method

- Toute conversion `X tasses = Y personnes` comme règle de décision : éliminée, car non soutenue par les preuves.
- Toute conversion universelle `X tasses = Y ml` : éliminée, car les gammes documentées divergent.
- Tout podium produit sur le hub : éliminé par frontière de catégorie.
- Tout scoring pondéré automatique : éliminé tant que les contraintes dures suffisent.

## Viable decision path

1. Fixer le volume souhaité en ml ou une fourchette réaliste.
2. Identifier les tailles/gammes documentées qui couvrent cette fourchette.
3. Appliquer les contraintes de plaque et diamètre.
4. Choisir le palier de capacité le plus cohérent.
5. Si plusieurs modèles précis restent à départager, handoff vers `/comparatifs/`.

## Sensitivity / review condition

Revoir la décision si :
- une gamme majeure modifie ses tailles ou volumes publiés ;
- de nouvelles données montrent qu'un volume utilisé dans le hub correspondait à une métrique différente ;
- l'intention SERP bascule vers une intention principalement transactionnelle de choix de produits.

## Action

Le hub doit enseigner la règle **volume vérifié → contraintes dures → palier de capacité → handoff produit**, sans matrice ni gagnant produit.

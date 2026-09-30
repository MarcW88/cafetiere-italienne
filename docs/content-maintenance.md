# Maintenance mensuelle depuis le chat

Commande utilisateur : **« Lance la maintenance mensuelle de cafetiere-italienne »**.

Sans API IA ni service supplémentaire : Actions prépare une file ; l'agent du chat exécute les skills du dépôt. Une Action verte signifie seulement « dossier préparé », jamais « contenu audité ». Pas de cron : lancement à la demande.

## Préparation

Actions → **Prepare monthly content maintenance (chat)** → Run workflow sur main.
Choisir le nombre maximal de pages (10 par défaut), éventuellement des chemins séparés par des virgules.
Le résumé et l'artefact contiennent `plan.json` et `handoff.md`.
Si le chat ne dispose pas d'une capacité de déclenchement Actions, exécuter exactement le même préparateur dans son checkout :

```bash
python scripts/maintenance_orchestrator.py prepare
python scripts/maintenance_orchestrator.py prepare --urls /guides/cafetiere-italienne-induction/ --max-pages 1
```

L'inventaire parcourt les vrais `index.html`, y compris les produits imbriqués. Les index de cluster sont exclus par défaut (réactivables via overrides). Les clusters configurés routent vers leurs paires de workflows existantes. Homepage, café moka, boutique, accessoires et pages de confiance restent hors maintenance automatique : aucun workflow spécialisé n'est inventé. Modifier les cadences dans `maintenance.config.json`. `overrides` permet une cadence ou `enabled: false` par URL.

Les pages jamais auditées dans ce registre, arrivées à échéance ou modifiées depuis l'audit sont candidates. La rotation entre clusters évite qu'un cluster monopolise le lot. Les dates des anciens rapports ne sont pas importées automatiquement comme preuve d'un nouvel audit. Préparer un lot ne change aucune date d'audit. Ni âge ni empreinte ne prouvent une erreur factuelle ou un besoin de réécriture.

## Exécution par l'agent du chat

1. Lire `AGENTS.md`, le plan, puis le SKILL.md d'analyse indiqué et les skills spécialisés qu'il appelle. Utiliser AUDIT ; comparer les pages voisines selon ce workflow ; vérifier les faits instables avec des sources actuelles. Données GSC/SERP absentes = inconnues, pas inventées.
2. Sauver un vrai rapport par page dans `.content/reviews/` : décision, preuves et dates, incertitudes, blockers, valeur à préserver, scope et prochaine étape.
3. Enregistrer les audits **avant** de modifier les pages (l'empreinte est celle de la version auditée) :

```bash
python scripts/maintenance_orchestrator.py record --plan .artifacts/maintenance/plan.json --results .artifacts/maintenance/results.json
```

Format `results.json` :

```json
{"pages": [{"url": "/guides/cafetiere-italienne-induction/", "reviewed_at": "2026-09-30", "decision": "KEEP", "audit_report": ".content/reviews/maintenance-induction-2026-09-30.md"}]}
```

Seules les pages réellement terminées sont enregistrées. Les restantes reviennent au prochain lot. Le registre et l'historique doivent être inclus dans la PR, même pour KEEP. Leur persistance nécessite le merge de cette PR.

4. KEEP : aucune modification éditoriale. LIGHT_UPDATE/DEEP_REWRITE : lire et exécuter le content-workflow indiqué, préserver la valeur et limiter le scope. MERGE/NOINDEX : rapport pour décision humaine ; aucune suppression, redirection ou modification robots automatique.
5. Mettre à jour les sources de génération et registres utilisés par le content-workflow, pas uniquement le HTML susceptible d'être écrasé. Exécuter sa chaîne de génération/QA existante puis le validateur indiqué et le même analysis-workflow en PUBLISH_REVIEW. Conserver les preuves de résultat. Ne pas lancer aveuglément les autres générateurs.
6. Ouvrir une branche et une PR incluant corrections, rapports, registre et historique : motif, fichiers, sources, validations et éléments attendant validation humaine. Conserver canonical, URL et état d'indexation. PASS machine ne remplace pas `PASS — READY_FOR_HUMAN_VALIDATION`. Pas de publication automatique.

Aucun audit n'est exécuté ni simulé par le script : les SKILL.md nécessitent l'agent du chat. La préparation est reproductible et n'utilise que Python standard. Aucun secret modèle à configurer.

## Particularités cafetiere-italienne.be

Périmètre actif : guides, comparatifs, marques, modèles et capacités. Les chemins usages/bons-plans ne sont pas présents dans le site actuel et ne sont pas inventés.

Modèles : `model-analysis-workflow` utilise **PAGE_AUDIT**, pas AUDIT. La correction suit `model-content-workflow` v2 et persiste tous les artefacts, records et registry nécessaires. Exécuter validate_models.py et validate_model_workflow.py ; le gate de fraîcheur utilise l'historique Git et impose un commit de review postérieur aux inputs audités. Prévoir les commits dans la branche dans cet ordre, sans fabriquer une review.

Capacités : utiliser `capacity-decision-workflow` pour diagnostic, recherche, décision, production et QA. Lire capacity-workflow.config.yaml ; l'orchestrateur réutilise les workflows Comparatifs et thinking-toolkit sans les modifier. Ne pas classer les produits sur une page capacité ni convertir arbitrairement tasses en personnes ou ml. Le même SKILL.md est donc référencé pour analyse et correction ; respecter ses phases.

Le site utilise **npm run build** et **npm run check**. Modifier les vraies sources sous scripts/ et .content/ suivant les workflows ; les scripts apply-*-reviewed peuvent écraser une correction faite uniquement au HTML. Après build, examiner l'intégralité du diff et préserver indexation, canonical et assets. Exécuter également validate_brand_quality.py pour les marques, validate_models.py pour les modèles et les validateurs propres aux autres clusters. Un précontrôle indiqué dans le plan ne remplace pas cette chaîne.

Les faits sur induction, matériaux, capacité, variantes, joints, sécurité et entretien doivent venir de documentation pertinente et actuelle. Ne jamais inventer tests physiques, ASIN, prix ou disponibilité.

## Baseline vérifiée le 30 septembre 2026

Tests d'orchestration et validateurs guides/comparatifs/marques/capacités/rendu modèles passent. `npm run check` vérifie 53 pages sans liens internes cassés. `validate_model_workflow.py` échoue avant toute maintenance : reviews obsolètes après modifications du registry et de scripts/model-content.mjs, et mismatch du nom Bialetti Venus. Le premier lot modèles doit diagnostiquer ces erreurs, aligner uniquement les identités réellement vérifiées et refaire le vrai PAGE_AUDIT/PUBLISH_REVIEW v2. Ne pas simplement changer une date, désactiver le validateur ou déclarer un PASS. Rapporter le FAIL dans la PR tant qu'il subsiste. La chaîne build→audit éditorial→correction→review complète n’a pas encore été exécutée pour cette maintenance.

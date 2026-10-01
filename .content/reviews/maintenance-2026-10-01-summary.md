# Maintenance éditoriale — 2026-10-01

## Périmètre

Dix pages sélectionnées par `maintenance_orchestrator.py prepare --max-pages 10` ont été réellement auditées. Les dix décisions sont `KEEP`; aucun contenu de page, URL, canonical, état robots ou asset n'a été modifié.

| URL | Workflow | Décision |
|---|---|---|
| `/capacites/cafetiere-italienne-10-tasses/` | capacity-decision | KEEP |
| `/comparatifs/cafetiere-italienne-design/` | comparison | KEEP |
| `/guides/cafetiere-italienne-aluminium-ou-inox/` | guide | KEEP |
| `/marques/alessi/` | brand | KEEP |
| `/modeles/alessi-9090/` | model v2 PAGE_AUDIT | KEEP |
| `/capacites/cafetiere-italienne-12-tasses/` | capacity-decision | KEEP |
| `/comparatifs/cafetiere-italienne-electrique/` | comparison | KEEP |
| `/guides/cafetiere-italienne-cafe-amer-brule/` | guide | KEEP |
| `/marques/bialetti/` | brand | KEEP |
| `/modeles/bialetti-brikka/` | model v2 PAGE_AUDIT | KEEP |

Les rapports unitaires conservent preuves datées, sources, unknowns, valeur à préserver, blockers et décision. L'index et l'historique de maintenance ont été enregistrés avant toute correction d'entrée.

## Réparation de baseline modèles

La baseline de `main` échouait à `validate_model_workflow.py`: six revues étaient antérieures aux changements du registre et de `scripts/model-content.mjs`, et deux noms de records divergeaient du registre. Les records ont été alignés sur `Bialetti Moka Express 6 tasses` et `Bialetti Venus 6 tasses`, puis les six dossiers modèles ont fait l'objet d'une nouvelle PUBLISH_REVIEW v2 dans un commit ultérieur. Aucun gate n'a été désactivé et aucune date historique n'a été remplacée.

## Contrôles

- `npm run build`: PASS. Le build a régénéré 34 HTML avec 229 insertions et 37 suppressions alors qu'aucune source éditoriale n'avait changé. Ce drift global préexistant n'a pas été inclus dans le lot KEEP afin d'éviter d'écraser ou publier des différences non auditées.
- `npm run check`: PASS, 53 pages, aucun lien interne cassé.
- `validate_model_workflow.py`: PASS, six dossiers complets, identités alignées et fraîcheur Git respectée.
- `validate_models.py`, `validate_capacities.py`, `validate_guide_quality.py`, `validate_comparisons.py`, `validate_brands.py`, `validate_brand_quality.py`: PASS.

## Validation humaine

Les six pages modèles restent `noindex,follow` et `READY_FOR_HUMAN_VALIDATION`. Leur éventuelle indexation demeure une décision humaine séparée. Les dix pages auditées ne nécessitent aucune correction éditoriale dans ce lot.

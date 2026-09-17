#!/usr/bin/env python3
"""Explicit human-approved publication registry for cafetiere-italienne guides.

All current public Guide routes were explicitly approved for indexation on
2026-09-17. Future Guide routes remain excluded until they are added here.
"""

INDEXABLE_GUIDE_ROUTES = {
    "/guides/",
    "/guides/comment-choisir-cafetiere-italienne/",
    "/guides/comment-utiliser-cafetiere-italienne/",
    "/guides/premiere-utilisation-cafetiere-italienne/",
    "/guides/dosage-cafe-cafetiere-italienne/",
    "/guides/mouture-cafetiere-italienne/",
    "/guides/quel-cafe-pour-cafetiere-italienne/",
    "/guides/cafetiere-italienne-aluminium-ou-inox/",
    "/guides/cafetiere-italienne-induction-compatibilite/",
    "/guides/nettoyer-cafetiere-italienne/",
    "/guides/detartrer-cafetiere-italienne/",
    "/guides/cafetiere-italienne-cafe-amer-brule/",
    "/guides/cafetiere-italienne-fuite-vapeur/",
    "/guides/changer-joint-cafetiere-italienne/",
    "/guides/cafetiere-italienne-vs-espresso/",
}

INDEXABLE_ROUTES_BY_SCOPE = {
    "guides": INDEXABLE_GUIDE_ROUTES,
}

SCOPE_ROOTS = {
    "guides": "guides",
}

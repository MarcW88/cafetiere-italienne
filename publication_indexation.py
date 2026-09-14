#!/usr/bin/env python3
"""Explicit human-approved publication registry for cafetiere-italienne guides.

A route appears here only after an explicit publication/indexation decision.
Guide detail pages remain noindex by default; a workflow PASS never promotes them.
"""

INDEXABLE_GUIDE_ROUTES = {
    "/guides/",
}

INDEXABLE_ROUTES_BY_SCOPE = {
    "guides": INDEXABLE_GUIDE_ROUTES,
}

SCOPE_ROOTS = {
    "guides": "guides",
}

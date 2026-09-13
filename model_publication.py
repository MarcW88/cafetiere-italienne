"""Explicit publication state for /modeles/ pages.

Model pages remain noindex until machine validation, PUBLISH_REVIEW,
human validation and a separate explicit instruction to index them.
"""

INDEXABLE_MODEL_ROUTES = set()

"""Explicit publication/indexation state for comparison pages.

Only routes listed here may be switched to index,follow by the comparison
publication step. New comparison pages must remain noindex until they complete
PUBLISH_REVIEW, receive human validation, and are explicitly approved for
indexation.

No comparison route has human indexation approval yet.
"""

INDEXABLE_COMPARISON_ROUTES = set()

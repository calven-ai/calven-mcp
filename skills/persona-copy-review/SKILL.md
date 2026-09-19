---
name: persona-copy-review
description: Review supplied copy against Calven personas when the user asks for persona feedback, message pressure-testing, audience fit, objections, or revision priorities.
---

# Persona copy review

Use Calven's asynchronous persona review workflow for the supplied text.

1. Confirm that the text to review is present. If the user names a product, preserve that product scope.
2. If the user names a persona but the exact Calven name or type is unclear, use `get_persona` or `list_records` with kind `personas` to resolve it.
3. Tell the user that Calven will start a review task against workspace personas and return findings. A direct request to review is sufficient authorization; do not ask for redundant confirmation.
4. Call `review_against_personas` with the exact text. Set `scope` only when the user asks for buyers, stakeholders, or users. Set `product` only when a product was named or clearly established.
5. The first response contains no findings. Wait for `poll_after_seconds`, call `get_task` with the returned task ID, and repeat while the status is `working`.
6. If the task requires input or fails, report that state and the next available action. Do not invent findings.

Return completed findings grouped by severity. Distinguish evidence from revision advice. Quote only the minimum source text needed to locate each issue. Do not rewrite the whole draft unless the user asks.

---
name: workspace-brief
description: Build a sourced brief from a Calven workspace when the user asks for company, product, positioning, messaging, ICP, market, customer, or win-loss context.
---

# Workspace brief

Build the brief from Calven evidence. Do not fill gaps from model memory.

1. Call `get_workspace_overview` first. Use it to identify products, available strategy documents, and populated record kinds.
2. If the request concerns a product and the name is unclear, call `list_products`. Use the exact product name for later scope.
3. Read only the strategy documents needed for the request with `get_strategy_document`.
4. Use `list_records` for supporting evidence such as customer themes and quotes, deal drivers, market trends, analyst findings, product changes, or claims. Read an individual row with `get_record` only when the brief needs its full detail.
5. Keep company-wide evidence separate from product-scoped evidence.

Return:

- the short answer first;
- the documented strategy and supporting evidence;
- tensions or contradictions across sources;
- explicit workspace gaps;
- source names or identifiers returned by Calven.

Never describe a missing document or empty result as proof that a claim is false. Say that the workspace does not contain the evidence.

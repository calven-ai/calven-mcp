# Tool catalog

Calven exposes 14 tools. Results reflect the connected user's workspace permissions and product scope.

| Tool | Behavior | Mode | Annotations |
| --- | --- | --- | --- |
| `get_workspace_overview` | Shows the workspace, products, available strategy documents, and record counts. | Read | read-only |
| `list_products` | Lists products used to scope later requests. | Read | read-only |
| `get_strategy_document` | Reads positioning, messaging, ICP, or the product brief, company-wide or per product. | Read | read-only |
| `list_documents` | Finds published documents available to the user. | Read | read-only |
| `read_document` | Reads one published document by its returned identifier. | Read | read-only |
| `list_records` | Searches and filters a supported record kind. | Read | read-only |
| `get_record` | Reads one record by identifier or, where supported, exact name. | Read | read-only |
| `get_competitor` | Reads one competitor: its battlecard, recent signals and the outline of its deep-dive dossier. The full dossier is read with `read_document`. | Read | read-only |
| `get_persona` | Reads a named buyer, stakeholder, or user persona. | Read | read-only |
| `get_insights` | Reads one Insights dashboard as data: KPIs with their change against the prior period, breakdowns, rankings, trends. | Read | read-only |
| `get_insights_overview` | Reads every dashboard's headline KPIs, the biggest movers, top loss reasons, product gaps, and data availability. | Read | read-only |
| `get_insight_detail` | Reads the rows behind one dashboard number: deals in a bucket, deals against a competitor, survey answers, verbatims, one AI answer, the signal feed. | Read | read-only |
| `review_against_personas` | Starts an asynchronous review of supplied copy against selected personas. | Action | not read-only, non-destructive |
| `get_task` | Polls an asynchronous task and returns its status or result. | Read | read-only |

Every tool sets a display `title` and explicit annotations. Read tools: `readOnlyHint: true`, `destructiveHint: false`, `idempotentHint: true`, `openWorldHint: false`. `review_against_personas`: `readOnlyHint: false`, `destructiveHint: false`, `idempotentHint: true`, `openWorldHint: false`. No tool reaches outside the Calven workspace, edits workspace content, or sends anything. Every tool declares an `outputSchema`.

## Prompts

The server also publishes four ready-made prompts, listed by clients that support MCP prompts (slash commands or a prompt picker): how do we compete with a competitor, what are a competitor's strengths, who our competitors are, and a monthly insights review.

## Record kinds

`list_records` and `get_record` cover:

- competitors and competitive signals;
- personas;
- trends, market opportunities, analyst findings, and raw market signals;
- customer conversations, themes, customer quotes, vendor quotes, and deal drivers;
- surveyed deals and survey responses;
- product changes, product drift findings, and claims;
- permitted CRM accounts, contacts, and deals.

## Insights dashboards

`get_insights`, `get_insights_overview`, and `get_insight_detail` cover win/loss, win/loss program health, competitive intelligence, voice of customer, ICP, persona, positioning, messaging, market research, and product intelligence. Every rate comes with its sample size and window.

The tool schema returned by `tools/list` is authoritative for current filters, required arguments, limits, and output structure.

## Evidence rules

- Treat an empty result or missing document as a gap in the workspace.
- Do not replace missing evidence with model memory.
- Distinguish a security-restricted field from missing data.
- Preserve source references returned by Calven.
- Dashboard numbers come from the Insights tools, never from adding up rows.
- Use the product name for scope when the user supplies one. Use returned identifiers only where the tool requires them.

## Public catalog changes

A tool change updates this catalog, the skills that use it and the validator in the same release.

# Tool catalog

Calven exposes 11 focused tools. Results reflect the connected user's workspace permissions and product scope.

| Tool | Behavior | Mode |
| --- | --- | --- |
| `get_workspace_overview` | Shows the workspace, products, available strategy documents, and record counts. | Read |
| `list_products` | Lists products used to scope later requests. | Read |
| `get_strategy_document` | Reads positioning, messaging, ICP, product, or win/loss strategy. | Read |
| `list_documents` | Finds published documents available to the user. | Read |
| `read_document` | Reads one published document by its returned identifier. | Read |
| `list_records` | Searches and filters a supported record kind. | Read |
| `get_record` | Reads one record by identifier or, where supported, exact name. | Read |
| `get_competitor` | Reads a competitor dossier, battle card, recent signals, or a selected subset. | Read |
| `get_persona` | Reads a named buyer, stakeholder, or user persona. | Read |
| `review_against_personas` | Starts an asynchronous review of supplied copy against selected personas. | Action |
| `get_task` | Polls an asynchronous task and returns its status or result. | Read |

## Record kinds

`list_records` and `get_record` cover:

- competitors and competitive signals;
- personas;
- trends, market opportunities, analyst findings, and raw market signals;
- customer conversations, themes, customer quotes, vendor quotes, and deal drivers;
- product changes, product drift findings, and claims;
- permitted CRM accounts, contacts, and deals.

The tool schema returned by `tools/list` is authoritative for current filters, required arguments, limits, and output structure.

## Evidence rules

- Treat an empty result or missing document as a gap in the workspace.
- Do not replace missing evidence with model memory.
- Distinguish a security-restricted field from missing data.
- Preserve source references returned by Calven.
- Use the product name for scope when the user supplies one. Use returned identifiers only where the tool requires them.

## Public catalog changes

Adding or removing a tool is a product and security decision. A change must update this catalog, the relevant skills, validation fixtures, and compatibility notes in the same release.

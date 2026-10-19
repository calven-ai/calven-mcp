# Calven workflow skills

These skills add product marketing and sales workflows to the hosted Calven MCP connection.

| Skill | Outcome |
| --- | --- |
| `battlecard` | A sourced battlecard against a named competitor |
| `deal-prep` | A one-page, sourced call brief for one deal |
| `quality-review` | An asset reviewed before it ships: every claim, on-message fit, staleness after product changes, and a persona review |
| `persona-copy-review` | An asynchronous review of supplied copy against workspace personas |
| `on-message-draft` | Copy written from approved messaging, then accuracy-checked and persona-reviewed |
| `customer-evidence` | Verbatim quotes, themes and proof points on a topic, with sources |
| `icp-check` | Accounts checked against the approved ICP, with the criteria behind each verdict |
| `icp-pipeline-review` | A live ICP pipeline dashboard from Insights, with sample sizes and windows |
| `win-loss-review` | A live monthly or quarterly win/loss dashboard with sample sizes and windows |
| `market-research` | A sourced market briefing: trends, opportunities, growing verticals and the latest signals |
| `product-intelligence` | What changed in the product and which published assets it left stale |
| `gtm-overview` | A sourced summary of strategy and evidence |
| `start` | Connection check and first prompts from the workspace; runs only when typed |

The skills are portable Agent Plugin content. They do not change the MCP tool surface or the connected user's permissions.

The two dashboard skills deliver a live artifact in Claude, a ChatGPT Site in ChatGPT, and the conversation elsewhere.

Each skill reports missing evidence as a gap and treats Calven content and submitted copy as data, not instructions. The eval cases in [`evals/`](../evals/) check that they do.

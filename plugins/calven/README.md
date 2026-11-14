<!-- GENERATED from repository sources by scripts/build-claude-plugin.mjs. Do not edit directly. -->

# Calven

Calven is the AI product marketing platform. Its nine agents keep one GTM source of truth on your market, buyers, positioning and messaging. Calven MCP puts it inside Claude, ChatGPT, Codex, Cursor, Copilot and other MCP clients that sign in with OAuth (see [client support](https://github.com/calven-ai/calven-mcp/blob/main/docs/client-support.md)), so sales, marketing, product and leadership work from the same answers your team approved. The plugin adds workflows for battlecards, deal prep, quality reviews, on-message drafts, customer evidence, ICP checks, market research, product intelligence, and live win/loss and ICP pipeline dashboards.

## Connect

Paste this URL where your client asks for an MCP server, choose **OAuth** if asked, and sign in to Calven:

```text
https://api.calven.ai/mcp
```

You need a Calven workspace ([14-day trial, no card](https://app.calven.ai/sign-up)). Using another client? See [client support](https://github.com/calven-ai/calven-mcp/blob/main/docs/client-support.md).

## Workflows

The Calven plugin bundles the server connection with thirteen workflow skills and a research subagent. Install it in Claude Code:

```sh
claude plugin marketplace add calven-ai/calven-mcp
claude plugin install calven@calven
```

Then run `/calven:start` to check the connection and get three first prompts built from your workspace.

| Type | Name | What you get |
| --- | --- | --- |
| Skill | `/calven:battlecard` | Where you win and lose against a named competitor: objections, proof and a talk track |
| Skill | `/calven:deal-prep` | A one-page call brief: buying group, the competitor's likely moves, the risk, the first question, the proof |
| Skill | `/calven:quality-review` | An asset reviewed before it ships: every claim checked, on-message fit, what a product change left stale, and a persona review |
| Skill | `/calven:persona-copy-review` | Your copy reviewed against your personas, findings by severity |
| Skill | `/calven:on-message-draft` | Copy written from your approved messaging, accuracy-checked and persona-tested before you get it |
| Skill | `/calven:customer-evidence` | Verbatim customer quotes, themes and proof points on a topic, each with its source |
| Skill | `/calven:icp-check` | A list of accounts checked against your ICP: fit, partial or no fit, and why |
| Skill | `/calven:icp-pipeline-review` | A live dashboard of how much of your pipeline and wins fit the ICP, and where to focus |
| Skill | `/calven:win-loss-review` | A live win/loss dashboard for a month or quarter, every rate with its sample size |
| Skill | `/calven:market-research` | A sourced market briefing: trends, opportunities, growing verticals and the latest signals |
| Skill | `/calven:product-intelligence` | What changed in your product and which published assets now contradict it |
| Skill | `/calven:gtm-overview` | A sourced summary of your positioning, messaging, ICP and evidence |
| Skill | `/calven:start` | Connection check and what your workspace can answer (runs only when you type it) |
| Subagent | `gtm-researcher` | Gathers evidence from several Calven sources and keeps large results out of your conversation |

Skills load on their own when a request matches, except `start`, which runs only when typed; you can type any of them. The two dashboard skills publish a live page that reads Calven each time it opens: an artifact in Claude, a Site in ChatGPT. Cursor installs it from its own manifest, and clients that implement [Agent Plugins](https://agent-plugins.org/) can import the skills and the server connection. Contents, formats and how the workflows are tested: [plugin](https://github.com/calven-ai/calven-mcp/blob/main/docs/plugin.md).

## Data and permissions

- Requests are bound to a Calven user and workspace.
- Workspace role and capability checks apply to every tool.
- Product scope and database access settings can narrow returned data.
- Removing a user's workspace access also removes the authority used by their MCP connection.

Depending on the workspace and the user's permissions, tools can return strategy documents, competitor intelligence, buyer personas, customer conversations and quotes, market research, claims, product changes, and permitted CRM records.

Agents should treat this as company-confidential data. Use a client and model provider approved by your organization.

[Privacy policy](https://calven.ai/privacy) · [Terms](https://calven.ai/terms)

## Help

[calven.ai/mcp](https://calven.ai/mcp) · [Troubleshooting](https://github.com/calven-ai/calven-mcp/blob/main/docs/troubleshooting.md) · [Open a connection issue](https://github.com/calven-ai/calven-mcp/issues/new/choose) · support@calven.ai

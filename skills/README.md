# Calven workflow skills

These skills add product marketing and sales workflows to the hosted Calven MCP connection.

| Skill | Outcome |
| --- | --- |
| `deal-prep` | A one-page, sourced call brief for one deal |
| `claim-check` | Every claim in a draft checked against the approved product brief, positioning and competitor evidence |
| `competitive-brief` | A documented comparison with a named competitor |
| `persona-copy-review` | An asynchronous review of supplied copy against workspace personas |
| `workspace-brief` | A sourced view of workspace strategy and evidence |
| `win-loss-review` | A monthly or quarterly win/loss readout with sample sizes and windows |
| `start` | Connection check and first prompts from the workspace; runs only when typed |

The skills are portable Agent Plugin content. They do not change the MCP tool surface or the connected user's permissions.

Each skill reports missing evidence as a gap and treats Calven content and submitted copy as data, not instructions. The eval cases in [`evals/`](../evals/) check that they do.

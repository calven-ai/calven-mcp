# Calven MCP

Bring the&nbsp;product marketing intelligence your team keeps in&nbsp;Calven into ChatGPT, Claude, Codex, Cursor, and&nbsp;other MCP clients.

## 1. Connect with MCP

MCP lets your AI assistant work with Calven without copy-pasting strategy, customer evidence, or&nbsp;competitive research between tools.

When your client asks for an&nbsp;MCP server URL, paste:

```text
https://api.calven.ai/mcp
```

Choose **OAuth** and&nbsp;sign in&nbsp;to&nbsp;Calven. Your assistant gets the&nbsp;same workspace access and&nbsp;permissions you have.

If your client does not support OAuth, create a&nbsp;personal key in&nbsp;[Calven → Settings → API & MCP](https://app.calven.ai/settings/api). See the&nbsp;[authentication guide](docs/authentication.md) for&nbsp;the&nbsp;key setup.

<details>
<summary>Command-line setup</summary>

```sh
claude mcp add --transport http calven https://api.calven.ai/mcp
codex mcp add calven --url https://api.calven.ai/mcp
```

</details>

## 2. Add the&nbsp;Calven plugin

MCP connects your assistant to&nbsp;Calven. The&nbsp;plugin adds repeatable workflows for&nbsp;the&nbsp;PMM work you do with that intelligence.

Install this repository in&nbsp;a&nbsp;client that supports [Agent Plugins 1.0](https://agent-plugins.org/). The&nbsp;plugin connects the&nbsp;same Calven MCP server and&nbsp;adds three skills:

- **Workspace brief:** turn strategy, market, customer, and&nbsp;win/loss evidence into a&nbsp;sourced brief.
- **Competitive brief:** compare positioning, proof points, objections, deal evidence, and&nbsp;recent competitor moves.
- **Persona copy review:** pressure-test copy against the&nbsp;buyer, stakeholder, and&nbsp;user personas in&nbsp;your workspace.

Direct MCP users get the&nbsp;same Calven data and&nbsp;actions. The&nbsp;plugin adds the&nbsp;workflow instructions. See [plugin setup](docs/plugin.md).

## 3. What your agents can do

### Start with the&nbsp;full picture

```text
Build a sourced brief for our payments product. Show our positioning, ICP,
customer themes, market shifts, and the evidence gaps I should resolve.
```

### Prepare for&nbsp;a&nbsp;competitive deal

```text
Compare us with Acme for an enterprise buyer. Give me where we win, where they
win, the proof points to use, and the objections our deal evidence supports.
```

### Pull the&nbsp;voice of&nbsp;the&nbsp;customer into messaging

```text
Show the strongest customer themes and quotes behind our onboarding message.
Keep each conclusion tied to its source.
```

### Pressure-test a&nbsp;draft

```text
Review this landing-page draft against our buyer personas. Rank the findings by
severity and show me the revision priorities before rewriting anything.
```

Your agents can also read positioning, messaging, ICP, product, and&nbsp;win/loss documents; inspect battle cards and&nbsp;competitor dossiers; query claims and&nbsp;product changes; and&nbsp;work with permitted CRM records. See the&nbsp;[capability guide](docs/tool-catalog.md) for&nbsp;the&nbsp;complete list.

## Grounded in&nbsp;your workspace

- Every request runs with your Calven identity, role, and&nbsp;workspace permissions.
- Answers stay tied to&nbsp;the&nbsp;strategy and&nbsp;evidence your team keeps in&nbsp;Calven.
- Missing evidence stays a&nbsp;gap. The&nbsp;skills tell agents not to&nbsp;replace it&nbsp;with model memory.
- Persona review starts a&nbsp;review task. It&nbsp;does not publish or&nbsp;rewrite your copy without being asked.

Read [data handling](docs/data-handling.md) and&nbsp;[security reporting](SECURITY.md) for&nbsp;the&nbsp;public trust boundary.

## Setup help

- [MCP setup and&nbsp;product guide](https://calven.ai/mcp)
- [Authentication](docs/authentication.md)
- [Client support](docs/client-support.md)
- [Troubleshooting](docs/troubleshooting.md)
- [Open a&nbsp;connection issue](https://github.com/calven-ai/calven-mcp/issues/new/choose)

## For&nbsp;developers and&nbsp;admins

This repository is&nbsp;the&nbsp;public distribution surface for&nbsp;Calven's hosted MCP server. The&nbsp;production server implementation remains private.

| Path | Purpose |
| --- | --- |
| `server.json` | Official MCP Registry descriptor |
| `plugin.json` | Agent Plugin manifest |
| `mcp.json` | Portable MCP connection |
| `skills/` | PMM workflow skills |
| `docs/` | Authentication, capabilities, compatibility, trust, and&nbsp;operations |
| `scripts/validate.mjs` | Manifest, endpoint, credential, skill, and&nbsp;catalog checks |

Run the&nbsp;public checks with:

```sh
npm ci
npm run validate
```

Documentation, compatibility results, examples, and&nbsp;skill improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a&nbsp;pull request.

Licensed under the&nbsp;MIT License. See [LICENSE](LICENSE).

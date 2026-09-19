# Calven MCP

Give AI agents governed access to the product marketing intelligence your team keeps in Calven.

```text
https://app.calven.ai/api/mcp
```

This is the public distribution repository for Calven's hosted Model Context Protocol server and portable Agent Plugin. The production server is operated by Calven. Its implementation is maintained in a private product repository.

## Connect

Use OAuth when your client supports remote MCP authentication:

```text
MCP URL: https://app.calven.ai/api/mcp
Transport: Streamable HTTP
Authentication: OAuth 2.1 with PKCE
```

Two common command-line setups:

```sh
claude mcp add --transport http calven https://app.calven.ai/api/mcp
codex mcp add calven --url https://app.calven.ai/api/mcp
```

Clients that support custom headers can use a personal Calven MCP key instead. Create one in [Settings → API & MCP](https://app.calven.ai/settings/api), copy it once, and keep it outside source control.

```json
{
  "mcpServers": {
    "calven": {
      "type": "streamable-http",
      "url": "https://app.calven.ai/api/mcp",
      "headers": {
        "Authorization": "Bearer ${CALVEN_MCP_KEY}"
      }
    }
  }
}
```

See [authentication](docs/authentication.md) and the [client support matrix](docs/client-support.md) before rolling Calven out to a team.

## What agents can do

- Read the workspace overview and product catalog.
- Read positioning, messaging, ICP, product, and win/loss documents.
- Build competitive briefs from dossiers, battle cards, and recent signals.
- Query customer voice, market research, product changes, claims, and permitted CRM records.
- Review a draft against named personas through an asynchronous review task.

Calven exposes 11 focused tools. Ten are read-only. `review_against_personas` starts a review task and returns a task ID; it does not publish content. See the [tool catalog](docs/tool-catalog.md).

## Agent Plugin

The repository root is an [Agent Plugins 1.0](https://agent-plugins.org/) package:

- `plugin.json` describes the package.
- `mcp.json` connects the hosted Calven server.
- `skills/` adds three sourced PMM workflows.

Import the repository root in a client that implements Agent Plugins 1.0. Direct MCP users get the same server tools without the workflow skills. See [plugin packaging](docs/plugin.md).

## Example requests

```text
Build a sourced workspace brief for our payments product.

Compare our positioning with Acme. Separate documented evidence from gaps.

Review this landing-page draft against our buyer personas. Show the findings and do not rewrite it yet.
```

## Trust boundaries

- Every request is authenticated as a Calven user and evaluated against that user's workspace role and permissions.
- MCP keys are personal credentials. They are shown once, stored hashed by Calven, and can be regenerated or revoked.
- Empty results are reported as gaps. The skills tell agents not to fill missing workspace evidence from model memory.
- The public repository contains no production credentials and no private server source.

Read [data handling](docs/data-handling.md), [security reporting](SECURITY.md), and [conformance](docs/conformance.md) for the complete public contract.

## Repository map

```text
server.json              Official MCP Registry descriptor
plugin.json              Agent Plugin manifest
mcp.json                 Portable remote MCP configuration
skills/                  Reusable PMM workflows
docs/                    Auth, tools, trust, compatibility, and operations
examples/                Copyable connection configurations
scripts/validate.mjs     Manifest and drift checks
.github/workflows/       Validation and public production smoke tests
```

## Support

- Product and setup guide: [calven.ai/mcp](https://calven.ai/mcp)
- Connection problems: [open an issue](https://github.com/calven-ai/calven-mcp/issues/new/choose)
- Security reports: follow [SECURITY.md](SECURITY.md)
- Privacy: [calven.ai/privacy](https://calven.ai/privacy)
- Terms: [calven.ai/terms](https://calven.ai/terms)

## Contributing

Documentation, compatibility results, examples, and workflow-skill improvements are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

Licensed under Apache 2.0. See [LICENSE](LICENSE).

# Client support

Calven uses remote Streamable HTTP and OAuth sign-in. See [authentication](authentication.md#client-requirements).

## Supported clients

Setup steps for each client are in the [README](../README.md#connect).

- Claude (claude.ai and desktop)
- Claude Code
- ChatGPT
- Codex
- Cursor
- VS Code and GitHub Copilot

Using another MCP client? Email support@calven.ai or [open a connection issue](https://github.com/calven-ai/calven-mcp/issues/new/choose) and we will add it.

## Clean-account test record

For each supported client, record:

- client name, version, operating system, and test date;
- installation path used;
- the client registration method used;
- whether browser consent opened and completed;
- protocol handshake, tool and prompt discovery;
- one sourced read workflow;
- credential persistence, revocation, and reconnection behavior;
- any client-specific limitation.

Open a pull request with the evidence summary. Do not include credentials, tenant identifiers, customer names, or screenshots containing private workspace data.

## Plugin install records

### Claude Code 2.1.302, Linux, 2026-10-17

- **Installation path:** fresh configuration directory, `claude plugin marketplace add calven-ai/calven-mcp` (pull request branch), then `claude plugin install calven@calven`. Installed as `calven@calven` 1.2.0, enabled.
- **Components loaded:** skills `deal-prep`, `claim-check`, `competitive-brief`, `persona-copy-review`, `win-loss-review`, `workspace-brief` (the 2026-10-17 install, before the renames to `quality-review`, `battlecard` and `gtm-overview`); `start` runs when typed; subagent `calven:gtm-researcher`. `claude mcp list` shows `plugin:calven:calven` at `https://api.calven.ai/mcp`, needing authentication.
- **Registration method:** CIMD. Sign-in starts with `client_id=https://claude.ai/oauth/claude-code-client-metadata`, PKCE `S256`, the `resource` set to the endpoint and the published scopes; Calven's authorization server accepts the client and redirects to the sign-in page.
- **Before sign-in:** `/calven:start` tells the user to sign in with `/mcp` and invents nothing.
- **Not yet verified:** completing browser consent with a Calven account, tool and prompt discovery after sign-in, one sourced read workflow, and token persistence and revocation. These need a person at a browser.
- **Install size:** about 3 MB of plugin files plus the marketplace clone.

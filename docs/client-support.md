# Client support

Calven uses remote Streamable HTTP. A client must support that transport and either OAuth discovery or a custom bearer header.

## Verification states

- **Verified:** a clean-account connection, authentication, tool discovery, and one read workflow passed on the recorded version.
- **Documented:** the client publishes the required capability, but Calven has not recorded the complete clean-account test here.
- **Unsupported:** the client lacks a required transport or authentication capability.

## Matrix

| Client | Remote HTTP | OAuth | Custom header | Status | Setup |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | Yes | Documented | `claude mcp add --transport http calven https://api.calven.ai/mcp`, then `claude mcp login calven` (or `/mcp` in a session → `calven` → browser sign-in). Bearer config: [`examples/claude-code-bearer.json`](../examples/claude-code-bearer.json). |
| Codex CLI | Yes | Yes | Yes (`--bearer-token-env-var` or `bearer_token_env_var`) | Documented | `codex mcp add calven --url https://api.calven.ai/mcp`, then `codex mcp login calven`. |
| Claude (claude.ai, desktop) | Yes | Yes | Beta, limited organizations (Request headers) | Pending clean-account test | Customize → Connectors → Add custom connector → paste the URL → Add → Connect. If asked how Claude identifies itself, choose Use Claude's published identity (Calven supports CIMD, not dynamic client registration). Team and Enterprise: an Owner adds it under Organization settings → Connectors → Add → Custom → Web; members then click Connect on the Custom connector under Customize → Connectors. OAuth discovery, consent and tool use confirmed from a founder account on 2026-10-05; the clean-account record is still open. |
| ChatGPT | Yes | Yes | No public custom-header path | Pending clean-account test | Plugins (`chatgpt.com/plugins`) → plus button → Add custom MCP server → Server URL, Authentication OAuth → Create as a plugin; install it from personal plugins, then select it with `@` in a chat. Plan and workspace settings apply; see OpenAI's [Add custom MCP server](https://developers.openai.com/api/docs/guides/custom-mcp-server). |
| Cursor | Yes | Yes | Yes (`${env:NAME}`) | Pending clean-account test | [README install button](../README.md#connect), or add a remote MCP server named `calven` with the URL. Bearer config: [`examples/cursor-bearer.json`](../examples/cursor-bearer.json). |
| VS Code and GitHub Copilot | Yes | Yes | Yes (`${input:...}`) | Pending clean-account test | [README install button](../README.md#connect), or Command Palette → MCP: Add Server → HTTP → the URL, named `calven`. Bearer config: [`examples/vscode-bearer.json`](../examples/vscode-bearer.json). |

The table is intentionally conservative. Client behavior changes independently of the MCP specification. Do not infer support from a logo or marketplace listing.

## Clean-account test record

When promoting a client to Verified, record:

- client name, version, operating system, and test date;
- installation path used;
- whether OAuth discovery or a personal key was used;
- whether browser consent opened and completed;
- `initialize`, tools, resources, and prompts discovery;
- one sourced read workflow;
- credential persistence, revocation, and reconnection behavior;
- any client-specific limitation.

Open a pull request with the evidence summary. Do not include credentials, tenant identifiers, customer names, or screenshots containing private workspace data.

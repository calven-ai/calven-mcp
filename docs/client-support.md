# Client support

Calven uses remote Streamable HTTP. A client must support that transport and either OAuth discovery or a custom bearer header.

## Verification states

- **Verified:** a clean-account connection, authentication, tool discovery, and one read workflow passed on the recorded version.
- **Documented:** the client publishes the required capability, but Calven has not recorded the complete clean-account test here.
- **Unsupported:** the client lacks a required transport or authentication capability.

## Matrix

| Client | Remote HTTP | OAuth | Custom header | Status | Setup |
| --- | --- | --- | --- | --- | --- |
| Claude Code | Yes | Yes | Yes | Documented | `claude mcp add --transport http calven https://app.calven.ai/api/mcp` |
| Codex CLI | Yes | Yes | Client dependent | Documented | `codex mcp add calven --url https://app.calven.ai/api/mcp` |
| Claude Desktop | Client dependent | Client dependent | Client dependent | Pending clean-account test | Add the URL through the client's connector settings. |
| ChatGPT | Yes | Yes | No public custom-header path | Pending clean-account test | Add the URL as a custom connector. |
| Cursor | Yes | Yes | Yes | Pending clean-account test | Add a remote MCP server named `calven`. |
| VS Code and GitHub Copilot | Yes | Yes | Yes | Pending clean-account test | Add a remote MCP server through the MCP configuration UI. |

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

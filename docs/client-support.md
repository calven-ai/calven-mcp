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

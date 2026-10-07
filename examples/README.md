# Connection examples

Most clients should use OAuth: add `https://api.calven.ai/mcp` and sign in. Use a personal MCP key only when a client cannot complete OAuth but can send custom headers. See [authentication](../docs/authentication.md).

## Client-specific bearer configs

Each file sends the key as `Authorization: Bearer <key>` without storing it in the file.

| File | Client | Where it goes | How the key is supplied |
| --- | --- | --- | --- |
| `claude-code-bearer.json` | Claude Code | `.mcp.json` at the project root | `${CALVEN_MCP_KEY}` from the environment |
| `cursor-bearer.json` | Cursor | `~/.cursor/mcp.json` or `.cursor/mcp.json` | `${env:CALVEN_MCP_KEY}` from the environment |
| `vscode-bearer.json` | VS Code and GitHub Copilot | `.vscode/mcp.json` or the user `mcp.json` (**MCP: Open User Configuration**) | VS Code prompts for the key on first start (`promptString` with `password: true`) and stores it |
| `codex-bearer.toml` | Codex | `~/.codex/config.toml` | `bearer_token_env_var = "CALVEN_MCP_KEY"` |

For Codex, the same setting can be made from the command line:

```sh
codex mcp add calven --url https://api.calven.ai/mcp --bearer-token-env-var CALVEN_MCP_KEY
```

The VS Code file uses the VS Code format (`servers` and `inputs`), which is where VS Code documents input variables. VS Code's **MCP: Add Server** flow now prefers the portable `.mcp.json` (`mcpServers`) for new servers and lists `.vscode/mcp.json` as deprecated, and it does not forward servers that need `${input:...}` values to its Agent Host. See the [VS Code MCP configuration reference](https://code.visualstudio.com/docs/agents/reference/mcp-configuration).

## Generic examples

`generic-oauth.json` and `generic-bearer.json` are illustrative. They show the shape of a configuration, not a file any one client reads as is. Their `streamable-http` transport name and `${CALVEN_MCP_KEY}` placeholder syntax vary by client: some use `http`, some need no `type`, and each has its own variable syntax. Prefer a client-specific file above, or your client's settings UI.

When translating an example, keep the endpoint and the authentication boundary.

Never replace a placeholder with a real credential in a tracked file.

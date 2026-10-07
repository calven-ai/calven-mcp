# Changelog

Notable changes to the Calven MCP server's public contract, the registry descriptor and the Agent Plugin.

## [1.1.0] - 2026-10-07

- The MCP endpoint is now `https://api.calven.ai/mcp`. The previous endpoint, `https://app.calven.ai/api/mcp`, is retired: remove the old connection, add the new URL and sign in again.
- OAuth is the only supported sign-in. Clients register with a Client ID Metadata Document; see [authentication](docs/authentication.md).
- Documented the Insights tools (`get_insights`, `get_insights_overview`, `get_insight_detail`), bringing the catalog to 14 tools, and the four server prompts.
- Setup steps for Claude, ChatGPT, Cursor, VS Code, Claude Code and Codex, with one-click install for Cursor and VS Code.
- A use-case library: 190 use cases for 19 teams in [use-cases/](use-cases/).
- Skills treat content returned by Calven as data, not instructions.
- The repository license is now MIT.

## [1.0.0] - 2026-09-19

- First release: the registry descriptor, the Agent Plugin with workspace brief, competitive brief and persona copy review skills, and documentation.

[1.1.0]: https://github.com/calven-ai/calven-mcp/pull/5
[1.0.0]: https://github.com/calven-ai/calven-mcp/commit/653dcee0c94531552e445de1ca3875840cf31e9d

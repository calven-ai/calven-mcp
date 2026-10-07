# Changelog

All notable changes to the public MCP distribution and Agent Plugin are recorded here.

## [Unreleased]

- **Breaking:** move the canonical MCP endpoint to `https://api.calven.ai/mcp`. Every client that connects to Calven must migrate.
  - Previous endpoint: `https://app.calven.ai/api/mcp`, documented in 1.0.0 and replaced in this repository by commit 52f3e79.
  - Status: retired, with no compatibility alias or redirect. As of 2026-10-07 a POST to the previous endpoint returns HTTP 405 and does not serve MCP. Clients still configured with it fail to connect.
  - Affected: every connection added with the previous URL, in any client, and Agent Plugin installs made from a copy of this repository before commit 52f3e79.
  - What to do: remove the old Calven connection, add `https://api.calven.ai/mcp`, then sign in again. For Claude Code, run `claude mcp remove calven`, then `claude mcp add --transport http calven https://api.calven.ai/mcp`, then authenticate from `/mcp`. Reinstall or update the Agent Plugin so its `mcp.json` uses the new URL.
  - OAuth: sign in again after adding the new URL. Access tokens are issued for one resource URL, and tokens issued for `https://app.calven.ai/api/mcp` are not valid for `https://api.calven.ai/mcp`.
- Add `.github/workflows/publish-registry.yml`, which publishes `server.json` to the Official MCP Registry when an `mcp-v<semver>` tag matching `server.json#version` is pushed, and document the one-time domain verification and release steps in `docs/releasing.md`. The registry does not list `ai.calven/mcp` until that setup is done and the first tag is pushed.
- Remove the MCP Registry badge until the first publish; add Cursor and VS Code one-click install links; update the Claude, ChatGPT, Claude Code and Codex setup steps, including the sign-in step.
- Remove personal MCP key (bearer token) documentation and examples. OAuth is the only documented sign-in for the hosted server.
- Document OAuth discovery, Client ID Metadata Document registration (dynamic client registration is not offered), and the requested scopes.
- Document every tool's annotations in the tool catalog.
- Add an untrusted-content rule to the skills, an untrusted-content section to data handling, and safe-use guidance and private vulnerability reporting to `SECURITY.md`; limit the connection issue form to non-security setup failures.
- Extend `validate.mjs`: client examples, endpoint URLs and install links across public files, tool counts in prose, and YAML-parsed skill frontmatter against the Agent Skills rules. Fix the stale tool count in `docs/plugin.md`.
- Pin workflow actions to commit SHAs, drop the unused `issues: write` permission, stop accepting 401/403/429 in the link check, and smoke-test both the 2025-11-25 and 2026-07-28 request shapes.
- Add `npm ci` to the local validation steps, and correct `docs/conformance.md`: the official MCP conformance framework is not yet run against the server.
- Rewrite the README for product marketers: one line for strangers, a client table with honest status, two-minute setup per client, six prompts by job, what the server can see and never does.
- Add the use-case library: 190 pages across 19 teams with workflow prompts and ad hoc questions, exported from Calven's source and linted by `validate.mjs`.
- Document the three Insights tools (`get_insights`, `get_insights_overview`, `get_insight_detail`) and the four server prompts; the catalog now lists 14 tools.
- Add the README diagram (AI tools, what Calven MCP serves, evidence sources), the social preview image and the client icons under `docs/assets/`.
- Strip `&nbsp;` entities from the README source.
- Change the repository license from Apache-2.0 to MIT.

## [1.0.0] - 2026-09-19

- Add the Official MCP Registry descriptor for the hosted Streamable HTTP server.
- Add the portable Agent Plugin manifest and remote MCP configuration.
- Add workspace brief, competitive brief, and persona copy review skills.
- Document authentication, tools, client verification, data handling, conformance, and support.

[Unreleased]: https://github.com/calven-ai/calven-mcp/commits/main
[1.0.0]: https://github.com/calven-ai/calven-mcp/commit/653dcee0c94531552e445de1ca3875840cf31e9d

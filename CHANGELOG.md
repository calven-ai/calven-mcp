# Changelog

All notable changes to the public MCP distribution and Agent Plugin are recorded here.

## [Unreleased]

- Move the canonical MCP endpoint to `https://api.calven.ai/mcp`.
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

# Conformance

Calven validates the hosted MCP surface at three layers.

## Protocol

Calven's private contract tests cover initialization, protocol negotiation, Streamable HTTP behavior, tool/resource/prompt discovery, JSON Schema dialect, error envelopes, authorization, tenant isolation, pagination, timeouts, and request limits.

The official MCP conformance suite is not run against the server yet.

## Public distribution

`npm run validate` (`scripts/validate.mjs`) checks:

- `server.json`, `plugin.json`, and `mcp.json` against the JSON Schema named in their `$schema` (skipped by `npm run validate:offline`, which needs no network);
- `server.json` names `ai.calven/mcp` and has one `streamable-http` remote; `plugin.json` names `calven` and this repository;
- the endpoint `https://api.calven.ai/mcp` in `server.json`, `mcp.json` (`streamable-http`), and `.mcp.json` (`http`);
- every `examples/**/*.json` file parses and every server under `mcpServers`, `servers`, or `mcp_servers` sets `url` (or `serverUrl`/`httpUrl`) to the endpoint; `url = "..."` lines in `examples/**/*.toml` match too;
- every `calven.ai` MCP URL outside `use-cases/` is the endpoint or one of its `.well-known` metadata URLs; the retired `app.calven.ai` endpoint may appear only in `CHANGELOG.md`;
- Cursor and VS Code one-click install links decode to a config whose `url` is the endpoint;
- `docs/tool-catalog.md` lists the 14 production tools in order, and tool counts stated in prose match it;
- each `skills/<name>/SKILL.md` has YAML frontmatter that parses, a `name` of 1–64 characters matching `^[a-z0-9]+(-[a-z0-9]+)*$` and equal to the directory, a `description` string of 1–1024 characters, an optional `compatibility` of at most 500 characters, and backticked tool names that exist in the catalog;
- each `use-cases/` page has the required sections, no internal sections, and working relative `.md` links;
- no file contains a Calven API key, and the brand is written as plain Calven.

CI also runs two workflows the local script does not:

- `links.yml` checks public links in Markdown with lychee;
- `smoke-production.yml` checks the production protected resource metadata and the anonymous `401` challenge, for both a `2025-11-25` `initialize` request and a `2026-07-28` request.

Run the checks locally as described in [CONTRIBUTING.md](../CONTRIBUTING.md). The public production smoke test uses no Calven credential. It checks only discovery metadata and the unauthenticated challenge.

## Tool and skill quality

Portable skills are evaluated separately because a valid protocol exchange does not prove that an agent selects the right tools, preserves evidence boundaries, or handles an empty result correctly.

## Reporting a mismatch

Open an issue when production discovery, a manifest, or the public tool catalog disagree. Use the private process in [SECURITY.md](../SECURITY.md) if the mismatch exposes credentials, authorization behavior, tenant data, or another security concern.

# Conformance

Calven validates the hosted MCP surface at three layers.

## Protocol

The private server repository covers initialization, protocol negotiation, Streamable HTTP behavior, tool/resource/prompt discovery, JSON Schema dialect, error envelopes, authorization, tenant isolation, pagination, timeouts, and request limits.

Those checks are Calven's own contract tests, including the tool annotations and output schemas listed in the [tool catalog](tool-catalog.md). The official MCP conformance framework is not yet run against the server. When it is, fixture-specific scenarios that expect tools and resources with fixed test names will stay separate from Calven's contract tests, because they are not product-server requirements.

## Public distribution

`npm run validate` (`scripts/validate.mjs`) checks:

- `server.json`, `plugin.json`, and `mcp.json` against the JSON Schema named in their `$schema` (skipped by `npm run validate:offline`, which needs no network);
- `server.json` names `ai.calven/mcp` and has one `streamable-http` remote; `plugin.json` names `calven` and this repository;
- the endpoint `https://api.calven.ai/mcp` in `server.json`, `mcp.json` (`streamable-http`), and `.mcp.json` (`http`);
- every `examples/**/*.json` file parses and every server under `mcpServers`, `servers`, or `mcp_servers` sets `url` (or `serverUrl`/`httpUrl`) to the endpoint; `url = "..."` lines in `examples/**/*.toml` match too;
- every `calven.ai` URL in Markdown, JSON, YAML, and TOML outside `use-cases/` that looks like an MCP endpoint (a subdomain other than `www`, with an `mcp` path segment or an `mcp.` host) is exactly `https://api.calven.ai/mcp`, `https://api.calven.ai/.well-known/oauth-protected-resource/mcp`, or `https://api.calven.ai/.well-known/oauth-authorization-server/mcp`. The website page `https://calven.ai/mcp` is not an endpoint. The retired endpoint on `app.calven.ai` may appear only in `CHANGELOG.md`;
- Cursor and VS Code one-click install links decode to a config whose `url` is the endpoint;
- `docs/tool-catalog.md` lists the 14 production tools in order, and prose that states the catalog size agrees with it: "14 tools", "N Calven tools", "14-tool", "Thirteen read tools and one action". Counts below five, quoted text, and released `CHANGELOG.md` sections are not treated as claims;
- each `skills/<name>/SKILL.md` has YAML frontmatter that parses, a `name` of 1–64 characters matching `^[a-z0-9]+(-[a-z0-9]+)*$` and equal to the directory, a `description` string of 1–1024 characters, an optional `compatibility` of at most 500 characters, and backticked tool names that exist in the catalog;
- each `use-cases/` page has the required sections, no internal sections, and working relative `.md` links;
- no file contains a `cmcp_` key pattern or a brand name other than bare Calven.

CI also runs two workflows the local script does not:

- `links.yml` checks public links in Markdown with lychee;
- `smoke-production.yml` checks the production protected resource metadata and the anonymous `401` challenge, for both a `2025-11-25` `initialize` request and a `2026-07-28` request.

Run the local checks with Node.js 22 or later:

```sh
npm ci
npm run validate
```

Use `npm run validate:offline` to skip the schema downloads.

The public production smoke test uses no Calven credential. It checks only discovery metadata and the unauthenticated challenge.

## Tool and skill quality

Calven keeps the server's protocol tests in the private implementation repository. Portable skills are evaluated separately because a valid protocol exchange does not prove that an agent selects the right tools, preserves evidence boundaries, or handles an empty result correctly.

Each public skill needs positive and negative cases before its behavior is marked verified in a client.

## Reporting a mismatch

Open an issue when production discovery, a manifest, or the public tool catalog disagree. Use the private process in [SECURITY.md](../SECURITY.md) if the mismatch exposes credentials, authorization behavior, tenant data, or another security concern.

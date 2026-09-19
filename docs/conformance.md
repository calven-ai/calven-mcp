# Conformance

Calven validates the hosted MCP surface at three layers.

## Protocol

The private server repository covers initialization, protocol negotiation, Streamable HTTP behavior, tool/resource/prompt discovery, JSON Schema dialect, error envelopes, authorization, tenant isolation, pagination, timeouts, and request limits.

Applicable generic scenarios from the official MCP conformance framework are run against the supported protocol versions. The upstream framework also contains fixture-specific scenarios that expect tools and resources with fixed test names. Those scenarios are not product-server requirements and are kept separate from Calven's own contract tests.

## Public distribution

This repository checks:

- `server.json`, `plugin.json`, and `mcp.json` structure;
- endpoint consistency across manifests, docs, examples, and skills;
- skill frontmatter and documented tool references;
- credential patterns and unsafe placeholders;
- public links;
- the production metadata and anonymous `401` challenge.

Run the local checks with:

```sh
node scripts/validate.mjs
```

The public production smoke test uses no Calven credential. It checks only discovery metadata and the unauthenticated challenge.

## Tool and skill quality

Calven keeps the server's protocol tests in the private implementation repository. Portable skills are evaluated separately because a valid protocol exchange does not prove that an agent selects the right tools, preserves evidence boundaries, or handles an empty result correctly.

Each public skill needs positive and negative cases before its behavior is marked verified in a client.

## Reporting a mismatch

Open an issue when production discovery, a manifest, or the public tool catalog disagree. Use the private process in [SECURITY.md](../SECURITY.md) if the mismatch exposes credentials, authorization behavior, tenant data, or another security concern.

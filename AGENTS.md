# Repository instructions

This repository is the public distribution surface for Calven's hosted MCP server. It does not own or contain the production server implementation.

## Sources of truth

- `server.json` is the Official MCP Registry descriptor.
- `plugin.json`, `mcp.json`, and `skills/` are the portable Agent Plugin.
- `docs/tool-catalog.md` documents the public tools exposed by production.
- `https://app.calven.ai/api/mcp` is the only production endpoint.

Keep `mcp.json`, `.mcp.json`, examples, documentation, and skills aligned with that endpoint. Run `node scripts/validate.mjs` after every change.

## Boundaries

- Never add a credential, tenant identifier, customer name, or private server source.
- Do not claim client support without a clean-account test recorded in `docs/client-support.md`.
- Do not add or rename a documented tool without verifying the production catalog.
- Skills must distinguish workspace evidence from model knowledge and must not invent missing evidence.
- Security reports belong in the private channel named in `SECURITY.md`, not public issues.

## Writing

Use the bare brand name Calven. Use `calven.ai` only when referring to the domain. Keep prose direct and specific. Avoid unsupported claims and promotional filler.

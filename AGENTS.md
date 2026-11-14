# Repository instructions

This repository is the public distribution surface for Calven's hosted MCP server. It does not own or contain the production server implementation.

## Sources of truth

- `server.json` is the Official MCP Registry descriptor.
- `plugin.json`, `mcp.json`, and `skills/` are the portable Agent Plugin.
- `docs/tool-catalog.md` documents the public tools exposed by production.
- `use-cases/` is generated from Calven's source and replaced whole on every sync. Do not hand-edit it.
- `docs/assets/mcp-diagram.png` and `docs/assets/hero.png` are rendered from Calven's brand templates; re-render rather than edit. After re-rendering any PNG, run `python3 scripts/compress-images.py <files>`: image weight lands on users' disks when a client installs the repository root.
- `https://api.calven.ai/mcp` is the only production endpoint.

Keep `mcp.json`, `.mcp.json`, examples, documentation, and skills aligned with that endpoint. Run `npm ci --prefix scripts` once, then `npm run validate --prefix scripts` after every change.

`plugins/calven/` is the generated Claude directory bundle. Edit its root sources, then run `npm run build:claude --prefix scripts`; never edit the generated files directly. The Claude marketplace entry points to that folder.

## Boundaries

- Never add a credential, tenant identifier, customer name, or private server source.
- Record a clean-account test in `docs/client-support.md` for every listed client.
- Do not add or rename a documented tool without verifying the production catalog.
- Skills must distinguish workspace evidence from model knowledge and must not invent missing evidence.
- Security reports belong in the private channel named in `SECURITY.md`, not public issues.

## Writing

Use the bare brand name Calven. Use `calven.ai` only when referring to the domain. Keep prose direct and specific. Avoid unsupported claims and promotional filler.

Terminology: "sign in" (not "authenticate"); "Client ID Metadata Document (CIMD)" on first use, then CIMD; "dynamic client registration (DCR)"; "battlecard".

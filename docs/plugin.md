# Agent Plugin

The Calven Agent Plugin packages the hosted MCP connection with reusable PMM workflows.

## Portable package

| Path | Purpose |
| --- | --- |
| `plugin.json` | Agent Plugins 1.0 identity and metadata |
| `mcp.json` | Portable remote MCP connection |
| `skills/workspace-brief/` | Sourced workspace orientation |
| `skills/competitive-brief/` | Evidence-bound competitive analysis |
| `skills/persona-copy-review/` | Persona review task and findings workflow |

The plugin adds workflow instructions. It does not change authentication, permissions, tools, or tenant boundaries.

## Direct MCP compared with the plugin

| Direct MCP | Agent Plugin |
| --- | --- |
| Connects the 11 Calven tools | Connects the same 11 tools |
| Uses server instructions and prompts | Adds three portable workflow skills |
| Works in compatible remote MCP clients | Requires an Agent Plugins 1.0 compatible client |

Use direct MCP when the client does not implement Agent Plugins. Use the plugin when the client can load the package and its skills.

## Source boundaries

The public `skills/` directory is the source of truth for portable workflow instructions. The private Calven product repository is the source of truth for server behavior, schemas, resources, prompts, and server-level instructions.

Public skills may reference documented tools. They must not copy private server prompts. `node scripts/validate.mjs` fails when a skill names a tool outside the public catalog.

## Versioning

Plugin releases use `plugin-v<semver>` tags. Registry metadata releases use `mcp-v<semver>` tags. See [versioning](versioning.md).

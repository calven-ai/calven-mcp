# Versioning

The hosted server, Official MCP Registry descriptor, and Agent Plugin have related but distinct release trains.

## Registry metadata

- Version field: `server.json#version`
- Tag format: `mcp-v<semver>`
- Increment when published registry metadata or the documented remote contract changes.

## Agent Plugin

- Version field: `plugin.json#version`
- Tag format: `plugin-v<semver>`
- Increment when plugin metadata or a packaged workflow skill changes.

## Compatibility

- Patch: copy, links, examples, or workflow guidance that does not change the expected tool contract.
- Minor: additive tool documentation, a new optional skill, or another compatible public capability.
- Major: a removed or renamed tool, a required authentication change, a skill contract change that breaks existing use, or a new endpoint that requires migration.

The production MCP implementation can be deployed without a repository release when its public contract is unchanged. A public contract change must update this repository before or with the deployment.

## Deprecation

Document a deprecated endpoint, tool, argument, or workflow before removal. Include the replacement, the affected clients, and the earliest removal date. Keep compatibility aliases where they are safe and do not create ambiguous behavior.

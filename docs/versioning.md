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

## Publishing to the MCP Registry

Registry versions are immutable. Publishing is manual and runs only from `main`.

1. In a pull request, set `server.json#version` and `plugin.json#version` to the same new version. The publish workflow refuses mismatched versions. It also refuses to publish a version already in the registry; a dry run only warns, so it can still test sign-in.
2. Merge the pull request to `main`.
3. In the Actions tab, run **Publish to MCP Registry** on `main`. Leave `dry_run` checked first: it validates, signs in to Azure and the registry, and stops before publishing. Run it again with `dry_run` unchecked to publish.
4. Approve the run in the `mcp-registry` environment when prompted.

The registry authenticates `ai.calven/mcp` with DNS auth on `calven.ai`. The TXT record holds the Ed25519 public key (`v=MCPv1; k=ed25519; p=<base64 public key>`). The matching private key is a PEM in Azure Key Vault `calven-internal01-kv` (resource group `calven-internal01-rg`), secret `mcp-registry-signing-key`. It is the only copy. The workflow reads it through GitHub OIDC and deletes it from the runner after login.

To rotate the key:

1. Generate a new keypair with OpenSSL 3: `openssl genpkey -algorithm ed25519 -out key.pem`.
2. Get the base64 public key: `openssl pkey -in key.pem -pubout -outform DER | tail -c 32 | base64`.
3. Replace the `calven.ai` TXT record with `v=MCPv1; k=ed25519; p=<new base64 public key>` and wait for it to propagate.
4. Store the new PEM as a new version of the `mcp-registry-signing-key` secret, then delete the local `key.pem`.
5. Run the workflow with `dry_run` checked to confirm the new key signs in.

## Compatibility

- Patch: copy, links, examples, or workflow guidance that does not change the expected tool contract.
- Minor: additive tool documentation, a new optional skill, or another compatible public capability.
- Major: a removed or renamed tool, a required authentication change, a skill contract change that breaks existing use, or a new endpoint that requires migration.

The production MCP implementation can be deployed without a repository release when its public contract is unchanged. A public contract change must update this repository before or with the deployment.

## Deprecation

Document a deprecated endpoint, tool, argument, or workflow before removal. Include the replacement, the affected clients, and the earliest removal date. Keep compatibility aliases where they are safe and do not create ambiguous behavior.

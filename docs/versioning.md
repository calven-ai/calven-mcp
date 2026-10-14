# Versioning

The hosted server, Official MCP Registry descriptor, and Agent Plugin are versioned separately.

## Registry metadata

- Version field: `server.json#version`
- Tag format: `mcp-v<semver>`
- Increment when published registry metadata or the documented remote contract changes.

## Agent Plugin

- Version field: `plugin.json#version`
- Tag format: `plugin-v<semver>`
- Increment when plugin metadata or a packaged workflow skill changes.

## Publishing to the MCP Registry

Registry versions are immutable, so publishing is a manual step after the version bump is on `main`.

The registry authenticates `ai.calven/mcp` with DNS auth on `calven.ai`. The TXT record holds the Ed25519 public key (`v=MCPv1; k=ed25519; p=<base64 public key>`). The matching private key is a PEM in Azure Key Vault `calven-internal01-kv` (resource group `calven-internal01-rg`), secret `mcp-registry-signing-key`. It is the only copy.

You need Azure access to read that secret, OpenSSL 3, and `mcp-publisher` (`brew install mcp-publisher`). The `openssl` that ships with macOS is LibreSSL and cannot read Ed25519 keys; use `/opt/homebrew/opt/openssl@3/bin/openssl`.

To publish:

1. Bump `server.json#version` in a pull request and merge it to `main`.
2. Check the version is not already published. This should return `404`:

   ```bash
   curl -s -o /dev/null -w '%{http_code}\n' "https://registry.modelcontextprotocol.io/v0/servers/ai.calven%2Fmcp/versions/$(jq -r .version server.json)"
   ```

3. From an up-to-date `main` checkout, sign in to Azure (`az login`) and read the key straight into a shell variable, so the PEM never touches disk:

   ```bash
   HEX=$(az keyvault secret show --vault-name calven-internal01-kv --name mcp-registry-signing-key --query value -o tsv | /opt/homebrew/opt/openssl@3/bin/openssl pkey -noout -text | grep -A3 'priv:' | tail -n +2 | tr -d ' :\n')
   ```

4. Sign in to the registry, then clear the variable:

   ```bash
   mcp-publisher login dns --domain calven.ai --private-key "$HEX"; unset HEX
   ```

5. Run `mcp-publisher validate`, then `mcp-publisher publish`.
6. Run `mcp-publisher logout`.

To rotate the key:

1. Generate a new keypair with OpenSSL 3: `openssl genpkey -algorithm ed25519 -out key.pem`.
2. Get the base64 public key: `openssl pkey -in key.pem -pubout -outform DER | tail -c 32 | base64`.
3. Replace the `calven.ai` TXT record with `v=MCPv1; k=ed25519; p=<new base64 public key>` and wait for it to propagate.
4. Store the new PEM as a new version of the `mcp-registry-signing-key` secret, then delete the local `key.pem`.
5. Run steps 3 and 4 of the publish flow to confirm the new key signs in, then `mcp-publisher logout`.

## Compatibility

- Patch: copy, links, examples, or workflow guidance that does not change the expected tool contract.
- Minor: additive tool documentation, a new optional skill, or another compatible public capability.
- Major: a removed or renamed tool, a required authentication change, a skill contract change that breaks existing use, or a new endpoint that requires migration.

1.1.0 changed the endpoint and sign-in in a minor version because no clients were using 1.0.0.

The production MCP implementation can be deployed without a repository release when its public contract is unchanged. A public contract change must update this repository before or with the deployment.

## Deprecation

Document a deprecated endpoint, tool, argument, or workflow before removal. Include the replacement, the affected clients, and the earliest removal date. Keep compatibility aliases where they are safe and do not create ambiguous behavior.

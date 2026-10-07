# Releasing to the Official MCP Registry

`server.json` is published to the [Official MCP Registry](https://registry.modelcontextprotocol.io) as `ai.calven/mcp` by [`.github/workflows/publish-registry.yml`](../.github/workflows/publish-registry.yml) when an `mcp-v<semver>` tag is pushed.

> **Status (2026-10-07): not published yet.** The `calven.ai` domain proof, the `registry` environment and its secret, and the first `mcp-v*` tag do not exist. After the first publish, restore the MCP Registry badge in the README.

## What the workflow does

1. Fails unless it runs from an `mcp-v<semver>` tag whose version equals `server.json#version` and whose commit is on `main`.
2. Runs `npm ci` and `npm run validate`.
3. Downloads a pinned `mcp-publisher` release and checks its SHA-256 before running it.
4. Runs `mcp-publisher validate`, `mcp-publisher login dns --domain calven.ai`, and `mcp-publisher publish`.
5. Confirms the registry returns the new version, then logs out.

The job uses `permissions: contents: read` and reads the signing key only from the `registry` environment.

## One-time setup

### 1. Generate the signing key

Use OpenSSL 3. The `openssl` that ships with macOS is LibreSSL and fails with `Algorithm Ed25519 not found`; install `openssl@3` with Homebrew and call it by path. Run this on a trusted machine, outside any repository checkout.

```sh
OPENSSL=/opt/homebrew/opt/openssl@3/bin/openssl   # Intel Mac: /usr/local/opt/openssl@3/bin/openssl; Linux: openssl

"$OPENSSL" genpkey -algorithm Ed25519 -out calven-mcp-registry.pem

# Public key for the proof record
PUBLIC_KEY="$("$OPENSSL" pkey -in calven-mcp-registry.pem -pubout -outform DER | tail -c 32 | base64)"
echo "v=MCPv1; k=ed25519; p=${PUBLIC_KEY}"

# Private key in the format mcp-publisher expects: 64 hex characters
"$OPENSSL" pkey -in calven-mcp-registry.pem -noout -text | grep -A3 'priv:' | tail -n +2 | tr -d ' :\n'; echo
```

Never commit the `.pem` file or the hex value. Keep them in Calven's secret store or delete them after step 3. A lost key is replaced by generating a new pair and repeating steps 2 and 3.

### 2. Prove control of calven.ai

Use one of these. The workflow uses DNS.

- **DNS (default).** Add a TXT record on the apex `calven.ai`, not on a subdomain such as `_mcp-registry.calven.ai`. Keep the existing TXT records and add this one:

  ```text
  calven.ai.  IN  TXT  "v=MCPv1; k=ed25519; p=<PUBLIC_KEY>"
  ```

  Check propagation with `dig +short TXT calven.ai`.

- **HTTP.** Serve the same single line, `v=MCPv1; k=ed25519; p=<PUBLIC_KEY>`, at `https://calven.ai/.well-known/mcp-registry-auth`. If you choose this, change `login dns` to `login http` in the workflow.

When you rotate the key, remove the old record. The registry tries a stale record and verification fails.

### 3. Create the protected environment and secret

In the GitHub repository settings:

1. **Environments → New environment** named `registry`.
2. **Deployment branches and tags → Selected branches and tags → Add rule**, type **Tag**, pattern `mcp-v*`. No branch may deploy to this environment.
3. Add **Required reviewers** (recommended) so each publish waits for a maintainer's approval.
4. **Add environment secret** `MCP_REGISTRY_PRIVATE_KEY` with the 64-character hex private key from step 1. Do not add it as a repository or organization secret.

### 4. Restrict who can push release tags (recommended)

**Settings → Rules → Rulesets → New tag ruleset** targeting `mcp-v*`. Enable **Restrict creations**, **Restrict updates**, and **Restrict deletions**, and add the maintainers who release to the bypass list.

## Release procedure

1. In a pull request, set `server.json#version` according to [versioning.md](versioning.md) and add a `CHANGELOG.md` section for the new version. Merge it to `main`.
2. Tag the merged commit and push the tag:

   ```sh
   git switch main
   git pull --ff-only
   VERSION="$(jq -r .version server.json)"
   git tag -a "mcp-v${VERSION}" -m "Registry metadata ${VERSION}"
   git push origin "mcp-v${VERSION}"
   ```

3. Approve the `registry` deployment in the Actions run if reviewers are required.
4. Confirm the published version:

   ```sh
   curl -s 'https://registry.modelcontextprotocol.io/v0.1/servers/ai.calven%2Fmcp/versions/latest' | jq '.server.version'
   ```

The registry accepts each version once. To change published metadata, release a new version. To retry a failed run without a new tag, open **Actions → Publish to MCP Registry → Run workflow** and choose the tag under **Use workflow from**. A run from a branch fails the tag check. If the version is already published with the same metadata, the run skips publishing and only confirms the listing.

### First release

The first tag is `mcp-v1.1.0`, matching `server.json#version`. Version 1.0.0 shipped the earlier endpoint and was never published to the registry.

## Updating mcp-publisher

Dependabot does not update the pinned binary. To upgrade, take the new release's `mcp-publisher_linux_amd64.tar.gz` line from its `registry_<version>_checksums.txt` and change `MCP_PUBLISHER_VERSION` and `MCP_PUBLISHER_SHA256` together in the workflow. If a publish fails with `invalid audience`, the pinned binary is too old for the registry.

Registry documentation: [authentication](https://github.com/modelcontextprotocol/registry/blob/main/docs/modelcontextprotocol-io/authentication.mdx), [GitHub Actions](https://github.com/modelcontextprotocol/registry/blob/main/docs/modelcontextprotocol-io/github-actions.mdx).

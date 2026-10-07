# Authentication

Calven supports two authentication paths for the hosted MCP server.

## OAuth 2.1

Use OAuth for clients that support authorization discovery for remote MCP servers.

```text
Resource: https://api.calven.ai/mcp
Transport: Streamable HTTP
PKCE method: S256
```

The server publishes OAuth Protected Resource Metadata and points clients to Calven's authorization server. The authorization and token requests carry the MCP resource so the resulting access token can be checked for the intended audience.

OAuth access remains subject to the user's Calven membership, role, workspace permissions, and the scopes granted to the client.

### Discovery

| Step | URL |
| --- | --- |
| Unauthenticated request | `POST https://api.calven.ai/mcp` returns `401` with `WWW-Authenticate: Bearer ... resource_metadata="https://api.calven.ai/.well-known/oauth-protected-resource/mcp"` |
| Protected resource metadata | `https://api.calven.ai/.well-known/oauth-protected-resource/mcp` |
| Authorization server | `https://clerk.calven.ai` |
| Authorization server metadata | `https://clerk.calven.ai/.well-known/oauth-authorization-server` |

The authorization server advertises the `authorization_code` and `refresh_token` grants, PKCE with `S256`, and the `none` token endpoint auth method for public clients.

### Client registration

Clients register with a [Client ID Metadata Document](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization/client-registration) (CIMD): the client uses an HTTPS URL that hosts its metadata as its `client_id`, and the authorization server fetches that document. The authorization server metadata reports `client_id_metadata_document_supported: true`. The MCP authorization specification (2026-07-28) prefers CIMD and deprecates Dynamic Client Registration (DCR).

Calven does not offer DCR. The authorization server metadata has no `registration_endpoint`. A client that can only register with DCR cannot complete OAuth with Calven; use a [personal MCP key](#personal-mcp-key) with that client instead.

Redirect URIs belong to the client and are declared in its own metadata document. Users do not register a redirect URI with Calven.

### Scopes

The protected resource metadata lists these scopes. Clients that follow the MCP scope-selection rules request them during sign-in.

| Scope | Purpose |
| --- | --- |
| `profile`, `email` | Identify the signed-in user. |
| `offline_access` | Request a refresh token so the client can renew access without a new sign-in. |
| `user:org:read` | Read the user's organization membership. |

Scopes identify the user. The user's Calven role and workspace permissions decide which workspace data each tool can return.

## Personal MCP key

Use a personal key when a client supports Streamable HTTP and custom headers but cannot complete OAuth.

1. Sign in to Calven.
2. Open [Settings → API & MCP](https://app.calven.ai/settings/api).
3. Generate a key and copy it immediately. The complete value is shown once.
4. Store it in the client's secret store or an environment variable.
5. Send it as `Authorization: Bearer ${CALVEN_MCP_KEY}`.

A new key replaces the previous key for that user. Keys do not expire: a key stops working when you revoke or regenerate it, or when the user loses access to the workspace. Never put the value in a repository, issue, log, screenshot, or shared configuration file.

## Choosing a path

| Client capability | Use |
| --- | --- |
| Remote MCP with OAuth discovery and Client ID Metadata Documents | OAuth |
| Remote MCP with OAuth through Dynamic Client Registration only | Personal MCP key, if the client supports custom headers |
| Remote MCP with custom headers | Personal MCP key |
| Local stdio only | A trusted local HTTP-to-stdio bridge, if the client supports one |
| No OAuth and no custom headers | Not compatible with the hosted server |

## Troubleshooting authorization

- A `401` response means credentials are missing, invalid, expired, revoked, or issued for another resource.
- A `403 insufficient_scope` response means the credential is valid but lacks the required scope.
- A successful sign-in does not override Calven workspace permissions.
- If a client caches an earlier OAuth registration or token, remove the connection and authenticate again.
- If a client reports that registration is not supported, or that no registration endpoint was found, it needs Dynamic Client Registration, which Calven does not offer. Use a client or client version that supports Client ID Metadata Documents, or connect with a personal MCP key.

Never post an access token when asking for support. Include the client name and version, the HTTP status, and redacted response headers instead.

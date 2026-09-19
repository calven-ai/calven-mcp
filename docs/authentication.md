# Authentication

Calven supports two authentication paths for the hosted MCP server.

## OAuth 2.1

Use OAuth for clients that support authorization discovery for remote MCP servers.

```text
Resource: https://app.calven.ai/api/mcp
Transport: Streamable HTTP
PKCE method: S256
```

The server publishes OAuth Protected Resource Metadata and points clients to Calven's authorization server. The authorization and token requests carry the MCP resource so the resulting access token can be checked for the intended audience.

OAuth access remains subject to the user's Calven membership, role, workspace permissions, and the scopes granted to the client.

## Personal MCP key

Use a personal key when a client supports Streamable HTTP and custom headers but cannot complete OAuth.

1. Sign in to Calven.
2. Open [Settings → API & MCP](https://app.calven.ai/settings/api).
3. Generate a key and copy it immediately. The complete value is shown once.
4. Store it in the client's secret store or an environment variable.
5. Send it as `Authorization: Bearer ${CALVEN_MCP_KEY}`.

A new key replaces the previous key for that user. Revoking the key stops future use. Never put the value in a repository, issue, log, screenshot, or shared configuration file.

## Choosing a path

| Client capability | Use |
| --- | --- |
| Remote MCP with OAuth discovery | OAuth |
| Remote MCP with custom headers | Personal MCP key |
| Local stdio only | A trusted local HTTP-to-stdio bridge, if the client supports one |
| No OAuth and no custom headers | Not compatible with the hosted server |

## Troubleshooting authorization

- A `401` response means credentials are missing, invalid, expired, revoked, or issued for another resource.
- A `403 insufficient_scope` response means the credential is valid but lacks the required scope.
- A successful sign-in does not override Calven workspace permissions.
- If a client caches an earlier OAuth registration or token, remove the connection and authenticate again.

Never post an access token when asking for support. Include the client name and version, the HTTP status, and redacted response headers instead.

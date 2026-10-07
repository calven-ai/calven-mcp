# Troubleshooting

## The client cannot connect

Confirm the URL is exactly:

```text
https://api.calven.ai/mcp
```

The hosted server uses Streamable HTTP. A stdio-only client needs a trusted bridge or another client.

## The browser does not open for sign-in

The client may not implement remote MCP OAuth discovery, may be running without browser access, or may have cached a failed registration. Remove the connection and add it again. If the client supports custom headers, use a personal MCP key.

Some clients register the server without signing in. Start the sign-in yourself:

- Claude Code: `claude mcp login calven`, or `/mcp` in a session and select `calven`. Add `--no-browser` over SSH to get a URL to open locally.
- Codex: `codex mcp login calven`. It also accepts `--no-browser`.

Calven's authorization server supports Client ID Metadata Documents and does not offer dynamic client registration. If a client asks how to register, choose the metadata-document option (in Claude, **Use Claude's published identity**), not automatic registration.

## A personal key fails

- Confirm the header is `Authorization: Bearer <key>`.
- Confirm the key begins with `cmcp_`.
- Confirm the placeholder uses your client's variable syntax: `${CALVEN_MCP_KEY}` in Claude Code, `${env:CALVEN_MCP_KEY}` in Cursor, `${input:...}` in VS Code. An unexpanded placeholder is sent as literal text and fails with `401`. See the [client-specific examples](../examples/README.md).
- Generate a replacement in [Settings → API & MCP](https://app.calven.ai/settings/api). This revokes the earlier key.
- Do not paste the key into an issue or support message.

## A tool or record is missing

The user's workspace role, product scope, database settings, or connected data may limit the surface. Start with `get_workspace_overview`, then use `list_products` before making a product-scoped request.

An empty result is not a signal to guess. Report the gap and ask whether the user wants a different scope.

## A review does not return findings immediately

`review_against_personas` is asynchronous. It returns a task ID. Poll `get_task` until the status is complete or failed.

## What to include in a public issue

- client name and exact version;
- operating system;
- authentication path, without the credential;
- the stage that failed;
- redacted error text and response headers;
- whether a fresh connection changes the behavior.

Use [SECURITY.md](../SECURITY.md) instead of a public issue if the report contains private data or concerns authentication, authorization, or tenant isolation.

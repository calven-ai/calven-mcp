# Troubleshooting

## The client cannot connect

Confirm the URL is exactly:

```text
https://api.calven.ai/mcp
```

The hosted server uses Streamable HTTP. A stdio-only client needs a trusted bridge or another client.

## The browser does not open for sign-in

The client may not implement remote MCP OAuth discovery, may be running without browser access, or may have cached a failed registration. Remove the connection and add it again.

Some clients register the server without signing in. Start the sign-in yourself:

- Claude Code: `claude mcp login calven`, or `/mcp` in a session and select `calven`. Add `--no-browser` over SSH to get a URL to open locally.
- Codex: `codex mcp login calven`. It also accepts `--no-browser`.

Calven's authorization server supports Client ID Metadata Documents (CIMD) and does not offer dynamic client registration (DCR). If a client asks how to register, choose its CIMD option (in Claude, **Use Claude's published identity**), not DCR.

## You connected before October 2026

Remove any connection to the old `app.calven.ai/api/mcp` endpoint, or one that uses a personal key, then add `https://api.calven.ai/mcp` and sign in.

## A tool or record is missing

The user's workspace role, product scope, database settings, or connected data may limit what you can see. Start with `get_workspace_overview`, then use `list_products` before making a product-scoped request.

## A review does not return findings immediately

`review_against_personas` is asynchronous. It returns a task ID. Poll `get_task` while the status is `working`. `input_required` means the task is waiting on someone in the Calven app.

## What to include in a public issue

- client name and exact version;
- operating system;
- the stage that failed;
- redacted error text and response headers;
- whether a fresh connection changes the behavior.

Use [SECURITY.md](../SECURITY.md) instead of a public issue if the report contains private data or concerns authentication, authorization, or tenant isolation.

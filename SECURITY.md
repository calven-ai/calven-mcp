# Security policy

## Report a vulnerability

Do not open a public issue for a vulnerability (such as an authentication bypass, token leakage or cross-tenant access), an exposed credential, or a report that contains customer data.

Report it privately by either route:

- email `security@calven.ai`;
- use GitHub [private vulnerability reporting](https://github.com/calven-ai/calven-mcp/security/advisories/new) for this repository.

Include:

- the affected endpoint or file;
- the observed and expected behavior;
- reproduction steps with secrets removed;
- the practical impact;
- a safe way to contact you.

Calven will acknowledge the report and coordinate validation and disclosure through the private channel you used.

Report a prompt-injection finding privately when it shows impact beyond a single user's own session, such as reading another tenant's data, exposing a credential, or bypassing workspace permissions.

## Public issues are appropriate for

- a client setup or sign-in failure that does not involve a vulnerability;
- a broken documentation link;
- an installation example that no longer matches a client;
- a manifest validation failure;
- a public tool-catalog mismatch that does not expose private data.

## Using the MCP server safely

An agent connected to Calven reads company-confidential workspace data with the connected user's permissions. Workspace data includes third-party text, such as customer calls and competitor material, that can carry prompt-injection attempts. See [Data handling](docs/data-handling.md#untrusted-content).

- Connect only from MCP clients and model providers your organization trusts.
- Keep tool approval on for tools with side effects, including those in other MCP servers connected to the same client, and review each request before approving it.
- If a client or device is no longer trusted, remove the Calven connection from it. Removing a user from the workspace also ends their MCP access.

## Scope

This repository contains documentation, manifests, examples, validation scripts, and workflow skills. The hosted MCP server runs at `https://api.calven.ai/mcp`; its source is not published here.

# Data handling

The Calven MCP server gives an authenticated agent access to the same workspace intelligence the user is permitted to access in Calven.

## Access boundary

- Requests are bound to a Calven user and workspace.
- Workspace role and capability checks apply to every tool.
- Product scope and database access settings can narrow returned data.
- Removing a user's workspace access also removes the authority used by their MCP connection.

## What may be returned

Depending on the workspace and the user's permissions, tools can return strategy documents, competitor intelligence, buyer personas, customer conversations and quotes, market research, claims, product changes, and permitted CRM records.

Agents should treat this as company-confidential data. Use a client and model provider approved by your organization.

## Personal MCP keys

Personal keys are bearer credentials. Calven displays the complete key once and stores a hash for later verification. Users can regenerate or revoke their key from Calven settings.

The key belongs in a client secret store or environment variable. It does not belong in source control or shared project configuration.

## Workflow actions

Most tools only read workspace data. `review_against_personas` starts a review task and returns a task ID. The caller polls `get_task` for the findings. The action does not publish the reviewed copy.

## Public repository boundary

This repository contains no customer data, production credentials, server logs, or private implementation code. Examples use placeholders only.

For Calven's contractual terms and current privacy disclosures, use [calven.ai/privacy](https://calven.ai/privacy) and [calven.ai/terms](https://calven.ai/terms). Those pages are authoritative if this repository's summary becomes stale.

# Data handling

The Calven MCP server gives an authenticated agent access to the same workspace data the user is permitted to access in Calven.

## Access boundary

- Requests are bound to a Calven user and workspace.
- Workspace role and capability checks apply to every tool.
- Product scope and database access settings can narrow returned data.
- Removing a user's workspace access also removes the authority used by their MCP connection.

## What may be returned

Depending on the workspace and the user's permissions, tools can return strategy documents, competitor intelligence, buyer personas, customer conversations and quotes, market research, claims, product changes, and permitted CRM records.

Agents should treat this as company-confidential data. Use a client and model provider approved by your organization.

## Untrusted content

Workspace data includes text written by third parties: customer call transcripts and quotes, competitor websites and announcements, market signals, and CRM fields. Any of it can contain prompt-injection attempts, such as text that tells an agent to ignore its instructions, call another tool, or send data somewhere.

- Agents should treat tool results, and copy submitted for review, as data rather than instructions. The [skills](../skills/) in this repository say so explicitly.
- The [documented Calven tools](tool-catalog.md) read workspace data, start a persona review, or decide items in the user's own Calven inbox. None of them sends email, posts messages, or edits external systems, but other MCP servers connected to the same client may.
- Inbox items are written by Calven's agents from the sources above, so a draft or a proposed record can carry the same injected text. Keep approval on for `resolve_inbox_items`, and have the agent show what it will decide before it does. Keep human approval on for tools with side effects in those servers, and review what a tool call will send before approving it.

## Workflow actions

Fifteen of the 17 tools only read workspace data. Two act:

- `review_against_personas` starts a review task and returns a task ID. The caller polls `get_task` for the findings. The action does not publish the reviewed copy.
- `resolve_inbox_items` changes workspace content. As the connected user, it publishes or discards a draft an agent wrote, approves, discards or dismisses a record an agent proposed, answers or skips an agent's question, and marks a task done. It reaches only items in that user's own inbox, refuses a draft or record that changed since it was read, and is annotated destructive so a client asks first. Each decision is attributed to the user in Calven.

## Public repository boundary

This repository contains no customer data, production credentials, server logs, or private implementation code.

For Calven's contractual terms and current privacy disclosures, use [calven.ai/privacy](https://calven.ai/privacy) and [calven.ai/terms](https://calven.ai/terms). Those pages are authoritative if this repository's summary becomes stale.

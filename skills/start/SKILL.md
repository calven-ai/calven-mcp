---
name: start
description: "Checks the Calven connection and shows what the GTM workspace holds, with three first prompts built from the company's own competitors, personas and deals. Run it after installing the plugin or when Calven tools seem missing."
disable-model-invocation: true
---

# Start with Calven

Check that Calven is connected, then show the user what their workspace holds and what to ask first.

1. Call `get_workspace_overview`.
   - If the call fails because the Calven tools are missing, or with a sign-in or `401` error, stop and tell the user how to sign in, in the client they are using:
     - Claude Code: run `/mcp`, select `calven` and sign in to Calven in the browser.
     - Claude (claude.ai or desktop): Customize, then Connectors, then Connect next to Calven.
     - ChatGPT: open the Calven plugin and sign in when it asks.
     - Cursor: open Cursor Settings, find `calven` in the MCP section and sign in.
     - Any other client: reconnect the Calven MCP server in its settings and sign in.
   Then ask them to run this again. They need a Calven workspace: https://app.calven.ai/sign-up
2. Report in a few lines:
   - the products, or that it is a single-product workspace;
   - which strategy documents are published (positioning, messaging, ICP, product brief) and which are missing;
   - the populated record kinds with their counts, largest first, and the empty ones in one line;
   - any kind marked restricted: the user's role cannot read it; that is a permission, not missing data.
3. Suggest exactly three first prompts the user can paste, each built from what is populated. Name real competitors, personas or products from the workspace only after reading them with one `list_records` call for that kind. Prefer, in order:
   - a competitor question, if competitors exist (for example how we win against the named competitor);
   - a persona or customer-voice question, if personas or quotes exist;
   - a win/loss or pipeline question, if deals or surveyed deals exist; otherwise a claim check of a draft against the product brief.
4. If the workspace is empty or nearly empty, say so plainly and point the user to the Calven app to add sources (documents, call notes, CRM) before asking questions. Do not demonstrate with invented data.

Mention the plugin's workflows in one line at the end: `/calven:deal-prep`, `/calven:claim-check`, `/calven:competitive-brief`, `/calven:persona-copy-review`, `/calven:workspace-brief` and `/calven:win-loss-review`.

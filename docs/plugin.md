# Plugin

The Calven plugin packages the hosted MCP connection with workflows that turn Calven evidence into finished work. It is one package with three client manifests that share the same skills and the same server.

## Install

| Client | How |
| --- | --- |
| Claude Code | `claude plugin marketplace add calven-ai/calven-mcp`, then `claude plugin install calven@calven`. Run `/mcp`, select `calven` and sign in |
| Cursor | Install from the Cursor Marketplace once listed. Until then, add the server with the README's Cursor button |
| Agent Plugins clients | Point the client at this repository; it reads `plugin.json`, `mcp.json` and `skills/` |

After installing, run `/calven:start` in Claude Code. It checks the connection, reports what your workspace holds and suggests three first prompts built from it.

## Contents

| Path | Type | Purpose |
| --- | --- | --- |
| `skills/battlecard/` | Skill | Sourced battlecard against a named competitor |
| `skills/deal-prep/` | Skill | One-page, sourced call brief for one deal |
| `skills/quality-review/` | Skill | An asset reviewed before it ships: claims, on-message fit, drift after product changes, persona review |
| `skills/persona-copy-review/` | Skill | Persona review task and findings |
| `skills/on-message-draft/` | Skill | Copy from approved messaging, accuracy-checked and persona-reviewed |
| `skills/customer-evidence/` | Skill | Verbatim quotes, themes and proof points on a topic |
| `skills/icp-check/` | Skill | Accounts checked against the approved ICP |
| `skills/icp-pipeline-review/` | Skill | Live ICP pipeline dashboard (`/calven:icp-pipeline-review [period]`) |
| `skills/win-loss-review/` | Skill | Live monthly or quarterly win/loss dashboard (`/calven:win-loss-review [period]`) |
| `skills/market-research/` | Skill | Market briefing: trends, opportunities, verticals and signals |
| `skills/product-intelligence/` | Skill | Product changes and the published assets they left stale |
| `skills/gtm-overview/` | Skill | Sourced summary of strategy and evidence |
| `skills/start/` | Skill, typed only | Connection check and first prompts (`/calven:start`) |
| `agents/gtm-researcher.md` | Subagent | Read-only evidence gathering across several Calven sources |
| `rules/use-calven.mdc` | Cursor rule | Sends company facts to Calven instead of model memory |
| `assets/` | Images | Plugin icon and listing images |

Skills load on their own when a request matches and can also be typed as `/calven:<name>`. `start` sets `disable-model-invocation`, so it runs only when typed. Everything is a skill rather than a legacy command, the format Claude Code recommends and the only one Agent Plugins defines. `icp-pipeline-review` and `win-loss-review` deliver a live dashboard that reads Calven each time it opens, through each viewer's own sign-in: an artifact that calls the Calven connector in Claude, a workspace-private Site in ChatGPT, and the conversation in other clients. A Claude artifact can call only claude.ai connectors, so in Claude Code the page is live only when Calven is also connected on claude.ai; otherwise it is published as a dated snapshot. The subagent keeps large tool results out of the main conversation. Its tool list allows only the 13 Calven read tools, so it cannot start a persona review, write files, run commands or use other connected services.

The plugin adds workflow instructions. It does not change authentication, permissions, tools or tenant boundaries. It ships no hooks, no executables and no package dependencies, so nothing runs or installs on your machine.

## Formats

| Format | Manifest | MCP config | Components |
| --- | --- | --- | --- |
| Claude Code | `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json` | `.mcp.json` (`http`) | skills, agents |
| Cursor | `.cursor-plugin/plugin.json` | `.mcp.json` | skills, agents, rules |
| Agent Plugins 1.0 | `plugin.json` | `mcp.json` (`streamable-http`) | skills |
| ChatGPT and Codex | `plugin.json`, `extensions.com.openai` (listing fields, onboarding skill `start`) | `mcp.json` | skills |
| Official MCP Registry | `server.json` | `remotes[]` | none |

The Agent Plugins package standardizes skills and the MCP connection only. Clients that implement it can import the root package; the subagent, the Cursor rule, typed-only invocation and how a skill is invoked depend on the client, and the client-specific manifests stay available. Agent Plugins requires the root `mcp.json` name and its portable transport vocabulary; Claude Code and Cursor read `.mcp.json`. All three point at the same endpoint, and `npm run validate --prefix scripts` fails if they drift, if the manifests disagree on name or version, or if a listed icon is missing. CI also runs `claude plugin validate --strict`.

`.claude-plugin/plugin.json` carries the fields Anthropic's directory reads for the listing: `icon`, `documentationUrl`, `supportUrl`, `privacyPolicyUrl` and `termsOfServiceUrl`.

## Evals

`evals/` holds plugin eval cases for `claude plugin eval`. They run against a mocked Calven server with a fictional workspace (`evals/mocks/calven/`), so they need no Calven account and contain no customer data. `evals/mocks/calven/_tools.json` carries the production tool descriptions and schemas, so the model sees the same tools it sees in production.

Each case is a request a user would type, plus graders: an LLM rubric on the answer, and checks on which tools and skills ran. The cases cover the happy path for each workflow, an account the CRM does not hold (the answer must say so and invent nothing), a drafting request that must not trigger any workflow, the asynchronous persona review, and the researcher subagent reading Calven with its tool allowlist. `evals/routing/` checks skill selection: three phrasings for each of four skills that sit close together (deal prep, battlecard, quality review, persona review), one or two phrasings for each newer skill, each of which must load that skill and no other, plus four unrelated requests that must load none.

```sh
claude plugin eval . --judge-model sonnet
```

To measure what the workflows add over the bare server, run the same cases against a copy of the plugin that keeps only `.claude-plugin/`, `.mcp.json` and `evals/`. Results from 2026-10-17 are in the pull request that added the evals. Regenerate the mock workspace with `python3 scripts/evals/gen_fixtures.py evals/mocks/calven` and the tool list with `python3 scripts/evals/gen_tools.py evals/mocks/calven/_tools.json`.

## Source boundaries

The public `skills/` and `agents/` directories are the source of truth for portable workflow instructions. The production server is the source of truth for server behavior, schemas, resources, prompts and server-level instructions.

Public workflows may reference documented tools. They must not copy private server prompts. `npm run validate --prefix scripts` fails when a skill, agent or rule names a tool outside the public catalog.

## Versioning

Plugin releases use `plugin-v<semver>` tags. Registry metadata releases use `mcp-v<semver>` tags. See [versioning](versioning.md).

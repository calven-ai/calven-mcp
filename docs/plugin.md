# Plugin

The Calven plugin packages the hosted MCP connection with workflows that turn Calven evidence into finished work. It is one package with three client manifests, so every client loads the same skills and the same server.

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
| `skills/deal-prep/` | Skill | One-page, sourced call brief for one deal |
| `skills/claim-check/` | Skill | Every claim in a draft checked against the product brief, positioning and competitor evidence |
| `skills/competitive-brief/` | Skill | Evidence-bound competitive analysis |
| `skills/persona-copy-review/` | Skill | Persona review task and findings |
| `skills/workspace-brief/` | Skill | Sourced workspace orientation |
| `skills/win-loss-review/` | Skill | Monthly or quarterly win/loss readout (`/calven:win-loss-review [period]`) |
| `skills/start/` | Skill, typed only | Connection check and first prompts (`/calven:start`) |
| `agents/gtm-researcher.md` | Subagent | Read-only evidence gathering across several Calven sources |
| `rules/use-calven.mdc` | Cursor rule | Sends company facts to Calven instead of model memory |
| `assets/` | Images | Plugin icon and listing images |

Skills load on their own when a request matches and can also be typed as `/calven:<name>`. `start` sets `disable-model-invocation`, so it runs only when typed. Everything is a skill rather than a legacy command so that every client that reads Agent Plugins gets it, not only Claude Code and Cursor. The subagent keeps large tool results out of the main conversation; it cannot write files or run shell commands.

The plugin adds workflow instructions. It does not change authentication, permissions, tools or tenant boundaries. It ships no hooks and no executables, so nothing runs on your machine.

## Formats

| Format | Manifest | MCP config | Components |
| --- | --- | --- | --- |
| Claude Code | `.claude-plugin/plugin.json`, `.claude-plugin/marketplace.json` | `.mcp.json` (`http`) | skills, agents |
| Cursor | `.cursor-plugin/plugin.json` | `.mcp.json` | skills, agents, rules |
| Agent Plugins 1.0 | `plugin.json` | `mcp.json` (`streamable-http`) | skills |
| Official MCP Registry | `server.json` | `remotes[]` | none |

Agent Plugins requires the root `mcp.json` name and its portable transport vocabulary; Claude Code and Cursor read `.mcp.json`. All three point at the same endpoint, and `npm run validate` fails if they drift, if the manifests disagree on name or version, or if a listed icon is missing. CI also runs `claude plugin validate --strict`.

`.claude-plugin/plugin.json` carries the fields Anthropic's directory reads for the listing: `icon`, `documentationUrl`, `supportUrl`, `privacyPolicyUrl` and `termsOfServiceUrl`.

## Evals

`evals/` holds plugin eval cases for `claude plugin eval`. They run against a mocked Calven server with a fictional workspace (`evals/mocks/calven/`), so they need no Calven account and contain no customer data. `evals/mocks/calven/_tools.json` carries the production tool descriptions and schemas, so the model sees the same tools it sees in production.

Each case is a request a user would type, plus graders: an LLM rubric on the answer, and checks on which tools and skills ran. The cases cover the happy path for each workflow, an account the CRM does not hold (the answer must say so and invent nothing), a drafting request that must not trigger any workflow, and the asynchronous persona review.

```sh
claude plugin eval . --judge-model sonnet
```

To measure what the workflows add over the bare server, run the same cases against a copy of the plugin that keeps only `.claude-plugin/`, `.mcp.json` and `evals/`. Results from 2026-10-17 are in the pull request that added the evals. Regenerate the mock workspace with `python3 scripts/evals/gen_fixtures.py evals/mocks/calven` and the tool list with `python3 scripts/evals/gen_tools.py evals/mocks/calven/_tools.json`.

## Source boundaries

The public `skills/` and `agents/` directories are the source of truth for portable workflow instructions. The production server is the source of truth for server behavior, schemas, resources, prompts and server-level instructions.

Public workflows may reference documented tools. They must not copy private server prompts. `npm run validate` fails when a skill, agent or rule names a tool outside the public catalog.

## Versioning

Plugin releases use `plugin-v<semver>` tags. Registry metadata releases use `mcp-v<semver>` tags. See [versioning](versioning.md).

# Prompt patterns


Most people start by typing a question and seeing what comes back. Good instinct. That's the first way to prompt Calven MCP. The second is a saved recipe for work that comes round every week. The third is an advanced prompt: a piece of serious analysis where Calven supplies the facts that keep the model honest. This page covers all three, the templates behind them, and the placeholders the use-case pages use, so you can write your own.

## Three flavours

**Ad hoc questions** are what you type mid-task. One line, plain words, specific. You don't need to know which Calven tool answers it; your AI tool reads the tool descriptions and picks.

> Which objections came up most on calls with [persona] this quarter, and does our messaging cover them?

**Workflow prompts** are recipes for work you do again and again. They spell out the context, what to pull, what to build, the format and the grounding rule, so the result holds up whoever runs it and whichever AI tool they use. Save them as a snippet or a project instruction.

**Advanced prompts** are serious analysis: a simulation, a backtest, a war game, a pre-mortem. The job leads and Calven supplies the few facts that keep the model honest. Template and rules below.

## The workflow template

```
Using Calven MCP, <what we are doing, in one line>.

FILL IN
- <Label>: [placeholder]
- <Label>: [paste ...]

CONTEXT
<who the output is for, what situation we are in, what the person pasted>

PULL FROM THE UNIVERSE
- <document, record kind or dashboard, in plain words>
- <...>

BUILD   (or WRITE, CHECK, SCORE, COMPARE, ROLE-PLAY)
- <the steps or the structure of the output>

OUTPUT
<the artifact: a table, a brief, annotated draft then clean draft, a one-pager, slides on request>

GROUNDING
Ground every point in the Universe and cite the source. Do not invent <the thing this prompt could invent>.
If something is missing, say what is missing rather than filling it in.
```

Rules:

- The first line starts with "Using Calven MCP" so the AI tool knows where to look and the prompt reads the same on a slide, a web page and in a chat.
- PULL FROM THE UNIVERSE is written in the user's words ("the competitor's battlecard", "every lost deal with loss reason Price"), never tool names. The AI tool maps it to the tools.
- Name the three sources this work most often needs. A list of eight dilutes the answer.
- One OUTPUT. Offer the alternative format in one clause ("if I say deck, make slides").
- GROUNDING names the specific invention risk of this prompt: numbers, product capabilities, quotes, persona reactions, competitor moves.
- Every value the person supplies, pasted text included, goes in the FILL IN block, one labelled line each. Nothing else in the prompt has square brackets, so the person edits one block and sends.
- The rest of the prompt is static: it refers back by label ("the persona", "the competitor's battlecard", "the transcript"), never repeats a placeholder.
- A prompt with nothing to supply has no FILL IN block.

## Advanced prompts

The third flavour, for people who already use their AI tool for serious analysis. An advanced prompt is about the job, not about Calven: simulate three campaigns before funding one, backtest a lead score on last year's deals, war-game a competitor's price cut, run a pre-mortem on the launch. Calven plays a small, specific part (the ICP, a persona's reaction, the real win rate, the buyers' own words) that keeps the model honest. The reader should think "I didn't know I could use AI for this."

```
<The job, in one line, in the imperative>. Use Calven MCP for <the two or three inputs it supplies>.

FILL IN
- <Label>: [placeholder]
- <Label>: [paste or attach your data: a CSV export, last year's results, the plan]

CONTEXT
<the decision at stake and why it matters now>

FROM CALVEN
- <two to four Universe inputs, in plain words>

METHOD   (or SIMULATE, MODEL, WAR-GAME, RED-TEAM, BACKTEST)
- <the analytic method, step by step: the model, the simulation, the scoring, the debate>
- <"If you can run code, ..." where code makes it better>

OUTPUT
<the decision-ready artifact: a scorecard, a distribution, a ranked list, a decision memo, a spreadsheet>

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. <the specific invention risk>
```

Rules:

- The method is the point. Use techniques a strong analyst would: Monte Carlo and scenario ranges, sensitivity analysis, pre-mortems, red teams, war games, synthetic buying committees, backtests against closed deals, expected-value decision trees, Van Westendorp price ladders, power calculations for a test.
- Calven supplies facts and approved views, never the method. The AI tool reasons, models and writes; the person supplies their own data (exports, budgets, benchmarks) in FILL IN.
- Every number is labelled by origin. An assumption is fine when it's stated, ranged and shown in the sensitivity.
- Same mechanics as workflow prompts: placeholders only in FILL IN, Calven inputs in plain words, one OUTPUT, a grounding line naming the invention risk.
- Two or three per use case, each a different technique.

## Three modes

Where a use case has all three, give a prompt for each:

1. **Create.** Build the thing from the Universe plus what the person supplies.
2. **Review.** The person pastes what exists (a sequence, a deck, a page) and asks for it to be checked against the Universe: on-message, factually right, how the persona reads it, what the competitor would say.
3. **Gap.** What is missing: content we do not have for a stage, objections the talk track does not cover, personas no deal is threaded to, claims with no proof point.

## Placeholders

| Placeholder | Means |
|---|---|
| `[product]` | A product name in a multi-product workspace; omit otherwise |
| `[persona]` | A persona name as approved in Calven ("Head of Data") |
| `[competitor]` | A tracked competitor's name |
| `[segment]` | An ICP segment, vertical or tier ("mid-market fintech", "Tier 1") |
| `[account]` | A CRM account name |
| `[contact]` | A CRM contact name |
| `[deal]` | A CRM deal name |
| `[campaign]` | The campaign, launch or play being worked on |
| `[stage]` | A funnel or journey stage as the messaging matrix names it |
| `[window]` | A time window: last quarter, last 90 days, this year |
| `[channel]` | Email, LinkedIn, paid, web, event |
| `[paste your draft]` | The person pastes the text to be reviewed |
| `[paste the list]` | The person pastes a list or CSV |
| `[rep]` | A rep's name as it appears on deals (`owner_name`) or in vendor quotes |
| `[partner]`, `[candidate partner]` | A partner company, current or evaluated |
| `[quarter]` | A reporting period: Q3, last quarter, this fiscal year |
| `[pillar]` | A value pillar as the messaging document names it |

Team pages may add local placeholders when the work needs them; keep them in square brackets and explain them once on the page.

## Asking for what Calven holds

Say the thing, not the tool. These phrasings map cleanly:

| Say | The AI tool reads |
|---|---|
| "our positioning", "our messaging", "the product brief", "our ICP" | the four strategy documents |
| "the battlecard for X", "X's dossier", "what X did recently" | competitor bundle, signals, deep dive |
| "the [persona] canvas", "how [persona] talks", "[persona]'s objections" | persona row and canvas |
| "what customers said about Y", "quotes on Y", "the top pains this quarter" | quotes, themes, voice-of-customer dashboard |
| "how our reps pitch Y", "do reps use the pillar" | vendor quotes, messaging field adoption |
| "why we lost to X", "win rate against X", "lost deals on price" | deal drivers, win/loss and competitive dashboards, CRM deals |
| "accounts in Tier 1 nobody worked", "contacts at [account]" | CRM accounts, contacts, deals |
| "what changed in our product", "which documents are stale" | product changes, drift findings |
| "claims on our site with no proof" | claims |
| "what the market is doing", "trends behind Z" | trends, opportunities, market signals, analyst findings |
| "review this as our personas" | review_against_personas |

## Never ask for

- Anything on the open web (a prospect's news, a competitor's page right now). Calven's agents gather that in the app; MCP reads what they stored.
- Sending, publishing, scheduling, updating the CRM, editing a Calven document, starting a research run or a survey.
- Numbers Calven does not compute. Dashboard KPIs are the only rates; the AI tool must cite n and the window.
- A reaction the persona canvas does not support, a quote nobody said, a competitor move nobody recorded.

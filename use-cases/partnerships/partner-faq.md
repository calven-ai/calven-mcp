# Partner FAQ

**Team:** Partnerships · also sales enablement, customer support
**Impact:** Medium. Partners ask the same twenty questions, by email, in the middle of their deals. An FAQ built from the product brief, pricing and objection handling answers most of them the same way every time and frees the partner manager for the ones that need a person.
**Prerequisites:** strategy documents approved (product brief, messaging). Better with competitors tracked (competitive questions) and call transcripts ingested (the questions customers ask partners, in their words).

## What the team is trying to do

Maintain a partner-facing FAQ: product and capability questions, plans and list pricing, integrations, how to position, competitive lines, when to bring the company in, and how to escalate. Done means a partner finds the answer before they email. The partner manager's inbox is the current FAQ, which does not scale and is not consistent.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the questions | From partner emails, kickoffs, deal reviews | Calven does not help here. The objections customers raise are a proxy for what partners get asked | Messaging (objection handling), quotes |
| 2 | Answer product questions | What it does, integrations, limits | The product brief | Product brief |
| 3 | Answer plan and pricing questions | List pricing, inclusions, what needs sales | The product brief pricing and packaging | Product brief |
| 4 | Answer positioning questions | How to describe us, the category, the one-liner | Positioning and messaging | Positioning, messaging |
| 5 | Answer competitive questions | The partner-safe line per competitor | Battlecard talk tracks | Battlecards |
| 6 | Answer fit questions | When to bring us in, when not | ICP buying triggers and disqualifiers | ICP |
| 7 | Check and publish | Verify, load to the portal | Claims check; the portal is outside Calven | Claims |
| 8 | Refresh | Keep current | Product changes, drift findings, competitive signals as triggers | Product changes, drift findings, competitive signals |

## Recommended prompts

### Step 2 to 6: build the FAQ

```
Using Calven MCP, build a partner FAQ.

CONTEXT
Below is the list of questions partners have asked us. Answers must be partner-safe: list pricing only, no internal competitive notes, no deal data.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, limits, pricing and packaging.
- Positioning and messaging: one-liner, category, boilerplate, objection handling.
- Battlecards: the talk track and "how we win" per competitor.
- The ICP: buying triggers and disqualifiers.

WRITE
- For each question: the answer in three sentences or fewer, the source, and "ask your partner manager" where the Universe is silent or the answer is internal.
- Group by product, pricing, positioning, competitors, fit, process.

OUTPUT
The FAQ with sources per answer.

GROUNDING
Answer only from the Universe. Do not state a price or capability the brief does not list. Mark process questions (deal registration, margins) as outside Calven.

[paste the question list]
```

### Step 1: the questions we have not written down yet

```
Using Calven MCP, which customer objections should the partner FAQ cover?

CONTEXT
I built the FAQ from partner emails. I want to add the objections customers actually raise, since partners hear them too.

PULL FROM THE UNIVERSE
- The objection handling section of our messaging.
- The objections customers raised most on calls, with quotes.
- The messaging effectiveness read: which objections our messaging covers and which it does not.

BUILD
- A list of objections ranked by frequency, with the approved response or "no approved response yet".

OUTPUT
The list with sources.

GROUNDING
Use only objections recorded in the Universe. Flag the ones with no approved response for the PMM rather than drafting one.
```

### Step 8: refresh

```
Using Calven MCP, which answers in this FAQ are stale?

CONTEXT
Below is the FAQ. It was last reviewed on [date].

PULL FROM THE UNIVERSE
- Product changes and drift findings since [date].
- Competitive signals of high severity since [date].
- The current product brief pricing section.

CHECK
- Flag each answer that a change may have made wrong, with the change.

OUTPUT
The FAQ annotated with stale flags and the corrected answers.

GROUNDING
Flag only on recorded changes. If nothing changed, say so.

[paste the FAQ and the date]
```

## Ad hoc questions

- What is the approved answer to "does it integrate with [system]"?
- What does [plan] include, and what should a partner route to sales?
- How should a partner describe our category in one sentence?
- What is the partner-safe line against [competitor]?
- When should a partner not bring us in?
- What are the top five objections customers raise, and the responses?
- Which answers in the FAQ are affected by last month's product changes?
- What is our boilerplate?
- Is "[question from a partner]" answered anywhere in the product brief?
- What are the buying triggers a partner should listen for?

## Good practice

- Group by the partner's situation (in a deal, writing a proposal, pricing), not by our document structure.
- Mark internal answers "ask your partner manager" rather than leaving them out. Partners then know to ask.
- Refresh on product changes and competitive signals, not quarterly.
- Keep the source next to each answer. When a partner challenges one, you can show where it came from.

## Not covered today

- Program questions: deal registration, margins, tiers, MDF, portal access.
- Publishing to the portal and tracking what partners read.
- Partner-specific pricing or terms.

# Partner FAQ


Right now the partner FAQ is your inbox, and that doesn't scale or stay consistent. You get a partner-facing FAQ covering product and capabilities, plans and list pricing, integrations, positioning, competitive lines, when to bring you in and how to escalate, so partners find the answer before they email. Calven sources every answer and flags the ones that go stale.

## Prompts

### Build the partner FAQ

```
Using Calven MCP, build a partner FAQ.

FILL IN
- Questions: [paste the question list]

CONTEXT
The questions are ones partners have asked us. Answers must be partner-safe: list pricing only, no internal competitive notes, no deal data.

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
```

### Find objections the FAQ should cover

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

### Flag stale answers in the FAQ

```
Using Calven MCP, which answers in this FAQ are stale?

FILL IN
- FAQ: [paste the FAQ]
- Date: [date it was last reviewed]

CONTEXT
The FAQ was last reviewed on the date above.

PULL FROM THE UNIVERSE
- Product changes and drift findings since the date.
- Competitive signals of high severity since the date.
- The current product brief pricing section.

CHECK
- Flag each answer that a change may have made wrong, with the change.

OUTPUT
The FAQ annotated with stale flags and the corrected answers.

GROUNDING
Flag only on recorded changes. If nothing changed, say so.
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

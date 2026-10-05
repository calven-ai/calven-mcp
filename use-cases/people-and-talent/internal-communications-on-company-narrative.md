# Internal communications on the company narrative


The all-hands and the company update are where everyone hears the story, and you don't want to chase five leaders for slides. Each month you get a short market, customer and competition section that answers "what changed, what customers said, where we stand" with sources, plus a one-page "how we describe ourselves" everyone can repeat. Calven pulls the numbers and quotes from the approved Universe, so every team tells the same story sales and marketing tell outside.

## Prompts

### Write this month's market and customer sections

```
Using Calven MCP, write the market and customer sections of this month's all-hands.

FILL IN
- Month: [month]

CONTEXT
Two sections, three minutes each, for the whole company. Plain language, no sales jargon. The audience includes engineers and support.

PULL FROM THE UNIVERSE
- Competitive signals of High severity in the month, with the "so what".
- Trends that changed status or were newly seen.
- Our competitive win rate this month against the prior period, with n.
- The top customer themes by mentions this month and their sentiment.
- Three new customer quotes, and the top win driver with a buyer verbatim.

WRITE
- Market and competition: what moved, why it matters to us, where we stand.
- Customers: what they told us, who chose us and why, in their words.

OUTPUT
Two sections of under 150 words each, with speaker notes and sources.

GROUNDING
Use only recorded signals, trends, dashboards and quotes in the Universe, cited. Keep quotes verbatim. If the month has no High signals, say so.
```

### Write the one-page company story

```
Using Calven MCP, write the one-page "how we describe ourselves" for every employee.

CONTEXT
A page everyone reads once and can repeat at a dinner party: what we do, for whom, the category, the three pillars, the words we use and avoid.

PULL FROM THE UNIVERSE
- Positioning statement, category, unique attributes.
- Messaging: core narrative, one-liner, value pillars, boilerplate.
- The vocabulary and naming conventions in messaging, if recorded.

WRITE
- The one-liner, the paragraph, the three pillars with one sentence each, the five phrases we use and the five we avoid.

OUTPUT
One page with sources.

GROUNDING
Use only positioning and messaging in the Universe, cited. Do not add claims the documents do not make.
```

### Check a company update against the approved story

```
Using Calven MCP, check this company update against our approved story and current numbers.

FILL IN
- Draft: [paste the draft update]

CONTEXT
I want contradictions with positioning, stale competitor facts and unsourced numbers flagged.

PULL FROM THE UNIVERSE
- Positioning and messaging; the competitive intelligence dashboard and signals for the month.

CHECK
- Flag off-message lines, stale competitor claims and numbers that do not match the dashboard.
- Suggest the fix.

OUTPUT
The draft annotated, then a clean version.

GROUNDING
Judge only against the Universe and cite each flag.
```

## Ad hoc questions

- What did our competitors do this month that the company should know about?
- What are the top three things customers told us this month?
- Give me one customer quote for the all-hands.
- What is our win rate this month versus last?
- Which deal did we win recently and why, in the buyer's words?
- What is our one-liner?
- Which words do we avoid when describing ourselves?
- Which market trend changed this month?
- What product gap are customers naming most right now?

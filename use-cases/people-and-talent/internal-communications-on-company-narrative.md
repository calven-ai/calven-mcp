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

## Advanced prompts

### Measure how consistently leaders tell the story

```
Measure how consistently our leaders tell the company story with a content analysis of what they actually said, scored against the approved messaging. Use Calven MCP for the story they should be telling.

FILL IN
- Leader communications: [attach or paste recent updates, all-hands slides, LinkedIn posts or talk transcripts from four to six leaders]
- Window: [window]

CONTEXT
We approved a story. Every leader retells it in their own words, and after a quarter there are six stories. Sales and recruiting hear the drift first. I want it measured, not felt.

FROM CALVEN
- The messaging document: core narrative, one-liner, value pillars, boilerplate.
- Our positioning: category, unique attributes, competitive alternatives.
- The words we avoid, from the messaging and positioning documents.

METHOD
- Build a codebook: one code per pillar, the category name, the one-liner's key idea, each unique attribute, and each word to avoid.
- Code every leader's material against it. Count presence and emphasis.
- If you can run code, produce a leader-by-code heatmap and a consistency score per leader (share of pillars present, minus words to avoid).
- Find the pattern: a pillar nobody mentions, a phrase several leaders invented that isn't approved, and whether a leader's version is better than the approved one.

OUTPUT
The heatmap or table, a consistency score per leader, the three biggest drifts with quotes, and one paragraph for the next all-hands that resets the story.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Quote leaders exactly. Don't treat an invented phrase as wrong if it's compatible with the approved story; mark it as a candidate.
```

### Predict the hard all-hands questions

```
Predict the hardest questions people will ask at the next all-hands and draft straight answers from the evidence. Use Calven MCP for the losses, gaps, competitor moves and customer complaints people already hear about.

FILL IN
- The update you plan to give: [paste the draft]
- Window: [window]

CONTEXT
The all-hands Q&A is where trust is won or lost. People in sales, CS and engineering hear things in their week that the deck glosses over. I want the questions before they're asked, and honest answers.

FROM CALVEN
- Win rate and top loss reasons from the win/loss dashboard for the window, with change versus the prior period and n.
- Product gaps buyers name most, and recent competitor signals.
- Top negative themes from customer quotes, with mention counts.
- Recent product changes and drift findings on our own documents.

RED-TEAM
- Play three employees: a seller who lost two deals to the same competitor, a CSM hearing the same complaint every week, an engineer who doesn't know why we're building what we're building.
- Each reads the draft and writes the two questions they'd ask, in their own voice, based on what the evidence says they've seen.
- Rank the six questions by how likely they are and how badly a vague answer would land.
- Draft a straight answer to each: what's true, what we're doing, what we don't know.

OUTPUT
The six questions ranked, a short answer to each with sources, and the two changes to the draft that answer the top questions before anyone asks.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't promise a plan or a date the Universe doesn't contain; mark those for the founder to fill.
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
- Which competitor signal this month would surprise the engineering team?
- Which customer quote best explains why we exist, for someone outside GTM?
- What's the biggest positive change in the win/loss numbers versus last period?
- Which theme did customers raise more this month than any other?
- Which of our documents went stale after a recent product change?
- What's one thing a customer said this month that every team should hear?

# Win/loss readouts


Leadership, sales and product want to know why deals were won and lost this period, what changed from the last one, and what to do about it. You walk away with a readout: the win rate and its movement, the top win and loss drivers with evidence, the competitor read, product gaps ranked by deals at stake, and three recommendations each owner accepts. Calven puts the program's answers in one place, so the readout isn't anecdotes from the loudest rep.

## Prompts

### Build the headline win/loss read

```
Using Calven MCP, build the win/loss readout for the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
The audience is leadership, sales and product. They want why we won and lost in the period, what changed, and what to fix.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for the window with the comparison to the period before.
- Program health: how many decided deals have a completed survey, and coverage by segment.
- The top win drivers and loss drivers, and which forces decide deals.

BUILD
- The headline: win rate, competitive win rate, pipeline won and lost, each with its change and n.
- Coverage: what share of decided deals the readout rests on, and which segments are thin.
- The five drivers that decided the most deals, won and lost, each with one buyer quote.

OUTPUT
The first page of the readout, numbers in a table, quotes cited.

GROUNDING
Numbers from the dashboards only, with n and window. Quotes verbatim and cited. Do not add up rows yourself.
```

### Read win/loss by competitor

```
Using Calven MCP, give me the competitor read for the win/loss readout covering the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Leadership wants to know which rivals we beat, which beat us, and on what.

PULL FROM THE UNIVERSE
- Competitive performance: win rate per competitor for the window, the fight-or-avoid read, loss reasons per competitor.
- The head-to-head survey section: how buyers compared us.
- The deals lost to the top competitor, with the buyer's reason.

BUILD
- A table: competitor, deals, win rate, change, the top reason we lose to them.
- For the two rivals costing us most: what buyers said, in their words.
- Where the battlecard already covers it and where it does not.

OUTPUT
One page, with sources.

GROUNDING
Rates from the dashboard with n; mark any rival below the floor. Quotes verbatim. Do not infer a competitor's move from a loss.
```

### Rank the product gaps that cost deals

```
Using Calven MCP, rank the product gaps that cost us deals in the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Product wants the gaps ranked by deals at stake, with the buyer's words.

PULL FROM THE UNIVERSE
- The product gaps with amount at stake from the Insights overview.
- The survey product section and the deals behind each gap.
- Deal drivers in the Capability category that hurt us, with evidence quotes.

BUILD
- A table: gap, deals touched, won and lost, amount at stake, competitors who have it.
- Under each of the top three: two buyer quotes and the deal they came from.

OUTPUT
The ranked table and quotes, ready to paste into the readout.

GROUNDING
Counts from the dashboards only. Amount at stake covers won and lost deals, say so. Quotes verbatim and cited.
```

### Score how we sold

```
Using Calven MCP, score how we sold in the window below, from what buyers told us.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Sales leadership wants an honest read on process, not opinion.

PULL FROM THE UNIVERSE
- The sales team survey section for the window.
- Deal drivers in the Experience category, won and lost, with evidence quotes and the deal.

SCORE
- What buyers praised and what they criticised, each with how many deals and a quote.
- Where the data allows, the pattern by segment or deal size.

OUTPUT
A short scorecard and the quotes behind the lowest marks.

GROUNDING
Score only what responses speak to; mark the rest "not enough signal". Quotes verbatim and cited.
```

### Assemble the full readout

```
Using Calven MCP, assemble the win/loss readout from the sections below.

FILL IN
- Window: [time window, e.g. last quarter]
- Sections: [paste the four sections]

CONTEXT
The sections are the headline read, the competitor read, the product gaps and the sales scorecard for the window. Make one document for a 30-minute leadership meeting.

BUILD
- One-paragraph summary: what changed and why.
- The numbers table.
- Why we win, why we lose, each with three drivers and quotes.
- Competitors, product gaps, sales process.
- Three recommendations with an owner: marketing, product, sales.

OUTPUT
A readout document; slides if I say deck.

GROUNDING
Change nothing in the numbers or quotes. Recommendations must trace to a driver in the sections.
```

## Ad hoc questions

- What is our competitive win rate for [window], and how did it move?
- Why did we lose to [competitor] this quarter? Quote the buyers.
- Which product gap cost the most deals this year?
- How many decided deals have a completed survey? Which segments are uncovered?
- What did buyers say about our pricing in lost deals?
- Which deciding force wins deals for us: capability, experience, commercials or competitive?
- What did the buyer at [deal] answer about why they chose us?
- Which personas sit on won deals that lost deals lack?
- Show me the verbatims about onboarding from won deals.
- Which loss reason grew most vs the prior period?
- How did win rate differ for Tier 1 accounts vs the rest?
- Which deals were no decision, and what stopped them?
- Which loss outcome grew: lost to a competitor, no decision, or built in-house?
- Which persona answered the most surveys, and which never answers?

# Win/loss readouts

**Team:** Product marketing · also sales leadership, product management, leadership
**Impact:** High. The readout decides what the company fixes next quarter; one built from every surveyed deal, with buyer quotes, replaces a month of interview reading.
**Prerequisites:** win/loss surveys running (surveyed deals, responses, deal drivers), CRM connected (deal context, loss reasons). Better with competitors tracked.

## What the team is trying to do

Tell leadership, sales and product why deals were won and lost in the period, what changed from the period before, and what to do about it. Done means a readout with the win rate and its movement, the top win and loss drivers with evidence, the competitor read, the product gaps ranked by deals at stake, and three recommendations each owner accepts. Without a program and a single place for the answers, the readout is anecdotes from the loudest rep.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the numbers | Win rate, competitive win rate, pipeline won and lost, change vs prior period | The win/loss scoreboard with comparisons and n | Win/loss dashboard |
| 2 | Check coverage | How many decided deals have a completed survey, by segment | Program health: enrollment, completion, coverage by segment | Win/loss program health dashboard |
| 3 | Read the drivers | Why deals were won and lost, which forces decide | Top win and loss drivers, driver categories, deal drivers with evidence quotes | Win/loss dashboard, deal_drivers |
| 4 | Read by competitor | Win rate against each rival, what they win on | Head-to-head, competitive performance, loss reasons by competitor | Competitive intelligence dashboard, win/loss head-to-head |
| 5 | Read by segment and persona | Where fit and threading change outcomes | Coverage and segments, buying group, win rate by persona | Win/loss segments, persona dashboard |
| 6 | Rank the product gaps | Which gaps cost deals, how many, quoted | Product gaps with deals at stake, survey product section, deal detail | Insights overview product gaps, win/loss surveys product, `get_insight_detail` product deals |
| 7 | Read the sales process | What buyers said about how the team sold | Sales team survey section, experience drivers | Win/loss surveys sales team, deal_drivers (Experience) |
| 8 | Pull the verbatims | The quotes that make each point | Verbatims by group, survey answers by question | `get_insight_detail` verbatims and answers, survey_responses |
| 9 | Write the readout | Narrative, numbers, quotes, recommendations by owner | Drafted from the above | |
| 10 | Present and assign | Leadership meeting, owners in the backlog | Calven does not help here | |

## Recommended prompts

### Step 1 to 3: the headline read

```
Using Calven MCP, build the win/loss readout for [window].

CONTEXT
The audience is leadership, sales and product. They want why we won and lost in the period, what changed, and what to fix.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for [window] with the comparison to the period before.
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

[name the window]
```

### Step 4: by competitor

```
Using Calven MCP, give me the competitor read for the [window] win/loss readout.

CONTEXT
Leadership wants to know which rivals we beat, which beat us, and on what.

PULL FROM THE UNIVERSE
- Competitive performance: win rate per competitor for [window], the fight-or-avoid read, loss reasons per competitor.
- The head-to-head survey section: how buyers compared us.
- The deals lost to [top competitor], with the buyer's reason.

BUILD
- A table: competitor, deals, win rate, change, the top reason we lose to them.
- For the two rivals costing us most: what buyers said, in their words.
- Where the battlecard already covers it and where it does not.

OUTPUT
One page, with sources.

GROUNDING
Rates from the dashboard with n; mark any rival below the floor. Quotes verbatim. Do not infer a competitor's move from a loss.

[name the window]
```

### Step 6: product gaps

```
Using Calven MCP, rank the product gaps that cost us deals in [window].

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

[name the window]
```

### Step 7: sales process

```
Using Calven MCP, score how we sold in [window], from what buyers told us.

CONTEXT
Sales leadership wants an honest read on process, not opinion.

PULL FROM THE UNIVERSE
- The sales team survey section for [window].
- Deal drivers in the Experience category, won and lost, with evidence quotes and the deal.

SCORE
- What buyers praised and what they criticised, each with how many deals and a quote.
- Where the data allows, the pattern by segment or deal size.

OUTPUT
A short scorecard and the quotes behind the lowest marks.

GROUNDING
Score only what responses speak to; mark the rest "not enough signal". Quotes verbatim and cited.

[name the window]
```

### Step 9: the full readout

```
Using Calven MCP, assemble the [window] win/loss readout from the sections below.

CONTEXT
I have the headline read, the competitor read, the product gaps and the sales scorecard below. Make one document for a 30-minute leadership meeting.

BUILD
- One-paragraph summary: what changed and why.
- The numbers table.
- Why we win, why we lose, each with three drivers and quotes.
- Competitors, product gaps, sales process.
- Three recommendations with an owner: marketing, product, sales.

OUTPUT
A readout document; slides if I say deck.

GROUNDING
Change nothing in the numbers or quotes. Recommendations must trace to a driver above.

[paste the four sections]
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

## Good practice

- Name the window and keep it the same across every prompt in the readout.
- Ask for n with every rate and quote it in the readout. A 60% win rate on five deals is a story, not a trend.
- Check coverage before the drivers. Thin segments get flagged, not extrapolated.
- Build the readout in sections, then assemble. One prompt for everything returns a shallow answer.
- Keep quotes verbatim; attribute by role and deal, following the workspace's security settings.
- Recommendations trace to a driver. If no driver supports it, it is an opinion and goes elsewhere.

## Not covered today

- Running the surveys, choosing who to mail, chasing responses. That is the win/loss agent and its queue in Calven.
- The CRM's own win rate. The readout uses Calven's computed rates; reconcile differences with RevOps.
- Assigning the recommendations. They go to the backlog tool by hand.

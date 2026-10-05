# GTM budget cases

**Team:** Finance and investor relations · also leadership, revenue operations, demand generation
**Impact:** Medium. Every plan cycle brings requests for headcount, programs and tools. The evidence that a segment converts, that a loss reason is fixable, or that an opportunity is real decides which requests get funded.
**Prerequisites:** CRM connected (segment win rates, pipeline), market research run (opportunities, trends). Better with win/loss surveys running (loss reasons as the case for a fix) and competitors tracked.

## What the team is trying to do

Judge each GTM spend request on evidence: the segment it targets and how that segment converts, the gap it claims to close and how many deals that gap cost, the opportunity it chases and how it is sized. Done means a one-page case per request with the numbers, their sample size and the risk, in a format the exec team can compare. Without the company's own knowledge the case is the requester's narrative and the decision is seniority.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect requests | Headcount, programs, tools, with the requester's case | Calven does not help here | |
| 2 | Segment evidence | Does the target segment convert and at what size | Win rate, average deal size, sales cycle by segment with n; in-profile pipeline by segment | ICP dashboard, CRM deals |
| 3 | Gap evidence | Does the gap the request fixes cost deals | Loss reasons and product gaps with deals and amount at stake; costly objections | Win/loss dashboard, `get_insights_overview` product gaps, voice-of-customer (costly objections) |
| 4 | Opportunity evidence | Is the opportunity sized and timed | Opportunities with sizing, timeline, status; trends behind them | Market opportunities, trends |
| 5 | Competitive evidence | Would the spend change a head-to-head | Win rate and loss reasons against the competitor in question | Competitive intelligence dashboard, deal drivers |
| 6 | Cost and return model | Cost, payback, CAC impact | Calven does not help here | |
| 7 | Write the case | One page per request, comparable | A draft grounded in steps 2 to 5 with sources | All of the above |
| 8 | Decide | Rank and fund | Calven does not help here | |

## Recommended prompts

### Steps 2 to 5: evidence for one request

```
Using Calven MCP, assemble the evidence for this GTM spend request.

CONTEXT
Below is a request for [headcount / program / tool] aimed at [segment or gap]. I need the evidence that supports or weakens it before I model the cost.

PULL FROM THE UNIVERSE
- For the target segment: win rate, average deal size, sales cycle, in-profile pipeline, with n.
- If the request claims to fix a gap: the loss reason or product gap, how many deals it touched, the amount at stake, with a buyer verbatim.
- If it chases an opportunity: the opportunity's sizing, timeline and the trends behind it.
- If it targets a competitor: our win rate against them and the top loss reason.

BUILD
- The evidence for the request, each point with a number, n and source.
- The evidence against it.
- What we do not know.

OUTPUT
A one-page case in three sections, ready to attach the cost model to.

GROUNDING
Use only dashboards, records and documents in the Universe and cite them. Use dashboard counts, never your own. Mark thin samples.

[paste the request]
```

### Step 3: which gaps are worth funding

```
Using Calven MCP, rank the gaps that cost us deals this year by amount at stake.

CONTEXT
Several requests claim to fix something that loses deals. I want the ranked list from the evidence so I can compare the claims.

PULL FROM THE UNIVERSE
- Top loss reasons and product gaps from the insights overview, with deals and amount at risk.
- The costly objections from voice of customer.
- A buyer verbatim for each of the top five.

BUILD
- A table: gap, deals touched, amount at stake, won versus lost split, verbatim.
- A note on which gaps are product, which are messaging, which are commercial.

OUTPUT
The table and the note, with sources.

GROUNDING
Use only the dashboard's figures and cite n and the window. Amount at stake covers won and lost deals, not lost revenue; say so.

[name the window and product]
```

### Step 7: compare the cases

```
Using Calven MCP, make these budget cases comparable.

CONTEXT
Below are the requests with their evidence sections. I want them on one scale.

PULL FROM THE UNIVERSE
- The segment rates and gap figures each case cites, re-checked against the dashboards.

BUILD
- A table: request, segment or gap, evidence strength (measured / directional / none), sample size, the single number that matters most, the main risk.

OUTPUT
The comparison table and the three requests with the strongest evidence.

GROUNDING
Re-check every number against the Universe and flag any that do not match. Do not rank on cost; I add that.

[paste the cases]
```

## Ad hoc questions

- What is the win rate and average deal size in [segment]?
- How many deals did we lose on [loss reason] this year, and what was at stake?
- Which product gap touched the most deals?
- Is [opportunity] sized, and what is its timeline?
- Which segment has the most in-profile pipeline we are not converting?
- What is our win rate against [competitor], and would fixing [gap] change it?
- Which costly objection comes up most?
- Do we win more with multi-threaded deals? By how much?
- Which lead source has the best win rate?

## Good practice

- One request per prompt. Evidence sections stay clean and comparable.
- Keep the cost model out of the prompt. Calven holds the return side's inputs, not the cost.
- Use amount at stake as recorded; it covers won and lost deals and is not lost revenue.
- Ask for what is missing. A request with no evidence in the Universe is a request to run research first.

## Not covered today

- Cost, payback and CAC modelling.
- Program performance data from marketing tools.
- Headcount plans and compensation.

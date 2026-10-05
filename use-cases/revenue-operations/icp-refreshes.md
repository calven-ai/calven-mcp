# ICP refreshes


It's the quarterly ICP review, or the market just shifted, and you need to know whether the ICP still describes who buys. You come away with a recommendation backed by the numbers: which attributes predict a win, which segments to add or drop, which disqualifiers to keep, and the proposed edits for the PMM. Calven puts the evidence on the table so the loudest opinion in the room doesn't decide it.

## Prompts

### Build the ICP review evidence pack

```
Using Calven MCP, build the evidence pack for the quarterly ICP review.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Audience: the PMM who owns the ICP and sales leadership. I want to know whether the ICP still predicts wins, which attributes matter, where to expand and where the pipeline deviates.

PULL FROM THE UNIVERSE
- The current ICP document with its version date: segment tiers, priority verticals, disqualifiers, the fit scorecard.
- The ICP dashboard for the window with the prior period: ICP share of wins, in-profile versus out-of-profile win rate, average deal size and sales cycle by fit, win rate by attribute, predictive attributes, tech win signals, expansion recommendations, fit score distribution, pipeline gap. Every number with n.

BUILD
- Does the ICP hold: the four KPIs with the prior period.
- What predicts a win: attributes ranked, with win rate, n and the baseline.
- Where to expand: each recommended segment with win rate, deals, open pipeline and average fit.
- Where the pipeline deviates: fit distribution and the gap.
- Proposed edits to the ICP: add, tighten, drop, with the number behind each.

OUTPUT
The pack, two pages, then the proposed edits as a list for the PMM.

GROUNDING
Every number from the ICP dashboard with n and window; cells below the floor reported as such. Do not propose an edit the numbers do not support.
```

### Show why a segment buys, in their words

```
Using Calven MCP, tell me why the segment below buys, in the buyer's words.

FILL IN
- Segment: [segment]

CONTEXT
The ICP dashboard suggests expanding into the segment. Before we add it I want the buyer evidence.

PULL FROM THE UNIVERSE
- Won deals in the segment in the last four quarters and their deal drivers with direction helped.
- Customer quotes from accounts in the segment with category Pain, Buying trigger or Job to be done.
- The voice-of-customer read for buying triggers.

BUILD
- The three reasons this segment buys, each with deals (n) and a quote.
- The triggers that preceded the deals.
- What would go in the ICP's use cases and triggers sections for this segment.

OUTPUT
A half page for the ICP review.

GROUNDING
Quotes verbatim, deals cited. If the segment has fewer than a handful of won deals, say so and mark the evidence as thin.
```

### Check a proposed ICP edit against the data

```
Using Calven MCP, check this proposed change to the ICP against the data.

FILL IN
- Proposed edit: [describe the edit, e.g. add a vertical, raise the size floor, drop a disqualifier]

CONTEXT
Someone proposes the edit above. I want the evidence for and against.

PULL FROM THE UNIVERSE
- The ICP dashboard: win rate and deals for the attribute or segment in question, the expansion recommendations, the predictive attributes.
- Lost deals and their drivers in that segment, to see the cost side.

CHECK
- For: win rate, deals, pipeline, with n.
- Against: loss drivers and disqualifier evidence.
- Verdict: supported, not supported, or not enough data.

OUTPUT
The two columns and the verdict.

GROUNDING
Numbers with n and window. "Not enough data" is a valid verdict; do not force one.
```

## Ad hoc questions

- Does the ICP still predict wins? Give me the four KPIs with the prior period.
- Which attribute predicts a win most?
- Which out-of-profile segment wins most often?
- How much of the open pipeline is below the fit threshold?
- When was the ICP last approved?
- What is the average deal size in profile versus out?
- Which disqualifier has cost us a won deal?
- Why do [segment] accounts buy, in their words?
- Which tech stack signal correlates with wins?
- What is the sales cycle for Tier 1 versus Tier 3?

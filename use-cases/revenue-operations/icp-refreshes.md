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

## Advanced prompts

### Fit a win model against the scorecard

```
Fit a logistic regression on our closed deals and compare what it says predicts a win with the weights in our ICP Fit Scorecard. Use Calven MCP for the closed deals with their account attributes and the scorecard itself.

FILL IN
- Window: [window, e.g. the last six quarters]
- Attributes to test: [list any attributes you suspect matter, or write "all available"]

CONTEXT
The scorecard was written from intuition and a few big wins. If the data says different weights, the ICP refresh should say so, with the coefficients to back it.

FROM CALVEN
- Closed deals in the window, paged through, with the account's industry, size, region, funding stage, employee and revenue band, tech stack, triggers, fit score and tier.
- The ICP Fit Scorecard section with its weights.
- The ICP dashboard's predictive attributes and win rate by attribute, with n.

MODEL
- If you can run code, fit a regularised logistic regression (won = 1) with one-hot attributes. Report coefficients as odds ratios with confidence intervals.
- Compare each odds ratio with the scorecard weight: aligned, over-weighted, under-weighted, missing.
- Check the model on a held-out quarter. Report AUC for the model and for the current fit score.
- Without code, rank attributes by win-rate lift using the dashboard and the deal rows, and say the conclusions are weaker.

OUTPUT
A table: attribute, odds ratio, scorecard weight, verdict. Then the proposed new weights and the holdout comparison.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't report an effect for an attribute with fewer than 15 deals; list it as untested.
```

### Run a Delphi round on the ICP change

```
Run a three-round Delphi panel on the proposed ICP change, with synthetic experts who see the evidence but not each other's names. Use Calven MCP for the evidence pack each expert reads.

FILL IN
- Proposed change: [paste the ICP edit, e.g. add a vertical, drop a size band, change a disqualifier]

CONTEXT
ICP reviews turn into a meeting where the most senior person decides. A Delphi round gets each function's honest estimate, then converges. I want to see where the panel lands and what moved them.

FROM CALVEN
- The current ICP document: Segment Tiers, Priority Verticals, Disqualifiers, Fit Scorecard.
- The ICP dashboard: win rate by attribute, where to expand, pipeline gap, with n.
- Customer quotes from accounts the change affects, tagged Pain or Buying trigger.
- Market opportunities and trends relevant to the change.

METHOD
- Panel: a sales leader, a PMM, a CS lead, a CFO and a RevOps analyst. Each reads the evidence and answers: should we make the change (yes, no, modify), the win rate they expect in the new segment, and one reason.
- Round two: show each the anonymous distribution of answers and reasons. They revise or hold, with a reason.
- Round three: final estimates. Report the median, the spread and the strongest dissent.

OUTPUT
A table of each round's answers, the converged verdict, the expected win rate range, and the dissent the ICP owner should address.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Experts may only cite the pack; their estimates are labelled as simulated judgement.
```

### Map the forces that make a segment switch

```
Map the jobs-to-be-done forces (push, pull, anxiety, habit) for the segment we're considering adding to the ICP, and say whether those buyers will actually switch. Use Calven MCP for the buyers' own words and the deal outcomes in that segment.

FILL IN
- Segment: [segment]
- Current alternative: [what these buyers use, e.g. spreadsheets, an incumbent, an agency]

CONTEXT
A segment can look perfect on firmographics and never buy because the habit is too strong. Win rate tells me the outcome; the forces tell me why and what it would take.

FROM CALVEN
- Quotes from accounts in the segment, by category: Pain (push), Gain and Job to be done (pull), Objection (anxiety), Competitor mention (habit).
- Deal drivers on decided deals in the segment, with direction and evidence quote.
- The segment's win rate and no-decision share, with n.

METHOD
- Sort the evidence into the four forces. Score each force 1 to 5 on frequency and intensity, citing quotes.
- A switch happens when push plus pull beats anxiety plus habit. Say whether it does, and by how much.
- Name the one anxiety and one habit that, if reduced, would tip the most deals.

OUTPUT
The four-forces diagram with quotes, the switch verdict, and two ICP edits (a trigger to watch and a disqualifier) that follow from it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Quotes verbatim with the account. If the segment has fewer than five conversations, say the map is thin.
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
- Which out-of-profile wins share an attribute the ICP doesn't mention?
- Which buying trigger shows up most on won deals in the last two quarters?
- Do Tier 2 accounts with a trigger win more than Tier 1 accounts without one?
- Which vertical has the most no-decision losses?
- What share of won revenue came from accounts below the fit threshold?
- Which market trend points at a segment our ICP doesn't cover?

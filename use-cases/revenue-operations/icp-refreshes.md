# ICP refreshes

**Team:** Revenue operations · also product marketing, sales leadership
**Impact:** High. The ICP decides who gets worked, routed and quota'd. A refresh grounded in what actually predicts a win, where the pipeline deviates from the profile and which disqualifiers hold, keeps every downstream decision honest. The document itself is updated in Calven; this page is the evidence pack RevOps brings to that review.
**Prerequisites:** CRM connected (accounts with fit, deals with outcomes), ICP approved. Better with win/loss surveys running (drivers by segment) and personas approved.

## What the team is trying to do

Decide, each quarter or after a market shift, whether the ICP still describes who buys: which attributes predict a win, which segments to add or drop, which disqualifiers to keep. Done means a recommendation with the numbers and the proposed edits for the PMM to make. Without the company's own knowledge the ICP is refreshed by the loudest opinion in the room.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the current ICP | What it says today | The approved ICP with its segment tiers, verticals, disqualifiers and scorecard, and its version date | ICP document |
| 2 | Test it against outcomes | Do in-profile deals win more | ICP share of wins, in-profile versus out-of-profile win rate, deal size lift, sales cycle | ICP dashboard (KPIs) |
| 3 | Find the predictors | Which attributes matter | Win rate by attribute, predictive attributes, tech win signals, segment win rates, with floors | ICP dashboard (win predictors) |
| 4 | Find the expansion | Where out-of-profile deals win | Expansion recommendations: segments outside the profile with win rate, deals, open pipeline, average fit | ICP dashboard (expand ICP) |
| 5 | Reality check | Where pipeline deviates | Fit score distribution, pipeline gap | ICP dashboard (reality check) |
| 6 | Hear the buyers | Why those segments buy | Deal drivers and quotes by segment; buying triggers | Deal drivers, quotes, voice-of-customer dashboard |
| 7 | Write the recommendation | Proposed edits with evidence | The pack with numbers and quotes | All of the above |
| 8 | Update the document | The ICP agent and the PMM revise and approve | Calven does not help from the AI tool; the edit happens in Calven | |

## Recommended prompts

### Step 1 to 5: the evidence pack

```
Using Calven MCP, build the evidence pack for the quarterly ICP review.

CONTEXT
Audience: the PMM who owns the ICP and sales leadership. I want to know whether the ICP still predicts wins, which attributes matter, where to expand and where the pipeline deviates.

PULL FROM THE UNIVERSE
- The current ICP document with its version date: segment tiers, priority verticals, disqualifiers, the fit scorecard.
- The ICP dashboard for [window] with the prior period: ICP share of wins, in-profile versus out-of-profile win rate, average deal size and sales cycle by fit, win rate by attribute, predictive attributes, tech win signals, expansion recommendations, fit score distribution, pipeline gap. Every number with n.

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

[name the window]
```

### Step 6: why those segments buy

```
Using Calven MCP, tell me why [segment] buys, in the buyer's words.

CONTEXT
The ICP dashboard suggests expanding into [segment]. Before we add it I want the buyer evidence.

PULL FROM THE UNIVERSE
- Won deals in [segment] in the last four quarters and their deal drivers with direction helped.
- Customer quotes from accounts in [segment] with category Pain, Buying trigger or Job to be done.
- The voice-of-customer read for buying triggers.

BUILD
- The three reasons this segment buys, each with deals (n) and a quote.
- The triggers that preceded the deals.
- What would go in the ICP's use cases and triggers sections for this segment.

OUTPUT
A half page for the ICP review.

GROUNDING
Quotes verbatim, deals cited. If the segment has fewer than a handful of won deals, say so and mark the evidence as thin.

[name the segment]
```

### Review mode: check a proposed ICP edit

```
Using Calven MCP, check this proposed change to the ICP against the data.

CONTEXT
Someone proposes [the edit: add a vertical, raise the size floor, drop a disqualifier]. I want the evidence for and against.

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

[describe the proposed edit]
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

## Good practice

- Bring the pack to the review; do not edit the ICP from a hunch. The PMM revises it in Calven with the evidence attached.
- Read the floors. Attributes below the floor are not findings yet.
- Pair every expansion recommendation with buyer quotes. The dashboard shows where we win; the quotes show why.
- Check the cost side of a disqualifier before dropping it. Some exist because of losses, not opinions.
- Keep the window consistent with the segment win-rate pack so the numbers agree.
- Rerun after a pricing change, a product launch or a market shift, not only on the calendar.

## Not covered today

- Editing the ICP document. The ICP agent drafts and the PMM approves in Calven.
- Market sizing for a new segment. The market research agent records opportunities; TAM models live elsewhere.
- Enriching accounts with attributes the CRM does not hold.

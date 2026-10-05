# Lost deal analysis

**Team:** Revenue operations · also sales leadership, product marketing, product management
**Impact:** High. The CRM's loss reason field holds six options chosen by the rep. Calven holds why the buyer said we lost, per deal, ranked by whether it decided the outcome, and counts them the same way every quarter.
**Prerequisites:** win/loss surveys running (surveyed deals, responses, deal drivers), CRM connected (deals with loss reason, lost to, segment). Better with competitors tracked.

## What the team is trying to do

Explain the quarter's losses: by reason, by competitor, by segment, by the force that decided them (competitive, capability, experience, commercials), with the buyer's words. Done means a readout with counts, the three patterns, and what each team should change. Without the company's own knowledge the analysis is a bar chart of the rep's pick list.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the losses | Lost deals in the window | Lost deals with CRM loss reason, lost to, segment, size band, stage reached | CRM deals |
| 2 | Get the buyer's reason | Beyond the pick list | Deal drivers with direction hurt, rank and category; the response and the deal summary | Deal drivers, survey responses, surveyed deals |
| 3 | Count the forces | What kind of thing decides losses | Driver categories (Competitive, Capability, Experience, Commercials); top loss drivers; loss outcomes (lost to competitor, no decision, in-house) | Win/loss dashboard |
| 4 | Cut by competitor and segment | Where losses cluster | Loss reasons per competitor; drivers by segment | Competitive dashboard, win/loss segments |
| 5 | Compare rep reason with buyer reason | Where the CRM is wrong | CRM loss reason beside the deciding driver per deal | CRM deals, deal drivers |
| 6 | Write the readout | Counts, patterns, actions by team | The readout with sources | All of the above |
| 7 | Act | Product gaps to product, pricing to leadership, plays to enablement | Calven does not help here; the gap lists feed the other teams' pages | |

## Recommended prompts

### Step 1 to 4: the quarterly loss readout

```
Using Calven MCP, build the lost deal readout for [window].

CONTEXT
Audience: sales leadership, PMM and product. I want why we lost, counted the way the dashboard counts, with the buyer's words, and the cuts by competitor and segment.

PULL FROM THE UNIVERSE
- The win/loss dashboard for [window]: loss count, pipeline lost, loss outcomes (competitor, no decision, in-house), top loss drivers, driver categories, with n and the prior period.
- The competitive dashboard: loss reasons per competitor.
- Deal drivers with direction hurt and rank "decided" in [window], with category and the evidence quote.
- Lost deals in [window] with segment, size band and furthest stage.

BUILD
- The numbers: losses, pipeline lost, outcome split, versus the prior period.
- The forces: driver categories with counts.
- The top five deciding loss drivers, each with deals (n) and two buyer quotes.
- The cuts: losses by competitor with the top reason each; losses by segment with the top reason each.
- Where in the funnel we lose: furthest stage reached.

OUTPUT
The readout, one page plus the quote appendix.

GROUNDING
Counts from the dashboards with n and window; quotes verbatim and cited. Do not count rows yourself. Deals without a survey are reported as "no buyer reason recorded".

[name the window]
```

### Step 5: rep reason versus buyer reason

```
Using Calven MCP, compare the CRM loss reason with what the buyer said for each lost deal in [window].

CONTEXT
I want to know how often the rep's pick list matches the buyer's reason, to fix the pick list or the habit.

PULL FROM THE UNIVERSE
- Lost deals in [window] with the CRM loss reason.
- The deciding deal driver per deal with its category and quote.

CHECK
- Per deal: CRM reason, buyer's deciding driver, match or mismatch.
- The mismatch rate and the most common mismatch pair.

OUTPUT
The table and the two lines of findings.

GROUNDING
Use only deals with a recorded driver. Report the count without a driver separately.

[name the window]
```

### Gap mode: actions by team

```
Using Calven MCP, turn the loss readout into actions for product, PMM, enablement and leadership.

CONTEXT
Below is the readout. Each team gets the losses it can act on, with the evidence.

PULL FROM THE UNIVERSE
- Deal drivers by category: Capability to product, Competitive to PMM and enablement, Commercials to leadership, Experience to sales leadership.
- The product gaps and amount at risk from the Insights overview.
- The battlecard objection handling for the competitors named, to see what is already covered.

BUILD
- Per team: the drivers, the deals and amount they touched, the buyer quotes, and whether an answer already exists in the Universe.

OUTPUT
Four short lists.

GROUNDING
Amount at risk comes from the overview and covers won and lost deals; say so. Do not propose fixes; list the evidence.

[paste the readout]
```

## Ad hoc questions

- Why did we lose deals last quarter, in the buyer's words?
- How many losses were no decision versus a competitor?
- Which loss driver decided the most deals this year?
- What did the buyer at [lost deal] say decided it?
- Which competitor do we lose to on price, and which on capability?
- Which segment lost most on integrations?
- How often does the rep's loss reason match the buyer's?
- Which product gap cost the most deals, and how much pipeline?
- At which stage do we lose most deals?
- Which lost deals have no survey response yet?

## Good practice

- Count with the dashboard, quote with the drivers. Both, every time.
- Separate deciding drivers from contributing ones. A list of every objection is not an analysis.
- Report the share of losses without a buyer reason. It is the program's coverage number, and it caps what the analysis can claim.
- Give each team only its category. Product does not need the pricing losses in its list.
- Run the rep-versus-buyer check quarterly; the mismatch rate is the argument for a better pick list.
- Keep the readout comparable: same window length, same cuts, each quarter.

## Not covered today

- Deals the win/loss program did not survey. Their reason is the CRM pick list.
- Fixing the pick list, the stage definitions or any CRM field.
- Deciding what to build or what to price. The lists go to product and leadership.

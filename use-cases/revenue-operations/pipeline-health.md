# Pipeline health

**Team:** Revenue operations · also sales leadership, finance
**Impact:** High. The pipeline review asks the same questions every week: how much is real, how much is in profile, which deals are at risk. Calven answers the parts the CRM cannot: fit, persona coverage, competitor exposure and the loss patterns that predict risk, with the sample behind each number.
**Prerequisites:** CRM connected (deals, accounts, contacts). Better with personas approved (persona dashboard), competitors tracked (competitive dashboard) and win/loss surveys running (loss drivers).

## What the team is trying to do

Give the weekly pipeline review a read of quality, not just quantity: the share of open pipeline in profile, single-threaded, against a competitor we lose to, or matching a known loss pattern. Done means a one-page health read with the deals to inspect. Without the company's own knowledge the review is coverage ratio and stage counts.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Size the pipeline | Open deals by stage, amount, close date | Open deals with amount, stage, close date, deal type, lead source | CRM deals |
| 2 | Judge the quality | How much is in profile | ICP-fit pipeline share, fit score distribution, pipeline gap | ICP dashboard |
| 3 | Check threading | Which deals have one contact | Single- versus multi-threaded pipe, contact coverage, win rate by threading | Persona dashboard |
| 4 | Check competitor exposure | Which deals face a rival we lose to | Open deals by competitor in play; win rate per competitor with fight-or-avoid | CRM deals, competitive dashboard |
| 5 | Match loss patterns | Deals that look like past losses | Top loss drivers and loss reasons by segment; deals sharing the attributes | Win/loss dashboard, deal drivers, CRM deals |
| 6 | Flag data gaps | Deals missing size or close date | Deals missing size or close date counted on the scoreboard; stage history coverage | Win/loss dashboard, CRM deals |
| 7 | Write the read | One page for the review | The read with the deal list to inspect | All of the above |
| 8 | Act | Update stages, reassign, coach | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: the weekly health read

```
Using Calven MCP, give me the pipeline health read for this week's review.

CONTEXT
Audience: the sales leadership team. One page. I want quality, not stage counts: fit, threading, competitor exposure, and the deals to inspect.

PULL FROM THE UNIVERSE
- Open deals: amount, stage, close date, ICP fit tier, competitors in play, contact count band.
- The ICP dashboard: ICP-fit pipeline share and fit score distribution, with n and window.
- The persona dashboard: single- versus multi-threaded pipe, contact coverage, multi-threading win rate.
- The competitive dashboard: win rate per competitor and fight-or-avoid.

BUILD
- Four lines: share of open pipeline in profile, share single-threaded, share against a competitor we lose to more than we win, deals closing this month missing size or close date.
- The deals to inspect: out of profile and large, single-threaded and late stage, against an avoid competitor. Each with the reason.

OUTPUT
The four lines, then the inspect list.

GROUNDING
Shares and rates come from the dashboards with n and window; deal attributes from the mirrored rows. Do not compute rates by counting rows.
```

### Step 5: deals that look like past losses

```
Using Calven MCP, find open deals that match our loss patterns.

CONTEXT
I want the open deals in [window] that share the attributes of deals we lost in the last year, so the review can act before close.

PULL FROM THE UNIVERSE
- The win/loss dashboard: top loss drivers, loss reasons by segment and competitor, with n.
- Deal drivers with rank "decided" and direction hurt in the last year, with category and the buyer's words.
- Open deals closing in [window] with segment, competitor, deal size band, persona of the primary contact.

BUILD
- The loss patterns: the three combinations (segment, competitor, driver) that lost most.
- Open deals matching each pattern, with what to check and the buyer quote that shows the risk.

OUTPUT
The patterns, then the matched deals.

GROUNDING
Patterns from the dashboard with n; quotes verbatim. Say "no pattern above the floor" when the data is thin rather than inventing one.

[name the window]
```

### Step 6: data gaps that break the forecast

```
Using Calven MCP, list the open deals with data gaps.

CONTEXT
Before the forecast call I want deals missing what the forecast needs.

PULL FROM THE UNIVERSE
- Open deals missing amount or close date, late-stage deals with no competitor recorded, deals with no primary contact, deals with incomplete stage history.
- The scoreboard's counts of deals missing size and close date.

BUILD
- The deals grouped by gap, with owner.

OUTPUT
The list for the owners.

GROUNDING
Report only what the mirrored rows lack. The fix happens in the CRM.
```

## Ad hoc questions

- How much of the open pipeline is Tier 1?
- Which late-stage deals have only one contact?
- Which open deals face [competitor], and what is our win rate against them?
- Which deals closing this month are out of profile?
- What share of the pipeline is multi-threaded, and what is the win-rate difference?
- Which open deals look like the ones we lost on price last year?
- Which deals have no close date?
- What is the average deal size in profile versus out?
- Which open deals have a blocker listed and no champion?
- Which segment has the biggest pipeline gap against its win rate?

## Good practice

- Ask for shares with n. "Forty percent single-threaded" means something; "a lot" does not.
- Keep the inspect list short. Three reasons, the biggest deals under each.
- Use loss patterns, not gut feel, to flag risk. The pattern comes with a quote the rep can act on.
- Run the data gap prompt before the forecast call, not after.
- Keep the read to one page. The review's job is to act on it, not to read it.

## Not covered today

- Stage updates, reassignment, forecast categories and any CRM edit.
- Coverage ratio against quota. Calven has pipeline; quota lives in the planning tool.
- Activity data (emails, calls per deal). Threading is measured by contacts on the deal, not activity.

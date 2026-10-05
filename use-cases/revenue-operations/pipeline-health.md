# Pipeline health


Coverage ratio and stage counts say how much pipeline you have and nothing about its quality. You walk into the weekly review with a one-page health read: the share of open pipeline that's in profile, single-threaded, up against a competitor you lose to, or matching a known loss pattern, plus the deals to inspect. Calven brings the loss patterns to match against.

## Prompts

### Build the weekly pipeline health read

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

### Match open deals to past loss patterns

```
Using Calven MCP, find open deals that match our loss patterns.

FILL IN
- Window: [close window for open deals, e.g. this quarter]

CONTEXT
I want the open deals closing in the window that share the attributes of deals we lost in the last year, so the review can act before close.

PULL FROM THE UNIVERSE
- The win/loss dashboard: top loss drivers, loss reasons by segment and competitor, with n.
- Deal drivers with rank "decided" and direction hurt in the last year, with category and the buyer's words.
- Open deals closing in the window with segment, competitor, deal size band, persona of the primary contact.

BUILD
- The loss patterns: the three combinations (segment, competitor, driver) that lost most.
- Open deals matching each pattern, with what to check and the buyer quote that shows the risk.

OUTPUT
The patterns, then the matched deals.

GROUNDING
Patterns from the dashboard with n; quotes verbatim. Say "no pattern above the floor" when the data is thin rather than inventing one.
```

### List open deals with data gaps

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

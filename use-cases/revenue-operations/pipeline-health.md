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

## Advanced prompts

### Simulate where the quarter lands

```
Simulate where this quarter's pipeline actually lands, deal by deal, as a range instead of a single commit number. Use Calven MCP for the open deals and the win rates that fit each one.

FILL IN
- Quarter: [quarter]
- Target: [bookings target]
- Rep calls: [paste the rep's commit and best-case flags, or write "none"]

CONTEXT
The pipeline review argues about a single number. A distribution tells me how likely we are to hit the target, which deals swing it and how much of the gap is real.

FROM CALVEN
- Open deals closing in the quarter: amount, stage, fit tier, competitors, contact roles and count band, owner.
- Win rates from the dashboards, with n: by fit tier, single- versus multi-threaded, and against each competitor.
- Top loss reasons for the segment, to flag deals that match them.

SIMULATE
- Give each deal a win probability: start from the tier win rate and adjust for threading and competitor. Show each adjustment and its source.
- Add a slip probability for deals past their average sales cycle (a labelled assumption).
- Run a Monte Carlo, 10,000 draws if you can run code, and report P10, P50, P90 bookings and the probability of hitting target.
- Rank deals by how much each one moves the P50 (its swing).

OUTPUT
The distribution with the target marked, the probability of hitting it, the ten swing deals with the risk on each, and how the result compares with the reps' commit.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't stack adjustments from rates with fewer than 10 deals; fall back to the tier rate and say so.
```

### Flag deals that outlived their odds

```
Run a survival analysis on our closed deals and flag every open deal that has already outlived the odds of closing won. Use Calven MCP for opened and closed dates, outcomes and the stages each deal reached.

FILL IN
- Window: [window, e.g. deals closed in the last four quarters]
- Segment: [segment, or write "all"]

CONTEXT
Old deals sit in the pipeline because nobody wants to close them out. Time in the funnel is one of the strongest loss signals there is, and our stage report ignores it.

FROM CALVEN
- Closed deals in the window, paged through: opened date, close date, status, reached stages, furthest stage, size band, fit tier.
- Open deals with opened date, stage and amount.
- The ICP dashboard's sales cycle by tier, with n, to sanity-check.

METHOD
- Build Kaplan-Meier style curves: of won deals, what share had closed by day 30, 60, 90 and so on, split by size band. Do the same for losses.
- Find the age past which the chance of a win drops sharply, per size band.
- If you can run code, plot the curves and compute each open deal's conditional win chance given its age.

OUTPUT
The curves (or a table), the cutoff age per size band, and the list of open deals past it with amount and stage. Close with how much pipeline that is.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Deals with missing dates are counted and excluded, not guessed. Stage history is incomplete for some deals; say how many.
```

### Map the pipeline on fit and momentum

```
Place every open deal on a two-by-two of fit against momentum, and give each quadrant its own play. Use Calven MCP for fit, buying-group coverage and stage progress on each deal.

FILL IN
- Quarter: [quarter]
- Momentum signal: [what counts as moving, e.g. a stage change in the last 21 days, or paste a stage-change export]

CONTEXT
The pipeline review treats every deal the same. A strong-fit deal that's stalled needs a different action from a weak-fit deal that's racing ahead, and both look identical in a stage report.

FROM CALVEN
- Open deals: amount, stage, reached stages, fit tier and score, contact roles, competitors.
- The persona dashboard's win rate for multi-threaded versus single-threaded deals, with n.
- In-profile versus out-of-profile win rate from the ICP dashboard, with n.

METHOD
- Score fit from tier plus threading (an economic buyer and a champion add points).
- Score momentum from my signal.
- Place each deal in a quadrant: strong fit and moving (protect), strong fit and stalled (rescue), weak fit and moving (qualify hard), weak fit and stalled (close out).
- Size each quadrant by count and amount.

OUTPUT
The two-by-two with deal names and amounts, the play for each quadrant, and the five rescue deals with the missing persona or step for each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent momentum where my export has no data; mark it unknown.
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
- Which open deals have been open longer than our average won sales cycle?
- How much late-stage pipeline faces a competitor we lose to most of the time?
- Which open deals are out of profile and single-threaded at the same time?
- Which owners carry the most out-of-profile pipeline?
- Which open deals sit at accounts we lost to the same competitor before?

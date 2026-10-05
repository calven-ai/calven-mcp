# QBR metrics pack

**Team:** Revenue operations · also sales leadership, leadership, finance
**Impact:** Medium. The QBR pack takes RevOps a week of exports and reconciliation. The GTM half of it (win rates, competitive performance, ICP focus, persona coverage, voice of customer, win/loss program coverage) comes from the Insights dashboards in one pass, with n and the prior period, so the numbers agree with last quarter's.
**Prerequisites:** CRM connected, win/loss surveys running. Better with competitors tracked, personas approved and call transcripts ingested.

## What the team is trying to do

Assemble the quarter's GTM numbers, what moved, and why, for the QBR and the board. Done means the metric pages with the prior period, the movers, the explanations in the buyer's words, and a consistent window quarter after quarter. Bookings, quota attainment and pipeline coverage come from the CRM and finance; Calven supplies the rest. Without the company's own knowledge the pack is rebuilt from exports each quarter and never quite reconciles.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Set the window and scope | Quarter, product, comparison | Windows and product scoping are built into every dashboard | All dashboards |
| 2 | Pull the headlines | Every KPI with the prior period | The Insights overview: KPIs, movers, top loss reasons, product gaps, availability | Insights overview |
| 3 | Pull the sections | Win/loss, competitive, ICP, persona, voice of customer, messaging, program health | Each dashboard as data | Dashboards |
| 4 | Explain the movers | Why a number moved | Deal drivers, quotes, signals behind the mover | Deal drivers, quotes, competitive signals, insight details |
| 5 | Add the CRM and finance numbers | Bookings, quota, coverage | Calven does not hold these; paste them | |
| 6 | Write the narrative | One page of what happened and what we change | The narrative with sources | All of the above |
| 7 | Build the deck | Slides, charts | Calven supplies the tables; the deck tool draws them | |

## Recommended prompts

### Step 2 and 3: the pack in one pass

```
Using Calven MCP, build the GTM metrics pack for [quarter].

CONTEXT
For the QBR. Window: [quarter], compared with the prior quarter. Scope: [product or whole company]. Every number with n; placeholders reported as "no data", never estimated.

PULL FROM THE UNIVERSE
- The Insights overview for the window: every dashboard's headline KPIs with the comparison, the biggest movers, top loss reasons, product gaps and which dashboards have no data.
- The win/loss dashboard: scoreboard, why we won and lost, deciding forces.
- The competitive dashboard: performance per competitor, market movement.
- The ICP dashboard: focus KPIs and reality check.
- The persona dashboard: the multi-threading payoff.
- The voice-of-customer dashboard: what customers are telling you, tied to revenue.
- The win/loss program health scoreboard: coverage and completion.

BUILD
- One table per section: metric, this quarter, prior quarter, change, n.
- The movers page: the five biggest changes with the section they come from.
- The availability note: sections with no data this quarter.

OUTPUT
The tables and the two pages.

GROUNDING
Every number from a dashboard with n and window. Report "cannot compare" with its reason rather than "no change". Do not sum rows.

[name the quarter and the scope]
```

### Step 4: explain the movers

```
Using Calven MCP, explain the five movers in this pack.

CONTEXT
Below are the five biggest changes. For each I need the reason with evidence, in three lines.

PULL FROM THE UNIVERSE
- For win-rate movers: the deals and deal drivers behind the cell.
- For competitor movers: competitive signals in the window and the deals against them.
- For voice-of-customer movers: the quotes behind the theme.
- For ICP movers: the expansion and reality-check sections.

BUILD
- Per mover: what moved, the most likely reason, the evidence (quote, signal or deals with n), what we do about it.

OUTPUT
Five short entries.

GROUNDING
Cite the evidence behind every reason. Where the evidence does not explain the move, say so.

[paste the five movers]
```

### Step 6: the narrative

```
Using Calven MCP, write the one-page narrative for the QBR.

CONTEXT
Audience: the executive team. Below are the pack's tables, the mover explanations and the CRM and finance numbers (bookings, quota attainment, coverage). One page: what happened, why, what we change.

PULL FROM THE UNIVERSE
- Nothing new; use the pasted pack. Verify any number I quote against the dashboards.

WRITE
- What happened: three lines with the numbers.
- Why: the movers in plain language.
- What we change: three decisions with the evidence behind each.

OUTPUT
The page.

GROUNDING
Numbers as in the pack with n. Do not add numbers Calven does not hold beyond the ones I pasted.

[paste the pack and the CRM and finance numbers]
```

## Ad hoc questions

- What are every dashboard's headline KPIs for last quarter, with the prior period?
- What moved most last quarter?
- Which dashboards have no data for the quarter?
- What was our competitive win rate and pipeline won, with n?
- What share of decided deals had a completed win/loss survey?
- Which product gap had the most amount at risk?
- What was the ICP share of wins this quarter versus last?
- What are the top three customer themes this quarter?
- How did our win rate against [competitor] change?

## Good practice

- Fix the window and scope once and reuse the prompt every quarter. Comparable beats clever.
- Report the availability note. A section with no data is a program finding, not a gap to paper over.
- Explain movers with evidence before the meeting. The QBR is for decisions, not for finding reasons.
- Keep CRM and finance numbers separate from Calven's and label the source of each.
- Remember amount at risk on product gaps covers won and lost deals; say so on the slide.

## Not covered today

- Bookings, revenue, quota attainment, pipeline coverage ratio, CAC and retention. Those come from the CRM, finance and the subscription system.
- Charts and slides. Calven supplies tables; the deck tool draws them.
- Marketing attribution and funnel conversion by channel. Not in Calven.

# QBR metrics pack


Every quarter you rebuild the GTM numbers from exports for the QBR and the board, and they never quite reconcile. You get the metric pages with the prior period, the movers, the reasons in the buyer's words, and the same window quarter after quarter. Bookings, quota attainment and pipeline coverage come from the CRM and finance; Calven supplies the rest.

## Prompts

### Build the quarter's GTM metrics pack

```
Using Calven MCP, build the GTM metrics pack for the quarter below.

FILL IN
- Quarter: [quarter]
- Scope: [product, or leave blank for the whole company]

CONTEXT
For the QBR. Window: the quarter, compared with the prior quarter, within the scope. Every number with n; placeholders reported as "no data", never estimated.

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
```

### Explain the five biggest movers

```
Using Calven MCP, explain the five movers in this pack.

FILL IN
- Movers: [paste the five movers]

CONTEXT
The movers are the five biggest changes. For each I need the reason with evidence, in three lines.

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
```

### Write the one-page QBR narrative

```
Using Calven MCP, write the one-page narrative for the QBR.

FILL IN
- Pack: [paste the pack's tables and the mover explanations]
- CRM and finance numbers: [paste bookings, quota attainment, coverage]

CONTEXT
Audience: the executive team. One page: what happened, why, what we change.

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

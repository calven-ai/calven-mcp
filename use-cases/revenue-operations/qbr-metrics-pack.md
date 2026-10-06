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

## Advanced prompts

### Red-team the QBR story for cherry-picking

```
Red-team the QBR narrative for cherry-picked numbers, convenient windows and moves that are only noise. Use Calven MCP for the full set of headline KPIs, their prior periods and their samples.

FILL IN
- Draft narrative: [paste the QBR narrative or the slide text]
- Quarter: [quarter]

CONTEXT
The QBR narrative gets written by the people being reviewed. That's normal, and it's why it needs an adversary before it goes in front of the exec team.

FROM CALVEN
- Every dashboard's headline KPIs for the quarter with the prior period and n, from the Insights overview.
- The biggest movers and the dashboards with no data.
- For each number the draft cites, the dashboard figure and its window.

RED-TEAM
- Play an analyst on the exec team whose job is to find what the narrative leaves out. Check every number the draft cites against the dashboard.
- Flag: a number that doesn't match, a window chosen to flatter, a rate quoted without n, a move smaller than its noise (call it noise when n is under 30 or the change is under 5 points), a negative mover the draft skips.
- For each flag, write the honest version of the sentence.

OUTPUT
A table: claim, flag, evidence, honest version. Then the two negative movers the narrative must address, and the narrative with the fixes applied.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't call a number wrong without showing the dashboard figure next to it.
```

### Trace pipeline won through a driver tree

```
Build a driver tree for pipeline won and show which branch explains the change from last quarter. Use Calven MCP for the win rates, deal counts, deal sizes and cycle times that make up each branch.

FILL IN
- Quarter: [quarter]
- Prior period: [quarter]
- Bookings: [paste bookings for both quarters if you want the tree tied to finance's number]

CONTEXT
The QBR says pipeline won went up or down. The useful question is which lever moved: more deals, better win rate, bigger deals, or a different mix. The tree makes that one picture.

FROM CALVEN
- Pipeline won and lost, deals decided and competitive win rate for both quarters, from the win/loss dashboard, with n.
- Average deal size and sales cycle, from the ICP dashboard, with n.
- ICP share of wins and the multi-threaded win rate, from the ICP and persona dashboards.

MODEL
- Tree: pipeline won = deals decided × win rate × average won deal size. Break win rate into in-profile and out-of-profile, and deals decided by segment where the dashboards allow.
- For each node, compute this quarter, prior quarter and the contribution of its change to the total change (hold the others constant, then reconcile the interaction).
- If you can run code, draw the tree with each node coloured by contribution.

OUTPUT
The tree, a table of contributions that sums to the total change, and a two-line headline naming the branch that moved most.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't derive a rate by adding rows; where a dashboard doesn't give a node, mark it as not available.
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
- Which KPI moved against the trend of the last two quarters?
- Which dashboard's sample is too small to report this quarter?
- How did the ICP share of wins change while pipeline won changed?
- Which competitor's win rate moved most, and on how many deals?
- Which customer theme grew fastest this quarter, with a quote?
- What share of lost pipeline went to no decision this quarter versus last?

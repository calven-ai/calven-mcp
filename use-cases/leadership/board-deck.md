# Board deck


The board wants a current read on the competition, why deals are won and lost, pipeline quality and the market, and it'll have follow-up questions. You get the four market-facing slides of the board pack drafted from the Universe with every number sourced, plus an appendix answering the questions the board usually asks before anyone asks them. Financials, hiring and cash come from finance; Calven doesn't hold them.

## Prompts

### Draft the competitive slide

```
Using Calven MCP, build the competitive slide for the quarter's board meeting.

FILL IN
- Quarter: [quarter]

CONTEXT
One slide: our competitive position and win rate by competitor, with what changed this quarter. The board compares it with last quarter's.

PULL FROM THE UNIVERSE
- The competitive intelligence read for the quarter compared with the prior quarter: competitive win rate, win rate per competitor with sample, fight-or-avoid read, top loss reasons per competitor.
- The competitor moves this quarter with the highest severity, with dates.
- Battlecard coverage and competitors under watch.

BUILD
- A table: competitor, deals, win rate, change vs prior quarter, top loss reason.
- Three moves this quarter and what each means for us.
- One line on where we fight and where we avoid.

OUTPUT
The slide content as a table plus bullets, with the window and samples in a footnote.

GROUNDING
Use only dashboard figures and signals from the Universe, cited with n. Rates come from the dashboard, never from counting rows. Where a competitor has too few deals for a rate, say so rather than showing a number.
```

### Draft the win/loss slide

```
Using Calven MCP, build the win/loss slide for the quarter's board meeting.

FILL IN
- Quarter: [quarter]

CONTEXT
One slide: how we are winning and losing, and why, compared with last quarter.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for the quarter with the change against the prior quarter: win rate, pipeline won and lost, deals with completed win/loss, sentiment.
- Why deals are won and lost: top win drivers, top loss drivers, costly objections.
- What kind of force decides deals: the driver categories.

BUILD
- The headline KPIs with their change.
- Top three win drivers and top three loss drivers, each with one verbatim quote.
- The category that decides most deals.

OUTPUT
The slide content, with samples and window in a footnote.

GROUNDING
Use only the dashboard and drivers in the Universe, cited. Mark any KPI that cannot be compared as such; never read it as no change. Keep quotes verbatim.
```

### Draft the ICP and pipeline quality slide

```
Using Calven MCP, build the pipeline quality slide for the board.

FILL IN
- Quarter: [quarter]

CONTEXT
The board asks whether we are selling to the customers we said we would. One slide on ICP focus.

PULL FROM THE UNIVERSE
- The ICP read for the quarter vs prior: ICP share of wins, ICP-fit pipeline, average deal size, sales cycle.
- The reality check: fit score distribution and pipeline gap.
- What predicts a win: the attributes with the largest lift.

BUILD
- The four KPIs with change.
- One sentence on the pipeline gap.
- The two attributes that predict a win, with their win rate and baseline.

OUTPUT
The slide content with footnoted samples.

GROUNDING
Use only ICP dashboard figures, cited with n. If the pipeline category is restricted, say so.
```

### Answer the board's likely questions in advance

```
Using Calven MCP, prepare the appendix answering the board's likely questions on competition and win/loss.

FILL IN
- Slides: [paste the four slides]

CONTEXT
The slides are the four market-facing slides. The board will ask for the deals behind the numbers. I want the answers ready.

PULL FROM THE UNIVERSE
- The deals behind each competitor's win rate.
- The deals in each loss outcome and in the pricing buckets.
- The buyer verbatims behind the top loss drivers.

BUILD
- For each slide: the three questions a board member asks, and the answer with the rows behind it (deal names only if the workspace shows them).
- The questions the Universe cannot answer, so I prepare them elsewhere.

OUTPUT
The appendix.

GROUNDING
Use only drill-downs and drivers in the Universe, cited. Respect withheld fields; do not reconstruct a deal name or amount.
```

### Check last quarter's deck against the Universe

```
Using Calven MCP, check the competitive and win/loss slides from last quarter's deck.

FILL IN
- Slides: [paste the slides]
- Window: [the window the slides covered]

CONTEXT
The slides are last quarter's, as sent. I want to know whether the numbers match what the Universe shows for that window and whether anything has moved since.

PULL FROM THE UNIVERSE
- The same dashboards for the same window, and for the current period.

CHECK
- Each number: matches, differs (with the Universe's value and sample), or not computed by Calven.
- What moved since.

OUTPUT
The slides annotated.

GROUNDING
Compare only with dashboard figures, cited. Do not explain differences you cannot see in the data.
```

## Ad hoc questions

- What is our competitive win rate this quarter, and the change vs last quarter?
- Win rate by competitor this year, with the number of deals each.
- What are the top three loss reasons this quarter?
- Which competitor did we lose the most pipeline to?
- How much of the open pipeline is in ICP profile?
- What share of wins were Tier 1 accounts?
- What did [competitor] do this quarter?
- Which customer quotes could go on a board slide?
- How many deals have completed win/loss, and what is the completion rate?
- What is net customer sentiment this quarter?
- Which trend has the highest severity, and what is the so-what?
- Did average deal size move this quarter?

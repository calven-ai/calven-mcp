# Board deck

**Team:** Leadership · also finance, sales leadership, product marketing, chief of staff
**Impact:** High. The competitive and win/loss slides are the ones the board asks about and the ones built last, from whatever sales could pull together. Calven produces them with sample sizes, sources and the change against last quarter, in the same shape every time.
**Prerequisites:** win/loss surveys running (win rates, loss reasons, drivers), CRM connected (pipeline won and lost, ICP focus), competitors tracked (signals, battlecard coverage). Market research run adds the market slide.

## What the team is trying to do

Give the board a current, consistent read on competition, why deals are won and lost, pipeline quality and the market, and answer the questions that follow. Done means the four market-facing slides of the board pack drafted from the Universe with every number sourced, plus an appendix of the questions the board usually asks, answered in advance. Financials, hiring and cash come from finance and stay out of Calven.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Fix the slide set | Decide which market-facing slides recur every quarter | The dashboards that map to each slide, with the same window each quarter | Insights overview |
| 2 | Competitive slide | Win rate by competitor, moves this quarter, where we fight and avoid | Competitive intelligence dashboard: performance, showdown, market movement; signals | Competitive intelligence dashboard, competitive signals |
| 3 | Win/loss slide | Win rate, pipeline won and lost, top win and loss drivers, what decides deals | Win/loss dashboard: scoreboard, why won and lost, deciding forces | Win/loss dashboard |
| 4 | ICP and pipeline quality slide | Share of pipeline in profile, ICP share of wins, deal size and cycle | ICP dashboard: KPIs, reality check | ICP dashboard |
| 5 | Market slide | Trends and opportunities with the so-what | Market research dashboard; trends, opportunities | Market research dashboard, trends, market opportunities |
| 6 | Customer voice slide | What customers say, in their words | Voice-of-customer dashboard; marketing-ready quotes | Voice-of-customer dashboard, quotes |
| 7 | Anticipate questions | Answer the board's usual questions in an appendix | Drill-downs behind each number | `get_insight_detail`, deal drivers |
| 8 | Financials, hiring, cash | The rest of the pack | Calven does not help here | |
| 9 | Assemble and send | The deck and the pre-read | Calven does not help here | |

## Recommended prompts

### Step 2: the competitive slide

```
Using Calven MCP, build the competitive slide for the [quarter] board meeting.

CONTEXT
One slide: our competitive position and win rate by competitor, with what changed this quarter. The board compares it with last quarter's.

PULL FROM THE UNIVERSE
- The competitive intelligence read for [quarter] compared with the prior quarter: competitive win rate, win rate per competitor with sample, fight-or-avoid read, top loss reasons per competitor.
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

[name the quarter]
```

### Step 3: the win/loss slide

```
Using Calven MCP, build the win/loss slide for the [quarter] board meeting.

CONTEXT
One slide: how we are winning and losing, and why, compared with last quarter.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for [quarter] with the change against the prior quarter: win rate, pipeline won and lost, deals with completed win/loss, sentiment.
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

[name the quarter]
```

### Step 4: ICP and pipeline quality

```
Using Calven MCP, build the pipeline quality slide for the board.

CONTEXT
The board asks whether we are selling to the customers we said we would. One slide on ICP focus.

PULL FROM THE UNIVERSE
- The ICP read for [quarter] vs prior: ICP share of wins, ICP-fit pipeline, average deal size, sales cycle.
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

[name the quarter]
```

### Step 7: the questions appendix

```
Using Calven MCP, prepare the appendix answering the board's likely questions on competition and win/loss.

CONTEXT
Below are the four slides. The board will ask for the deals behind the numbers. I want the answers ready.

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

[paste the four slides]
```

### Review mode: check last quarter's deck against the Universe

```
Using Calven MCP, check the competitive and win/loss slides from last quarter's deck.

CONTEXT
Below are the slides as sent. I want to know whether the numbers match what the Universe shows for that window and whether anything has moved since.

PULL FROM THE UNIVERSE
- The same dashboards for the same window, and for the current period.

CHECK
- Each number: matches, differs (with the Universe's value and sample), or not computed by Calven.
- What moved since.

OUTPUT
The slides annotated.

GROUNDING
Compare only with dashboard figures, cited. Do not explain differences you cannot see in the data.

[paste the slides and the window]
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

## Good practice

- Use the same window and the same slides every quarter. The board reads trends, not one-off numbers.
- Footnote the sample on every rate. Small per-competitor samples are normal and the board will ask.
- Pull the questions appendix every time. The deals behind a number are the first follow-up.
- Keep financials out of the prompt. Calven does not hold them, and the AI tool must not guess them.
- Check last quarter's slides against the Universe before building this quarter's; the comparison column depends on it.

## Not covered today

- Financials, hiring, cash, runway and the CEO update. Finance and the board tool own those.
- Building and sending the deck. Calven supplies slide content.
- Deal names and amounts where the workspace withholds them.

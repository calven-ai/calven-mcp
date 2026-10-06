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

## Advanced prompts

### Stress-test the deck as three board members

```
Put the board deck in front of three hostile board members and fix what they'd pull apart. Use Calven MCP for the evidence behind every claim on the slides.

FILL IN
- Deck: [paste or attach the board deck]
- Board: [describe the members: lead investor, independent operator, finance-minded director]
- Last quarter's commitments: [paste what we told the board we'd do]

CONTEXT
The board reads the deck the night before and arrives with three questions each. I want those questions first, and the slides fixed so they don't get asked.

FROM CALVEN
- Competitive win rate, win rate per competitor, top loss reasons and in-profile share of wins, with n and the change against last quarter.
- High-severity competitor signals from the quarter.
- Deal drivers and buyer quotes behind the biggest losses.

RED-TEAM
- Play each board member in turn. Each reads the deck, finds the weakest claim for their lens (growth story, operating discipline, cash and efficiency) and asks the question they'd ask in the meeting.
- For each question, check the slide against Calven. Mark it supported, overstated or missing evidence.
- Have each member ask one question about a commitment from last quarter.
- End with the one slide the board will spend the most time on, and why.

OUTPUT
Nine questions in a table (member, slide, question, evidence status, two-line answer), the slide edits that pre-empt the worst five, and the one-sentence answer for the slide the board will dwell on.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't soften a number to make a slide hold; call the slide overstated.
```

### Show the board which win rates are noise

```
Put an honest confidence range on every win rate in the board deck, so the board reacts to real moves and not to noise. Use Calven MCP for the win rates and the deal counts behind them.

FILL IN
- Rates on the deck: [list the win rates and percentages the deck shows]
- Quarter: [quarter]

CONTEXT
A win rate against a competitor that fell from 50% to 33% sounds like a crisis. On six deals, it's a coin toss. The board deserves to know which moves are real.

FROM CALVEN
- Each win rate on the deck (competitive, per competitor, per segment, in profile) for this quarter and the four before it, with n.
- The trailing twelve-month rate for each, with n, to use as the prior.

MODEL
- Treat each rate as a Beta distribution: the trailing twelve months as the prior, this quarter's wins and losses as the update. Give the posterior's 80% interval.
- For each quarter-on-quarter change, give the probability that the true rate actually moved in that direction.
- Sort the rates into real moves, probable moves and noise.
- If you can run code, compute it and draw each rate as a dot with its interval, quarter by quarter.

OUTPUT
A table (rate, this quarter, n, 80% interval, probability the move is real, verdict), a rewrite of each slide caption to match its verdict, and one line I can say when a board member asks about a move that's noise.

GROUNDING
Label every number as Calven (cited, with n) or computed by you, with the method. Use the rates and counts Calven reports; don't rebuild a rate from deal rows.
```

### Replay last quarter's losses with one fix

```
Replay last quarter's lost deals with one fix applied at a time, and show the board what each fix would have been worth. Use Calven MCP for the lost deals, why they were lost and what the buyers said.

FILL IN
- Quarter: [quarter]
- Fixes on the table: [list the investments being proposed: a feature, a price change, more sellers, a competitive program]

CONTEXT
The strategic discussion item asks the board to fund something. A counterfactual on real losses turns "we think this helps" into "this would have saved these deals".

FROM CALVEN
- The quarter's lost deals with amount, segment, competitor, loss reason, product feedback and price feedback.
- Deal drivers and evidence quotes for the surveyed ones.
- Win rate by segment for the trailing twelve months, with n, as a sanity bound.

METHOD
- For each fix, go deal by deal: would it plausibly have changed the outcome? Mark each deal likely saved, maybe or not, with the driver or quote that justifies it.
- Weight likely saved at 70% and maybe at 30% (state the weights and let me change them), then sum the recovered pipeline.
- Note overlaps: deals two fixes would both save.
- Bound it: recovered wins can't lift a segment's win rate more than a margin you state above its trailing rate.

OUTPUT
A table per fix (deals likely saved, maybe, recovered pipeline range, overlap), a waterfall from actual to counterfactual bookings, and the board line: had we had this fix, we'd have recovered roughly this much on this many deals.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A deal counts as saved only when a driver, quote or loss reason supports it; never infer what the buyer would have done.
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
- Which competitor's win rate moved most this quarter, and on how many deals?
- Which loss reason is new to the top three compared with last quarter?
- How much lost pipeline this quarter came from out-of-profile deals?
- Did any competitor we lost to this quarter make a high-severity move in the same quarter?
- Which deal driver decided the most wins this quarter, with an evidence quote?
- Is the multi-threading win rate still ahead of single-threaded, by how much and on what n?
- Which headline number got worse while the rest of the scoreboard improved?

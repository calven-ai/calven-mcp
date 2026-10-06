# Board and exec updates


The board wants to know why the number moved. You walk in with the quarter's sales story: results against plan, why, the competitive picture, what enters next quarter and what the team commits to. Calven puts a source and a sample on every number and a buyer behind every why, so the slide is more than attainment and a list of excuses.

## Prompts

### Build the sales section of the board update

```
Using Calven MCP, build the sales section of the board update for the quarter below.

FILL IN
- Quarter: [quarter]

CONTEXT
Four slides, ten minutes, a board that asks why. Attainment and bookings I will add from finance. I want the why, the competitive picture, the pipeline shape and the product read, each with a source.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for the quarter against the prior quarter: win rate, competitive win rate, pipeline won and lost, with n.
- The top win and loss drivers and the force that decided most deals, with one verbatim each.
- Win rate per competitor and their notable moves in the quarter.
- Pipeline entering next quarter: in-profile share, segment mix, win rate by segment.
- Product gaps ranked by deals touched and the pricing verdicts.

BUILD
- Slide 1: the numbers and their movement, with n.
- Slide 2: why we won and why we lost, with the buyer's words.
- Slide 3: competitors: our rate against each, what they did, where we gained or lost ground.
- Slide 4: next quarter: pipeline shape, the gaps that threaten it, the three asks of the company.

OUTPUT
Slide titles, bullets and a source line per slide; speaker notes in three lines each.

GROUNDING
Use only dashboards, drivers and signals in the Universe. Cite n and the window on every rate. Never compute a rate from rows. If a figure is withheld by workspace settings, say so rather than estimating.
```

### Draft the win rate by competitor slide

```
Using Calven MCP, one slide for the board: our competitive landscape and win rate by competitor.

FILL IN
- Window: [time window, e.g. last quarter]

PULL FROM THE UNIVERSE
- Every tracked competitor with tier.
- Win rate against each in the window, with samples, and the trend.
- The one signal per competitor that matters.

OUTPUT
A table: competitor · tier · win rate (n) · trend · the move to know about. One line of takeaway.

GROUNDING
Use only the Universe, cited with samples. Mark competitors with too few deals as "not enough deals".
```

### Describe the pipeline going into the quarter

```
Using Calven MCP, describe the pipeline we take into the quarter below for the board.

FILL IN
- Quarter: [quarter]

PULL FROM THE UNIVERSE
- Open pipeline by segment, ICP tier and stage.
- Win rate for in-profile versus out-of-profile deals and by segment, with samples.
- Concentration: largest deals, segments, competitors in play.

OUTPUT
Five lines with figures and the one risk to name.

GROUNDING
Dashboard figures only, cited with n.
```

### Pick the buyer quotes behind wins and losses

```
Using Calven MCP, give me the three buyer quotes that explain our losses in the quarter below, and the three that explain our wins.

FILL IN
- Quarter: [quarter]

PULL FROM THE UNIVERSE
- Verbatims behind the top loss drivers and the top win drivers for the quarter.

OUTPUT
Six quotes with driver, deal segment and attribution as the workspace allows.

GROUNDING
Verbatim only, from the Universe.
```

## Advanced prompts

### Split the win-rate change into mix and rate

```
Split the quarter's win-rate change into mix (we worked different deals) and rate (we won more or less often on the same kind of deal). Use Calven MCP for the win rates and deal counts by segment.

FILL IN
- Quarter: [quarter]
- Comparison: [last quarter or the same quarter last year]
- Cut: [segment, deal size band, competitor or region]

CONTEXT
"Win rate fell four points" invites the wrong fix. If the mix moved toward harder segments, the team didn't get worse; the pipeline changed. The board needs to know which.

FROM CALVEN
- Win rate and deal count per segment for both periods from the ICP and win/loss dashboards, with n.
- The share of pipeline in profile for both periods.
- The top loss reasons in the segments that moved most.

MODEL
- Run a mix-rate decomposition: the change from deal share shifting across segments at the old win rates, and the change from win rates moving within each segment.
- Check for Simpson's paradox: a segment whose rate went up while the total went down.
- Flag segments with n under 15 as too small to read.
- If you can run code, compute it and draw a waterfall from last period's win rate to this one.

OUTPUT
The waterfall, a table per segment (share then and now, rate then and now, contribution), the one-line explanation for the board, and what we do about each component.

GROUNDING
Label every number as Calven (cited, with n) or computed by you, with the method. Use the dashboard rates and counts; don't rebuild them from deal rows.
```

### Debate whether it was the market or us

```
Run a structured debate on why the number moved: one side argues it was the market, the other argues it was execution, and a judge rules on the evidence. Use Calven MCP for the evidence both sides can cite.

FILL IN
- Quarter: [quarter]
- What moved: [the metric and the move, e.g. win rate down or cycle up]

CONTEXT
Every board update answers "was it the market or was it us?" whether it means to or not. Sales leaders lean toward the market, boards lean toward execution. I want the strongest version of each before I choose the story.

FROM CALVEN
- Competitive signals and trends from the quarter.
- Win rate per competitor and per segment, with n and the change against last quarter.
- Deal drivers by category (Competitive, Capability, Experience, Commercials) and the buyer quotes behind them.
- What buyers said about the sales team in surveys.

DEBATE
- The market side opens with its three strongest pieces of evidence. The execution side does the same.
- Each side rebuts the other once.
- The judge, a board member with an operator background, weighs the evidence, gives a split (for example 60% execution, 40% market) and says what would change the ruling.

OUTPUT
The debate in under 500 words, the ruling with the split, the evidence table, and the paragraph for the board update that reflects the ruling honestly.

GROUNDING
Label every number as Calven (cited, with n). Each side may only cite recorded evidence. The split is the judge's opinion; say so.
```

### Pre-register next quarter's predictions

```
Write down next quarter's predictions with probabilities, so the next board update starts by scoring them. Use Calven MCP for the baseline each prediction starts from.

FILL IN
- Next quarter: [quarter]
- Commitments to the board: [paste what we're committing to]

CONTEXT
Boards trust leaders whose calls come true. Predictions written down with probabilities and scored afterwards show calibration in a way a forecast slide can't.

FROM CALVEN
- Competitive win rate, win rate per top competitor, in-profile share of pipeline, average deal size and cycle, with n and the trend.
- Open deals against each top competitor.
- Competitor signals that could shift the numbers.

METHOD
- Write 8 to 10 predictions that can be checked next quarter, such as win rate against a named competitor staying above a stated level.
- Give each a probability. Start from the trend and the sample size; a rate on a small n gets a wider band.
- After the quarter, I paste the results and you compute the Brier score and a calibration line: of the calls I made at 70%, how many happened.

OUTPUT
The prediction list (prediction, baseline, probability, how it's checked), a one-slide version for the board, and the scoring template for next quarter.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The probabilities are ours; never present them as Calven forecasts.
```

## Ad hoc questions

- What is our competitive win rate this quarter versus last, with n?
- Against which competitor did our win rate fall most?
- What share of open pipeline is in profile?
- What did [competitor] do this quarter that we should tell the board?
- Which loss reason grew the most?
- Which product gap touched the most deals this year, and what is at stake?
- How do buyers rate our pricing: cheaper, on par or pricier?
- What is our win rate by deal size band?
- How many deals did the win/loss program cover this quarter?
- What are the three biggest movers across all dashboards this quarter?
- Which segment's win rate moved opposite to the overall rate this quarter?
- Which competitor cost us the most pipeline this quarter, and how much?
- How does the sales cycle for in-profile deals compare with out-of-profile ones?
- Which loss reason do buyers give in surveys that reps rarely record in the CRM?
- What did buyers say in the surveys on this quarter's biggest losses?
- Did the multi-threading win rate change this quarter, and on what n?

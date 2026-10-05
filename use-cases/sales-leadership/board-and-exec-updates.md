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

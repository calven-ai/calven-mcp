# Board and exec updates

**Team:** Sales leadership · also leadership, finance and investor relations, revenue operations
**Impact:** High. The board asks why the number moved; a slide with win rate by competitor and segment, pipeline in profile, and the top loss reasons in buyers' words, each with its source, answers the question before it is asked.
**Prerequisites:** CRM connected (deals, pipeline), win/loss surveys running (drivers, dashboards), competitors tracked. Better with ICP approved (in-profile share).

## What the team is trying to do

Give the CEO and the board the sales story of the quarter with evidence: what happened against plan, why, what the competitive picture is, what enters next quarter, and what the team commits to. Done means every number has a source and a sample, and every "why" has a buyer behind it. Without the company's data the slide is attainment and a list of excuses.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Attainment against plan | Bookings versus quota | Calven does not help here; quota and bookings live in the CRM and finance | |
| 2 | Win rate and movement | Overall and competitive, versus prior period | The scoreboard with comparison and n | Win/loss dashboard |
| 3 | Why | Top win and loss drivers, deciding forces | Drivers and the buyer's words | Win/loss dashboard, deal drivers |
| 4 | Competitive picture | Win rate per competitor, their moves | Competitive performance, showdown, signals | Competitive intelligence dashboard, competitive signals |
| 5 | Pipeline entering the quarter | Coverage, in-profile share, segment mix | ICP-fit pipeline, pipeline by segment, win rate by segment | ICP dashboard, CRM deals |
| 6 | Product and pricing | Gaps costing deals, price position | Product gaps with deals touched, pricing verdicts | Win/loss dashboard, overview |
| 7 | Commitments | What changes | Calven does not help here | |
| 8 | Build the slides | Four to six slides | The AI tool assembles with sources | |

## Recommended prompts

### Steps 2 to 6: the board slides

```
Using Calven MCP, build the sales section of the board update for [quarter].

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

[name the quarter]
```

### The CEO's one-slide question

```
Using Calven MCP, one slide for the board: our competitive landscape and win rate by competitor.

PULL FROM THE UNIVERSE
- Every tracked competitor with tier.
- Win rate against each in [window], with samples, and the trend.
- The one signal per competitor that matters.

OUTPUT
A table: competitor · tier · win rate (n) · trend · the move to know about. One line of takeaway.

GROUNDING
Use only the Universe, cited with samples. Mark competitors with too few deals as "not enough deals".

[name the window]
```

### Step 5: pipeline shape

```
Using Calven MCP, describe the pipeline we take into [quarter] for the board.

PULL FROM THE UNIVERSE
- Open pipeline by segment, ICP tier and stage.
- Win rate for in-profile versus out-of-profile deals and by segment, with samples.
- Concentration: largest deals, segments, competitors in play.

OUTPUT
Five lines with figures and the one risk to name.

GROUNDING
Dashboard figures only, cited with n.

[name the quarter]
```

### Step 3: the why, in buyers' words

```
Using Calven MCP, give me the three buyer quotes that explain our [quarter] losses, and the three that explain our wins.

PULL FROM THE UNIVERSE
- Verbatims behind the top loss drivers and the top win drivers for the quarter.

OUTPUT
Six quotes with driver, deal segment and attribution as the workspace allows.

GROUNDING
Verbatim only, from the Universe.

[name the quarter]
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

## Good practice

- Ask for four slides, not the whole deck. Attainment and bookings come from finance; the why and the picture come from Calven.
- Insist on n and the window on every rate. Boards remember a number; they trust a number with a sample.
- Keep the quotes verbatim and the attribution as the workspace allows. Deal names may be withheld by settings.
- Use the overview read for "what moved most" before building; it points to the story.
- Keep last quarter's three asks on the slide and report on them.

## Not covered today

- Bookings, quota, attainment, ARR and the forecast. Those come from the CRM, finance and the forecast tool.
- Building the actual slide file; the AI tool gives the content.
- Anything about competitors beyond what the competitive intelligence agent recorded.

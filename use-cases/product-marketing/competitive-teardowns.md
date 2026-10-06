# Competitive teardowns


You want to understand one competitor completely: what they sell and charge, how they position, what moved recently, and where each side wins. You walk away with a teardown document, an updated competitive position for the board, and a list of battlecard and roadmap changes. Calven brings the current dossier and the deal record, so the teardown is more than a tour of the rival's website.

## Prompts

### Pick the competitor for the next teardown

```
Using Calven MCP, tell me which competitor deserves the next teardown.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I can do one deep teardown this quarter. I want the rival that is costing us most or moving fastest.

PULL FROM THE UNIVERSE
- Competitive performance: deals, win rate and change per competitor for the window.
- Competitive signals in the window, by competitor, with severity.
- Which competitors have a battlecard and a deep dive, and how fresh each is.

BUILD
A table: competitor, tier, deals, win rate and change, loss reason we hit most, signals this period, freshness of our documents. Then your pick and why.

OUTPUT
The table and a three-line recommendation.

GROUNDING
Rates from the dashboard with n. Mark competitors below the floor. Freshness from the document dates.
```

### Build the full teardown

```
Using Calven MCP, build a teardown of the competitor below.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last quarter]

CONTEXT
The audience is the PMM, product and sales leadership. The output feeds the battlecard, the roadmap conversation and the board's competitive slide.

PULL FROM THE UNIVERSE
- The competitor's deep dive: company, product, pricing, positioning, strengths, weaknesses, feature comparison.
- Their signals in the window, newest first.
- Our win rate against them, the loss reasons, and the deals we lost and won against them with the buyer's reason.
- Customer quotes that mention them.

BUILD
- Who they are and what they sell, in one paragraph.
- What moved in the window and what it means for us.
- Where they beat us: the evidence from deals and quotes.
- Where we beat them: the evidence from deals and quotes.
- The three implications: for the story, for the product, for the field.

OUTPUT
A teardown document with sources per section; slides if I say deck.

GROUNDING
Ground every point in the Universe and cite the source and date. Do not invent moves, features or prices. Where the dossier is thin, say so.
```

### Compare product and pricing side by side

```
Using Calven MCP, compare us to the competitor below on product and pricing.

FILL IN
- Competitor: [competitor]

CONTEXT
Product and finance want an honest side by side.

PULL FROM THE UNIVERSE
- The feature comparison and the product section of the competitor's deep dive.
- Our product brief: capabilities, integrations, pricing and packaging.
- Their pricing and packaging section, and the deals where buyers compared price, with the verdict.

COMPARE
- A capability table: ours, theirs, who is ahead, whether buyers care (from deal drivers and quotes).
- A packaging table: tiers, what is included, list price where known.
- Where buyers found us pricier, on par or cheaper, with n.

OUTPUT
Two tables and five lines on what matters.

GROUNDING
Mark a cell "Unknown" when the dossier does not say. Price verdicts from the dashboard only, with n.
```

### Check the battlecard against the teardown

```
Using Calven MCP, check the competitor's battlecard against the teardown.

FILL IN
- Competitor: [competitor]
- Teardown: [paste the teardown]

CONTEXT
I want to know what in the battlecard is now wrong, missing or stale.

PULL FROM THE UNIVERSE
- The competitor's battlecard.

CHECK
- Each "how we win", "where we lose", landmine and objection entry: still true, now wrong, or missing evidence.
- Loss reasons from the teardown the battlecard does not address.
- Signals the battlecard predates.

OUTPUT
A change list for the battlecard: keep, change (with the new wording), add, remove.

GROUNDING
Judge only against the teardown and the Universe. Cite the evidence for each change.
```

### Draft the board's competitive slide

```
Using Calven MCP, write the board's competitive slide on the competitor below.

FILL IN
- Competitor: [competitor]
- Teardown: [paste the teardown]

CONTEXT
One slide, read in 90 seconds, built from the teardown.

BUILD
- Where we stand: win rate against them and change, with n.
- What they did this quarter, two lines.
- Where we win and where we lose, two lines each.
- What we are doing about it, three lines.

OUTPUT
The slide text and a speaker note.

GROUNDING
Numbers from the dashboard only. Nothing that is not in the teardown.
```

## Advanced prompts

### Build a payoff matrix for their next move

```
Model our next competitive move as a game: a payoff matrix of the rival's options against ours. Use Calven MCP for their pricing, their tempo of moves and the deals we fight them in.

FILL IN
- Competitor: [competitor]
- Our options: [list two to four moves we're weighing, e.g. match their entry price, double down on a pillar, target their install base]
- Deal economics: [paste the average discount, deal size or margin to use, or write "use Calven"]

CONTEXT
We keep reacting to this competitor. I want to choose our move knowing what they'll most likely do in response, and which of our moves still holds up whatever they choose.

FROM CALVEN
- Their dossier and battlecard: pricing and packaging, strengths, weaknesses, how they position against us.
- Their competitive signals over the last year, to infer their likely options and how fast they move.
- Win rate against them with n, and the loss reasons in deals they took.

MODEL
- List their three most plausible moves, each grounded in their signal history.
- Build the matrix: our options as rows, theirs as columns. In each cell estimate the change in our win rate against them and the pipeline effect, as a range.
- Find any dominant strategy for us, the likely equilibrium, and the regret of each choice if we guess their move wrong.
- Run a sensitivity on the cell estimates you're least sure of.
- If you can run code, build the matrix as a spreadsheet so I can change the payoffs.

OUTPUT
The payoff matrix, the recommended move with its worst case, and the signal that would tell us they've picked a different column.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Their options come from recorded signals and the dossier, not imagination. Mark every payoff as an estimate.
```

### Red-team us as their PMM

```
Write the battlecard the competitor's PMM uses against us, then show me where it beats ours. Use Calven MCP for our known weaknesses, buyers' complaints and our own battlecard.

FILL IN
- Competitor: [competitor]

CONTEXT
Our battlecard is written from our side. Their reps carry one too, and our reps walk into it blind. I want to read it before the next deal.

FROM CALVEN
- Our product brief's differentiators and known weaknesses, plus our pricing and packaging.
- Our battlecard and their dossier, including the claims we make about them.
- Lost deals against them with deal drivers and buyer quotes, and quotes where customers criticise us.

RED-TEAM
- Play their best PMM. Using only what a well-run competitor could know (public pricing, review themes, what their reps hear in deals), write their battlecard against us: why they win, our weaknesses, landmines to set, objection handling, a talk track.
- Make it as sharp as you can. Note which of our own records each attack is built from.
- Then switch sides. Compare their card with ours line by line: which attacks ours answers, which it ignores, and which of our claims about them their card would expose.

OUTPUT
Their battlecard on one page, then a gap table: their attack, how often buyers raised it, our current answer, the fix. Finish with the three edits our battlecard needs first.

GROUNDING
Every attack cites a Calven record (a known weakness, a driver, a quote) or is labelled your inference. Don't invent a weakness the Universe doesn't show, or a capability of theirs the dossier doesn't list.
```

### Map where to fight them and where to walk

```
Place every segment on a fight-or-walk 2x2 against the competitor, so sales stops spending cycles on deals we rarely win. Use Calven MCP for the win rates, the deals and the ICP fit.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last four quarters]
- Cost of a lost cycle: [rough hours or cost per qualified opportunity, or write "assume"]

CONTEXT
We meet this rival in most deals. In some segments we win, in others we bleed time and discount. I want a map leadership can turn into rules of engagement.

FROM CALVEN
- The competitive dashboard's fight-or-avoid read and our win rate against them, with n.
- Closed deals in the window where they competed, paged from the CRM mirror, with segment, size, ICP tier, amount, cycle length and outcome.
- The battlecard's "we win when" and "we lose when".

MODEL
- Group the deals by segment and size. For each cell compute win rate, deal count, average deal size and cycle length.
- Plot two axes: our win rate against them, and the value of the segment (pipeline weighted by ICP fit). Quadrants: fight, fight smarter, qualify out, ignore.
- Compute expected value per opportunity in each cell after the cost of a lost cycle.
- Check each quadrant against the battlecard's win and loss conditions and flag disagreements.
- If you can run code, draw the chart.

OUTPUT
The 2x2 with each segment placed, the table behind it, and three rules of engagement a rep can apply in qualification.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Mark any cell under five deals as too thin to place.
```

## Ad hoc questions

- What did [competitor] do in the last 90 days?
- What is our win rate against [competitor], and how did it move?
- Why do we lose to [competitor]? Quote the buyers.
- Why do we win against [competitor]?
- What does [competitor] charge, and how do buyers compare it to ours?
- Which of our customers mentioned [competitor] on calls, and what did they say?
- Where is [competitor] ahead of us on features, and do buyers care?
- Which deals are we fighting [competitor] in right now?
- Which competitor has the most signals this quarter?
- Is the [competitor] battlecard current? When was it updated?
- What traps does the dossier suggest for [competitor]?
- Which competitors have no battlecard yet?
- Which of their claims does the dossier flag as unsupported?
- Which analyst reports mention [competitor]?
- Which of [competitor]'s recent signals contradicts what our battlecard says about them?
- In which segment did our win rate against [competitor] fall most, with n?
- Which of our customers came from [competitor], and what made them switch?
- Which [competitor] weakness do buyers mention that the dossier doesn't list?
- Which [competitor] talking points do our own reps repeat on calls?
- Does any analyst finding contradict [competitor]'s positioning?

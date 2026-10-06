# Competitive technical comparisons


The technical buyer is building a comparison matrix, and the SE who hands them an honest one shapes the criteria. You get a feature-by-feature comparison the buyer can forward and you can defend, honest about where the competitor is ahead and framed on the criteria that decide deals. Calven grounds it in the dossier instead of your memory of a demo two years ago, so you don't lose trust on the first row the buyer checks.

## Prompts

### Build a sourced comparison against a competitor

```
Using Calven MCP, build a technical comparison against the competitor for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Persona: [persona of the technical buyer]
- Competitor: [competitor]
- Criteria: [the criteria the buyer named]

CONTEXT
The technical buyer at the account, who matches the persona, is building a matrix. They care about the criteria. I want an honest comparison I can send.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, architecture, known weaknesses.
- The competitor's deep dive: product, feature comparison, strengths, weaknesses, bullshit detector, and their moves in the last 90 days.
- What decided head-to-head deals against the competitor: drivers with rank, the buyers' words, and the win rate with n.
- The persona's canvas, to rank the criteria by what this buyer cares about.

BUILD
- The criteria: the buyer's, plus the two the record says decide these deals that the buyer has not listed.
- A row per criterion: us (brief section), them (dossier section), verdict (ahead, behind, tie, unknown), the buyer's quote where one exists.
- The honest summary: where they win, where we win, and the criterion that should decide it for this buyer.

OUTPUT
A comparison table with a source per cell, then a half-page narrative.

GROUNDING
Our side only from the brief; their side only from the dossier and signals, each cited with date. Mark "unknown" where the dossier is silent. Never claim a competitor weakness the dossier does not record.
```

### See what the competitor changed technically

```
Using Calven MCP, what has the competitor changed technically since the date below?

FILL IN
- Competitor: [competitor]
- Date: [date of your last comparison]

CONTEXT
I last compared us on the date. I want the diff before I reuse the matrix.

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date, by type, with sources.
- The feature comparison rows those signals touch.

BUILD
- Each move with its date and the comparison row it changes.

OUTPUT
A dated list of rows to update.

GROUNDING
Recorded signals only, cited.
```

### Check your comparison matrix

```
Using Calven MCP, check my comparison matrix against the competitor.

FILL IN
- Competitor: [competitor]
- Matrix: [paste the matrix]

CONTEXT
I built the matrix from memory. Flag every cell the Universe does not support.

PULL FROM THE UNIVERSE
- The product brief and the competitor's deep dive.

CHECK
- Each cell: supported, unsupported, contradicted, unknown.
- Cells where I overclaim for us or underclaim for them.

OUTPUT
The matrix annotated with a verdict per cell, then the corrected version.

GROUNDING
Only the brief and the dossier, cited. "Unknown" stays unknown.
```

### Find where the dossier is too thin

```
Using Calven MCP, where is the competitor's dossier too thin to compare?

FILL IN
- Competitor: [competitor]

CONTEXT
For the CI agent's next update request.

PULL FROM THE UNIVERSE
- The competitor's deep dive outline and the feature comparison.
- The criteria buyers raised in deals against the competitor, from quotes and drivers.

CHECK
- Criteria buyers raise that the feature comparison does not cover.
- Sections of the dossier marked unknown or stale.

OUTPUT
A list for the CI agent with the buyer evidence behind each gap.

GROUNDING
Only the Universe, cited. Do not fill the gaps from your own knowledge of the competitor.
```

## Advanced prompts

### Find the weights where you lose

```
Run a sensitivity analysis on a weighted comparison and find the criteria weights at which the competitor beats us. Use Calven MCP for both products' scores and what buyers weighted in real deals.

FILL IN
- Competitor: [competitor]
- Criteria and weights: [paste the buyer's evaluation criteria and weights, or the ones you expect]

CONTEXT
On the buyer's current weights we win. Weights move during an evaluation. I want to know how far they'd have to move before we lose, and which criterion is the hinge.

FROM CALVEN
- The dossier's feature comparison, strengths and weaknesses for the competitor.
- Our capabilities and known weaknesses from the product brief.
- Capability drivers from head-to-head deals, with outcome, to show what buyers really weighted.

MODEL
- Score both products on each criterion from 1 to 5, with the evidence behind every score.
- Compute the weighted total on the buyer's weights.
- For each criterion, find the break-even weight: how far it would have to rise or fall before the competitor wins. If you can run code, run a simulation over random weight sets and report how often we win.
- Name the hinge criterion and what the competitor will say to inflate it.

OUTPUT
The scored matrix, the break-even table, the share of weight sets we win, and the talk track to anchor the hinge criterion.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Scores cite the dossier or brief. Don't score a competitor capability the dossier doesn't record; mark it unknown.
```

### Forecast the rival's next technical move

```
Forecast what the competitor is likely to ship technically in the next two quarters, and what it does to our comparison. Use Calven MCP for their signal history and where they've been losing.

FILL IN
- Competitor: [competitor]

CONTEXT
I build comparisons for the product as it is, and they're out of date the week the competitor ships. I want a forecast with probabilities, so the answers are ready.

FROM CALVEN
- The competitor's signals over the last 12 months: launches, hires, messaging shifts, with dates.
- The dossier's product section, weaknesses and analyst standing.
- Deal drivers from deals they lost to us, which show where they're under pressure.

METHOD
- Build a base rate: how often they've shipped, in which areas, and how long from first signal (a hire, a messaging shift) to launch.
- List candidate moves. For each, estimate a probability for the next two quarters from the base rate and the leading signals, and show the reasoning.
- Score each move by impact on our comparison: which rows of the matrix it would flip.
- Name the early signals to watch for each move.

OUTPUT
A forecast table (move, probability, timing, matrix rows affected, early signal), the two moves to prepare for, and a draft answer for each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Probabilities are your forecasts, tied to dated signals. Don't invent a signal or a hire nobody recorded.
```

### Blind-test the matrix with a neutral judge

```
Blind-test my comparison matrix: strip the vendor names, let a neutral technical buyer judge it, and see whether it still reads as fair. Use Calven MCP for the persona and the facts to check every cell against.

FILL IN
- My matrix: [paste the comparison matrix]
- Competitor: [competitor]
- Judge: [technical buyer persona]

CONTEXT
A matrix where we win every row reads as a sales sheet and gets ignored. I want the buyer to trust it enough to forward it.

FROM CALVEN
- The persona canvas for the judge: goals, objections, what they need to believe.
- The dossier's feature comparison and bullshit detector for the competitor.
- The product brief's known weaknesses and our claims flagged with a concern.

METHOD
- Replace the vendor names with A and B. Play the judge reading it cold: which rows look slanted, which look padded, which they'd verify first.
- Fact-check every cell against the dossier and the brief: supported, overstated or unsupported.
- Score fairness 1 to 10 as the judge sees it, then the fact-check score.
- Rewrite the matrix with every overstated cell fixed and at least one honest row where the competitor leads.

OUTPUT
The judge's read in under 200 words, the cell-by-cell fact-check, both scores, and the rewritten matrix.

GROUNDING
Every fact-check cites the dossier, brief or a claim record. The judge's reaction is simulated from the canvas and labelled so. Don't invent a capability for either vendor.
```

## Ad hoc questions

- Where is [competitor] ahead of us technically, per the dossier?
- What does the feature comparison say about [capability]?
- What did [competitor] launch recently?
- What decided head-to-head deals against [competitor], and what is the win rate with n?
- What do buyers who evaluated both say about the difference?
- What does the bullshit detector say about [competitor]'s claim on [capability]?
- Does the dossier know [competitor]'s pricing?
- Which criterion should I steer the matrix toward for a [persona]?
- Where do we honestly lose to [competitor]?
- Which rows of the feature comparison are older than the competitor's last launch?
- What do buyers who chose [competitor] say they got that we didn't offer?
- Which of [competitor]'s technical claims does the bullshit detector flag, and is there buyer evidence either way?
- In deals we won against [competitor], which capability did the buyers name?
- Which analyst finding mentions [competitor]'s architecture?
- Does [competitor] win more often when a particular persona leads the evaluation?

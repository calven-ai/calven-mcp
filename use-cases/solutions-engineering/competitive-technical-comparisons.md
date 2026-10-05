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

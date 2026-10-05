# Competitive technical comparisons

**Team:** Solutions engineering · also account executives, product marketing
**Impact:** High. Technical buyers build the comparison matrix themselves; the SE who supplies an honest one shapes the criteria.
**Prerequisites:** competitors tracked (deep dive with feature comparison, battlecard), product brief approved. Better with win/loss surveys running (what decided head-to-heads), call transcripts ingested.

## What the team is trying to do

Give the technical buyer a feature-by-feature comparison that is honest about where the competitor is ahead, grounded in the dossier rather than the SE's memory of a demo two years ago, and framed around the criteria that decide deals rather than the ones the competitor's sales deck lists. Done means a comparison the buyer can forward and the SE can defend. Without the company's own record, comparisons overclaim and lose trust on the first row the buyer checks.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the criteria | The capabilities that matter to this buyer | Persona jobs and pains; the drivers that decided head-to-heads against this competitor | Persona canvas, deal drivers, win/loss surveys (head-to-head) |
| 2 | Our side | What the product does, per the brief | Product brief: capabilities, integrations, architecture, known weaknesses | Product brief |
| 3 | Their side | What the competitor does, per the dossier | Deep dive: product, pricing and packaging, strengths, weaknesses, feature comparison, bullshit detector | Deep dive |
| 4 | Recent moves | What changed on their side | Competitive signals: launches, pricing, messaging | Competitive signals |
| 5 | Honest verdicts | Where they are ahead, where we are, where it is a tie | "Where we lose" and strengths sections | Battlecard |
| 6 | The buyer's words | How evaluators described the difference | Quotes with competitor mention; drivers on deals against them | Quotes, deal drivers |
| 7 | Write it | The matrix and the narrative | A drafted comparison with sources per cell | All |
| 8 | Legal and factual review | Claims about a competitor | Calven does not help here beyond citing the dossier source; a human reviews | |

## Recommended prompts

### Step 1 to 7: the comparison

```
Using Calven MCP, build a technical comparison against [competitor] for [deal].

CONTEXT
The technical buyer at [account], a [persona], is building a matrix. They care about [the criteria they named]. I want an honest comparison I can send.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, architecture, known weaknesses.
- The [competitor] deep dive: product, feature comparison, strengths, weaknesses, bullshit detector, and their moves in the last 90 days.
- What decided head-to-head deals against [competitor]: drivers with rank, the buyers' words, and the win rate with n.
- The [persona] canvas, to rank the criteria by what this buyer cares about.

BUILD
- The criteria: the buyer's, plus the two the record says decide these deals that the buyer has not listed.
- A row per criterion: us (brief section), them (dossier section), verdict (ahead, behind, tie, unknown), the buyer's quote where one exists.
- The honest summary: where they win, where we win, and the criterion that should decide it for this buyer.

OUTPUT
A comparison table with a source per cell, then a half-page narrative.

GROUNDING
Our side only from the brief; their side only from the dossier and signals, each cited with date. Mark "unknown" where the dossier is silent. Never claim a competitor weakness the dossier does not record.

[name the deal, account, persona, competitor and the buyer's criteria]
```

### Step 4: what changed on their side

```
Using Calven MCP, what has [competitor] changed technically since [date]?

CONTEXT
I last compared us in [month]. I want the diff before I reuse the matrix.

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] since [date], by type, with sources.
- The feature comparison rows those signals touch.

BUILD
- Each move with its date and the comparison row it changes.

OUTPUT
A dated list of rows to update.

GROUNDING
Recorded signals only, cited.

[name the competitor and date]
```

### Review mode: check my matrix

```
Using Calven MCP, check my comparison matrix against [competitor].

CONTEXT
Below is the matrix I built from memory. Flag every cell the Universe does not support.

PULL FROM THE UNIVERSE
- The product brief and the [competitor] deep dive.

CHECK
- Each cell: supported, unsupported, contradicted, unknown.
- Cells where I overclaim for us or underclaim for them.

OUTPUT
The matrix annotated with a verdict per cell, then the corrected version.

GROUNDING
Only the brief and the dossier, cited. "Unknown" stays unknown.

[paste the matrix]
```

### Gap mode: where the dossier is thin

```
Using Calven MCP, where is the [competitor] dossier too thin to compare?

CONTEXT
For the CI agent's next update request.

PULL FROM THE UNIVERSE
- The [competitor] deep dive outline and the feature comparison.
- The criteria buyers raised in deals against [competitor], from quotes and drivers.

CHECK
- Criteria buyers raise that the feature comparison does not cover.
- Sections of the dossier marked unknown or stale.

OUTPUT
A list for the CI agent with the buyer evidence behind each gap.

GROUNDING
Only the Universe, cited. Do not fill the gaps from your own knowledge of [competitor].

[name the competitor]
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

## Good practice

- Keep their side strictly to the dossier. The SE's memory of a demo is not a source.
- Mark unknown cells unknown. The buyer will check one row; make sure it holds.
- Add the two criteria the record says decide deals. The buyer's list came from somewhere.
- Rerun the diff after each CI signal batch before reusing a matrix.
- Have a human review competitor claims before anything is sent outside.

## Not covered today

- Live competitor research, trials of the competitor's product, their current docs. The CI agent records what it finds in the app.
- Legal review of competitor claims.
- Publishing a comparison page. That is product marketing and the website.

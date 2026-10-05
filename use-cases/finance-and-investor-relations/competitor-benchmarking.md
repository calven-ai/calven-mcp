# Competitor benchmarking


The board or a new round wants the competitor comparison again, and you'd rather not rebuild it from memory. You get one table of tracked rivals (size and funding where recorded, pricing model and price points, packaging, analyst standing, recent moves, our win rate against each) with a source and date per cell and an honest "unknown" where the dossier is silent. Calven's dossiers already hold most of it, so you can say when each price point was last checked.

## Prompts

### Build the competitor benchmark table

```
Using Calven MCP, build a competitor benchmark table for the audience below.

FILL IN
- Audience: [where this goes: the board pack, the fundraising deck or the annual plan]
- Window: [time window for signals, e.g. last 12 months]

CONTEXT
This goes into the document named above. One row per competitor, a source and date per cell, "unknown" where the dossier is silent.

PULL FROM THE UNIVERSE
- Every Tier 1 and Tier 2 competitor: description, categories, size.
- From each dossier: company snapshot, pricing and packaging, analyst and market standing.
- Competitive signals in the window per competitor, with severity and date.
- Our win rate against each, with n, and the top loss reason against each.

BUILD
- A table: competitor, tier, size, pricing model and price points, packaging, analyst standing, last significant move and date, our win rate (n), top loss reason.
- A notes page: the two rivals moving fastest, and the one whose dossier is thinnest.

OUTPUT
The table and the notes, with sources.

GROUNDING
Use only competitor rows, dossiers, signals and dashboards in the Universe and cite each with its date. Write "unknown" rather than estimating. Do not add a competitor we do not track.
```

### List what moved since the last refresh

```
Using Calven MCP, list the competitor moves since the date below that change our benchmark.

FILL IN
- Date: [date]

CONTEXT
I refresh the benchmark table each quarter. I only want what changed.

PULL FROM THE UNIVERSE
- Competitive signals since the date, by competitor, with signal type, severity, summary, "so what" and source.
- Any pricing or packaging change among them.

BUILD
- A list by competitor: the move, the date, what it changes in the table.

OUTPUT
The list with sources.

GROUNDING
Use only recorded signals and cite each. Do not infer a move the feed does not carry.
```

### Check a competitor slide against the dossiers

```
Using Calven MCP, check this competitor slide against our dossiers.

FILL IN
- Slide: [paste the slide text]

CONTEXT
The slide is our competitor comparison slide. I want every cell verified or flagged.

PULL FROM THE UNIVERSE
- The dossiers and signals for each competitor on the slide.
- The competitive intelligence dashboard for the window.

CHECK
- Mark each cell verified (with source and date), stale, or not in the dossier.
- Flag any win rate that does not match the dashboard.

OUTPUT
The slide annotated, then the corrected version.

GROUNDING
Judge only against the Universe and cite each flag. Do not fill a blank cell from your own knowledge.
```

## Ad hoc questions

- Which competitors do we track, and what tier is each?
- What is [competitor]'s pricing model and when did the dossier last record it?
- How big is [competitor], according to their dossier?
- What do analysts say about [competitor]?
- What has [competitor] done in the last 90 days?
- What is our win rate against each Tier 1 competitor?
- Which competitor raised money this year, per our signals?
- Which dossier is thinnest, so I know where the table will have gaps?
- Is there an analyst finding that ranks us against [competitor]?

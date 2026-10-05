# Competitor benchmarking

**Team:** Finance and investor relations · also leadership, product marketing
**Impact:** Medium. Investors and the board ask for the comparison every round and every plan. The dossiers already hold pricing, packaging, funding and analyst standing per rival; finance needs it as one table with dates.
**Prerequisites:** competitors tracked (rows, dossiers, signals). Better with win/loss surveys running (win rate per rival) and analyst reports uploaded.

## What the team is trying to do

Produce a benchmark table of tracked rivals for the fundraise, the plan or the board: company size and funding where recorded, pricing model and price points, packaging, analyst standing, recent moves, and our win rate against each. Done means one table with a source and date per cell and an honest "unknown" where the dossier is silent. Without the company's own knowledge the table is rebuilt from memory each time and nobody can say when a price point was last checked.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the set | Which rivals matter for this audience | Competitor rows by tier and category | Competitors |
| 2 | Company facts | Size, funding, footprint | Company Snapshot and At-a-glance sections of each dossier | Competitor deep dives |
| 3 | Pricing and packaging | Model, tiers, price points | Pricing & Packaging section per dossier; pricing signals | Competitor deep dives, competitive signals |
| 4 | Analyst standing | Where analysts place them | Analyst & Market Standing section; analyst findings naming them | Competitor deep dives, analyst findings |
| 5 | Recent moves | Launches, pricing changes, hires, funding | Competitive signals by competitor, severity and date | Competitive signals |
| 6 | Head to head | How we do against each | Win rate per competitor, fight or avoid, loss reasons | Competitive intelligence dashboard |
| 7 | Assemble | One table, one page of notes | A draft table with source and date per cell | All of the above |
| 8 | Financial comparables | Revenue multiples, public comps | Calven does not help here | |

## Recommended prompts

### Steps 1 to 6: the benchmark table

```
Using Calven MCP, build a competitor benchmark table for [the audience].

CONTEXT
This goes into [the board pack / the fundraising deck / the annual plan]. One row per competitor, a source and date per cell, "unknown" where the dossier is silent.

PULL FROM THE UNIVERSE
- Every Tier 1 and Tier 2 competitor: description, categories, size.
- From each dossier: company snapshot, pricing and packaging, analyst and market standing.
- Competitive signals in [window] per competitor, with severity and date.
- Our win rate against each, with n, and the top loss reason against each.

BUILD
- A table: competitor, tier, size, pricing model and price points, packaging, analyst standing, last significant move and date, our win rate (n), top loss reason.
- A notes page: the two rivals moving fastest, and the one whose dossier is thinnest.

OUTPUT
The table and the notes, with sources.

GROUNDING
Use only competitor rows, dossiers, signals and dashboards in the Universe and cite each with its date. Write "unknown" rather than estimating. Do not add a competitor we do not track.

[name the audience and the window]
```

### Step 5: what moved this period

```
Using Calven MCP, list the competitor moves since [date] that change our benchmark.

CONTEXT
I refresh the benchmark table each quarter. I only want what changed.

PULL FROM THE UNIVERSE
- Competitive signals since [date], by competitor, with signal type, severity, summary, "so what" and source.
- Any pricing or packaging change among them.

BUILD
- A list by competitor: the move, the date, what it changes in the table.

OUTPUT
The list with sources.

GROUNDING
Use only recorded signals and cite each. Do not infer a move the feed does not carry.

[name the date]
```

### Step 7: review a benchmark slide

```
Using Calven MCP, check this competitor slide against our dossiers.

CONTEXT
Below is the competitor comparison slide. I want every cell verified or flagged.

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

[paste the slide text]
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

## Good practice

- Ask for the date with every cell. A benchmark without dates is a liability in front of investors.
- Keep "unknown" in the table. It is more credible than a guess and it tells the competitive intelligence agent what to research next.
- Limit the set to the rivals the audience will ask about. Tier 1 for the board, Tier 1 and 2 for diligence.
- Refresh with the "what moved" prompt rather than rebuilding each quarter.

## Not covered today

- Public financials, valuation and revenue multiples.
- Live competitor websites and news. The competitive intelligence agent records signals in the app.
- Rivals not yet tracked. Add them in Calven first.

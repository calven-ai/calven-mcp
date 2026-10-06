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

## Advanced prompts

### Score rivals on a weighted threat index

```
Build a weighted threat index for our tracked competitors and test how stable the ranking is when the weights change. Use Calven MCP for each rival's dossier, signals and our win rate against them.

FILL IN
- Weights: [your weights for each factor, or write "propose them"]
- Purpose: [e.g. the board slide, the plan, the fundraise]

CONTEXT
"Who's our biggest threat" gets a different answer from sales, product and the board. A scored index with explicit weights ends that, and the sensitivity check shows whether the answer depends on the weights.

FROM CALVEN
- Every tracked competitor with tier and size.
- Each one's dossier: Company Snapshot, Pricing & Packaging, Analyst & Market Standing, Strengths.
- Competitive signals over the last two quarters, by type and severity.
- Win rate against each and how often each appears in deals, from the competitive dashboard, with n.

BUILD
- Factors: deal frequency, our win rate against them (inverted), momentum (signal count and severity), funding and size, analyst standing, pricing pressure.
- Score each 1 to 5 with the evidence in one line. Apply weights.
- If you can run code, build it as a spreadsheet with weights as inputs, and run a sensitivity: shift each weight by 50% and record rank changes.

OUTPUT
The index table with scores and evidence, the ranking, the sensitivity (which ranks are stable and which flip), and a one-slide version.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A factor with no evidence scores as unknown, not 3.
```

### Forecast each rival's next move with odds

```
Make calibrated forecasts of what each Tier 1 competitor does next quarter, with probabilities I can score later. Use Calven MCP for each rival's signal history and current position.

FILL IN
- Competitors: [competitors to cover, or write "all Tier 1"]
- Questions: [anything specific, e.g. will they cut price, raise, launch an AI tier]

CONTEXT
The plan assumes competitors stand still. They won't. I want explicit, scorable predictions so next quarter we can see who called it, and the plan can price in the likely moves.

FROM CALVEN
- Each competitor's signals over the last year: type, severity, date, summary, so-what.
- The dossier's Signals & News and Pricing & Packaging sections.
- Trends and market opportunities that would push them toward a move.

METHOD
- For each competitor, write five yes-or-no questions about next quarter (pricing, product, funding, hiring, positioning), plus mine.
- Estimate a probability for each, superforecaster style: start from the base rate of that move type in their signal history, then adjust for current evidence. Show both numbers.
- Note what would change the forecast.
- If you can run code, save the forecasts as a CSV with a column for the outcome, ready to compute a Brier score next quarter.

OUTPUT
A forecast table (competitor, question, base rate, forecast, reasoning, update trigger), the three moves most likely to affect our plan, and the CSV.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Base rates come from recorded signals; if a rival has fewer than five signals, say the forecast is weak.
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
- Which competitor has the most high-severity signals this year?
- Which rival appears in the most deals, and how does our win rate against them trend?
- What does each Tier 1 battlecard say we lose on?
- Which competitor's pricing is listed as unknown in their dossier?
- Which dossier's Sources & Freshness section is oldest?
- Which competitor do buyers mention most on calls, positively or negatively?

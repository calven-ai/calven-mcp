# Market sizing input


You're redoing TAM, SAM and SOM for the plan or the round, and the last top-down number came from a report nobody has read since. You get an assumption table with a source per row and a clear line between measured and directional. Calven brings the segments and verticals the ICP names, the opportunities that carry sizing, what analysts measured and the trends that make the timing credible.

## Prompts

### Build the market sizing assumption table

```
Using Calven MCP, build the assumption table for our market sizing.

FILL IN
- Purpose: [the plan or the round]
- Product: [product, or leave blank for all]

CONTEXT
I am sizing the market for the purpose above. I need every qualitative and measured input we hold, with a source and a confidence level, before I do the arithmetic.

PULL FROM THE UNIVERSE
- The market category, frame of reference and best-fit customer characteristics from our positioning.
- Segment tiers, priority and secondary verticals, disqualifiers from our ICP.
- Analyst findings with a metric: publisher, report, period, value and unit.
- Market opportunities with sizing, sizing tier, timeline and status.
- Trends with severity High, their horizon and last seen date.

BUILD
- A table: assumption, value or statement, source, measured or directional, last seen.
- A list of the inputs we do not hold and would need from outside.

OUTPUT
The table and the gap list.

GROUNDING
Use only positioning, ICP, analyst findings, opportunities and trends in the Universe and cite each. Do not compute a TAM. Mark anything without a metric as directional.
```

### Pull our segment mix for a bottom-up check

```
Using Calven MCP, give me our own segment mix for a bottom-up sizing check.

FILL IN
- Window: [time window, e.g. last four quarters]

CONTEXT
I want to compare the top-down market to what we actually sell into.

PULL FROM THE UNIVERSE
- CRM accounts by industry, account size, region and ICP fit tier, with counts.
- Average deal size and sales cycle by segment from the ICP dashboard, with n.
- Won deals by segment in the window.

BUILD
- A table: segment, accounts, won deals, average deal size, n.
- The segments where we win that the ICP does not name as priority, and the reverse.

OUTPUT
The table and the two lists.

GROUNDING
Use CRM rows for counts and the dashboard for rates and averages, cited. Say where amounts are withheld.
```

### Check the sizing narrative against our research

```
Using Calven MCP, check this market sizing narrative against our research.

FILL IN
- Sizing section: [paste the sizing section]

CONTEXT
The sizing section is from our plan. I want every claim matched to a source we hold or flagged as unsupported.

PULL FROM THE UNIVERSE
- Analyst findings, opportunities and trends.
- The ICP's segment and vertical definitions.

CHECK
- Mark each claim supported (with the source), directional, or unsupported.
- Flag any segment the narrative counts that the ICP disqualifies.

OUTPUT
The narrative annotated inline, then the list of unsupported claims.

GROUNDING
Judge only against the Universe and cite each flag. Do not supply numbers from your own knowledge.
```

## Advanced prompts

### Triangulate the market three ways

```
Size our market three independent ways (top-down, bottom-up and value-based) and reconcile them, so the number survives an investor who checks. Use Calven MCP for the analyst figures, our account mix and the value buyers say they get.

FILL IN
- Market definition: [the category and geography you're sizing]
- Account universe: [paste or attach a count of companies by size and vertical in your geography, from a data provider]
- ACV: [your average contract value by segment, if not using Calven's deal size]

CONTEXT
A single TAM number from one analyst report won't hold up in diligence. Three methods that land near each other will, and where they disagree tells me which assumption to defend.

FROM CALVEN
- Analyst findings with a market size or growth metric: publisher, report, period, value, excerpt.
- The ICP's Firmographic Attributes, Priority Verticals and Disqualifiers, to filter the account universe.
- Average deal size by segment from the ICP dashboard, with n.
- Customer quotes tagged Quantified outcome, for the value-based method.

MODEL
- Top-down: the analyst figure, narrowed to our category and geography with stated cuts.
- Bottom-up: in-ICP companies from my universe × ACV by segment.
- Value-based: the outcome buyers report, priced at a labelled share of value captured, across the in-ICP count.
- Reconcile: show the three side by side, the ratio between them and the assumption that explains the biggest gap.

OUTPUT
A table of the three methods with every input and its source, the reconciled range for TAM and SAM, and the sentence for the deck.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Analyst figures keep their publisher and period. If no analyst finding carries a size, say the top-down method can't run on Calven data.
```

### Turn the SOM into a range with a tornado

```
Turn our serviceable obtainable market into a probability range and show which assumption moves it most. Use Calven MCP for the win rates, deal sizes and segment counts that feed the SOM.

FILL IN
- SOM model: [paste the current SOM calculation and its inputs]
- Horizon: [e.g. three years]

CONTEXT
A SOM is a stack of guesses multiplied together, presented as one number. A range with the biggest drivers named is more honest and more useful when the board asks how confident we are.

FROM CALVEN
- Count of Tier 1 and Tier 2 accounts in the CRM by segment.
- Win rate, average deal size and sales cycle by segment from the ICP dashboard, with n and the prior period.
- Market opportunities with sizing tier and timeline, for any expansion the SOM assumes.

MODEL
- Give each input a low, likely and high value. Use Calven rates and their prior period for the spread where they exist; label the rest.
- If you can run code, run a Monte Carlo with 10,000 draws using triangular distributions and report P10, P50, P90.
- Build a tornado chart: swing each input from low to high with the others at likely, and rank by effect.
- Show what the SOM is if the top input sits at its low end.

OUTPUT
The distribution, the tornado chart (or ranked table), and a two-line statement of the SOM as a range with its biggest driver named.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't widen or narrow a Calven rate's range without saying why.
```

## Ad hoc questions

- What market category do we claim in our positioning?
- Which analyst findings carry a market size or growth number? Give me publisher, period and value.
- Which opportunities have a sizing tier, and what is the timeline on each?
- What are our priority verticals and which are blacklisted?
- Which trends are rated High severity, and when were they last seen?
- How many of our accounts are mid-market versus enterprise?
- What is our average deal size by segment?
- Which opportunity has the biggest sizing, and what is the "so what"?
- Is there any analyst finding about [vertical]?
- Which analyst finding gives a growth rate for our category, and from which year?
- Which trends have a horizon beyond two years?
- How many Tier 1 accounts are in each priority vertical?
- Which market opportunity's sizing is most out of date?
- What share of our won deals came from secondary verticals?
- Which regions do our won deals come from, and how does that match the ICP?

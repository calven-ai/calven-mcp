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

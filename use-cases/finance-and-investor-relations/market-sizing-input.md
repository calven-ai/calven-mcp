# Market sizing input

**Team:** Finance and investor relations · also leadership, product marketing
**Impact:** Medium. Sizing is redone per plan and per round. The opportunities, trends and analyst findings Calven tracks are the qualitative half the model needs, with sources an investor can check.
**Prerequisites:** market research run (opportunities, trends, market signals), analyst reports uploaded. Better with CRM connected (segment mix) and strategy documents approved (ICP segments and verticals).

## What the team is trying to do

Build the assumptions behind TAM, SAM and SOM with evidence: which segments and verticals the ICP names, which opportunities carry sizing, what analysts measured, which trends make the timing credible. Done means an assumption table with a source per row and a clear line between measured and directional. Without the company's own knowledge the sizing is a top-down number from a report nobody has read since the last round.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the market | The category, segments and verticals we count | Market category and frame of reference from positioning; segment tiers and priority verticals from the ICP | Positioning, ICP document |
| 2 | Gather measured data | Analyst numbers on market size and growth | Analyst findings with publisher, report, metric value and unit, excerpt | Analyst findings |
| 3 | Gather opportunity sizing | Which tracked opportunities carry sizing and timing | Opportunities with sizing, sizing tier, timeline, status, "so what" | Market opportunities |
| 4 | Timing and trends | Why now, which trends drive adoption | Trends with severity, horizon, last seen; the "why now" section of positioning | Trends, positioning |
| 5 | Bottom-up check | Our own segment mix and deal sizes | Accounts by industry, size, region; average deal size by segment | CRM accounts, ICP dashboard |
| 6 | Build the model | TAM, SAM, SOM arithmetic | Calven does not help here | |
| 7 | Write the assumptions page | One row per assumption with source and confidence | A draft table grounded in steps 1 to 5 | All of the above |

## Recommended prompts

### Steps 1 to 4: the assumption table

```
Using Calven MCP, build the assumption table for our market sizing.

CONTEXT
I am sizing the market for [the plan or the round]. I need every qualitative and measured input we hold, with a source and a confidence level, before I do the arithmetic.

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

[name the plan or round, and the product if we scope]
```

### Step 5: bottom-up check

```
Using Calven MCP, give me our own segment mix for a bottom-up sizing check.

CONTEXT
I want to compare the top-down market to what we actually sell into.

PULL FROM THE UNIVERSE
- CRM accounts by industry, account size, region and ICP fit tier, with counts.
- Average deal size and sales cycle by segment from the ICP dashboard, with n.
- Won deals by segment in [window].

BUILD
- A table: segment, accounts, won deals, average deal size, n.
- The segments where we win that the ICP does not name as priority, and the reverse.

OUTPUT
The table and the two lists.

GROUNDING
Use CRM rows for counts and the dashboard for rates and averages, cited. Say where amounts are withheld.

[name the window]
```

### Step 7: review the sizing narrative

```
Using Calven MCP, check this market sizing narrative against our research.

CONTEXT
Below is the sizing section of our plan. I want every claim matched to a source we hold or flagged as unsupported.

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

[paste the sizing section]
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

## Good practice

- Separate measured from directional in the prompt and keep the label in the output.
- Check last seen on trends. A trend the agent stopped seeing is not a growth driver.
- Use the ICP's disqualifiers to shrink the count, not just the priority verticals to grow it.
- Keep the arithmetic in the spreadsheet; ask Calven for inputs and sources only.

## Not covered today

- TAM, SAM and SOM arithmetic and the model.
- Market data Calven has not ingested. Upload the analyst report in the app first.
- Live web research on market size.

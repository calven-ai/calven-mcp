# Annual planning and offsites

**Team:** Leadership · also RevOps, product marketing, finance, chief of staff
**Impact:** High. Planning sessions run on the market and customer picture the team carries in its head. Calven turns that into pre-reads: where we win, which segments convert, what the market is doing, what customers say, and where the plan's assumptions are not supported by evidence.
**Prerequisites:** win/loss surveys running, CRM connected (ICP and segment win rates), competitors tracked, market research run. Strategy documents approved for the current ICP and positioning.

## What the team is trying to do

Decide next year's bets: which segments, which products, which competitors to take on, what to stop. Done means pre-reads per planning question with the evidence, a list of assumptions the evidence does not support, and the questions for the offsite. The financial model, headcount plan and budget stay with finance.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Frame the questions | The five to eight decisions the plan must make | The Insights overview: what moved, what is thin | Insights overview |
| 2 | Where we win | Segments, personas, attributes with the best win rates | ICP dashboard: win predictors, expansion recommendations; persona dashboard | ICP dashboard, persona dashboard |
| 3 | Where we lose | Competitors, loss reasons, product gaps | Competitive and win/loss dashboards; product gaps | Competitive intelligence dashboard, win/loss dashboard, Insights overview |
| 4 | The market | Trends and opportunities with sizing and timeline | Market research dashboard; trends; opportunities; analyst findings | Trends, market opportunities, analyst findings |
| 5 | The customer | What customers say and want | Voice-of-customer dashboard; themes | Themes, quotes |
| 6 | Test the assumptions | Which plan assumptions the evidence supports | Each assumption against the dashboards and documents | All of the above |
| 7 | Write the pre-reads | One per question | The assembled evidence | |
| 8 | Run the offsite | Decide | Calven does not help here | |
| 9 | Update the strategy documents | ICP, positioning for the new year | Calven does not edit from the AI tool; the ICP and positioning agents revise in Calven with PMM approval | |

## Recommended prompts

### Step 2 and 3: where we win and lose

```
Using Calven MCP, give me the where-we-win and where-we-lose pre-read for annual planning.

CONTEXT
The planning question is which segments and competitors to prioritise next year. I need the evidence from this year's deals.

PULL FROM THE UNIVERSE
- The ICP read for [window]: win rate by attribute and segment, the predictive attributes, expansion recommendations, ICP share of wins.
- The persona read: win rate by persona, multi-threading effect.
- The competitive read: win rate per competitor, loss reasons per competitor, fight or avoid.
- The product gaps ranked by deals at stake.

BUILD
- Where we win: the segments, attributes and personas with the highest win rates and their samples.
- Where we lose: the competitors and loss reasons that cost the most pipeline.
- The expansion candidates the ICP read suggests, with their evidence.
- The gaps that cost the most.

OUTPUT
A three-page pre-read with every figure sourced and sampled.

GROUNDING
Use only dashboard figures and drivers from the Universe. Rates come from the dashboards with n. Where a segment has too few deals, say so instead of showing a rate.

[name the window]
```

### Step 4: the market pre-read

```
Using Calven MCP, write the market pre-read for the planning offsite.

CONTEXT
The team needs a synthesized read on the market: the shifts, the opportunities and what each means for next year's plan.

PULL FROM THE UNIVERSE
- Trends with severity and horizon and their so-what.
- Market opportunities with impact, sizing and timeline.
- Analyst findings from this year.
- The relevant market trends section of our positioning.

BUILD
- The state of the market in one paragraph.
- The three shifts with the most severity and what each implies.
- The opportunities ranked by impact, with sizing where recorded.
- Where the evidence is thin.

OUTPUT
A two-page pre-read with sources and dates.

GROUNDING
Use only trends, opportunities and findings in the Universe, cited. Mark sizing as directional where the record says so. Do not add trends from your own knowledge.

[name any market the offsite will focus on]
```

### Step 6: test the plan's assumptions

```
Using Calven MCP, test the assumptions in the draft plan against our evidence.

CONTEXT
Below are the assumptions the draft plan rests on (segment growth, win rates, competitor behaviour, customer demand). I want each one marked supported, contradicted or not covered.

PULL FROM THE UNIVERSE
- The dashboards, documents and records relevant to each assumption.

CHECK
- For each assumption: the evidence, the verdict, the sample.
- The assumptions with no evidence at all.

OUTPUT
An assumptions table.

GROUNDING
Use only the Universe, cited. Do not supply market facts from your own knowledge. "Not covered" is a valid verdict.

[paste the assumptions]
```

### Step 7: the offsite question list

```
Using Calven MCP, write the discussion questions for the offsite from the pre-reads.

CONTEXT
Below are the pre-reads. I want the questions that the evidence forces, not generic strategy questions.

PULL FROM THE UNIVERSE
- Anything in the pre-reads that needs a fresh figure.

BUILD
- Eight questions, each tied to a finding and the decision it implies, with what we would need to believe to answer yes.

OUTPUT
The question list.

GROUNDING
Tie every question to a cited finding.

[paste the pre-reads]
```

## Ad hoc questions

- Which segment had the best win rate this year, and on how many deals?
- Which attributes predict a win?
- Where does the ICP read suggest we expand?
- Which competitor cost us the most pipeline?
- What are the top loss reasons this year?
- Which trends have a horizon inside next year?
- Which opportunities have the highest impact and sizing?
- What share of the pipeline is in profile?
- Which personas sit on won deals most often?
- What are the top customer themes this year?
- Which assumptions in last year's plan did the deals bear out?

## Good practice

- Ask for the same pre-reads each year with a twelve-month window. The comparison is the point.
- Test the assumptions before the offsite, not after. "Not covered" tells you what to go find.
- Keep the financial model separate. Calven gives the market and customer side.
- Ask for samples on every segment rate; expansion recommendations in particular rest on small numbers.
- Ingest the offsite notes afterwards so decisions are in the Universe for next year.

## Not covered today

- The financial model, budget, headcount plan.
- Editing the ICP, positioning or messaging. The agents revise them in Calven with PMM approval.
- Market data Calven has not gathered. The market research agent runs in Calven.

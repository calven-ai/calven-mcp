# Annual planning and offsites


You're deciding next year's bets: which segments, which products, which competitors to take on, what to stop. You walk into the offsite with a pre-read per planning question, a list of the plan's assumptions the evidence doesn't support, and the questions to put to the room. Calven turns the market and customer picture the team carries in its head into evidence; the financial model, headcount plan and budget stay with finance.

## Prompts

### Write the where-we-win-and-lose pre-read

```
Using Calven MCP, give me the where-we-win and where-we-lose pre-read for annual planning.

FILL IN
- Window: [time window, e.g. last four quarters]

CONTEXT
The planning question is which segments and competitors to prioritise next year. I need the evidence from this year's deals.

PULL FROM THE UNIVERSE
- The ICP read for the window: win rate by attribute and segment, the predictive attributes, expansion recommendations, ICP share of wins.
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
```

### Write the market pre-read

```
Using Calven MCP, write the market pre-read for the planning offsite.

FILL IN
- Market: [market the offsite will focus on, or leave blank for all]

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
```

### Test the plan's assumptions against the evidence

```
Using Calven MCP, test the assumptions in the draft plan against our evidence.

FILL IN
- Assumptions: [paste the assumptions]

CONTEXT
The assumptions are what the draft plan rests on (segment growth, win rates, competitor behaviour, customer demand). I want each one marked supported, contradicted or not covered.

PULL FROM THE UNIVERSE
- The dashboards, documents and records relevant to each assumption.

CHECK
- For each assumption: the evidence, the verdict, the sample.
- The assumptions with no evidence at all.

OUTPUT
An assumptions table.

GROUNDING
Use only the Universe, cited. Do not supply market facts from your own knowledge. "Not covered" is a valid verdict.
```

### Draft the offsite discussion questions

```
Using Calven MCP, write the discussion questions for the offsite from the pre-reads.

FILL IN
- Pre-reads: [paste the pre-reads]

CONTEXT
I want the questions that the evidence forces, not generic strategy questions.

PULL FROM THE UNIVERSE
- Anything in the pre-reads that needs a fresh figure.

BUILD
- Eight questions, each tied to a finding and the decision it implies, with what we would need to believe to answer yes.

OUTPUT
The question list.

GROUNDING
Tie every question to a cited finding.
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

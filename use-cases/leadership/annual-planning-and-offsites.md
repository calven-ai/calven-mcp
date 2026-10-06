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

## Advanced prompts

### Reverse-engineer the plan from the number

```
Work backwards from next year's revenue target to the pipeline, deals and sellers it takes, and show me where the plan is short. Use Calven MCP for our real win rates, deal sizes and cycle lengths by segment.

FILL IN
- Revenue target: [next year's new bookings target]
- Segment split: [planned share of bookings per segment]
- Sales capacity: [paste the headcount plan: reps, start dates, ramp months, quota]
- Pipeline sources: [paste last year's pipeline created by source, or write "none"]

CONTEXT
The plan states a number and a headcount. Nobody has checked whether the funnel between them closes at the conversion rates we actually have.

FROM CALVEN
- Win rate, average deal size and sales cycle per segment from the ICP dashboard, with n.
- In-profile accounts per segment in the CRM, by ICP tier, and how many have had a deal.
- The share of pipeline in profile and the pipeline gap from the ICP dashboard.

MODEL
- For each segment, run the funnel backwards: bookings to won deals to opportunities to pipeline to accounts touched, with the cycle length setting when the pipeline has to exist.
- Layer the hiring plan with ramp to get capacity by quarter, and compare it with the deals required.
- Check the accounts required against the in-profile accounts we hold. Flag any segment that would need more than half its addressable base.
- If you can run code, build it as a spreadsheet with every input on one tab, so I can change a number and watch the gap move.

OUTPUT
A gap table by segment and quarter (pipeline needed, pipeline plausible, capacity, shortfall), then the three levers that close the gap cheapest and the size of each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Where a segment's n is under 20, use a range and say so. Don't invent a conversion rate I didn't give you.
```

### Map where to play next year

```
Map every segment we could pursue next year on one 2x2 and tell me which to double down on, fix, harvest or drop. Use Calven MCP for win rates, account whitespace and competitive pressure by segment.

FILL IN
- Candidate segments: [list them, or write "use the ICP's tiers and verticals"]
- Axes: [default: ability to win versus room to grow]
- Constraint: [budget or headcount we can move between segments]

CONTEXT
The offsite will argue about segments from memory. I want one picture everybody argues from instead.

FROM CALVEN
- Win rate, deal size, cycle and the predictive attributes by segment from the ICP dashboard, with n.
- In-profile accounts per segment and how many have never had a deal.
- Which competitors show up in each segment's deals, and our win rate against them from the competitive dashboard.
- Trends and market opportunities that name these segments.

METHOD
- Score each segment on ability to win (win rate, competitor pressure, fit) and room to grow (unworked accounts, deal size, trend tailwind). Show the formula and the weights.
- Plot them. If you can run code, draw the chart with bubble size as current pipeline.
- Run a weight sensitivity: which segments change quadrant when the weights change? Those are the ones to debate.
- Assign double down, fix, harvest or drop, and say what each move costs against the constraint.

OUTPUT
The 2x2, a score table with the evidence behind each score, the segments that flip under sensitivity, and a one-page proposal for the offsite.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A segment with too few deals gets plotted with a question mark, not a guessed win rate.
```

### Run a Delphi round on the plan's assumptions

```
Run a Delphi round with my executive team on the plan's five biggest assumptions, with the evidence fed back between rounds. Use Calven MCP for the evidence each assumption is tested against.

FILL IN
- Plan assumptions: [paste the five assumptions the plan depends on]
- Round one answers: [paste each executive's anonymous estimates, or write "none"]

CONTEXT
In the room, the loudest estimate wins. A Delphi round collects estimates anonymously, shows the spread and the evidence, then asks again. Convergence on evidence beats convergence on seniority.

FROM CALVEN
- For each assumption, the dashboard rate that tests it (win rate, deal size, cycle, multi-threading, competitive win rate), with n and the trend.
- The trends and competitive signals that argue for or against it.
- Buyer quotes or deal drivers that speak to it.

METHOD
- If there are no answers, write the round one questionnaire: for each assumption, a low, likely and high estimate and one line of reasoning.
- If answers are in, show the spread per assumption (median, range, outliers) without names, and set the Calven evidence beside it.
- Write the round two prompt for each assumption: the spread, the evidence and the one question that would change an estimate.
- Flag the assumptions where the team agrees and the evidence disagrees. Those are the dangerous ones.

OUTPUT
Either the round one questionnaire, or a feedback sheet per assumption (spread, evidence, round two question) plus the list of consensus-against-evidence assumptions.

GROUNDING
Label every number as Calven (cited, with n), an executive's estimate, or your assumption. Never attribute an estimate to a person.
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
- Which segment grew its pipeline this year but lost win rate?
- Which competitor showed up in more of our deals this year than last?
- Which buying trigger shows up most on won deals?
- Which loss reason grew fastest in the second half of the year?
- Which product gap cost the most pipeline, and does the product brief list it as a known weakness?
- Which Tier 1 vertical has the most accounts we have never had a deal with?

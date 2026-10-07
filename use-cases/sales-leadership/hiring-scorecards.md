# Hiring scorecards


You're hiring AEs or BDRs and need to know whether a candidate can sell this product to these buyers. You get a scorecard with the competencies that win here, interview questions and role-plays built on the actual personas and competitors, and a shared brief so every loop tests the same things. Calven builds the loop on the real ICP, personas and competitors, so it isn't generic questions and a role-play about a product the candidate has never seen.

## Prompts

### Build the hiring scorecard for a role

```
Using Calven MCP, build the hiring scorecard for the role and segment below.

FILL IN
- Role: [AE or BDR]
- Segment: [segment]

CONTEXT
I am opening a req. I want competencies that reflect what wins deals here, with the evidence, so the loop tests the right things.

PULL FROM THE UNIVERSE
- The ICP: the segments and tiers this role will work, and the buying triggers.
- Average deal size and cycle for in-profile deals, and the personas on our won deals.
- What buyers said about the sales team in surveys, and the sales-process drivers that won or lost deals.
- The competitors most often in play in this segment.

BUILD
- The role in five lines: who they sell to, deal size and cycle, who they sell against.
- Five to seven competencies, each with the buyer evidence that makes it matter here and what "strong" looks like.
- The two competencies to weight most.

OUTPUT
A one-page scorecard with sources.

GROUNDING
Use only the ICP, dashboards and survey evidence in the Universe, cited with n. Do not add generic sales competencies the evidence does not support.
```

### Write the interview questions

```
Using Calven MCP, write the interview questions for a candidate for the role below.

FILL IN
- Role: [role]
- Competitor: [competitor]
- Persona: [persona]

CONTEXT
Four sections: territory and targeting, discovery, competitive, objection handling. The questions must be about our market, so a generic answer stands out.

PULL FROM THE UNIVERSE
- The ICP: attributes, tiers, disqualifiers, triggers.
- The top objections our buyers raise and the approved handling.
- The competitor's battlecard: where we win and lose, landmines.
- The persona's canvas: pains and jobs to be done.

BUILD
- Three questions per section, each with what a strong answer contains, drawn from the Universe.
- One question that only a candidate who did their homework on our market can answer.

OUTPUT
The question set with the strong-answer notes.

GROUNDING
Use only ICP, messaging, battlecard and persona content in the Universe. Do not include facts about us that the Universe does not hold.
```

### Design the interview role-play

```
Using Calven MCP, design the role-play for the interview loop for the role below.

FILL IN
- Role: [role]
- Persona: [persona]
- Competitor: [competitor]

CONTEXT
Thirty minutes. The interviewer plays the buyer. I want a persona brief for the interviewer and a scenario where the competitor is the incumbent.

PULL FROM THE UNIVERSE
- The persona's canvas: goals, pains, objections, how they talk, what they find credible.
- The competitor's battlecard: what the buyer will say they like about the incumbent, the landmines a strong candidate would set.

BUILD
- The scenario in one paragraph.
- The interviewer's brief: how to open, the three objections to raise in order, what a strong candidate does at each.
- A scoring guide tied to the scorecard competencies.

OUTPUT
The scenario, the brief and the scoring guide.

GROUNDING
Use only the persona and battlecard in the Universe. Keep the buyer as hard as the canvas says, no harder.
```

### Brief interviewers on the market

```
Using Calven MCP, brief our interviewers on our market before they screen candidates for the role below.

FILL IN
- Role: [role]

PULL FROM THE UNIVERSE
- The ICP summary and segment tiers.
- The top two buyer personas in two lines each.
- The competitors we meet most and how we win against each, from the battlecards.
- Our positioning statement.

OUTPUT
A one-page brief a non-sales interviewer can read in five minutes.

GROUNDING
Use only the Universe, cited.
```

## Advanced prompts

### Backtest the scorecard against your reps

```
Check whether the scorecard's criteria predict which of our reps win, using their real deal outcomes. Use Calven MCP for each rep's deals and how buyers described them.

FILL IN
- Scorecard: [paste the criteria]
- Rep ratings: [attach a CSV: rep name, hire date, and how each rep scored or would have scored on each criterion at hire]

CONTEXT
Scorecards are written from what managers believe good looks like. If the criteria don't separate our winners from the rest, I'm hiring against the wrong picture.

FROM CALVEN
- Closed deals per rep (owner) over the last four quarters: outcome, amount, segment.
- What buyers said about the sales team in surveys, and deal drivers in the Experience category.
- Vendor quotes per rep, to check the skills the criteria claim to test.

BACKTEST
- Compute each rep's win rate and average deal size from their closed deals, with counts. Drop reps with fewer than eight closed deals.
- Correlate each criterion with win rate and with deal size. If you can run code, fit a simple regression and show it.
- Check each criterion against the buyers: does it match what they praised or criticised?
- Rank the criteria as predictive, neutral or noise, and suggest weights.

OUTPUT
A table (criterion, link to win rate, link to deal size, buyer support, verdict, new weight), the revised scorecard, and the one criterion to add.

GROUNDING
Rep metrics are computed by you from deal rows; show the counts. With a handful of reps this is directional, not proof; say so. Ratings are mine.
```

### Model when a new hire pays back

```
Model a new AE's ramp to show when they pay back and what moves that date. Use Calven MCP for our real cycle lengths, deal sizes and win rates by segment.

FILL IN
- Role: [AE segment and territory]
- Cost: [fully loaded annual cost]
- Gross margin: [percentage]
- Ramp: [months to full quota and the quota ramp schedule]
- Pipeline: [inherited pipeline, or write "none"]

CONTEXT
The headcount plan assumes every hire hits quota in month six. Our cycle lengths might say otherwise. I need the honest payback date before I ask for the req.

FROM CALVEN
- Average sales cycle, deal size and win rate for the segment from the ICP dashboard, with n.
- In-profile accounts in the territory, and how many have never had a deal.

MODEL
- Month by month: pipeline built, deals opened, deals closed one cycle later at the segment's win rate and deal size.
- Compare cumulative gross profit with cumulative cost to find the payback month.
- Run sensitivities: cycle plus 30%, win rate minus five points, a territory with half the in-profile accounts. Give the payback month for each.
- If you can run code, build it as a spreadsheet with the inputs at the top.

OUTPUT
The monthly ramp table, the payback month in the base, low and high cases, the variable that moves it most, and the line for the headcount request.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't assume a new hire performs at the team average from day one; state the ramp curve you use.
```

### Build a deal-review case from a real loss

```
Turn a real lost deal into a deal-review case for the interview loop, with an answer key the panel grades against. Use Calven MCP for the deal, what the buyer said and what actually decided it.

FILL IN
- Lost deal: [deal]
- Role: [AE, senior AE, sales manager]

CONTEXT
Candidates rehearse role-plays. A review of a real loss shows how they think: what they'd ask, where they'd spot the risk, what they'd do differently.

FROM CALVEN
- The deal: segment, amount, stages reached, contacts by role, competitor, loss reason, price and product feedback.
- The deal drivers and evidence quotes from its win/loss survey.
- The competitor's battlecard.

BUILD
- Write the case pack as the deal looked at proposal: the account, the people, the competitor, the notes a rep would have had. Anonymise the account and the people.
- Hide the outcome. Write three questions: what's the risk, what would you do this week, what do you need to know that isn't here.
- Write the answer key from the drivers: what decided the deal, which signals were visible, what a strong answer catches.
- Add a scoring sheet: four criteria, 1 to 4, with a description of each level.

OUTPUT
The one-page case pack, the three questions, the answer key, the scoring sheet, and the reveal: what happened and why.

GROUNDING
The case uses only what's in the deal record and the survey, anonymised. Don't add facts the record doesn't hold; mark any filler as invented for the exercise.
```

## Ad hoc questions

- Who do our AEs actually sell to? Which personas sit on won deals?
- What did buyers praise or criticise about our reps in surveys?
- What is the average deal size and cycle for Tier 1 deals?
- Which competitor will a new AE in [segment] meet most?
- What is the hardest objection a new rep will hear, and the approved answer?
- What would a strong candidate know about our ICP from our site alone?
- Which sales-process driver decided the most lost deals?
- Give me a territory exercise using our segment tiers.
- What does [persona] find credible from a seller?
- Which discovery questions do our best reps ask on won calls?
- Which segment has the longest sales cycle a new hire will face?
- Which persona has the lowest contact coverage on open deals, according to the persona dashboard?
- What do buyers who chose us say a rep did well?
- Which objection costs us the most pipeline?
- What do buyers say about [competitor]'s sales team in the dossier quotes?
- Which value claims from our best reps' calls would make good interview prompts?

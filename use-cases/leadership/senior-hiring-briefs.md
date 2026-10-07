# Senior hiring briefs


You're interviewing a VP of Sales, a CMO or a head of product, and you need to test whether they really get the buyer, the competition and why deals are lost. You get an interviewer brief, a question set with answers the evidence supports, and a candidate pre-read with the approved positioning. Calven brings the ICP, personas, competitors and open strategic questions, so you're judging the candidate against the company's actual situation.

## Prompts

### Build the interviewer brief and case questions

```
Using Calven MCP, brief me for interviewing a candidate for the role below.

FILL IN
- Role: [role]

CONTEXT
I am interviewing for the role. I want to test whether they understand our buyer, our competition and why we lose, and I want questions with answers our evidence supports.

PULL FROM THE UNIVERSE
- The ICP summary and segment tiers; the primary personas and their pains.
- Tier 1 competitors: their positioning, strengths, where we lose to them.
- Win/loss headline: win rate, top loss reasons, product gaps ranked by deals.
- Trends with the highest severity.

BUILD
- The brief: buyer, competition, why we lose, the market, in a page.
- Six case questions for the role, each with what a strong answer includes, from the evidence.

OUTPUT
The brief and the question set.

GROUNDING
Use only the Universe, cited with samples. Do not include financials.
```

### Assemble the finalist pre-read

```
Using Calven MCP, assemble the candidate pre-read for the final round for the role below.

FILL IN
- Role: [role]

CONTEXT
We share a short pack with finalists: who we are, who we serve, how we position, what the product does. Nothing confidential.

PULL FROM THE UNIVERSE
- The positioning statement and category; the messaging one-liner and boilerplate; the product brief overview; the ICP summary.

BUILD
- A two-page pack in plain language.

OUTPUT
The pack.

GROUNDING
Use only the approved documents, cited. Exclude win rates, deal data, competitor weaknesses and anything from the CRM.
```

### Score a candidate's answers against the evidence

```
Using Calven MCP, score this candidate's answers against what our evidence says.

FILL IN
- Role: [role]
- Notes: [paste your interview notes]

CONTEXT
The notes are from the interview for the role: the case questions and what the candidate said about our buyer, our competition, why we lose and what they would change first.

PULL FROM THE UNIVERSE
- The ICP summary and the primary personas' pains.
- Tier 1 competitors: strengths, where we lose to them.
- Win/loss headline: top loss reasons and product gaps with deals at stake.
- Trends with the highest severity.

SCORE
- For each answer: matches the evidence, partly, or contradicts it, with the evidence cited.
- Where the candidate saw something the evidence supports but the brief did not mention.
- Where they guessed and were wrong.

OUTPUT
A scorecard table, then three lines on whether they understand our situation.

GROUNDING
Judge only against the Universe, cited with samples. Mark a question as "no evidence either way" rather than scoring on opinion. Do not include financials.
```

## Advanced prompts

### Pressure-test a finalist's 90-day plan

```
Pressure-test a finalist's 90-day plan against what our deals, buyers and market say. Use Calven MCP for the evidence the plan should rest on.

FILL IN
- Role: [VP of Sales, CMO, head of product]
- Candidate's plan: [paste the 90-day plan or presentation]

CONTEXT
A polished plan can be written from any company's website. I want to know whether this one would work here, and whether the candidate found what the evidence says.

FROM CALVEN
- The ICP, the top loss reasons and win rate by segment, with n.
- Our Tier 1 competitors and our win rate against each, with n.
- The primary personas' pains and objections.
- Product gaps that cost deals, and the trends our positioning cites.

RED-TEAM
- Break the plan into its bets: each initiative and what it assumes about the market, the buyers or the team.
- Test each assumption against Calven: supported, contradicted or not on record.
- Play the hostile reviewer: a CRO who has watched three VPs fail, asking where this plan goes wrong in month four.
- Find what the plan misses that the evidence says is the biggest issue.

OUTPUT
A table (bet, assumption, evidence, verdict), three follow-up questions for the final interview, and a one-paragraph read on whether the candidate understood our situation.

GROUNDING
Label every number as Calven (cited, with n). Verdicts cite the evidence. Don't mark the candidate down for not knowing internal data; grade the reasoning.
```

### Calibrate the panel on synthetic candidates

```
Calibrate the interview panel before the first real candidate: write three synthetic candidates' answers and have every interviewer score them blind. Use Calven MCP to write the answer key from our real market.

FILL IN
- Role: [role]
- Questions: [paste the interview questions]
- Panel: [names or roles of the interviewers]

CONTEXT
Panels disagree because they grade against different pictures of the job. Scoring the same answers before the loop starts shows where each interviewer's bar sits.

FROM CALVEN
- The ICP, the positioning and the primary personas' pains.
- Our win rate against the main competitors and the top loss reasons, with n.
- The trends and product gaps a person in this role would have to deal with.

SIMULATE
- Write the answer key for each question: what a strong answer covers, grounded in the evidence.
- Write answers from three synthetic candidates: strong and specific to us, polished but generic, and confident but wrong about our market.
- Shuffle them and produce a blind scoring sheet for the panel.
- When I paste the panel's scores back, show each interviewer's bias against the key: too generous, too harsh, or fooled by polish.

OUTPUT
The answer key, the three anonymised answer sets, the scoring sheet, and, once scores come back, a calibration table with one coaching note per interviewer.

GROUNDING
The answer key cites Calven. The synthetic candidates are fiction; label them that way everywhere and never present them as real people.
```

## Ad hoc questions

- What is our ICP in one paragraph?
- Who are our Tier 1 competitors, and where do we lose to them?
- What are the top three loss reasons this year?
- Which product gaps cost the most deals?
- What are the primary personas' top pains?
- What trends should a new [role] know about?
- What is our positioning statement?
- Which segment does the ICP dashboard say we should expand into, and would a [role] candidate know why?
- What is our competitive win rate against [competitor], with n?
- Which loss reason would a new [role] be expected to fix?
- What changed in our market this year that a candidate's research could miss?
- What should a candidate who worked at [competitor] be able to tell us that the battlecard doesn't cover?
- What do buyers say about our sales team in surveys?
- Which personas sit on our won deals most often?
- Which pillar is weakest according to the messaging dashboard?

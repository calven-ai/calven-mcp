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

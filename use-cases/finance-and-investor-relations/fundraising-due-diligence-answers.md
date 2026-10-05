# Fundraising due diligence answers


The DDQ runs 50 to 200 questions, and the market, competition and customer sections are where founders improvise. You get a written answer per question with its sources, a competitor map that admits where we lose, and customer evidence organised by theme, all consistent with the pitch deck. Calven keeps you from writing "no direct competitors" and having the investor's first customer call contradict the deck.

## Prompts

### Answer the DDQ's market questions

```
Using Calven MCP, draft answers to the market questions in our due diligence questionnaire.

FILL IN
- Questions: [paste the market questions]

CONTEXT
We are raising a round. The questions are the market questions from the DDQ. Each answer must be checkable and cite where it came from. Where we have only directional sizing, say so.

PULL FROM THE UNIVERSE
- The market opportunities we track: description, sizing, sizing tier, timeline, status.
- The trends behind them: category, severity, horizon, last seen.
- Analyst findings: publisher, report, the metric and the excerpt.
- The "why now" and market category sections of our positioning.

WRITE
- One answer per question, under 150 words, with the sources below it.
- A note under any answer where the Universe gives only directional evidence.

OUTPUT
The questions with their answers and sources, in the DDQ's order.

GROUNDING
Use only opportunities, trends, analyst findings and positioning recorded in the Universe and cite each. Do not manufacture a TAM number. If a question cannot be answered from the Universe, write "needs external data" and name what.
```

### Draft the competition answers and competitor map

```
Using Calven MCP, draft the competition section of our due diligence answers.

FILL IN
- Questions: [paste the competition questions]

CONTEXT
Investors expect an honest map, including where we lose. The questions are the competition questions. The answers will be checked against customer calls, so nothing can be flattering and wrong.

PULL FROM THE UNIVERSE
- Every tracked competitor with tier, description and categories.
- For each Tier 1 competitor: their positioning, pricing and packaging, strengths, weaknesses, analyst standing from the dossier.
- Our win rate against each, with n, and the top loss reasons against each.
- Our unique attributes and competitive alternatives from positioning.

BUILD
- A competitor map grouped by tier with one line each.
- For each Tier 1 rival: how they position, where they beat us, where we beat them, our win rate with n.
- The defensibility answer: the unique attributes and the proof behind each.

OUTPUT
The answers in the DDQ's order, plus the competitor table as an appendix.

GROUNDING
Use only dossiers, battlecards and dashboards in the Universe and cite them. Say where a dossier is thin. Do not claim a win rate on fewer than the dashboard's floor.
```

### Draft the customer answers

```
Using Calven MCP, draft the customer answers for due diligence.

FILL IN
- Questions: [paste the customer questions]

CONTEXT
Questions cover who buys, why they buy, why they churn or pass, and what they say. Investors will call customers, so the answers must match what those customers will say.

PULL FROM THE UNIVERSE
- Our ICP: summary, segment tiers, priority verticals, buying triggers.
- The buyer and stakeholder personas.
- Top win drivers and loss drivers with a buyer verbatim each.
- Top customer themes by mentions and sentiment, and the quotes behind the winning themes.

WRITE
- One answer per question with sources.
- A list of the five customer phrases that recur most, verbatim.

OUTPUT
The answers, then the phrase list.

GROUNDING
Use only personas, drivers, themes and quotes in the Universe, each cited. Keep quotes verbatim. Do not name a customer whose data is withheld.
```

### Check the answers against the pitch deck

```
Using Calven MCP, check our due diligence answers against the pitch deck narrative.

FILL IN
- Answers: [paste the draft answers]
- Slides: [paste the deck's market and competition slide text]

CONTEXT
I have the draft answers and the deck's market and competition slides. I want every contradiction found before an investor finds it.

PULL FROM THE UNIVERSE
- Our positioning and messaging as approved.
- The competitive intelligence dashboard and the battlecards for competitors the deck names.

CHECK
- Flag where an answer and a slide disagree on category, differentiator, competitor or win rate.
- Flag where either contradicts the approved positioning.
- Suggest the version to keep.

OUTPUT
A list of conflicts with the fix for each.

GROUNDING
Judge only against the Universe and cite what each flag conflicts with. If there are no conflicts, say so.
```

### Pick and brief the reference customers

```
Using Calven MCP, help me pick and brief reference customers for investor calls.

FILL IN
- References: [how many references you need]
- Segment: [segment preference, or leave blank]

CONTEXT
The investor will call three customers. I want the accounts most likely to speak well and specifically, and a prediction of what they will say.

PULL FROM THE UNIVERSE
- Accounts with positive quotes in the Quantified outcome, Time-to-value or Competitive win highlights.
- Won deals with a completed win/loss response and the respondent's own words.
- The themes those accounts raised, positive and negative.

BUILD
- A shortlist of accounts with the quote that recommends each and any negative theme the investor might hear.
- The three questions an investor will ask each, with the answer our evidence predicts.

OUTPUT
The shortlist table and the predicted Q&A.

GROUNDING
Use only quotes and responses in the Universe, attributed. Do not invent what a customer will say beyond what they said. Respect withheld names.
```

## Ad hoc questions

- Which competitors do we track, by tier, and how do we differ from each in one line?
- What is our win rate against [competitor], and on how many deals?
- Where do we lose to [competitor] and why, in the buyer's words?
- What market opportunities do we track with sizing, and how confident is the sizing?
- What do analyst reports say about our category? Give me the metric and the publisher.
- What is our ICP in three sentences?
- Which buying triggers show up most on won deals?
- Give me five verbatim customer quotes about measurable outcomes, with the account.
- What are the top three reasons we lose deals this year?
- Which customers mention us versus [competitor] positively?
- Does our product brief state our integrations and architecture, so I can answer the technical questions?
- What do customers complain about most, so I can pre-empt it?

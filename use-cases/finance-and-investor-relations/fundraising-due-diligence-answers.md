# Fundraising due diligence answers

**Team:** Finance and investor relations · also leadership, product marketing
**Impact:** High. A due diligence questionnaire runs 50 to 200 questions, and the market, competition and customer sections are where founders improvise. Answers with sources and sample sizes shorten the process and survive the reference calls.
**Prerequisites:** strategy documents approved, competitors tracked, market research run. Better with win/loss surveys running (competitive wins and losses with buyer evidence), call transcripts ingested (customer quotes), analyst reports uploaded, CRM connected (segment data).

## What the team is trying to do

Answer every market, competition and customer question in the DDQ and the data room with evidence the investor can check, and keep the answers consistent with the pitch deck and with what customers will say on reference calls. Done means a written answer per question with its sources, a competitor map that admits where we lose, and customer evidence organised by theme. Without the company's own knowledge the founder writes "no direct competitors" and the investor's first customer call contradicts the deck.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the questions | Receive the DDQ or the investor's question list | Calven does not help here | |
| 2 | Sort by section | Financial, legal, team, product, market, competition, customers | Calven does not help here; the market, competition and customer sections are the ones it answers | |
| 3 | Market answers | Size, growth, segments, timing, why now | Market opportunities with sizing and timeline, trends with horizon and severity, analyst findings with publisher and metric, the positioning's "why now" | Market research dashboard, opportunities, trends, analyst findings, positioning |
| 4 | Competition answers | Who competes, how we differ, where we lose, defensibility | Competitor rows by tier, dossiers (pricing, positioning, strengths, weaknesses, analyst standing), win rate per competitor, loss reasons | Competitors, deep dives, battlecards, competitive intelligence dashboard, deal drivers |
| 5 | Customer answers | Who buys, why, what they say, what they would say on a call | ICP and personas, win drivers with verbatims, top themes and sentiment, quotes by account | ICP document, personas, deal drivers, themes, quotes |
| 6 | Product answers | What it does, integrations, architecture, pricing | Product brief sections | Product brief |
| 7 | Consistency check | Match answers to the deck and to each other | The approved positioning and messaging as the reference | Positioning, messaging |
| 8 | Prepare reference calls | Pick customers, brief them, predict the questions | Accounts with positive quotes and won deals; the themes an investor will hear | Quotes, surveyed deals, CRM accounts |
| 9 | Financial, legal and team answers | ARR, cohorts, cap table, contracts | Calven does not help here | |
| 10 | Assemble the data room | Upload documents and answers | Calven does not help here | |

## Recommended prompts

### Step 3: market section

```
Using Calven MCP, draft answers to the market questions in our due diligence questionnaire.

CONTEXT
We are raising a round. Below are the market questions from the DDQ. Each answer must be checkable and cite where it came from. Where we have only directional sizing, say so.

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

[paste the market questions]
```

### Step 4: competition section

```
Using Calven MCP, draft the competition section of our due diligence answers.

CONTEXT
Investors expect an honest map, including where we lose. Below are the competition questions. The answers will be checked against customer calls, so nothing can be flattering and wrong.

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

[paste the competition questions]
```

### Step 5: customer section

```
Using Calven MCP, draft the customer answers for due diligence.

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

[paste the customer questions]
```

### Step 7: consistency check

```
Using Calven MCP, check our due diligence answers against the pitch deck narrative.

CONTEXT
Below are the draft answers and the deck's market and competition slides. I want every contradiction found before an investor finds it.

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

[paste the answers and the slide text]
```

### Step 8: reference call prep

```
Using Calven MCP, help me pick and brief reference customers for investor calls.

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

[name how many references you need and any segment preference]
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

## Good practice

- Answer section by section. Market, competition and customers are separate prompts; a single mega-prompt loses sources.
- Insist on the honest map. Ask for where we lose, and keep it. Investors trust a company that knows its losses.
- Keep sizing claims directional unless an analyst finding or opportunity record carries the number.
- Run the consistency check against the deck before the data room opens.
- Keep financial, legal and team answers out of Calven prompts.
- Check withheld fields. Customer names and deal amounts may be restricted for MCP; do not promise them in the data room.

## Not covered today

- Financial, legal, cap table and team answers.
- TAM, SAM and SOM arithmetic beyond the sizing recorded in opportunities and analyst findings.
- Fresh competitor news. Calven's agents record moves in the app; MCP reads what they stored.
- The data room itself.

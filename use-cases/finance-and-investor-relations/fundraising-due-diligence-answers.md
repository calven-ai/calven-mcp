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

## Advanced prompts

### Red-team the data room as the investor's analyst

```
Go through our DDQ answers, deck and data room the way the investor's associate would, hunting for numbers that don't reconcile and claims that won't survive a reference call. Use Calven MCP for the facts the answers should match.

FILL IN
- DDQ answers: [paste or attach the answers]
- Pitch deck: [paste the deck text]
- Investor: [the fund, and what they're known to dig into]

CONTEXT
An associate spends a week on our data room looking for one inconsistency. Every one they find costs trust and time. I'd rather find them first.

FROM CALVEN
- Win rates by competitor and segment, and the top loss drivers, with n and window.
- The positioning statement, Competitive Alternatives and Proof Points.
- The ICP Summary and Segment Tiers.
- Customer quotes tagged Quantified outcome, with account.

RED-TEAM
- Play a sharp associate. Cross-check every number and claim across the three documents and against Calven.
- Flag: a number that differs between documents, a claim with no evidence, a win rate without n, a competitor framing the battlecard contradicts, an outcome a reference customer couldn't confirm in their own words.
- For each flag, write the follow-up question the associate would send and the fix.

OUTPUT
A table of flags in order of damage, with the follow-up question and fix for each. Then the three answers to rewrite before the data room opens, rewritten.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Flag missing evidence as missing; don't fill it.
```

### Rehearse a reference call before the investor does

```
Simulate the investor's reference call with one of our customers, played from what that customer has actually said, and show me where the call could go wrong. Use Calven MCP for the customer's quotes, conversations and deal history.

FILL IN
- Reference customer: [account]
- Investor's angle: [what the investor is trying to verify, e.g. retention risk, competitive displacement]

CONTEXT
Reference calls are where pitch claims meet a customer's own words. I want to know what this customer is likely to say about us, good and bad, before I put them forward.

FROM CALVEN
- Every quote from the account: category, sentiment, theme, competitor mentions, with date.
- The account's conversations and the situation recorded on each.
- The account's deals: type, amount band, competitors, outcome, and any deal drivers from a survey.

SIMULATE
- Play the investor asking twelve questions a good reference call covers: why they bought, the alternative they considered, time to value, what's missing, renewal intent, would they buy again.
- Play the customer answering only from the evidence: their quotes, their themes, their deal facts. Where there's no evidence, the customer says something vague, and you mark it.
- Score the call: strong, neutral or risky per answer.

OUTPUT
The transcript, a risk table (question, likely answer, evidence, risk), and a one-paragraph verdict: put them forward, brief them, or pick someone else.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every customer answer cites a quote or record; anything else is marked as simulated. Never invent a quote.
```

### Argue the bear case in front of an IC

```
Stage an investment committee debate on our company: a bear argues against the investment, a bull argues for, and a partner rules. Use Calven MCP for the competitive, win/loss and market evidence both sides use.

FILL IN
- Round: [round, amount and valuation range]
- Our thesis: [paste the investment thesis slide or the three-line pitch]

CONTEXT
Investors won't show us their bear case. If I write it myself I'll go easy on us. A debate where the bear has access to our real weaknesses gives me the strongest objections to answer in the deck.

FROM CALVEN
- Battlecards: Where We Lose for each Tier 1 competitor, and their recent signals.
- Win rate against each competitor and top loss drivers, with n.
- The product brief's Known Weaknesses.
- Market opportunities and analyst findings on the category, with sizing and publisher.

METHOD
- The bear opens with five arguments, each citing evidence: competitive pressure, a loss pattern, a weakness, a market risk, a concentration or segment risk.
- The bull answers each with evidence.
- Second round: each side attacks the other's weakest point.
- The partner scores each argument as decisive, material or noise, and writes the IC memo verdict.

OUTPUT
The debate, the partner's score table and memo, and the three bear arguments we must answer in the deck with a draft answer for each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Both sides argue from recorded evidence only; anything else is labelled as opinion.
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
- Which competitor do we displace most often, and what did those buyers say?
- What do our Known Weaknesses say that an investor would find on a reference call?
- Which analyst finding is the most recent, and what does it say about the category?
- How has our competitive win rate changed over the last four quarters, with n?
- Which customer has said the most about switching from a competitor?

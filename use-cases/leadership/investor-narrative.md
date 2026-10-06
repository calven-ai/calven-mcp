# Investor narrative


You're writing the market, product, competition and customer sections of the fundraising deck, and the monthly investor update has to tell the same story. You get those sections drafted from the Universe, a competitor slide with real differentiation instead of a 2x2, customer proof in verbatim quotes, and an update that reports win/loss and competitive movement the same way each month. ARR, burn, runway and the financial plan come from finance.

## Prompts

### Draft the problem, market, customer and product slides

```
Using Calven MCP, draft the problem, market, customer and product sections of our investor deck.

FILL IN
- Round: [round]
- Emphasis: [any emphasis, or leave blank]

CONTEXT
We are preparing a deck for the round. Investors want a clear problem, a real shift behind it, a precise customer and differentiation they can test. Financials come from finance.

PULL FROM THE UNIVERSE
- Our positioning: the category and frame of reference, the why-now trends, unique attributes, value themes, proof points.
- The ICP summary and the primary buyer persona's pains in their words.
- The product brief: what the product does and its differentiators.
- Marketing-ready customer quotes.

WRITE
- Problem: the pain in the customer's words with one quote.
- Why now: the two trends that make it urgent, with sources.
- Customer: who we sell to and why they buy.
- Product and differentiation: what it does and the unique attributes, honestly.

OUTPUT
Four slide drafts, each under 80 words, plus the quotes and sources on a notes line.

GROUNDING
Use only the positioning, ICP, brief and quotes in the Universe, cited. Do not add market sizing or numbers Calven does not hold. Keep quotes verbatim.
```

### Build the competition slide

```
Using Calven MCP, build the competition slide for the investor deck.

FILL IN
- Competitors: [competitors to include, or Tier 1]

CONTEXT
Investors judge whether we understand the competition. I want real differentiation, where we lose, and how we fare in deals, not a 2x2 with us in the top right.

PULL FROM THE UNIVERSE
- The competitors: their positioning, strengths and weaknesses from the dossiers.
- Our battlecards: how we win, where we lose.
- Win rate per competitor with samples, from the competitive read.

BUILD
- A table: competitor, who they serve, where they are strong, where we differ.
- One honest line on where we lose and why.
- Win rate against each where the sample supports it.

OUTPUT
The slide content plus a notes line with sources.

GROUNDING
Use only dossiers, battlecards and dashboard figures from the Universe, cited. Where a win rate rests on too few deals, say "too few deals" rather than a number.
```

### Answer investor diligence questions

```
Using Calven MCP, prepare answers to investor diligence questions on competition and the market.

FILL IN
- Questions: [paste the questions]

CONTEXT
The questions are ones investors have asked or will ask. I want grounded answers and a list of what we cannot answer from our own evidence.

PULL FROM THE UNIVERSE
- Competitor dossiers, recent signals, win/loss drivers against each competitor, trends and analyst findings.

BUILD
- For each question: the answer in four lines with sources, or "not in our evidence".

OUTPUT
The Q&A.

GROUNDING
Use only the Universe, cited. Never invent a competitor's revenue, funding or roadmap; use the dossier's company snapshot and say unknown where it says unknown.
```

### Write the update's competitive and win/loss section

```
Using Calven MCP, write the competitive and win/loss section of this month's investor update.

FILL IN
- Month: [month]

CONTEXT
Four to six lines, the same shape every month: win rate and change, notable wins or losses by competitor, one competitor move, one customer quote.

PULL FROM THE UNIVERSE
- The Insights overview for last month with the change against the prior month.
- Competitor signals last month with the highest severity.
- One marketing-ready quote from last month.

WRITE
- The section, plain, with n beside the rate.

OUTPUT
The section.

GROUNDING
Use only the overview, signals and quotes, cited. If the sample is too small for a rate, report counts instead.
```

## Advanced prompts

### Write the bear case before the partner does

```
Write the bear case a skeptical investor would write about us, then tell me which parts the evidence beats and which it doesn't. Use Calven MCP for our competitive record, the market and the proof behind our claims.

FILL IN
- Deck: [paste or attach the fundraising deck]
- Investor type: [seed, Series A, growth, strategic]
- Metrics we'll share: [paste ARR, growth, retention, burn]

CONTEXT
Every partner writes an investment memo with a risks section. If I've written it first, I choose how to answer it.

FROM CALVEN
- Competitors' funding and size from their dossiers, and their high-severity signals from the last two quarters.
- Our competitive win rate and win rate per competitor, with n.
- Trends and analyst findings on the category.
- The claims in the deck that appear in our claims list, with their status.

RED-TEAM
- Write the bear case in a partner's voice: the five strongest reasons not to invest, one paragraph each.
- For each reason, pull the evidence for and against it from Calven and my metrics.
- Classify each: beaten (the evidence answers it), contested (evidence on both sides) or real (we can't answer it).
- For the real ones, write the honest answer that keeps the investor in the process.

OUTPUT
The bear case memo, a table (risk, evidence for, evidence against, verdict), and the slide or appendix change for each contested risk.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a competitor's funding or a market size Calven doesn't hold; say what's missing.
```

### Build a bottom-up market size

```
Build a bottom-up market size from the companies that fit our ICP, not a top-down share of an analyst number. Use Calven MCP for the ICP definition, the in-profile accounts we hold and our real deal sizes.

FILL IN
- Market counts: [paste the number of companies per segment from your data provider, or write "none"]
- Pricing: [list price per tier, or write "use the product brief"]
- Horizon: [years]

CONTEXT
Investors discount a top-down TAM. A bottom-up number built from our real ICP and deal sizes holds up in diligence, and it shows how much of the market we've touched.

FROM CALVEN
- The ICP: firmographics, segment tiers, priority and secondary verticals, disqualifiers.
- CRM account counts by ICP tier, size and region, and how many have had a deal.
- Average deal size by segment from the ICP dashboard, with n, plus pricing from the product brief.
- Market opportunities with their sizing.

MODEL
- For each segment, multiply the companies that fit by the share that passes the disqualifiers by the expected annual contract value. Show each multiplier and its source.
- Split it into TAM, the segments we sell to (SAM), and what three years of plausible share gets us (SOM), each with low, base and high.
- Show coverage: the share of SAM already in our CRM, and the share that has had a deal.
- If you can run code, build it as a spreadsheet with formulas and one input tab.

OUTPUT
The market-size table by segment (TAM, SAM, SOM, low to high), the coverage line, and a one-slide version with every source footnoted.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Company counts come from me, not Calven; if I gave none, show the formula with blanks instead of guessing them.
```

### Backtest every claim in the narrative

```
Check every claim in my investor narrative against what actually happened in our deals, and tell me which ones survive diligence. Use Calven MCP for the deals, the drivers and the buyers' own words.

FILL IN
- Narrative: [paste the deck or the narrative memo]

CONTEXT
"We win on time-to-value." "Customers switch from the incumbent." Diligence calls our customers and reads our CRM export. Every line in the narrative should hold up when they do.

FROM CALVEN
- Closed deals from the last four quarters: outcome, segment, competitor, loss reason.
- Deal drivers with direction and evidence quotes.
- Quotes highlighted as Competitive win, Quantified outcome or Time-to-value.
- Win rate by segment and per competitor, with n.

BACKTEST
- Pull every testable claim from the narrative and restate it as a prediction: if this is true, the deals should show this.
- Page through the deals and drivers and test each prediction. Count the deals that support it and the ones that contradict it.
- Grade each claim: holds, holds with a caveat, unsupported or contradicted.
- For a contradicted claim, find what the data does support and write that line instead.

OUTPUT
A table (claim, prediction, deals for, deals against, grade, best quote), the rewritten lines, and the three claims a diligence call is most likely to test.

GROUNDING
Counts come from the rows you paged, with the total stated; rates come from dashboards, cited with n. Quotes are verbatim and cited. Don't count a deal as support unless a driver or quote says so.
```

## Ad hoc questions

- What is our positioning statement and category?
- Which trends does our positioning cite as why now?
- Who are our Tier 1 competitors, and how do they position themselves?
- Where do we lose to [competitor], honestly?
- What is our win rate against [competitor] this year, and on how many deals?
- Give me three customer quotes about outcomes.
- What is our ICP in one paragraph?
- What are our unique attributes, according to the positioning?
- What did competitors do last month?
- What share of wins were in-profile this year?
- Which analyst reports mention our category?
- Which competitor raised money or made a major move in the last two quarters?
- Which competitor do won deals' drivers say we displaced most often?
- Which customer quote has the strongest quantified outcome?
- Which unique attribute in our positioning has the least proof behind it?
- What do analyst findings say about how fast our category is growing?
- Which market opportunity has the largest sizing, and on what timeline?

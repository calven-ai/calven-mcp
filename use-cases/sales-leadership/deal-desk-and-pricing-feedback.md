# Deal desk and pricing feedback


A discount request is on your desk, and finance and PMM want the quarterly pricing conversation. You get a deal-desk check that takes a minute and a one-page pricing read with samples and the buyer's words: where buyers place us against competitors, whether price actually decides deals, and what competitors changed. Calven turns both from anecdote into evidence.

## Prompts

### Build the quarterly pricing read

```
Using Calven MCP, build the pricing read for the quarter below for finance and PMM.

FILL IN
- Quarter: [quarter]
- Competitors: [the two competitors to compare]

PULL FROM THE UNIVERSE
- The pricing verdicts from win/loss surveys (cheaper, on par, pricier) and the win rate within each bucket, with samples.
- The commercials drivers on won and lost deals, with the buyer's words.
- Pricing and packaging for the competitors from their dossiers, and any pricing signals this quarter.
- Our pricing and packaging from the product brief.

BUILD
- Where buyers place us and how often "pricier" deals still close.
- Whether price decided deals this quarter or was named but outweighed, with quotes.
- Competitor pricing moves and what they mean for our tiers.
- Two recommendations with the evidence.

OUTPUT
A one-page read with samples and sources.

GROUNDING
Use only the Universe, cited with n. Verbatim quotes. Do not estimate competitor pricing the dossier does not state; say "not disclosed".
```

### Decide one discount request

```
Using Calven MCP, should I approve the discount below on the deal below?

FILL IN
- Deal: [deal]
- Discount: [percent]

PULL FROM THE UNIVERSE
- The deal: segment, size band, competitor, price feedback, stage.
- Won and lost deals in the same segment and size band with price feedback "More expensive": how many closed.
- The battlecard for the competitor on the deal: their pricing and the "where we lose" section.

OUTPUT
The pattern in three lines and the question to ask the rep before approving.

GROUNDING
Use only CRM records and the battlecard in the Universe, cited with samples. This is a pattern check, not a margin decision.
```

### See how often price decides deals

```
Using Calven MCP, how often does price actually decide a deal for us?

FILL IN
- Window: [time window, e.g. last two quarters]

PULL FROM THE UNIVERSE
- The deciding forces read (competitive, capability, experience, commercials) for the window.
- Commercials drivers ranked as deciding, won and lost, with quotes.

OUTPUT
The share of deals decided by commercials, the top three commercials drivers each way, and three quotes.

GROUNDING
Dashboard figures only, cited with n; verbatim quotes.
```

## Advanced prompts

### Run a price ladder with our personas

```
Run a Van Westendorp price ladder with our buyer personas to see where our price reads as too cheap, a bargain, getting expensive and too expensive. Use Calven MCP for the personas, how real buyers rated our price and what competitors charge.

FILL IN
- Offer: [the package or plan in question]
- Price points: [the list price and the range you're considering]
- Segment: [segment]

CONTEXT
Finance wants to move price, and the deal desk sees the discounting. Neither has a view of the buyer's acceptable range. A persona ladder grounded in survey verdicts isn't a pricing study, but it shows where the edges probably sit before we pay for one.

FROM CALVEN
- The buyer personas for the segment: goals, KPIs, objections about cost.
- How buyers rated our price (cheaper, on par, pricier) and the win rate by price verdict from the win/loss dashboard, with n.
- Pricing and packaging from the product brief, and competitors' pricing from their dossiers.
- Quotes typed Pricing / cost.

SIMULATE
- Have each persona answer the four Van Westendorp questions for the offer, each with a line of reasoning from their canvas.
- Anchor the answers to the real verdicts: if most buyers called us pricier and still bought, the ceiling sits above list.
- Plot the four curves and read off the acceptable range and the optimal point. If you can run code, draw them.
- Set competitors' pricing against the range.

OUTPUT
The ladder per persona, the acceptable range and its midpoint, where our list price sits in it, and the one test the deal desk can run next quarter to check it with real buyers.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Persona answers are simulated; label them that way and never present them as survey results.
```

### Backtest a discount guardrail on closed deals

```
Backtest a discount guardrail on last year's closed deals and find the discount depth beyond which we stop buying wins. Use Calven MCP for the deals, their price feedback and why they closed.

FILL IN
- Discount data: [attach a CSV of closed deals: deal name, list price, final price]
- Guardrail to test: [the rule you're considering, e.g. no more than 15% without VP approval]

CONTEXT
Every discount request says it will win the deal. I want to know where extra discount stopped changing outcomes in our own history.

FROM CALVEN
- Closed deals from the last four quarters: outcome, amount, segment, competitor, price feedback, loss reason.
- Deal drivers in the Commercials category, with direction.
- Win rate by price verdict from the win/loss dashboard, with n.

BACKTEST
- Join my discount data to the Calven deals by name, and report how many matched.
- Bucket the deals by discount depth and compute the win rate per bucket, then split by whether a competitor was present.
- Apply the guardrail to history: which won deals would have needed an exception, and which deals lost on price had a discount inside the guardrail.
- If you can run code, do the join and the buckets in code and show the table.

OUTPUT
The win rate by discount table, the depth where the curve flattens, the guardrail's backtest (exceptions it would have triggered, losses it wouldn't have prevented), and the recommended rule in one line.

GROUNDING
Discount figures are mine; outcomes and feedback are Calven, cited. These win rates are computed by you from the matched deals; say so and show the counts.
```

## Ad hoc questions

- How do buyers rate our price against [competitor]?
- How many "pricier" deals did we still win this year?
- What did buyers say about our pricing in lost deals? Quote them.
- Did [competitor] change pricing this quarter?
- What does [competitor] charge, according to the dossier?
- Which plan includes [feature]?
- What is the win rate for deals with "More expensive" price feedback?
- Which segment names price as the loss reason most?
- What commercial terms came up as drivers besides price?
- What does the battlecard say about [competitor]'s cost traps?
- Which competitor do we lose to on price most often in [segment]?
- Do deals with "More expensive" price feedback take longer to close?
- What did buyers who rated us "on par" say decided the deal?
- Which segment calls us pricier but still has an above-average win rate?
- Which product gap shows up alongside price in lost deals?
- Which pricing objection does the battlecard for [competitor] not answer?

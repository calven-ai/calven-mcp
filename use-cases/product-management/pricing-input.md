# Pricing input

**Related:** [Pricing and packaging review](../finance-and-investor-relations/pricing-and-packaging-review.md) is finance's read of the same evidence for the pricing decision.

The quarterly pricing review needs your input on what a capability costs, which tier it sits in, and whether the current packaging loses deals. You walk away with a note covering how buyers rate your price against each competitor, deals lost on price and what buyers said, win rates by deal size band, competitor price moves and the packaging questions that keep appearing in deals. Calven supplies that evidence; the pricing model, discounting policy and finance's margin view stay outside it.

## Prompts

### Show how buyers rate your price

```
Using Calven MCP, show me how buyers rate our price and which deals we lost on it in the window below.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product]

CONTEXT
I am preparing the quarterly pricing review for the product. I need the buyer's verdict on our price, by competitor where possible, and the deals we lost on price with what the buyer said.

PULL FROM THE UNIVERSE
- The pricing and legal section of the win/loss surveys for the window: cheaper, on par, pricier shares, with the sample.
- The competitive pricing distribution from the competitive intelligence read.
- The deals in the "pricier" bucket and the deals with loss reason Price: account, amount, competitor, stage reached.
- The deal drivers in the Commercials category on those deals, with evidence quotes.

BUILD
- The verdict table: share of buyers who found us cheaper, on par, pricier, overall and by competitor, with n.
- The lost-on-price deals as a table.
- Five verbatim quotes on price from lost deals, and two from won deals.

OUTPUT
The pricing evidence pack, with window and samples stated once.

GROUNDING
Use only survey results, deals and drivers in the Universe, cited. Rates come from the dashboard, never from counting rows. If deal amounts are withheld by workspace settings, say so.
```

### Compare pricing with a competitor

```
Using Calven MCP, compare our packaging and pricing with the competitor below.

FILL IN
- Competitor: [competitor]
- Window: [time window for price moves, e.g. last six months]

CONTEXT
Sales says the competitor undercuts us. I want what we have actually verified about their pricing and packaging, and any recent price moves.

PULL FROM THE UNIVERSE
- The competitor's dossier: pricing and packaging.
- Pricing signals from the competitor in the window.
- Our product brief: pricing and packaging.
- Buyers' price verdicts in deals against the competitor.

BUILD
- A table: tier, what is included, price if disclosed, for us and for them.
- Their recent price moves with dates.
- The buyer verdict against them, with sample.

OUTPUT
A pricing comparison, with "not disclosed" where the dossier says so.

GROUNDING
Use only the dossier, signals, product brief and surveys in the Universe. Do not estimate undisclosed prices.
```

### Find the packaging questions from deals

```
Using Calven MCP, find the packaging questions buyers raise in deals.

FILL IN
- Product: [product]

CONTEXT
I suspect some capabilities in the product sit in the wrong tier. I want the evidence from what buyers and reps said.

PULL FROM THE UNIVERSE
- Deal drivers and customer quotes about tiers, plans, add-ons, seats and what is included.
- Rep quotes in the Pricing category.
- Product gaps whose evidence mentions a tier.

BUILD
- A list of capabilities buyers expected in a different tier, with the quotes and the deals.
- The questions reps answer most often about packaging.

OUTPUT
A packaging questions list with evidence.

GROUNDING
Use only quotes and drivers in the Universe, cited. Do not propose new tiers; give me the evidence.
```

### Write the pricing input note

```
Using Calven MCP, write the pricing input note for the quarterly review below.

FILL IN
- Quarter: [quarter]
- Inputs: [paste the evidence pack, the competitor comparison and the packaging questions]

CONTEXT
The audience is the pricing committee. They need the market and buyer side of the decision; finance brings the margin side.

PULL FROM THE UNIVERSE
- Anything in the inputs that needs a fresh number: win rates by deal size band, average deal size and its change, from the ICP and win/loss reads.

WRITE
- The buyer verdict and what it means.
- Where we lose on price and to whom.
- Where competitors moved.
- The packaging questions and the capabilities behind them.
- Open questions the evidence does not answer.

OUTPUT
A two-page input note with sources.

GROUNDING
Use only figures from the Universe with samples. Do not recommend price points; recommend what the evidence supports testing.
```

## Advanced prompts

### Run a price ladder with your buyer personas

```
Run a Van Westendorp price ladder for my new plan, played by our buyer personas, and tell me the acceptable price range. Use Calven MCP for the personas, the price verdicts real buyers gave and what competitors charge.

FILL IN
- Plan: [paste the plan: what's in it, who it's for]
- Price points to test: [paste four to six monthly or annual prices]
- Product: [product]

CONTEXT
I'm about to set a price for the pricing review and I have no survey budget or time. I want a disciplined first read of where the price gets "too cheap to trust" and where it gets "too expensive to consider", calibrated against what buyers already told us.

FROM CALVEN
- The buyer and stakeholder personas with their canvases: goals, pains, budget objections.
- The price verdicts from the win/loss pricing survey section (cheaper, on par, pricier) by competitor, with n.
- Each main competitor's pricing and packaging from their dossier.

SIMULATE
- Have each persona answer the four Van Westendorp questions in the first person (too cheap, a bargain, getting expensive, too expensive), reasoning from their canvas and the competitor prices they'd compare against.
- Then run a Gabor-Granger pass: at each test price, would they buy, yes or no, and why.
- Calibrate: if real buyers already call us pricier than a competitor at the current price, the personas can't call a higher price a bargain. Say where you adjusted.
- If you can run code, plot the four curves and mark the optimal and indifference price points.

OUTPUT
The acceptable price range, the optimal point, a demand curve across the test prices by persona, and the one persona whose objection sets the ceiling.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. This is synthetic: call it a hypothesis to test with real buyers, and don't present persona answers as survey data.
```

### Find the break-even on a repackaging move

```
Tell me whether moving a capability to a higher tier pays for itself, and where it breaks even. Use Calven MCP for how deals behave by size band and what buyers said about packaging.

FILL IN
- The move: [capability, from which tier to which]
- Tier economics: [paste customers, ARR and price per tier]
- Usage: [paste how many accounts in each tier use the capability, or write "unknown"]

CONTEXT
Finance wants more revenue per account and sales fears the move will lose deals at the low end. I want the numbers that settle it before the pricing review, not after.

FROM CALVEN
- Win rate and average deal size by deal size band, from the win/loss and ICP dashboards, with n.
- Deals lost with loss reason Price in the last 12 months, paged from the CRM, with amount and competitor.
- Deal drivers and quotes about tiers, plans and packaging, with direction (helped or hurt).

MODEL
- Build the upside: accounts that upgrade to keep the capability, times the price gap.
- Build the downside: accounts that downgrade or churn, plus new deals lost at the low end, using the low band's win rate as the base.
- Solve for break-even: the upgrade rate at which the move is neutral. Then run sensitivity on the three inputs that matter most.
- If you can run code, build it as a spreadsheet with live formulas so I can change the inputs in the room.

OUTPUT
The break-even upgrade rate, a sensitivity table, the packaging quotes for and against, and a go, no-go or test call in three lines.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent an upgrade or churn rate; range it and show what happens at each end.
```

### War-game a competitor's price cut

```
War-game what happens if our main rival cuts price, and give me our best response. Use Calven MCP for their pricing, how we win and lose against them, and what buyers said about price in those deals.

FILL IN
- Competitor: [competitor]
- Their likely move: [e.g. 30% off the mid tier, or a free plan]
- Our options: [paste the responses on the table: match, hold, repackage, add value]

CONTEXT
Sales is nervous and wants to match. Matching costs margin on every deal, not just the contested ones. I want a structured read of how the rival and the buyers respond to each move before anyone promises a discount.

FROM CALVEN
- The competitor's dossier pricing and packaging, and any pricing signals in the last 12 months.
- Our competitive win rate against them and the top loss reasons, from the competitive intelligence dashboard, with n.
- Deal drivers in the Commercials category from deals against them, with evidence quotes.

WAR-GAME
- Build a payoff matrix: each of our options against each of their follow-ups (hold, cut deeper, bundle), with payoffs in win rate and margin.
- Play three rounds of move and counter-move. Each move must be consistent with their recorded behaviour and our battlecard.
- Find the equilibrium: the option that does best whatever they do next.
- Name which buyers actually decide on price, from the drivers, and which decide on something else.

OUTPUT
The payoff matrix, the three-round narrative, the recommended response, and the one signal that would tell us to change course.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a competitor move or price nobody recorded; mark their follow-ups as scenarios.
```

## Ad hoc questions

- What share of buyers found us pricier than [competitor] this year? With the sample.
- Which deals did we lose on price in [window], and to whom?
- What did buyers say about our price when they still bought?
- What does [competitor] charge for their mid tier?
- Has any competitor changed pricing in the last 90 days?
- Which capabilities do buyers expect in a lower tier? Quotes.
- What is our average deal size, and how did it change?
- What is the win rate for deals under [amount] versus over?
- What does our product brief say is in each plan?
- Which pricing objections does our messaging already handle?
- Did price decide any lost deals, or was it alongside a missing feature?
- When buyers said we were pricier, how often did we still win?
- Which segment is most price sensitive in our deals?
- Which competitor do buyers compare our price with most often, and do we win those deals anyway?
- Which plan or tier name comes up in lost-on-price deals, and what did the buyer expect in it?
- Do our reps discount on calls before the buyer raises price? Quote the vendor quotes.
- Is price sensitivity higher in new business or in renewals in our deals?
- Which claims about price or value in our messaging have no proof point?
- When a deal was lost on price, what else hurt it according to the deal drivers?

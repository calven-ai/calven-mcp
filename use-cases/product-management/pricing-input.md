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

# Pricing input

**Team:** Product management · also finance, sales leadership, product marketing
**Impact:** High. Pricing and packaging reviews run on anecdotes about "too expensive". Calven holds the pricing verdicts buyers gave in win/loss, price feedback on deals, deal sizes and win rates by band, and what competitors charge, so the review starts from the evidence.
**Prerequisites:** win/loss surveys running (pricing and legal survey section, pricing deals drill-down), CRM connected (price feedback, deal size bands, loss reason Price), competitors tracked (pricing and packaging in dossiers, pricing signals). Strategy documents approved for the current packaging (product brief).
**Related:** [Pricing and packaging review](../finance-and-investor-relations/pricing-and-packaging-review.md) is finance's read of the same evidence for the pricing decision.

## What the team is trying to do

Decide what a capability costs, which tier it sits in, and whether the current packaging loses deals. Done means a pricing input note for the quarterly review: how buyers rate our price against each competitor, which deals were lost on price and what they said, win rates by deal size band, where competitors moved on price, and the packaging questions that keep appearing in deals. The pricing model, discounting policy and finance's margin view stay outside Calven.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Read the price verdicts | How buyers rate our price: cheaper, on par, pricier, by competitor | The pricing and legal survey section; the competitive pricing distribution | Win/loss dashboard (surveys: pricing & legal), competitive intelligence dashboard (market movement) |
| 2 | Read the lost-on-price deals | Which deals were lost on price, to whom, and what buyers said | Deals in the pricing buckets and with loss reason Price; deal drivers in the Commercials category | `get_insight_detail` (pricing deals), CRM deals, deal drivers |
| 3 | Read the won deals | What buyers said about price when they still bought | Drivers and quotes on won deals that mention price | Deal drivers, quotes |
| 4 | Read competitor pricing | What rivals charge and how they package | Dossier pricing and packaging; pricing signals | Competitor deep dive, competitive signals |
| 5 | Read packaging questions | Which capabilities buyers expected in a lower tier | Deal drivers and quotes about tiers, plans and packaging; sales FAQ questions | Deal drivers, quotes, vendor quotes |
| 6 | Check the current packaging | What the product brief says about plans | Product brief, pricing and packaging section | Product brief |
| 7 | Write the input note | For the pricing review | The assembled evidence | All of the above |
| 8 | Model and decide | Price points, margins, discount policy | Calven does not help here | |
| 9 | Communicate | Tell sales and customers | Fact-check the announcement against the brief (see release notes) | Product brief |

## Recommended prompts

### Step 1 and 2: the price verdicts and the lost deals

```
Using Calven MCP, show me how buyers rate our price and which deals we lost on it in [window].

CONTEXT
I am preparing the quarterly pricing review for [product]. I need the buyer's verdict on our price, by competitor where possible, and the deals we lost on price with what the buyer said.

PULL FROM THE UNIVERSE
- The pricing and legal section of the win/loss surveys for [window]: cheaper, on par, pricier shares, with the sample.
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

[name the product and the window]
```

### Step 4: competitor pricing

```
Using Calven MCP, compare our packaging and pricing with [competitor].

CONTEXT
Sales says [competitor] undercuts us. I want what we have actually verified about their pricing and packaging, and any recent price moves.

PULL FROM THE UNIVERSE
- [competitor]'s dossier: pricing and packaging.
- Pricing signals from [competitor] in the last [window].
- Our product brief: pricing and packaging.
- Buyers' price verdicts in deals against [competitor].

BUILD
- A table: tier, what is included, price if disclosed, for us and for them.
- Their recent price moves with dates.
- The buyer verdict against them, with sample.

OUTPUT
A pricing comparison, with "not disclosed" where the dossier says so.

GROUNDING
Use only the dossier, signals, product brief and surveys in the Universe. Do not estimate undisclosed prices.

[name the competitor]
```

### Step 5: packaging questions from deals

```
Using Calven MCP, find the packaging questions buyers raise in deals.

CONTEXT
I suspect some capabilities sit in the wrong tier. I want the evidence from what buyers and reps said.

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

[name the product]
```

### Step 7: the pricing input note

```
Using Calven MCP, write the pricing input note for the [quarter] review.

CONTEXT
Below are the evidence pack, the competitor comparison and the packaging questions. The audience is the pricing committee. They need the market and buyer side of the decision; finance brings the margin side.

PULL FROM THE UNIVERSE
- Anything above that needs a fresh number: win rates by deal size band, average deal size and its change, from the ICP and win/loss reads.

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

[paste the three inputs]
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

## Good practice

- Ask for the verdict with its sample. Price verdicts per competitor often rest on a handful of responses.
- Separate "lost on price" from "pricier but lost on something else". The deal drivers say which decided.
- Read the won deals too. Buyers who found us pricier and still bought tell you what the price buys.
- Keep competitor prices as the dossier states them. "Not disclosed" is a finding.
- Bring packaging questions as evidence, not proposals. The committee decides tiers; Calven shows what buyers expected.
- Run the same pack every quarter with the same window length.

## Not covered today

- The pricing model, margins, discount approvals and quotes. Finance and the CPQ tool own those.
- Competitor price pages live. The dossier holds what the agent recorded.
- Writing the new price list into the product brief. The product intelligence agent and PMM do that in Calven.

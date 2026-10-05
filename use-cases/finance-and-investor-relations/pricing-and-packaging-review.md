# Pricing and packaging review

**Team:** Finance and investor relations · also product marketing, product management, sales leadership
**Impact:** High. Price is one of the six recorded loss reasons and the one finance can change fastest. A review built on what buyers actually said about price, and on how rivals package, replaces the yearly argument between sales and finance.
**Prerequisites:** win/loss surveys running (pricing verdicts, Commercials drivers), competitors tracked (dossier pricing and packaging). Better with CRM connected (price feedback per deal, deal size bands) and call transcripts ingested (pricing quotes).
**Related:** [Pricing input](../product-management/pricing-input.md) is the product team's evidence note that feeds this review.

## What the team is trying to do

Decide whether the price list, the tiers and the discount bands still fit the market: where price cost deals, where it did not matter, how buyers judged us against rivals, and what those rivals charge. Done means a recommendation per tier with the evidence, the deals it is based on, and the competitor comparison. Without the company's own knowledge the review runs on anecdotes from the loudest rep.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Frame the review | Which tiers, which segments, what question | The current packaging and pricing as published in the product brief | Product brief (Pricing & Packaging) |
| 2 | Buyer pricing verdicts | How buyers rated our price against the alternative | The pricing section of the win/loss surveys: cheaper, on par, pricier; the deals in each bucket with outcome | Win/loss dashboard (surveys: pricing & legal), `get_insight_detail` pricing deals |
| 3 | Price as a deal driver | Did price decide deals, and in which direction | Deal drivers in the Commercials category: direction, rank, outcome, segment, with the buyer's words | Deal drivers, survey responses |
| 4 | Loss reasons by segment | Where "Price" is the recorded loss reason | Lost deals with loss reason Price by segment, size band and competitor; price feedback per deal | CRM deals |
| 5 | Competitor pricing | What rivals charge and how they package | Each dossier's Pricing & Packaging section; pricing-change signals; the pricing distribution on the competitive dashboard | Competitor deep dives, competitive signals, competitive intelligence dashboard (market movement) |
| 6 | Customer language on price | How customers talk about value and cost | Quotes of type Pricing / cost, and the Pricing category of vendor quotes (how reps handle it) | Quotes, vendor quotes |
| 7 | Model the options | Revenue impact of each change | Calven does not help here | |
| 8 | Recommend | Write the recommendation per tier with evidence | A draft grounded in steps 2 to 6 with sources | All of the above |
| 9 | Review with sales and PMM | Agree the change and the messaging | Messaging objection handling for price; the product brief to update | Messaging, product brief |

## Recommended prompts

### Steps 2 to 4: what buyers said about price

```
Using Calven MCP, tell me where price decided deals in [window].

CONTEXT
I run the yearly pricing review. I need the evidence on price from buyers and the CRM before I model any change.

PULL FROM THE UNIVERSE
- The pricing section of the win/loss surveys: how many buyers rated us cheaper, on par or pricier, and the outcome of the deals in each bucket.
- Deal drivers in the Commercials category: which helped, which hurt, which decided the deal, with the buyer's words.
- Lost deals with loss reason Price, by segment, deal size band and competitor, and the price feedback recorded on each.

BUILD
- A table: pricing verdict, deals, win rate, n.
- A table: Commercials drivers by direction and rank, with one verbatim each.
- A table: price losses by segment and competitor.
- A three-line read: where price actually decided, where it was an excuse.

OUTPUT
The three tables and the read, with sources.

GROUNDING
Use only win/loss, deal driver and CRM data in the Universe and cite it. Use the dashboard's counts, never your own. Mark any bucket below the floor as too small.

[name the window and product]
```

### Step 5: competitor pricing

```
Using Calven MCP, compare our pricing and packaging with our Tier 1 competitors.

CONTEXT
Part of the pricing review. I want a side-by-side of what each rival charges and how they package, as recorded in their dossiers, and any pricing moves this year.

PULL FROM THE UNIVERSE
- Our Pricing & Packaging section from the product brief.
- The Pricing & Packaging section of each Tier 1 competitor's dossier.
- Competitive signals about pricing or packaging changes in [window], with dates and sources.
- The pricing distribution on the competitive intelligence dashboard.

BUILD
- A table: vendor, model, tiers, published price points or "not disclosed", last change and date.
- Where we sit in the distribution and what changed this year.

OUTPUT
The table and a short read.

GROUNDING
Use only dossier and signal data in the Universe and cite each with its date. Where a dossier says pricing is not disclosed, keep it that way. Do not estimate a competitor's price.

[name the competitors to include, or say all Tier 1]
```

### Step 6: customer language on price

```
Using Calven MCP, show me how customers and our reps talk about price.

CONTEXT
I want the words buyers use when price comes up, and how reps handle it, before we rewrite the pricing page and the objection handling.

PULL FROM THE UNIVERSE
- Customer quotes of type Pricing / cost, by sentiment, with account and role.
- Rep quotes in the Pricing category: how the field explains and defends price.
- The price objections in our messaging's objection handling section.

BUILD
- The recurring buyer phrases about price, positive and negative, with a verbatim each.
- Where the reps' answers match the messaging and where they improvise.
- The objections the messaging does not cover.

OUTPUT
Three short lists with sources.

GROUNDING
Use only quotes in the Universe, verbatim and attributed. Do not polish customer language.

[name the window]
```

### Step 8: the recommendation

```
Using Calven MCP, draft the pricing review recommendation.

CONTEXT
Below are my proposed changes per tier and the revenue model result from our planning tool. I want each proposal backed or challenged by the buyer evidence.

PULL FROM THE UNIVERSE
- The pricing verdicts, Commercials drivers and price losses from win/loss and the CRM.
- Competitor pricing from the dossiers.
- Price objections from messaging and the quotes behind them.

WRITE
For each proposed change: the evidence for it, the evidence against it, the segment it affects most, and the competitor comparison. End with the three risks.

OUTPUT
A two-page recommendation with sources per claim.

GROUNDING
Use only evidence in the Universe and cite it. Do not add revenue numbers beyond what I paste. If the evidence does not support a proposal, say so.

[paste the proposals and the model result]
```

## Ad hoc questions

- How many buyers rated us pricier than the alternative last year, and did we win those deals?
- Which segment loses most deals on price?
- Did price decide any deals we won? What did the buyer say?
- What does [competitor] charge, according to their dossier, and when did it last change?
- Which competitor has changed pricing this year?
- What are the price objections in our messaging, and do reps use those answers?
- Give me the negative customer quotes about cost from the last six months.
- What is our published packaging in the product brief right now?
- Are deals lost on price smaller or larger than our average?
- Which lost deals had "More expensive" price feedback and went to [competitor]?
- How often is price the deciding driver versus a secondary one?

## Good practice

- Separate verdict, driver and loss reason. A buyer can rate us pricier and still buy; the three tables answer different questions.
- Scope to one product in a multi-product workspace. Blended pricing evidence misleads.
- Ask for n on every bucket. Pricing buckets go thin fast.
- Keep competitor prices as recorded. "Not disclosed" is an answer, and a guess is a liability in a board pack.
- Bring the revenue model from the planning tool. Calven holds the evidence, not the model.
- Close the loop in the app: the pricing change lands in the product brief and the messaging objection handling, approved by PMM.

## Not covered today

- Revenue modelling, elasticity and margin.
- Live competitor price pages. The competitive intelligence agent records changes; MCP reads them.
- Changing the price list or the product brief. That happens in Calven and the billing system.
- Deal-level invoicing and discounts given, unless the CRM carries them as deal fields.

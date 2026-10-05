# Pricing and packaging review

**Related:** [Pricing input](../product-management/pricing-input.md) is the product team's evidence note that feeds this review.

It's the yearly pricing review and you want to know whether the price list, tiers and discount bands still fit the market. You get a recommendation per tier with the evidence, the deals it rests on and the competitor comparison. Calven replaces the loudest rep's anecdotes with what buyers actually said about price, where it cost deals and where it didn't matter, and what rivals charge.

## Prompts

### Find where price decided deals

```
Using Calven MCP, tell me where price decided deals in the window below.

FILL IN
- Window: [time window, e.g. last two quarters]
- Product: [product, or leave blank for all]

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
```

### Compare pricing with Tier 1 competitors

```
Using Calven MCP, compare our pricing and packaging with the competitors below.

FILL IN
- Competitors: [competitors to include, or all Tier 1]
- Window: [time window for pricing moves, e.g. this year]

CONTEXT
Part of the pricing review. I want a side-by-side of what each rival charges and how they package, as recorded in their dossiers, and any pricing moves this year.

PULL FROM THE UNIVERSE
- Our Pricing & Packaging section from the product brief.
- The Pricing & Packaging section of each competitor's dossier.
- Competitive signals about pricing or packaging changes in the window, with dates and sources.
- The pricing distribution on the competitive intelligence dashboard.

BUILD
- A table: vendor, model, tiers, published price points or "not disclosed", last change and date.
- Where we sit in the distribution and what changed this year.

OUTPUT
The table and a short read.

GROUNDING
Use only dossier and signal data in the Universe and cite each with its date. Where a dossier says pricing is not disclosed, keep it that way. Do not estimate a competitor's price.
```

### Show how buyers and reps talk about price

```
Using Calven MCP, show me how customers and our reps talk about price.

FILL IN
- Window: [time window, e.g. last two quarters]

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
```

### Draft the pricing review recommendation

```
Using Calven MCP, draft the pricing review recommendation.

FILL IN
- Proposals: [paste the proposals]
- Model result: [paste the model result]

CONTEXT
The proposals are my changes per tier, and the model result comes from our planning tool. I want each proposal backed or challenged by the buyer evidence.

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

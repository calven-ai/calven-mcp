# Pricing objections


The buyer says you're too expensive, and you want to answer with a value argument and a question instead of a discount. You get the packaging, how buyers who paid it describe the value, how often price actually decided a deal versus got named as cover, and where the competitor's price sits as far as the record knows. Calven adds that evidence, so a pricing objection doesn't turn straight into a negotiation.

## Prompts

### Answer a pricing objection with evidence

```
Using Calven MCP, help me answer a pricing objection in the deal below.

FILL IN
- Deal: [deal]
- Persona: [persona]
- Account: [account]
- Buyer said: [what they said about price]
- Segment: [segment]
- Competitor: [competitor that quoted lower, or leave blank]

CONTEXT
The persona at the account said what is quoted above about price. The competitor, if named, quoted lower. I want to hold price with evidence.

PULL FROM THE UNIVERSE
- Pricing and packaging from the product brief, and the approved objection handling on price.
- How often price decided deals in the segment: the pricing drivers with rank, and the win rate when buyers found us cheaper, on par or pricier, with n.
- What the competitor's dossier says about their pricing, and any recent pricing signal.
- Two quotes from buyers who describe the return, verbatim.

BUILD
- What the buyer is really saying: price, budget, or value not yet shown.
- The answer in the approved framing, then in the customer's words.
- The question back.
- The proof, attributed.
- The honest read: how often this objection actually decides deals like this one.

OUTPUT
A short card with sources.

GROUNDING
Numbers from the dashboards only, with n. Competitor pricing only as the dossier states it; if it says undisclosed, say undisclosed. No discount suggestions.
```

### See how often price decides our deals

```
Using Calven MCP, how often does price actually decide our deals?

FILL IN
- Window: [time window, e.g. last two quarters]
- Segment: [segment]

CONTEXT
My manager says price is an excuse. I want the record for the segment.

PULL FROM THE UNIVERSE
- Deals lost with loss reason Price in the window, and the pricing drivers on surveyed deals: how many ranked as deciding the deal.
- The win rate by pricing verdict (cheaper, on par, pricier) with n.
- The verbatim reasons on deals where price decided it.

BUILD
- The share of losses where price was the stated reason versus where the survey says it decided the deal.
- The pattern in the verbatims: value not shown, budget cycle, or the competitor's number.

OUTPUT
Three numbers with n, then the pattern and the quotes.

GROUNDING
Dashboard and record figures only, cited with window. Do not infer beyond what the sample supports.
```

### Check your pricing response before sending

```
Using Calven MCP, check my pricing response before I send it.

FILL IN
- Persona: [persona]
- Account: [account]
- Response: [paste your response]

CONTEXT
The response is my written answer to a pricing objection from the persona at the account.

PULL FROM THE UNIVERSE
- Pricing and packaging from the product brief.
- The approved objection handling on price.

CHECK
- Any plan, inclusion or price I state that the brief does not.
- Where I concede value instead of showing it.

OUTPUT
My response annotated, then a tighter version.

GROUNDING
Judge against the brief and messaging only, cited.
```

## Advanced prompts

### Run a price ladder with the buying committee

```
Run a Van Westendorp price ladder with the buying committee's personas and find where our price stops feeling fair. Use Calven MCP for the personas, our packaging and what real buyers said about price.

FILL IN
- Our quote: [the price in the proposal, and the plan]
- Committee: [the personas on the deal]
- Alternatives: [what the buyer compares us to: a competitor, a hire, doing nothing]
- Segment: [segment]

CONTEXT
The champion says it's too expensive. I don't know if that's the CFO's number, the champion's fear or a bluff. I want to see, per role, where the price feels too cheap to trust, a bargain, getting expensive and too expensive.

FROM CALVEN
- Each persona's canvas: goals, budget pains, objections.
- Pricing and packaging from the product brief.
- Price feedback and loss reasons on deals in the segment, and the pricing slice of the win/loss dashboard, with n.
- Buyer quotes tagged Pricing / cost, verbatim.

SIMULATE
- Have each persona answer the four Van Westendorp questions in their own voice, anchored on their alternative, with a reason.
- Simulate ten respondents per persona with stated variance around the anchor.
- Plot the four curves and find the acceptable range and the optimal price point per persona.
- Mark where our quote sits for each.
- If you can run code, plot it.

OUTPUT
The ranges per persona, where our quote falls, which persona the objection really comes from, and the value line that moves their "getting expensive" point.

GROUNDING
Label every price as Calven (cited, with n), mine, or your assumption. Simulated answers are extrapolation from canvases and quotes; say that on the chart.
```

### Build the give-get matrix before you negotiate

```
Build my negotiation plan as a give-get matrix with both sides' walk-away and the zone of possible agreement. Use Calven MCP for what we can trade, what buyers value and what their alternative is worth.

FILL IN
- Deal: [deal]
- Our floor: [the lowest price and terms you're allowed to go to]
- Their ask: [paste what procurement asked for]
- Their alternative: [competitor, or "do nothing"]

CONTEXT
Procurement opens with 30 percent off. I don't want to trade price for nothing. I want to know what each concession costs us, what it's worth to them, and where the deal lands if both sides are rational.

FROM CALVEN
- The pricing and packaging section of the product brief: plans, limits, what's included.
- The competitor's dossier pricing section and battlecard, for their alternative.
- Deal drivers in the Commercials category and price feedback on won and lost deals, with n.
- The procurement or finance persona canvas: what they're measured on.

METHOD
- Estimate both BATNAs: ours (what this deal's loss costs us) and theirs (the alternative's cost and risk).
- Define the ZOPA between our floor and their walk-away.
- List eight tradeable variables: term, payment timing, plan, seats, case study, start date, ramp, reference call. Score each on cost to us and value to them.
- Pair every give with a get. Order the concessions from cheapest to dearest.

OUTPUT
A give-get table, the ZOPA with my opening, target and walk-away, and the script for the first counter.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't price a competitor beyond what the dossier recorded.
```

### Find the discount that pays for itself

```
Work out whether a discount pays for itself on this deal: how much it has to raise the chance of winning to beat holding price. Use Calven MCP for how price actually affects our win rate.

FILL IN
- Deal: [deal]
- List price: [annual amount]
- Discount options: [the discounts you're considering, e.g. 10, 15, 20 percent]
- Current odds: [your honest probability of winning at list]

CONTEXT
The champion hints a discount closes it this quarter. My manager will approve it if I make the case. I want the math, not the hint.

FROM CALVEN
- How often price was the stated loss reason versus a decisive driver, from win/loss, with n.
- Win rate on deals where buyers said we were pricier, from the pricing section of the dashboard, with n.
- Average deal size and segment win rate from the ICP dashboard, with n.
- Renewal and expansion deals on comparable accounts in the CRM mirror, for the lifetime cost of a lower base.

MODEL
- Expected value at list: probability times price. Same for each discount.
- Solve for the break-even lift: the win probability each discount needs to match list.
- Add the lifetime effect: the discount carried into renewal for three years, with a stated renewal assumption.
- Compare the break-even lift with what the evidence says price actually moves.
- Show a sensitivity table: discount by starting probability.

OUTPUT
The break-even table, the verdict per option, and a counter-offer that trades the discount for something worth more.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't claim a discount lifts win rate by a set amount; Calven doesn't measure that.
```

## Ad hoc questions

- What is in each plan, as the product brief states it?
- How often is price the reason we lose, and how often did it really decide the deal?
- What is our win rate when the buyer thinks we are pricier?
- What does the [competitor] dossier say they charge?
- Which quotes show the return a customer got?
- What is the approved answer to "it's too expensive"?
- Did [competitor] change pricing recently?
- Which buyers said we were pricier and bought anyway? What did they say?
- What does the ICP say about budget or company size?
- What do buyers on deals lost to price say they needed?
- On deals lost to price, what did the buyer actually rank first in win/loss?
- Which plan do won deals in [segment] most often land on?
- Which buyers called us expensive in the quote library, and did they buy?
- Where does [competitor]'s pricing undercut ours, according to the dossier?
- What do reps say on calls when pricing comes up, from vendor quotes?
- Is the price objection more common at a specific stage, with n?

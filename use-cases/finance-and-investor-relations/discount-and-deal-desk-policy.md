# Discount and deal desk policy


You're setting discount bands for the year and you don't want the policy to be the last big deal's exception. You get a band per segment and deal size with the deals behind it, and a deal desk checklist that asks for the competitive context before anyone approves. Calven shows where a concession decided a win, where we discounted and lost anyway, which competitors force the discount and which segments expect one.

## Prompts

### Show whether discounts won deals

```
Using Calven MCP, show me whether our discounts won deals in the window below.

FILL IN
- Window: [time window, e.g. last two quarters]
- Product: [product, or leave blank for all]

CONTEXT
I set the discount policy. I want to know when a commercial concession decided a deal and when we discounted and lost anyway.

PULL FROM THE UNIVERSE
- Deal drivers in the Commercials category: direction, rank, outcome, segment, the buyer's words.
- The deals in the cheaper and on par pricing buckets that we lost, with loss reason and who won.
- The deals in the pricier bucket that we won, with the winning driver.

BUILD
- A table: Commercials drivers that decided deals, won versus lost, with a verbatim each.
- A table: deals where price was favourable and we still lost, with the real loss reason.
- A table: deals we won while pricier, and what won them.

OUTPUT
The three tables with sources, and a four-line read.

GROUNDING
Use only win/loss, deal driver and CRM data in the Universe and cite it. Use the dashboard's counts. Say where amounts are withheld.
```

### Break price losses down by segment and competitor

```
Using Calven MCP, break price losses down by segment and competitor.

FILL IN
- Window: [time window, e.g. last two quarters]

CONTEXT
I am setting discount bands per segment. I need to see who actually forces a discount.

PULL FROM THE UNIVERSE
- Lost deals with loss reason Price, by account size, industry, deal size band and the competitor they went to.
- Price feedback recorded on those deals.
- Our win rate against each of those competitors, with n.

BUILD
- A table: segment × competitor, price losses, share of all losses in that segment.
- The competitors where the price loss rate is above our average.

OUTPUT
The table and the shortlist.

GROUNDING
Use only CRM and dashboard data in the Universe and cite it. Do not compute a win rate from rows; use the dashboard's.
```

### Draft the discount approval matrix

```
Using Calven MCP, draft a discount approval matrix from our evidence.

FILL IN
- Matrix: [paste the current matrix]

CONTEXT
The matrix is the current one. I want a revised one where each band and each required approval is tied to what the deals show.

PULL FROM THE UNIVERSE
- Commercials drivers by outcome and segment.
- Price losses by segment and competitor, and rival pricing signals this year.
- The pricing section of our product brief.

BUILD
- A revised matrix: segment, deal size band, discount band, approver, the evidence line.
- The required context a request must carry: competitor in the deal, buyer's stated alternative, the driver that is actually at stake.

OUTPUT
The matrix and the checklist, with sources.

GROUNDING
Ground each band in the Universe and cite it. Where the evidence is thin for a segment, keep the current band and say why.
```

### Review one discount request

```
Using Calven MCP, review this discount request.

FILL IN
- Discount: [discount]
- Deal: [deal]
- Request: [paste the request]

CONTEXT
Sales asks for the discount on the deal, as set out in the request. I want the competitive context and the evidence before I approve.

PULL FROM THE UNIVERSE
- The deal: stage, competitors, contact roles, ICP fit tier, account size.
- The battlecard for the competitor in the deal: pricing traps, objection handling, where we win.
- How often price decided deals against that competitor, and whether we won them when pricier.

CHECK
- Is the discount consistent with what won similar deals, or is it bigger than the evidence needs.
- What the rep could trade instead of price, from the battlecard.

OUTPUT
A half-page recommendation: approve, counter, or decline, with the evidence.

GROUNDING
Use only the deal record, battlecard and win/loss evidence in the Universe and cite them. Do not invent the buyer's position.
```

## Advanced prompts

### Find the discount where returns stop

```
Fit a discount response curve on our closed deals and find the discount level past which extra discount stops buying win rate. Use Calven MCP for each deal's outcome, price feedback, competitor and segment.

FILL IN
- Discount export: [attach a CSV of closed deals with deal name and discount %, from the CPQ or deal desk log]
- Window: [window]

CONTEXT
Reps ask for more discount because it feels like it helps. If win rate flattens at 15%, everything above that is margin given away. That's the single most useful number for the approval matrix.

FROM CALVEN
- Closed deals in the window, matched by name to my export: status, segment, size band, competitors, price feedback, loss reason.
- Deal drivers in the Commercials category with direction and whether they decided the deal.
- Win rate by segment and by competitor from the dashboards, with n.

METHOD
- Join my discount data to the deals. Report how many matched.
- Bucket discounts (0, 1 to 10, 11 to 20, 21 to 30, over 30) and show win rate per bucket, then split by segment and by whether a competitor was present.
- If you can run code, fit a logistic regression of won on discount, segment and competitor, and plot predicted win rate against discount.
- Find the knee: the discount where the marginal gain per extra point falls below a labelled threshold.

OUTPUT
The curve or bucket table, the knee per segment, and a proposed approval band for each with the evidence in one line.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Discount comes only from my file; never infer one from amount. Deals that don't match are listed, not dropped silently.
```

### Price a discount request as a decision tree

```
Turn one non-standard discount request into an expected-value decision tree: approve, hold the line, or trade for something. Use Calven MCP for the deal's facts and the win rates that set each branch's odds.

FILL IN
- Deal: [deal]
- Request: [the discount and terms the rep is asking for]
- Trade options: [what we could ask for instead, e.g. multi-year, case study, prepayment]

CONTEXT
The deal desk has 24 hours and a gut feeling. A decision tree with real odds makes the call defensible, and shows when a trade beats a discount.

FROM CALVEN
- The deal: amount, stage, segment, fit tier, competitors, contact roles, price feedback.
- Win rate for deals like this one (segment, tier, competitor), with n.
- Deal drivers in the Commercials category from similar deals, with evidence quotes, so we know whether price decided them.
- The battlecard's guidance on what to trade instead of price against this competitor.

MODEL
- Branches: approve as asked, approve half, hold price, trade. For each, the probability of winning (from the base rate, adjusted by a labelled amount per branch) and the value if won (amount, margin, plus the trade's value).
- Expected value per branch. Show the arithmetic.
- Sensitivity: how much the win probability under "hold" would have to fall for approval to win.
- If you can run code, draw the tree.

OUTPUT
The tree with expected values, the recommended branch, the break-even probability, and the two-line reply to the rep.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Branch adjustments are your assumption; keep them small and state them.
```

## Ad hoc questions

- How often did a commercial concession decide a deal we won?
- Which deals did we lose while being cheaper, and why?
- Which competitor forces the most price losses?
- Did [competitor] cut prices this year? When, and what is the source?
- What share of Enterprise losses are on price versus Mid-market?
- What does the battlecard say to trade instead of a discount against [competitor]?
- Which segments won while we were pricier?
- Is [deal] in profile, and who is in it from the competition?
- What price feedback did the buyer give on [deal]?
- How many deals had "More expensive" feedback and still closed won?
- Which competitor's deals do we win without any Commercials driver helping?
- In deals lost on price, did the buyer rate us more expensive or similar?
- Which segment has the most deals where price helped us win?
- What do buyers say about payment terms or contract length on calls?
- Which reps' calls contain the most Pricing vendor quotes?

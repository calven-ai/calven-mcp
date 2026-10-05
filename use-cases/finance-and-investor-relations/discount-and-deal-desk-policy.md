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

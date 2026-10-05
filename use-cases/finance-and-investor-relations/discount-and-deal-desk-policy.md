# Discount and deal desk policy

**Team:** Finance and investor relations · also revenue operations, sales leadership
**Impact:** Medium. Discount bands are set once a year and tested on every non-standard deal. Evidence on which discounts won and which did not, by segment and competitor, turns the approval matrix from a negotiation into a policy.
**Prerequisites:** win/loss surveys running (Commercials drivers, pricing verdicts), CRM connected (deals with price feedback, competitors, outcome). Better with competitors tracked (rival pricing moves).

## What the team is trying to do

Set discount thresholds and the approval matrix on evidence: where a concession decided a win, where we discounted and lost anyway, which competitors force the discount and which segments expect one. Done means a band per segment and deal size with the deals behind it, and a deal desk checklist that asks for the competitive context before approving. Without the company's own knowledge the policy is the last big deal's exception, generalised.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the current policy | Thresholds, approvers, SLA | Calven does not help here | |
| 2 | Where concessions decided deals | Did a commercial concession help or hurt, and did it decide | Commercials drivers by direction and rank, with outcome and segment | Deal drivers, win/loss dashboard (surveys: pricing & legal) |
| 3 | Discount-and-lost deals | Deals where we were cheaper or on par and still lost | Deals in the cheaper and on par pricing buckets with a lost outcome, their loss reasons and winner | `get_insight_detail` pricing deals, CRM deals |
| 4 | By segment and competitor | Who expects a discount | Lost deals on Price by account size, industry, deal size band and lost_to; win rate against each competitor | CRM deals, competitive intelligence dashboard |
| 5 | Rival pricing pressure | Which competitors cut price this year | Pricing signals with dates | Competitive signals |
| 6 | Draft the matrix | Bands per segment and size, approvers, required context | A draft grounded in steps 2 to 5 | All of the above |
| 7 | Deal desk checklist | What a request must include | The battlecard's pricing traps and objection handling for the competitor in the deal | Battlecards |
| 8 | Approve and publish | Agree with sales leadership, load into the CPQ or CRM | Calven does not help here | |

## Recommended prompts

### Steps 2 and 3: did discounts win

```
Using Calven MCP, show me whether our discounts won deals in [window].

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

[name the window and product]
```

### Step 4: by segment and competitor

```
Using Calven MCP, break price losses down by segment and competitor.

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

[name the window]
```

### Step 6: draft the matrix

```
Using Calven MCP, draft a discount approval matrix from our evidence.

CONTEXT
Below is the current matrix. I want a revised one where each band and each required approval is tied to what the deals show.

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

[paste the current matrix]
```

### Step 7: deal desk review of one request

```
Using Calven MCP, review this discount request.

CONTEXT
Sales asks for [discount] on [deal]. Below is the request. I want the competitive context and the evidence before I approve.

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

[paste the request]
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

## Good practice

- Ask the three questions separately: did the concession decide, did we lose despite price, who forces it. One prompt blurs them.
- Tie every band to a segment and a competitor; a flat threshold ignores where the pressure comes from.
- Make the battlecard part of the deal desk checklist. Most price requests are a competitive objection in disguise.
- Keep margin and revenue recognition out of the prompt. They are the finance stack's job.

## Not covered today

- Margin, revenue recognition and payment terms.
- The CPQ or approval workflow.
- The discount actually granted on a deal, unless the CRM carries it as a field.
- Live competitor price pages.

# Partner fit evaluation

**Team:** Partnerships · also revenue operations, leadership
**Impact:** Medium. Recruiting the wrong partners is the most expensive mistake in a channel program: months of enablement for no pipeline. Scoring a candidate against the segments, verticals and opportunities the company actually wants to reach turns a gut call into a defensible one.
**Prerequisites:** strategy documents approved (ICP with segment tiers, priority verticals, disqualifiers), market research run (opportunities, trends). Better with CRM connected (where current pipeline and wins are, by segment and region).

## What the team is trying to do

Decide whether a candidate partner is worth recruiting: do their customers match the ICP, do they cover a priority vertical or region, do they reach an opportunity the company cannot reach alone, and is there a conflict. Done means a scored one-pager leadership can approve. The ideal partner profile is usually implicit; Calven holds the ICP and the market read it should be derived from.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the ideal partner profile | The segments, verticals, regions and offerings a partner should reach | The ICP segment tiers, priority and secondary verticals, disqualifiers; the opportunities the company wants to pursue | ICP, market opportunities |
| 2 | Gather the candidate's facts | Their customers, verticals, regions, offerings, other vendors | Calven does not help here (the candidate supplies it, or the web) | |
| 3 | Score alignment | Does their base match our ICP | The ICP attributes applied to what the candidate reports | ICP |
| 4 | Score reach | Do they open a segment or region where we are thin | Pipeline and win rates by segment and region, so "thin" is measured | ICP dashboard, CRM deals |
| 5 | Check conflict | Do they sell a tracked competitor | Competitors and signals mentioning the candidate | Competitors, competitive signals |
| 6 | Check demand | Do customers in their base ask for what they offer | Themes and quotes mentioning the candidate's category | Themes, quotes |
| 7 | Write the recommendation | Score, reasons, risks, ask | A one-pager from the scores | All of the above |
| 8 | Decide | Leadership approval, contract | Calven does not help here | |

## Recommended prompts

### Step 1: derive the ideal partner profile

```
Using Calven MCP, derive our ideal partner profile from our ICP and market opportunities.

CONTEXT
I want a written profile for recruiting [reseller / implementation / technology] partners, derived from where we want to sell, not from who approached us.

PULL FROM THE UNIVERSE
- The ICP: segment tiers, firmographics, priority and secondary verticals, regions, disqualifiers and blacklisted verticals.
- Market opportunities and trends with their status and sizing.
- Pipeline and wins by segment and region, to see where we are strong and thin.

BUILD
- The customer base a partner should have (segments, verticals, size bands, regions).
- The capabilities a partner should bring (implementation, vertical expertise, adjacent product).
- The regions or segments where a partner adds reach we lack, with the numbers.
- Disqualifiers for a partner.

OUTPUT
A one-page ideal partner profile with sources.

GROUNDING
Use only the ICP, opportunities and dashboard data in the Universe. Cite n for every rate. Do not add partner criteria the documents do not support.

[name the partner type]
```

### Step 3 to 7: score a candidate

```
Using Calven MCP, score [candidate partner] against our ideal partner profile.

CONTEXT
Below is what we know about the candidate: their customers, verticals, regions, offerings and other vendor relationships. I need a scored recommendation.

PULL FROM THE UNIVERSE
- The ICP: segment tiers, priority verticals, disqualifiers.
- Our pipeline and win rate in the candidate's segments and regions.
- The competitors we track and any signal naming the candidate.
- Customer themes and quotes mentioning the candidate's category or offering.

SCORE
- Alignment with the ICP, with the attributes that drove it.
- Reach: whether they open a segment or region where we are thin, with numbers.
- Conflict: any competitor relationship on record.
- Demand: whether our customers ask for what they offer.

OUTPUT
A scorecard (four criteria, score, reason) and a recommend / do not recommend line, with sources.

GROUNDING
Score only on what the Universe and the pasted facts support. Where a criterion cannot be judged, mark it "not enough data" rather than guessing.

[paste what you know about the candidate]
```

### Step 5: conflict check

```
Using Calven MCP, is [candidate partner] connected to any competitor we track?

CONTEXT
Before recruiting them I want to know about conflicts on record.

PULL FROM THE UNIVERSE
- Competitive signals mentioning [candidate].
- Competitor deep dives that name [candidate] as a partner or channel.

ANSWER
- Any recorded connection, with date and source, or "nothing recorded".

GROUNDING
Report only what is recorded. "Nothing recorded" is not "no conflict".

[name the candidate]
```

## Ad hoc questions

- Which verticals are priority in our ICP, and which are disqualified?
- Where is our pipeline thinnest by region?
- What is our win rate in [segment] with the sample?
- Do any competitive signals mention [candidate]?
- Which market opportunities need a partner to reach?
- Do customers ask for [candidate's offering] on calls?
- What size of company is in our ICP?
- Which segment tier has the highest win rate?
- Is [candidate's vertical] a priority or secondary vertical?
- Which opportunities are in "approved" status that a partner could accelerate?

## Good practice

- Write the ideal partner profile once from the ICP, then score every candidate against it. Scoring without a profile rewards whoever pitched best.
- Measure "reach". A partner adds reach where the numbers say you are thin, not where it feels thin.
- Treat "nothing recorded" on conflict as a prompt to ask the candidate, not as clearance.
- Keep the candidate's own facts separate from the Universe in the scorecard so the reader knows which is verified.

## Not covered today

- Researching the candidate. Their customers, financials and reputation come from them or from the web, outside Calven.
- Contract terms, margins, program tiers.
- Partner performance after signing, unless partner-sourced deals are in the CRM mirror.

# Partner fit evaluation


A candidate partner is on the table and your ideal partner profile lives in someone's head. You get a scored one-pager leadership can approve: ICP match, priority vertical or region, reach you can't get alone, and any conflict. Calven holds the ICP and the market read the profile should come from.

## Prompts

### Derive your ideal partner profile

```
Using Calven MCP, derive our ideal partner profile from our ICP and market opportunities.

FILL IN
- Partner type: [reseller, implementation or technology]

CONTEXT
I want a written profile for recruiting partners of the type above, derived from where we want to sell, not from who approached us.

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
```

### Score a candidate partner

```
Using Calven MCP, score the candidate partner below against our ideal partner profile.

FILL IN
- Candidate: [candidate partner]
- What we know: [paste what you know about the candidate]

CONTEXT
What we know about the candidate covers their customers, verticals, regions, offerings and other vendor relationships. I need a scored recommendation.

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
```

### Check a candidate for competitor ties

```
Using Calven MCP, is the candidate partner below connected to any competitor we track?

FILL IN
- Candidate: [candidate partner]

CONTEXT
Before recruiting them I want to know about conflicts on record.

PULL FROM THE UNIVERSE
- Competitive signals mentioning the candidate.
- Competitor deep dives that name the candidate as a partner or channel.

ANSWER
- Any recorded connection, with date and source, or "nothing recorded".

GROUNDING
Report only what is recorded. "Nothing recorded" is not "no conflict".
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

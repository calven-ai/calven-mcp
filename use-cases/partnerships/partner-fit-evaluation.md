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

## Advanced prompts

### Rank candidates with a weighted model

```
Rank my shortlist of candidate partners with a weighted scoring model, then stress-test the weights so I know whether the winner holds up. Use Calven MCP for the ICP, where our pipeline is thin and the opportunities we want to reach.

FILL IN
- Candidates: [attach a CSV: name, verticals, regions, customer count, team size, other vendors they carry]
- Criteria weights: [your starting weights, or write "propose them"]

CONTEXT
I can sign two partners this half. Each one costs months of enablement, so the choice has to survive a reasonable argument about what matters most.

FROM CALVEN
- The ICP: priority and secondary verticals, segment tiers, disqualifiers, blacklisted verticals and regions.
- Tier 1 and Tier 2 CRM accounts by industry and region, and how many have no deal.
- Approved market opportunities and their sizing.
- Competitive signals that mention any of the candidates.

MODEL
- Define five or six criteria (ICP vertical overlap, coverage of under-worked Tier 1 accounts, opportunity fit, ties to a competitor, capacity to sell) and a 1 to 5 scale for each.
- Score every candidate with a one-line reason per score.
- Run a sensitivity analysis: move each weight up and down by half and show where the ranking flips. If you can run code, draw 1,000 random weight sets and report how often each candidate comes out on top.
- Flag any candidate that hits a disqualifier, whatever its score.

OUTPUT
The scored table, the ranking under the base weights, each candidate's share of wins across weight sets, and a short recommendation on the two to sign.

GROUNDING
Label every input as Calven (cited), mine (the CSV) or your assumption. Don't fill in a candidate attribute I didn't give you.
```

### Put an expected value on signing them

```
Build an expected-value decision tree for signing one candidate partner: what we gain if they activate and what we lose if they don't. Use Calven MCP for deal size, win rate and the account pool in their patch.

FILL IN
- Candidate: [candidate partner]
- Their patch: [segment, region and verticals]
- Our costs: [enablement hours, MDF, partner manager time, margin or referral fee]
- Our track record: [share of past partners with a closed deal in year one, or write "unknown"]

CONTEXT
Recruiting looks free until you count the enablement. I want the decision in money and probability, so I can compare it with spending the same effort on a partner we already have.

FROM CALVEN
- Win rate, average deal size and sales cycle for their segment from the ICP dashboard, with n.
- The number of ICP-fit CRM accounts in their patch with no open deal.
- Any competitive signal that ties the candidate to a competitor.

MODEL
- First branch: they activate (registered deals in year one) or stall. Second, if active: low, expected or high deal volume. Third: a channel conflict with direct sales or not.
- Put a probability and a payoff on every leaf, net of our costs and their fee.
- Calculate the expected value, and the value of the best alternative: the same effort spent on our strongest existing partner.
- Find the activation probability at which signing breaks even. If you can run code, draw the tree and a break-even chart.

OUTPUT
The decision tree, the expected value, the break-even activation rate, and a sign or pass call with the one fact that would change it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't borrow a win rate from another segment without saying so.
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
- How many Tier 1 accounts in [region] have no deal at all?
- Which verticals win above our average but have few open deals?
- What does the ICP dashboard say predicts a win, and does [candidate's vertical] fit it?
- Which tech stack items show up most on accounts we win?
- Would any blacklisted vertical or region rule out [candidate]?
- Does any customer mention [candidate] by name on a call?

# GTM budget cases


Plan season brings a pile of requests for headcount, programs and tools, and you need to judge each on evidence, not seniority. You get a one-page case per request with the numbers, their sample size and the risk, in a format the exec team can compare. Calven shows how the targeted segment converts, how many deals the claimed gap cost, and how the opportunity is sized.

## Prompts

### Assemble the evidence for one request

```
Using Calven MCP, assemble the evidence for this GTM spend request.

FILL IN
- Spend type: [headcount, program or tool]
- Target: [segment or gap]
- Request: [paste the request]

CONTEXT
The request is for the spend type above, aimed at the target. I need the evidence that supports or weakens it before I model the cost.

PULL FROM THE UNIVERSE
- For the target segment: win rate, average deal size, sales cycle, in-profile pipeline, with n.
- If the request claims to fix a gap: the loss reason or product gap, how many deals it touched, the amount at stake, with a buyer verbatim.
- If it chases an opportunity: the opportunity's sizing, timeline and the trends behind it.
- If it targets a competitor: our win rate against them and the top loss reason.

BUILD
- The evidence for the request, each point with a number, n and source.
- The evidence against it.
- What we do not know.

OUTPUT
A one-page case in three sections, ready to attach the cost model to.

GROUNDING
Use only dashboards, records and documents in the Universe and cite them. Use dashboard counts, never your own. Mark thin samples.
```

### Rank the gaps that cost us deals

```
Using Calven MCP, rank the gaps that cost us deals this year by amount at stake.

FILL IN
- Window: [time window, e.g. this year]
- Product: [product, or leave blank for all]

CONTEXT
Several requests claim to fix something that loses deals. I want the ranked list from the evidence so I can compare the claims.

PULL FROM THE UNIVERSE
- Top loss reasons and product gaps from the insights overview, with deals and amount at risk.
- The costly objections from voice of customer.
- A buyer verbatim for each of the top five.

BUILD
- A table: gap, deals touched, amount at stake, won versus lost split, verbatim.
- A note on which gaps are product, which are messaging, which are commercial.

OUTPUT
The table and the note, with sources.

GROUNDING
Use only the dashboard's figures and cite n and the window. Amount at stake covers won and lost deals, not lost revenue; say so.
```

### Put the budget cases on one scale

```
Using Calven MCP, make these budget cases comparable.

FILL IN
- Cases: [paste the cases]

CONTEXT
The cases are the requests with their evidence sections. I want them on one scale.

PULL FROM THE UNIVERSE
- The segment rates and gap figures each case cites, re-checked against the dashboards.

BUILD
- A table: request, segment or gap, evidence strength (measured / directional / none), sample size, the single number that matters most, the main risk.

OUTPUT
The comparison table and the three requests with the strongest evidence.

GROUNDING
Re-check every number against the Universe and flag any that do not match. Do not rank on cost; I add that.
```

## Ad hoc questions

- What is the win rate and average deal size in [segment]?
- How many deals did we lose on [loss reason] this year, and what was at stake?
- Which product gap touched the most deals?
- Is [opportunity] sized, and what is its timeline?
- Which segment has the most in-profile pipeline we are not converting?
- What is our win rate against [competitor], and would fixing [gap] change it?
- Which costly objection comes up most?
- Do we win more with multi-threaded deals? By how much?
- Which lead source has the best win rate?

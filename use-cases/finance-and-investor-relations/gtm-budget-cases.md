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

## Advanced prompts

### Fund the best portfolio of requests

```
Treat this year's GTM budget requests as a portfolio and pick the combination that buys the most expected pipeline under the budget cap. Use Calven MCP for the evidence behind each request's upside.

FILL IN
- Requests: [paste each request: what, cost, the owner's claimed impact]
- Budget cap: [total available]
- Must-funds: [anything already committed]

CONTEXT
Requests get funded one by one, in order of who asks loudest. A portfolio view shows which combination returns the most, and which requests only look good alone.

FROM CALVEN
- For each request, the evidence it rests on: segment win rate and deal size, the loss driver it fixes with the pipeline it decided, or the market opportunity it targets with sizing and timeline.
- Win rates and average deal size by segment from the ICP dashboard, with n.
- Product gaps and costly objections from the win/loss and voice-of-customer dashboards, with amounts at risk.

MODEL
- For each request, estimate pipeline added as a low, likely and high range, built from the Calven evidence plus a labelled assumption for effectiveness.
- Flag overlaps: two requests chasing the same lost pipeline can't both claim it.
- Solve the selection: maximise expected pipeline under the cap, then repeat at the low end to find the robust choice. If you can run code, solve it as a knapsack problem.
- Show the efficient frontier: best pipeline at 70%, 85% and 100% of the cap.

OUTPUT
The funded set with expected pipeline and range, the frontier, the requests that didn't make it and why, and a one-page memo for the exec team.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Never accept an owner's claimed impact as evidence; mark it as theirs.
```

### Set kill criteria before you fund

```
For each budget case we fund, define the leading indicators, the check-in date and the result that would stop the spend, before a dollar goes out. Use Calven MCP for the baselines each indicator is measured against.

FILL IN
- Funded cases: [paste each case with its cost and promised outcome]
- Review cadence: [e.g. monthly, quarterly]

CONTEXT
Once money is spent, nobody wants to call it a failure, so programs run a year past their sell-by date. Kill criteria agreed up front make stopping a rule, not a fight.

FROM CALVEN
- The baseline for each indicator: segment win rate, in-profile pipeline, multi-threading rate, competitive win rate, loss share for a driver, each with n and the prior period.
- How much each baseline moved quarter to quarter in the last year, as the normal noise.

METHOD
- For each case, pick one leading indicator (moves in 30 to 60 days) and one lagging indicator (pipeline or win rate).
- Set the threshold: the change that's bigger than normal noise. Use the past variation; if you can run code, compute the minimum detectable change at the deal volume the case will touch.
- Write the rule: by this date, if the leading indicator hasn't moved past this threshold, cut or rescope.
- Flag cases whose effect can't be distinguished from noise at our volume; they need a longer horizon or a different metric.

OUTPUT
A table per case: indicators, baseline (n), threshold, check-in date, kill rule. Then the cases that can't be measured as planned and what to change.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Baselines come from dashboards only; never compute a rate from rows.
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
- Which segment has the highest win rate but the least pipeline?
- How much lost pipeline traces to the single biggest product gap?
- Which market opportunity has a high impact rating and no deals against it?
- What's the win-rate difference between inbound and outbound lead sources, with n?
- Which competitor costs us the most pipeline, and is that rising?
- Which customer theme grew most this year, and is it tied to revenue?

# Win/loss readouts


Leadership, sales and product want to know why deals were won and lost this period, what changed from the last one, and what to do about it. You walk away with a readout: the win rate and its movement, the top win and loss drivers with evidence, the competitor read, product gaps ranked by deals at stake, and three recommendations each owner accepts. Calven puts the program's answers in one place, so the readout isn't anecdotes from the loudest rep.

## Prompts

### Build the headline win/loss read

```
Using Calven MCP, build the win/loss readout for the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
The audience is leadership, sales and product. They want why we won and lost in the period, what changed, and what to fix.

PULL FROM THE UNIVERSE
- The win/loss scoreboard for the window with the comparison to the period before.
- Program health: how many decided deals have a completed survey, and coverage by segment.
- The top win drivers and loss drivers, and which forces decide deals.

BUILD
- The headline: win rate, competitive win rate, pipeline won and lost, each with its change and n.
- Coverage: what share of decided deals the readout rests on, and which segments are thin.
- The five drivers that decided the most deals, won and lost, each with one buyer quote.

OUTPUT
The first page of the readout, numbers in a table, quotes cited.

GROUNDING
Numbers from the dashboards only, with n and window. Quotes verbatim and cited. Do not add up rows yourself.
```

### Read win/loss by competitor

```
Using Calven MCP, give me the competitor read for the win/loss readout covering the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Leadership wants to know which rivals we beat, which beat us, and on what.

PULL FROM THE UNIVERSE
- Competitive performance: win rate per competitor for the window, the fight-or-avoid read, loss reasons per competitor.
- The head-to-head survey section: how buyers compared us.
- The deals lost to the top competitor, with the buyer's reason.

BUILD
- A table: competitor, deals, win rate, change, the top reason we lose to them.
- For the two rivals costing us most: what buyers said, in their words.
- Where the battlecard already covers it and where it does not.

OUTPUT
One page, with sources.

GROUNDING
Rates from the dashboard with n; mark any rival below the floor. Quotes verbatim. Do not infer a competitor's move from a loss.
```

### Rank the product gaps that cost deals

```
Using Calven MCP, rank the product gaps that cost us deals in the window below.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Product wants the gaps ranked by deals at stake, with the buyer's words.

PULL FROM THE UNIVERSE
- The product gaps with amount at stake from the Insights overview.
- The survey product section and the deals behind each gap.
- Deal drivers in the Capability category that hurt us, with evidence quotes.

BUILD
- A table: gap, deals touched, won and lost, amount at stake, competitors who have it.
- Under each of the top three: two buyer quotes and the deal they came from.

OUTPUT
The ranked table and quotes, ready to paste into the readout.

GROUNDING
Counts from the dashboards only. Amount at stake covers won and lost deals, say so. Quotes verbatim and cited.
```

### Score how we sold

```
Using Calven MCP, score how we sold in the window below, from what buyers told us.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
Sales leadership wants an honest read on process, not opinion.

PULL FROM THE UNIVERSE
- The sales team survey section for the window.
- Deal drivers in the Experience category, won and lost, with evidence quotes and the deal.

SCORE
- What buyers praised and what they criticised, each with how many deals and a quote.
- Where the data allows, the pattern by segment or deal size.

OUTPUT
A short scorecard and the quotes behind the lowest marks.

GROUNDING
Score only what responses speak to; mark the rest "not enough signal". Quotes verbatim and cited.
```

### Assemble the full readout

```
Using Calven MCP, assemble the win/loss readout from the sections below.

FILL IN
- Window: [time window, e.g. last quarter]
- Sections: [paste the four sections]

CONTEXT
The sections are the headline read, the competitor read, the product gaps and the sales scorecard for the window. Make one document for a 30-minute leadership meeting.

BUILD
- One-paragraph summary: what changed and why.
- The numbers table.
- Why we win, why we lose, each with three drivers and quotes.
- Competitors, product gaps, sales process.
- Three recommendations with an owner: marketing, product, sales.

OUTPUT
A readout document; slides if I say deck.

GROUNDING
Change nothing in the numbers or quotes. Recommendations must trace to a driver in the sections.
```

## Advanced prompts

### Test whether the win-rate move is real

```
Tell me whether this period's win-rate change is a real shift or noise before I put it on a slide. Use Calven MCP for the win rates, their sample sizes and the drivers behind them.

FILL IN
- Window: [time window, e.g. last quarter]
- Prior belief: [what leadership thinks caused the change, or write "none"]

CONTEXT
Every readout gets a headline like "win rate up six points". On thirty deals that can be chance. If I present noise as a trend, product and sales act on it for a quarter.

FROM CALVEN
- Win rate and competitive win rate for the window and the prior period, with n, from the win/loss dashboard.
- Win rate by segment and by competitor for both periods, with n.
- The top win and loss drivers for both periods.

METHOD
- Treat each win rate as a Beta posterior built from its wins and losses. Give the 90% credible interval for each period and the probability the true rate went up.
- Do the same for each segment and competitor. Flag the moves that clear 80% probability and the ones that don't.
- Update the prior belief: given how the drivers shifted, is the stated cause more or less likely than before?
- Work out how many more decided deals it would take to call the headline move with 90% confidence.
- If you can run code, simulate it in Python and plot the two posteriors.

OUTPUT
A table: metric, prior period, this period, credible interval, probability of a real increase, verdict (real, likely, noise). Then the one sentence I should say in the readout and the one I shouldn't.

GROUNDING
Label every number as Calven (cited, with n), mine, or your calculation. Don't add up rows to make a rate; use the dashboard. Don't call anything a trend that fails the threshold.
```

### Find what predicts a win in closed deals

```
Run a driver analysis on our closed deals to find what predicts a win, not what we assume does. Use Calven MCP to page through the closed deals and their attributes.

FILL IN
- Window: [time window, e.g. the last four quarters]
- Hypotheses: [list what the team believes drives wins, e.g. multi-threading, inbound source, Tier 1 fit]

CONTEXT
The readout tells us why buyers say they chose. The deal record tells us what was true of the deals that won. When the two disagree, the deal record is usually right.

FROM CALVEN
- Every won and lost deal closed in the window, paged from the CRM mirror, with segment, size band, region, ICP tier, lead source, deal type, competitors, contact role, complexity and furthest stage.
- The ICP dashboard's predictive attributes and win rate by attribute, with n, as the benchmark.

METHOD
- Build a table with one row per deal and the outcome as won or lost.
- Fit a logistic regression on the attributes (a shallow decision tree if n is small). Report each attribute's effect as an odds ratio with an interval.
- Test each team hypothesis: supported, contradicted, or not enough data.
- Hold out 20% of deals and check the model beats the base rate.
- If you can run code, do it in Python and give me the notebook. If not, cross-tab each attribute against outcome and say that's what you did.
- Compare your top attributes with the dashboard's predictive attributes and explain any disagreement.

OUTPUT
The five attributes that move win odds most, ranked, each with its effect and n; the hypothesis scorecard; and one chart I can rebuild.

GROUNDING
Label every number as Calven (cited, with n), mine, or your calculation. Say when n is too small to trust. This is correlation: don't claim an attribute causes wins.
```

### Replay the lost deals with one gap fixed

```
Replay last period's lost deals as if we'd fixed one thing, and tell me how many would have flipped. Use Calven MCP for the lost deals, the buyers' stated reasons and the deal drivers.

FILL IN
- Window: [time window, e.g. last two quarters]
- Fixes to test: [list two to four, e.g. ship the missing integration, a cheaper entry tier, a security review pack]

CONTEXT
Product, pricing and sales each want next quarter's investment. I want the counterfactual: which fix would have won back the most revenue, deal by deal.

FROM CALVEN
- Lost deals in the window with loss reason, lost-to competitor, amount, price feedback and product feedback.
- Deal drivers that hurt us on those deals, with rank and the evidence quote.
- The surveyed-deal summary where one exists.

METHOD
- For each lost deal and each fix, judge whether the fix removes the deciding driver. Rate it flip, maybe or no, and quote the evidence that decides it.
- A deal with two deciding drivers flips only if the fix removes both.
- Weight flip as 0.7 and maybe as 0.3 (assumptions I can change), and sum recovered revenue per fix.
- Check overlap: deals two fixes would both recover, so nothing is counted twice.
- If you can run code, output the deal-by-fix grid as a CSV with the weights as inputs.

OUTPUT
A ranked table of fixes by expected recovered revenue and deals flipped, the deal-by-fix grid behind it, and the three deals no fix would have saved.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Each flip judgement cites the driver or quote it rests on. Don't guess a reason for a deal with no survey: mark it unknown.
```

## Ad hoc questions

- What is our competitive win rate for [window], and how did it move?
- Why did we lose to [competitor] this quarter? Quote the buyers.
- Which product gap cost the most deals this year?
- How many decided deals have a completed survey? Which segments are uncovered?
- What did buyers say about our pricing in lost deals?
- Which deciding force wins deals for us: capability, experience, commercials or competitive?
- What did the buyer at [deal] answer about why they chose us?
- Which personas sit on won deals that lost deals lack?
- Show me the verbatims about onboarding from won deals.
- Which loss reason grew most vs the prior period?
- How did win rate differ for Tier 1 accounts vs the rest?
- Which deals were no decision, and what stopped them?
- Which loss outcome grew: lost to a competitor, no decision, or built in-house?
- Which persona answered the most surveys, and which never answers?
- Which deals did we win despite losing on price, and what outweighed it?
- Which deal driver helps us in won deals and hurts us in lost ones?
- Is our win rate against [competitor] different on inbound and outbound deals?
- Which segment has a high win rate but almost no pipeline?
- What do buyers praise in won deals that our messaging never mentions?
- Which lost deals have a survey answer that disagrees with the CRM loss reason?

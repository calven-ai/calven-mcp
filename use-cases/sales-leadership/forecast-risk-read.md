# Forecast risk read


The forecast call is this week, and you need to decide which late-stage deals belong in commit, best case or neither. You walk in able to say why each commit deal stays, because each one was checked against the patterns that decided similar deals. Calven brings the company's own loss patterns, so the call isn't each rep's confidence, averaged.

## Prompts

### Score every commit deal for risk

```
Using Calven MCP, give me a risk read on every deal in commit for the period below.

FILL IN
- Period: [period, e.g. this quarter]
- Forecast call: [day of the forecast call]
- Commit list: [paste the commit list, or leave blank to use the stage]
- Stage: [stage, used only when the commit list is blank]

CONTEXT
Forecast call on the day above. Use the commit list, or if it is blank, pull every open deal past the stage closing in the period. I want each deal scored against the patterns that decided deals like it.

PULL FROM THE UNIVERSE
- Each deal: stage, amount band, close date, segment, ICP fit tier, competitors, contact roles.
- Win rate by competitor, by segment and by ICP tier, with samples.
- Multi-threaded versus single-threaded win rate and the roles on our won deals.
- The deciding drivers in lost deals from the same segment or against the same competitor, with the buyer's words.

BUILD
- Per deal: a risk level (low, medium, high) with the two patterns that set it, the past loss it most resembles, and what would have to be true for it to close.
- A summary: the deals to move out of commit and why.

OUTPUT
A table sorted by risk, then the three-line summary for the call.

GROUNDING
Use only CRM records, dashboards and deal drivers in the Universe. Cite every rate with n and window. Do not estimate close probability as a number; give the level and the patterns.
```

### Decide whether one deal stays in commit

```
Using Calven MCP, should the deal below be in commit?

FILL IN
- Deal: [deal]

PULL FROM THE UNIVERSE
- The deal record: stage, amount band, competitor, fit tier, contact roles, price and product feedback.
- Our win rate against that competitor in that segment, and the single- versus multi-threaded rate.
- The deciding drivers in the last five losses that look like this deal.

OUTPUT
Keep or move, the two facts that decide it, and the one question for the rep.

GROUNDING
Use only the Universe, cited with samples. Say when the sample is too thin to judge.
```

### Sanity-check the commit for finance

```
Using Calven MCP, sanity-check our commit for the period below.

FILL IN
- Period: [period, e.g. this quarter]
- Commit: [commit amount]

PULL FROM THE UNIVERSE
- Open pipeline in the period by ICP tier and segment.
- Win rate for in-profile and out-of-profile deals, and by segment, with samples.
- Average cycle length for in-profile deals.

BUILD
- What the open pipeline is worth at the in-profile and out-of-profile rates, and how that compares to the commit.
- Deals whose close date is inside our average cycle from their open date.

OUTPUT
Five lines with figures and samples, and the caveat to give finance.

GROUNDING
Use only dashboard figures in the Universe, cited. This is a sanity check on patterns, not a forecast model; say so.
```

## Advanced prompts

### Monte Carlo the quarter's bookings

```
Simulate the quarter's bookings from every open deal and tell me how likely we are to hit commit. Use Calven MCP for each deal's profile and the win rates for deals like it.

FILL IN
- Quarter: [quarter]
- Commit and best case: [the numbers going to finance]
- Rep calls: [paste each rep's commit and best-case list, or write "use CRM stages"]

CONTEXT
The forecast is one number built from rep judgement, and finance plans on it. I want the distribution behind it and the deals that swing it.

FROM CALVEN
- Open deals closing in the quarter: amount, stage, segment, ICP tier, competitors, contacts by role.
- Win rate by segment, per competitor, in profile against out of profile, and multi-threaded against single-threaded, from the dashboards, with n.

SIMULATE
- Give each deal a win probability: start from its segment's win rate, then adjust for competitor, fit and threading, and show each adjustment. Respect stage: a deal at proposal isn't a deal at discovery.
- Let close dates slip: give each deal a stated chance of moving to next quarter.
- If you can run code, run 10,000 draws and show the distribution of bookings. If not, work out low, expected and high by hand.
- Report the chance of hitting commit and best case, and the five deals that move the outcome most.

OUTPUT
The distribution (P10, P50, P90), the chance of hitting commit, the swing deals with their probability and why, and the commit number I can defend.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every probability adjustment is your assumption; state it. Don't compute a win rate from deal rows when a dashboard reports it.
```

### Backtest the risk score on last quarter

```
Score last quarter's late-stage deals with the risk rules as they'd have looked mid-quarter, then check the scores against what actually closed. Use Calven MCP for the deals and their outcomes.

FILL IN
- Quarter to backtest: [quarter]
- Risk rules: [paste the rules you use, or write "use the risk read from this page"]

CONTEXT
I'm about to pull deals out of commit on a risk score. Before I do that to a rep, I want to know whether the score would have been right last quarter.

FROM CALVEN
- Deals from that quarter that reached proposal or later: segment, ICP tier, competitors, contacts by role, amount, outcome, loss reason.
- Deal drivers on the lost ones.

BACKTEST
- Score each deal on the rules using only what was known mid-quarter: the profile, not the outcome.
- Compare scores with outcomes. Give the loss rate among high-risk deals, the loss rate among low-risk ones, and a Brier score if the score is a probability.
- Show a calibration table: of the deals at each risk level, how many were lost.
- Find the rule that added most and the rule that added nothing, then propose a tighter score.

OUTPUT
The backtest table, the calibration table, the rule ranking, the revised score, and a one-line verdict: use it to move deals out of commit, or don't.

GROUNDING
These rates are computed by you from the deals you paged; give the counts. Don't feed the score anything that only existed after the quarter, like a survey answer or a loss reason.
```

### Pre-mortem the quarter

```
Run a pre-mortem on the quarter: it's the last day, we missed commit by 20%, and you tell me what happened. Use Calven MCP for the commit deals and what has sunk deals like them.

FILL IN
- Quarter: [quarter]
- Commit: [the commit number and the deals in it]

CONTEXT
Every missed quarter looks obvious afterwards. I want those stories while there are still weeks to act.

FROM CALVEN
- The commit deals: amount, stage, competitors, contacts by role, price and product feedback.
- The top loss reasons and deal drivers from the last two quarters.
- Competitor signals from the last 60 days.

METHOD
- Write four short post-mortems of the miss, each from a different cause: a competitor move, a single-threaded deal going dark, a late procurement or price fight, a product gap surfacing at the end.
- Tie each story to the named commit deals it fits.
- Rate each for likelihood and dollar impact.
- For each named deal, give the one action this week that makes the story less likely.

OUTPUT
A table of the four failure stories (cause, deals exposed, likelihood, dollars at risk, action this week), and the short list of deals to inspect first on the next forecast call.

GROUNDING
Every story cites the deal record, a driver or a signal. Don't invent a competitor move or a buyer's intent that isn't on record.
```

## Ad hoc questions

- What is our win rate against [competitor] in [segment], and the sample?
- Which commit deals are single-threaded?
- Which commit deals are out of profile?
- What decided the last five deals we lost to [competitor]?
- Which late-stage deals have "More expensive" in price feedback, and how often do those close?
- What is our in-profile win rate versus out of profile this year?
- Which deals have been open longer than our average cycle?
- Which product gap appears on commit deals and how many deals has it cost?
- Do deals with an exec sponsor on record close more often? Sample?
- Which lost deal most resembles [deal]?
- Which commit deals have no economic buyer on record?
- Which commit deal is against the competitor we've lost to most this year?
- Which commit deals carry a product gap that cost us deals last quarter?
- Which commit deal sits in a segment whose win rate fell this quarter?
- Which deals at proposal have been there longer than the average cycle for their segment?
- Which competitor on a commit deal made a high-severity move in the last 30 days?

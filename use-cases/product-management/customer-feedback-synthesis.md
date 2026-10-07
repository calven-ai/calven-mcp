# Customer feedback synthesis


The monthly or quarterly synthesis is due, and the decisions it feeds won't wait. You walk away with the themes that grew and faded, net sentiment, the themes tied to revenue, the quotes behind each, and what changed since last time. Calven gives you the whole evidence base, so the synthesis isn't just whoever read the most calls that month.

## Prompts

### Write the periodic feedback synthesis

```
Using Calven MCP, write the customer feedback synthesis for the window and product below.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product]

CONTEXT
The audience is product, customer success and leadership. They want the themes that matter this period, with evidence and what changed.

PULL FROM THE UNIVERSE
- The voice-of-customer read for the window: top pains, jobs to be done, movers, net sentiment, with the change against the prior period.
- The themes tied to revenue: winning themes, objections, buying triggers, costly objections.
- The three strongest quotes under each top theme, with role and account.

BUILD
- Themes that grew and themes that faded, with mentions and the change.
- The themes tied to revenue, with the deals or objections behind them.
- The quotes per theme.
- Three observations and the owner for each.

OUTPUT
A one-page synthesis with the number of conversations analysed and the window stated at the top.

GROUNDING
Use only themes, quotes and dashboard figures from the Universe, cited with samples. Theme lists show themes with at least two mentions; report the total theme count too. Do not interpret a KPI that cannot be compared as no change.
```

### Break one theme down by who raises it

```
Using Calven MCP, break the theme below down by who raises it.

FILL IN
- Theme: [theme]

CONTEXT
The theme is a top theme this period. Before I act on it I want to know which personas, segments and accounts raise it, and whether it is concentrated in a few accounts.

PULL FROM THE UNIVERSE
- Every quote under the theme with role, account, sentiment and date.
- The accounts' industry, size, region and ICP fit tier.

BUILD
- A table by persona or role: mentions, sentiment, example quote.
- A table by segment (industry, size, fit tier): mentions.
- The number of distinct accounts and conversations behind the theme.

OUTPUT
The two tables and a one-line read on concentration.

GROUNDING
Use only quotes and account fields in the Universe. If the pipeline category is restricted, segment by role only and say so.
```

### Find what changed since last period

```
Using Calven MCP, tell me what changed in customer feedback since the prior window.

FILL IN
- Window: [current time window, e.g. this quarter]
- Prior window: [prior window, e.g. last quarter]

CONTEXT
I want the movers only: themes that rose, fell, appeared or disappeared, and whether sentiment shifted.

PULL FROM THE UNIVERSE
- The voice-of-customer read for the window compared with the prior window: movers, net sentiment change, customer-voice signal counts.

BUILD
- Risers and fallers with the change in mentions.
- New themes and themes that dropped below two mentions.
- Sentiment shift and the quotes that explain it.

OUTPUT
A movers note, half a page.

GROUNDING
Report only comparisons the dashboard computes, with both samples. Where a KPI cannot be compared, say why.
```

### Get the full picture on one theme

```
Using Calven MCP, give me the full picture on the theme below.

FILL IN
- Theme: [theme]

CONTEXT
I am deciding whether the theme becomes a roadmap item. I want everything the Universe holds on it.

PULL FROM THE UNIVERSE
- Every quote under the theme, and the conversations they came from, with situation and deal context.
- Deal drivers that match it, with outcome and competitor.
- Related competitor mentions and any trend.

BUILD
- The theme in the customers' words: the five best quotes.
- The deals it touched and their outcome.
- The conversations to read in full, ranked by relevance.

OUTPUT
A theme dossier.

GROUNDING
Use only the Universe and cite every quote and deal. Do not merge adjacent themes into this one.
```

## Advanced prompts

### Find which themes predict churn

```
Find out which customer themes predict churn or expansion in our base, not just which are loudest. Use Calven MCP for what each account said and when.

FILL IN
- Retention data: [attach a CSV: account, renewal outcome or NRR, ARR, renewal date]
- Window: [window]
- Product: [product]

CONTEXT
The loudest theme gets the roadmap slot. I want to know whether it's also the one that costs us revenue, or whether a quieter theme sits behind the churn.

FROM CALVEN
- Customer quotes in the window with account, theme, category, sentiment and date.
- Themes with mentions and sentiment, for the full list.
- Accounts with size, industry and ICP fit tier, for controls.

METHOD
- Build one row per account: which themes it raised, how often, with what sentiment, and how long before renewal.
- Join it to my retention data on account name. List the accounts that didn't match.
- If you can run code, fit a logistic regression of churn on theme presence, controlling for size and ARR, and report odds ratios with confidence intervals. Otherwise build a two-way table per theme: churn rate with and without it.
- Rank themes two ways: by mention volume and by revenue association. The themes high on the second and low on the first are the finding.
- Say plainly where the sample is too small to conclude anything.

OUTPUT
Two rankings side by side (loud versus costly), a chart of each theme's effect with its interval, and three sentences for the roadmap review.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. This is association, not cause; say so. Flag any effect that rests on fewer than ten accounts.
```

### Correct the synthesis for who you talk to

```
Check whether my feedback synthesis reflects the customer base or just the customers we happen to talk to, and reweight it if not. Use Calven MCP for who's in the conversations and who's in the base.

FILL IN
- Synthesis: [paste this period's synthesis or top-ten theme list]
- Window: [window]
- Revenue weights: [attach ARR by account, or "count accounts equally"]

CONTEXT
We talk most to accounts with active CSMs, open expansion deals and loud champions. A theme can top the list because of who's on the calls, not because the base feels it.

FROM CALVEN
- The conversations analysed in the window, with account and source type.
- The accounts behind them, with size, industry, region and ICP fit tier.
- All customer accounts in the CRM with the same attributes, for the base mix.

METHOD
- Compare the conversation mix with the base mix by size, segment and tier. Show the over- and under-represented cells.
- Reweight each theme's mentions by the inverse of its cell's sampling rate (post-stratification), and by ARR if I attached it.
- Re-rank the themes. Flag any that move three or more places, and any theme carried by one or two accounts.
- List the segments we barely hear from, and the five accounts to call to close the gap.

OUTPUT
The original and reweighted rankings side by side, the coverage gaps, and the corrected top five with a line on what changed.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't guess what silent segments think; mark them "no evidence".
```

### Tell real momentum from noise

```
Put each top theme on a control chart and tell me which "rising" themes are a real shift and which are normal noise. Use Calven MCP for theme mentions over time and the number of conversations behind them.

FILL IN
- Themes: [paste the themes people are calling rising, or "the top ten"]
- Window: [window, at least six months]
- Events: [paste dated events that could move mentions: a launch, a price change, an outage, a big onboarding cohort]

CONTEXT
Every quarter someone says a theme is "blowing up" and asks for roadmap time. Mentions go up when we simply record more calls. I want a test before I move a priority.

FROM CALVEN
- Quotes per theme by month in the window, with sentiment.
- The number of conversations analysed per month, to normalise.
- The theme movers from the voice-of-customer dashboard, with n.

METHOD
- Turn mentions into a rate: mentions per hundred conversations per month.
- If you can run code, build a p-chart per theme: centre line, control limits from the first half of the window, and the points that break them. Otherwise compute the limits by hand for the top five.
- Apply the standard run rules: a point outside the limits, or seven months on one side of the centre line.
- Line the breaks up against my events, and say which shifts an event explains and which it doesn't.
- Compare the result with the dashboard's movers and flag where they disagree.

OUTPUT
A table per theme: rate, limits, signal or noise, the likely cause, and the call (act, watch, ignore), plus the charts.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't call a shift real on fewer than twenty conversations a month; say the data is too thin. A matching event is a hypothesis, not a cause.
```

## Ad hoc questions

- What are the top five customer pains this quarter for [product]?
- Which themes grew most since last quarter?
- What is net sentiment this period, and how did it change?
- Which themes show up in deals we won?
- Which objections cost us the most?
- Give me three quotes under [theme] with who said them.
- How many conversations were analysed in [window]?
- Which accounts raise [theme] most?
- Is [theme] raised by buyers, users or both?
- Which buying triggers appear most this period?
- Which themes do enterprise accounts raise that mid-market does not?
- What did customers say about [feature] after it shipped?
- Which themes are rising in mentions but falling in sentiment?
- Which pains do customers raise that none of our messaging pillars address?
- Which themes appear in lost-deal drivers but almost never on customer calls?
- What do end users complain about that buyers never mention?
- Which accounts raised three or more negative themes in [window]?
- Which customer quotes contradict a claim in our product brief?

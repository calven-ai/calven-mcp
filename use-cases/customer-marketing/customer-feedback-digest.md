# Customer feedback digest


The monthly digest to marketing, CS and product is due. You get one page with sources: the themes that grew and faded, the costly objections, the quotes worth reusing, cut by segment where the numbers allow. Calven reads from the company's themed record, so it's more than anecdotes from whoever spoke last in the meeting.

## Prompts

### Build this month's feedback digest

```
Using Calven MCP, build the customer feedback digest for the month below.

FILL IN
- Month: [month]

CONTEXT
Readers are marketing, CS and product leads. One page. They want what changed, with the quotes.

PULL FROM THE UNIVERSE
- The voice-of-customer dashboard for the month compared with the month before: themes by mentions and sentiment, movers, costly objections, buying triggers, net sentiment, conversations analyzed.
- For the top five themes: three representative quotes each with speaker, role and account.
- Marketing-ready quotes suggested this month.

BUILD
- Headline numbers with n and the comparison.
- Themes that grew and faded, each with a quote.
- The costly objections and which messaging section covers them.
- Three quotes marketing should use, three signals CS should act on, three gaps product should see.

OUTPUT
The digest.

GROUNDING
Use only the Universe and cite it. Take every number from the dashboard, never by counting rows. Cite n with every rate. If a list is below the floor, say so.
```

### Compare feedback across segments

```
Using Calven MCP, tell me how customer feedback differs by the segment attribute below this quarter.

FILL IN
- Attribute: [segment attribute, e.g. size, industry or region]

CONTEXT
I want to know whether customers in different segments, for example enterprise and mid-market, raise different themes.

PULL FROM THE UNIVERSE
- Customer quotes this quarter with their account's value for the attribute from the CRM.
- The themes those quotes belong to.

BUILD
- A table: theme, mentions per segment, sentiment per segment, one quote per cell where it exists.
- The themes that appear in one segment only.

OUTPUT
The table and the three differences that matter.

GROUNDING
Use only the Universe and cite it. Do not compute rates on small samples; show counts and say when a cell has fewer than five quotes.
```

### Find the pillars customers never mention

```
Using Calven MCP, show me which of our messaging pillars customers never mention.

CONTEXT
I want to know whether our story matches what customers say.

PULL FROM THE UNIVERSE
- The messaging value pillars.
- The messaging dashboard: customer-language fit, language gaps, evidence-backed pillars.
- Themes and quotes that map to each pillar.

BUILD
- Per pillar: quote count, the closest theme, the language gap if any.

OUTPUT
The table and the pillar with the weakest evidence.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Find the complaints that predict churn

```
Run a driver analysis on which customer complaints predict churn or downgrade, so the digest leads with what costs us money. Use Calven MCP for the quotes and themes per account.

FILL IN
- Renewal outcomes: [attach a CSV: account, renewal date, outcome (renewed, downgraded, churned), ARR]
- Window: [window, e.g. the 12 months before each renewal]

CONTEXT
The digest counts mentions. A theme with 40 mentions that never costs a renewal matters less than one with six that always does. I want the digest ranked by money.

FROM CALVEN
- Every quote from the accounts in my CSV within the window: theme, category, type, sentiment and date.
- The themes with their mention counts and sentiment.
- Net sentiment and the top pains from the voice-of-customer dashboard, with n, as the baseline.

METHOD
- Build one row per account: for each theme, whether the account raised it negatively in the window, plus its total quotes and net sentiment.
- Compare churn and downgrade rates for accounts that raised each theme against those that didn't. Report the difference with a confidence interval and the count behind it.
- If you can run code, fit a regularised logistic regression on the theme flags and rank themes by effect, noting which are too rare to trust.
- Control for the obvious confounder: accounts with more calls raise more themes, so adjust for quote count.

OUTPUT
A ranked table of themes: accounts raising it, churn rate with and without, effect size, confidence, ARR at stake in upcoming renewals. Then the digest's lead paragraph rewritten around the top two.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Renewal outcomes and ARR are mine. Say plainly that this is correlation, and list accounts in my CSV with no quotes rather than dropping them.
```

### Tell a real spike from noise

```
Put the monthly theme counts on a control chart and tell me which movements are real and which are noise. Use Calven MCP for the quotes per theme per month and the number of conversations behind them.

FILL IN
- Months to chart: [e.g. the last 12]
- Themes to watch: [themes, or write "every theme with more than 10 mentions"]

CONTEXT
Every month the digest says a theme grew, and every month someone launches a fix. With conversation volume swinging month to month, half those spikes are probably noise. I want to report only the moves that would survive a statistician.

FROM CALVEN
- Quotes per theme per month for the window, counted from the quote rows (label the counts as such).
- Conversations analyzed per month from the voice-of-customer dashboard, as the denominator.
- Three verbatim quotes from the latest month for any theme that passes the test.

METHOD
- Turn each theme into a rate: mentions per 100 conversations per month.
- Build a p-chart per theme with a centre line and three-sigma limits that widen and narrow with each month's conversation count.
- Flag a theme only on a point outside the limits, or a run of seven months on one side of the centre line.
- For each flagged theme, check whether one account's burst of calls or a new call source explains it.
- If you can run code, draw one small chart per theme on a shared scale.

OUTPUT
A table of themes with the latest rate, the limits and a verdict: real move, noise, or too few conversations to tell. The charts. Then the digest's "what changed" section rewritten to report only the real moves, with quotes.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't call a move real in a month with too few conversations to judge; say it's too thin.
```

## Ad hoc questions

- Which themes grew most this month?
- What is the net sentiment this month versus last?
- Which objections cost us the most this quarter?
- Give me three quotes on [theme] from the last 30 days.
- How many conversations were analyzed this month?
- Which buying triggers came up most?
- Which pillar has the least customer language behind it?
- What did customers in [segment] complain about most?
- Which theme is growing among Tier 1 accounts but flat overall?
- Which complaint shows up both in call quotes and in lost-deal drivers?
- Which positive theme has no matching pillar in our messaging?
- Which accounts raised the same complaint in three or more conversations?
- What do customers say about [competitor] after they've bought from us?
- Which of the top five pains has a product change against it, and which have none?
- Which topics do our reps raise on calls that customers never bring up?

# Feedback routing to product


Support's feedback report is anecdotes from the ticket queue, and product discounts it. You get a weekly report product and leadership trust: the top three requests with counts, quotes and revenue context, which themes cost deals, and the verbatim behind each. Calven puts tickets on the same evidence base as sales calls and win/loss, so product sees the same themes in all three.

## Prompts

### Tag a ticket to a customer theme

```
Using Calven MCP, tell me which customer-voice theme this ticket belongs to and how common it is.

FILL IN
- Ticket: [paste the ticket]

CONTEXT
I want to tag the ticket consistently with how the company already groups customer feedback, and know whether it is a known pattern.

PULL FROM THE UNIVERSE
- The customer-voice themes, with mentions, sentiment and category.
- The quotes under the closest theme, from the last 90 days.

ANSWER
- The theme it belongs to, or "new" if none fits.
- How many mentions the theme has, the sentiment, and whether it is rising.
- The two closest quotes from calls, so I can see it is the same thing.

OUTPUT
The tag, the count and the quotes, with sources.

GROUNDING
Use only themes and quotes in the Universe. Do not create a theme name that does not exist; say "new" instead.
```

### Rule out a recent product change

```
Using Calven MCP, check whether the issue in this ticket is a recent product change.

FILL IN
- Behaviour: [what stopped working or changed]
- Feature: [feature]
- Ticket: [paste the ticket]

CONTEXT
A customer reports that the behaviour stopped working or changed. Before I escalate as a bug I want to know whether we changed it on purpose.

PULL FROM THE UNIVERSE
- Product changes in the last 60 days that touch the feature, with the evidence quote and source.
- Any help article or published document the change left stale.

ANSWER
- Whether a change explains the ticket, with the date and source.
- What the customer-facing documents still say wrong, if anything.

OUTPUT
A three-line answer and the list of stale documents.

GROUNDING
Cite the change record. If no change matches, say so and treat it as a bug.
```

### Size what a request costs

```
Using Calven MCP, tell me what the theme or request below costs us.

FILL IN
- Theme: [theme or request]

CONTEXT
Support keeps hearing this theme. I want to show product what it is worth, not only how often it comes up.

PULL FROM THE UNIVERSE
- The theme's mentions and sentiment from calls.
- Product gaps and loss drivers in the win/loss read that match it, with deals touched and amount at stake.
- CRM deals whose product feedback names it.
- The three strongest customer quotes.

BUILD
- A count from calls and from deals.
- The revenue context: deals touched, won and lost, over the window.
- The quotes, attributed.

OUTPUT
A half-page case with sources and the window used.

GROUNDING
Numbers come from the dashboards, never from adding rows. Cite n and the window. If the theme does not appear in deals, say so plainly.
```

### Draft the weekly feedback report

```
Using Calven MCP, draft this week's customer feedback report for product.

CONTEXT
I will add ticket counts from our help desk. I need the call-side view from Calven in the same structure so the two merge.

PULL FROM THE UNIVERSE
- The voice-of-customer read for the last 7 days against the prior period: top pains, movers, net sentiment.
- The top themes by mentions, with one quote each.
- Product gaps and costly objections tied to revenue.
- Product changes this week that might explain new feedback.

BUILD
- Top five themes: name, mentions, change vs last week, sentiment, one quote.
- What is tied to revenue.
- What changed in the product this week.
- One recommendation.

OUTPUT
The report in that order, with sources, ready for me to add ticket numbers.

GROUNDING
Cite every count with n and window. Do not merge my ticket numbers into Calven counts; keep the two sources separate.
```

### Find themes recent changes answered

```
Using Calven MCP, which customer themes did recent product changes answer?

CONTEXT
I want to tell the customers who asked that it shipped.

PULL FROM THE UNIVERSE
- Product changes in the last 30 days.
- Customer-voice themes and the quotes under them, to match each change to the request it answers.

BUILD
- A table: product change, the theme it answers, how many mentions that theme had, the accounts whose quotes raised it.

OUTPUT
The table with sources.

GROUNDING
Match only where the change record and the theme clearly describe the same thing. Say "no matching theme" otherwise.
```

## Advanced prompts

### Find what's really driving ticket volume

```
Run a driver analysis on our ticket export: what's actually pushing volume up, and is any of it caused by a product change. Use Calven MCP for the company's theme taxonomy and the dated product changes.

FILL IN
- Ticket export: [attach a CSV: date, account, tags, category, text]
- Window: [window]

CONTEXT
Volume is up and everyone has a theory. Product thinks it's onboarding, sales thinks it's one big account. I want the answer from the data before the weekly review.

FROM CALVEN
- The customer themes with labels, category and mentions, so tickets map to the same taxonomy as calls.
- Product changes in the window with their dates and severity.
- Net sentiment and the fastest-moving themes from the voice-of-customer dashboard, with n.

METHOD
- Map each ticket to a Calven theme by its text. Report the share you couldn't map; that's a theme Calven doesn't have.
- Decompose the change in volume by theme, by account and by tag. Check how much one account explains.
- Mark each product change on the timeline and test for a step change in its theme's volume in the two weeks after. If you can run code, fit a simple interrupted time series per theme and show the charts.
- Compare ticket-side movement with the call-side theme movement. Agreement is a stronger signal than either.

OUTPUT
A ranked list of drivers with the share of the increase each explains, the changes that caused a step, the unmapped tickets as candidate new themes, and a three-line summary for product.

GROUNDING
Label every number as Calven (cited, with n), mine (from the export), or your assumption. Don't claim a change caused a spike unless the timing and the theme both match.
```

### Settle which request gets the roadmap slot

```
Stage a debate between two customer requests competing for one roadmap slot, with a judge who decides on evidence. Use Calven MCP for what each request costs in deals and what customers say about it.

FILL IN
- Request A: [request A, with your ticket count]
- Request B: [request B, with your ticket count]
- Window: [window]

CONTEXT
Product will build one this quarter. Support has two loud requests and no way to compare them except volume, which favours whoever complains most. I want the case for each made as well as it can be, then judged.

FROM CALVEN
- For each request, the matching theme with mentions, sentiment and momentum.
- Product gaps from the win/loss dashboard and deal drivers that hurt, matched to each request, with deals touched and amount, with n.
- The three strongest customer quotes for each.

DEBATE
- The advocate for A argues in three rounds: reach, revenue at stake, severity. Then the advocate for B.
- Each gets one rebuttal attacking the other's weakest evidence.
- A judge, playing a skeptical head of product, scores both on reach, deals at stake, severity for the customer, and evidence quality. The judge must say which argument moved the score and which was noise.

OUTPUT
The debate in under 500 words, the judge's scorecard, the verdict, and a one-paragraph note support can send to product with the numbers.

GROUNDING
Label every number as Calven (cited, with n), mine (ticket counts), or your assumption. Quotes verbatim. Don't match a request to a theme or deal driver unless the text supports it; say when there's no match.
```

### Backtest whether tickets predict lost renewals

```
Backtest whether the themes in an account's tickets predicted a lost renewal, and turn what holds up into an early-warning rule. Use Calven MCP for the renewal outcomes and the product feedback on closed deals.

FILL IN
- Ticket history: [attach a CSV of tickets: account, date, tags, text, for the last 12 to 24 months]
- Window: [window of closed renewals to test, e.g. last four quarters]

CONTEXT
Support sees trouble early but can't prove which trouble matters. If certain ticket patterns reliably come before a lost renewal, CS should hear about them the week they start.

FROM CALVEN
- Every renewal deal closed in the window, paged from the CRM: account, status won or lost, close date, loss reason, product feedback categories.
- The customer themes, so tickets map to the same taxonomy as calls.
- Deal drivers on lost renewals, where surveys ran.

BACKTEST
- Map tickets to themes and keep only those filed in the 180 days before each renewal closed.
- For each theme and simple pattern (count, recency, escalations, a competitor named), compare the lost rate when present against when absent.
- Build a rule from the strongest two or three signals, then test it on the half of the data you didn't build it on. Report precision, recall and how many lost renewals it would have caught early. If you can run code, do it in a notebook and show the confusion matrix.
- Say how small the sample is and how much to trust it.

OUTPUT
A table of signals with lift and n, the rule, its holdout performance, and the alert wording for CS.

GROUNDING
Label every number as Calven (cited, with n), mine (from the export), or your assumption. Don't treat a pattern with fewer than ten renewals behind it as a finding.
```

## Ad hoc questions

- Which themes did customers raise most in the last 30 days?
- Is "[request]" a known theme, and how many mentions does it have?
- Give me the three strongest quotes about [pain].
- Which product gaps cost us deals this quarter, and how much?
- Did we change [feature] recently? A customer says it behaves differently.
- Which themes are rising fastest this month?
- What is the net sentiment on [topic] and how did it move?
- Which customer accounts raised [theme] on calls?
- Does [theme] show up as a loss reason in win/loss?
- Which help articles went stale after the last release?
- What do customers say about onboarding, in their words?
- Which product feedback categories appear most on lost deals?
- Which theme has rising mentions on calls but no matching product change to answer it?
- Which product feedback category shows up on lost renewals but rarely on new business losses?
- What's the most positive theme customers mention, so the report isn't only complaints?
- Which theme do buyers in win/loss name as a reason they chose us, that support also hears about?
- Is [theme] concentrated in one segment or spread across all of them?

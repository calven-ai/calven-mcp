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

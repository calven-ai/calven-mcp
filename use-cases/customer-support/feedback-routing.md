# Feedback routing to product

**Team:** Customer support · also customer success, product management, product marketing
**Impact:** High. Support hears every request and complaint first. Routing the pattern instead of the loudest ticket, with how often it comes up and what it costs in deals, is what gets product to act.
**Prerequisites:** call transcripts ingested (themes, quotes). Better with win/loss surveys running (deal drivers, product gaps) and own website monitored (product changes, so a "bug" that is actually a change is recognised).

## What the team is trying to do

Turn individual tickets into a weekly report product and leadership trust: which themes customers raise, how often, with what sentiment, which ones cost deals, and the verbatim behind each. Done means the top three requests this week are named with counts, quotes and revenue context, and product can see the same themes in sales calls and win/loss. Without a shared evidence base, support's report is anecdotes from the ticket queue and product discounts it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Tag the ticket | Categorise the feedback: request, complaint, confusion, praise | Which existing theme it belongs to, so tags match the company's taxonomy | Themes |
| 2 | Recognise the pattern | Check whether this is new or a known theme | The theme's mention count, sentiment and momentum; the quotes under it from calls | Themes, quotes, voice-of-customer dashboard |
| 3 | Check it is not a change | Rule out that the "bug" is a recent product change | Product changes in the window, with the customer-facing documents they left stale | Product changes, drift findings |
| 4 | Size the cost | Find whether the theme shows up in deals | Product gaps and loss reasons that match, with deals touched and amount at stake | Win/loss dashboard, deal drivers, CRM deals (product feedback) |
| 5 | Pick the verbatims | Choose the quotes that make the case | The strongest customer quotes per theme, attributed | Quotes |
| 6 | Write the weekly report | Top themes, counts, trend, cost, quotes, recommendation | A draft report from the call-side evidence, which the agent merges with the ticket-side counts | Themes, quotes, win/loss dashboard |
| 7 | Post and discuss | Share with product, join the feedback review | Calven does not help here | |
| 8 | Close the loop | Tell customers when the request ships | Which product change answers which theme | Product changes, themes |

## Recommended prompts

### Step 1 and 2: place a ticket in the taxonomy

```
Using Calven MCP, tell me which customer-voice theme this ticket belongs to and how common it is.

CONTEXT
Below is a ticket. I want to tag it consistently with how the company already groups customer feedback, and know whether it is a known pattern.

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

[paste the ticket]
```

### Step 3: rule out a product change

```
Using Calven MCP, check whether the issue in this ticket is a recent product change.

CONTEXT
A customer reports that [behaviour] stopped working or changed. Before I escalate as a bug I want to know whether we changed it on purpose.

PULL FROM THE UNIVERSE
- Product changes in the last 60 days that touch [feature], with the evidence quote and source.
- Any help article or published document the change left stale.

ANSWER
- Whether a change explains the ticket, with the date and source.
- What the customer-facing documents still say wrong, if anything.

OUTPUT
A three-line answer and the list of stale documents.

GROUNDING
Cite the change record. If no change matches, say so and treat it as a bug.

[paste the ticket]
```

### Step 4 and 5: size the cost with evidence

```
Using Calven MCP, tell me what [theme or request] costs us.

CONTEXT
Support keeps hearing [theme or request]. I want to show product what it is worth, not only how often it comes up.

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

[name the theme or request]
```

### Step 6: the weekly feedback report

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

### Step 8: close the loop

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

## Good practice

- Use the company's theme names. A ticket tagged in Calven's taxonomy can be compared with calls and deals; a free-text tag cannot.
- Report the count and the cost together. Mentions get sympathy; deals touched get a decision.
- Keep ticket counts and call counts separate in the report. They are different samples and product will ask.
- Check product changes before escalating a bug. Half the "it broke" tickets after a release are deliberate changes with stale articles.
- Quote verbatim and attribute. A paraphrased complaint is an opinion.
- Run the close-the-loop prompt monthly. Customers who asked and were told are the ones who renew.

## Not covered today

- Ticket volume, tags and trends from the help desk. Calven holds call and survey evidence; the agent merges the two.
- Posting the report or opening a product ticket.
- Product analytics and usage. Calven knows what customers said, not what they clicked.
- Creating a new theme. The voice-of-customer agent clusters themes from the evidence in Calven.

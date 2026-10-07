# Executive escalations


An escalated customer just landed on your desk with a thread of emails and no context. You get a one-page brief before the call (the account's value, history and people, whether a competitor is in the picture) and a response that doesn't overclaim. Calven brings what the customer said on earlier calls and what the product brief says about the capability at issue.

## Prompts

### Build the escalation brief

```
Using Calven MCP, brief me on the escalation from the account below.

FILL IN
- Account: [account]
- Contact: [contact]
- Issue: [issue]

CONTEXT
The contact at the account has escalated about the issue. I am calling them in an hour. I want the account's value and history, what they have said to us before, whether a competitor is in play, and what we can truthfully say about the issue.

PULL FROM THE UNIVERSE
- The account: size, industry, fit tier; open and closed deals including renewals; contacts and their roles.
- Conversations and quotes from the account, with sentiment and date.
- The product brief for the issue and any recent product changes in that area.
- If a competitor is named: the battlecard and why we lost deals to them.

BUILD
- The account in three lines.
- What they said before, with quotes and dates.
- What the brief says about the issue, and what it does not.
- The competitor risk, if any.
- What to say and what not to say.

OUTPUT
A one-page brief.

GROUNDING
Use only the Universe, cited. Respect withheld fields. Do not promise a capability or a date the brief does not support.
```

### Draft the written reply

```
Using Calven MCP, draft my reply to the contact below about the issue.

FILL IN
- Contact: [contact]
- Issue: [issue]
- Message: [paste their message]

CONTEXT
I want a reply that acknowledges the problem in their words, states what the product does and does not do today, and sets a next step. Under 150 words.

PULL FROM THE UNIVERSE
- The product brief for the issue.
- The objection handling in our messaging that applies.
- The customer's own words from prior calls.

WRITE
- The reply.

OUTPUT
The reply, and a note on anything I must confirm with product before sending.

GROUNDING
Use only approved wording, cited. No capability or date promises.
```

### Check whether it's one account or a pattern

```
Using Calven MCP, tell me whether the account's escalation about the issue below is a pattern.

FILL IN
- Account: [account]
- Issue: [issue]
- Window: [time window, e.g. last two quarters]

CONTEXT
Before I decide how far to escalate internally, I want to know whether other customers have raised the same thing, whether it has cost us deals, and whether a competitor is winning on it.

PULL FROM THE UNIVERSE
- Themes and quotes about the issue across all accounts in the window, with sentiment and count.
- Deal drivers that hurt us on the issue, and the deals they touched, with amount where allowed.
- The product gaps in the Insights overview, and whether the issue is on the list.
- Competitive signals about the issue from tracked rivals.

BUILD
- One account or a pattern: how many accounts, how many deals, the trend over the window.
- What it has cost, from the drivers and the product gaps, with n.
- Whether a competitor is using it, with the signal.
- The one line I take to the product leader.

OUTPUT
Six lines with sources.

GROUNDING
Counts and amounts as the Universe returns them, with n and window. Do not extrapolate from one account. If nothing beyond this account is recorded, say so.
```

## Advanced prompts

### Price the response options as a decision tree

```
Lay out my response options to the escalation as a decision tree and pick the one with the best expected value. Use Calven MCP for the account's value, its history and why we've lost similar customers before.

FILL IN
- Account: [account]
- The issue: [paste the escalation thread]
- Options: [list what we could do: fix and credit, roadmap commitment, discount, hold the line]
- Contract: [renewal date, ARR, any expansion in play]

CONTEXT
Every escalation tempts a concession. Some concessions save the account; some teach every customer to escalate. I want the trade written down.

FROM CALVEN
- The account's deals: renewals, expansions, amounts, status.
- What they've said on calls: quotes with sentiment over time.
- Whether a competitor is in their deals, and the deal drivers from customers we've lost to that competitor.
- What the product brief says about the capability at issue.

MODEL
- For each option, estimate the chance they renew, expand or churn, as a range, and the cost to us.
- Build the tree (option, outcome, probability, value) and compute the expected value and the worst case of each option.
- Add the precedent cost: what happens if three more customers ask for the same thing.
- Run a sensitivity: how far does the churn probability have to move to change the best option?

OUTPUT
The tree as a table, the expected value and worst case per option, the break-even churn probability, and a three-line recommendation.

GROUNDING
Label every number as Calven (cited), mine, or your assumption. Probabilities are your assumptions, ranged; say which evidence moved each one.
```

### Pre-test the reply on their buying group

```
Before I send my reply, show me how each person at the account reads it and what they tell each other afterwards. Use Calven MCP for who they are, what they've said and the personas they map to.

FILL IN
- Account: [account]
- My draft reply: [paste your draft]

CONTEXT
The person who escalated isn't the only reader. My reply gets forwarded to their boss and to procurement, and that conversation decides the renewal.

FROM CALVEN
- The account's contacts with their roles (champion, economic buyer, blocker).
- Their quotes and sentiment from calls.
- The persona canvases for those roles.
- A persona review of my draft.

SIMULATE
- Each contact reads the reply in character and writes a two-line reaction.
- Then write the message the person who escalated forwards to their boss, and the boss's reply.
- Score my reply on three things: does it name the problem in their words, does it commit to something checkable, does it give the champion something to defend us with.

OUTPUT
The reactions by contact, the forwarded thread, the three scores, and my reply rewritten in under 150 words to fix the weakest score.

GROUNDING
Reactions trace to the contact's role, their quotes and the persona canvas, cited. Where a contact has no record, say so instead of inventing a stance.
```

## Ad hoc questions

- What is [account] worth to us, and when do they renew?
- Who at [account] is the exec sponsor?
- What has [account] said about [issue] on calls?
- Has sentiment from [account] changed over the year?
- What does the product brief say about [capability]?
- Did we change anything in [area] recently?
- Is [competitor] in any open deal with [account]?
- Why have we lost customers to [competitor] before?
- Who at [account] was on the last three calls, and what did each one say?
- Have other accounts raised the same issue as [account] in the last six months?
- What was [account]'s sentiment before the escalation, quarter by quarter?
- Which of our claims about [capability] are not backed in the claims list?
- Did a product change touch [capability] in the last 90 days?
- What did our reps promise [account] on calls, in their own words?
- Which won deals named [capability] as a reason they chose us?

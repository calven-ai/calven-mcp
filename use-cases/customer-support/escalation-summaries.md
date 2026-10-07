# Escalation summaries


You're handing a case to tier 2, engineering or customer success, and without CRM access the account context goes missing. You get a summary the receiver needs to read once: the problem in the customer's words, what was tried, and who this account is to the company. Calven adds the account context, so the escalation gets prioritised on business impact, not on who shouted.

## Prompts

### Write the escalation's account context

```
Using Calven MCP, write the account context block for an escalation on the account below.

FILL IN
- Account: [account]
- Escalating to: [tier 2, engineering or the CSM]
- Issue: [paste the issue]

CONTEXT
I am escalating the issue to the team named above. I have the technical details. I need the business context so it is prioritised correctly.

PULL FROM THE UNIVERSE
- The account record: industry, size, region, ICP tier.
- Deals on the account: open renewals or expansions with amount, close date and owner; the won deal that brought them in.
- Contacts at the account and their buying roles, so I know whether the person complaining is the champion or an end user.
- What this account said on calls, especially about this area or about competitors.

BUILD
- Who they are and what they are worth to us, in two lines.
- What is at risk and when.
- Who the complainant is in the buying group, and who else to involve.
- Any promise or competitor evaluation from their calls that raises the stakes.

OUTPUT
A context block I can paste under the technical summary, with sources.

GROUNDING
Use only CRM and conversation data in the Universe and cite it. If amounts or names are withheld by workspace settings, say so and do not estimate.
```

### Pull an account's history on a topic

```
Using Calven MCP, what has the account below said to us about the topic below?

FILL IN
- Account: [account]
- Topic: [topic]

CONTEXT
Before I escalate I want to know whether this problem was raised before, or promised during the sale.

PULL FROM THE UNIVERSE
- Quotes from the account on the topic, with the conversation and date.
- Vendor quotes from our reps on the same calls, in case something was promised.

ANSWER
- A dated list of what the customer said and what our side said.

OUTPUT
The list with sources, or "nothing recorded".

GROUNDING
Quote verbatim and attribute. Do not infer a promise the rep did not make.
```

### Rank escalations by business impact

```
Using Calven MCP, rank these escalations by business impact.

FILL IN
- Accounts: [paste the list of accounts]

CONTEXT
The list is accounts with open escalations. I want to order them by what is at stake.

PULL FROM THE UNIVERSE
- For each account: ICP tier, open deals with amount and close date, deal type (renewal, expansion).

BUILD
- A table: account, tier, open deal value, next close date, recommended order and why.

OUTPUT
The ranked table with sources.

GROUNDING
Rank only on what the CRM data in the Universe shows. If an account has no deal data, place it last and say why.
```

## Advanced prompts

### Model the escalation queue against capacity

```
Model our escalation queue as a capacity problem and compare first-in-first-out with a priority rule weighted by account value. Use Calven MCP for each account's tier, size and renewal exposure.

FILL IN
- Escalation log: [attach a CSV of escalations: id, account, opened, resolved, severity, team]
- Capacity: [engineers or tier 2 agents on escalations, and hours a week each]
- Target: [your resolution target for escalations]

CONTEXT
The tier 2 queue runs hot and everything is "urgent". Some of what waits belongs to accounts up for renewal next month. I want to know what a smarter rule buys us, and what it costs the smaller accounts.

FROM CALVEN
- For each account in the log: ICP tier, size, and any open renewal or expansion deal with amount and close date.
- The ICP dashboard's average deal size and win rate by tier, with n, to value accounts without a deal on file.

MODEL
- Fit arrival and service rates from the log, by severity. Report utilisation and the expected wait.
- Simulate the last quarter under two rules: first in first out, and priority by severity times revenue at risk in the next 90 days. If you can run code, run a discrete-event simulation and show wait time distributions per tier.
- Show who waits longer under the priority rule and by how much.
- Find the capacity at which first in first out meets the target, so the choice between a rule and a hire is visible.

OUTPUT
A table comparing both rules: median and 90th percentile wait by tier, revenue at risk exceeding the target, and the capacity break-even. Then the recommended rule in three lines.

GROUNDING
Label every number as Calven (cited, with n), mine (from the log), or your assumption. Don't invent a renewal date or contract value; accounts without one are valued from the tier average and labelled.
```

### Stress-test the escalation as their executive

```
Stress-test our escalation summary and customer reply by reading them as the customer's most senior, least patient stakeholder. Use Calven MCP for who that person is and what they care about.

FILL IN
- Escalation summary: [paste the internal summary]
- Customer reply: [paste the reply we plan to send]
- Account: [account]

CONTEXT
This one will reach their exec. A reply that reads fine to support can read as evasive to the person who signs the renewal. I want it torn apart before it goes.

FROM CALVEN
- The contacts we know at the account with their roles, and which one is the economic buyer or exec sponsor.
- The persona canvas for that role: goals, KPIs, pains, objections.
- What the account said on calls, with quotes, and any open renewal deal with its close date.
- A persona review of the customer reply.

METHOD
- Read the reply in the exec's voice, line by line: what they'd underline, what they'd forward to their team with a comment, what makes them call their account owner.
- Then read the internal summary as our own VP of Customer Experience: is the business impact clear enough to get engineering moving?
- Score both on clarity, ownership, timeline and tone, one to five, with the line that cost each point.

OUTPUT
The annotated reply, the scores, and a rewritten reply and summary. Keep the facts; fix the framing.

GROUNDING
The exec's reactions trace to the canvas, the quotes or the persona review, cited; anything else is labelled as your extrapolation. Don't add a promise, date or fix the summary doesn't contain.
```

## Ad hoc questions

- Who is [account] to us: tier, size, what they bought?
- Does [account] have a renewal in the next 90 days, and who owns it?
- Which contacts do we know at [account] and what roles do they hold?
- Is [contact] the champion or an end user?
- What did [account] say about [topic] on calls?
- Did our rep promise [feature] to [account]?
- Which competitor did [account] evaluate before buying?
- What is the open pipeline on [account]?
- Which of these accounts is Tier 1?
- Has [account] raised this before?
- Which open renewals close in the next 60 days at accounts with an escalation open?
- Is anyone at [account] a Blocker on a current deal?
- What's the total open pipeline at the accounts in this week's escalations?
- Did [account] raise the same pain on calls before it became a ticket?
- Which of [account]'s contacts has the most recent call with us?
- Has [account] been surveyed for win/loss, and what did they say?

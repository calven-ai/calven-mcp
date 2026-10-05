# Risk review

**Team:** Customer success · also CS leadership, RevOps
**Impact:** Medium. Health scores read usage; the earliest churn signals are in what customers say. A weekly read of negative quotes, competitor mentions, unmet asks and stakeholder gaps, matched to the patterns in lost deals, catches risk before the score moves.
**Prerequisites:** call transcripts ingested (quotes by account), CRM connected (contacts, deals, loss reasons). Win/loss surveys running adds the pattern of why customers leave. Usage, tickets and health scores stay outside.

## What the team is trying to do

Add the voice signal to the weekly risk review: which accounts said something that matches how we lose, which lost a stakeholder, which have gone quiet. Done means a ranked risk list with evidence and a play per account. Without the company's own call record, risk is a usage dashboard and a gut feeling.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Know how we lose | The patterns in lost deals and lost renewals | Top loss reasons and drivers, by segment | Win/loss dashboard, deal drivers, CRM deals |
| 2 | Scan the book | Negative quotes, competitor mentions, unmet asks | Quotes by account, sentiment and category, over the window | Quotes, themes |
| 3 | Check stakeholders | Champion or buyer gone | Contacts by role per account | CRM contacts |
| 4 | Check silence | Accounts with no conversation | Conversations by account and date | Customer conversations |
| 5 | Combine with health | Usage, tickets, NPS | Calven does not help here | |
| 6 | Pick the play | Save, re-onboard, exec outreach, product escalation | The play that matches the loss pattern; what customers with that driver needed | Deal drivers, messaging objection handling |
| 7 | Act and log | Outreach, CRM note | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: the weekly voice-risk read

```
Using Calven MCP, run the weekly risk read on my accounts.

CONTEXT
My accounts are below. I will add usage and tickets myself. I want the signals in what customers said.

PULL FROM THE UNIVERSE
- Negative quotes from each account in the last [window], by category, with speaker and date.
- Competitor mentions from each account.
- Contacts by buying role per account; flag accounts with no champion or no economic buyer.
- Conversations per account in the window; flag accounts with none.
- The top loss reasons and loss drivers in our segment this year, for the pattern.

BUILD
- A table: account, signals (quotes, competitor, stakeholder gap, silence), which loss pattern it matches, suggested play.
- Rank by how many signals match a loss pattern.

OUTPUT
The table and the three accounts to act on this week.

GROUNDING
Use only the Universe and cite it. Say which accounts have no ingested calls instead of marking them healthy.

[paste the account list and name the window]
```

### Step 6: the play for one account

```
Using Calven MCP, propose a save play for [account].

CONTEXT
[account] shows [signal]. Renewal is on [date].

PULL FROM THE UNIVERSE
- Every quote from [account] in the last year, by sentiment and category.
- Why they bought, from drivers and survey answers.
- What customers who left for the same reason said, from deal drivers and loss reasons.
- Messaging objection handling for the issue, and product changes that address it.

BUILD
- The diagnosis in three lines, with evidence.
- The play: who to contact, what to say in their own earlier words, what to show, what to ask.
- The escalation if it does not land.

OUTPUT
The play.

GROUNDING
Use only the Universe and cite it. Do not promise a product change that is not recorded.

[name the account, signal and date]
```

### Gap: silent accounts

```
Using Calven MCP, list my accounts with no conversation in the last [days] days.

CONTEXT
Silence is a risk. I want the accounts we have not heard from, with what we last heard.

PULL FROM THE UNIVERSE
- Conversations by account with the latest date.
- The last three quotes from each silent account.

BUILD
- A table: account, last conversation date, last thing they said, renewal date.

OUTPUT
The table.

GROUNDING
Use only the Universe and cite it. Note that calls not ingested do not appear.

[paste the account list and the number of days]
```

## Ad hoc questions

- Which of my accounts said something negative this month?
- Has anyone at [account] mentioned a competitor?
- Which accounts no longer have a champion contact?
- What are the top reasons customers left us this year?
- When did we last talk to [account]?
- What did customers who churned for [reason] say before they left?
- Which accounts have asked for something we have not shipped?
- What is the save play messaging for "[objection]"?

## Good practice

- Run it weekly with the same window and paste usage next to it. Voice plus usage beats either alone.
- Rank by match to loss patterns, not by number of negative quotes. One quote that matches how we lose matters more than five grumbles.
- Treat silence as a signal. Accounts with no ingested conversations get a check-in.
- Write the play in the customer's own earlier words. Reminding them why they bought works.

## Not covered today

- Usage, tickets, NPS, health scores and contract data are outside Calven.
- Calven does not log the outreach or update the CRM.
- Calls that were not ingested are invisible; make ingestion part of the CS workflow.

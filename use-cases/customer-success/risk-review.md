# Risk review


The weekly risk review runs on a usage dashboard and a gut feeling. You add the voice signal: which accounts said something that matches how you lose, which lost a stakeholder, which went quiet, ranked with evidence and a play per account. Calven reads the company's own call record, so every risk has quotes behind it.

## Prompts

### Run the weekly voice-risk read

```
Using Calven MCP, run the weekly risk read on my accounts.

FILL IN
- Accounts: [paste the account list]
- Window: [time window, e.g. last 30 days]

CONTEXT
I will add usage and tickets myself. I want the signals in what customers said.

PULL FROM THE UNIVERSE
- Negative quotes from each account in the window, by category, with speaker and date.
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
```

### Propose a save play for one account

```
Using Calven MCP, propose a save play for the account below.

FILL IN
- Account: [account]
- Signal: [risk signal]
- Renewal date: [renewal date]

CONTEXT
The account shows the signal above. Renewal is on the renewal date.

PULL FROM THE UNIVERSE
- Every quote from the account in the last year, by sentiment and category.
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
```

### List accounts that have gone quiet

```
Using Calven MCP, list my accounts with no conversation in the window below.

FILL IN
- Accounts: [paste the account list]
- Days: [number of days, e.g. 60]

CONTEXT
Silence is a risk. I want the accounts we have not heard from in that many days, with what we last heard.

PULL FROM THE UNIVERSE
- Conversations by account with the latest date.
- The last three quotes from each silent account.

BUILD
- A table: account, last conversation date, last thing they said, renewal date.

OUTPUT
The table.

GROUNDING
Use only the Universe and cite it. Note that calls not ingested do not appear.
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

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

## Advanced prompts

### Run a survival curve on your book

```
Run a survival analysis on my book to see which voice signals shorten a customer's life. Use Calven MCP for the signals per account: negative quotes, competitor mentions, stakeholder gaps and silence.

FILL IN
- Book history: [attach a CSV of accounts with start date, end date or "active", and ARR]
- Window: [window]

CONTEXT
Our health score uses usage. I suspect what customers say predicts churn earlier. I want to test it, not assume it.

FROM CALVEN
- For each account: negative quotes by date and category, competitor mentions, and conversations by date.
- Contacts by buying role, to flag accounts with no champion or economic buyer.
- Top loss reasons and drivers for lost renewals, with n, to name the patterns.

METHOD
- Build per-account covariates from Calven: count of negative quotes, any competitor mention, champion gap, days since last conversation.
- Plot Kaplan-Meier curves split by each covariate. If you can run code, fit a Cox model and report hazard ratios with confidence intervals.
- Say which signals shift the curve and which don't, and how early the gap opens.
- Check for the obvious confounder: accounts with more calls have more quotes, so normalise by conversations.

OUTPUT
The curves described in words (or charted if you ran code), a table of signals with hazard ratio and confidence, and the two signals to add to the health score.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Accounts with no ingested calls are missing data, not healthy; say how many. With fewer than 15 churn events, call the result directional.
```

### Rank risk by expected ARR lost

```
Rank my at-risk accounts by expected ARR lost and by how saveable each is, and give me a triage list for the week. Use Calven MCP for each account's risk signals and what saved or lost accounts like it.

FILL IN
- At-risk accounts: [paste the list with ARR and renewal date]
- Team capacity: [save plays the team can run this month]

CONTEXT
We have more red accounts than people. Working the scariest-looking one first isn't the same as working the one where effort changes the outcome.

FROM CALVEN
- For each account: negative quotes, competitor mentions, contacts by role and last conversation date.
- Deal drivers from lost and won renewals, matched to each account's pattern.
- The messaging objection handling for the issues each account raised.

MODEL
- For each account, estimate probability of churn and probability a save play works, from the signals and the matched pattern. Show the evidence for both.
- Expected ARR saved by working it equals ARR times churn probability times save probability.
- Put the accounts on a 2x2: churn likelihood against saveability. Work the high-high box first, monitor high-low, write off low-saveability only with the sponsor's agreement.
- Fill the team's capacity from the top of the ranking and run it again with every probability 20 percent off.

OUTPUT
The ranked table, the 2x2, the accounts to work this month with the play for each, and the ones I'm accepting as risk.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Probabilities are your estimates tied to named signals. Don't invent a save that isn't in the record.
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
- Which accounts mentioned a competitor and lost a contact in the same quarter?
- What did customers who renewed after a rough patch say turned it round?
- Which of my accounts haven't had a recorded call since they signed?
- What's the earliest warning in the quotes of customers we lost last year?
- Which theme is growing fastest among negative quotes this quarter?
- Which accounts raised the same complaint as a customer who later left?
- Who on [account] has gone quiet after being active on calls?

# Win-back outreach


Some deals we lost for a reason that's since changed: a feature shipped, a price moved, an integration landed, the competitor stumbled. You get a list of those accounts, each with what they said at the time, whether the champion is still there, what changed, and a message that says so. Calven adds the company's data on which losses are reopenable, so you don't email all of them the same way.

## Prompts

### Build a win-back list by loss reason

```
Using Calven MCP, build my win-back list for deals we lost on the loss reason or gap below.

FILL IN
- Loss reason: [loss reason, or leave blank if using a gap]
- Gap: [product feedback gap, or leave blank if using a loss reason]
- What changed: [what changed: shipped X, added Y, cut the price of Z]
- Window: [time window, e.g. last 12 months]

CONTEXT
We have since made the change above. I want to go back to the deals that walked for that reason.

PULL FROM THE UNIVERSE
- Lost deals in the window with the loss reason or the product feedback gap, with account, amount band, close date and the competitor they chose.
- For surveyed deals, the summary and the driver that decided it, with the buyer's words.
- The product change that closed the gap, with its date.

BUILD
- A table: account · when lost · what they said · who they chose · what changed since · champion still on record (yes/no).
- Rank by amount band and recency.

OUTPUT
The ranked table with sources.

GROUNDING
Include only deals whose recorded loss reason matches. Cite the response or driver behind each. Do not pad the list with loosely related losses.
```

### Write the win-back message for an account

```
Using Calven MCP, write the win-back message for the account below.

FILL IN
- Account: [account]
- Month lost: [month]
- Reason: [why we lost]
- What changed: [what changed]

CONTEXT
We lost the account in that month for that reason. That has changed. I want a message to the champion that says so without overselling.

PULL FROM THE UNIVERSE
- The deal record and the win/loss summary, with the buyer's words on why they walked.
- The contacts we hold at the account and whether the champion is still listed.
- The product change or product brief entry that shows the gap is closed.

WRITE
- Under 100 words. Open on what they told us then, state what changed in one plain sentence, ask one question.
- If the champion is gone, a version for the next-best contact.

OUTPUT
The message, the contact to send it to, and the source for the change.

GROUNDING
Use only the deal record, the quote and the product facts in the Universe. Do not claim more than the product brief says shipped.
```

### See what changed at the competitor since

```
Using Calven MCP, what has happened at the competitor below since we lost this account to them?

FILL IN
- Competitor: [competitor]
- Account: [account]
- Since: [date we lost]

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date: pricing changes, launches, messaging shifts.
- The battlecard's "where we win" section.

OUTPUT
Three lines: what changed at the competitor, what it means for this account, the one line to use.

GROUNDING
Use only signals and the battlecard in the Universe, with dates. If nothing is recorded, say so.
```

### Confirm the change is in the product

```
Using Calven MCP, confirm that the capability below is in our product and how it is packaged.

FILL IN
- Capability: [capability]

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes mentioning the capability.

OUTPUT
Whether it is in the brief, which plan includes it, and the wording I can use.

GROUNDING
Confirm only against the product brief and product changes. If the brief is silent, say "not in the brief".
```

## Ad hoc questions

- Which deals did we lose on "Missing feature" in the last year?
- Which lost deals named [capability] as the gap? Quote the buyers.
- Is the champion from [account] still a contact?
- What changed in our product in the last 90 days?
- Which closed-lost accounts in Tier 1 are older than six months?
- Who did we lose [account] to, and what did the buyer say?
- Has [competitor] raised prices since [month]?
- Which lost deals had "Integrations" as product feedback?
- Which deals lost on "No decision" had a champion on record?
- What plan includes [capability] now?

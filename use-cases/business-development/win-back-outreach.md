# Win-back outreach

**Team:** Business development · also account executives, revenue operations
**Impact:** High. Closed-lost accounts already know the product and the problem. When the reason they walked no longer applies, they are the warmest list a BDR has, and nobody is working it.
**Prerequisites:** CRM connected (deals with loss reasons, contacts). Better with win/loss surveys running (the buyer's words on why) and product changes monitored (what has changed since).

## What the team is trying to do

Reopen the deals we lost for a reason that has since changed: a feature shipped, a price moved, an integration landed, the competitor stumbled. Done means a list of accounts, each with what they said at the time, whether the champion is still there, what changed, and a message that says so. Without the company's data the BDR does not know which losses are reopenable and emails all of them the same way.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the reason that changed | A shipped feature, a new tier, an integration | What changed in our product and when | Product changes, product brief |
| 2 | Find the deals lost for it | Lost deals with that loss reason or product gap | Lost deals by loss reason and product feedback; deals behind a product gap | CRM deals, win/loss drill-down (product deals), deal drivers |
| 3 | Read what they said | The buyer's own words at the time | The survey summary, the driver, the evidence quote | Surveyed deals, deal drivers, survey responses |
| 4 | Check the people | Is the champion still listed? | Contacts at the account, roles and lifecycle stage | CRM contacts |
| 5 | Check the competitor | Who won it, and have they moved? | Lost-to competitor, recent signals on them | CRM deals, competitive signals |
| 6 | Write the angle | One message per account | A message that names what they said and what changed | Deal drivers, product changes |
| 7 | Confirm the facts | The change is real and shipped | The product brief and the product change record | Product brief, product changes |
| 8 | Send and track | Sequence, replies, meetings | Calven does not help here | |

## Recommended prompts

### Steps 1 to 3: the win-back list

```
Using Calven MCP, build my win-back list for deals we lost on [loss reason or gap].

CONTEXT
We have since [what changed: shipped X, added Y, cut the price of Z]. I want to go back to the deals that walked for that reason.

PULL FROM THE UNIVERSE
- Lost deals in the last [window] with loss reason [reason] or product feedback [gap], with account, amount band, close date and the competitor they chose.
- For surveyed deals, the summary and the driver that decided it, with the buyer's words.
- The product change that closed the gap, with its date.

BUILD
- A table: account · when lost · what they said · who they chose · what changed since · champion still on record (yes/no).
- Rank by amount band and recency.

OUTPUT
The ranked table with sources.

GROUNDING
Include only deals whose recorded loss reason matches. Cite the response or driver behind each. Do not pad the list with loosely related losses.

[name the loss reason or gap and what changed]
```

### Steps 4 and 6: the message per account

```
Using Calven MCP, write the win-back message for [account].

CONTEXT
We lost [account] in [month] because [reason]. That has changed: [what changed]. I want a message to the champion that says so without overselling.

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

[name the account]
```

### Step 5: the competitor they chose

```
Using Calven MCP, what has happened at [competitor] since we lost [account] to them?

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] since [date]: pricing changes, launches, messaging shifts.
- The battlecard's "where we win" section.

OUTPUT
Three lines: what changed at the competitor, what it means for this account, the one line to use.

GROUNDING
Use only signals and the battlecard in the Universe, with dates. If nothing is recorded, say so.

[name the competitor and the date]
```

### Step 7: confirm the change

```
Using Calven MCP, confirm that [capability] is in our product and how it is packaged.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes mentioning [capability].

OUTPUT
Whether it is in the brief, which plan includes it, and the wording I can use.

GROUNDING
Confirm only against the product brief and product changes. If the brief is silent, say "not in the brief".

[name the capability]
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

## Good practice

- Start from the change, not the list. "What shipped this quarter" tells you which losses to revisit.
- Ask for the buyer's words. A message that quotes back what they said is the one that gets answered.
- Check the champion before writing. A win-back to a departed champion goes nowhere.
- Keep the claim to what the product brief says. A win-back that oversells the fix loses the account twice.
- Rerun the list each quarter; every release reopens a different set of losses.

## Not covered today

- Whether the champion still works there. Calven shows what the CRM mirror holds, not a live profile check.
- Updating the deal or creating a new one in the CRM.
- Current news on the account.

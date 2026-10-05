# CS handoff

**Team:** Account executives · also customer success, solutions engineering
**Impact:** Medium. The handoff note is written in a hurry after close, and the promise that was made on call three is the one that churns the account.
**Prerequisites:** CRM connected (pipeline category on for MCP), call transcripts ingested. Better with win/loss surveys running (the won-deal survey), product brief approved.

## What the team is trying to do

Hand customer success what they need and nothing they have to re-ask: why the customer bought, what was promised, what nearly stopped the deal, who matters and how they define success, in the customer's words. Done means a one-page note the CSM reads before the kickoff. Without the company's own record, the note is the AE's memory of a four-month deal.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Why they bought | The drivers and the words | The won deal's survey summary and drivers; the quotes from the deal's calls | Surveyed deals, deal drivers, quotes |
| 2 | What was promised | Capabilities, integrations, timelines mentioned | Vendor quotes from our reps on this account's calls tagged value claim, proof point or next step, checked against the product brief | Vendor quotes, product brief |
| 3 | What nearly stopped it | The objections raised and how they were resolved | Objections in the deal's quotes and drivers that hurt us | Quotes (Objection), deal drivers |
| 4 | Who matters | The buying group and their roles | Contacts on the account with buying role | CRM contacts |
| 5 | How they define success | Their metric and goal | Quotes tagged Goal or Gain; the persona's KPIs | Quotes, persona canvas |
| 6 | Contract facts | Plan, seats, dates, terms | Calven does not help here beyond amount and close date on the deal | |
| 7 | Write and hand over | The note, the kickoff | A drafted note from the above | All |

## Recommended prompts

### Step 1 to 5 and 7: the handoff note

```
Using Calven MCP, write the customer success handoff note for [account].

CONTEXT
[Deal] closed on [date]. Below are the contract facts (plan, seats, dates) and anything I remember promising that may not be on a recorded call.

PULL FROM THE UNIVERSE
- The won deal: survey summary, drivers, and the customer quotes from its calls.
- Our own reps' statements on those calls tagged value claim, proof point or next step, checked against the product brief.
- The objections raised during the deal and how they were resolved.
- The contacts at [account] with buying role.
- The customer's stated goals and the KPIs of their persona.

BUILD
- Why they bought, in their words.
- What we promised, each item marked "in the product brief" or "needs confirmation".
- What nearly stopped the deal and what settled it.
- Who matters: name, role, what each cares about.
- How they define success, with their metric.
- The risks the CSM should watch.

OUTPUT
A one-page note with sources.

GROUNDING
Quotes verbatim. Promises only as recorded or as I state below; mark anything not in the product brief. Do not invent success criteria.

[name the account and deal; paste the contract facts and your own recollections]
```

### Step 2: what did we promise

```
Using Calven MCP, what did we promise [account] during the deal?

CONTEXT
I want every statement our reps made about capabilities, timelines or outcomes, checked.

PULL FROM THE UNIVERSE
- Vendor quotes from [account]'s calls, by category.
- The product brief and recent product changes.

CHECK
- Each promise: in the brief, not in the brief, or contradicted by a change.

OUTPUT
A table with a verdict per promise.

GROUNDING
Only recorded statements. If the deal's calls were not ingested, say so.

[name the account]
```

### Step 3 to 5: review a note I already wrote

```
Using Calven MCP, review my handoff note for [account] against what was actually said on the deal.

CONTEXT
Below is the note I drafted from memory. I want to know what it gets wrong, what it leaves out, and what the customer would not recognise.

PULL FROM THE UNIVERSE
- The won deal's survey summary and drivers.
- The customer quotes from [account]'s calls tagged Objection, Goal or Gain.
- The contacts at [account] with buying role.

CHECK
- Each claim in my note: matches the record, differs from it, or not recorded.
- Objections and success criteria the record holds that my note leaves out.
- Contacts in the buying group my note does not name.

OUTPUT
The note annotated inline, then the three additions that matter most to the CSM.

GROUNDING
Compare only against what the Universe holds and cite it. Where the calls were not ingested, say the record is silent rather than confirming my memory.

[paste your note and name the account]
```

## Ad hoc questions

- Why did [account] buy, in their own words?
- What objections came up on [deal] and how were they resolved?
- Who are the contacts at [account] and what are their roles?
- What did our reps promise on calls with [account]?
- What does [account]'s champion say success looks like?
- What is the [persona]'s KPI, according to their canvas?
- Did anything we said to [account] fall outside the product brief?
- What did the win/loss survey on [deal] say?

## Good practice

- Paste the contract facts and your own recollections. Calven holds what was recorded; the unrecorded promise is the one to write down.
- Ask for promises marked against the brief. The CSM needs to know which ones are safe.
- Write the note the day of close. The quotes are the same next month; your memory is not.
- Share the note with the SE for the technical promises.

## Not covered today

- Contract terms, seats, dates, billing. Those are the CRM and the order form.
- Writing the note into the CRM or the CS tool. Calven reads the mirror.
- Calls that were never ingested. If the deal's calls are not in the Universe, the note is the AE's memory and should say so.

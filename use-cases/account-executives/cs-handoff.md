# CS handoff


The deal's closed and customer success needs everything without having to re-ask you. You hand over a one-page note the CSM reads before kickoff: why the customer bought, what was promised, what nearly stopped the deal, who matters and how they define success, in the customer's words. Calven adds the recorded deal, so the note isn't your memory of a four-month cycle.

## Prompts

### Write the customer success handoff note

```
Using Calven MCP, write the customer success handoff note for the account below.

FILL IN
- Account: [account]
- Deal: [deal]
- Close date: [date]
- Contract: [paste the contract facts: plan, seats, dates]
- Recollections: [paste anything you remember promising that may not be on a recorded call]

CONTEXT
The deal closed on the date above. The contract facts and my recollections are in the FILL IN block.

PULL FROM THE UNIVERSE
- The won deal: survey summary, drivers, and the customer quotes from its calls.
- Our own reps' statements on those calls tagged value claim, proof point or next step, checked against the product brief.
- The objections raised during the deal and how they were resolved.
- The contacts at the account with buying role.
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
Quotes verbatim. Promises only as recorded or as I state in my recollections; mark anything not in the product brief. Do not invent success criteria.
```

### List and check every promise we made

```
Using Calven MCP, what did we promise the account below during the deal?

FILL IN
- Account: [account]

CONTEXT
I want every statement our reps made about capabilities, timelines or outcomes, checked.

PULL FROM THE UNIVERSE
- Vendor quotes from the account's calls, by category.
- The product brief and recent product changes.

CHECK
- Each promise: in the brief, not in the brief, or contradicted by a change.

OUTPUT
A table with a verdict per promise.

GROUNDING
Only recorded statements. If the deal's calls were not ingested, say so.
```

### Review a handoff note written from memory

```
Using Calven MCP, review my handoff note for the account below against what was actually said on the deal.

FILL IN
- Account: [account]
- Note: [paste your note]

CONTEXT
I drafted the note from memory. I want to know what it gets wrong, what it leaves out, and what the customer would not recognise.

PULL FROM THE UNIVERSE
- The won deal's survey summary and drivers.
- The customer quotes from the account's calls tagged Objection, Goal or Gain.
- The contacts at the account with buying role.

CHECK
- Each claim in my note: matches the record, differs from it, or not recorded.
- Objections and success criteria the record holds that my note leaves out.
- Contacts in the buying group my note does not name.

OUTPUT
The note annotated inline, then the three additions that matter most to the CSM.

GROUNDING
Compare only against what the Universe holds and cite it. Where the calls were not ingested, say the record is silent rather than confirming my memory.
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

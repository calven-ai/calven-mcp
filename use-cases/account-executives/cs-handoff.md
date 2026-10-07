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

## Advanced prompts

### Build a 90-day risk register for the account

```
Build a risk register for the new customer's first 90 days, scored on probability and impact, so CS starts with the account's real risks ranked. Use Calven MCP for what nearly stopped the deal, what similar customers struggled with and the gaps in the product brief.

FILL IN
- Deal: [deal]
- Go-live plan: [paste the onboarding plan or key dates, or "not set"]
- What I'm worried about: [anything you know that isn't on record]

CONTEXT
I closed it. Now the account can churn on something I heard on call four and never wrote down. CS needs the risks with odds, not a list of everything.

FROM CALVEN
- The deal's objections and how they were resolved, from buyer and rep quotes on the account's calls.
- The won-deal survey and deal drivers, if the deal was surveyed, including drivers that hurt.
- Quotes from other customers in the segment typed Onboarding / implementation or Support feedback, with sentiment.
- The product brief's known weaknesses and integrations, against the account's tech stack.

MODEL
- List eight to twelve risks: adoption, champion leaves, integration fit, promised capability, value not shown by the renewal check-in.
- Score each 1 to 5 on probability and impact, with the evidence for the score. Rank by the product.
- For the top five: the early warning sign CS can watch, the owner, and the action in the first 30 days.

OUTPUT
The register as a table (risk, evidence, probability, impact, score, warning sign, owner, action), sorted, plus a three-line summary for the CS kickoff.

GROUNDING
Label every score as Calven-evidenced (cited), mine, or your assumption. Don't invent a risk the calls, survey or brief don't show unless I named it in what I'm worried about.
```

### Trace every promise to its proof

```
Build a traceability matrix from every promise made to this customer to the proof that we can keep it, so nothing CS inherits is a surprise. Use Calven MCP for what our reps said on the calls and what the product brief supports.

FILL IN
- Deal: [deal]
- Paper trail: [paste the proposal, order form and any written commitments]

CONTEXT
Sales promises live in three places: the calls, the proposal and the contract. CS reads none of them. I want each promise on one line with where it was made and whether the product backs it.

FROM CALVEN
- Our reps' quotes on the account's calls tagged Value claim, Proof point, Pricing, Caveat and Next step.
- The product brief: capabilities, integrations, pricing and packaging, known weaknesses.
- Product changes since the deal opened, and claims with their proof status.

METHOD
- Extract every promise from the quotes and the paper trail. Merge duplicates; keep the strongest wording.
- For each, trace forward: brief section that supports it, plan that includes it, product change that affects it.
- Classify: backed, backed with conditions, not in the brief, contradicted. Note where the call said more than the paper.

OUTPUT
The matrix (promise, where made, date, exact words, brief evidence, status, CS action), with the contradicted and unbacked rows at the top.

GROUNDING
Every promise cites a quote or a line in the paper trail, and every status cites the brief. Where the calls weren't ingested, say the record is silent rather than marking the promise backed.
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
- What did customers in [segment] complain about most during onboarding?
- Which competitor did [account] evaluate, and what did they like about them?
- Which deal driver that hurt us on [deal] could come back at renewal?
- Is [account]'s champion still on record as a contact, and what role do they hold?
- Which integrations in [account]'s tech stack does the product brief list?
- Did [account] give price feedback during the deal?
- What use case in the product brief matches why [account] bought?

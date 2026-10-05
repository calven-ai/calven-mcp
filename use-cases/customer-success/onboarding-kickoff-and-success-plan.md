# Onboarding kickoff and success plan

**Team:** Customer success · also implementation, sales
**Impact:** High. Customers who do not reach first value in the first month churn at a multiple of those who do. A kickoff built on why they bought and a success plan in their words gets the first milestone agreed on day one.
**Prerequisites:** CRM connected (deal, contacts), win/loss surveys running or call transcripts ingested (the stated outcomes), personas approved (what each stakeholder is measured on), product brief approved (what the product does for the use case).

## What the team is trying to do

Run a kickoff that confirms the outcome the customer bought, names the milestones, assigns owners and dates on both sides, and agrees what first value looks like. Done means a kickoff agenda, a success plan draft the customer edits rather than writes, and a 30-60-90 plan. Without the company's own record, the kickoff re-asks what sales already heard and the success plan is a template.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Confirm what sales assumed | Goals, stakeholders, go-live date, prerequisites | The account brief: drivers, quotes, contacts, promises | See account briefing and handoff |
| 2 | Define outcomes | The business outcome and the metric | The buyer's stated gains and goals, verbatim; the persona's KPIs | Quotes (goal, gain), survey responses, persona canvas |
| 3 | Map use cases | Which product use cases serve those outcomes | The product brief's use cases and capabilities, mapped to the persona's jobs to be done | Product brief, persona canvas |
| 4 | Draft the success plan | Outcomes, milestones, owners, dates, risks | A plan with the customer's words and the product's use cases | All above |
| 5 | Build the kickoff agenda | Roles, goals, definition of done, cadence, next steps | The agenda with the questions that confirm rather than re-ask | Quotes, contacts |
| 6 | Set the 30-60-90 | First value, adoption, review | Milestones built from use cases and what similar customers said about time to value | Product brief, quotes (time to value) |
| 7 | Run the kickoff | Facilitate, capture | Calven does not help here (ingest the call after) | |
| 8 | Track | Milestones, usage, tickets | Calven does not help here | |

## Recommended prompts

### Step 2 to 4: success plan draft

```
Using Calven MCP, draft the success plan for [account].

CONTEXT
[account] signed for [product] on [date]. The kickoff is on [kickoff date]. I want a plan built on what they told us they want, so they edit rather than start from blank.

PULL FROM THE UNIVERSE
- Quotes from [account] tagged goal, gain, job to be done or buying trigger, with speaker and role.
- The buyer's survey answers and the deal drivers that decided the deal.
- The persona canvas for each contact: goals and KPIs.
- The product brief: use cases and capabilities for [product].

BUILD
- Outcomes: three business outcomes in the customer's words, each with the KPI the persona is measured on.
- Use cases: which product use cases serve each outcome.
- Milestones: first value, adoption, review, each with an owner role on both sides and a target date relative to kickoff.
- Risks: anything the customer worried about during the sale, with a mitigation.
- Open questions for the kickoff.

OUTPUT
The success plan as a one-page document with sources.

GROUNDING
Use only the Universe and cite it. Do not invent outcomes; if the record has none, mark the section as "to confirm at kickoff".

[name the account, product and dates]
```

### Step 5: kickoff agenda

```
Using Calven MCP, write the kickoff agenda for [account].

CONTEXT
45 minutes with [contacts]. I want to confirm what we know and fill the gaps, not re-run discovery.

PULL FROM THE UNIVERSE
- The contacts and their buying roles and personas.
- The stated outcomes and worries from the sales calls and survey.
- Rep promises from the vendor quotes.

BUILD
- Agenda with timings: introductions and roles, the outcome in their words (confirm), definition of done, milestones and owners, cadence, next steps.
- Under each item, the fact from the record and the one question that confirms it.
- Three things to say we heard, verbatim.

OUTPUT
The agenda.

GROUNDING
Use only the Universe and cite it.

[name the account and who is attending]
```

### Step 6: the 30-60-90

```
Using Calven MCP, build the 30-60-90 day plan for [account] on [product].

CONTEXT
I want first value inside 30 days. The success plan outcomes are below.

PULL FROM THE UNIVERSE
- The product brief: the use cases and the capabilities each needs.
- Quotes from other customers tagged time to value or onboarding, to set realistic milestones.
- The persona's jobs to be done for the day-to-day owner.

BUILD
- Days 1 to 30: the first use case live and the first value moment, with the steps.
- Days 31 to 60: adoption across the users, training, second use case.
- Days 61 to 90: review against outcomes, expansion signals to watch.
- For each phase: owner on each side, the risk, the check-in.

OUTPUT
The plan as a table.

GROUNDING
Use only the Universe and cite it. Do not promise timelines the product brief or customer evidence does not support.

[paste the outcomes and name the product]
```

### Review: an existing success plan

```
Using Calven MCP, review this success plan against what [account] actually told us.

CONTEXT
Below is the plan we drafted. I want to know where it drifts from the customer's own words and from what the product does.

PULL FROM THE UNIVERSE
- Quotes and survey answers from [account] on goals, gains and jobs to be done.
- The product brief for [product].

CHECK
- Each outcome: does the customer evidence support it, in those words?
- Each milestone: does the product brief support the use case?
- What the customer said that the plan ignores.

OUTPUT
The plan annotated, then the three edits.

GROUNDING
Use only the Universe and cite it.

[paste the plan and name the account]
```

## Ad hoc questions

- What outcome did [account] say they want from [product]?
- What is [persona] measured on?
- Which product use cases serve [outcome]?
- What did other customers say about time to first value?
- Who should own the first milestone on the customer side, by buying role?
- What did [account] worry about during the sale that should be a risk in the plan?
- Did the rep promise a go-live date to [account]?
- Which capabilities does the [use case] need, according to the product brief?
- What did [contact] say they personally need from this?
- Write the definition of done for [account] in their words.

## Good practice

- Draft the plan before the kickoff and send it as a pre-read. Customers edit a plan in their words; they ignore a template.
- Use the persona's KPIs as the outcome metric. It is what the sponsor will report on.
- Set milestones from product use cases, not features. The brief lists them.
- Ingest the kickoff call. The success plan review prompt then reads what was agreed.
- Rerun the review prompt at 90 days. Drift between plan and record is the first churn signal.

## Not covered today

- Implementation tasks, tickets, technical prerequisites and the project tool are outside Calven.
- Usage and adoption numbers are not in Calven.
- Calven does not store the success plan; keep it in the CS tool and paste it for review.

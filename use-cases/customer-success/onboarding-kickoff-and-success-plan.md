# Onboarding kickoff and success plan


You're about to run the kickoff and you don't want to re-ask what sales already heard. You get a kickoff agenda, a success plan the customer edits instead of writing, and a 30-60-90 plan, all built on the outcome they bought. Calven drafts them from what the customer told you during the sale, so the plan isn't a template.

## Prompts

### Draft the success plan from their words

```
Using Calven MCP, draft the success plan for the account below.

FILL IN
- Account: [account]
- Product: [product]
- Signed: [signature date]
- Kickoff: [kickoff date]

CONTEXT
The account signed for the product on the signature date. The kickoff is on the kickoff date. I want a plan built on what they told us they want, so they edit rather than start from blank.

PULL FROM THE UNIVERSE
- Quotes from the account tagged goal, gain, job to be done or buying trigger, with speaker and role.
- The buyer's survey answers and the deal drivers that decided the deal.
- The persona canvas for each contact: goals and KPIs.
- The product brief: use cases and capabilities for the product.

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
```

### Write the kickoff agenda

```
Using Calven MCP, write the kickoff agenda for the account below.

FILL IN
- Account: [account]
- Attendees: [who is attending]

CONTEXT
45 minutes with the attendees. I want to confirm what we know and fill the gaps, not re-run discovery.

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
```

### Build the 30-60-90 day plan

```
Using Calven MCP, build the 30-60-90 day plan for the account below on the product below.

FILL IN
- Account: [account]
- Product: [product]
- Outcomes: [paste the success plan outcomes]

CONTEXT
I want first value inside 30 days. Build from the success plan outcomes.

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
```

### Check a success plan against the record

```
Using Calven MCP, review this success plan against what the account actually told us.

FILL IN
- Plan: [paste the plan]
- Account: [account]
- Product: [product]

CONTEXT
I want to know where the plan drifts from the customer's own words and from what the product does.

PULL FROM THE UNIVERSE
- Quotes and survey answers from the account on goals, gains and jobs to be done.
- The product brief for the product.

CHECK
- Each outcome: does the customer evidence support it, in those words?
- Each milestone: does the product brief support the use case?
- What the customer said that the plan ignores.

OUTPUT
The plan annotated, then the three edits.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Simulate the date of first value

```
Simulate when this customer really reaches first value, and what moves the date. Use Calven MCP for what they said they need, what the product requires for their use case, and what other customers said about time to value.

FILL IN
- Account: [account]
- Onboarding plan: [paste milestones with owners and your best, likely and worst durations]
- Customer resourcing: [who they've named and how many hours a week each has]

CONTEXT
I'm about to promise a first-value date at kickoff. If I promise the median and they hit the tail, the relationship starts with a miss.

FROM CALVEN
- The outcome and first-value definition the buyers stated during the sale, quoted.
- The capabilities and integrations the product brief says their use case needs.
- Customer quotes tagged Onboarding / implementation or Time-to-value, with what slowed others down.

SIMULATE
- Build the milestone network with dependencies. Add any integration step the brief requires that my plan is missing.
- Treat each duration as a three-point estimate. If you can run code, run 5,000 draws and show the distribution of the first-value date; otherwise give the 50th and 85th percentile by hand.
- Find the critical path and the two milestones that most often push the date.
- Test two changes: one more customer hour a week on the bottleneck, and cutting scope to the first use case.

OUTPUT
The date to promise (85th percentile), the date to aim for (median), the critical path, and a one-line ask for the customer that buys back the most days.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Durations come from my plan or a stated assumption; customer quotes are evidence of risk, not durations. Don't invent an integration step the brief doesn't list.
```

### Map the forces that stall adoption

```
Map the forces for and against adoption for each user group, and design the onboarding around the strongest blocker. Use Calven MCP for the users' jobs, the buyers' words and what our product replaces.

FILL IN
- Account: [account]
- User groups: [paste the teams or roles who'll use the product, with headcount]

CONTEXT
The buyer bought. The users didn't. Onboarding plans assume users want the new tool, and most stall on habit and anxiety rather than features.

FROM CALVEN
- The user personas' canvases: jobs to be done, pains, gains and objections.
- Quotes from the account's calls, plus quotes across customers tagged Usability / UX and Onboarding / implementation.
- The competitive alternatives and status quo from positioning, so we know what habit we're breaking.

METHOD
- For each user group, run a jobs-to-be-done forces analysis: push of the current situation, pull of our product, anxiety about the new one, habit of the old one.
- Score each force 1 to 5 from the evidence, and quote the line behind every score.
- Find the group where anxiety plus habit beats push plus pull. That's where adoption stalls.
- Design one intervention per stalled group that lowers anxiety or breaks habit (a pilot, a migration of their old artefacts, a champion), not one that adds more pull.

OUTPUT
A forces grid per user group with scores and quotes, the stall prediction, and the three changes to the onboarding plan.

GROUNDING
Every score cites a canvas line or a quote, or is labelled as your judgement. Don't invent a user reaction the canvases and quotes don't support.
```

### Rehearse the kickoff against a skeptic

```
Run a scored rehearsal of my kickoff call against the stakeholder most likely to derail it. Use Calven MCP to build that stakeholder from the persona canvas and what they said in the sale.

FILL IN
- Account: [account]
- Skeptic: [contact or persona]
- My kickoff agenda: [paste the agenda]

CONTEXT
Every kickoff has one person who wasn't sold. If they push back in the first meeting and I fumble it, the success plan becomes my plan, not theirs.

FROM CALVEN
- The persona canvas for the skeptic: goals, KPIs, objections with the approved responses.
- Everything the skeptic, or people in their role at the account, said on recorded calls.
- Messaging objection handling for the objections they're likely to raise.

ROLE-PLAY
- Play the skeptic in the first person. Stay in character, push back where the evidence says they would, and don't soften because I answer well once.
- Run the kickoff through my agenda in up to ten exchanges. I'll reply to each line.
- After the call, step out of character and score me 1 to 5 on: did I name their goal in their words, did I handle each objection with evidence, did they leave owning a milestone.
- Give me the two lines I should have said, using the approved objection handling.

OUTPUT
The transcript, the scorecard with one sentence of evidence per score, and the two better lines.

GROUNDING
The skeptic's objections come from the canvas or their quotes, cited after the role-play. Mark any pushback beyond that as your extrapolation.
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
- Which buyers in [segment] said they nearly gave up during onboarding, and why?
- What did [account] use before us, and what habit will they fall back to?
- Which integration did customers say took longest to set up?
- Which of the [account] buyers' stated outcomes can't be measured in the first 30 days?
- What did [persona] say success looks like six months in?

# Release communications


Something shipped, and existing customers need to hear what changed, why it matters to them and what to do next, without overstating it. You get a release note, an email and a CSM line that match the product and the messaging, plus the customers who asked for it. Calven keeps the story out of engineering's words and closes the loop with the people who requested it.

## Prompts

### Write the release note, email and CSM line

```
Using Calven MCP, write the customer communication for the release or change below.

FILL IN
- Change: [release or change]
- Persona: [persona]

CONTEXT
We shipped the change. I need a release note (80 words), a customer email (120 words) and a two-line CSM talking point.

PULL FROM THE UNIVERSE
- The product change record for the change: summary, what it replaces, evidence.
- The persona's jobs or pains the change serves, with their messaging hooks.
- The messaging pillar it supports, and the product brief entry it updates.

WRITE
- Release note: what changed, who it is for, what to do.
- Email: the pain in the persona's words, what changed, how to turn it on, one link.
- CSM line: what to say in the next check-in.

OUTPUT
The three pieces, each with the pillar it leans on.

GROUNDING
Use only the product change and brief in the Universe and cite them. Do not describe capabilities beyond the change record.
```

### Tell the customers who asked for it

```
Using Calven MCP, find the customers who asked for the capability below so we can tell them it shipped.

FILL IN
- Capability: [capability]

CONTEXT
The capability shipped this week. I want a personal note to every customer who requested it.

PULL FROM THE UNIVERSE
- Customer quotes tagged product feedback, job to be done or gain that mention the capability, with speaker, account and date.
- The contact's role from the CRM.

BUILD
- A table: contact, account, what they said and when.
- A three-sentence note template that quotes their own words back.

OUTPUT
The table and the template.

GROUNDING
Use only quotes in the Universe, verbatim and cited. Do not include accounts whose quote is about something else.
```

### Find what the change made wrong

```
Using Calven MCP, tell me which published materials the change below made wrong.

FILL IN
- Change: [release or change]

CONTEXT
Before we announce the change, I want to know what else now says the wrong thing.

PULL FROM THE UNIVERSE
- Drift findings linked to the product change, with the document, the verdict and the rationale.
- Claims that reference the old behaviour.

BUILD
- A list of documents and claims to fix, by severity.

OUTPUT
The list.

GROUNDING
Use only drift findings and claims in the Universe and cite them.
```

## Ad hoc questions

- What changed in our product in the last 30 days?
- Which persona uses [feature], and what pain does it answer?
- Has any customer asked for [capability] on a call?
- Which messaging pillar does [feature] support?
- Is [feature] in the product brief yet?
- Which documents went stale after [change]?
- Write a two-line CSM note about [change] for a [persona].
- Which accounts asked for [capability] and should hear about it first?
- Did [change] close a product gap that cost us deals? How many?

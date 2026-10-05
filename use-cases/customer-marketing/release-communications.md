# Release communications

**Team:** Customer marketing · also product marketing, customer success
**Impact:** Medium. Every release gets an email, an in-app note and a CSM talking point. Writing them from what changed, in the approved messaging, in the words of the persona who uses the feature, is routine work that Calven makes fast and accurate.
**Prerequisites:** own website and docs monitored (product changes), strategy documents approved (messaging, product brief), personas approved. Call transcripts ingested adds the customers who asked for the change.

## What the team is trying to do

Tell existing customers what changed, why it matters to them, and what to do next, without overstating it or missing the customers who asked for it. Done means a release note, an email and a CSM line that match the product and the messaging. Without the company's own product record, release comms describe the feature in engineering's words and never close the loop with the customers who requested it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect what changed | Gather the release from product and engineering | Product changes detected on our own site and docs, with summary, severity and evidence | Product changes |
| 2 | Decide who cares | Which personas and segments the change serves | The persona whose jobs to be done and pains the change addresses | Personas, persona canvas |
| 3 | Close the loop | Which customers asked for it | Quotes tagged product feedback or job to be done on that capability, by account | Quotes |
| 4 | Write | Release note, email, in-app copy, CSM talking point | Drafts on the messaging pillars and the product brief, in the persona's words | Messaging, product brief |
| 5 | Check what went stale | Which published documents the change contradicts | Drift findings for the change | Product drift findings |
| 6 | Fact-check and review | Claims and persona reaction | Product brief, persona review | Product brief, review_against_personas |
| 7 | Send | Email, in-app, docs update | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: the release note and email

```
Using Calven MCP, write the customer communication for [release or change].

CONTEXT
We shipped [change]. I need a release note (80 words), a customer email (120 words) and a two-line CSM talking point.

PULL FROM THE UNIVERSE
- The product change record for [change]: summary, what it replaces, evidence.
- The persona whose jobs or pains it serves, with their messaging hooks.
- The messaging pillar it supports, and the product brief entry it updates.

WRITE
- Release note: what changed, who it is for, what to do.
- Email: the pain in the persona's words, what changed, how to turn it on, one link.
- CSM line: what to say in the next check-in.

OUTPUT
The three pieces, each with the pillar it leans on.

GROUNDING
Use only the product change and brief in the Universe and cite them. Do not describe capabilities beyond the change record.

[name the change and the persona]
```

### Step 3: close the loop with customers who asked

```
Using Calven MCP, find the customers who asked for [capability] so we can tell them it shipped.

CONTEXT
[capability] shipped this week. I want a personal note to every customer who requested it.

PULL FROM THE UNIVERSE
- Customer quotes tagged product feedback, job to be done or gain that mention [capability], with speaker, account and date.
- The contact's role from the CRM.

BUILD
- A table: contact, account, what they said and when.
- A three-sentence note template that quotes their own words back.

OUTPUT
The table and the template.

GROUNDING
Use only quotes in the Universe, verbatim and cited. Do not include accounts whose quote is about something else.

[name the capability]
```

### Step 5: what the change made stale

```
Using Calven MCP, tell me which published materials [change] made wrong.

CONTEXT
Before we announce [change], I want to know what else now says the wrong thing.

PULL FROM THE UNIVERSE
- Drift findings linked to the product change for [change], with the document, the verdict and the rationale.
- Claims that reference the old behaviour.

BUILD
- A list of documents and claims to fix, by severity.

OUTPUT
The list.

GROUNDING
Use only drift findings and claims in the Universe and cite them.

[name the change]
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

## Good practice

- Start from the product change record, not from the engineering ticket. It carries the evidence and the so-what.
- Name the persona. A release note for "users" says nothing; one for the persona's job says what to do.
- Always run the closing-the-loop prompt. Telling a customer their request shipped is the cheapest advocacy there is.
- Check drift before sending. The announcement should not point at a page that still describes the old behaviour.

## Not covered today

- Sending the email, updating the docs and the in-app note happen outside.
- The internal release process, tickets and timelines are not in Calven.

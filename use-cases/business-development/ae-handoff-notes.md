# AE handoff notes


You've just qualified a prospect and you want the AE to accept the meeting and actually prepare for it. You hand over a note that maps to their BANT or MEDDIC fields: fit against the ICP, the contact's buying role, the pain in the prospect's words, the competitor in play, the timeline and what was promised. Calven fills in the account facts, so the note is more than two lines and a calendar invite.

## Prompts

### Turn call notes into an AE handoff note

```
Using Calven MCP, turn my call notes into a handoff note for the AE.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Framework: [BANT / MEDDIC]
- Notes: [paste your call notes]

CONTEXT
I just qualified the contact at the account. The AE works in the framework above. I want the note in that structure with the account facts filled in from the Universe.

PULL FROM THE UNIVERSE
- The account's ICP fit tier and attributes, and any past deals with loss reasons.
- The contact's role on record and the persona for the title.
- If a competitor was named: our win rate against them and the discovery questions from their battlecard.

BUILD
- The note in the framework's fields, each with what the prospect said (verbatim where I wrote it) and what the Universe adds.
- Fit: tier and the attributes behind it, any disqualifier.
- Risk: the competitor and what sank similar deals.
- Suggested first question for the AE.

OUTPUT
The handoff note, under one page, with sources for the Universe facts.

GROUNDING
Keep what the prospect said separate from what the Universe adds. Do not invent budget, timeline or authority the notes do not state.
```

### Decide if the account is worth an AE

```
Using Calven MCP, should I hand the account below to an AE?

FILL IN
- Account: [account]
- Contact: [contact]
- Title: [title]

CONTEXT
The contact asked for a demo. Before I book it I want the fit check.

PULL FROM THE UNIVERSE
- The account's ICP fit and the disqualifiers in our ICP.
- Past deals with the account.

OUTPUT
Hand off or not, in one line, with the two facts that decide it.

GROUNDING
Use only the ICP and CRM records in the Universe. If the account is not in the CRM, say so and judge on the ICP attributes I can confirm.
```

### Brief the AE on the competitor

```
Using Calven MCP, what should the AE know about the competitor below before the first call with this account?

FILL IN
- Competitor: [competitor]
- Account: [account]
- Segment: [segment]

PULL FROM THE UNIVERSE
- Our win rate against the competitor in the segment, with sample and window.
- The top reasons we lose to them, with the buyer's words.
- The battlecard's landmines and first discovery questions.

OUTPUT
Three lines for the handoff note.

GROUNDING
Use only the dashboards and battlecard in the Universe and cite them.
```

## Ad hoc questions

- Which MEDDIC fields can I fill from the Universe for [account]?
- What buying role is a [title] usually in our won deals?
- Is [account] in profile?
- Did we ever lose [account], and why?
- What does the AE need to ask a [persona] first?
- What is our win rate against [competitor] in [segment]?
- Which disqualifiers should I check before handing this off?
- Who else at [account] should be on the first call?
- What is the best-fit product for [account]?
- What sinks deals in [industry]?

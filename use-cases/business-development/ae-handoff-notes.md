# AE handoff notes

**Team:** Business development · also account executives, revenue operations
**Impact:** Medium. The handoff is where pipeline leaks; notes that name the pain, the people and the competitor in the words the AE's framework uses turn a booked meeting into an accepted opportunity.
**Prerequisites:** ICP approved, personas approved, CRM connected. Better with competitors tracked.

## What the team is trying to do

Hand an AE a meeting they will accept and prepare for: fit confirmed against the ICP, the contact's buying role, the pain in the prospect's words, the competitor in play, the timeline, and what was promised. Done means the note maps to the AE's qualification fields (BANT or MEDDIC) and nothing the prospect said is lost. Without the company's data the note is two lines and a calendar invite.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Capture the call | What the prospect said | Calven does not help here | |
| 2 | Confirm fit | Check the account against the ICP | Fit tier, attributes, disqualifiers; past deals | CRM accounts, ICP, CRM deals |
| 3 | Place the contact | Which buying role, which persona | Contact role on record; the persona for the title | CRM contacts, persona canvas |
| 4 | Structure the note | Map to the AE's fields | The note written to the framework the team uses, with the ICP and persona facts filled in | ICP, persona canvas |
| 5 | Flag the risk | Competitor, loss patterns | Our win rate against the competitor named; what sinks deals in this segment | Competitive intelligence dashboard, deal drivers |
| 6 | Suggest the first question | What the AE should ask first | The battlecard's discovery questions; the persona's objections | Competitor battlecard, persona canvas |
| 7 | Log and hand off | Create the opportunity, book the AE | Calven does not help here | |

## Recommended prompts

### Steps 2 to 6: the handoff note

```
Using Calven MCP, turn my call notes into a handoff note for the AE.

CONTEXT
I just qualified [contact], [title] at [account]. My raw notes are at the bottom. The AE works in [BANT / MEDDIC]. I want the note in that structure with the account facts filled in from the Universe.

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

[paste your call notes]
```

### Step 2: is this worth an AE's time

```
Using Calven MCP, should I hand [account] to an AE?

CONTEXT
[contact], [title], asked for a demo. Before I book it I want the fit check.

PULL FROM THE UNIVERSE
- The account's ICP fit and the disqualifiers in our ICP.
- Past deals with the account.

OUTPUT
Hand off or not, in one line, with the two facts that decide it.

GROUNDING
Use only the ICP and CRM records in the Universe. If the account is not in the CRM, say so and judge on the ICP attributes I can confirm.

[name the account and the contact's title]
```

### Step 5: the risk line

```
Using Calven MCP, what should the AE know about [competitor] before the first call with [account]?

PULL FROM THE UNIVERSE
- Our win rate against [competitor] in [segment], with sample and window.
- The top reasons we lose to them, with the buyer's words.
- The battlecard's landmines and first discovery questions.

OUTPUT
Three lines for the handoff note.

GROUNDING
Use only the dashboards and battlecard in the Universe and cite them.

[name the competitor and the segment]
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

## Good practice

- Paste the raw notes. The note is only as good as what the prospect actually said.
- Ask the AI tool to keep "prospect said" and "Universe adds" apart. The AE needs to know which is which.
- Name the framework. The note lands in the AE's fields, not in prose.
- Run the fit check before booking, not after. An out-of-profile demo costs the AE a slot and you a credit.
- Add the first question. It is the fastest way to make the AE accept the meeting.

## Not covered today

- Creating the opportunity, booking the AE, or writing the note into the CRM.
- Call recording and transcription of the qualification call.
- Confirming budget or timeline the prospect did not state.

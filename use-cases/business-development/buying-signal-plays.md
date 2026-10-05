# Buying signal plays


A buying signal just fired and you want outreach out within days, not the same email everyone else gets. You get a play per trigger type: the persona it hits, the pain it creates, the opener, the proof, and a ranked list of in-profile accounts where it fired. Calven adds the company's own data on which triggers come before the deals we win.

## Prompts

### Find the triggers that come before wins

```
Using Calven MCP, tell me which buying triggers show up before we win.

FILL IN
- Window: [time window, e.g. last 12 months]

CONTEXT
I want to spend my trigger-based outreach on the signals that actually lead to deals.

PULL FROM THE UNIVERSE
- The buying triggers and signals section of our ICP.
- The triggers recorded on accounts behind won deals in the window, and on lost ones.

BUILD
- A table: trigger · accounts with it that we won · that we lost · the persona it usually affects · the pain it creates.

OUTPUT
The table and a one-line recommendation on which two triggers to work first.

GROUNDING
Use only ICP content and CRM records in the Universe and cite counts with their sample. Do not infer a trigger the CRM does not record.
```

### List in-profile accounts where it fired

```
Using Calven MCP, list the in-profile accounts where the trigger below fired.

FILL IN
- Trigger: [trigger]
- Persona: [persona]
- Number: [how many accounts]

CONTEXT
I am running the play for this trigger this week and can work that number of accounts.

PULL FROM THE UNIVERSE
- CRM accounts with the trigger recorded, Tier 1 and Tier 2 fit, that have no open deal.
- The contacts we hold at each with the role that matches the persona.

BUILD
- A ranked list: account · fit tier and score · the contact to message (or "no contact on record") · any past deal and its loss reason.

OUTPUT
The ranked list, strongest fit first.

GROUNDING
Use only CRM records in the Universe. Say which accounts lack a contact rather than guessing one.
```

### Write a three-touch trigger play

```
Using Calven MCP, write the play for the trigger and persona below.

FILL IN
- Trigger: [trigger]
- Persona: [persona]
- Segment: [segment]

CONTEXT
When the trigger happens at an account in the segment, I want a three-touch play (email, LinkedIn, call opener) that speaks to what this persona faces right after it.

PULL FROM THE UNIVERSE
- The persona's canvas: goals, pains, jobs to be done, hooks.
- Customer quotes about what happened after the trigger (a migration, a new leader, a merger, new budget).
- A won deal where this trigger was in play and the driver that decided it.

WRITE
- Email under 90 words that opens on the situation the trigger creates, one proof, one question.
- A two-line LinkedIn note.
- A call opener and the first question.

OUTPUT
The three touches with the source for the pain and the proof.

GROUNDING
Use only the canvas, quotes and deals in the Universe and cite them. If the Universe holds no quote about this trigger, open on the persona's top pain instead and say so.
```

### Find accounts missing the right contact

```
Using Calven MCP, which of the accounts below have no contact on record for this persona?

FILL IN
- Persona: [persona]
- Accounts: [paste the account list]

CONTEXT
I need to know where to go find a name before I can run the play.

PULL FROM THE UNIVERSE
- Contacts at each account with their roles.

OUTPUT
Two lists: accounts with a matching contact (name, title), and accounts with none.

GROUNDING
Report only what the CRM mirror holds.
```

## Ad hoc questions

- Which accounts had a funding trigger recorded this quarter and are Tier 1?
- What does [persona] worry about right after an M&A?
- Which trigger shows up most on accounts we won?
- Do we have a Head of [function] at any of the accounts with a tech-migration trigger?
- What did customers say about the migration that made them buy? Quote them.
- Which triggers does our ICP say to watch?
- Has any account with an exec-hire trigger been in our pipeline before?
- Give me the opener for a restructuring trigger, in [persona]'s words.
- Which Tier 2 accounts with a trigger have no open deal?
- Which product is the best fit for accounts with an expansion trigger?

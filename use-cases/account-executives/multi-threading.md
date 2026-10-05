# Multi-threading


You're relying on one contact, and a manager's reminder to multi-thread doesn't tell you who to add or how. You walk away knowing which roles are on the deal, which are missing compared with the deals we win, and a hook to open each one in their own language. Calven adds the data behind it, so every live deal gets a thread to the economic buyer and the technical buyer.

## Prompts

### Map the threading gap and how to close it

```
Using Calven MCP, show me the threading gap in the deal below and how to close it.

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Champion: [contact]
- Persona: [champion's persona]

CONTEXT
The deal is at the account, in the segment. My champion is the contact above. I want to know who else needs to be on this deal and how to open them.

PULL FROM THE UNIVERSE
- The contacts at the account with buying role and lifecycle stage.
- Which personas sat on won deals in the segment, the win rate by persona and the single- versus multi-threaded win rate, with n.
- The canvases for the roles we lack: goals, pains, objections, hooks.
- One proof quote per missing persona.

BUILD
- The roles on the deal and the roles won deals usually have.
- For each gap: the persona, why they matter to the outcome, the hook, and whether to go through the champion or direct.
- A three-line opener per gap in the persona's words.

OUTPUT
A table of gaps with hooks and openers, with sources.

GROUNDING
Persona win rates from the dashboard only, with n. Do not invent contacts or names; if the CRM has no contact in that role, say "no contact on record".
```

### Find single-threaded deals in your pipeline

```
Using Calven MCP, which of my open deals are single-threaded?

FILL IN
- Owner: [your name as owner, if the CRM uses owner names]
- Segment: [segment]

CONTEXT
I want the list before the pipeline review.

PULL FROM THE UNIVERSE
- My open deals (by the owner name, in the segment) with their contact roles and contact count band.
- The multi-threaded versus single-threaded win rate, with n.

BUILD
- Each single-threaded deal with the role it lacks most, by what won deals in its segment had.

OUTPUT
A ranked table: deal, amount, close date, missing role.

GROUNDING
Only CRM mirror and dashboard data, cited. No invented contacts.
```

### Check your opener to a new contact

```
Using Calven MCP, check my message to a buyer I am trying to add to the deal below.

FILL IN
- Persona: [persona]
- Deal: [deal]
- Message: [paste the message]

CONTEXT
Read the message as that persona.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the text.

REACT
- Would they reply, and why or why not.
- The rewrite in their words.

OUTPUT
The verdict, the rewrite.

GROUNDING
Only from the canvas.
```

## Ad hoc questions

- Who is on [deal] and what role does each have?
- Which personas are on the deals we win in [segment]?
- What is our win rate on multi-threaded versus single-threaded deals?
- What does a [persona] care about, and how do I open a conversation with them?
- Where does a [persona] spend time, according to their canvas?
- Which of my deals has no technical buyer attached?
- Which role, when missing, costs us deals most often?
- Give me a three-line note to a [persona] from their champion's point of view.

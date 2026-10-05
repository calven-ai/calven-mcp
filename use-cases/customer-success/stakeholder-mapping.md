# Stakeholder mapping


Right now the stakeholder map is your memory. You get a map per account with who's there, what each person cares about, who holds the budget, which role nobody on your side talks to, and a plan to fill the gaps. Calven matches the contacts to the persona canvases and the CRM mirror.

## Prompts

### Map the stakeholders on one account

```
Using Calven MCP, map the stakeholders at the account below.

FILL IN
- Account: [account]
- Segment: [segment]

CONTEXT
I want to know who I have, what each cares about, and who is missing.

PULL FROM THE UNIVERSE
- The contacts at the account with title, buying role and lifecycle stage.
- The persona each contact maps to, with goals and KPIs, pains and objections.
- Each contact's quotes.
- The buying-group dynamics from the persona dashboard: which personas sit on won deals in the segment, and the multi-threading win rate with n.

BUILD
- A table: contact, title, buying role, persona, what they care about, what they said.
- The gaps: buying roles and personas on a typical won deal in the segment that have no contact here.
- A risk line: single-threaded or not.

OUTPUT
The map and the gaps.

GROUNDING
Use only the Universe and cite it. Mark a contact whose title fits no persona as unknown.
```

### Reach the role nobody talks to

```
Using Calven MCP, help me reach the persona below at the account below.

FILL IN
- Persona: [persona]
- Account: [account]

CONTEXT
We have no contact in that role. I want an angle and a message.

PULL FROM THE UNIVERSE
- The persona's canvas: company objectives, KPIs, pains, messaging hooks, watering holes.
- Quotes from the account that mention this role or its concerns.
- The value proposition for this persona.

WRITE
- The angle in two lines, a three-sentence intro message for the champion to forward, and the one question to ask in the first conversation.

OUTPUT
The three pieces.

GROUNDING
Use only the Universe and cite it.
```

### Find single-threaded accounts in your book

```
Using Calven MCP, show me which of my accounts are single-threaded.

FILL IN
- Accounts: [paste the account list]

CONTEXT
Check every account in the list.

PULL FROM THE UNIVERSE
- Contacts per account by buying role.
- The persona dashboard: contact coverage and the multi-threading payoff, with n.

BUILD
- A table: account, contacts, roles covered, roles missing, renewal date.
- The accounts to multi-thread first.

OUTPUT
The table.

GROUNDING
Use only the Universe and cite it.
```

## Ad hoc questions

- Who is the economic buyer at [account]?
- Which persona is [contact]?
- What is [persona] measured on?
- Which roles are usually on a won deal in [segment]?
- Which of my accounts have only one contact?
- What has [contact] said on calls?
- Where does [persona] learn and gather?
- Write an intro message to a [persona] that my champion can forward.

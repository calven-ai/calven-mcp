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

## Advanced prompts

### Model the account as an influence network

```
Model the account's people as an influence network and find the single points of failure. Use Calven MCP for the contacts, their buying roles and who spoke on which calls.

FILL IN
- Account: [account]
- What I know: [paste org chart notes, reporting lines, who attends what]

CONTEXT
I have a contact list, not a map. I want to know who actually moves decisions, who only looks important, and what happens to the renewal if one person leaves.

FROM CALVEN
- Contacts at the account with title and buying role.
- Conversations at the account with who attended, and quotes per contact.
- The persona canvases for the roles present, and the roles missing.

METHOD
- Build a graph: people as nodes, edges where two people were on the same call or one reports to the other. Weight edges by how often.
- Compute centrality (who connects the groups) and compare with formal role. If you can run code, use a network library and draw it.
- Simulate removing each person in turn: which roles lose their only path to us, and does the account still have a champion and an economic buyer connection?
- Name the bridge people we under-invest in and the roles with no node at all.

OUTPUT
The network described as a list of clusters and bridges (or a drawing if you ran code), the removal table, and three relationships to build this quarter.

GROUNDING
Edges come from recorded calls, contacts or my notes, labelled by source. Don't invent a reporting line or a relationship the record doesn't show.
```

### Benchmark coverage against renewed accounts

```
Compare this account's contact coverage with the buying groups behind renewals we won and lost, and tell me which gap matters. Use Calven MCP for the contacts on those deals and the persona dashboard.

FILL IN
- Account: [account]
- Segment: [segment]

CONTEXT
"Multi-thread more" isn't a plan. I want to know which specific roles were present on accounts that renewed and absent on ones that didn't, in our own data.

FROM CALVEN
- The persona dashboard: multi-threading win rate and win rate by persona, with n.
- Renewal deals in the segment, won and lost, paged, with their contact roles.
- The account's contacts by buying role.

METHOD
- For renewed and lost renewals, tabulate the presence of each buying role. Compute the renewal share with and without each role.
- Separate correlation from cause where you can: bigger accounts have more roles, so compare within the same size band.
- Lay the account's coverage over the table and name the missing role with the biggest gap.
- For that role, describe the person to find (persona, title, what they care about) and who at the account could introduce them.

OUTPUT
The role table with renewal share and n, the account's gap, and a two-line plan to fill it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Dashboard rates come from Insights; row tallies are labelled as counts. Don't present a correlation as proof that adding a role saves the renewal.
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
- Which buying role is most often missing on renewals we lost?
- Who at [account] attended the most calls, and what's their buying role?
- Which contacts at [account] joined after the deal closed?
- Does multi-threading change the renewal outcome in [segment], with n?
- Which persona on [account] has never heard our value proposition for their role?
- What did the economic buyer at [account] last say, and when?
- Which of my accounts has a Blocker contact but no Champion?

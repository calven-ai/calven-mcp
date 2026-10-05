# Persona coverage


A count of contacts per deal says nothing about whether the right people are in the room. You get a coverage read for the review: which roles show up on won deals, which open deals lack them, what multi-threading pays, and the deals to multi-thread with the persona to add. Calven ties each deal to the approved personas, so the gaps have names.

## Prompts

### Build the persona coverage read

```
Using Calven MCP, give me the persona coverage read for the window below.

FILL IN
- Window: [time window, e.g. last quarter]
- Amount floor: [amount]

CONTEXT
For the pipeline review: the multi-threading payoff, which roles are on our wins, and the open deals that lack them.

PULL FROM THE UNIVERSE
- The persona dashboard for the window: multi-threading win rate, single- versus multi-threaded pipe, contact coverage, buying-group presence on won and lost deals, win rate by persona, the pipeline gap with the open deals behind it. Every rate with n.

BUILD
- The payoff in two lines, with n.
- The roles that appear on wins and are absent from losses.
- Open deals above the amount floor missing those roles, with the persona to add.

OUTPUT
The read and the deal list.

GROUNDING
Rates from the dashboard with n and window; deals from the pipeline gap drill-down. Do not count contacts yourself.
```

### Brief a rep on who to add

```
Using Calven MCP, tell me who to add to the deal below and how to approach them.

FILL IN
- Deal: [deal]
- Contacts: [the contacts on the deal]

CONTEXT
The deal has the contacts above. I want the missing persona, the title to look for, and the opening.

PULL FROM THE UNIVERSE
- The deal's contacts and roles.
- Personas with buying role, role title, seniority and department.
- The persona dashboard: which roles are on won deals in this segment.
- The canvas for the missing persona: KPIs, pains, messaging hooks.

BUILD
- The role to add and why (win-rate evidence with n).
- The titles that map to it.
- The two-line opening in the persona's terms.

OUTPUT
A short brief for the rep.

GROUNDING
Use only approved personas and the dashboard. Do not invent a named contact; the rep finds the person.
```

### Find personas the pipeline never reaches

```
Using Calven MCP, find the approved personas our pipeline never reaches.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
We approved personas we believe sit on the buying group. I want to know which of them appear on deals at all, which never do, and whether the ones we miss matter to the win rate.

PULL FROM THE UNIVERSE
- Every approved persona with its buying role, role title and department.
- The persona dashboard for the window: buying-group presence on won and lost deals, win rate by persona with n, contact coverage.
- Contacts on open deals by role.

BUILD
- A table: persona, present on won deals (share), present on lost deals (share), present on open deals (count), win-rate effect with n or "below the floor".
- The personas with no presence anywhere, and whether the ICP document or the canvas says they gate the purchase.
- The one persona to start threading first, and why.

OUTPUT
The table and the recommendation, with sources.

GROUNDING
Shares and rates from the persona dashboard with n and window. A persona absent from the data is "not recorded on any deal", never "does not matter". Do not count contacts yourself.
```

## Ad hoc questions

- What is the win rate for multi-threaded versus single-threaded deals?
- Which persona is on our wins most often?
- Which open deals over [amount] have no economic buyer?
- Which buying role is missing most from lost deals?
- What titles map to our technical buyer persona?
- How many contacts does a won deal have on average, in bands?
- Which deals have a blocker and no champion?
- What does [persona] care about, for a first email?

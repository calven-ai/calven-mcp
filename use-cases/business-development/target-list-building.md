# Target list building


You're building this week's or this quarter's list and would rather start from the ICP than a data vendor's filter. You get a ranked list of accounts that fit and either haven't been worked or were lost long enough ago to retry, with contacts in the roles that win and one line on why each is worth your time. Calven adds the company's own data, so you're not buying a list and starting at the top.

## Prompts

### Write targeting rules from what wins

```
Using Calven MCP, write the targeting rules for my list.

FILL IN
- Segment: [segment]
- Window: [time window, e.g. next quarter]

CONTEXT
I am building my account list for the segment and window. I want rules I can apply myself, grounded in what actually wins.

PULL FROM THE UNIVERSE
- Our ICP: firmographic and technographic attributes, segment tiers, disqualifiers.
- From the ICP read: win rate by attribute, the attributes that predict a win, the segments that over- or under-perform.

BUILD
- Go-after rules: the attributes with the highest win rate, with the number and sample behind each.
- Skip rules: disqualifiers and the attributes with the lowest win rate.
- The two attributes to weight most.

OUTPUT
A one-page rule sheet with the evidence beside each rule.

GROUNDING
Use only the ICP and ICP dashboard in the Universe. Cite every win rate with n and the window. Do not add a rule the data does not support.
```

### Build a ranked target list

```
Using Calven MCP, build my target list for the segment below.

FILL IN
- Segment: [segment]
- Number: [how many accounts]
- Window: [time window, e.g. next quarter]

CONTEXT
I need that number of accounts to work in the window. In profile, never worked or closed-lost more than six months ago.

PULL FROM THE UNIVERSE
- CRM accounts in the segment with Tier 1 or Tier 2 fit, their fit score and triggers.
- Each account's deal history: open deals (exclude), closed-lost with date and loss reason.
- Contacts at each account in the roles that appear on our won deals.

BUILD
- A ranked table: account · fit tier and score · why (the two attributes that drove it) · trigger if any · past loss reason if any · contact to reach (or "none on record").
- Below the table: the accounts excluded and why.

OUTPUT
The ranked table, strongest first.

GROUNDING
Use only CRM records and the ICP in the Universe. Never invent a contact. Mark accounts with no contact rather than skipping them.
```

### Give each account a reason to call

```
Using Calven MCP, give me one line per account on why to call now.

FILL IN
- Persona: [persona I will contact]
- Accounts: [paste the ranked list]

CONTEXT
For each account I want the single best reason to reach out this month.

PULL FROM THE UNIVERSE
- Triggers recorded on each account.
- The top pain of the persona, from the canvas and recent calls.
- The closest won deal by industry and size and what decided it.

OUTPUT
The list with one line per account and the source behind it.

GROUNDING
Use only triggers, canvas content and deals in the Universe. Where nothing specific exists, say "no specific reason on record".
```

### Find missing roles at each account

```
Using Calven MCP, which roles am I missing at these accounts?

FILL IN
- Accounts: [paste the list]

CONTEXT
I want to multi-thread from the first touch.

PULL FROM THE UNIVERSE
- Contacts at each account with roles.
- The buying-group roles that appear on won deals and the win rate for multi-threaded versus single-threaded deals.

OUTPUT
Per account: the roles we have, the roles we lack, and the title to look for.

GROUNDING
Use only CRM contacts and the persona read in the Universe, citing the win-rate figures with n.
```

## Ad hoc questions

- Which Tier 1 accounts in [industry] have never had a deal?
- What attributes predict a win for us?
- Which segment has the highest win rate, and what is the sample?
- Show me closed-lost accounts in [region] with loss reason "No decision" older than six months.
- Which accounts have a Tier 1 fit but no contact on record?
- What disqualifies an account in our ICP?
- Which tech stack entries correlate with wins?
- How many in-profile accounts do we hold in [segment]?
- Which accounts in [segment] have a trigger recorded this quarter?
- What roles are on the buying group when we win in [segment]?
- Is [account] in our anti-profile?
- Which vertical does the ICP say to prioritise next?

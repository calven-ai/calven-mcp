# Target list building

**Team:** Business development · also revenue operations, sales leadership
**Impact:** High. The list decides the quarter. A list of in-profile accounts nobody has worked, with the right contact roles and the reason to call, beats a bigger list of lookalikes.
**Prerequisites:** CRM connected (accounts with ICP fit, contacts, deals), ICP approved. Better with win/loss surveys running (what predicts a win) and personas approved.

## What the team is trying to do

Build the week's or quarter's account list from the ICP, not from a data vendor's filter. Done means a ranked list of accounts that fit, have not been worked or were lost long enough ago to retry, with the contacts to reach in the roles that win, and one line on why each is worth the time. Without the company's own data the BDR buys a list and starts at the top.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Restate the ICP | Know the attributes, tiers, disqualifiers | The ICP document: firmographics, technographics, segment tiers, anti-profile | ICP |
| 2 | Learn what predicts a win | Weight attributes by outcome, not opinion | Win rate by attribute, predictive attributes, segments that over-perform | ICP dashboard (win predictors) |
| 3 | Pull the candidates | Accounts in profile, not worked or lost long ago | CRM accounts by tier, industry, size, region, with deal history | CRM accounts, CRM deals |
| 4 | Rank | Order by fit and reason | Fit score plus the attributes behind it, triggers, past loss reasons | CRM accounts |
| 5 | Map contacts | The roles that sit on won deals | Contacts by role at each account; the buying-group roles on won deals | CRM contacts, persona dashboard |
| 6 | Add the reason to call | One line per account | The trigger, the pain the persona names, the comparable won deal | Persona canvas, deal drivers |
| 7 | Fill the gaps | Find names where the CRM has none | Calven does not help here | |
| 8 | Load into the sequencer | Assign and run | Calven does not help here | |

## Recommended prompts

### Steps 1 and 2: the targeting rules

```
Using Calven MCP, write the targeting rules for my list.

CONTEXT
I am building my [segment] account list for [window]. I want rules I can apply myself, grounded in what actually wins.

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

[name the segment and the window]
```

### Steps 3 to 6: the ranked list

```
Using Calven MCP, build my target list for [segment].

CONTEXT
I need [number] accounts to work in [window]. In profile, never worked or closed-lost more than six months ago.

PULL FROM THE UNIVERSE
- CRM accounts in [segment] with Tier 1 or Tier 2 fit, their fit score and triggers.
- Each account's deal history: open deals (exclude), closed-lost with date and loss reason.
- Contacts at each account in the roles that appear on our won deals.

BUILD
- A ranked table: account · fit tier and score · why (the two attributes that drove it) · trigger if any · past loss reason if any · contact to reach (or "none on record").
- Below the table: the accounts excluded and why.

OUTPUT
The ranked table, strongest first.

GROUNDING
Use only CRM records and the ICP in the Universe. Never invent a contact. Mark accounts with no contact rather than skipping them.

[name the segment, the number and the window]
```

### Step 6: the reason to call

```
Using Calven MCP, give me one line per account on why to call now.

CONTEXT
The ranked list is at the bottom. For each account I want the single best reason to reach out this month.

PULL FROM THE UNIVERSE
- Triggers recorded on each account.
- The top pain of the persona I will contact, from the canvas and recent calls.
- The closest won deal by industry and size and what decided it.

OUTPUT
The list with one line per account and the source behind it.

GROUNDING
Use only triggers, canvas content and deals in the Universe. Where nothing specific exists, say "no specific reason on record".

[paste the list and name the persona]
```

### Step 5: buying-group coverage

```
Using Calven MCP, which roles am I missing at these accounts?

CONTEXT
The list is at the bottom. I want to multi-thread from the first touch.

PULL FROM THE UNIVERSE
- Contacts at each account with roles.
- The buying-group roles that appear on won deals and the win rate for multi-threaded versus single-threaded deals.

OUTPUT
Per account: the roles we have, the roles we lack, and the title to look for.

GROUNDING
Use only CRM contacts and the persona read in the Universe, citing the win-rate figures with n.

[paste the list]
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

## Good practice

- Ask for the rules before the list. A list you can explain survives the manager's review.
- Exclude open deals and recent losses explicitly in the prompt. The AI tool will include them otherwise.
- Ask for excluded accounts and the reason. That is how you catch an ICP rule that is too tight.
- Keep the list to what you can work. Fifty accounts with a reason beat three hundred without.
- Rebuild the rule sheet each quarter. The win predictors move with the deals.

## Not covered today

- Finding net-new accounts outside the CRM. Calven ranks what the CRM holds.
- Contact discovery and enrichment for accounts with no names.
- Assigning accounts, territories or sequences.

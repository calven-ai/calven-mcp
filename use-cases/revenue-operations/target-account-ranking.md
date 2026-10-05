# Target account ranking


Sales and the BDRs need to know which accounts to work, and a list sorted by employee count won't tell them. You hand over a ranked list by tier, each account with the attributes that drove its rank and who to contact, split into never worked, open and closed-lost. Calven adds the win rate that justifies working strong fits first.

## Prompts

### Rank accounts by ICP fit, with reasons

```
Using Calven MCP, rank our accounts in the segment below by ICP fit and tell me why fit matters.

FILL IN
- Segment: [segment]
- Quarter: [quarter]

CONTEXT
I am building the account list for the quarter. I want every account in the segment in the CRM ranked by fit tier, with the reason, and the win-rate evidence that fit predicts outcomes.

PULL FROM THE UNIVERSE
- Our ICP: the attributes that define fit, the segment tiers and the disqualifiers.
- CRM accounts in the segment with their ICP fit score and tier, industry, size, region, funding stage, tech stack and triggers.
- The ICP dashboard: win rate in profile versus out of profile, ICP-fit pipeline share, win predictors by attribute, with n and window.

BUILD
- The win-rate line first: in-profile versus out-of-profile, n and window.
- The accounts by tier, each with a one-line reason naming the attributes that drove the tier and any trigger present.
- Accounts with a disqualifier, listed separately.

OUTPUT
The justification line, then the ranked table (account, tier, score, reason, triggers), then the disqualified list.

GROUNDING
Fit scores and tiers come from the account rows; rates from the ICP dashboard with n and window. Do not re-score accounts yourself or add attributes not on the row.
```

### Split strong fits by status and contact

```
Using Calven MCP, split the strong-fit accounts in the segment below by status and name who to contact.

FILL IN
- Segment: [segment]
- Closed-lost age: [months since the loss, e.g. 6]

CONTEXT
I will route never-worked and old closed-lost accounts to the BDRs and leave open deals with their owners.

PULL FROM THE UNIVERSE
- Tier 1 and Tier 2 accounts in the segment.
- Deals per account: status, stage, close date, loss reason, lost to.
- Contacts per account with role (champion, economic buyer, decision maker, technical buyer) and lifecycle stage.
- The persona dashboard: win rate by persona, so the contact to lead with is the one that converts.

BUILD
- Never worked: no deal recorded. Contact to lead with, by role.
- Closed-lost longer ago than the closed-lost age: loss reason, lost to, whether the champion is still listed.
- Open: owner and stage, for exclusion.

OUTPUT
Three tables, each with account, tier, reason, contact and role.

GROUNDING
Use only mirrored CRM rows. If deal or contact data is restricted by the workspace settings, say so and stop at the account level.
```

### Score an account list outside the CRM

```
Using Calven MCP, score this account list against our ICP.

FILL IN
- Accounts: [paste the list: name, domain, industry, size, region, anything else we know]

CONTEXT
The accounts are not in the CRM yet. I want each rated against the ICP with the reason.

PULL FROM THE UNIVERSE
- Our ICP: firmographic, technographic and behavioural attributes, segment tiers, priority verticals, disqualifiers, the fit scorecard.

SCORE
- Rate each account on each ICP attribute the list gives you; mark attributes the list does not give as unknown.
- Assign a provisional tier with the rationale.
- Flag any disqualifier.

OUTPUT
A table: account, provisional tier, attributes matched, attributes unknown, reason.

GROUNDING
Score only against the ICP in the Universe. Where the list lacks the data to judge an attribute, say unknown rather than guessing.
```

### Check a target list someone else built

```
Using Calven MCP, check this target account list against the ICP and the CRM.

FILL IN
- Accounts: [paste the list]

CONTEXT
A rep or an agency produced the list. I want each account checked against the ICP tier in the CRM and the disqualifiers.

PULL FROM THE UNIVERSE
- CRM accounts matching the names, with fit tier and attributes.
- The ICP's disqualifiers and blacklisted verticals and regions.

CHECK
- Each account: CRM tier (or not in CRM), disqualified (why), already open with an owner, or closed-lost recently.

OUTPUT
The annotated list and the accounts to remove.

GROUNDING
Use only the CRM mirror and the ICP. An account not in the CRM is marked as such, not scored.
```

## Ad hoc questions

- Which Tier 1 accounts have no deal recorded?
- What is our win rate in profile versus out of profile this year?
- Why is [account] Tier 2?
- Which attributes predict a win most?
- Which [segment] accounts show a recent funding or exec hire trigger?
- Who is the champion at [account], and are they still listed?
- Which accounts are in a blacklisted vertical or region?
- How much of the open pipeline is Tier 1?
- Rank these ten accounts by fit: [paste].
- Which Tier 1 accounts closed-lost more than six months ago?
- What does the ICP say about [industry]?
- Which accounts have a technical buyer but no economic buyer in the CRM?

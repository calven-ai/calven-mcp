# Target account ranking

**Team:** Revenue operations · also sales leadership, BDRs, demand generation
**Impact:** High. Which accounts sales works is the biggest lever RevOps has. Every CRM account scored against the ICP the agents keep current, with the reason for every rank, turns prioritisation from a spreadsheet exercise into a list reps trust.
**Prerequisites:** CRM connected (accounts with ICP fit score and tier, contacts, deals), ICP approved. Better with win/loss surveys running (loss reasons on past deals) and personas approved.

## What the team is trying to do

Hand sales and the BDRs a ranked list of accounts to work, grouped into tiers, each with the attributes that drove the rank and who to contact. Done means a list by tier with reasons, split into never worked, open and closed-lost, with the win rate that justifies working strong fits first. Without the company's own knowledge the list is sorted by employee count.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Confirm the ICP | Check the criteria are current | The approved ICP: firmographics, technographics, behavioural attributes, segment tiers, disqualifiers, the fit scorecard | ICP document |
| 2 | Score the accounts | Apply the criteria to every account | Every mirrored account carries a fit score and tier, with industry, size, region, funding stage, tech stack and triggers | CRM accounts |
| 3 | Justify the scoring | Show that fit predicts outcomes | Win rate for in-profile versus out-of-profile deals, win predictors by attribute, deal size lift | ICP dashboard |
| 4 | Segment the list | Never worked, open, closed-lost, customer | Deals per account by status and loss reason; contacts by lifecycle stage | CRM deals, CRM contacts |
| 5 | Name the contact | Who to reach at each account | Contacts with role and title; the persona that converts | CRM contacts, persona dashboard |
| 6 | Add the reason | One line per account a rep can read | Attributes versus ICP criteria, triggers present, disqualifiers absent | CRM accounts, ICP |
| 7 | Route and assign | Load into the CRM, assign owners, build sequences | Calven does not help here | |
| 8 | Score a new list | Accounts not yet in the CRM | Score a pasted list against the ICP criteria; attributes missing in the paste are reported as unknown | ICP document |

## Recommended prompts

### Step 1 to 3: the ranked list with the justification

```
Using Calven MCP, rank our [segment] accounts by ICP fit and tell me why fit matters.

CONTEXT
I am building the account list for [quarter]. I want every [segment] account in the CRM ranked by fit tier, with the reason, and the win-rate evidence that fit predicts outcomes.

PULL FROM THE UNIVERSE
- Our ICP: the attributes that define fit, the segment tiers and the disqualifiers.
- CRM accounts in [segment] with their ICP fit score and tier, industry, size, region, funding stage, tech stack and triggers.
- The ICP dashboard: win rate in profile versus out of profile, ICP-fit pipeline share, win predictors by attribute, with n and window.

BUILD
- The win-rate line first: in-profile versus out-of-profile, n and window.
- The accounts by tier, each with a one-line reason naming the attributes that drove the tier and any trigger present.
- Accounts with a disqualifier, listed separately.

OUTPUT
The justification line, then the ranked table (account, tier, score, reason, triggers), then the disqualified list.

GROUNDING
Fit scores and tiers come from the account rows; rates from the ICP dashboard with n and window. Do not re-score accounts yourself or add attributes not on the row.

[name the segment and the quarter]
```

### Step 4 to 6: never worked, open, lost, and who to contact

```
Using Calven MCP, split the strong-fit [segment] accounts by status and name who to contact.

CONTEXT
I will route never-worked and old closed-lost accounts to the BDRs and leave open deals with their owners.

PULL FROM THE UNIVERSE
- Tier 1 and Tier 2 accounts in [segment].
- Deals per account: status, stage, close date, loss reason, lost to.
- Contacts per account with role (champion, economic buyer, decision maker, technical buyer) and lifecycle stage.
- The persona dashboard: win rate by persona, so the contact to lead with is the one that converts.

BUILD
- Never worked: no deal recorded. Contact to lead with, by role.
- Closed-lost more than [months] ago: loss reason, lost to, whether the champion is still listed.
- Open: owner and stage, for exclusion.

OUTPUT
Three tables, each with account, tier, reason, contact and role.

GROUNDING
Use only mirrored CRM rows. If deal or contact data is restricted by the workspace settings, say so and stop at the account level.

[name the segment and the closed-lost age]
```

### Step 8: score a list that is not in the CRM

```
Using Calven MCP, score this account list against our ICP.

CONTEXT
Below is a list of accounts (name, domain, industry, size, region, anything else we know). They are not in the CRM yet. I want each rated against the ICP with the reason.

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

[paste the list]
```

### Review mode: check a list someone else built

```
Using Calven MCP, check this target account list against the ICP and the CRM.

CONTEXT
Below is a list a rep or an agency produced. I want each account checked against the ICP tier in the CRM and the disqualifiers.

PULL FROM THE UNIVERSE
- CRM accounts matching the names, with fit tier and attributes.
- The ICP's disqualifiers and blacklisted verticals and regions.

CHECK
- Each account: CRM tier (or not in CRM), disqualified (why), already open with an owner, or closed-lost recently.

OUTPUT
The annotated list and the accounts to remove.

GROUNDING
Use only the CRM mirror and the ICP. An account not in the CRM is marked as such, not scored.

[paste the list]
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

## Good practice

- Lead with the win-rate line. A ranked list without the evidence that fit predicts outcomes is an opinion.
- Ask for the reason per account. Reps work a list they understand and ignore one they do not.
- Separate never worked from closed-lost. They need different plays.
- Keep the disqualified list visible. It stops the same accounts coming back every quarter.
- Score outside lists against the ICP before importing them. It is cheaper than cleaning the CRM afterwards.
- Rerun after each ICP refresh; fit scores change when the criteria do.

## Not covered today

- Writing the tier, the owner or the routing into the CRM. Calven reads the CRM; it does not update it.
- Intent data, web visits and third-party signals. Account triggers are the ones mirrored from the CRM.
- Enriching accounts that lack attributes. Unknown stays unknown until the CRM has the data.

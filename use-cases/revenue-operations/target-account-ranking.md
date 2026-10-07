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

## Advanced prompts

### Backtest the fit score on closed deals

```
Backtest our ICP fit score against last year's closed deals and tell me whether it actually separates winners from losers. Use Calven MCP for the closed deals with their fit score and tier, and the ICP's scorecard weights.

FILL IN
- Window: [window, e.g. the last four quarters]
- Current scoring sheet: [paste the lead or account scoring sheet reps use, or write "none"]

CONTEXT
Reps get a ranked list every quarter and the rank is only worth something if high scores win more often. Nobody has checked that against closed deals. Before I hand out next quarter's list I want proof, or a better score.

FROM CALVEN
- Every closed deal in the window (won and lost), paged through, with the account's ICP fit score, fit tier, industry, size, region, funding stage and triggers.
- The ICP Fit Scorecard section of the ICP document, with its weights.
- The ICP dashboard's predictive attributes and win rate by tier, with n.

BACKTEST
- Sort closed deals into fit score deciles (quintiles if n is small) and show win rate per bucket. A good score climbs steadily.
- Compute lift for the top bucket and, if you can run code, the AUC of the fit score as a win predictor, with a bootstrap confidence interval.
- Score the same deals with my scoring sheet and compare the two curves.
- Find the two attributes the scorecard over-weights and the one it misses, using the predictive attributes and the deal rows.

OUTPUT
A one-page verdict: the lift chart (or table), AUC for each score, the attributes to reweight, and a proposed weight change with the backtest re-run on it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't backfill a fit score for deals that have none; report how many were missing. Warn when a bucket has fewer than 10 deals.
```

### Rank accounts by expected pipeline value

```
Turn the account list into an expected-value ranking: fit times the odds of winning times what a win is worth. Use Calven MCP for each account's fit, the win rates by segment and tier, and the average deal size behind them.

FILL IN
- Segment or territory: [segment]
- Engagement odds: [your meeting rate by account tier, or write "none"]
- Rep capacity: [accounts each rep can actively work in a quarter]

CONTEXT
A fit tier says who looks like our buyer. It doesn't say where the money is. I want reps working the accounts with the highest expected pipeline per hour, and I want the math visible so they trust it.

FROM CALVEN
- CRM accounts in the segment with fit score, tier, size, industry, triggers and whether an open or lost deal exists.
- Win rate and average deal size by tier and by segment from the ICP dashboard, with n.
- The ICP's buying triggers, so recent triggers can carry weight.

MODEL
- For each account: expected value = P(engage) × P(win | tier, segment) × average deal size. Use my engagement odds or a labelled assumption.
- Add a trigger multiplier and a penalty for an account lost in the last six months. State both.
- If you can run code, build it as a spreadsheet with the formulas live, so I can change any input and the ranking reorders.
- Cut the ranked list at rep capacity and show how much expected value sits above and below the line.

OUTPUT
The ranked list with expected value and the three inputs behind each row, the cut line per rep, and the spreadsheet.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a deal size for a tier with no wins; use the segment average and flag it.
```

### Red-team the top 20 as a veteran AE

```
Red-team my top 20 target accounts the way a veteran AE would before agreeing to work them. Use Calven MCP for each account's record, the ICP's disqualifiers and what past deals at similar accounts looked like.

FILL IN
- Top accounts: [paste the top 20 from the ranking]
- Segment: [segment]

CONTEXT
Reps quietly ignore lists they don't believe. I want the objections a sharp AE would raise, account by account, before the list goes out, so I fix the bad picks and defend the good ones with evidence.

FROM CALVEN
- Each account's row: fit score and reason, tier, triggers, tech stack, contacts and their roles.
- Any past deals at each account, with stage reached and loss reason.
- The ICP's Disqualifiers / Anti-Profile and Blacklisted Verticals & Regions sections.

RED-TEAM
- Play a top-performing AE with ten years in this segment. For each account, raise the strongest objection: no reachable buyer, a recent loss, an anti-profile trait, a stack we don't integrate with, no trigger.
- Then rebut each objection with evidence from the record, or concede.
- Classify every account: keep, keep with a caveat, or swap out.

OUTPUT
A table with account, objection, rebuttal, verdict and the evidence cited. Then the five accounts to swap and the reason in one line each.

GROUNDING
Every objection cites a field, a deal or an ICP section, or is labelled as the AE's judgement. Don't invent contacts, triggers or deal history the records don't hold.
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
- Which Tier 1 accounts have contacts but no one above manager level?
- Which accounts went up a tier since we last lost a deal there?
- Which Tier 3 accounts have won deals, and what do they have in common?
- How many Tier 1 accounts carry a trigger and have no open deal?
- Which attribute in the ICP Fit Scorecard has the weakest win-rate evidence?
- Which industries hold the most Tier 1 accounts we've never worked?

# Deal registration review


A partner registered a deal and it's waiting, because you rarely have the time or the CRM access to check it. You get a decision with a reason, a conflict check against the CRM, and a short note telling the partner how you usually win this kind of deal. Calven brings the CRM and the win history into one review.

## Prompts

### Review one deal registration

```
Using Calven MCP, review this deal registration from the partner below.

FILL IN
- Partner: [partner]
- Registration: [paste the registration: account, contact, competitor, stage]

CONTEXT
The registration names the account, contact, competitor and stage. I need to approve or decline within 48 hours and tell the partner how we usually win this kind of deal.

PULL FROM THE UNIVERSE
- The account record: ICP fit tier and score, industry, size, region. If not in the CRM, score it against the ICP from what the partner gave us.
- Open and recent deals on the account: owner, lead source, stage, outcome.
- Contacts at the account and their roles.
- Our win rate against the competitor and the top loss reasons, and the partner-safe talk track.

BUILD
- Fit: tier and why.
- Conflict: any existing deal or owner.
- What we know: contacts and history.
- The competitive picture and the two things the partner should do first.
- Recommendation: approve, decline or redirect, with the reason.

OUTPUT
An internal decision note, then a four-line note to the partner, with sources.

GROUNDING
Use only CRM, ICP and competitive data in the Universe and cite it. If the account is not in the CRM, say so and score from the registration. Do not share deal amounts or internal loss notes in the partner note.
```

### Score an account outside the CRM

```
Using Calven MCP, score this account against our ICP.

FILL IN
- Account facts: [paste the account facts]

CONTEXT
A partner registered an account we have never touched. The account facts are what they told us.

PULL FROM THE UNIVERSE
- The ICP: firmographics, technographics, buying triggers, segment tiers, disqualifiers, the fit scorecard.

SCORE
- Each ICP attribute: match, no match, unknown.
- A tier and a one-line reason.

OUTPUT
The scorecard with the ICP section cited.

GROUNDING
Score only on attributes the ICP lists and the facts pasted. Mark unknowns rather than assuming.
```

### Triage this week's registrations

```
Using Calven MCP, triage this week's deal registrations.

FILL IN
- Registrations: [paste the list: partner, account, competitor]

CONTEXT
I want a first pass before I review each.

PULL FROM THE UNIVERSE
- For each account: ICP tier, open deals and owner, contacts known.
- For each competitor named: our win rate with n.

BUILD
- A table: account, partner, tier, conflict (yes / no / unknown), competitor win rate, suggested decision, flag for manual review.

OUTPUT
The table with sources.

GROUNDING
Use only the Universe. Accounts not in the CRM get "unknown" for conflict and a note to score manually.
```

## Advanced prompts

### Settle a channel conflict with a payoff matrix

```
Settle a clash between a partner registration and a direct rep on the same account with a payoff matrix, not seniority. Use Calven MCP for the account, the open deal and how each route tends to end.

FILL IN
- Partner: [partner]
- Account: [account]
- Registration: [paste the partner's registration]
- Partner economics: [margin or referral fee, and what the partner is worth to us over the next year]

CONTEXT
Channel conflicts usually go to whoever shouts loudest, and the partner remembers the result for a year. I want the options laid out with the money and the relationship cost on the table.

FROM CALVEN
- The account's ICP tier, its open and recent deals, their owners, stages and lead sources.
- The contacts we know there and their roles.
- Closed deals in the segment paged by lead source, to compare partner-sourced and direct outcomes, next to the segment win rate from the ICP dashboard with n.

METHOD
- Lay out the options: give it to the partner, keep it direct, co-sell with a split, or let the partner lead with our rep in support.
- For each, estimate win probability, deal value net of fees, time to close and the effect on the partner's effort next quarter.
- Build the payoff matrix from both sides (us and the partner) and find the option neither side would walk away from.
- Run the sensitivity: how far would the partner's win probability have to differ from direct for the call to change?

OUTPUT
The matrix, the recommended option, the break-even difference, and two notes of four lines each: one to the direct rep, one to the partner.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Lead-source comparisons from paged deals are row counts, so say so and give n. Keep deal amounts out of the partner note.
```

### Build a registration scoring sheet

```
Build a reusable spreadsheet that scores every deal registration the same way, and calibrate it on last quarter's registrations. Use Calven MCP for the ICP scorecard and the conflict and competitor checks.

FILL IN
- Last quarter's registrations: [attach a CSV: partner, account, date, competitor named, decision, outcome if known]
- Approval rule: [your current rule, or write "propose one"]

CONTEXT
Registrations get decided by whoever picks them up, so two partners get different answers for the same kind of deal. A sheet with visible formulas makes the call consistent and lets me defend a decline.

FROM CALVEN
- The ICP Fit Scorecard and the disqualifiers.
- For each account in my CSV: its CRM ICP tier and score, and any open direct deal with its owner.
- Our win rate against each competitor named, from the competitive intelligence dashboard, with n.

BUILD
- Design the columns: fit (from the scorecard), conflict (open direct deal, recent loss), competitor strength (head-to-head win rate), partner track record (from my CSV). Write out the weights and the formula.
- Score every registration in my CSV and compare with the decision we made. List the disagreements and say which side looks right.
- Tune the threshold so the sheet approves the registrations that went on to win and flags the ones that stalled, without fitting it to a handful of deals.
- If you can run code, produce the spreadsheet with live formulas, not pasted values.

OUTPUT
The spreadsheet, the weights, the calibrated threshold, the disagreement list, and a one-paragraph rule I can send to partners.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Say plainly when the CSV has too few outcomes to calibrate on, and flag any tuning done on fewer than twenty registrations.
```

## Ad hoc questions

- Is [account] in our ICP, and what tier?
- Does direct sales have an open deal with [account]?
- Who do we know at [account] and in what roles?
- What is our win rate against [competitor] this year?
- Has [account] ever been a closed-lost deal, and why?
- Which lead source does the open deal at [account] carry?
- What are the ICP disqualifiers I should check on this registration?
- What should a partner ask first when [competitor] is in play?
- Did [account] appear on any customer call?
- Which registered accounts this week are Tier 1?
- What's the most common loss reason for [segment] deals of this registration's size?
- Has [contact] appeared on any open or closed deal?
- Which buying triggers does [account] show in the CRM?
- Does [account] list [competitor] in its tech stack?
- What's our sales cycle for deals like this, so I can set the registration's expiry?
- Which accounts in the same industry as [account] did we lose to [competitor] last year?

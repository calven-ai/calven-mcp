# Deal registration review

**Team:** Partnerships · also revenue operations, sales
**Impact:** Medium. Every registered deal needs a decision within a day or two: is the account in profile, is there a conflict with direct sales, who is the competitor, who do we already know there. Reviewing with the CRM and the ICP in hand makes the decision fast and consistent; without them it is a guess and an email thread.
**Prerequisites:** CRM connected with the pipeline category enabled for MCP, strategy documents approved (ICP). Better with competitors tracked (the battlecard for the competitor in play) and win/loss surveys running.

## What the team is trying to do

Approve, decline or redirect a partner's registered deal, and give the partner what they need to win it. Done means a decision with a reason, a conflict check against the CRM, and a short note to the partner on how we usually win this kind of deal. The partner manager often lacks CRM access or time, so registrations wait.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Receive the registration | Partner submits account, contact, competitor, stage | Calven does not help here (PRM or form) | |
| 2 | Check fit | Is the account in our ICP | The account's ICP fit tier and score if in the CRM; the ICP scorecard applied to the registration if not | CRM accounts, ICP |
| 3 | Check conflict | Is direct sales or another partner already on it | Open and recent deals on the account, with owner and lead source | CRM deals |
| 4 | Check what we know | Contacts and history at the account | CRM contacts and their roles; quotes from the account if any | CRM contacts, quotes |
| 5 | Assess the competitor | How we do against the competitor named | Win rate against them, loss reasons, the partner-safe talk track | Competitive intelligence dashboard, battlecard |
| 6 | Decide and respond | Approve, decline, redirect, with a reason | A decision note and a partner-facing note | All of the above |
| 7 | Record the decision | Update the PRM and CRM | Calven does not help here | |

## Recommended prompts

### Step 2 to 6: review one registration

```
Using Calven MCP, review this deal registration from [partner].

CONTEXT
The partner registered [account], contact [contact], competitor [competitor], stage [stage]. I need to approve or decline within 48 hours and tell the partner how we usually win this kind of deal.

PULL FROM THE UNIVERSE
- The [account] record: ICP fit tier and score, industry, size, region. If not in the CRM, score it against the ICP from what the partner gave us.
- Open and recent deals on [account]: owner, lead source, stage, outcome.
- Contacts at [account] and their roles.
- Our win rate against [competitor] and the top loss reasons, and the partner-safe talk track.

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

[paste the registration]
```

### Step 2: score an account not in the CRM

```
Using Calven MCP, score this account against our ICP.

CONTEXT
A partner registered an account we have never touched. Below is what they told us.

PULL FROM THE UNIVERSE
- The ICP: firmographics, technographics, buying triggers, segment tiers, disqualifiers, the fit scorecard.

SCORE
- Each ICP attribute: match, no match, unknown.
- A tier and a one-line reason.

OUTPUT
The scorecard with the ICP section cited.

GROUNDING
Score only on attributes the ICP lists and the facts pasted. Mark unknowns rather than assuming.

[paste the account facts]
```

### Step 6: a weekly batch

```
Using Calven MCP, triage this week's deal registrations.

CONTEXT
Below are the registrations: partner, account, competitor. I want a first pass before I review each.

PULL FROM THE UNIVERSE
- For each account: ICP tier, open deals and owner, contacts known.
- For each competitor named: our win rate with n.

BUILD
- A table: account, partner, tier, conflict (yes / no / unknown), competitor win rate, suggested decision, flag for manual review.

OUTPUT
The table with sources.

GROUNDING
Use only the Universe. Accounts not in the CRM get "unknown" for conflict and a note to score manually.

[paste the list]
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

## Good practice

- Check conflict in the CRM before fit. A partner who registers a direct deal is the conversation to have first.
- Give the partner the competitive first steps with the approval. The approval is also the enablement moment.
- Score accounts not in the CRM against the ICP in writing. "Looks fine" is how out-of-profile partner deals get in.
- Keep amounts and loss notes out of the partner note.

## Not covered today

- The PRM, the registration form, protection periods, SLAs.
- Updating the CRM with the partner as lead source.
- Partner-sourced deals that are not in the CRM mirror. Calven sees what the CRM holds.

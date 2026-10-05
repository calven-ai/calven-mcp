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

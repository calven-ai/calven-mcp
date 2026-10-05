# Account plans


You've got a territory and one quarter, and you need to know which accounts are worth it and how to work them. You walk away with a one-page plan your manager can challenge line by line: ICP fit, the buying group and who's missing, what we won and lost there and why, the competitor likely installed, the whitespace, the angle and your next 90 days. Calven adds the company's own history, so the plan isn't firmographics from a data vendor plus a hunch about who to call.

## Prompts

### Build a one-page account plan

```
Using Calven MCP, build an account plan for the account below.

FILL IN
- Account: [account]
- Segment: [segment]
- Quarter: [quarter]

CONTEXT
The account is in my territory for the quarter. I want to know whether it is worth the quarter and how to work it.

PULL FROM THE UNIVERSE
- The account record: ICP fit score and tier, industry, size, region, tech stack, triggers, best-fit product.
- The ICP attributes this account matches and misses, and any disqualifier.
- Every deal at this account: outcome, amount, stage, loss reason, competitor, and the survey summary where one exists.
- The contacts we hold, with buying role, and the personas that sat on won deals in the segment that this account lacks.
- The battlecard for the competitor most likely installed, and our win rate against them in the segment with n.
- The value proposition for the lead persona and one proof point from a similar account.

BUILD
- Fit: tier, the attributes behind it, the one that worries you.
- History: what happened here before and why, in three lines.
- Buying group: who we know, who is missing, what each cares about.
- Why now: the triggers on record.
- The competitor and the honest read on our odds.
- The angle: the message and the proof.
- The next 90 days: five milestones with owners.

OUTPUT
A one-page plan with a source beside every fact, plus the three questions I cannot answer from the record.

GROUNDING
Use only the CRM mirror, ICP, battlecards, win/loss and messaging in the Universe, cited. Do not invent contacts, triggers or history. If the account has no deals or contacts on record, say so.
```

### Find the roles you're missing

```
Using Calven MCP, who are we missing at this account?

FILL IN
- Account: [account]
- Segment: [segment]

CONTEXT
I want to multi-thread before the deal starts. Tell me which roles we have and which we need.

PULL FROM THE UNIVERSE
- Contacts at the account with buying role and lifecycle stage.
- The buying-group pattern on won deals in the segment: which personas were on them and the win rate by persona, with n.
- The persona canvases for the missing roles.

BUILD
- The roles we have, the roles won deals usually have that we lack.
- For each missing role: the persona, what they care about, the hook from their canvas.

OUTPUT
A table of present and missing roles with the hook for each gap.

GROUNDING
Persona win rates from the persona dashboard only, with n. Do not invent contacts.
```

### Challenge your plan as your manager

```
Using Calven MCP, challenge my account plan for the account below.

FILL IN
- Account: [account]
- Competitor: [competitor]
- Segment: [segment]
- Plan: [paste your plan]

CONTEXT
Play my sales manager. Find the assumption in the plan that the record does not support.

PULL FROM THE UNIVERSE
- The account record, its deals and contacts.
- The ICP and the competitor's battlecard.
- Win/loss evidence for the segment.

CHECK
- Each claim in the plan against the record: supported, unsupported, contradicted.
- The risk from similar deals my plan ignores.
- The milestone with no owner or no buyer action behind it.

OUTPUT
My plan annotated, then the three changes.

GROUNDING
Judge only against the Universe and cite it. Say plainly when the plan is sound.
```

### Rank which accounts deserve a plan

```
Using Calven MCP, which accounts in my territory deserve a plan this quarter?

FILL IN
- Segment: [segment or region]
- Accounts: [paste the account list]

CONTEXT
My territory is the segment above. I can work six accounts from the list properly.

PULL FROM THE UNIVERSE
- ICP fit tier and score for each account on the list, and the triggers on record.
- Past deals at each: open, won, lost, with loss reason and whether the champion is still a contact.
- Win rate by fit tier in the segment, with n.

BUILD
- Rank the list by fit, then by trigger, then by history.
- For each of the top six: one line on why.
- The accounts to drop and why.

OUTPUT
A ranked table with the reason per row.

GROUNDING
Fit and win rates from the Universe only, cited with n. Accounts not in the CRM mirror are marked "not on record", not scored.
```

## Ad hoc questions

- Is [account] in our ICP? Which tier, and why?
- What deals have we had at [account] and what happened?
- Who do we know at [account] and what is their role?
- Which personas sit on the deals we win in [segment]?
- What triggers are on record for [account]?
- Which competitor is likely installed at [account], and how do we fare against them?
- What is our win rate for Tier 1 accounts versus Tier 2 in [segment]?
- Which of my accounts closed lost on a reason that no longer applies?
- What is the value proposition for a [persona] in [vertical]?
- Which accounts in my territory have a trigger and no open deal?
- Is there a surveyed deal at [account] and what did the buyer say?
- What does the ICP say disqualifies an account?

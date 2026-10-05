# Deal reviews


Pipeline review's tomorrow and your manager wants evidence from the buyer, not hope. You walk in with a half-page deal card per deal: red, yellow or green on pain, metrics, economic buyer, decision criteria, decision process, champion and competition, a next buyer action, and the risk they'll ask about before they ask. Calven adds the company's own evidence, so the review stops being opinion versus opinion.

## Prompts

### Build the deal card for pipeline review

```
Using Calven MCP, build my deal card for the deal below for the pipeline review.

FILL IN
- Deal: [deal]
- Segment: [segment]
- Competitor: [competitor]
- Notes: [paste what you know that is not in the CRM: what the buyer did this week, the next mutual step, what the champion said]

CONTEXT
The notes hold what I know that is not in the CRM. I want a red, yellow or green per qualification element and the risk my manager will raise.

PULL FROM THE UNIVERSE
- The deal record: stage, amount, close date, competitors, stage history.
- The contacts on the account by buying role: do we have an economic buyer, a champion, a technical buyer.
- What decided deals in the segment against the competitor that reached this stage: the drivers and loss reasons, with n.

BUILD
- The deal in two lines.
- A row per element (pain, metrics, economic buyer, decision criteria, decision process, champion, competition): the evidence, the colour.
- The risk from similar deals this card does not address, and the question that tests it.
- The next buyer action that would turn the weakest element green.

OUTPUT
A half-page card with sources.

GROUNDING
Record and dashboard data only, cited with n. Do not invent buyer actions I did not report. Where the CRM lacks the contact or field, mark the element "no evidence", not green.
```

### Find the open deals that look weakest

```
Using Calven MCP, which of my open deals look weakest against our record?

FILL IN
- Deals: [paste your open deal list, or leave blank to use the CRM mirror]
- Owner: [owner name, used when no list is pasted]
- Segment: [segment]

CONTEXT
Pipeline review is tomorrow. Use the pasted deal list, or the CRM mirror for deals owned by the owner.

PULL FROM THE UNIVERSE
- Each open deal: stage, amount, close date, contact roles, competitor.
- The win rate by furthest stage reached, by competitor and by ICP tier in the segment, with n.
- Loss reasons on deals that stalled at each stage.

BUILD
- Rank the deals by risk: missing economic buyer, competitor we lose to, out-of-profile account, stalled stage.
- One line per deal on the risk and the buyer action that would reduce it.

OUTPUT
A ranked table.

GROUNDING
Only CRM mirror and dashboards, cited with n. No invented activity.
```

### Challenge your commit as your manager

```
Using Calven MCP, challenge my commit on the deal below.

FILL IN
- Deal: [deal]
- Commit date: [date]
- Reasons: [paste your reasons]

CONTEXT
I have the deal in commit for the date above, for the reasons given. Play my manager.

PULL FROM THE UNIVERSE
- The deal record and contacts.
- What decided similar deals at this stage, with n.

CHECK
- Each reason against the record.
- The usual way a deal like this slips, and whether I have covered it.

OUTPUT
The verdict: commit, best case or pipeline, with the evidence.

GROUNDING
Only from the Universe. Say so if the commit holds.
```

## Ad hoc questions

- Where is [deal] and how long has it been in stage?
- Do we have an economic buyer on [deal]?
- What is our win rate on deals that reached [stage] in [segment]?
- Why do deals like [deal] slip past their close date?
- Which of my open deals is out of ICP profile?
- What loss reason is most common for deals against [competitor] at this stage?
- Which of my deals has no competitor recorded?
- What would prove the decision process on [deal]?

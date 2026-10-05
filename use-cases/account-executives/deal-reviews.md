# Deal reviews

**Team:** Account executives · also sales leadership, RevOps
**Impact:** Medium. The weekly review runs on the rep's story about the deal, and the story is rarely checked against what sinks deals like it.
**Prerequisites:** CRM connected (pipeline category on for MCP), win/loss surveys running. Better with personas approved, competitors tracked.

## What the team is trying to do

Present the deal against the qualification framework (pain, metrics, economic buyer, decision criteria, decision process, champion, competition) with evidence from the buyer, not hope, and know the risk the manager will ask about before they ask. Done means a half-page deal card per reviewed deal with a red, yellow or green per element and a next buyer action. Without the company's own evidence, the review is opinion versus opinion.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the facts | Stage, amount, close date, days in stage, competitors | The deal record | CRM deals |
| 2 | Score the elements | Red, yellow, green per qualification element | The record against the elements: contacts by role (economic buyer, champion), competitor named, stage history | CRM deals, CRM contacts |
| 3 | Find the pattern risk | What sank similar deals at this stage | Deal drivers and loss reasons for this segment, competitor and stage | Win/loss dashboard, deal drivers, CRM deals (furthest stage) |
| 4 | Write the next buyer action | What the buyer must do this week to prove the stage | Calven does not help here beyond what decided similar deals | |
| 5 | Prepare the answer | The question the manager will ask | The risk the pattern shows that the deal card does not address | Deal drivers |
| 6 | Present and update | The review, the CRM update | Calven does not help here | |

## Recommended prompts

### Step 1 to 5: the deal card

```
Using Calven MCP, build my deal card for [deal] for the pipeline review.

CONTEXT
Below is what I know that is not in the CRM: what the buyer did this week, the next mutual step, what the champion said. I want a red, yellow or green per qualification element and the risk my manager will raise.

PULL FROM THE UNIVERSE
- The deal record: stage, amount, close date, competitors, stage history.
- The contacts on the account by buying role: do we have an economic buyer, a champion, a technical buyer.
- What decided deals in [segment] against [competitor] that reached this stage: the drivers and loss reasons, with n.

BUILD
- The deal in two lines.
- A row per element (pain, metrics, economic buyer, decision criteria, decision process, champion, competition): the evidence, the colour.
- The risk from similar deals this card does not address, and the question that tests it.
- The next buyer action that would turn the weakest element green.

OUTPUT
A half-page card with sources.

GROUNDING
Record and dashboard data only, cited with n. Do not invent buyer actions I did not report. Where the CRM lacks the contact or field, mark the element "no evidence", not green.

[paste what you know; name the deal, segment and competitor]
```

### Gap mode: which deals will the manager pick on

```
Using Calven MCP, which of my open deals look weakest against our record?

CONTEXT
Pipeline review is tomorrow. Below is my open deal list, or use the CRM mirror for deals owned by [owner name].

PULL FROM THE UNIVERSE
- Each open deal: stage, amount, close date, contact roles, competitor.
- The win rate by furthest stage reached, by competitor and by ICP tier in [segment], with n.
- Loss reasons on deals that stalled at each stage.

BUILD
- Rank the deals by risk: missing economic buyer, competitor we lose to, out-of-profile account, stalled stage.
- One line per deal on the risk and the buyer action that would reduce it.

OUTPUT
A ranked table.

GROUNDING
Only CRM mirror and dashboards, cited with n. No invented activity.

[paste the list or name the owner and segment]
```

### Review mode: challenge my forecast call

```
Using Calven MCP, challenge my commit on [deal].

CONTEXT
I have [deal] in commit for [date]. Below is why. Play my manager.

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

[paste your reasons]
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

## Good practice

- Paste what the buyer did this week. The card is evidence plus record; the record alone is the CRM screen.
- Mark elements "no evidence" rather than green. The review is for finding gaps.
- Ask for the risk the card does not address. That is the manager's question.
- Use the gap prompt the night before. Choose which deals to defend.

## Not covered today

- Forecast categories, quota math and the CRM forecast itself. Calven reads the mirror.
- Activity data: emails, calls, meetings. The rep reports them.

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

## Advanced prompts

### Score your past commit calls for calibration

```
Score my past forecast calls against what actually happened and tell me how calibrated I am. Use Calven MCP for the closed outcomes and the base rates I should have started from.

FILL IN
- Rep: [rep]
- Forecast history: [attach a CSV of past calls: deal, date of the call, category (commit, best case, pipeline), the probability you'd have put on it]
- Window: [window]

CONTEXT
My manager trusts my commit less than I'd like. Before the next forecast call I want to know, with numbers, whether I'm an optimist, a sandbagger or calibrated, and on which kinds of deals.

FROM CALVEN
- The closed deals in the window owned by the rep, paged from the CRM mirror: status, close date, stage reached, segment, competitor, loss reason.
- Win rate for deals that reached each stage in the window, from the dashboards, with n. That's the base rate.
- Win rate by competitor and by ICP tier, with n.

METHOD
- Match each call in my CSV to its deal's outcome. Treat commit as 0.9, best case as 0.5 and pipeline as 0.2 unless I gave a probability.
- Compute my Brier score overall, then the base-rate Brier score you'd get by just using the stage win rate. Did I beat the base rate?
- Plot a calibration table: calls grouped by stated probability, against the share that closed.
- Split by competitor, tier and deal size. Find where my bias lives.
- If you can run code, do it in code and show the table and the chart.

OUTPUT
My Brier score against the base rate, the calibration table, the two segments where I'm most off, and a correction rule I can apply to this quarter's calls.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't fill in an outcome for a deal the mirror doesn't have; list unmatched calls separately.
```

### Simulate the quarter from your open deals

```
Simulate my quarter from my open deals and tell me the odds I hit my number. Use Calven MCP for the deals and the conversion history each one should be weighed by.

FILL IN
- Rep: [rep]
- Quota remaining: [the amount still to close this quarter]
- Quarter end: [date]
- Overrides: [paste any deal where you know something the CRM doesn't: verbal yes, legal started, champion gone]

CONTEXT
My commit adds up to the number on paper. I want to know how likely that is, which deals carry the quarter, and where to spend the next three weeks.

FROM CALVEN
- My open deals from the CRM mirror: amount, stage, close date, segment, ICP tier, competitors, contact roles.
- Win rate for deals that reached each stage, by segment and by tier, with n.
- Win rate against each competitor in my deals, and the sales cycle for the segment, with n.

SIMULATE
- Give each deal a close probability from its stage and segment rate, adjusted for the competitor and tier. Show the adjustment.
- Give each deal a chance of slipping past quarter end from the sales cycle and how long it has sat in stage.
- Apply my overrides and say what each changed.
- If you can run code, run a Monte Carlo with 10,000 draws. Otherwise give low, expected and high.
- Rank deals by how much of the variance each one drives.

OUTPUT
The distribution of closed amount, the probability of hitting quota, the P10 and P90, the three deals that swing the quarter, and where one more meeting moves the odds most.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a stage rate the dashboards don't give; use a labelled range and show it in the sensitivity.
```

### Grade each qualification letter by its evidence

```
Grade every element of my qualification on this deal by the strength of the evidence, not by how I feel about it. Use Calven MCP for the record and for what that evidence was worth on past deals.

FILL IN
- Deal: [deal]
- My MEDDICC: [paste your current notes per letter: metrics, economic buyer, decision criteria, decision process, paper process, pain, champion, competition]

CONTEXT
Every letter on my card is green, and my manager will ask how I know. I want each one graded on what supports it, so I defend the strong ones and fix the weak ones before the review.

FROM CALVEN
- The deal record and the contacts on the account with their buying roles.
- The deal drivers that decided deals in this segment and stage, with n, so I know which letters actually predict the outcome here.
- The persona canvases for the champion and economic buyer roles: what each one has to believe to act.

METHOD
- Score each piece of evidence on a ladder: buyer said it in writing, buyer said it on a call, I inferred it, nobody has said it.
- Give each letter a confidence from 0 to 100 percent and explain the number in one line.
- Weight each letter by how often it decided similar deals.
- Turn the weighted score into one deal confidence and compare it with my forecast category.

OUTPUT
A table, one row per letter: evidence, ladder rung, confidence, weight, the question that would raise it. Then the deal confidence, the gap to my category, and the one ask for this week.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't credit evidence I didn't paste and the record doesn't hold; that letter scores zero.
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
- Which stage do deals in [segment] most often stall at, and for how long?
- What share of deals we lost against [competitor] had no economic buyer on record?
- Which of my open deals has a close date older than the segment's average cycle?
- Do deals with a champion and a technical buyer win more often than champion-only deals, with n?
- Which loss reason shows up on deals that reached the stage [deal] is in?
- What did buyers on our slipped deals say in win/loss about timing?
- Which of my open deals is against the competitor we lose to most at that stage?

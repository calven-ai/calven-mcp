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

## Advanced prompts

### Price each whitespace play by expected value

```
Build a decision tree for the whitespace plays at my account and rank them by expected value, so I spend the quarter on the right one. Use Calven MCP for our win rates, deal sizes and cycle lengths for each kind of play.

FILL IN
- Account: [account]
- Plays I'm considering: [paste two to four: new team, new product, upsell, displacement of a rival]
- My hours this quarter for this account: [hours]
- What I know about each play: [paste notes: sponsor, budget signal, timing]

CONTEXT
Every play on an account plan looks plausible on the page. I have one quarter and limited hours, and I want to know which play is worth the most once odds, size and time are counted.

FROM CALVEN
- The account's ICP tier, fit score, best-fit product and triggers on record.
- Win rate, average deal size and sales cycle by deal type (new business, expansion, upsell) for the account's segment and tier, from the ICP and win/loss dashboards, with n.
- Past deals at the account and their loss reasons.

MODEL
- Draw the tree for each play: get a meeting, get a sponsor, reach evaluation, win. Put a probability on each branch from the base rates, adjusted by my notes, and say how much you moved each one.
- Expected value per play: probability of a win times deal size, discounted for cycle length past quarter end. Then divide by my hours.
- If you can run code, vary every probability by plus or minus 15 points and show which play stays on top.

OUTPUT
A ranked table: play, win probability, deal size, close quarter, expected value, value per hour. Then the tree for the top play, and the one fact I'd need to learn to switch plays.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a base rate for a deal type with no history; say so and use a labelled range.
```

### Map who moves the decision and how to reach them

```
Map the buying group at my account on a power and interest grid, then trace the shortest path of influence to the person who signs. Use Calven MCP for the contacts we know, the roles that sit on won deals and what each persona cares about.

FILL IN
- Account: [account]
- Org notes: [paste what you know: reporting lines, who talks to whom, recent hires]

CONTEXT
I know four people at this account and none of them signs. Before I spend weeks threading, I want to see who holds the power, who cares, and which introductions get me to the economic buyer fastest.

FROM CALVEN
- The account's contacts with their roles and lifecycle stage.
- The contact roles present on won deals versus lost deals in the segment, and the multi-threading win rate from the persona dashboard, with n.
- The persona canvases for the economic buyer and the likely blocker: goals, pains, objections.

METHOD
- Place every known and missing role on a 2x2: power over the decision against interest in the problem. Missing roles go on the grid in a dashed outline.
- Draw the influence paths from my contacts to the economic buyer. Score each path on hops, the strength of each link and the risk of the blocker hearing first.
- For the best path, write the ask to each person on it in one line, from what their canvas says they care about.

OUTPUT
The grid as a table or a simple diagram, the ranked paths, and the three asks in order.

GROUNDING
Contacts and roles come from the CRM mirror; reporting lines come from my notes. Label any relationship you inferred as your assumption. Don't name a person who isn't on record or in my notes.
```

### Replay how lookalike accounts were won

```
Find the closed-won accounts most like mine and replay how we won them, step by step, as a path to copy. Use Calven MCP for the lookalike accounts, their deals and what the buyers said decided it.

FILL IN
- Account: [account]
- Where we are with them: [paste the current state: contacts, last meeting, open deal if any]

CONTEXT
Somebody on this team has already won an account like this one. I'd rather copy a path that worked than invent one.

FROM CALVEN
- My account's industry, size, region, tech stack, triggers and fit tier.
- Won deals in the same segment, paged from the CRM mirror, with their accounts' attributes, stages reached, contact roles, lead source and cycle length.
- The deal drivers and survey summaries for those deals, where they exist.

METHOD
- Score each won account's similarity to mine on industry, size, tech stack, triggers and tier. Show the weights. Keep the top five.
- For each, rebuild the path: how it started, who came in when, the competitor, what decided it in the buyer's words.
- Find the steps all five share and the step mine is missing.

OUTPUT
A lookalike table with similarity scores, a five-row timeline comparison, and a 90-day path for my account built on the shared steps.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. If fewer than five lookalikes exist, say how many and don't pad the list.
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
- Which contacts at [account] were on a deal we won there before, and are they still Champions?
- Which tech stack entries show up most on our won accounts in [segment], and does [account] have them?
- What is the expansion win rate in [segment] compared with new business, and over how many deals?
- Which trends make [account]'s industry more urgent this year?
- Which of my Tier 1 accounts have contacts but no economic buyer on record?
- What did buyers at accounts like [account] say nearly stopped them from buying?

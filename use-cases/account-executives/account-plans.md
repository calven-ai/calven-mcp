# Account plans

**Team:** Account executives · also sales leadership, RevOps, BDRs and SDRs
**Impact:** High. A named account gets one plan a quarter, and the plan decides where the rep's hours go for 90 days.
**Prerequisites:** CRM connected (pipeline category on for MCP), ICP approved, personas approved. Better with win/loss surveys running and competitors tracked.

## What the team is trying to do

Decide whether an account is worth the quarter and how to work it: fit against the ICP, the buying group and who is missing, the history (deals won, lost and why), the competitor likely installed, the whitespace, the angle and the next 90 days. Done means a one-page plan the manager can challenge line by line. Without the company's own knowledge, the plan is firmographics from a data vendor plus the rep's hunch about who to call.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Qualify the account | Is it in profile, which tier, which product fits | The account's ICP fit score and tier, best-fit product, the ICP attributes it matches and misses | CRM accounts, ICP document |
| 2 | Read the history | Deals at this account: won, lost, open, why | Deals on the account with stage, outcome, loss reason, competitor; survey summaries where a win/loss ran | CRM deals, surveyed deals, deal drivers |
| 3 | Map the buying group | Who we know, their role, who is missing | Contacts with buying role and lifecycle stage; the personas on won deals in this segment that this account lacks | CRM contacts, persona dashboard (buying group) |
| 4 | Read the personas | What each contact cares about | Persona canvases for the roles on the account | Persona canvas |
| 5 | Find the triggers | Why now: funding, hire, migration, expansion | Triggers recorded on the account; buying triggers from the ICP | CRM accounts (triggers), ICP document |
| 6 | Size the competitor | Who is installed or likely, and how we fare against them | Competitors on past deals; the battlecard; win rate against them in this segment | CRM deals, competitor bundle, competitive intelligence dashboard |
| 7 | Pick the angle | The message this account will respond to | The value proposition for the lead persona; vertical and campaign variations in messaging; proof from similar accounts | Messaging document, quotes |
| 8 | Plan the 90 days | Milestones, owners, who to open, what to send | A draft plan from the gaps above | All of the above |
| 9 | Research the company live | News, org changes, job posts | Calven does not help here | |
| 10 | Review with the manager | Present and defend the plan | A review of the plan against the record | All of the above |

## Recommended prompts

### Step 1 to 8: the plan

```
Using Calven MCP, build an account plan for [account].

CONTEXT
[Account] is in my territory for [quarter]. I want to know whether it is worth the quarter and how to work it.

PULL FROM THE UNIVERSE
- The account record: ICP fit score and tier, industry, size, region, tech stack, triggers, best-fit product.
- The ICP attributes this account matches and misses, and any disqualifier.
- Every deal at this account: outcome, amount, stage, loss reason, competitor, and the survey summary where one exists.
- The contacts we hold, with buying role, and the personas that sat on won deals in [segment] that this account lacks.
- The battlecard for the competitor most likely installed, and our win rate against them in [segment] with n.
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

[name the account, the segment and the quarter]
```

### Step 3: who is missing

```
Using Calven MCP, who are we missing at [account]?

CONTEXT
I want to multi-thread before the deal starts. Tell me which roles we have and which we need.

PULL FROM THE UNIVERSE
- Contacts at [account] with buying role and lifecycle stage.
- The buying-group pattern on won deals in [segment]: which personas were on them and the win rate by persona, with n.
- The persona canvases for the missing roles.

BUILD
- The roles we have, the roles won deals usually have that we lack.
- For each missing role: the persona, what they care about, the hook from their canvas.

OUTPUT
A table of present and missing roles with the hook for each gap.

GROUNDING
Persona win rates from the persona dashboard only, with n. Do not invent contacts.

[name the account and segment]
```

### Review mode: challenge my plan

```
Using Calven MCP, challenge my account plan for [account].

CONTEXT
Below is my plan. Play my sales manager. Find the assumption the record does not support.

PULL FROM THE UNIVERSE
- The account record, its deals and contacts.
- The ICP and the [competitor] battlecard.
- Win/loss evidence for [segment].

CHECK
- Each claim in the plan against the record: supported, unsupported, contradicted.
- The risk from similar deals my plan ignores.
- The milestone with no owner or no buyer action behind it.

OUTPUT
My plan annotated, then the three changes.

GROUNDING
Judge only against the Universe and cite it. Say plainly when the plan is sound.

[paste your plan]
```

### Gap mode: which accounts deserve a plan

```
Using Calven MCP, which accounts in my territory deserve a plan this quarter?

CONTEXT
My territory is [segment or region]. Below is my account list. I can work six properly.

PULL FROM THE UNIVERSE
- ICP fit tier and score for each account on the list, and the triggers on record.
- Past deals at each: open, won, lost, with loss reason and whether the champion is still a contact.
- Win rate by fit tier in [segment], with n.

BUILD
- Rank the list by fit, then by trigger, then by history.
- For each of the top six: one line on why.
- The accounts to drop and why.

OUTPUT
A ranked table with the reason per row.

GROUNDING
Fit and win rates from the Universe only, cited with n. Accounts not in the CRM mirror are marked "not on record", not scored.

[paste the account list and name the segment]
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

## Good practice

- Start with fit and history, then the buying group. A plan for an out-of-profile account with two losses on record needs a different first line.
- Ask for the n behind every rate. Segment win rates over a handful of deals are a hint, not a rule.
- Keep the plan to one page and five milestones. The manager challenges what they can read.
- Paste the plan back for review before the territory meeting.
- Do the live company research separately and paste the findings in. The Universe holds what the company has recorded, not this week's news.

## Not covered today

- Company news, org charts, job postings and intent data. Those come from the rep's research tools; paste the findings into the prompt.
- Writing the plan into the CRM. Calven reads the mirror; the rep updates the source.
- Accounts not in the CRM mirror are not scored. Pasted lists get fit judged against the ICP text, which the AI tool should label as a judgment, not a score.

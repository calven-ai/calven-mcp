# Win-back outreach


Some deals we lost for a reason that's since changed: a feature shipped, a price moved, an integration landed, the competitor stumbled. You get a list of those accounts, each with what they said at the time, whether the champion is still there, what changed, and a message that says so. Calven adds the company's data on which losses are reopenable, so you don't email all of them the same way.

## Prompts

### Build a win-back list by loss reason

```
Using Calven MCP, build my win-back list for deals we lost on the loss reason or gap below.

FILL IN
- Loss reason: [loss reason, or leave blank if using a gap]
- Gap: [product feedback gap, or leave blank if using a loss reason]
- What changed: [what changed: shipped X, added Y, cut the price of Z]
- Window: [time window, e.g. last 12 months]

CONTEXT
We have since made the change above. I want to go back to the deals that walked for that reason.

PULL FROM THE UNIVERSE
- Lost deals in the window with the loss reason or the product feedback gap, with account, amount band, close date and the competitor they chose.
- For surveyed deals, the summary and the driver that decided it, with the buyer's words.
- The product change that closed the gap, with its date.

BUILD
- A table: account · when lost · what they said · who they chose · what changed since · champion still on record (yes/no).
- Rank by amount band and recency.

OUTPUT
The ranked table with sources.

GROUNDING
Include only deals whose recorded loss reason matches. Cite the response or driver behind each. Do not pad the list with loosely related losses.
```

### Write the win-back message for an account

```
Using Calven MCP, write the win-back message for the account below.

FILL IN
- Account: [account]
- Month lost: [month]
- Reason: [why we lost]
- What changed: [what changed]

CONTEXT
We lost the account in that month for that reason. That has changed. I want a message to the champion that says so without overselling.

PULL FROM THE UNIVERSE
- The deal record and the win/loss summary, with the buyer's words on why they walked.
- The contacts we hold at the account and whether the champion is still listed.
- The product change or product brief entry that shows the gap is closed.

WRITE
- Under 100 words. Open on what they told us then, state what changed in one plain sentence, ask one question.
- If the champion is gone, a version for the next-best contact.

OUTPUT
The message, the contact to send it to, and the source for the change.

GROUNDING
Use only the deal record, the quote and the product facts in the Universe. Do not claim more than the product brief says shipped.
```

### See what changed at the competitor since

```
Using Calven MCP, what has happened at the competitor below since we lost this account to them?

FILL IN
- Competitor: [competitor]
- Account: [account]
- Since: [date we lost]

PULL FROM THE UNIVERSE
- Competitive signals for the competitor since the date: pricing changes, launches, messaging shifts.
- The battlecard's "where we win" section.

OUTPUT
Three lines: what changed at the competitor, what it means for this account, the one line to use.

GROUNDING
Use only signals and the battlecard in the Universe, with dates. If nothing is recorded, say so.
```

### Confirm the change is in the product

```
Using Calven MCP, confirm that the capability below is in our product and how it is packaged.

FILL IN
- Capability: [capability]

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes mentioning the capability.

OUTPUT
Whether it is in the brief, which plan includes it, and the wording I can use.

GROUNDING
Confirm only against the product brief and product changes. If the brief is silent, say "not in the brief".
```

## Advanced prompts

### Score which losses are worth reopening

```
Score every closed-lost account on how reopenable it is with a weighted multi-criteria model, and check the ranking holds when the weights move. Use Calven MCP for each loss, what changed since and who's still there.

FILL IN
- Window of losses: [window]
- Segment: [segment, or "all"]

CONTEXT
I have a hundred closed-lost accounts and time for twenty win-back plays. Recency alone is a bad sort. I want a ranking that weighs fit, why we lost, what changed and whether our champion is still there, and I want to know how fragile it is.

FROM CALVEN
- Lost deals in the window with loss reason, lost to, product feedback, price feedback, amount and close date.
- Product changes since each loss date, and whether any address the product feedback.
- Contacts at each account, with role and lifecycle stage, to check the champion is still on record.
- The account's ICP fit tier and triggers.

MODEL
- Criteria: fit tier, loss reason addressable (a shipped change, a price move), champion still on record, trigger since, deal size, time since loss. Score each 0 to 3 with a stated rule.
- Weight them (propose weights and say why), compute a total and rank.
- Run a sensitivity check: perturb each weight by 50 percent and see which accounts stay in the top 20. If you can run code, do 1,000 random weight sets and report how often each account makes the top 20.

OUTPUT
The ranked table with criterion scores, the robust top 20 (those in it most of the time), and the reason to call each.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Only a recorded product change counts as "addressed". Don't invent a change or a contact.
```

### War-game the incumbent's retention move

```
War-game a win-back attempt: we go after an account we lost to a competitor, they defend it, and we play three rounds. Use Calven MCP for why we lost, the competitor's habits and what's changed.

FILL IN
- Account: [account]
- Competitor: [competitor]

CONTEXT
A win-back isn't a cold email. The incumbent has a relationship, a renewal date and a retention playbook. If I don't think about their move, my first message just triggers their discount.

FROM CALVEN
- The lost deal: loss reason, deal drivers, survey summary and buyer quotes.
- The competitor's battlecard and their signals from the last 90 days, including pricing changes.
- Our product changes since the loss date.
- Our win rate against the competitor from the competitive dashboard, with n.

WAR-GAME
- Round 1: our opening move, built on what changed since we lost. Their likely response, from the battlecard and their recorded behaviour.
- Round 2: our counter. Their counter (discount, roadmap promise, exec call). The buyer's reaction, grounded in what they said when they chose them.
- Round 3: the endgame. Who has the stronger position at renewal?
- Score each path by the chance the buyer reopens an evaluation, and name the move that's dominant for us.

OUTPUT
The three rounds as a short transcript, a decision table of our options and their best responses, and the first message to send.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Competitor moves are simulated from the battlecard and recorded signals; don't invent a move or a price nobody recorded.
```

### Find when lost accounts come back

```
Run a survival analysis on closed-lost accounts to find when they come back, so I time win-back outreach to the window where it works. Use Calven MCP for the losses and any later deals on the same accounts.

FILL IN
- Window of losses: [window, e.g. last three years]
- Segment: [segment, or "all"]

CONTEXT
We either chase lost accounts the next month or forget them. Neither is based on anything. If accounts tend to come back around a renewal cycle, I want to know the month to start.

FROM CALVEN
- Lost deals in the window, paged in full, with account, close date, loss reason and lost to.
- Later deals on the same accounts (any deal type), with opened date and outcome.

METHOD
- For each lost account, time from loss to the next deal opening. Accounts with no later deal are censored at the end of the window.
- If you can run code, compute a Kaplan-Meier curve of "still gone" over months, overall and split by loss reason. Otherwise build a life table by quarter.
- Find the months where the return rate peaks, and whether it differs for losses on price, missing feature and incumbent.
- Say how many accounts sit in each split and which splits are too small to trust.

OUTPUT
The curve or table, the peak return window per loss reason, and the win-back calendar: when to start outreach for each kind of loss.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a renewal date; infer timing only from recorded deals.
```

## Ad hoc questions

- Which deals did we lose on "Missing feature" in the last year?
- Which lost deals named [capability] as the gap? Quote the buyers.
- Is the champion from [account] still a contact?
- What changed in our product in the last 90 days?
- Which closed-lost accounts in Tier 1 are older than six months?
- Who did we lose [account] to, and what did the buyer say?
- Has [competitor] raised prices since [month]?
- Which lost deals had "Integrations" as product feedback?
- Which deals lost on "No decision" had a champion on record?
- What plan includes [capability] now?
- Which lost deals named a gap a product change has since closed?
- Which competitor have we won back accounts from, and what did the buyer say?
- What did buyers who chose [competitor] complain about later, in quotes?
- Which closed-lost accounts have a new trigger recorded since we lost?
- What's our win rate on deals at accounts we've lost before?
- Which loss reason is most often reversed on a later deal?

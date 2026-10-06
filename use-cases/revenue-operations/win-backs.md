# Win-backs


Every closed-lost deal older than six months isn't a win-back list. You want the ones whose loss reason no longer applies, with what changed, who to contact and the angle, ready to route to the BDRs. Calven checks each original reason against what's moved since: the feature shipped, the price changed, the competitor stumbled, the champion moved into a buying role.

## Prompts

### Find lost deals worth another try

```
Using Calven MCP, find the closed-lost deals we should try again.

FILL IN
- Window: [time window of the losses, e.g. last 12 months]

CONTEXT
I want deals lost in the window where the reason we lost may no longer hold: a capability we have since shipped, a price we have since changed, or a competitor whose position has moved.

PULL FROM THE UNIVERSE
- Closed-lost deals in the window with loss reason, lost to, account industry and size, ICP fit tier.
- Deal drivers on those deals with direction hurt and rank "decided", with the evidence quote.
- Product changes since the earliest loss, and the product brief's current capabilities and pricing.
- Competitive signals for the competitors we lost to since the loss.

BUILD
- One row per deal: account, tier, loss reason (CRM), what the buyer actually said (driver quote), what changed since (change, date, source), verdict (reason gone, reason weakened, reason still holds).

OUTPUT
The table, reason-gone deals first.

GROUNDING
Match a loss to a change only when the driver names the thing that changed. Do not assume a release fixed a loss it does not mention. If no driver exists for a deal, use the CRM loss reason and say the buyer's words are not recorded.
```

### Rank win-backs by who's still there

```
Using Calven MCP, check who is still at these accounts and rank the win-backs.

FILL IN
- Deals: [paste the reason-gone and reason-weakened deals]

CONTEXT
I want the contact situation for the deals and a final rank.

PULL FROM THE UNIVERSE
- Contacts at each account with role and lifecycle stage, and whether the original primary contact is still listed.
- Each account's ICP fit tier and triggers.
- Our win rate against the competitor each deal was lost to, with n, from the competitive dashboard.

BUILD
- Rank by: fit tier, verdict, champion still listed, win rate against the winner.
- Per account: who to contact and in what role.

OUTPUT
The ranked list with contact and role.

GROUNDING
Use only mirrored contacts and dashboard rates with n and window. If contacts are restricted, rank without them and say so.
```

### Write the re-engagement angle per account

```
Using Calven MCP, write the re-engagement angle for each win-back account.

FILL IN
- Ranked list: [paste the ranked list with the buyer's original words and what changed]

CONTEXT
I need one line per account on the ranked list a BDR can open with, in the buyer's own terms, plus one reusable template.

PULL FROM THE UNIVERSE
- The driver quote for each deal.
- The product change or pricing fact that answers it, from the Universe.
- The persona canvas for the contact's role, for tone.

WRITE
- Per account: the angle in one sentence that names what they said and what changed.
- One template with placeholders for the BDRs.

OUTPUT
The table and the template.

GROUNDING
Use only recorded changes and quotes. Do not promise anything the product brief does not state.
```

## Advanced prompts

### Replay lost deals against what we shipped

```
Replay last year's lost deals as if they ran again with the product and pricing we have since, and estimate which ones would flip. Use Calven MCP for the buyer's reasons on each loss and the product changes made after it.

FILL IN
- Window: [window, e.g. deals lost in the last 12 months]
- Minimum amount: [amount]

CONTEXT
Win-back lists usually rank by recency and size. The better question is counterfactual: if this deal ran again, would the thing that killed it still be there? That's the list worth a rep's time.

FROM CALVEN
- Lost deals in the window above the amount, with loss reason, competitor, price and product feedback, and the account's fit tier.
- For each, the deal drivers from the buyer's survey response: driver, direction, whether it decided the deal, and the evidence quote.
- Product changes detected since each loss date, with summary and evidence quote.
- Competitive signals for the competitor that won, since the loss date.

REPLAY
- For each deal, list the drivers that decided it. Mark each one as removed (a product change answers it), unchanged, or worse (the competitor moved further).
- Rerun the decision: if the deciding drivers are removed and nothing new hurts, call it a likely flip; if half, a maybe; otherwise no.
- Weight by amount and fit tier to get recoverable pipeline.

OUTPUT
A replay table: deal, deciding drivers, what changed, verdict, recoverable amount. Then the top ten with the one sentence a rep opens with.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. A driver counts as removed only when a recorded product change matches it; quote both. Deals with no survey response are listed separately, never replayed on the rep's loss reason alone.
```

### Rank win-backs by updating the odds

```
Rank closed-lost accounts by how likely a win-back is, starting from the base rate and updating on each piece of evidence like a Bayesian would. Use Calven MCP for the base win rates and the evidence on each account.

FILL IN
- Accounts: [paste the closed-lost accounts, or write "all closed-lost Tier 1 and Tier 2"]
- Win-back base rate: [your historic win rate on reopened deals, or write "none"]

CONTEXT
Every win-back list mixes gut feel with a few facts. I want the reasoning explicit: start from a prior, move it up or down per signal, and show the arithmetic so the team can argue with the inputs instead of the ranking.

FROM CALVEN
- For each account: fit tier, triggers, the lost deal's loss reason and competitor, and whether the champion and economic buyer from that deal are still listed as contacts.
- Win rate by tier and win rate against each competitor from the dashboards, with n.
- Product changes since the loss that touch the recorded loss reason.

METHOD
- Prior: my base rate, or the tier win rate halved as a labelled assumption.
- Update with likelihood ratios for each signal: champion still there, new trigger, loss reason answered, competitor we beat more often than not. State each ratio and where it came from.
- If you can run code, compute posteriors in a small table and show how the ranking shifts if each ratio is off by half.

OUTPUT
A ranked list with prior, each update, posterior and the deciding signal. Then the ten to work this quarter.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Likelihood ratios are assumptions unless a dashboard supports them; say which.
```

### Design the win-back test with a control group

```
Design the win-back campaign as an experiment, so in a quarter I'll know whether it worked or whether those accounts would have come back anyway. Use Calven MCP for the eligible accounts and the base rates that size the test.

FILL IN
- Eligible pool: [describe the pool, e.g. Tier 1 and 2 lost more than six months ago]
- Outreach capacity: [how many accounts reps can work in the quarter]
- Minimum lift worth it: [the lift that justifies the effort, e.g. 5 points of reopen rate]

CONTEXT
Win-back programs always look good because nobody measures the accounts that weren't touched. I want a treatment and a control group set up front, a sample size that can detect the lift I care about, and the readout defined before we start.

FROM CALVEN
- The count of eligible closed-lost accounts, with fit tier, segment, loss reason and lost date.
- How many of those accounts have a new deal opened since the loss, as the natural reopen rate.
- Win rate by segment from the ICP dashboard, with n.

METHOD
- Use the natural reopen rate as the control baseline.
- Run a power calculation: the accounts per arm needed to detect my minimum lift at 80% power and 5% significance. If the pool is too small, say what lift it can detect.
- Stratify the random split by tier and loss reason so the arms match.
- If you can run code, generate the assignment list with a fixed seed.

OUTPUT
A one-page test plan: hypothesis, arms, sample size, assignment, primary metric (reopened deals), secondary metric (pipeline), readout date. Plus the assignment list.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't overstate what a small pool can detect.
```

## Ad hoc questions

- Which deals did we lose on "Missing feature" in the last year, and which feature?
- What did we ship since [date] that answers a recorded loss reason?
- Is the champion from [lost deal] still listed at [account]?
- Which closed-lost Tier 1 accounts are older than six months?
- What did the buyer at [account] say when they chose [competitor]?
- Which competitor did we lose to most last year, and what is our win rate against them now?
- Which lost deals mention a price we have since changed?
- Which accounts lost on "No decision" show a new trigger now?
- How many closed-lost deals have a completed win/loss survey?
- What changed at [competitor] since we lost [deal] to them?
- Which lost deals had a champion who's still listed and a loss reason we've since addressed?
- Which competitor that beat us has had a negative signal since?
- How many closed-lost accounts opened a new deal within a year, without a campaign?
- Which lost deals were no decision, and has the account gained a trigger since?
- What did buyers who chose [competitor] say they'd need to switch back?
- Which closed-lost accounts moved up a fit tier after we lost them?

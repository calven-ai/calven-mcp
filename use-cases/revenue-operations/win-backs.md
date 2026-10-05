# Win-backs

**Team:** Revenue operations · also sales leadership, BDRs, product marketing
**Impact:** High. Closed-lost accounts are the cheapest pipeline there is, if the reason they said no has changed. Calven knows the loss reason in the buyer's words, what the product has shipped since, and whether the champion is still listed.
**Prerequisites:** CRM connected (deals with loss reason and lost to, contacts), win/loss surveys running (deal drivers, responses). Better with own website monitored (product changes) and competitors tracked.

## What the team is trying to do

Build a re-engagement list of lost deals whose loss reason no longer applies: the feature shipped, the price changed, the competitor stumbled, the champion moved into a buying role. Done means the list with the original reason, what changed, who to contact and the angle, routed to the BDRs. Without the company's own knowledge the win-back list is every closed-lost deal older than six months.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the losses | Closed-lost deals in the window | Deals by loss reason, lost to, segment, size and close date | CRM deals |
| 2 | Hear the real reason | Go beyond the CRM pick list | Deal drivers that decided the loss, with the buyer's evidence quote; the survey response | Deal drivers, survey responses, surveyed deals |
| 3 | Find what changed | Match reasons to changes | Product changes since the loss; pricing in the product brief; competitive signals about the winner | Product changes, product brief, competitive signals |
| 4 | Check the people | Is the champion still there, who else is listed | Contacts at the account with role and lifecycle stage | CRM contacts |
| 5 | Rank | Fit first, then likelihood the reason is gone | ICP fit tier; win rate against the competitor they chose | CRM accounts, competitive dashboard |
| 6 | Write the angle | One line per account | The changed fact, in terms of the buyer's original words | Deal drivers, product changes |
| 7 | Route and sequence | Assign to BDRs, build the sequence | Calven does not help here; see business development for the outreach prompts | |

## Recommended prompts

### Step 1 to 3: the list of losses whose reason changed

```
Using Calven MCP, find the closed-lost deals we should try again.

CONTEXT
I want deals lost in [window] where the reason we lost may no longer hold: a capability we have since shipped, a price we have since changed, or a competitor whose position has moved.

PULL FROM THE UNIVERSE
- Closed-lost deals in [window] with loss reason, lost to, account industry and size, ICP fit tier.
- Deal drivers on those deals with direction hurt and rank "decided", with the evidence quote.
- Product changes since the earliest loss, and the product brief's current capabilities and pricing.
- Competitive signals for the competitors we lost to since the loss.

BUILD
- One row per deal: account, tier, loss reason (CRM), what the buyer actually said (driver quote), what changed since (change, date, source), verdict (reason gone, reason weakened, reason still holds).

OUTPUT
The table, reason-gone deals first.

GROUNDING
Match a loss to a change only when the driver names the thing that changed. Do not assume a release fixed a loss it does not mention. If no driver exists for a deal, use the CRM loss reason and say the buyer's words are not recorded.

[name the window]
```

### Step 4 and 5: the people and the rank

```
Using Calven MCP, check who is still at these accounts and rank the win-backs.

CONTEXT
Below are the reason-gone and reason-weakened deals. I want the contact situation and a final rank.

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

[paste the deals]
```

### Step 6: the angle per account

```
Using Calven MCP, write the re-engagement angle for each win-back account.

CONTEXT
Below is the ranked list with the buyer's original words and what changed. I need one line per account a BDR can open with, in the buyer's own terms, plus one reusable template.

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

[paste the ranked list]
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

## Good practice

- Match the change to the buyer's words, not to the CRM pick list. "Missing feature" is only a win-back if it was the feature we shipped.
- Separate reason gone from reason weakened. The first gets a direct angle; the second gets a conversation.
- Check the champion before routing. A win-back with no one to call is a cold account.
- Rank by fit first. A reason-gone deal at a Tier 3 account is still a Tier 3 account.
- Hand the BDRs the buyer's original quote. The opener that quotes the buyer back to themselves gets replies.
- Rerun after every release and every quarter's win/loss results.

## Not covered today

- Routing, assignment, sequencing and sending. See business development for the outreach prompts.
- News about the account itself (funding, hires) beyond the triggers mirrored from the CRM.
- Writing the win-back status or a task into the CRM.

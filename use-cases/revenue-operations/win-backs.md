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

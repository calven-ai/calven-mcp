# Account research


You're about to make a first touch and want to write something specific instead of reading their website and guessing. In minutes, not forty, you get a one-page brief: whether the account fits, who to contact and in which role, what their persona cares about, what triggered interest, and why accounts like it bought or walked. Calven adds the company's own data behind every section.

## Prompts

### Brief an account before first touch

```
Using Calven MCP, brief me on the account below before I reach out.

FILL IN
- Account: [account]

CONTEXT
First touch from me. I want to know whether to prioritise it, who to contact, what to say, and what to avoid.

PULL FROM THE UNIVERSE
- The account's ICP fit score and tier and the attributes behind it, plus any triggers recorded on it.
- Every contact we hold at the account, with title, role and lifecycle stage.
- Any past deals with this account: outcome, loss reason, competitor.
- Why accounts in the same industry and size bought or walked, from win/loss, with the buyer's words.
- The competitors most often in play in this segment and our win rate against each.

BUILD
- Fit: tier, the two attributes that matter most, any disqualifier.
- People: who to contact first and why, which persona each maps to, which roles we are missing for a full buying group.
- Angle: the pain this persona names most, the trigger if one is recorded, the proof from a similar won deal.
- Risk: what sank similar deals and the competitor likely in the room.

OUTPUT
A one-page brief with sources per section.

GROUNDING
Ground every point in the Universe and cite it. Do not invent contacts, triggers or history. Where the CRM has no record, say so.
```

### Pick who to contact and in what order

```
Using Calven MCP, tell me who to contact at the account below and in what order.

FILL IN
- Account: [account]

CONTEXT
I can send three messages this week. I want the roles that turn into won deals.

PULL FROM THE UNIVERSE
- The contacts we hold at the account, with role and lifecycle stage.
- Win rate by persona and the buying-group roles that appear on won deals, from the persona read.

BUILD
- The three contacts to message, each with their persona, why that role matters, and the opener angle.
- The role we are missing and the title to look for.

OUTPUT
A short ranked list with reasons.

GROUNDING
Use only contacts and persona data in the Universe and cite the win-rate figure with its sample. Do not invent names.
```

### Find the closest won deal and what decided it

```
Using Calven MCP, find the won deal that looks most like the account below and tell me what decided it.

FILL IN
- Account: [account]
- Industry: [industry]
- Size: [size]
- Region: [region]

CONTEXT
The account's industry, size and region are above. I want one story and one quote I can use.

PULL FROM THE UNIVERSE
- Won deals in the same industry and size band, and the drivers that decided them.
- The customer quotes behind those drivers.

BUILD
- The closest won deal, the driver that decided it, the quote, and whether the quote is approved for use.

OUTPUT
One paragraph I can adapt into an email.

GROUNDING
Use only deals, drivers and quotes in the Universe and cite them. Do not name a customer unless the quote is approved for external use.
```

### Check whether we've worked this account before

```
Using Calven MCP, have we worked the account below before, and how did it end?

FILL IN
- Account: [account]

PULL FROM THE UNIVERSE
- Every deal with this account: stage reached, status, loss reason, competitor, close date.
- The win/loss survey summary and drivers if the deal was surveyed.

OUTPUT
A three-line history and the one thing not to say in the first email.

GROUNDING
Report only what the CRM and win/loss hold. If there is no record, say so.
```

## Ad hoc questions

- What is [account]'s ICP fit and why?
- Who do we know at [account]?
- Which persona is a [title] at a [segment] company?
- Has [account] ever been in our pipeline?
- Why did we lose [account] last time?
- Which triggers are recorded on [account]?
- What do [persona]s at [industry] companies say they struggle with?
- Which won deals look like [account]?
- Who usually sits on the buying group when we win in [segment]?
- Which competitor shows up most in [industry] deals, and how do we do against them?
- Does [account] have a champion or exec sponsor on record?
- What is the best-fit product for [account]?

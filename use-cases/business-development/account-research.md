# Account research

**Team:** Business development · also account executives, customer success
**Impact:** High. Research is the biggest block of a BDR's day and the part most often skipped under quota pressure; one question that returns the fit, the people and the reason to call changes how many accounts get a real first touch.
**Prerequisites:** CRM connected (accounts, contacts, deals), ICP approved, personas approved. Better with win/loss surveys running (why similar accounts bought) and competitors tracked.

## What the team is trying to do

Know enough about an account before the first touch to write something specific: whether it fits, who to contact and in which role, what their persona cares about, what triggered interest, and why accounts like it bought or walked. Done means a one-page brief per account in minutes, not forty. Without the company's own data the BDR reads the website and guesses the rest.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Check fit | Decide whether the account is worth the time | ICP fit score and tier, the attributes that drove it, disqualifiers | CRM accounts, ICP document |
| 2 | Map the people | Find the contacts and their buying roles | Contacts at the account with title, role and lifecycle stage; the roles that sit on won deals | CRM contacts, persona dashboard (buying group) |
| 3 | Understand the persona | Learn what each contact cares about | The persona canvas for each contact's role: goals, pains, objections, hooks | Persona canvas |
| 4 | Find the trigger | Spot why now | Triggers recorded on the account; the buying triggers in the ICP | CRM accounts (triggers), ICP |
| 5 | Check history | See whether we have been here before | Past deals with this account, outcome, loss reason, who we lost to | CRM deals, surveyed deals |
| 6 | Find the proof | Pick the story that fits | Won deals in the same industry and size, and what decided them, with the buyer's words | Deal drivers, quotes, surveyed deals |
| 7 | Spot the competitor | Guess who is already in | Competitors common in this segment's deals, and our win rate against them | Competitive intelligence dashboard, CRM deals |
| 8 | Live news | Check funding, hires, posts this week | Calven does not help here | |
| 9 | Write the brief | One page the BDR works from | All of the above assembled with sources | |

## Recommended prompts

### Steps 1 to 7: the account brief

```
Using Calven MCP, brief me on [account] before I reach out.

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

[name the account]
```

### Step 2: who to contact

```
Using Calven MCP, tell me who to contact at [account] and in what order.

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

[name the account]
```

### Step 6: the proof for this account

```
Using Calven MCP, find the won deal that looks most like [account] and tell me what decided it.

CONTEXT
[account] is [industry], [size], [region]. I want one story and one quote I can use.

PULL FROM THE UNIVERSE
- Won deals in the same industry and size band, and the drivers that decided them.
- The customer quotes behind those drivers.

BUILD
- The closest won deal, the driver that decided it, the quote, and whether the quote is approved for use.

OUTPUT
One paragraph I can adapt into an email.

GROUNDING
Use only deals, drivers and quotes in the Universe and cite them. Do not name a customer unless the quote is approved for external use.

[name the account and its industry, size and region]
```

### Step 5: history check

```
Using Calven MCP, have we worked [account] before, and how did it end?

PULL FROM THE UNIVERSE
- Every deal with this account: stage reached, status, loss reason, competitor, close date.
- The win/loss survey summary and drivers if the deal was surveyed.

OUTPUT
A three-line history and the one thing not to say in the first email.

GROUNDING
Report only what the CRM and win/loss hold. If there is no record, say so.

[name the account]
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

## Good practice

- Ask for the brief, not the raw rows. The one-page prompt returns the synthesis; "list contacts" returns a list.
- Give the industry, size and region when the account is not in the CRM yet, so the AI tool can still find the comparable deals.
- Ask which roles are missing. A single-threaded account is the most common reason a first meeting goes nowhere.
- Check the loss reason before writing. Walking back into "Price" with a pricing line loses twice.
- Rerun the brief for an account that has sat for a quarter; triggers and fit scores move.

## Not covered today

- The account's news, hiring, posts and site. That is a live web read; Calven holds the CRM mirror and recorded triggers.
- Intent data and email engagement. Those stay in the tools that collect them.
- Updating the CRM with what you learned.

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

## Advanced prompts

### Estimate the account's win odds from base rates

```
Estimate the odds that this account becomes a won deal, the way a forecaster would: start from a base rate and update on each fact. Use Calven MCP for the base rate, the win rate by attribute and the account's own record.

FILL IN
- Account: [account]
- What I already know: [paste anything you found: headcount, tools, a hiring post, or write "nothing"]

CONTEXT
I have forty accounts and time for ten real first touches. Fit scores say who looks right; I want the odds.

FROM CALVEN
- The account row: industry, size, region, funding stage, tech stack, triggers, ICP fit tier and score.
- Our overall win rate and the win rate by attribute from the ICP dashboard (industry, size, tech signals, predictive attributes), with n.
- Any past deals with this account and their loss reason.

METHOD
- Start from the overall win rate as the prior.
- For each attribute the account has, turn its win rate into a likelihood ratio against the base rate and update the odds one step at a time. Show each step.
- Where a sample is small (n under 20), shrink the ratio toward 1 and say so.
- Say which attributes probably overlap (size and funding stage, for instance) and how much that overstates the result.
- If you can run code, do the update in a short script and print a range from the low and high end of each rate.

OUTPUT
A one-screen card: prior, each update with its evidence, the final odds as a range, and a verdict: work now, work later, or skip. Then the one fact I should find on the web that would move the odds most.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a win rate for an attribute the dashboard doesn't report; say it's missing and leave it out of the update.
```

### Map the committee and plan the entry path

```
Map the buying committee at this account on power and likely stance, then plan the order I reach them in. Use Calven MCP for the contacts we hold, the roles that sit on our won deals and what each persona cares about.

FILL IN
- Account: [account]
- Contacts I found outside the CRM: [paste names and titles, or write "none"]

CONTEXT
Single-threaded deals die quietly. Before the first touch, I want to know who can say yes, who can say no, who will care first, and which entry point gets me to the economic buyer fastest.

FROM CALVEN
- Contacts at the account with title, role and lifecycle stage.
- Win rate by persona and the multi-threading win rate from the persona dashboard, with n, and the roles that show up on won deals in this segment.
- The persona canvas for each role present: goals, pains, objections.

METHOD
- Place every contact on a power by stance grid. Power comes from buying role; stance comes from how their canvas pains line up with what we solve. Say which placements are guesses.
- Name the gaps: roles that sit on our won deals but have no contact here.
- Build two or three entry paths (for instance user first, then champion, then economic buyer) and score each on reach, time to the economic buyer and risk of a blocker hearing about us first.
- For the chosen path, write the one-line reason each person would take the meeting, from their canvas.

OUTPUT
The grid as a table, the missing roles, the scored entry paths and the recommended sequence with a first line per person.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a contact or a role nobody recorded; outside names are mine and marked as such.
```

### Try to disqualify the account first

```
Try hard to disqualify this account before I research it any further. Use Calven MCP for our disqualifiers, the reasons similar deals died and our history with the account.

FILL IN
- Account: [account]
- Why I like it: [one or two lines on why it looks good to me]

CONTEXT
Once I've decided an account looks good, every fact I find seems to confirm it. I want the opposite search run first: what would make this a waste of a quarter?

FROM CALVEN
- The ICP disqualifiers, anti-profile and blacklisted verticals and regions.
- The account row, and any past deals with their loss reason and who we lost to.
- Loss reasons and losing deal drivers for deals in the same industry and size, with the win/loss dashboard's top loss reasons and n.
- The competitor most often in deals like this, and our win rate against them.

RED-TEAM
- Act as a sales manager who has to approve the time. Build the strongest case against the account from the evidence: fit, history, competitor, timing.
- For each objection, rate how likely it is to be true and what it would cost me if it is.
- Then name the single fact that would kill the case against, and where I'd find it (CRM, a call, the web).
- Finish with a straight call: pursue, pursue with a condition, or drop.

OUTPUT
A short brief: the case against in ranked bullets, the kill-the-case fact for each, and the verdict with its condition.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a loss reason, a competitor in the account or a disqualifier the ICP doesn't list.
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
- Which attribute of [account] lowers its odds most, according to the ICP dashboard?
- What did buyers at accounts like [account] say in win/loss right before they chose us?
- Which persona on [account]'s buying committee do we usually lose when it's missing?
- Is there a won customer in [industry] whose quote would land with [contact]'s persona?
- Which trigger on [account] matches a buying trigger our ICP names?
- What does the [competitor] battlecard say we should ask first at an account like [account]?

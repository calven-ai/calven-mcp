# AE handoff notes


You've just qualified a prospect and you want the AE to accept the meeting and actually prepare for it. You hand over a note that maps to their BANT or MEDDIC fields: fit against the ICP, the contact's buying role, the pain in the prospect's words, the competitor in play, the timeline and what was promised. Calven fills in the account facts, so the note is more than two lines and a calendar invite.

## Prompts

### Turn call notes into an AE handoff note

```
Using Calven MCP, turn my call notes into a handoff note for the AE.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Framework: [BANT / MEDDIC]
- Notes: [paste your call notes]

CONTEXT
I just qualified the contact at the account. The AE works in the framework above. I want the note in that structure with the account facts filled in from the Universe.

PULL FROM THE UNIVERSE
- The account's ICP fit tier and attributes, and any past deals with loss reasons.
- The contact's role on record and the persona for the title.
- If a competitor was named: our win rate against them and the discovery questions from their battlecard.

BUILD
- The note in the framework's fields, each with what the prospect said (verbatim where I wrote it) and what the Universe adds.
- Fit: tier and the attributes behind it, any disqualifier.
- Risk: the competitor and what sank similar deals.
- Suggested first question for the AE.

OUTPUT
The handoff note, under one page, with sources for the Universe facts.

GROUNDING
Keep what the prospect said separate from what the Universe adds. Do not invent budget, timeline or authority the notes do not state.
```

### Decide if the account is worth an AE

```
Using Calven MCP, should I hand the account below to an AE?

FILL IN
- Account: [account]
- Contact: [contact]
- Title: [title]

CONTEXT
The contact asked for a demo. Before I book it I want the fit check.

PULL FROM THE UNIVERSE
- The account's ICP fit and the disqualifiers in our ICP.
- Past deals with the account.

OUTPUT
Hand off or not, in one line, with the two facts that decide it.

GROUNDING
Use only the ICP and CRM records in the Universe. If the account is not in the CRM, say so and judge on the ICP attributes I can confirm.
```

### Brief the AE on the competitor

```
Using Calven MCP, what should the AE know about the competitor below before the first call with this account?

FILL IN
- Competitor: [competitor]
- Account: [account]
- Segment: [segment]

PULL FROM THE UNIVERSE
- Our win rate against the competitor in the segment, with sample and window.
- The top reasons we lose to them, with the buyer's words.
- The battlecard's landmines and first discovery questions.

OUTPUT
Three lines for the handoff note.

GROUNDING
Use only the dashboards and battlecard in the Universe and cite them.
```

## Advanced prompts

### Backtest which handoffs turn into wins

```
Backtest our handoffs: find which facts known at handoff actually predicted a won deal. Use Calven MCP for last year's closed deals and the fields they carried.

FILL IN
- Window: [window]
- Segment: [segment, or "all"]
- What my handoff notes say: [paste a typical note or the template]

CONTEXT
AEs say they want BANT. I'm not sure the fields they ask for are the ones that decide anything. I want the note to lead with the facts that separate the deals we win from the ones we waste time on.

FROM CALVEN
- Closed deals (won and lost) in the window and segment, paged through in full: ICP fit tier, lead source, contact role, competitors, deal size band, account size and industry, furthest stage, loss reason.
- The win/loss dashboard's win rate for the same window, with n, as the check on my own count.

BACKTEST
- Treat each deal as a handoff and each field as something the BDR could have known on day one.
- For each field value, compute the win rate and the lift over the base rate, with counts. Flag any cell under 10 deals.
- If you can run code, fit a simple logistic regression on the fields and report which ones survive together, with a holdout of 20 percent of deals to check it isn't noise.
- Compare the result with my template: which fields I lead with that don't predict anything, and which predictive ones I leave out.

OUTPUT
A table of field values ranked by lift with counts, the model's top three drivers, and a rewritten handoff template that leads with them.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. My counts from paged rows are mine; the dashboard rate is Calven. Don't claim a driver the sample is too small to support.
```

### Decide pass, nurture or drop on expected value

```
Decide whether to pass this prospect to an AE, nurture it or drop it, using an expected-value decision tree. Use Calven MCP for the win rate, deal size and cycle that apply to it.

FILL IN
- Account: [account]
- What I learned on the call: [paste call notes]
- AE time per first meeting: [hours, or write "assume"]

CONTEXT
A weak handoff costs an AE's week and my credibility. Holding a real one costs us the quarter. I want the call made on numbers, not on whether I need the meeting for quota.

FROM CALVEN
- The account row: ICP fit tier and score, size, industry, triggers.
- Win rate, average deal size and sales cycle for the segment from the ICP dashboard, with n.
- Win rate against the competitor I heard on the call, from the competitive dashboard, with n.
- The disqualifiers in our ICP.

MODEL
- Build three branches. Pass: probability of acceptance, then of a win, times deal size, minus AE time. Nurture: a delayed version with a decay you state. Drop: zero, plus the cost of a competitor taking it.
- Adjust probabilities for what the notes say (no timeline, no budget holder, competitor in place) and show each adjustment.
- Run a sensitivity check: how low the win probability can go before nurture beats pass.

OUTPUT
The tree as a small table, the expected value of each branch, the break-even probability and a one-line recommendation with the condition that would flip it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a budget, timeline or champion the notes don't contain.
```

## Ad hoc questions

- Which MEDDIC fields can I fill from the Universe for [account]?
- What buying role is a [title] usually in our won deals?
- Is [account] in profile?
- Did we ever lose [account], and why?
- What does the AE need to ask a [persona] first?
- What is our win rate against [competitor] in [segment]?
- Which disqualifiers should I check before handing this off?
- Who else at [account] should be on the first call?
- What is the best-fit product for [account]?
- What sinks deals in [industry]?
- Which contact role on a handoff most often ends in a won deal for us?
- What do lost deals in [segment] have in common at the first meeting?
- Which competitor, once mentioned on a qualification call, means our odds drop most?
- What does [persona] usually need to see before agreeing to a second meeting?
- Which loss reason shows up most on deals sourced from [lead source]?
- What's our average sales cycle for a [segment] deal, and on what n?
- Which pain, in the buyer's words, shows up most on our won deals in [industry]?

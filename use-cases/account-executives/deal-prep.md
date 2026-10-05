# Deal prep


You've got thirty minutes before the call and a CRM record that says less than you remember. Deal prep turns that into a one-page brief you can read in five: where the deal stands, who's in the buying group and who's missing, what the competitor will probably try, the risk nobody has raised, and the proof point that fits. Calven adds what memory can't: why deals like this one were lost to this competitor before, in the buyers' own words.

## Prompts

### Build a one-page call brief

```
Using Calven MCP, build my call brief for the deal below.

FILL IN
- Deal: [deal]
- Account: [account]
- Call time: [time]
- Attendees: [contact names and titles]
- Competitor: [competitor]
- Segment: [segment]

CONTEXT
I have a call at the time above with the attendees listed. The competitor is in the deal. I want the one page I read before I dial.

PULL FROM THE UNIVERSE
- The deal record: stage, amount, close date, competitors, loss reason if any.
- The contacts on the account, their buying role, and the persona each maps to, with that persona's top pains and objections.
- The battlecard for the competitor: how we win, where we lose, landmines.
- Why we won and lost against the competitor in the segment, with the buyers' own words and the win rate with its sample size.
- One proof point from a similar account.

BUILD
- The deal in three lines.
- The buying group: who is on it, who is missing, what each one cares about.
- The biggest risk, grounded in what sank similar deals, and whether anyone on this deal has raised it.
- The first question to ask, and to whom.
- The proof to bring.

OUTPUT
A one-page brief with a source beside every claim.

GROUNDING
Use only the Universe. Cite the deals, battlecard and quotes behind each point and give n for any rate. Do not invent what the prospect has said or who is on the deal. If the CRM has no contacts on the account, say so.
```

### Find what decides deals like this one

```
Using Calven MCP, tell me what decides deals like the one below.

FILL IN
- Deal: [deal]
- Account: [account]
- Segment: [segment]
- Competitor: [competitor]
- Persona: [champion's persona]

CONTEXT
The account is a company in the segment, evaluating us against the competitor. The champion is the persona above. I want to know the pattern before I guess.

PULL FROM THE UNIVERSE
- Win rate against the competitor overall and in the segment, with sample sizes and the window.
- The deal drivers on deals against the competitor: which helped us, which hurt us, which decided the deal.
- The verbatim reasons buyers gave in those deals.

BUILD
- The three forces that decided those deals, ranked by how often they decided the outcome.
- For each: whether it is live in this deal as far as the record shows, and the question that tests it.

OUTPUT
A short ranked list with the quotes behind it.

GROUNDING
Numbers come from the win/loss and competitive dashboards only, cited with n. Do not generalise from fewer than three deals without saying so.
```

### Pick the proof point for this buyer

```
Using Calven MCP, find the proof point for the deal below.

FILL IN
- Deal: [deal]
- Persona: [persona]
- Segment: [segment]
- Competitor: [competitor]
- Concern: [the concern the buyer voiced]

CONTEXT
The buyer is the persona above at a company in the segment, and cares most about the concern above. I need one story or quote I can use on the call.

PULL FROM THE UNIVERSE
- Customer quotes tagged quantified outcome, time-to-value or competitive win from accounts in the segment or against the competitor.
- The displacement wins on the competitor's battlecard.
- The proof points in our positioning that match the concern.

BUILD
- The single best proof, verbatim and attributed, and why it fits this buyer.
- Two backups.

OUTPUT
Three proof points with source, account and date.

GROUNDING
Verbatim only. Do not sharpen a quote or attach a number the Universe does not hold.
```

### Check your own call plan

```
Using Calven MCP, check my call plan for the deal below.

FILL IN
- Deal: [deal]
- Competitor: [competitor]
- Persona: [persona]
- Plan: [paste your plan: what the deal needs, what you will ask, what you will show]

CONTEXT
The plan covers what I think the deal needs, what I will ask and what I will show. Tell me what I am missing.

PULL FROM THE UNIVERSE
- The deal record and the contacts on the account.
- The battlecard for the competitor and what decided similar deals.
- The persona canvas for the persona.

CHECK
- Which risk from similar deals my plan does not address.
- Which persona on the buying group my plan ignores.
- Which claim in my plan the product brief or battlecard does not support.

OUTPUT
My plan annotated, then the three changes to make.

GROUNDING
Judge only against the Universe and cite it. If my plan is sound, say so.
```

## Ad hoc questions

- Where does [deal] stand and who is on it?
- What is our win rate against [competitor] in [segment], and over how many deals?
- Why did we lose the last three deals to [competitor]? Quote the buyers.
- Which contact roles are missing from [deal] compared with the deals we won?
- What does a [persona] worry about when they evaluate us?
- What landmine should I set against [competitor] on a first call?
- Which customer quote proves time to value for a [segment] buyer?
- What did [competitor] change in the last 60 days?
- Has anyone on [deal] raised [a risk, e.g. hosting, SSO, pricing] yet?
- What is the loss reason on the deals we lost at [account] before?
- Which of our proof points is strongest for a technical buyer?
- What question does the [competitor] battlecard say to ask first?

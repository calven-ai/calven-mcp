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

## Advanced prompts

### Update the odds as the deal facts come in

```
Give me an honest win probability for my deal, starting from our real base rate and updating it fact by fact like a Bayesian would. Use Calven MCP for the base rate and for how much each fact has mattered in deals we've closed.

FILL IN
- Deal: [deal]
- What I know: [paste the facts: champion yes or no, economic buyer met, competitor, pricing discussed, timeline, pilot]
- My gut number: [your current forecast probability]

CONTEXT
My forecast number is a feeling. I want one I can defend in the forecast call, built from what has happened in deals like this one, and I want to see which single fact moves it most.

FROM CALVEN
- Win rate for the deal's segment and size band from the win/loss and ICP dashboards, with n. That's the prior.
- Win rate with and without multi-threading from the persona dashboard, and against the named competitor from the competitive dashboard, with n.
- Closed deals in the segment paged from the CRM mirror with the fields that match my facts: contact roles, competitors, furthest stage, loss reason.

METHOD
- Start at the prior. For each fact, estimate a likelihood ratio from how often it appears on won versus lost deals, and update. Show the running probability after each fact.
- Where the data is thin (under 10 deals), shrink the ratio toward 1 and say so.
- Compare the result with my gut number and explain the gap.
- If you can run code, do the arithmetic in code and show it.

OUTPUT
An update table (fact, ratio, source, probability after), the final number with a range, and the one fact I could change this week that moves it most.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a likelihood ratio for a fact the records don't hold; leave it out and say so.
```

### Replay the deals we lost that looked like this one

```
Find three to five lost deals that looked like mine and replay each one: what would have happened if we'd done one thing differently. Use Calven MCP for the lookalike deals, why they were lost and what the buyers said.

FILL IN
- Deal: [deal]
- My plan for the next two weeks: [paste it]

CONTEXT
Lost deals rarely get a second look, and the next one that looks the same gets lost the same way. I want the lesson before my deal hits the stage where theirs died.

FROM CALVEN
- My deal's segment, size band, competitors, contact roles and stage.
- Lost deals in the same segment with the same competitor or a similar size, paged from the CRM mirror: stage reached, contact roles, loss reason, price and product feedback.
- The survey responses and deal drivers for those deals, with evidence quotes.

METHOD
- Pick the closest three to five and show why each is a match.
- For each, name the turning point: the stage, the moment, the driver ranked as deciding.
- Run the counterfactual: one change we controlled (an earlier exec meeting, a pilot, a different proof point, a second thread). Judge whether the buyer's own words suggest it would have changed the result. Mark it plausible, possible or no.
- Check my plan against every plausible counterfactual.

OUTPUT
A replay table (deal, turning point, counterfactual, verdict, buyer quote), then my plan with the changes it needs, marked.

GROUNDING
Turning points and quotes come from the records, cited. The counterfactual verdict is your judgement and labelled as such. If no lost deal is close, say so.
```

### Build the call as an if-they-say tree

```
Build my next call as a decision tree: if the buyer says this, I ask that, with the branch that leads to a next step. Use Calven MCP for what this persona says, how the competitor gets mentioned and the questions that work.

FILL IN
- Deal: [deal]
- Call goal: [the next step I need: technical evaluation, exec meeting, pilot, pricing]
- Who's on the call: [names and roles]

CONTEXT
I've prepared the first five minutes. Calls turn on the buyer's third answer, and I want to have thought through every likely answer before I'm in it.

FROM CALVEN
- The persona canvases for the people on the call: objections, pains, what they're measured on.
- Quotes from buyers in this segment tagged Objection or Competitor mention, and our reps' discovery questions from won deals.
- The competitor's discovery questions and landmines from their battlecard, if one is in the deal.

BUILD
- The opening question, then the four or five most likely answers, each with my follow-up. Go three levels deep.
- Every leaf ends in an ask for the call goal, a graceful exit, or a flag that the deal is weaker than I think.
- Mark the branch where most similar calls go wrong.
- If you can make files, build it as a single interactive HTML page: click an answer, see the next question.

OUTPUT
The tree as a nested list (or the HTML file), plus a one-screen cheat sheet of the five lines I most need.

GROUNDING
Every buyer answer traces to a canvas or a quote, cited, or is marked as your assumption. Don't invent rep questions; use the recorded ones or label yours.
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
- What is the sales cycle for won deals in [segment], and is [deal] running long against it?
- Which lead source wins most often in [segment], and over how many deals?
- What did the last buyer who chose us over [competitor] say tipped it?
- Which buying trigger is on record for [account], and what do customers with that trigger say they needed?
- Is the [persona] on [deal] a role that shows up on our won deals or our lost ones?
- What does the product brief say about the one capability [deal] is evaluating hardest?

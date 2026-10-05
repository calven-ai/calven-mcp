# Deal prep

**Team:** Account executives · also solutions engineering, sales leadership
**Impact:** High. Every call in every deal starts with it, and the thirty minutes before a call are where most reps improvise.
**Prerequisites:** CRM connected (pipeline category on for MCP), competitors tracked, win/loss surveys running. Better with personas approved and call transcripts ingested.

## What the team is trying to do

Walk into the call knowing where the deal stands, who is in the room, what has sunk similar deals and what to ask first. Done means a one-page brief the rep can read in five minutes: deal facts, the buying group and the gaps in it, the competitor's likely play, the risk nobody has asked about yet, and the proof point that fits. Without the company's own evidence, the brief is the CRM record plus memory, and the risk that cost the last three deals against this competitor stays invisible until the loss review.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the deal facts | Stage, amount, close date, owner, last activity, competitors named | The CRM mirror: the deal row with stage, amount, close date, competitors and loss reason fields | CRM deals |
| 2 | Map the buying group | Who is on the deal, their role, who is missing | Contacts on the account with buying role and lifecycle stage; the personas each one maps to | CRM contacts, personas |
| 3 | Read the persona | What each contact cares about, is measured on, objects to | The persona canvas: goals and KPIs, pains, objections, messaging hooks | Persona canvas |
| 4 | Read the competitor | What the rival will say, where they beat us, where we beat them | The battlecard: how we win, where we lose, landmines, objection handling; their recent moves | Competitor bundle, competitive signals |
| 5 | Find the pattern | What decided similar deals: same competitor, same segment, same persona | Deal drivers and win rate for this competitor and segment; what buyers said at the time | Win/loss dashboard, competitive intelligence dashboard, deal drivers, survey responses |
| 6 | Pick the proof | The customer story or quote that fits this buyer | Quotes tagged competitive win or quantified outcome from similar accounts; displacement wins on the battlecard | Quotes, battlecard proof points |
| 7 | Set the agenda | The questions to ask first, the trap to set, the next step to propose | Discovery questions from the battlecard and the persona's jobs to be done | Battlecard, persona canvas |
| 8 | Check the record | Latest emails, notes and meeting history in the CRM and inbox | Calven does not help here | |
| 9 | Run the call and update the CRM | The call, the notes, the next step | Calven does not help here | |

## Recommended prompts

### Step 1 to 7: the full brief

```
Using Calven MCP, build my call brief for [deal] at [account].

CONTEXT
I have a call at [time] with [contact names and titles]. [Competitor] is in the deal. I want the one page I read before I dial.

PULL FROM THE UNIVERSE
- The deal record: stage, amount, close date, competitors, loss reason if any.
- The contacts on the account, their buying role, and the persona each maps to, with that persona's top pains and objections.
- The battlecard for [competitor]: how we win, where we lose, landmines.
- Why we won and lost against [competitor] in [segment], with the buyers' own words and the win rate with its sample size.
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

[name the deal, the account, the competitor and who is on the call]
```

### Step 5: what sinks deals like this one

```
Using Calven MCP, tell me what decides deals like [deal].

CONTEXT
[Account] is a [segment] company evaluating us against [competitor]. The champion is a [persona]. I want to know the pattern before I guess.

PULL FROM THE UNIVERSE
- Win rate against [competitor] overall and in [segment], with sample sizes and the window.
- The deal drivers on deals against [competitor]: which helped us, which hurt us, which decided the deal.
- The verbatim reasons buyers gave in those deals.

BUILD
- The three forces that decided those deals, ranked by how often they decided the outcome.
- For each: whether it is live in this deal as far as the record shows, and the question that tests it.

OUTPUT
A short ranked list with the quotes behind it.

GROUNDING
Numbers come from the win/loss and competitive dashboards only, cited with n. Do not generalise from fewer than three deals without saying so.

[name the deal, segment, competitor and champion persona]
```

### Step 6: the right proof

```
Using Calven MCP, find the proof point for [deal].

CONTEXT
The buyer is a [persona] at a [segment] company who cares most about [the concern they voiced]. I need one story or quote I can use on the call.

PULL FROM THE UNIVERSE
- Customer quotes tagged quantified outcome, time-to-value or competitive win from accounts in [segment] or against [competitor].
- The displacement wins on the [competitor] battlecard.
- The proof points in our positioning that match [the concern].

BUILD
- The single best proof, verbatim and attributed, and why it fits this buyer.
- Two backups.

OUTPUT
Three proof points with source, account and date.

GROUNDING
Verbatim only. Do not sharpen a quote or attach a number the Universe does not hold.

[name the persona, segment, competitor and the buyer's concern]
```

### Review mode: check my own prep

```
Using Calven MCP, check my call plan for [deal].

CONTEXT
Below is my plan for the call: what I think the deal needs, what I will ask, what I will show. Tell me what I am missing.

PULL FROM THE UNIVERSE
- The deal record and the contacts on the account.
- The battlecard for [competitor] and what decided similar deals.
- The persona canvas for [persona].

CHECK
- Which risk from similar deals my plan does not address.
- Which persona on the buying group my plan ignores.
- Which claim in my plan the product brief or battlecard does not support.

OUTPUT
My plan annotated, then the three changes to make.

GROUNDING
Judge only against the Universe and cite it. If my plan is sound, say so.

[paste your plan]
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

## Good practice

- Name the deal exactly as the CRM has it. A close match returns the wrong deal or nothing.
- Ask for sample sizes. A 100% win rate over two deals is not a pattern.
- Ask what is missing before the call: contacts not in the CRM, no battlecard for this competitor, no survey on the similar deals. That is the gap to close, not a reason to guess.
- Paste what the prospect actually said when you want the brief tailored. Calven holds the company's evidence, not this week's email thread.
- Keep the brief to one page. Ask for the top risk and the first question, not everything the Universe knows.
- Run the brief again before the next call in the same deal. The deal record and the signals move.

## Not covered today

- The CRM record itself stays in the CRM. Calven reads the mirror; the rep updates the source.
- No live news on the prospect. A funding round announced this morning is not in the Universe until an agent run records a trigger on the account.
- Emails, meeting notes and calendar context come from the rep's own tools. The AI tool can read them alongside the Universe if it has access, but Calven does not hold them.
- Battlecards and personas are updated in Calven by their agents and approved by product marketing. The brief reads them; it does not change them.

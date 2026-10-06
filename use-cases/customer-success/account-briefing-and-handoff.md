# Account briefing and handoff


You've just picked up an account, and without the record the handoff is a Slack message and the customer repeats themselves. You get a one-page brief you read in five minutes: the deal, the people, the stated needs, the alternatives considered, the risks and the promises, plus a handoff checklist for the rep. Calven pulls it from everything the company already knows about the account.

## Prompts

### Build a one-page account brief

```
Using Calven MCP, brief me on the account below before my first call as their CSM.

FILL IN
- Account: [account]
- Signed: [signature date]

CONTEXT
The account signed on the date above. I am taking over from the rep. I want everything the company knows, in one page.

PULL FROM THE UNIVERSE
- The CRM deal: what they bought, amount band, stage history, lead source, competitors in play, owner.
- The contacts on the account with buying role and the persona each maps to.
- The deal drivers that decided the deal, the buyer's survey answers if any, and the customer quotes from the sales calls, by category.
- Vendor quotes from our rep on those calls: value claims, caveats and next steps.
- The account's industry, size, region, ICP fit tier and triggers.

BUILD
- Why they bought, in their words (three drivers, each with the quote).
- Who is who: a table of contacts, role, persona, what each said.
- What they worried about: objections, the competitor they considered, what tipped it.
- What was promised: each rep claim with whether the product brief supports it.
- Risks I should watch, grounded in what was said.
- Five questions for the first call that build on the above instead of repeating it.

OUTPUT
A one-page brief with sources.

GROUNDING
Use only the Universe and cite it. Do not infer needs from the industry. If the account has no calls or survey, say so and give me the CRM facts alone.
```

### Check rep promises against the brief

```
Using Calven MCP, check what our rep promised the account below against the product brief.

FILL IN
- Account: [account]

CONTEXT
I want to know before the kickoff whether anything said in the sales cycle is not true or not shipped.

PULL FROM THE UNIVERSE
- Vendor quotes from the account's calls tagged value claim, differentiation, proof point, pricing or next step.
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes since the deal closed.

CHECK
- For each rep claim: supported by the brief, overstated, or not in the brief.
- Anything that changed since the close that affects a promise.

OUTPUT
A table of claims with verdicts, then the two I should raise with the rep.

GROUNDING
Judge only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### Map the account's people to personas

```
Using Calven MCP, map the people on the account below to our personas.

FILL IN
- Account: [account]

CONTEXT
I want to know who I am talking to and what each cares about.

PULL FROM THE UNIVERSE
- The contacts on the account with title, buying role and lifecycle stage.
- The persona canvas each maps to: goals and KPIs, pains, objections, messaging hooks.
- Each contact's own quotes from the calls.

BUILD
- A table: contact, role, persona, what the persona cares about, what this person actually said.
- Who is missing: personas we usually need on a healthy account that have no contact here.

OUTPUT
The table and the gap.

GROUNDING
Use only the Universe and cite it. Do not assign a persona to a contact whose title does not fit; say unknown.
```

### Write the rep handoff checklist

```
Using Calven MCP, write the handoff checklist for the account below between the rep and me.

FILL IN
- Account: [account]
- Rep: [rep]

CONTEXT
We have a 30-minute handoff. I want to leave it with answers, not stories.

PULL FROM THE UNIVERSE
- The deal record, drivers and quotes for the account.
- The rep's own quotes on the calls.

BUILD
- Ten questions for the rep, each tied to something in the record: a promise, a worry, a person, a competitor, a timeline.
- Three facts I will confirm with the customer rather than the rep.

OUTPUT
The checklist.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Backtest which handoff signals predict churn

```
Find out which facts about a deal at handoff predicted a lost renewal, then score my new account on them. Use Calven MCP for the closed renewals and the original deals behind them.

FILL IN
- Account: [account]
- Renewal history: [attach your renewal list with outcome and churn reason if the CRM mirror lacks renewal deals, or write "none"]

CONTEXT
Every handoff brief says the account looks fine. I want to know which things we can see at signature (segment, fit tier, competitor in the deal, who was threaded, what they worried about) have predicted a lost renewal, so I can watch the right ones from day one.

FROM CALVEN
- Renewal deals in the CRM mirror, won and lost, paged in full, with loss reason.
- The original new-business deal for each of those accounts: ICP fit tier, deal size band, competitors, contact roles, complexity, product feedback.
- Deal drivers and survey answers from those original deals, where surveyed.
- The same fields for the account above.

BACKTEST
- Join each renewal to its original deal. List the candidate signals and their hit rate in renewed versus lost accounts.
- Fit a simple scoring rule (a point per signal, or a logistic regression if you can run code) and check it on a holdout: precision, recall and how many lost renewals it would have flagged.
- Say plainly when the sample is too small to trust a signal. Fewer than ten lost renewals means directional only.
- Score the account above on the rule and name the two signals to watch in its first 90 days.

OUTPUT
A table of signals with counts and lift, the scoring rule with its holdout result, and the account's score with the watch list.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Counts come from rows you paged, labelled as row counts, not dashboard rates. Don't invent a churn reason the record doesn't hold.
```

### Run a Delphi panel on the account

```
Run a three-round Delphi panel on how this account's first year goes. Use Calven MCP to brief each panellist from the deal record and the buyers' own words.

FILL IN
- Account: [account]
- What I know so far: [paste kickoff notes, the order form summary, anything sales told you]

CONTEXT
The AE thinks the account is a lock, the SE has doubts about the integration, and I've had one call. One confident voice shouldn't set the plan. I want independent estimates that converge, with the reasoning visible.

FROM CALVEN
- The won deal: stage history, competitors, contact roles, deal drivers and the buyer's survey answers.
- Quotes from the account's sales calls, by category, plus our reps' own quotes (value claims, caveats, next steps).
- The product brief's known weaknesses for the use case they bought.

METHOD
- Seat four panellists, each reading only the evidence their role would have seen: the AE, the SE, a CSM, and the customer's sponsor.
- Round 1: each gives a probability of renewal, of expansion inside 12 months, and of a serious escalation, with three reasons citing evidence.
- Round 2: show everyone the anonymised spread and reasons. Each revises or defends.
- Round 3: final estimates. Report the median, the range and where they still disagree.

OUTPUT
A one-page panel report: the three estimates as median and range, the disagreement that matters most, and the evidence that would settle it in the first 30 days.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Panellist reasons must cite a quote, a driver or the brief. Don't invent a promise or a stakeholder the record doesn't hold.
```

### Red-team the handoff as their sponsor

```
Read the handoff from the customer's side and find what they'll hold us to that nobody wrote down. Use Calven MCP for what our reps said, what the buyers said they needed, and what the product does.

FILL IN
- Account: [account]
- Handoff notes: [paste the sales handoff note or CRM summary]

CONTEXT
The sponsor remembers the sales cycle as a set of promises. Our handoff note remembers it as a closed deal. The gap between those two is the first escalation.

FROM CALVEN
- Our reps' quotes on the deal's calls: value claims, proof points, caveats, next steps.
- The buyers' quotes tagged Goal, Job to be done and Objection.
- The product brief's capabilities, integrations and known weaknesses.

RED-TEAM
- Build a promise ledger: every expectation the buyer could reasonably hold, from either side's words, with the quote behind it.
- Classify each: in the brief, partly in the brief, not in the brief, or never discussed.
- Then play the sponsor at the 90-day check-in, reading the handoff note cold. List what they'd say is missing, wrong or late, in their own voice.
- Rank the gaps by how much each would hurt the renewal and how cheap it is to close early.

OUTPUT
The promise ledger as a table, the sponsor's critique in under 200 words, and three things to say at kickoff to reset expectations.

GROUNDING
Every promise cites a rep or buyer quote. Don't treat a buyer's wish as our promise unless a rep agreed to it on the record, and don't invent a capability the brief doesn't list.
```

## Ad hoc questions

- Why did [account] choose us? Quote the buyer.
- Who was the champion on the [account] deal, and who was the economic buyer?
- Which competitor did [account] evaluate, and what tipped it?
- What did [contact] at [account] say they needed in the first 90 days?
- Did our rep promise anything to [account] that is not in the product brief?
- What objections did [account] raise during the sale?
- What is [account]'s ICP fit tier and segment?
- Which persona is [contact]?
- What did [account] say about pricing?
- Has anything changed in the product since [account] signed?
- What lead source did the [account] deal come from?
- Summarise the [account] sales calls in five lines.
- Which of [account]'s contacts never spoke on a recorded call?
- What did our rep caveat on the [account] deal that the handoff note leaves out?
- How long did the [account] deal take compared with the average sales cycle for its segment?
- Which quotes from [account] would a skeptical sponsor still remember at renewal?
- What did buyers in [segment] say went wrong in their first 90 days?
- Is there a buyer quote from [account] that contradicts what the rep wrote in the CRM?

# Awards submissions


The deadline is close and you need an entry that hits every criterion and survives a judge who checks. You come away with an entry built on customers, numbers and differentiators that exist, ready for the customer to approve and submit on time. Calven pulls the proof from calls, deals and documents so you're not assembling it by hand under the deadline.

## Prompts

### Map award criteria to your evidence

```
Using Calven MCP, map the criteria of the award below to our evidence.

FILL IN
- Award: [award, category]
- Criteria: [paste the entry criteria and word limits]

CONTEXT
I need, for each criterion, what we can prove.

PULL FROM THE UNIVERSE
- Our positioning: unique attributes, value themes, proof points.
- Customer quotes tagged Quantified outcome, Time-to-value, Competitive win and Consolidation, with account and approval state.
- Surveyed deals with a positive summary and the win drivers behind them.
- The product brief for any capability claim.

BUILD
- A table: criterion, the differentiator or outcome that answers it, the evidence (quote, deal, number) with source, and the gap if none.
- The two or three accounts whose evidence covers the most criteria.

OUTPUT
The table and the account shortlist, with sources.

GROUNDING
Use only quotes, deals and documents in the Universe and cite them. Do not invent an outcome or a number; write "no evidence on record" where that is true.
```

### Draft the entry around one customer

```
Using Calven MCP, draft the award entry around the account below.

FILL IN
- Award: [award]
- Account: [account]
- Criteria: [paste the criteria with word limits]
- Evidence map: [paste the evidence map]

CONTEXT
The account is the customer. Write to the rubric, plain, no superlatives.

PULL FROM THE UNIVERSE
- Every quote on record from the account, verbatim.
- The deal context for the account.
- Our positioning and the product brief for the capability lines.

WRITE
- One section per criterion, within its limit, leading with the outcome and citing the evidence.
- The customer's words verbatim where a quote is allowed.
- A 50-word summary for the entry's opening.

OUTPUT
The entry in sections, with a source list and the lines the customer must approve.

GROUNDING
Use only the evidence map and the Universe and cite. Do not round numbers up or add capabilities the brief does not list.
```

### Check the entry before the customer sees it

```
Using Calven MCP, check this award entry before the customer sees it.

FILL IN
- Entry: [paste the entry]

CONTEXT
The entry is the draft submission.

PULL FROM THE UNIVERSE
- The product brief and claims register.
- The quotes on record for the customer named.

CHECK
- Every capability and number: correct, wrong, stale or unverified.
- Every quote: verbatim or edited, and its approval state.
- Any "first", "only" or "leading" line: supported by a proof point or to cut.

OUTPUT
The entry annotated and the list for the customer.

GROUNDING
Judge only against the Universe and cite.
```

## Advanced prompts

### Score the entry as a judging panel

```
Score my award entry as a three-judge panel would, over two rounds, and tell me what lifts the score. Use Calven MCP for the customer evidence and the differentiators we can prove.

FILL IN
- Award and category: [award and category]
- Judging criteria: [paste the criteria and weights]
- Entry draft: [paste the entry]
- Customer: [account]

CONTEXT
Judges read dozens of entries in a sitting and score fast. I want an honest score before we submit, not after the shortlist comes out without us.

FROM CALVEN
- The customer's quotes, especially those tagged Quantified outcome or Time-to-value, and their win/loss survey if they have one.
- Our positioning's unique attributes and proof points.
- Claims with a concern flagged that the entry repeats.

METHOD
- Build three judges with different lenses: an industry practitioner, a former winner and a numbers-first analyst.
- Round one: each scores every criterion alone, with a one-line reason.
- Show each judge the others' anonymised scores and reasons. Round two: each revises or holds, and explains. This Delphi round pulls out what one judge saw and the others missed.
- Report the consensus score per criterion and where the judges still disagree.

OUTPUT
A score table by criterion and judge across both rounds, the weighted total, and the three edits that add the most points, each tied to evidence on record.

GROUNDING
Every outcome in the edits is a Calven quote or record, cited. Don't invent a metric the customer didn't say; flag where one would win points and who could supply it.
```

### Pick the awards worth your hours

```
Rank the awards on my shortlist by expected value and tell me which to enter with the hours I have. Use Calven MCP for the customer outcomes and differentiators each entry would need.

FILL IN
- Shortlist: [paste the awards: category, deadline, fee, hours to write, past winners if known]
- Hours available: [hours this quarter]
- What a win is worth: [what a win does for you: sales use, press, recruiting, or a rough value]

CONTEXT
Every award wants the same scarce thing: a customer with a number who'll go on record. I can't enter everything, and a weak entry costs the same hours as a strong one.

FROM CALVEN
- Quotes tagged Quantified outcome, Competitive win and Time-to-value, grouped by account and segment.
- Our positioning's unique attributes and proof points.
- Wins by segment from the win/loss dashboard, with n.

MODEL
- For each award, match the strongest evidence we hold to its criteria and estimate a win probability as a range, with the reasoning.
- Expected value is probability times value, minus the fee and the hours at my rate. Show low and high.
- Pick the best set within my hours: the entries that together give the most value without using the same customer story twice in one season.
- Run a sensitivity: which award's place in the ranking flips if its win probability is ten points off.

OUTPUT
A ranked table: award, evidence match, win probability range, expected value, hours, enter or skip. Then the entry calendar for the ones to enter.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Win probabilities are your assumptions; say so and show the range.
```

## Ad hoc questions

- Which customers have quotes tagged Quantified outcome in [segment]?
- What differentiators does our positioning claim, with proof points?
- Why did [account] choose us, according to their survey?
- Do we have a Competitive win quote involving [competitor]?
- Which of our proof points has a number behind it?
- Is "[claim]" in the product brief?
- Which customer quotes are approved for marketing use this quarter?
- What was the deal size band and segment for [account]?
- Which customers have both a Quantified outcome quote and a completed win/loss survey?
- Which of our differentiators has no customer quote behind it?
- Which customer outcome on record isn't among our proof points?
- What did [account] say about time to value, word for word?
- Which deal drivers decided our wins against [competitor], for a "why customers switch" criterion?
- Which trend makes [category] timely for a judge this year?
- Which claims in this entry have a concern flagged: [paste]

# Comparative content review


You've got a comparison page, a competitive teardown, an outbound battlecard or an ad that names a rival, and it needs clearing. You come away knowing every statement about the rival traces to a dated source, every statement about us traces to the product brief, the criteria are objective, and the piece is honest about where we lose. Calven holds what the company can actually evidence about the competitor, so you're not working from a hunch and a website that may have changed last week.

## Prompts

### Check every statement in the comparison

```
Using Calven MCP, review this comparison against what we can evidence about the competitor and about ourselves.

FILL IN
- Competitor: [competitor]
- Draft: [paste the draft]
- Max source age: [months, e.g. 6]

CONTEXT
The draft names the competitor. Before it ships I need every statement checked against our own records, not against opinion.

PULL FROM THE UNIVERSE
- The dossier and battlecard for the competitor: their positioning, product, pricing and packaging, strengths, weaknesses, feature comparison, and the bullshit detector.
- Their recent signals, with dates.
- Our product brief and the claims register for every statement about us.

CHECK
- Split the draft into statements about the competitor, statements about us, and direct comparisons.
- For each: supported (cite the section and date), partly supported (say what is missing), or not in the Universe.
- Flag any statement about the competitor that rests on a source older than the max source age.

OUTPUT
The draft annotated inline with a verdict per statement, then a list of the statements with no support.

GROUNDING
Cite a source for every "supported". Do not use the AI tool's own knowledge of the competitor. Do not soften an unsupported statement; mark it. This is a fact check, not legal advice.
```

### Test the criteria and the win claims

```
Using Calven MCP, check the comparison criteria and the "we win" claims in this piece.

FILL IN
- Competitor: [competitor]
- Window: [time window, e.g. last four quarters]
- Comparison: [paste the comparison table or section]

CONTEXT
The comparison is the table or section where we claim to beat the competitor. I need to know whether the criteria are objective and whether our deal evidence supports the claims.

PULL FROM THE UNIVERSE
- The feature comparison and pricing sections of the competitor's dossier, and our product brief.
- Our win rate against the competitor over the window, with the sample size.
- The deal drivers that helped us in deals against them, and the displacement wins and proof points in the battlecard.

CHECK
- For each criterion: is it stated, measurable and applied the same way on both sides? Name the ones that are not.
- For each "we win" or "customers prefer" claim: the deal evidence behind it, or none.
- Say whether the win rate is large enough to cite (give n) and how the dashboard words it.

OUTPUT
A table of criteria with a verdict, then the win claims with their evidence, then the claims to cut.

GROUNDING
Numbers come only from the Insights dashboard, cited with n and window. Do not compute a rate from rows. Do not invent deal outcomes.
```

### Find where the piece hides their strengths

```
Using Calven MCP, tell me where this piece hides that the competitor is stronger.

FILL IN
- Competitor: [competitor]
- Draft: [paste the draft]

CONTEXT
A comparison that only lists where we win reads as marketing and invites a challenge. I want the places where our own records say the rival is better.

PULL FROM THE UNIVERSE
- The competitor's battlecard: their strengths and the "where we lose" section.
- The loss drivers in deals we lost to them, with the buyer's words.

CHECK
- Each strength of theirs the draft omits or contradicts.
- Each loss driver the draft argues against without evidence.
- A fair one-line acknowledgement for each, in our messaging language.

OUTPUT
The list of omissions with the suggested line for each.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent strengths for the competitor, and do not minimise the ones recorded.
```

### Write the review verdict memo

```
Using Calven MCP, write the review memo for this comparative piece.

FILL IN
- Competitor: [competitor]
- Annotated draft: [paste the annotated draft]

CONTEXT
I have run the statement check, the criteria check and the honesty check. I need a short memo for the author and the approver.

PULL FROM THE UNIVERSE
- The competitor's battlecard and dossier, the product brief and the claims register, for the citations.

BUILD
- Verdict: clear, clear with edits, or hold.
- Required edits: the statement, why, the replacement wording and its source.
- Statements to verify outside Calven: anything about the competitor the Universe does not cover.
- The source date of the oldest statement we rely on.

OUTPUT
A one-page memo.

GROUNDING
Cite every required edit. Do not add legal conclusions; state what the company's records support and what they do not.
```

## Advanced prompts

### Draft their lawyer's letter first

```
Write the complaint the competitor's counsel would send about our comparison page, then tell me which paragraphs would stick. Use Calven MCP for what we can evidence about them and the dates of that evidence.

FILL IN
- Competitor: [competitor]
- Draft: [paste the comparison page, ad or teardown]
- Their known sensitivities: [paste any past complaint or takedown from them, or write "none"]

CONTEXT
The authors read this page as fair. The rival's legal team won't. I'd rather read their letter now than after launch, while every sentence can still change.

FROM CALVEN
- The competitor's dossier and battlecard: product, pricing and packaging, strengths, feature comparison, sources and freshness.
- Their competitive signals, with dates, so stale statements show.
- Our product brief and claims register rows for every statement about us.

RED-TEAM
- Write the letter as their counsel: each objection quotes our sentence, says why it's false, misleading, unverifiable or out of date, and demands a fix.
- Use their strongest argument, not a strawman. Where our dossier records their strength or a recent change, use it against us.
- Then switch sides. For each objection, give our best response from the evidence, and rate whether the objection sticks: holds, partly holds, fails.

OUTPUT
The letter (under 500 words), then a table: our sentence, their objection, our evidence with date, verdict, the edit that makes the objection fail.

GROUNDING
Every fact about the competitor comes from the Universe, cited with its date. Their arguments may be your construction, but label any fact you supply as your assumption. Don't invent a product or price change nobody recorded. This is a stress test, not legal advice.
```

### Model how fast each statement goes stale

```
Estimate how likely each statement about the competitor is to still be true on the day we publish and six months later. Use Calven MCP for the source date of each statement and how often this rival changes things.

FILL IN
- Competitor: [competitor]
- Draft: [paste the draft]
- Publish date: [date]
- Review cycle: [how often we re-review live comparative content, e.g. every quarter]

CONTEXT
A comparison that was true when it was written is the most common way these pages go wrong. Pricing and packaging move fastest, positioning slower. I want to know which statements need a re-check date and how short it should be.

FROM CALVEN
- The dossier and battlecard sections each statement rests on, with the sources and freshness section.
- The competitor's signals over the last two years, by signal type: pricing change, launch, messaging shift.

MODEL
- Bucket each statement by what it's about: pricing, packaging, feature, integration, positioning, company fact.
- From the signal history, estimate the monthly rate of change per bucket for this rival. Treat each bucket as an exponential decay and compute the probability the statement still holds at publish and at six months.
- Flag the statements below 80% at publish and the ones that fall below 80% before the next review.
- If you can run code, plot the survival curve per bucket and show the rate behind it.

OUTPUT
A table: statement, bucket, source date, probability true at publish, at six months, re-check date. Then the statements to re-verify before launch.

GROUNDING
Label every rate as Calven (counted from signals, with n), or your assumption where signals are thin. Say when a bucket has too few signals to estimate. Don't treat the AI tool's knowledge of the competitor as a source.
```

### Hold a hearing on the disputed lines

```
Run a hearing on the comparison's disputed lines: one side argues to keep each, one argues to cut it, and a judge rules on the evidence. Use Calven MCP for the record both sides argue from.

FILL IN
- Competitor: [competitor]
- Disputed lines: [paste the lines marketing wants and legal doubts]
- Window: [time window, e.g. last four quarters]

CONTEXT
Marketing and legal have argued about the same five lines for a week. I want both cases made at their strongest, on the same record, and a ruling each side can read.

FROM CALVEN
- The battlecard: how we win, where we lose, proof points and displacement wins.
- Win rate against the competitor over the window, with n, from the competitive intelligence dashboard.
- Deal drivers in deals against them and quotes that mention them, verbatim.
- The product brief sections the lines touch.

METHOD
- For each line, the advocate argues it's objective, verifiable and current, citing the record. The challenger argues it isn't, citing the same record.
- The judge applies three tests: is the basis stated, is it the same on both sides, is the evidence recent and large enough to rely on. The judge rules keep, keep with the stated basis added, or cut.
- Each ruling is two sentences and names the deciding piece of evidence.

OUTPUT
Per line: the two arguments in three sentences each, the ruling, and the final wording. Then a one-paragraph summary for the approver.

GROUNDING
Every argument cites the Universe. Rates come only from the dashboard, with n and window. The judge may not rely on anything neither side cited. Not legal advice.
```

## Ad hoc questions

- What does our battlecard say we lose to [competitor] on?
- What is our win rate against [competitor] over the last four quarters, with n?
- When was the [competitor] dossier last updated, and what are its sources?
- What did [competitor] change in the last 90 days?
- Does our feature comparison with [competitor] cover [feature]?
- What does the bullshit detector section say about [competitor]'s claims?
- Do we have a displacement win against [competitor] we can cite?
- Which customer quotes mention [competitor]?
- Is "[statement about competitor]" in the dossier?
- What pricing do we record for [competitor], and from when?
- Which of our claims in this draft are not in the product brief: [paste]
- Which loss drivers against [competitor] does this piece argue against: [paste]
- Which statements in our [competitor] battlecard rest on sources older than six months?
- What pricing change has [competitor] made since our comparison page went live?
- Where do we lose to [competitor] on deals, by loss reason, with n?
- Which of [competitor]'s strengths does no piece of our comparative content mention?
- Do buyers who chose [competitor] describe them the way our "vs" page does?

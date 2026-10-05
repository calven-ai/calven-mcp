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

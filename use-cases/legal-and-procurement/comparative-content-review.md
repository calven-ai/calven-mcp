# Comparative content review

**Team:** Legal and procurement · also product marketing, content marketing, competitive intelligence
**Impact:** High. A "vs" page or competitive ad names a rival in public. Every statement about them has to be objective, verifiable and current, and the people who wrote it are the least neutral readers. The Universe holds what the company can actually evidence about the competitor.
**Prerequisites:** competitors tracked (battlecard, deep dive, signals). Better with win/loss surveys running (deal drivers and competitor win rates) and call transcripts ingested (customer quotes mentioning the competitor). Strategy documents approved for the company's own side of the comparison.

## What the team is trying to do

Clear a comparison page, a competitive teardown, a battlecard that leaves the building, or an ad that names a competitor. Done means every statement about the rival traces to a dated source, every statement about the company traces to the product brief, the comparison criteria are objective, and the piece is honest about where the company loses. Without the Universe the reviewer has a draft, a hunch and a competitor website that may have changed last week.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Separate the statements | Split the draft into statements about the competitor, statements about us, and comparisons | Calven does not help here; the AI tool does this from the pasted draft | |
| 2 | Check the competitor statements | Confirm each against what the company has recorded about the rival, with the source and date | The competitor's dossier and battlecard (positioning, product, pricing, strengths, weaknesses, feature comparison, bullshit detector), recent signals | Competitor bundle, deep dive, competitive signals |
| 3 | Check our own statements | Confirm each capability, integration, price and outcome claim | The product brief, the claims register, positioning proof points | Product brief, claims, positioning |
| 4 | Check the comparison criteria | Make sure each comparison rests on objective, stated criteria and the same basis on both sides | The feature comparison section of the dossier, the pricing and packaging sections on both sides | Deep dive, product brief |
| 5 | Check the evidence for "we win" | Confirm outcome and preference claims with deal evidence | Win rate against the competitor with n and window, deal drivers that helped, displacement wins and proof points | Competitive intelligence dashboard, deal drivers, battlecard |
| 6 | Check honesty | Make sure the piece does not hide where the rival is stronger | "Where we lose" and the strengths section of the battlecard, loss drivers | Battlecard, deal drivers |
| 7 | Check freshness | Flag statements the rival may have changed since the source date | Signal dates and the dossier's sources and freshness section | Competitive signals, deep dive |
| 8 | Trademark and tone | Check how the rival's name and marks are used, and the tone of the comparison | Calven does not help here | |
| 9 | Write the verdict | Clear, clear with edits, or block | Suggested rewording that stays inside the evidence | Battlecard, product brief |

## Recommended prompts

### Step 2 and 3: statement-by-statement check

```
Using Calven MCP, review this comparison against what we can evidence about [competitor] and about ourselves.

CONTEXT
Below is a draft that names [competitor]. Before it ships I need every statement checked against our own records, not against opinion.

PULL FROM THE UNIVERSE
- The dossier and battlecard for [competitor]: their positioning, product, pricing and packaging, strengths, weaknesses, feature comparison, and the bullshit detector.
- Their recent signals, with dates.
- Our product brief and the claims register for every statement about us.

CHECK
- Split the draft into statements about [competitor], statements about us, and direct comparisons.
- For each: supported (cite the section and date), partly supported (say what is missing), or not in the Universe.
- Flag any statement about [competitor] that rests on a source older than [months] months.

OUTPUT
The draft annotated inline with a verdict per statement, then a list of the statements with no support.

GROUNDING
Cite a source for every "supported". Do not use the AI tool's own knowledge of [competitor]. Do not soften an unsupported statement; mark it. This is a fact check, not legal advice.

[paste the draft and name the competitor]
```

### Step 4 and 5: criteria and deal evidence

```
Using Calven MCP, check the comparison criteria and the "we win" claims in this piece.

CONTEXT
Below is the comparison table or the section where we claim to beat [competitor]. I need to know whether the criteria are objective and whether our deal evidence supports the claims.

PULL FROM THE UNIVERSE
- The feature comparison and pricing sections of the [competitor] dossier, and our product brief.
- Our win rate against [competitor] over [window], with the sample size.
- The deal drivers that helped us in deals against them, and the displacement wins and proof points in the battlecard.

CHECK
- For each criterion: is it stated, measurable and applied the same way on both sides? Name the ones that are not.
- For each "we win" or "customers prefer" claim: the deal evidence behind it, or none.
- Say whether the win rate is large enough to cite (give n) and how the dashboard words it.

OUTPUT
A table of criteria with a verdict, then the win claims with their evidence, then the claims to cut.

GROUNDING
Numbers come only from the Insights dashboard, cited with n and window. Do not compute a rate from rows. Do not invent deal outcomes.

[paste the comparison and name the competitor and the window]
```

### Step 6: the honesty check

```
Using Calven MCP, tell me where this piece hides that [competitor] is stronger.

CONTEXT
A comparison that only lists where we win reads as marketing and invites a challenge. I want the places where our own records say the rival is better.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: their strengths and the "where we lose" section.
- The loss drivers in deals we lost to them, with the buyer's words.

CHECK
- Each strength of theirs the draft omits or contradicts.
- Each loss driver the draft argues against without evidence.
- A fair one-line acknowledgement for each, in our messaging language.

OUTPUT
The list of omissions with the suggested line for each.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent strengths for the competitor, and do not minimise the ones recorded.

[paste the draft and name the competitor]
```

### Step 9: the verdict memo

```
Using Calven MCP, write the review memo for this comparative piece.

CONTEXT
I have run the statement check, the criteria check and the honesty check. I need a short memo for the author and the approver.

PULL FROM THE UNIVERSE
- The [competitor] battlecard and dossier, the product brief and the claims register, for the citations.

BUILD
- Verdict: clear, clear with edits, or hold.
- Required edits: the statement, why, the replacement wording and its source.
- Statements to verify outside Calven: anything about [competitor] the Universe does not cover.
- The source date of the oldest statement we rely on.

OUTPUT
A one-page memo.

GROUNDING
Cite every required edit. Do not add legal conclusions; state what the company's records support and what they do not.

[paste the annotated draft and name the competitor]
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

## Good practice

- Paste the whole piece, including the comparison table. Criteria problems only show up in the table.
- Ask for the date of every competitor source. A supported statement from eighteen months ago is a freshness risk.
- Name the competitor as Calven tracks it. A product name or an abbreviation may not resolve.
- Run the honesty check on every piece. The omissions are what a challenge is built on.
- Do not let the AI tool fill a gap from its own knowledge of the competitor. "Not in the Universe" goes to the competitive intelligence agent in the app, not into the page.
- Keep the memo with the piece. The citations are the substantiation file.

## Not covered today

- Live checks of the competitor's website or pricing page. The competitive intelligence agent monitors them in the app; MCP reads what it recorded.
- Trademark use, fair-use and tone judgment. That stays with counsel.
- Legal risk assessment under advertising law. The output is what the company's records support.
- Updating the battlecard or dossier. That happens in Calven.

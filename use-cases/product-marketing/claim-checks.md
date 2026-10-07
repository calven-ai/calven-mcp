# Claim checks

**Related:** [Claim substantiation](../legal-and-procurement/claim-substantiation.md) is the legal team's audit of the same register.

Something's about to ship and you need to know it says nothing the product doesn't do, the price list doesn't say, a competitor doesn't match or a customer didn't say. You walk away with every claim marked correct, wrong, stale, unverified or unsupported, with the accurate wording next to it. Calven holds the approved product brief and a record of what the site already claims, so you skip the email thread with product.

## Prompts

### Fact-check product and pricing claims

```
Using Calven MCP, fact-check the asset below before it ships.

FILL IN
- Asset: [paste the asset]
- Window: [time window for product changes, e.g. last quarter]

CONTEXT
Every product, integration, architecture and pricing claim in the asset must be right.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging.
- Product changes in the window and the documents they left stale.
- The claims register, for anything already flagged.

CHECK
- List every claim in the asset.
- Mark each correct, wrong, stale, or not in the brief.
- For each flag, give the accurate wording and the section it comes from.

OUTPUT
The asset annotated inline, a claims table with verdicts, and the claims a human must take to product.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief" rather than guessing.
```

### Check the competitive claims

```
Using Calven MCP, check the competitive claims in this asset.

FILL IN
- Asset: [paste the asset]
- Competitors: [the competitors it names or implies]

CONTEXT
The asset names or implies the competitors. Legal will ask for evidence on every comparison.

PULL FROM THE UNIVERSE
- The deep dive and feature comparison for each competitor named.
- The battlecard, for the "where we lose" entries that contradict a claim.

CHECK
- For each comparative claim: supported by the dossier, contradicted, or unknown.
- For "only we" and "first" claims: whether the dossier shows a rival with the same capability.
- The wording that would survive a challenge.

OUTPUT
A table: claim, verdict, evidence, safe wording.

GROUNDING
Use only the dossiers in the Universe and cite the section and date. Mark "unknown" where they are silent. Never infer a rival's gap from our strength.
```

### Check the proof and outcome claims

```
Using Calven MCP, check the proof points in this asset.

FILL IN
- Asset: [paste the asset]

CONTEXT
The asset cites customer outcomes, numbers and quotes.

PULL FROM THE UNIVERSE
- Customer quotes, by highlight type (quantified outcome, time to value, competitive win).
- The proof points in our positioning and the evidence behind them.
- Win/loss drivers that support an outcome claim.

CHECK
- For each number, quote or outcome: which quote or proof point it comes from, verbatim.
- Where the asset strengthens a quote beyond what was said.
- Where no evidence exists.

OUTPUT
A table: claim, source, verbatim, verdict (supported, overstated, unsupported).

GROUNDING
Quotes verbatim and cited. A paraphrase that adds a number is overstated. Do not invent sources.
```

### List the unsupported claims on a site section

```
Using Calven MCP, list the unsupported claims on the site section or document below.

FILL IN
- Section: [site section or document]

CONTEXT
Before the quarterly content review I want the claims the product intelligence agent has flagged.

PULL FROM THE UNIVERSE
- The claims register, filtered to that section or document and status new or reviewed.
- The drift findings for the same documents.

BUILD
- A table: claim, where it appears, claim type, concern, status.
- Grouped by document, with the count per document.

OUTPUT
The table and the five claims to fix first.

GROUNDING
List only what the register holds. An empty list means nothing is flagged; say so.
```

## Advanced prompts

### Cross-examine the claims as opposing counsel

```
Cross-examine every claim on the page the way a competitor's lawyer would in a false-advertising complaint. Use Calven MCP for the product brief, the claims register and the evidence behind each claim.

FILL IN
- Page or asset: [paste the copy]
- Competitor named: [competitor, or write "none"]

CONTEXT
"Fastest", "only" and "50% less time" read fine in a review. They read differently to a competitor's counsel hunting for a complaint, or to procurement wanting it in the contract. I want to know which claims survive.

FROM CALVEN
- The product brief: capabilities, integrations, pricing, known weaknesses.
- Claims register entries matching the copy, with status and concern.
- Quotes with the Quantified outcome highlight and analyst findings behind any statistic.
- The competitor's dossier, for any comparative claim.

METHOD
- Extract every claim, explicit or implied: superlatives, "only", numbers, comparisons.
- For each, run the cross-examination: three hostile questions counsel would ask, the evidence we'd produce, and whether it holds.
- Classify the substantiation: documented in the brief, customer evidence with n, third party, or none.
- Rate exposure as low, medium or high, with the reason.
- Rewrite each medium or high claim to the strongest version the evidence supports.

OUTPUT
A table: claim, hostile questions, our evidence, verdict, exposure, safe rewrite. Then the copy with every change marked.

GROUNDING
Cite the brief section, register entry or quote behind every verdict. This isn't legal advice: flag the high-exposure claims for legal. Don't invent evidence a claim lacks.
```

### Score every claim in a risk register

```
Build a claim risk register: every claim we publish in one sheet, scored by evidence and exposure, so I check the risky ones first. Use Calven MCP for the claims register, product changes and the proof behind each claim.

FILL IN
- Scope: [e.g. website, sales deck, pricing page]
- Weights: [how much you weigh evidence, staleness, exposure and reach, or write "propose weights"]

CONTEXT
We publish hundreds of claims and I can check maybe twenty a month. I want a scoring model that sorts them, so the twenty I check are the ones that hurt us if they're wrong.

FROM CALVEN
- Every claim in the register for the scope, with origin, type, concern, status and sources.
- Product changes and drift findings from the last two quarters that touch those claims.
- Quotes and analyst findings that substantiate outcome or statistic claims.

BUILD
- One row per claim. Score evidence 1 to 5 (brief entry, customer evidence with n, third party, none), staleness 1 to 5 (a related product change since it was written), exposure 1 to 5 (comparative, numeric, pricing, security) and reach 1 to 5 (how many places it appears).
- Risk = exposure times reach times (6 minus evidence), plus a staleness term. Show the formula and let me change the weights.
- Sort, then cut at the top twenty for this month's review.
- If you can write files, build it as a spreadsheet with live formulas and a status dropdown.

OUTPUT
The sheet (or a table if you can't write files), the top twenty with a one-line reason each, and the formula explained in three lines.

GROUNDING
Label every score as from Calven (cited) or your judgement. Don't invent claims the register doesn't list; add any claim I paste as a new row and mark it.
```

### Grade the evidence behind outcome claims

```
Grade the evidence behind every outcome claim the way a medical review grades a study, from strong down to anecdote. Use Calven MCP for the quotes, deal drivers and analyst findings each claim rests on.

FILL IN
- Claims: [paste the outcome and statistic claims, e.g. "cuts onboarding time in half"]

CONTEXT
"Customers save 10 hours a week" might be one happy customer on one call. Buyers and analysts ask for the n. I want each claim graded so we know which to keep, qualify or drop.

FROM CALVEN
- Quotes with the Quantified outcome or Time-to-value highlight on each claim's topic, with account and date.
- Deal drivers and survey answers that mention the outcome.
- Analyst findings that carry a metric on the topic.

METHOD
- Adapt the GRADE approach. Start each claim at the strength of its best source: several independent customers, one customer, a rep's statement, nothing.
- Downgrade for inconsistency (customers report different numbers), indirectness (the quote is about something adjacent), imprecision (a single data point) and selection (only happy customers asked).
- Upgrade for a large effect that holds across accounts.
- Land each claim on high, moderate, low or very low, and write the honest version of the claim at that level.

OUTPUT
A table: claim, sources found with n, downgrades, grade, honest wording. Then the three claims to stop using.

GROUNDING
Quote every source verbatim and cite it. Count customers, don't infer them. If a claim has no source in the Universe, grade it very low and say so.
```

## Ad hoc questions

- Is "[claim]" in our product brief?
- Do we integrate with [tool]?
- What does the [tier] plan include, and what does it cost?
- What changed in the product in the last 60 days?
- Which published documents are stale after the [feature] release?
- Can we say "only [company] does [capability]"? Does any tracked competitor do it?
- Which customer said "[quote]"? Is that verbatim?
- Do we have a quantified-outcome quote for [topic]?
- Which claims on the pricing page are flagged in the register?
- What is our technical architecture claim, as the brief states it?
- Is [capability] a known weakness in our brief?
- What is the safe wording for a claim about [capability] vs [competitor]?
- Is there an analyst finding behind "[statistic]"?
- Did [customer] say "[quote]"? Is it approved for marketing use?
- Which published claims did the last product change make stale?
- Which "only" or "first" claims do we make that a tracked competitor could dispute?
- Which claims do our reps make on calls that aren't in the product brief?
- Which known weakness in the brief does our website contradict?
- Which quantified-outcome claims rest on a single customer?

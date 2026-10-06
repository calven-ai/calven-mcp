# Claim substantiation

**Related:** [Claim checks](../product-marketing/claim-checks.md) is the per-asset check marketing runs before an asset ships.

Your site and sales documents keep making claims long after the launch that wrote them, and you need to know which ones still hold. You get a list of live claims with a verdict on each, the proof on file for the ones that stay, and a rule writers can apply before the next asset ships. Calven gives you the claims register, so you're not reading pages one by one and asking marketing where the number came from.

## Prompts

### Inventory every published claim by risk

```
Using Calven MCP, inventory every claim our published content makes and sort it by risk.

FILL IN
- Product: [product, or leave blank if we have only one]

CONTEXT
I am auditing our live marketing and sales claims. I need the full list, grouped so I can review the risky ones first.

PULL FROM THE UNIVERSE
- The claims register: every assertion our site and documents make, where it appears, its type and any flagged concern.
- The proof points in our positioning and the capabilities and pricing in the product brief.

BUILD
- One table, one row per claim: the claim, where it appears, claim type, the concern flagged, and whether the positioning or product brief already backs it.
- Group into: comparative or superlative, performance or outcome numbers, security and compliance, pricing, capability and integration.
- Put the claims with a flagged concern and no backing at the top.

OUTPUT
The table, then a count per group and a list of the ten claims to review first.

GROUNDING
Use only the claims register and the documents in the Universe and cite the row or section for each. Do not add claims you assume we make. If the register is empty for a document, say so.
```

### Find the proof behind each claim

```
Using Calven MCP, find the proof behind these claims.

FILL IN
- Claims: [paste the claims]

CONTEXT
These are the claims I am reviewing. For each one I need the evidence we hold, or a clear statement that we hold none.

PULL FROM THE UNIVERSE
- The product brief for capability, integration and pricing claims.
- Customer quotes with quantified outcomes, time-to-value or competitive wins for outcome claims, verbatim and attributed.
- Win/loss deal drivers and the competitive dashboard for claims about where we win against a competitor.
- Analyst findings for any claim that cites a report or a market number.

CHECK
- For each claim: proven (cite the source), partly proven (say what is missing), or no proof in the Universe.
- Where a quote is the proof, give it verbatim with the account and date.

OUTPUT
The claims annotated with the verdict and the source, then the list of claims with no proof.

GROUNDING
Cite a source for every "proven". Do not treat the AI tool's general knowledge as proof. Do not paraphrase a quote into a stronger claim than the customer made.
```

### Find claims a product change made untrue

```
Using Calven MCP, tell me which of our claims a product change has made untrue.

FILL IN
- Window: [time window, e.g. last quarter]
- Product: [product, or leave blank if we have only one]

CONTEXT
We shipped changes in the window. I need to know which published claims, pages and documents no longer match the product.

PULL FROM THE UNIVERSE
- Product changes detected in the window, with severity and the evidence quote.
- The drift findings that name the document each change left stale, with the classification and confidence.
- The claims register rows that touch the same capability, integration or price.

BUILD
- One row per change: what changed, the documents flagged as stale, the claims affected, and the corrected statement from the product brief.

OUTPUT
A table I can hand to marketing with the pages and claims to fix, ordered by severity.

GROUNDING
Use only product changes, drift findings and claims from the Universe and cite each. Do not infer changes the register does not record. If a change has no drift finding, say so rather than guessing which pages it affects.
```

### Rewrite unproven claims in safe wording

```
Using Calven MCP, give me the safe wording for these claims.

FILL IN
- Claims: [paste the claims and their verdicts]

CONTEXT
These claims have no proof or partial proof. I want a version of each that stays inside what we can prove, or a recommendation to pull it.

PULL FROM THE UNIVERSE
- The product brief and the positioning proof points.
- The customer quotes or deal drivers that partly support each claim.

WRITE
- For each claim: keep as is, reword (give the wording and the proof it now rests on), or pull (say why no wording survives).
- Keep the rewording in our approved messaging language.

OUTPUT
A three-column table: original claim, verdict, safe wording with source.

GROUNDING
Every reworded claim must cite the section of the brief or the quote it rests on. Do not soften a claim with a hedge; shorten it to what is true. This is a fact check, not legal advice.
```

### Write the approved-claims sheet for writers

```
Using Calven MCP, write the approved-claims sheet for our writers.

FILL IN
- Product: [product, or leave blank if we have only one]

CONTEXT
Marketing and sales need one page of claims they can use without asking legal, each with its proof.

PULL FROM THE UNIVERSE
- The positioning proof points and the capability, integration and pricing facts in the product brief.
- The claims register rows marked as backed.
- Marketing-ready customer quotes with their attribution rules.

BUILD
- Approved claims grouped by topic, each with its proof and the exact wording that is safe.
- A short list of claims we do not make and why.

OUTPUT
A one-page sheet, plain language, for people who write copy.

GROUNDING
Include only claims the Universe backs and cite the source beside each. Do not add general industry claims.
```

## Advanced prompts

### Rank the claims by challenge exposure

```
Score every live claim on how likely it is to be challenged and how much it would cost if it were, and give me the audit order. Use Calven MCP for the claims register, the proof we hold and the competitors most likely to object.

FILL IN
- Product: [product, or leave blank if we have only one]
- Past challenges: [paste any complaints, competitor letters or ad-standards rulings we've had, or write "none"]
- Review capacity: [hours legal can spend on this audit]

CONTEXT
I can't review every claim this quarter. I want a defensible order: the claims most likely to be challenged, weighted by what that would cost.

FROM CALVEN
- The claims register: each claim, where it appears, claim type and flagged concern.
- For each claim, the proof the product brief, positioning proof points, quantified customer quotes or deal drivers hold.
- The competitors named or implied in comparative and superlative claims, with their signal activity in the last 90 days.

MODEL
- Score likelihood of challenge from 1 to 5: claim type, whether it names an active rival, how public the placement is, and whether proof is missing.
- Score exposure from 1 to 5: where it appears, whether it's a number, whether it touches security, pricing or a named customer.
- Rank by likelihood times exposure.
- Fit the ranked list to my review capacity at a stated minutes-per-claim. If you can run code, build it as a spreadsheet with the scoring formulas visible so I can change a weight.

OUTPUT
A likelihood by exposure grid, the ranked audit queue that fits my hours, and the three claims to pull before any review because they score high and have no proof.

GROUNDING
Label every score input as Calven (cited), mine, or your assumption. Don't invent a challenge we never had, and don't treat missing proof as proof the claim is false. This is a triage, not legal advice.
```

### Test the net impression with a reader panel

```
Find the claims our pages make by implication, the ones nobody wrote down but every buyer reads. Use Calven MCP for the personas who read the page and the proof we hold.

FILL IN
- Page: [paste the page or asset copy]
- Personas: [two to four personas who read it]

CONTEXT
Substantiation covers what a reasonable reader takes away, not only the literal words. A headline, a logo row and a chart can promise more together than any sentence does alone. I want to see the page through the buyer's eyes before a regulator or a rival does.

FROM CALVEN
- The persona canvases: goals, pains, how each persona talks about outcomes.
- A persona review of the page.
- The claims register rows for this page and the product brief sections they touch.

METHOD
- Have each persona read the page cold and write, in the first person, the three things they now believe the product does or achieves.
- Pool those beliefs, merge duplicates, and mark each as express (the page says it) or implied (the page suggests it).
- Match each belief to proof: product brief, a quantified quote, a deal driver, or nothing.
- For every implied belief with no proof, find the element that creates it (a word, an image caption, an ordering) and give the smallest edit that removes it.

OUTPUT
A table of beliefs: who formed it, express or implied, proof or none, the edit. Then the page with the edits marked.

GROUNDING
Persona readings trace to the canvas and the review, cited. Mark anything else as your extrapolation. Don't upgrade a quote into proof of a broader belief than the customer stated.
```

### Estimate the unproven share from a sample

```
Estimate what share of our live claims we couldn't prove today, with a confidence interval, from a sample I can audit in a day. Use Calven MCP for the claims register and the proof behind each sampled claim.

FILL IN
- Product: [product, or leave blank if we have only one]
- Audit budget: [how many claims I can check by hand]
- Tolerance: [the unproven share the board or GC would accept, e.g. 5%]

CONTEXT
The register is too big to check line by line, and "we think most of it holds" won't satisfy the general counsel. I want an audit-grade number: a random sample, a rate, an interval, and a yes or no against our tolerance.

FROM CALVEN
- The total count of claims in the register, by claim type.
- The full rows for the sampled claims.
- For each sampled claim, the proof the product brief, positioning, quotes, deal drivers or analyst findings hold.

METHOD
- Stratify by claim type so comparative, numeric and security claims get their share of the sample. Draw at random within each stratum and show the seed.
- Grade each sampled claim proven, partly proven or no proof, citing the source.
- Estimate the unproven share per stratum and overall, with a 95% interval. If you can run code, use a Wilson interval and show the calculation.
- Say whether the upper bound clears my tolerance, and how many more claims I'd need to sample to tighten the interval to plus or minus five points.

OUTPUT
The sample with grades, the estimate and interval per stratum, the verdict against tolerance, and a one-paragraph note for the GC.

GROUNDING
Label every number as Calven (cited, with n), computed, or your assumption. Don't hand-pick the sample. A claim with no proof in the Universe is "no proof held", not "false".
```

## Ad hoc questions

- Which claims on our site have a flagged concern?
- Is "[claim]" in the product brief?
- What proof do we hold for "[claim]"?
- Do we have a customer quote with a number behind "[outcome]"?
- Which claims mention [competitor] by name?
- What changed in the product since [date], and which documents did it leave stale?
- Which drift findings are still open?
- Does our pricing page claim match the pricing in the product brief?
- Which integrations does the brief list, and do we claim any it does not?
- Where does the claim "[claim]" appear across our documents?
- What are our approved proof points for [value theme]?
- Which outcome claims have no quote or deal behind them?
- Which of our superlatives ("first", "only", "fastest") have no proof in the Universe?
- Which claims appear in five or more places, so one fix touches many pages?
- Which claims rest on a single customer quote, and is that customer still a customer in the CRM?
- Which claims name a number that differs between two of our documents?
- What did we claim about [capability] before the last product change, and where is the old wording still live?
- Which analyst findings could back a claim we currently make without proof?

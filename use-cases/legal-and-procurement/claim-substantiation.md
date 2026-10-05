# Claim substantiation

**Team:** Legal and procurement · also product marketing, content marketing, brand and communications
**Impact:** High. Every claim the company publishes has to be provable at the moment it ships, and the live site keeps making claims long after the launch that wrote them. One review against the claims register replaces an audit nobody has time to run.
**Prerequisites:** own website and docs monitored (claims register, product changes, drift findings), strategy documents approved (product brief, positioning with its proof points). Better with call transcripts ingested (quotes as evidence for outcome claims) and win/loss surveys running (deal drivers as evidence for competitive claims).
**Related:** [Claim checks](../product-marketing/claim-checks.md) is the per-asset check marketing runs before an asset ships.

## What the team is trying to do

Know which claims the company makes in public and in sales documents, which have proof behind them, and which have to be reworded or pulled. Done means a list of live claims with a verdict on each, the proof on file for the ones that stay, and a rule the writers can apply before the next asset ships. Without the company's own register, counsel reads pages one by one and asks marketing where the number came from.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Inventory the claims | List every express and implied claim on the site, in decks, one-pagers and release notes | The claims register: one row per assertion with where it appears, claim type and concern | Claims |
| 2 | Classify by risk | Separate performance, superlative, comparative, outcome, security and pricing claims; mark the ones that need evidence of a specific kind | Claim type and concern on each row; the positioning proof points and product brief as the first evidence source | Claims, positioning, product brief |
| 3 | Match each claim to proof | Find the test, study, customer result or product fact behind each claim | Product capabilities and pricing from the brief; verbatim customer quotes with quantified outcomes; win/loss drivers behind competitive claims; analyst findings | Product brief, quotes (highlight: quantified outcome, time-to-value), deal drivers, analyst findings |
| 4 | Find what went stale | Check whether product changes invalidated a claim that was true when written | Product changes and the drift findings that name the document each change left stale | Product changes, product drift findings |
| 5 | Decide: keep, reword, pull | Write the verdict and the safe wording | Draft rewording that stays inside the brief and the proof | Product brief, positioning |
| 6 | Brief the writers | Give marketing the rule and the approved proof per claim | A one-page list of approved claims with their proof | Claims, positioning proof points |
| 7 | Keep the proof file | Store the substantiation with the date | Calven does not help here | |
| 8 | Re-audit after each release | Run the check again when the product or the site changes | Product changes since the last audit and the claims they touch | Product changes, drift findings, claims |

## Recommended prompts

### Step 1 and 2: inventory and classify

```
Using Calven MCP, inventory every claim our published content makes and sort it by risk.

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

[name the product if we have more than one]
```

### Step 3: match claims to proof

```
Using Calven MCP, find the proof behind these claims.

CONTEXT
Below are the claims I am reviewing. For each one I need the evidence we hold, or a clear statement that we hold none.

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

[paste the claims]
```

### Step 4: find what went stale

```
Using Calven MCP, tell me which of our claims a product change has made untrue.

CONTEXT
We shipped changes in [window]. I need to know which published claims, pages and documents no longer match the product.

PULL FROM THE UNIVERSE
- Product changes detected in [window], with severity and the evidence quote.
- The drift findings that name the document each change left stale, with the classification and confidence.
- The claims register rows that touch the same capability, integration or price.

BUILD
- One row per change: what changed, the documents flagged as stale, the claims affected, and the corrected statement from the product brief.

OUTPUT
A table I can hand to marketing with the pages and claims to fix, ordered by severity.

GROUNDING
Use only product changes, drift findings and claims from the Universe and cite each. Do not infer changes the register does not record. If a change has no drift finding, say so rather than guessing which pages it affects.

[name the window and, if we have more than one, the product]
```

### Step 5: keep, reword, pull

```
Using Calven MCP, give me the safe wording for these claims.

CONTEXT
Below are claims with no proof or partial proof. I want a version of each that stays inside what we can prove, or a recommendation to pull it.

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

[paste the claims and their verdicts]
```

### Step 6: brief the writers

```
Using Calven MCP, write the approved-claims sheet for our writers.

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

[name the product if we have more than one]
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

## Good practice

- Start from the register, not from the pages. The register already holds the claim, where it appears and the concern.
- Ask for the verdict and the source in the same table. A verdict without a citation is an opinion.
- Rerun the stale check after every release. Product changes and drift findings are dated, so the window is the only input.
- Keep quotes verbatim with the account and date. A polished quote is no longer substantiation.
- Separate "no proof in the Universe" from "false". Counsel decides what to do with the first; the second gets pulled.
- Save the inventory prompt with the product filled in and run it monthly.

## Not covered today

- The proof file itself. Store studies, test results and signed customer approvals in the legal document system.
- Legal judgment on whether a claim is deceptive or a comparative claim is actionable. The AI tool reports what the company holds; counsel decides.
- Content not published in the documents Calven monitors (paid ads, printed collateral, partner sites). Paste it into the proof-matching prompt.
- Editing the site or the Calven documents. Fixes ship through marketing and the Calven agents in the app.

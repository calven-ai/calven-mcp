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

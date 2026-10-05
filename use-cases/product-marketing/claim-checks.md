# Claim checks

**Team:** Product marketing · also content marketing, demand generation, legal, sales enablement
**Impact:** High. A wrong price, a stale integration or a competitive claim that does not hold costs trust with buyers and time with legal; checking every claim against the product brief and the claims register takes minutes.
**Prerequisites:** product brief approved. Better with own website and docs monitored (product changes, drift findings, claims register), competitors tracked (for competitive claims), win/loss (for outcome claims).
**Related:** [Claim substantiation](../legal-and-procurement/claim-substantiation.md) is the legal team's audit of the same register.

## What the team is trying to do

Make sure nothing the company publishes says something the product does not do, the price list does not say, a competitor does not match, or a customer did not say. Done means every claim in an asset marked correct, wrong, stale, unverified or unsupported, with the accurate wording, before it ships. Without one approved product brief and a record of what the site already claims, the check is an email thread with product.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | List the claims | Pull every assertion out of the asset | The AI tool extracts them from the pasted text | |
| 2 | Check product claims | Capabilities, integrations, architecture | The product brief | Product brief |
| 3 | Check pricing and packaging | Prices, tiers, what is included | Pricing and packaging section | Product brief |
| 4 | Check for staleness | Did a recent release change it | Product changes and drift findings | Product changes, drift findings |
| 5 | Check competitive claims | "Only we", "unlike X", feature comparisons | Dossier, feature comparison, battlecard | Competitor deep dive, battlecard |
| 6 | Check proof and outcome claims | Numbers, customer results, quotes | Quotes, win/loss evidence, positioning proof points | Quotes, deal drivers, positioning |
| 7 | Check against the claims register | Is this claim already flagged | Claims register | Claims |
| 8 | Write the verdicts and fixes | Per claim, with wording | Drafted from the above | |
| 9 | Route the unverifiable ones | To product, legal or the customer | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: product and pricing claims

```
Using Calven MCP, fact-check this [asset] before it ships.

CONTEXT
Below is the asset. Every product, integration, architecture and pricing claim must be right.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, technical architecture, pricing and packaging.
- Product changes in the last [window] and the documents they left stale.
- The claims register, for anything already flagged.

CHECK
- List every claim in the asset.
- Mark each correct, wrong, stale, or not in the brief.
- For each flag, give the accurate wording and the section it comes from.

OUTPUT
The asset annotated inline, a claims table with verdicts, and the claims a human must take to product.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief" rather than guessing.

[paste the asset]
```

### Step 5: competitive claims

```
Using Calven MCP, check the competitive claims in this asset.

CONTEXT
Below is the asset. It names or implies [competitors]. Legal will ask for evidence on every comparison.

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

[paste the asset and name the competitors]
```

### Step 6: proof and outcome claims

```
Using Calven MCP, check the proof points in this asset.

CONTEXT
Below is the asset. It cites customer outcomes, numbers and quotes.

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

[paste the asset]
```

### Step 7: register check for a site section

```
Using Calven MCP, list the unsupported claims on our [site section or document].

CONTEXT
Before the quarterly content review I want the claims the product intelligence agent has flagged.

PULL FROM THE UNIVERSE
- The claims register, filtered to [origin or document] and status new or reviewed.
- The drift findings for the same documents.

BUILD
- A table: claim, where it appears, claim type, concern, status.
- Grouped by document, with the count per document.

OUTPUT
The table and the five claims to fix first.

GROUNDING
List only what the register holds. An empty list means nothing is flagged; say so.

[name the site section or document]
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

## Good practice

- Paste the whole asset. Claims hide in subheads, captions and CTAs.
- Separate the three checks: product and price, competitive, proof. Each has a different owner for what fails.
- Ask for "not in the brief" explicitly. The AI tool will otherwise answer from its own knowledge.
- Treat "stale" as a product-brief task first. If the brief is behind the product, every check inherits the error; the product intelligence agent in Calven fixes the brief.
- Keep safe wording in the asset, not a disclaimer.

## Not covered today

- Reading the live page. Paste the copy.
- Legal review and the customer's approval of a quote.
- Updating the product brief or resolving a claim in the register. That happens in Calven.
- Claims the brief does not cover. "Not in the brief" goes to product, and ideally into the brief.

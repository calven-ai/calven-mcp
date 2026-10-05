# Launch copy review

**Team:** Legal and procurement · also product marketing, brand and communications, product management
**Impact:** High. Launch week ships release notes, a press announcement, a landing page, an email and a partner statement in days, each written by a different person. A review against the product brief catches the overstated capability, the wrong price and the stale integration before a journalist or a customer does.
**Prerequisites:** strategy documents approved (product brief, positioning, messaging), own website and docs monitored (product changes, drift findings, claims). Better with competitors tracked when the launch copy names a rival.

## What the team is trying to do

Approve every external launch asset in one pass with confidence that each capability, number, price, integration, customer reference and competitor mention is true and consistent across the set. Done means a verdict per asset, the edits with their source, and the handful of items a human must still confirm. Without the Universe, counsel reads six documents against a product they know second-hand and a pricing page that may already be out of date.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Collect the asset set | Gather release notes, press copy, landing page, launch email, sales one-pager, partner and analyst statements | Calven does not help here | |
| 2 | Capability check | Confirm every feature and how it is described | The product brief: capabilities, use cases, integrations, technical architecture; recent product changes for what is new | Product brief, product changes |
| 3 | Pricing and packaging check | Confirm prices, plans, limits, what is included | Pricing and packaging in the product brief | Product brief |
| 4 | Superlatives and numbers | Flag "first", "only", "fastest", percentages and customer counts, and find their proof | Claims register, positioning proof points, quotes with quantified outcomes, analyst findings | Claims, positioning, quotes, analyst findings |
| 5 | Competitor mentions | Check any named or implied rival | Battlecard and dossier for the rival | Competitor bundle |
| 6 | Customer references | Confirm quotes and named customers are real and approved | Verbatim quotes with their state and attribution | Quotes |
| 7 | Consistency across assets | Make sure all assets say the same thing | Messaging boilerplate, core narrative and one-liner, naming and nomenclature | Messaging document |
| 8 | Stale copy elsewhere | Find existing pages the launch makes wrong | Drift findings tied to the launch's product changes | Product changes, drift findings |
| 9 | Regulatory and endorsement rules | Disclosures, testimonials, regulated terms | Calven does not help here | |
| 10 | Verdict | Approve, approve with edits, hold | The edit list with sources | Product brief, messaging |

## Recommended prompts

### Step 2 and 3: capability and pricing check

```
Using Calven MCP, fact-check this launch asset against the product brief.

CONTEXT
Below is one asset from our launch of [what is launching]. Every capability, integration, number and price in it has to be right before it ships.

PULL FROM THE UNIVERSE
- The product brief: capabilities and features, use cases, integrations, technical architecture, pricing and packaging.
- Product changes detected in [window], so what is new is checked against what was recorded.

CHECK
- Mark each claim: correct, wrong, overstated, or not in the brief.
- For each wrong or overstated claim, give the accurate wording from the brief.
- List every price, plan name and limit and whether it matches the brief.

OUTPUT
The asset annotated inline, then a short list of claims the brief does not cover and a human must confirm with product.

GROUNDING
Confirm only against the product brief and product changes in the Universe and cite the section. Where the brief is silent, say "not in the brief" rather than guessing. This is a fact check, not legal advice.

[paste the asset and name the product if we have more than one]
```

### Step 4: superlatives and numbers

```
Using Calven MCP, find the proof for every superlative and number in this launch copy.

CONTEXT
Below is the launch copy. I need the evidence behind each "first", "only", "fastest", each percentage and each customer count, or a statement that we hold none.

PULL FROM THE UNIVERSE
- The claims register and the positioning proof points.
- Customer quotes with quantified outcomes or time-to-value, verbatim and attributed.
- Analyst findings for any market figure or report cited.

CHECK
- One row per superlative or number: the claim, the proof in the Universe with its source, or "no proof".
- For each "no proof", a version of the sentence that drops the claim without losing the point.

OUTPUT
The table, then the rewritten sentences.

GROUNDING
Cite every proof. Do not use the AI tool's own knowledge as evidence. Do not turn a single quote into a general claim.

[paste the launch copy]
```

### Step 6 and 7: references and consistency

```
Using Calven MCP, check the customer references and the consistency across our launch assets.

CONTEXT
Below are all the launch assets in one paste, each with a heading. I need to know whether the customer quotes are real and approved, and whether the assets tell one story.

PULL FROM THE UNIVERSE
- Customer quotes in the Universe, with their state and attribution.
- Our messaging: core narrative and one-liner, boilerplate, naming and nomenclature.

CHECK
- For each customer quote or named customer in the assets: found in the Universe or not, and its state.
- Where the assets describe the launch differently: the capability, the name of the feature, the price, the claim. List each inconsistency with the version in the messaging document.
- Where the boilerplate differs from the approved boilerplate.

OUTPUT
Two lists: references with a verdict, and inconsistencies with the approved version.

GROUNDING
Use only quotes and messaging from the Universe and cite them. A quote not found is "not in the Universe", not fabricated; a human confirms it.

[paste all assets with headings]
```

### Step 8: stale copy the launch creates

```
Using Calven MCP, tell me which existing pages and documents this launch makes wrong.

CONTEXT
We are launching [what is launching]. Existing pages, docs and sales collateral may now contradict it.

PULL FROM THE UNIVERSE
- Product changes detected for this launch, and the drift findings that name each document they left stale.
- The claims register rows about the capability, integration or price that changed.

BUILD
- One row per affected document or claim: what it says, what the launch changes, the corrected statement from the brief, and the confidence of the drift finding.

OUTPUT
A fix list for marketing and sales, ordered by severity.

GROUNDING
Use only product changes, drift findings and claims from the Universe and cite each. If a change has no drift finding yet, say so.

[name the launch and the window]
```

### Step 10: the review verdict

```
Using Calven MCP, write the launch review verdict.

CONTEXT
I have run the capability, pricing, superlative, reference and consistency checks on the asset set. I need one verdict per asset for the launch owner.

PULL FROM THE UNIVERSE
- The product brief and the messaging document, for the citations behind each edit.

BUILD
- Per asset: approve, approve with edits, or hold.
- Required edits with the replacement wording and the source.
- Items a human must confirm outside Calven: unapproved quotes, claims not in the brief, regulated terms.

OUTPUT
A one-page memo grouped by asset.

GROUNDING
Cite every required edit. Do not add legal conclusions.

[paste the annotated assets]
```

## Ad hoc questions

- Does the product brief say we integrate with [tool]?
- What is the price of [plan] in the product brief, and what does it include?
- Is "[feature]" described in the brief the way this release note describes it: [paste]
- Which product changes were detected in the last 30 days?
- Which documents are flagged as stale by the [feature] change?
- What is our approved boilerplate?
- What is the approved one-liner for [product]?
- Is this quote in the Universe, and is it approved: "[quote]"
- Which customer can we cite for [outcome]?
- Does our positioning list "[claim]" as a proof point?
- Does the battlecard support saying "[statement]" about [competitor]?
- What does the brief list as a known weakness that this copy contradicts: [paste]

## Good practice

- Review the whole asset set in one paste. Inconsistency is the most common launch defect and it only shows across assets.
- Run the capability check first and the superlative check second. The second is where most edits come from.
- Ask for "not in the brief" explicitly. A claim the brief does not cover is a question for product, not a pass.
- Rerun the stale-copy check the day after launch. Drift findings are created as the monitor sees the new pages.
- Keep the verdict memo with the asset set. The citations are the substantiation file.

## Not covered today

- Endorsement disclosures, regulated-industry terms and jurisdiction rules. Counsel's call.
- Customer approval to be named. Calven shows the quote and its state; the signed approval lives elsewhere.
- Assets not pasted in. MCP checks what the person supplies; the content library is not in Calven.
- Publishing or editing the assets or the Calven documents.

# Launch copy review


Launch week ships release notes, a press announcement, a landing page, an email and a partner statement, each by a different writer, and you have to approve them all. You get a verdict per asset, the edits with their source, and the handful of items a human still has to confirm. Calven checks every capability, number, price, integration, customer reference and competitor mention against the product brief, so the stale integration gets caught before a journalist does.

## Prompts

### Fact-check a launch asset against the brief

```
Using Calven MCP, fact-check this launch asset against the product brief.

FILL IN
- Launch: [what is launching]
- Window: [time window for product changes, e.g. last quarter]
- Product: [product, or leave blank if we have only one]
- Asset: [paste the asset]

CONTEXT
The asset is one piece of the launch above. Every capability, integration, number and price in it has to be right before it ships.

PULL FROM THE UNIVERSE
- The product brief: capabilities and features, use cases, integrations, technical architecture, pricing and packaging.
- Product changes detected in the window, so what is new is checked against what was recorded.

CHECK
- Mark each claim: correct, wrong, overstated, or not in the brief.
- For each wrong or overstated claim, give the accurate wording from the brief.
- List every price, plan name and limit and whether it matches the brief.

OUTPUT
The asset annotated inline, then a short list of claims the brief does not cover and a human must confirm with product.

GROUNDING
Confirm only against the product brief and product changes in the Universe and cite the section. Where the brief is silent, say "not in the brief" rather than guessing. This is a fact check, not legal advice.
```

### Find proof for every superlative and number

```
Using Calven MCP, find the proof for every superlative and number in this launch copy.

FILL IN
- Launch copy: [paste the launch copy]

CONTEXT
I need the evidence behind each "first", "only", "fastest", each percentage and each customer count in the launch copy, or a statement that we hold none.

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
```

### Check customer references and cross-asset consistency

```
Using Calven MCP, check the customer references and the consistency across our launch assets.

FILL IN
- Assets: [paste all assets with headings]

CONTEXT
The assets come in one paste, each with a heading. I need to know whether the customer quotes are real and approved, and whether the assets tell one story.

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
```

### Find pages the launch makes wrong

```
Using Calven MCP, tell me which existing pages and documents this launch makes wrong.

FILL IN
- Launch: [what is launching]
- Window: [time window for product changes, e.g. last quarter]

CONTEXT
Existing pages, docs and sales collateral may now contradict the launch.

PULL FROM THE UNIVERSE
- Product changes detected for this launch in the window, and the drift findings that name each document they left stale.
- The claims register rows about the capability, integration or price that changed.

BUILD
- One row per affected document or claim: what it says, what the launch changes, the corrected statement from the brief, and the confidence of the drift finding.

OUTPUT
A fix list for marketing and sales, ordered by severity.

GROUNDING
Use only product changes, drift findings and claims from the Universe and cite each. If a change has no drift finding yet, say so.
```

### Write the launch review verdict

```
Using Calven MCP, write the launch review verdict.

FILL IN
- Annotated assets: [paste the annotated assets]

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

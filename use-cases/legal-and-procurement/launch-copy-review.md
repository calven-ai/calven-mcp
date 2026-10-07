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

## Advanced prompts

### Build the launch claims matrix

```
Build one matrix of every claim across all the launch assets so I can see where they disagree before any of them ships. Use Calven MCP for the approved fact behind each claim.

FILL IN
- Launch: [campaign]
- Assets: [paste each asset with its name: release notes, press release, landing page, email, partner statement]
- Product: [product, or leave blank if we have only one]

CONTEXT
Five writers, five assets, one launch. Each asset may pass on its own and still contradict another: a limit in the email that the landing page doesn't mention, a price rounded differently in the press release. Reviewing them one at a time misses exactly that.

FROM CALVEN
- The product brief sections for the launched capability: features, limits, integrations, pricing and packaging.
- Product changes and drift findings tied to the launch.
- The positioning proof points and any customer quotes the assets cite.

BUILD
- Extract every factual claim from every asset and normalise it into one claim per row: capability, number, price, integration, customer, competitor.
- Columns are the assets. Each cell holds that asset's wording, or blank if it's silent.
- Add a column for the approved fact and its source, and a status: consistent, inconsistent across assets, or inconsistent with the brief.
- If you can run code, export it as a spreadsheet with conditional formatting on the status column.

OUTPUT
The matrix, then a short list of fixes grouped by asset owner, so each writer gets only their edits.

GROUNDING
Every approved fact cites the product brief, a product change or a quote. Don't resolve a conflict between two assets by picking the one that sounds right; resolve it to the brief or flag it as needing a decision.
```

### Rehearse the launch-day press interview

```
Play a sharp trade journalist interviewing our spokesperson about the launch, and score how each answer holds up. Use Calven MCP for what we can prove, what rivals did recently and where the product is weaker.

FILL IN
- Press release: [paste the release]
- Spokesperson: [name and title]
- Competitor: [the rival the journalist will bring up]

CONTEXT
The press release is what legal reviews. The interview is what gets quoted. A spokesperson who overreaches by one sentence undoes a clean release, so I want to find those sentences in rehearsal.

FROM CALVEN
- The product brief, including its known weaknesses section.
- The competitor's recent signals and their battlecard strengths.
- The claims register rows the release touches, with any flagged concern.

SIMULATE
- Ask ten questions, escalating: the obvious one, the number check, the "isn't this what the competitor shipped in the spring", the customer name, the weakness, the pricing, and four follow-ups that press on whatever the previous answer overstated.
- After each question, write the answer most spokespeople would give, then score it: safe, overreach (says more than the evidence), or contradiction (conflicts with the brief or another asset).
- For every overreach, write the safe answer that still sounds confident.

OUTPUT
The transcript with scores, a one-page cheat sheet of the ten safe answers with sources, and the three lines the spokesperson must not say.

GROUNDING
The journalist may only cite competitor moves recorded in the Universe, with dates. Safe answers cite the brief or a proof point. Mark anything else as your assumption.
```

### Trace the paths to a public correction

```
Build a fault tree for the worst launch outcome, a public correction, and find the weakest branches before we ship. Use Calven MCP for the facts each branch depends on.

FILL IN
- Launch: [campaign]
- Assets: [paste or list the launch assets]
- Ship date: [date]

CONTEXT
A correction after launch costs more than any edit before it. Most of them come from a short list of causes: a stale fact, an unapproved quote, a feature that isn't in the plan the copy names, a rival claim that changed last week.

FROM CALVEN
- The product brief and the product changes since the brief was last updated.
- Drift findings still open on pages the launch links to.
- The claims register rows the assets touch, and any customer quotes they use with their attribution.
- Competitor signals in the last 60 days for any rival named.

METHOD
- Start from the top event, "we publish a correction within 30 days of launch", and break it into OR branches: wrong capability, wrong price or plan, stale linked page, unapproved customer reference, outdated competitor statement.
- Break each branch down until each leaf is a specific sentence or link in a specific asset.
- Rate each leaf as likely, possible or remote from the evidence, and mark the minimal cut sets: the smallest combination of leaves that produces the top event.

OUTPUT
The fault tree as an indented list or a diagram, the five riskiest leaves with their fix, and the checks to rerun the day before the ship date.

GROUNDING
Each leaf cites the Universe evidence that makes it likely or the absence that makes it uncertain. Don't invent a product change or competitor move that isn't recorded.
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
- Which drift findings are still open on pages this launch links to?
- Which marketing-ready quotes on the voice-of-customer dashboard mention [feature]?
- Has any competitor launched something like [feature] in the last 90 days?
- Which known weaknesses in the brief does the launch landing page sit closest to?
- Do customers describe [feature]'s problem in the words this press release uses: [paste]
- Which plan does the brief put [feature] in, and does every launch asset agree?

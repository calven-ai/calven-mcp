# Launch messaging

**Team:** Product marketing · also product management, demand generation, sales enablement
**Impact:** High. The launch story is reused by every team for a quarter; a story built on the approved positioning and what buyers asked for ships consistent on day one.
**Prerequisites:** strategy documents approved (positioning, messaging, product brief), personas approved. Better with transcripts ingested (quotes, themes), win/loss surveys running (product gaps that cost deals), competitors tracked.

## What the team is trying to do

Give a new product or feature a story the whole company tells the same way: what it is, who it is for, why it matters now, how it fits the positioning, and what sales can claim. Done means approved launch messaging, a launch kit (one-pager, FAQ, talk track, launch email and page copy) and an enablement session before the date. Without the company's own knowledge the PMM rebuilds the context every launch, and the feature ships with a story the field rewrites.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Set the tier and the goal | Decide launch size, target segment and personas, the metric | ICP segments and personas the feature serves; which product gaps it closes and the deals they touched | ICP, personas, win/loss product gaps, deal drivers |
| 2 | Gather the demand evidence | Find what customers asked for and why | Quotes and themes on the pain the feature solves; lost deals where it was the missing feature; competitor moves in the same area | Quotes, themes, deal drivers, crm_deals (loss_reason), competitive signals |
| 3 | Write the launch positioning | Fit the feature into the positioning: category, differentiation, proof | Positioning document, product brief, competitor feature comparison | Positioning, product brief, competitor deep dive |
| 4 | Write the messaging | Narrative, value by persona, proof, objections | Messaging framework and the persona × stage matrix, persona canvases, customer language | Messaging, personas, quotes |
| 5 | Fact-check the claims | Confirm every capability, integration and price | Product brief and claims register | Product brief, claims, product changes |
| 6 | Review with personas | Test the story on the buyer, stakeholder and user | Persona review with severity-rated findings | `review_against_personas` |
| 7 | Build the launch kit | One-pager, FAQ, talk track, launch email, page copy, release note | Drafts from the approved launch messaging | Messaging, product brief, persona canvases, battlecards |
| 8 | Brief the field | Enablement session, what changed, what to say against competitors | Battlecard sections affected, the objections the feature answers | Battlecards, messaging objection handling |
| 9 | Launch | Publish, send, post | Calven does not help here | |
| 10 | Measure | Adoption, pipeline, mentions on calls | Whether reps use the new pillar on calls, new quotes mentioning the feature | Messaging field adoption, vendor quotes, quotes |

## Recommended prompts

### Step 1 and 2: demand evidence

```
Using Calven MCP, build the demand case for launching [feature or product].

CONTEXT
We are launching [feature] in [weeks]. Before writing the story I want the evidence that buyers wanted it and that it costs us deals today.

PULL FROM THE UNIVERSE
- Customer quotes and themes about the problem [feature] solves, with who said them and when.
- Lost deals where the loss reason or product gap matches [feature], with the deal count and the buyer's words.
- Competitor signals in the same area, with dates.

BUILD
- The pain in the customer's words: the three strongest quotes.
- The deals at stake: how many losses named this gap, in which segments, against whom.
- Which personas raised it and which segments it matters to most.

OUTPUT
A one-page demand case with sources per claim.

GROUNDING
Ground every quote and count in the Universe and cite it. Do not invent demand. If the Universe holds no evidence for this feature, say so.

[name the feature and the problem it solves]
```

### Step 3 and 4: launch positioning and messaging

```
Using Calven MCP, write the launch messaging for [feature or product].

CONTEXT
Tier [1/2/3] launch on [date], aimed at [personas] in [segment]. The demand case is below.

PULL FROM THE UNIVERSE
- Our positioning: category, differentiation, value themes, proof points.
- Our messaging framework: narrative, pillars, value propositions by persona, objection handling.
- The persona canvases for [personas]: pains, gains, jobs to be done, messaging hooks.
- The product brief entry for what ships, so every claim is accurate.

BUILD
- The launch narrative in one paragraph and the one-liner.
- Which pillar the feature strengthens and how.
- Value proposition per persona, in the words the persona uses.
- Three proof points and the quote behind each.
- The three objections to expect and the response.

OUTPUT
A launch messaging document with sources, ready for review.

GROUNDING
Ground every claim in the positioning, messaging and product brief and cite it. Do not add a capability the brief does not list. Do not create a new pillar.

[paste the demand case and name the feature, personas and date]
```

### Step 5: claim check

```
Using Calven MCP, fact-check the launch messaging.

CONTEXT
Below is the launch messaging. Every product, integration, pricing and competitive claim must hold.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Recent product changes and documents they left stale.
- The claims register, for any claim already flagged as unsupported.

CHECK
Mark each claim correct, wrong, stale or not in the brief, and give the accurate wording for each flag.

OUTPUT
The messaging annotated inline, then the list of claims a human must verify with product.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".

[paste the launch messaging]
```

### Step 6: persona review

```
Using Calven MCP, review the launch messaging as our personas.

CONTEXT
Below is the launch messaging. I want the buyer's, the stakeholder's and the user's honest reaction before it ships.

PULL FROM THE UNIVERSE
- Run the persona review on the text, and read the canvases for [personas].

REACT
- For each persona: what lands, what reads as vendor marketing, the line they would not believe, the question left unanswered.
- The one change that would matter most to each.

OUTPUT
The findings by persona with severity, then the three edits to make.

GROUNDING
React only from what the Universe says about each persona. Do not invent reactions the canvases do not support.

[paste the launch messaging]
```

### Step 7: launch kit

```
Using Calven MCP, build the launch kit for [feature] from the approved launch messaging.

CONTEXT
The approved messaging is below. I need the assets listed for [personas] and the field.

PULL FROM THE UNIVERSE
- The product brief entry for [feature].
- The persona canvases for [personas].
- The battlecards for [competitors], where the feature changes how we win.

WRITE
- A one-pager: problem, what it does, three benefits, proof, CTA.
- A sales FAQ of ten questions, including "what it does not do".
- A 60-second talk track and two discovery questions.
- A launch email for customers and one for prospects.
- The page copy: hero, three sections, proof.

OUTPUT
Each asset under its own heading, with the pillar and proof it leans on noted at the end.

GROUNDING
Ground every claim in the approved messaging and the product brief and cite it. Do not invent customer names, numbers or integrations.

[paste the approved launch messaging and name the personas and competitors]
```

### Step 8: field briefing

```
Using Calven MCP, write the field briefing for the [feature] launch.

CONTEXT
Sales, success and support get 30 minutes. They need what changed, what to say, and what not to claim.

PULL FROM THE UNIVERSE
- The battlecards for [competitors]: which "where we lose" and objection entries the feature changes.
- The objections customers raised on this topic, with quotes.
- The product brief, for the limits of what we claim.

BUILD
- What changed in one paragraph.
- The objections this feature now answers, old response and new response.
- Where it changes the competitive story, by competitor.
- What we still do not do.

OUTPUT
A one-page briefing and a five-question check reps can self-test with.

GROUNDING
Ground every point in the Universe and cite it. Do not promise capabilities outside the brief.

[name the feature and competitors]
```

### Step 10: post-launch read

```
Using Calven MCP, tell me whether the [feature] launch story is being used.

CONTEXT
We launched [weeks] ago. I want to know whether reps pitch it and whether buyers mention it.

PULL FROM THE UNIVERSE
- Messaging field adoption: pillar pull-through on calls, this period vs the one before.
- Vendor quotes mentioning [feature] and how reps describe it.
- Customer quotes mentioning [feature] since launch, with sentiment.

BUILD
- Whether the launch pillar shows up on calls, with n.
- How reps describe it versus the approved wording, with examples.
- What buyers say about it, grouped by sentiment.

OUTPUT
A half-page readout with the numbers and quotes, and the two corrections to make.

GROUNDING
Numbers from the dashboards only, with n and window. Quotes verbatim and cited. If there are too few calls, say so.

[name the feature and the launch date]
```

## Ad hoc questions

- Which lost deals this year named [capability] as the missing feature? Quote the buyers.
- Which persona raised [pain] most on calls?
- Which messaging pillar does [feature] strengthen?
- Does [competitor] offer [capability]? What does our dossier say?
- Write the one-liner for [feature] for [persona].
- Is [claim about the feature] in the product brief?
- Which battlecard sections change now that we ship [feature]?
- What do customers call [feature's problem] in their own words?
- Which proof point can I use for [feature]?
- Do reps mention [feature] on calls since launch?
- What did buyers say about [feature] since [date]?
- Which objections does [feature] answer?

## Good practice

- Build the demand case before the story. The quotes and lost deals write the narrative for you.
- Keep the launch inside the existing pillars. A launch that needs a new pillar is a positioning change, and that happens in Calven with the positioning agent.
- Fact-check and persona-review the messaging, not the finished assets. Fix the source and every asset inherits it.
- Name the personas as Calven names them, and name the competitors the feature touches.
- Rerun the field-adoption read four weeks after launch, not the week after.

## Not covered today

- Editing positioning or messaging. A launch that changes the story is approved in Calven, then read from the AI tool.
- Publishing, sending and the enablement session itself.
- Adoption and pipeline numbers for the feature. Those come from product analytics and the CRM reporting tool.

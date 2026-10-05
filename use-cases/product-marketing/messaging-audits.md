# Messaging audits

**Team:** Product marketing · also content marketing, demand generation, brand
**Impact:** High. Every page, deck and sequence that drifts from the approved story costs a buyer the one thing the company needs them to remember; an audit against the framework and the customer's words finds the drift in an afternoon.
**Prerequisites:** strategy documents approved (messaging, positioning, product brief), personas approved. Better with transcripts ingested (customer language, vendor quotes).

## What the team is trying to do

Check that what the company publishes and says matches the approved positioning and messaging, uses the words buyers use, and holds up as the persona reads it. Done means an audit of the assets in scope with a verdict and a fix per item, plus a read on where the framework itself has gaps. Without a framework in one place and a record of how customers talk, the audit is one PMM's taste against another writer's.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Scope the audit | Which assets, which personas, which product | Which strategy documents exist and for which products | Workspace overview, list_documents |
| 2 | Load the standard | The approved narrative, pillars, value props, boilerplate | The messaging and positioning documents | Messaging, positioning |
| 3 | Check each asset for drift | Off-pillar claims, abandoned language, competitor framing | Line-by-line check against the framework | Messaging, positioning |
| 4 | Check the customer-language fit | Do we say it the way buyers do | Language gaps, themes and quotes on each topic | Messaging dashboard (customer language), quotes, themes |
| 5 | Check the facts | Product and pricing claims | Product brief, claims register, product changes | Product brief, claims, product changes, drift findings |
| 6 | Check as the persona | Would the persona believe it | Persona review | `review_against_personas`, persona canvases |
| 7 | Check the field | Do reps say what the framework says | Pillar pull-through and vendor quotes | Messaging dashboard (field adoption), vendor quotes |
| 8 | Find the framework gaps | Objections and pains the framework does not answer | Objection coverage, weak flags, drift | Messaging dashboard (effectiveness, quality) |
| 9 | Write the audit | Verdict per asset, fixes, framework changes | Drafted from the above | |
| 10 | Fix the assets and the framework | Edits in the CMS and in Calven | Calven does not help here from the AI tool | |

## Recommended prompts

### Step 3: drift check on one asset

```
Using Calven MCP, audit this [page / deck / sequence] against our approved messaging.

CONTEXT
Below is the asset. It is aimed at [persona] at the [stage] stage. I want every line that drifts from the approved story.

PULL FROM THE UNIVERSE
- Our messaging: narrative, pillars, value propositions for [persona], boilerplate, objection handling.
- Our positioning: category, differentiation, proof points.

CHECK
- Flag each line that is off-pillar, uses language we moved away from, or adopts a competitor's frame.
- For each flag, name what it conflicts with and give the on-message rewrite.
- Note the pillars the asset never mentions.

OUTPUT
The asset annotated inline, then a clean on-message version, then a pillar coverage line.

GROUNDING
Judge only against the messaging and positioning in the Universe and cite what each flag conflicts with. If the asset is on-message, say so.

[paste the asset and name the persona and stage]
```

### Step 4: customer-language fit

```
Using Calven MCP, check whether this asset speaks the way our customers do.

CONTEXT
Below is the asset. I want to know where our wording differs from how buyers describe the same thing.

PULL FROM THE UNIVERSE
- The customer-language gaps the messaging dashboard shows.
- Themes and quotes on the topics the asset covers, with the recurring phrases.

CHECK
- For each key phrase in the asset, the phrase customers use instead, with a quote.
- Which of our terms customers never use.

OUTPUT
A two-column table: ours, theirs, with the quote and how often it appears. Then the rewrite of the three lines that differ most.

GROUNDING
Use only phrases grounded in quotes and cite them. Do not invent customer language.

[paste the asset]
```

### Step 5 and 6: facts and persona

Use the claim-check prompt from [claim-checks.md](claim-checks.md) and the persona review prompt from the launch messaging page. Run both on the whole asset.

### Step 7: field check

```
Using Calven MCP, tell me whether the field pitches the approved story.

CONTEXT
I want to know which pillars reps use on calls, which they skip, and how their wording differs from ours.

PULL FROM THE UNIVERSE
- Messaging field adoption: pillar pull-through for [window] and the period before.
- Vendor quotes by category (value claim, differentiation, proof point), with the rep and the account.

BUILD
- A table: pillar, share of calls it appears on, change, n.
- For each pillar, how reps say it vs the approved wording, with two quotes.
- Claims reps make that are not in the framework.

OUTPUT
One page, with the three coaching points for enablement.

GROUNDING
Numbers from the dashboard with n and window. Quotes verbatim and cited.

[name the window]
```

### Step 8: framework gaps

```
Using Calven MCP, find the gaps in our messaging framework.

CONTEXT
Before the quarterly messaging review I want to know what the framework fails to answer.

PULL FROM THE UNIVERSE
- Messaging effectiveness: the objections buyers raise and which the framework covers.
- Quality and consistency: weak flags and drift findings.
- Voice-of-customer themes with no matching pillar or value prop.

BUILD
- Objections with no response in the framework, ranked by how often buyers raise them, with a quote.
- Pains and jobs customers name that no pillar addresses.
- Claims the framework makes with weak or no evidence.

OUTPUT
A gap list with a suggested fix for each, for the messaging agent to work through.

GROUNDING
Ground every gap in the dashboards, themes and quotes and cite them. If the framework covers everything buyers raise, say so.

[name the product if scoped]
```

### Step 9: the audit document

```
Using Calven MCP, assemble the messaging audit from the checks below.

CONTEXT
I ran the drift, language, fact, persona and field checks on [number] assets. The results are below.

BUILD
- Summary: how consistent the company sounds, in three lines.
- A table: asset, verdict (on-message, minor fixes, rewrite), the main issue.
- The five fixes that matter most across assets.
- The framework changes to propose.

OUTPUT
An audit document the content and web owners can act on.

GROUNDING
Change nothing in the findings. Every fix traces to a check above.

[paste the check results]
```

## Ad hoc questions

- Is this headline on-message for [persona]: "[headline]"?
- Which pillar has the weakest customer-language fit?
- What words do customers use for [our term]?
- Which of our pages or documents went stale after the last product change?
- Do reps use the [pillar] pillar on calls?
- Which objections does our messaging not cover?
- What is our approved boilerplate?
- What is the one-liner for [product]?
- Which claims on our site have no proof behind them?
- Does this paragraph adopt [competitor]'s framing: [paste]?
- Which value proposition do we use for [persona] at the [stage] stage?
- What did the messaging agent flag as weak in the framework?

## Good practice

- Audit against the framework, not against taste. Every flag cites the section it conflicts with.
- Run the checks one asset at a time, then assemble. Mixed assets in one prompt blur the verdicts.
- Check facts and persona reaction separately from drift. They fail for different reasons and go to different owners.
- Use the field check quarterly. It tells you whether the framework is usable, not just correct.
- Feed the gap list to the messaging agent in Calven. The audit finds; the framework fix happens there.

## Not covered today

- Fetching the live pages. Paste the copy; the AI tool does not browse.
- Editing the messaging framework or the website. The framework changes in Calven; the pages change in the CMS.
- Brand voice and tone rules, unless they are written into the messaging document.

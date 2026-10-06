# Messaging audits


You want to know whether what the company publishes and says matches the approved positioning, uses buyers' words and holds up as the persona reads it. You walk away with a verdict and a fix per asset, plus a read on where the framework itself has gaps. With the framework and the record of how customers talk in Calven, the audit stops being one PMM's taste against another writer's.

## Prompts

### Catch drift from the approved messaging

```
Using Calven MCP, audit the asset below against our approved messaging.

FILL IN
- Asset: [paste the page, deck or sequence]
- Persona: [persona]
- Stage: [stage]

CONTEXT
The asset is aimed at the persona at the stage given. I want every line that drifts from the approved story.

PULL FROM THE UNIVERSE
- Our messaging: narrative, pillars, value propositions for the persona, boilerplate, objection handling.
- Our positioning: category, differentiation, proof points.

CHECK
- Flag each line that is off-pillar, uses language we moved away from, or adopts a competitor's frame.
- For each flag, name what it conflicts with and give the on-message rewrite.
- Note the pillars the asset never mentions.

OUTPUT
The asset annotated inline, then a clean on-message version, then a pillar coverage line.

GROUNDING
Judge only against the messaging and positioning in the Universe and cite what each flag conflicts with. If the asset is on-message, say so.
```

### Check the asset speaks like customers

```
Using Calven MCP, check whether this asset speaks the way our customers do.

FILL IN
- Asset: [paste the asset]

CONTEXT
I want to know where our wording differs from how buyers describe the same thing.

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
```

### Check the facts and the persona read

Use the claim-check prompt from [claim-checks.md](claim-checks.md) and the persona review prompt from the launch messaging page. Run both on the whole asset.

### See whether the field pitches the story

```
Using Calven MCP, tell me whether the field pitches the approved story.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want to know which pillars reps use on calls, which they skip, and how their wording differs from ours.

PULL FROM THE UNIVERSE
- Messaging field adoption: pillar pull-through for the window and the period before.
- Vendor quotes by category (value claim, differentiation, proof point), with the rep and the account.

BUILD
- A table: pillar, share of calls it appears on, change, n.
- For each pillar, how reps say it vs the approved wording, with two quotes.
- Claims reps make that are not in the framework.

OUTPUT
One page, with the three coaching points for enablement.

GROUNDING
Numbers from the dashboard with n and window. Quotes verbatim and cited.
```

### Find the gaps in the messaging framework

```
Using Calven MCP, find the gaps in our messaging framework.

FILL IN
- Product: [product, or leave blank for all]

CONTEXT
Before the quarterly messaging review I want to know what the framework fails to answer. If a product is named, scope everything to it.

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
```

### Assemble the messaging audit

```
Using Calven MCP, assemble the messaging audit from the checks below.

FILL IN
- Assets checked: [number]
- Results: [paste the check results]

CONTEXT
I ran the drift, language, fact, persona and field checks on that many assets.

BUILD
- Summary: how consistent the company sounds, in three lines.
- A table: asset, verdict (on-message, minor fixes, rewrite), the main issue.
- The five fixes that matter most across assets.
- The framework changes to propose.

OUTPUT
An audit document the content and web owners can act on.

GROUNDING
Change nothing in the findings. Every fix traces to a check in the results.
```

## Advanced prompts

### Size an A/B test for the new message

```
Design an A/B test that can actually tell whether the new message beats the old one, power calculation included. Use Calven MCP for the approved message, the persona read on each version and the customer language.

FILL IN
- Control: [paste the current headline and subhead]
- Challenger: [paste the new version]
- Traffic: [monthly visitors to the page and its current conversion rate]
- Minimum lift worth acting on: [e.g. 15% relative]

CONTEXT
We change homepage messaging on opinion, then call any bump a win. I want a test sized to give a real answer, and a challenger worth testing in the first place.

FROM CALVEN
- The messaging framework: the pillar and value proposition each version claims to express.
- A persona review of both versions against the buyer personas the page targets.
- Customer language: the phrases customers use for this problem, and the language gaps on the messaging dashboard.

METHOD
- First check both versions against the messaging and the review. If the challenger is off-message or the review finds a serious issue, fix it before spending traffic.
- Write the hypothesis in one line and pick one primary metric.
- Compute the sample size per arm for the minimum lift at 80% power and 5% significance, and how many weeks the traffic needs.
- If the test would run too long, say what changes it: a bigger lift threshold, a higher-traffic page, or a sequential design.
- Set guardrail metrics and the stop rule. If you can run code, show the calculation.

OUTPUT
A one-page test plan: hypothesis, versions, metric, sample size, duration, stop rule, and the persona risks to watch.

GROUNDING
Label every number as Calven (cited, with n), mine, or your calculation. Don't invent a baseline conversion rate: use mine.
```

### Build an eval set that grades future copy

```
Build an eval set and a grading rubric that score any future copy against our messaging, so audits stop depending on who reads them. Use Calven MCP for the messaging framework, the customer language and examples of reps on and off message.

FILL IN
- Asset types: [e.g. homepage sections, outbound emails, ad headlines]
- Personas: [personas]

CONTEXT
Every audit I run is a judgement call, and two reviewers disagree. I want a rubric an AI tool applies the same way every time, with examples that pin down what good looks like.

FROM CALVEN
- The messaging framework: narrative, pillars, value propositions by persona, objection handling, boilerplate.
- Customer quotes that express each pillar in the buyer's words, and the language gaps from the messaging dashboard.
- Vendor quotes from rep calls tagged Value claim and Differentiation, strong and off-message.

BUILD
- A rubric with five criteria (on-pillar, persona fit, customer language, proof, claim accuracy), each scored 1 to 4 with a written anchor for every level.
- Twenty test cases per asset type: short samples written to hit known scores, including tricky near-misses, each with the expected score and why.
- A grader prompt that applies the rubric and returns scores with a one-line reason per criterion.
- Run the grader on the test cases and report agreement with the expected scores. Tighten the anchors where it disagrees.

OUTPUT
The rubric, the test set as a table (a CSV if you can write files), the grader prompt, and the agreement score.

GROUNDING
Every anchor cites the messaging section or quote it's built from. Label the test cases as written by you. Don't invent a pillar or value proposition.
```

### Run a recall test on synthetic buyers

```
Run a five-second recall test on our page with synthetic buyers: what do they remember, and is it what we meant to say? Use Calven MCP to build each buyer from our personas and to define the message we intended.

FILL IN
- Page copy: [paste the page, top to bottom]
- Personas: [personas]

CONTEXT
A buyer gives a page a few seconds. The audit question isn't "is everything on-message" but "which single idea survives", and whether it's ours.

FROM CALVEN
- The approved one-liner and the value proposition for each persona.
- Each persona's canvas: pains, KPIs, and the words they'd scan for.
- Recent customer quotes describing what we do, in their words.

SIMULATE
- For each persona, play ten buyers in different situations drawn from the canvas. Each skims only the hero and the section headings, then answers: what does this company do, for whom, why pick it, and what's the one thing you remember?
- Score each answer against the intended one-liner and value proposition: match, partial, wrong.
- Compare the words the buyers use to describe us after the skim with the words real customers use in the quotes.

OUTPUT
A recall table by persona (match rate, most common takeaway, most common misread), the line on the page that causes the misread, and a rewrite of the hero and first section.

GROUNDING
Label results as simulated from the canvases, not measured. Don't invent buyer reactions beyond what the canvases and quotes support. Confirm with a real five-second test before you ship.
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
- Which pillar do reps pitch most that customers never mention?
- Which of our boilerplate phrases does no customer ever use?
- Which persona's value proposition has no proof point behind it?
- Which objection costs us the most deals, and how strong is our approved answer to it?
- Which priority vertical in our ICP has no variation in the messaging document?
- How do AI assistants describe us, and does it match our one-liner?

# One-pagers


A rep needs a one-pager for a persona, a segment, a competitor or a release, and the fallback is the last one with the name changed. You get a draft in the format (the problem, what we do, proof, what to say next) with every claim sourced and reviewed as the buyer. Calven builds it from the approved story, so it's on-message before it leaves.

## Prompts

### Draft a sourced one-pager

```
Using Calven MCP, draft a one-pager for the audience below.

FILL IN
- Audience: [persona / segment / competitor / release]
- Facing: [rep-facing or buyer-facing]

CONTEXT
Format: headline, the problem in the buyer's words, what we do (three points), proof (one quote, one number if we have one), the next step. Under 300 words.

PULL FROM THE UNIVERSE
- The persona canvas or ICP segment for the audience: pains and KPIs.
- Our positioning and the messaging variation for this audience.
- The product brief for the capabilities named.
- One customer quote with a highlight (quantified outcome, time to value or competitive win) relevant to the audience.
- For a competitor one-pager: the battlecard's How We Win and Proof Points.

WRITE
The one-pager in the format, with the source after each section.

OUTPUT
The draft, ready for design.

GROUNDING
Every claim and quote comes from the Universe, cited. Do not invent numbers; if there is no quantified outcome recorded, use the quote alone.
```

### Fact-check it and review it as the buyer

```
Using Calven MCP, fact-check this one-pager and review it as the persona.

FILL IN
- Persona: [persona]
- Draft: [paste the draft]

CONTEXT
Confirm every claim in the draft, then run the persona review.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The persona review for the text.

CHECK
- Each claim: confirmed, wrong, or not in the brief.
- The persona's findings with severity, and the one line they would not believe.

OUTPUT
The annotated draft, then the clean version.

GROUNDING
Judge only against the Universe. Say "not in the brief" rather than passing an unverified claim.
```

### Find the one-pagers you're missing

```
Using Calven MCP, tell me which one-pagers we should have and do not.

FILL IN
- Current list: [paste the one-pagers we have: title, audience, date]

CONTEXT
I want the gaps in the current list by persona, Tier 1 competitor and priority vertical.

PULL FROM THE UNIVERSE
- Approved personas, Tier 1 competitors and the ICP's priority verticals.
- Win rate per competitor and deals per segment from the dashboards, so the gaps are ranked by stakes.

BUILD
- The matrix of audience versus asset, with gaps marked and ranked.

OUTPUT
The gap list in priority order.

GROUNDING
Rank by dashboard numbers with n and window. Do not invent personas or verticals the documents do not list.
```

## Advanced prompts

### Run a five-second test with synthetic buyers

```
Run a five-second test and a sixty-second test on my one-pager with each target persona, the way a UX researcher would, and fix what doesn't stick. Use Calven MCP for the personas, their words and a persona review.

FILL IN
- One-pager: [paste the one-pager text, marking the headline, subhead and section heads]
- Personas: [personas it's for]

CONTEXT
Buyers glance at a one-pager before deciding whether to read it, and forward it only if they can explain it in a sentence. I want to know what survives the glance.

FROM CALVEN
- Each persona's canvas: goals, pains, objections, messaging hooks.
- How each persona describes the problem, from customer quotes.
- A persona review of the one-pager against those personas.

SIMULATE
- Five-second pass: for each persona, show only what the eye catches first (headline, subhead, the biggest number, the first heading). In character, they answer: what is this, who is it for, would I read on?
- Sixty-second pass: the persona skims the whole page. They answer: what's the one claim I remember, what don't I believe, who would I forward it to and with what note?
- Compare their answers with what the page intended to say. Score recall, relevance and credibility.
- Rewrite the headline and subhead until every persona's five-second answer matches the intent. Show two rounds.

OUTPUT
A table per persona for both passes, the scores, the rewritten top of the page, and the forwarding note each persona would write.

GROUNDING
Persona reactions trace to their canvas, quotes and the review, cited. Mark anything beyond that as your extrapolation, and don't let a persona approve a claim the product brief doesn't support.
```

### Run a conjoint on what to lead with

```
Find the best combination for my one-pager's lead with a conjoint-style trade-off test: the personas choose between versions and we infer what each element is worth. Use Calven MCP for the personas, the proof we have and how buyers describe the problem.

FILL IN
- Topic: [persona, segment, competitor or release the one-pager covers]
- Personas: [personas]

CONTEXT
Every one-pager argument is about what goes first: the pain or the outcome, a number or a logo, demo or ROI. A conjoint settles it by forcing trade-offs instead of asking people what they like.

FROM CALVEN
- Each persona's canvas: goals, pains, objections, hooks.
- Customer quotes for the topic tagged Quantified outcome, Time-to-value or Competitive win.
- The messaging matrix for the personas and the value pillar the topic sits under.
- A persona review of the final version.

SIMULATE
- Define four attributes with two or three levels each: headline framing (pain, outcome, contrarian), proof type (number, customer quote, named competitor win), length (half page, full page), call to action (demo, ROI estimate, case study).
- Build 12 version pairs that vary the levels. For each persona, choose the version they'd forward, with a one-line reason drawn from their canvas.
- Estimate each level's value per persona. If you can run code, fit a simple logit on the choices and show part-worths.
- Assemble the winning combination and write it, using only proof on record. Then run the persona review on it.

OUTPUT
The part-worths table per persona, where personas disagree, and the finished lead section with the review findings.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The part-worths come from simulated choices, so call them directional, and every proof point used must be on record, cited.
```

## Ad hoc questions

- Draft a one-pager for [persona] on [capability].
- What proof point should a [segment] one-pager lead with?
- Give me a customer quote with a quantified outcome for [topic].
- Is "[claim]" in the product brief?
- Rewrite this one-pager's problem statement in [persona]'s words: [paste].
- Which Tier 1 competitor has no one-pager?
- What is our boilerplate paragraph?
- How does [persona] describe the problem we solve?
- Which one-pagers did the last release make stale?
- Which value pillar has the strongest quantified customer quote for a one-pager?
- What's the one sentence [persona] would use to forward a one-pager about us?
- Which segment has won deals but no proof point I can name on a one-pager?
- What do buyers in [segment] say the cost of doing nothing is, in their words?
- Which claim on our one-pagers would a technical buyer challenge first?
- What's the most common reason [persona] gives for not taking a meeting, from their canvas?

# Partner enablement kit


Partner reps need to pitch and follow up without you in the room, and enablement is where partner programs fail: too locked and nobody uses it, too loose and the message drifts. You build and maintain the kit (pitch deck, one-pager, talk track, demo storyline, outreach templates) so a rep can find the right asset, trust it's current and use it on a call. Calven checks every asset against your approved messaging and product facts.

## Prompts

### Outline the partner pitch deck

```
Using Calven MCP, outline the partner pitch deck for partners of the type below selling the product below to the segment.

FILL IN
- Partner type: [partner type]
- Product: [product]
- Segment: [segment]

CONTEXT
Partner reps present this to their customers with our logo and theirs. Twelve slides at most. They can swap a case study and localise, but the story must not change.

PULL FROM THE UNIVERSE
- Positioning: statement, category, unique attributes, value themes, why now.
- Messaging: one-liner, value pillars, value propositions for the personas in the segment.
- The ICP summary and buying triggers.
- The product brief: overview, use cases, integrations.
- Approved customer quotes and proof points.

BUILD
- One line per slide: title, the message, the source document, what a partner may change on that slide and what is locked.

OUTPUT
The slide-by-slide outline with sources and a locked / editable flag per slide.

GROUNDING
Use only approved documents and quotes. No claim the product brief does not support. If a persona in the segment has no canvas, say so.
```

### Write the one-pager and talk track

```
Using Calven MCP, write the partner one-pager and the five-minute talk track for the persona below.

FILL IN
- Persona: [persona]

CONTEXT
A partner rep meets the persona for a reason unrelated to us and needs to recognise when we fit and say the right thing. One page plus a half-page talk track.

PULL FROM THE UNIVERSE
- The value proposition for the persona from the messaging matrix, and the pillar that leads.
- The persona's canvas: pains, jobs, objections, messaging hooks.
- The ICP buying triggers and disqualifiers.
- The product brief use cases for this persona, and one proof point.

WRITE
- The one-pager: the problem in the persona's words, what we do, the three pillars, proof, the next step.
- The talk track: the opening question, the two signals that mean "bring us in", the two that mean "do not", the response to the most common objection, how to hand off.

OUTPUT
The one-pager, then the talk track, with sources.

GROUNDING
Use only the messaging, canvas, ICP and brief in the Universe. Do not invent a trigger or an objection the documents do not list.
```

### Write outreach templates for partner reps

```
Using Calven MCP, write three outreach templates a partner rep can send to the persona below about us.

FILL IN
- Persona: [persona]

CONTEXT
The partner already has a relationship with the contact. Templates: a first mention of us, a follow-up with proof, an invitation to a joint call. Under 120 words each, no hype.

PULL FROM THE UNIVERSE
- The persona's canvas: pains and messaging hooks.
- The words customers use for the pain, from calls, with one quote.
- One approved proof point.

WRITE
- Three templates with placeholders for the partner's name and context.

OUTPUT
The templates with sources.

GROUNDING
Use only canvas, quotes and proof in the Universe. Keep the quote verbatim and attributed as approved.
```

### Review a partner asset against messaging

```
Using Calven MCP, review this partner asset against our approved messaging and product facts.

FILL IN
- Asset type: [deck, one-pager or template]
- Asset: [paste the asset]

CONTEXT
The asset is one a partner adapted. I need to know what drifted.

PULL FROM THE UNIVERSE
- Our messaging: pillars, value propositions, language we have standardised on.
- The product brief, for every product claim.
- The claims register, for anything already flagged.

CHECK
- Flag lines that are off-message, overstated, stale or not in the brief.
- Give the on-message, accurate version of each.

OUTPUT
The asset annotated, then the clean version.

GROUNDING
Judge only against the Universe and cite what each flag conflicts with. If the asset is clean, say so.
```

### Find the assets that need refreshing

```
Using Calven MCP, tell me which partner assets need updating this month.

FILL IN
- Asset list: [paste the asset list with dates]

CONTEXT
The asset list covers our partner kit, with the date each asset was last updated.

PULL FROM THE UNIVERSE
- Product changes and drift findings since the earliest of those dates.
- Competitive signals of high severity in the same window.
- The version and updated date of positioning and messaging.

BUILD
- A table: asset, last updated, what changed since that could affect it, update needed yes / no / check.

OUTPUT
The table with sources.

GROUNDING
Match on what the records say changed. Where you cannot tell from an asset title, say "check".
```

## Advanced prompts

### Play the telephone game with your pitch

```
Play the telephone game with our pitch: pass it from the partner rep to the customer's champion to the person who signs, and show what's left at the end. Use Calven MCP for the original story and how each listener thinks.

FILL IN
- Partner: [partner]
- Kit asset: [paste the talk track or one-pager]
- Champion persona: [persona]
- Signer persona: [persona]

CONTEXT
I won't be in the room for any of these retellings. The partner rep shortens the pitch, the champion shortens it again, and by the time it reaches the signer the reason to buy may be gone. I want to see the decay before the kit ships.

FROM CALVEN
- The core narrative, one-liner and value pillars from our messaging.
- The champion's and the signer's persona canvases: goals, pains, KPIs and objections.
- The proof points our positioning lists.

SIMULATE
- Round 1: the partner rep, who sells several vendors, retells the pitch to a prospect in 90 seconds. Write what they'd plausibly say, dropping what's hard to remember.
- Round 2: the champion retells it to the signer in a short internal message, filtered through their own goals.
- Round 3: the signer sums it up in one sentence and decides whether to take a meeting.
- After each round, mark which pillars and proof points survived, which got distorted, and which claims got invented along the way.

OUTPUT
The three retellings, a survival table (each pillar and proof point by round), and a rewrite of the asset that leads with what survives and swaps what dies for something easier to repeat.

GROUNDING
Cite the messaging and the canvases for every judgement. Mark each retelling as your simulation, not a recorded conversation, and don't count a pillar as surviving unless it's recognisably there.
```

### Write an eval set for partner-made assets

```
Write an eval set and a grading prompt I can run on any deck, email or one-pager a partner makes about us. Use Calven MCP for the approved story, the claims on record and what partners must never say.

FILL IN
- Calibration assets: [paste two or three real partner assets, good and bad]
- Asset types to cover: [deck, email, one-pager, website copy]

CONTEXT
Partners rewrite the kit within weeks. I can't read everything they produce, so I want an automatic first pass that catches off-message lines, unsupported claims and leaked internal content before a customer sees them.

FROM CALVEN
- The value pillars, one-liner and boilerplate from our messaging.
- The claims recorded in the Universe, with their status and any concern flagged.
- The known weaknesses in the product brief, and the battlecard sections meant for internal use only.

BUILD
- Define five checks with pass and fail criteria: on-message, claim supported, no internal content, no promise beyond the product brief, competitor described fairly.
- Write 25 test snippets, each a sentence or two a partner might write, with the expected verdict and the reason. Mix clear passes, clear fails and borderline cases.
- Write the grading prompt: an asset goes in, a verdict per check comes out with the offending line quoted.
- Run the grader on my calibration assets, list where it disagrees with what a careful reviewer would say, and tighten the criteria until it doesn't.
- If you can run code, keep the eval set in a CSV and score the grader's accuracy against it.

OUTPUT
The five checks, the 25-row eval set, the grading prompt, and the grader's accuracy on the eval set.

GROUNDING
Every pass or fail traces to a Calven document or claim row, cited. Don't invent an approved claim. If a snippet needs one that isn't on record, it fails for lack of support.
```

### Design an A/B test of two talk tracks

```
Design a proper A/B test of two outreach openers across the partner's reps, so I learn which one books more meetings. Use Calven MCP to pick the two angles worth testing and to screen both first.

FILL IN
- Partner: [partner]
- Reps running outreach: [number of partner reps]
- Volume: [outreaches per rep per week]
- Current meeting rate: [baseline rate, or write "unknown"]
- Persona: [persona]

CONTEXT
Every partner manager has an opinion about the best opener. A partner's reps have the volume to settle it, but only if the test is designed so the result means something.

FROM CALVEN
- Two candidate angles: the value proposition for the persona, and a second pillar the messaging matrix ties to the same persona.
- The persona's pains and messaging hooks from the canvas.
- A persona review of both openers, so neither goes out with a known flaw.

METHOD
- Write both openers in under 60 words each, differing only in the angle.
- Run a power calculation: the minimum detectable lift for my volume and baseline at 80 percent power and 5 percent significance, and how many weeks that takes. If you can run code, show the calculation.
- Design the assignment: randomise by rep or by account, and say which one avoids contamination given my numbers.
- Write the stopping rule and the decision rule before any data comes in.

OUTPUT
The two openers, the review verdicts, the sample size and duration, the assignment plan, the decision rule, and a tracking sheet layout the partner can fill in.

GROUNDING
Label every number as Calven (cited), mine, or your assumption. If my volume can't detect a realistic lift, say so and propose a bigger test unit instead of an underpowered test.
```

## Ad hoc questions

- What is the value proposition for [persona] that a partner should lead with?
- Give me the three use cases a partner should demo for [segment].
- Which proof point fits the [pillar] slide?
- When should a partner not bring us in? Quote the ICP disqualifiers.
- What is the approved line against [competitor] that is safe to give a partner?
- Rewrite this partner email in our customers' words: [paste]
- Is "[claim in a partner deck]" supported by the product brief?
- What changed in the product since [date] that a partner deck might get wrong?
- What are the buying triggers a partner rep should listen for?
- Which personas sit on the deals we win most?
- Draft the boilerplate paragraph for a partner's website.
- Which value pillar do our own reps pull through least on calls?
- Which objection costs us the most pipeline, and does our objection handling cover it?
- What words do customers use for the problem that never appear in our messaging?
- Which cells of the messaging matrix for [persona] are empty or thin?
- Which proof point do won-deal buyers echo most in their own words?
- Which published documents did a recent product change leave stale?

# Call scripts


You want a talk track you can flex live, not a feature list read aloud. You get one per persona: an opener, the reason for the call, value in one line, an open question, and the three objections with a two-step response each. Calven puts a source beside every line, from the company's own knowledge.

## Prompts

### Build a cold-call talk track

```
Using Calven MCP, build my cold-call talk track for the persona and segment below.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
Cold outbound, no prior contact. I want a framework I can flex live, not a script to read.

PULL FROM THE UNIVERSE
- The persona's canvas: goals and KPIs, pains by impact, jobs to be done, objections, hooks.
- The value proposition for this persona from our messaging matrix.
- The objections this persona raises most on calls, with the approved response and a quote.
- The discovery questions from the battlecard for the competitor most common in this segment.

BUILD
- Opener (one line) and reason for the call (one line) on the persona's top pain, in the customer's words.
- Value line (one sentence).
- Two open questions.
- Three objections, each: acknowledge (one line), reframe with a question (one line), proof to send after.

OUTPUT
A one-page talk track with the source beside each line.

GROUNDING
Use only canvas content, messaging, quotes and battlecard material from the Universe and cite it. Do not invent a pain or an objection.
```

### See how our reps opened won calls

```
Using Calven MCP, show me how our reps open and ask on calls we won with the persona below.

FILL IN
- Persona: [persona]

CONTEXT
I want to borrow the questions and value claims that worked, not invent new ones.

PULL FROM THE UNIVERSE
- Vendor quotes of category Discovery question and Value claim from conversations tied to won deals with this persona.
- The messaging pillar each one pulls through.

BUILD
- The five discovery questions reps asked most on won calls, verbatim.
- The three value claims that match the approved messaging, and any that drift from it.

OUTPUT
Two short lists with the call each came from.

GROUNDING
Use only vendor quotes in the Universe, verbatim and cited. Flag drift from the messaging rather than hiding it.
```

### Fact-check the talk track's claims

```
Using Calven MCP, fact-check this talk track.

FILL IN
- Talk track: [paste the talk track]

CONTEXT
I want every claim and proof confirmed before I use it.

PULL FROM THE UNIVERSE
- The product brief, and the quotes or deals behind each proof.

CHECK
- Each claim: correct, overstated or not in the brief, with the accurate wording.
- Each proof: the source and whether it is approved for external use.

OUTPUT
The talk track annotated, then the lines to change.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say so.
```

### Rehearse the cold call with the persona

```
Using Calven MCP, play the persona below and take my cold call.

FILL IN
- Persona: [persona]
- Product: [product]

CONTEXT
I will open with my talk track. Respond as the persona would, including the brush-offs the canvas says you give. After four exchanges, drop character and tell me what to fix.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, objections, how they talk, what they find credible.

OUTPUT
An interactive exchange, then a three-line debrief.

GROUNDING
Stay true to the persona in the Universe. Do not make the buyer easier or harder than the canvas supports.
```

## Advanced prompts

### Build a clickable call flow for live calls

```
Build a working call-flow tool I can click through during a live call. Use Calven MCP for the approved messages, the persona's objections and the competitor answers it branches to.

FILL IN
- Persona: [persona]
- Main competitors: [competitors]
- Format: [an HTML file, or a spreadsheet with linked tabs]

CONTEXT
A script on paper falls apart at the first unexpected answer. I want one screen: the opener, then a button for each thing the buyer can say, each leading to the next line and the next question, with the evidence behind it a click away.

FROM CALVEN
- The persona canvas: pains, objections with responses, messaging hooks.
- The messaging matrix row for the persona at the awareness stage, and objection handling.
- The battlecard objection handling ("they say, you say") and discovery questions for each competitor.
- Two or three customer quotes per pain, verbatim.

BUILD
- A tree: opener, reason for the call, then branches for interest, each objection, each competitor, and "not me". Each node has the line to say, a follow-up question, and a source note.
- Keep every spoken line under 25 words.
- If you can run code, write a single self-contained HTML file with buttons, a back button and a reset; otherwise give the tree as a table with node IDs I can paste into a spreadsheet.
- Add a "dead ends" list: branches where the evidence has no good answer.

OUTPUT
The working file (or the table), plus the dead-ends list.

GROUNDING
Every line cites the messaging, canvas, battlecard or a quote. Don't write a response the Universe doesn't support; mark it as a dead end instead.
```

### Run an opener tournament judged by the buyer

```
Run a tournament between candidate openers, judged pair by pair by the persona, and rank them with an Elo rating. Use Calven MCP for the raw material and the judge.

FILL IN
- Persona: [persona]
- My current opener: [paste it]

CONTEXT
I can't A/B test twelve openers on live calls. Pairwise judging is how you rank things when absolute scores are unreliable, and it's what I want before I spend a week of dials on one opener.

FROM CALVEN
- The persona canvas: pains, goals, messaging hooks.
- The top themes for the persona from customer quotes, with mention counts and verbatim lines.
- How our reps opened calls on won deals, from vendor quotes.
- A persona review of the final shortlist.

SIMULATE
- Write eleven challengers to my opener, each built on a different pain, hook, quote or rep line. Each under 20 words spoken.
- Run every pair: the persona hears both cold and picks the one that earns ten more seconds, with a one-line reason in their voice.
- Score with Elo (start 1,000, K of 32), randomising the pair order. If you can run code, run three tournaments with different orders and average the ratings.
- Send the top three to the persona review and adjust if the review flags something the tournament missed.

OUTPUT
A ranked table: opener, rating, wins, the persona's typical reason. Then the top two with their source, and why my current opener placed where it did.

GROUNDING
Label the ratings as simulated judgement, not call data. Every opener cites its source in the Universe. Don't invent a rep line or a quote.
```

### Find what drives meetings in your call log

```
Run a driver analysis on my call log to find what actually predicts a booked meeting. Use Calven MCP to map my contacts to personas and fit tiers and to tag each opener with the pillar it uses.

FILL IN
- Call log: [attach the dialer export: contact, title, account, date and time, opener used, outcome]
- Window: [window]

CONTEXT
I have a feeling that some openers work better. The log has hundreds of calls. I want to separate the opener from everything else that differs between calls: who I called, how good the fit was, and when.

FROM CALVEN
- Personas with role titles, so each contact's title maps to a persona.
- ICP fit tier for each account found in the CRM.
- The value pillars and messaging hooks, so each opener is tagged with the pillar it leans on.

METHOD
- Clean the log: map titles to personas, accounts to fit tiers, openers to pillars. List what didn't map.
- Describe first: connect rate and meeting rate by opener, persona, tier, hour and weekday, with counts.
- If you can run code, fit a logistic regression of meeting booked on opener pillar, persona, tier and time slot. Report the effects with intervals and check for openers that only look good because I used them on Tier 1 accounts.
- Say plainly how many calls a real difference needs, and which effects the log can't support.

OUTPUT
A driver table ranked by effect size, the confounders you found, and three changes to my calling plan.

GROUNDING
Label every number as Calven (cited, with n), mine (from the log), or your assumption. Don't invent outcomes for calls the log doesn't record.
```

## Ad hoc questions

- What is [persona] measured on?
- Give me a fifteen-second opener for [persona] on [pain], in the customer's words.
- What is our value proposition for [persona] in one sentence?
- What are the two best discovery questions against [competitor]?
- Which objection does [persona] raise most, and what is the approved response?
- How did our reps open calls we won with [persona]? Quote them.
- Which value claim do reps make that is not in our messaging?
- What does [persona] find credible as proof?
- Is "[claim]" in our product brief?
- What should I never say to [persona] in the first minute?
- Give me a warm-call opener for an inbound [persona] who downloaded [asset].
- What question exposes [competitor]'s weakness without naming them?
- Which pain do [persona]s mention most on calls, and has it grown this quarter?
- Which value claim do our reps make on calls that buyers never repeat back?
- What does [competitor]'s talk track say, so I know what the buyer heard last week?
- Which objection does our messaging answer that buyers never actually raise?
- Which discovery question shows up in vendor quotes from won deals but not lost ones?
- What does a [persona] call the problem, in three words from the quotes?

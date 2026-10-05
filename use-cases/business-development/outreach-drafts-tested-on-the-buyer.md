# Outreach drafts tested on the buyer


You want a first email the persona reads to the end and answers. You get a draft that names a problem the buyer actually has, in words they use, with one proof they'd believe and no line that reads like every other vendor in their inbox. Calven adds the company's own knowledge, so you're not writing from the feature list and a generic persona slide, and "AI-powered platform" doesn't go out again.

## Prompts

### Pick the three best cold email openers

```
Using Calven MCP, give me the three best openers for a cold email to the persona below at an account in this segment.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
First touch, no prior relationship. I want to open on a problem they already have, not on what we sell.

PULL FROM THE UNIVERSE
- The persona's canvas: pains ranked by impact, jobs to be done, messaging hooks.
- The pains customers in this persona named most on calls, with a verbatim quote for each.
- The buying triggers in our ICP for this segment.

BUILD
- Three opening angles, each: the pain in the buyer's words, the quote behind it, how often it came up, and the trigger that makes it timely.
- Rank them by how often the pain appears in calls.

OUTPUT
A short table with the three angles and their evidence.

GROUNDING
Use only pains, quotes and triggers from the Universe and cite them. Do not invent a pain the canvas or the calls do not support.
```

### Test and rewrite your cold email

```
Using Calven MCP, read this cold email as the persona below and rewrite it in our customers' words.

FILL IN
- Persona: [persona]
- Contact: [contact]
- Title: [title]
- Account: [account]
- Draft: [paste your draft]

CONTEXT
I am emailing the contact at the account. I want the honest reaction to the draft first, then the rewrite.

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review on the draft.
- The words customers use for the pain this email is about, with one verbatim quote.
- One proof from a deal we won where this pain decided it.

REACT
- Where the persona stops reading and why.
- Which line reads as vendor marketing.
- Whether they would reply, in one word, and why.

REWRITE
- Under 90 words. Open on the pain in the customer's words, one proof with the customer named only if the quote is approved for use, one question as the ask.

OUTPUT
The reaction, the rewrite, and one line on what changed.

GROUNDING
React only from what the Universe says about this persona. Use only quotes and proof from the Universe, cited. Do not invent outcomes or customer names.
```

### Fact-check a proof line

```
Using Calven MCP, confirm the proof in this email is true and usable.

FILL IN
- Proof line: [paste the proof line]

CONTEXT
I need to know the quote or deal behind the proof line and whether the wording overstates it.

PULL FROM THE UNIVERSE
- The customer quote or surveyed deal this proof comes from.
- The product brief entry for the capability it implies.

CHECK
- Does the source say what the line says? Quote it.
- Is the capability in the product brief as described?
- Suggest the accurate wording if either is off.

OUTPUT
Source, verdict, accurate wording.

GROUNDING
Confirm only against the Universe and cite it. If no source exists, say so; do not soften the claim into something you cannot source either.
```

### Explain why one email outperformed

```
Using Calven MCP, explain why these two emails got different reply rates.

FILL IN
- Persona: [persona]
- Email A: [paste email A and its reply rate]
- Email B: [paste email B and its reply rate]

CONTEXT
Email A and email B went to the same persona and segment.

PULL FROM THE UNIVERSE
- The persona's canvas and the pains and objections customers raise most.
- The language gaps between our messaging and how customers talk.

DIAGNOSE
- Which pain, phrase or proof in A matches what buyers say, and which line in B triggers a known objection or reads as vendor language.

OUTPUT
Three lines of diagnosis and the rule to carry into the next sequence.

GROUNDING
Ground the diagnosis in the Universe and cite it. If the Universe does not explain the difference, say so.
```

## Ad hoc questions

- What does [persona] care about most, and what do they say on calls about it?
- Would [persona] reply to this: "[paste one line]"?
- Give me the three phrases customers use for [pain].
- Which of our messaging hooks for [persona] has a customer quote behind it?
- Rewrite this opener without the word "platform": [paste]
- What is the one proof point for [pillar] that a [persona] would believe?
- Which objection does [persona] raise first, and how does our messaging answer it?
- Is "[claim]" in our product brief?
- What buying trigger should I lead with for a [segment] account?
- Which pains show up more this quarter than last for [persona]?
- Give me a subject line under 40 characters about [pain], in the customer's words.
- What did customers say about switching from [competitor]? Quote them.

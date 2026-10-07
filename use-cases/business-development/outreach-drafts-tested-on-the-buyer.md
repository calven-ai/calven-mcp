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

## Advanced prompts

### Drop the email into a synthetic inbox

```
Drop my email into a simulated inbox next to the emails my competitors send and see whether the persona opens it. Use Calven MCP for the persona, the competitors' pitches and a persona review.

FILL IN
- My email: [paste subject and body]
- Persona: [persona]
- Competitors in their inbox: [competitors]

CONTEXT
My email isn't read on its own. It sits between a dozen vendors saying the same thing. I want to see it from inside that inbox, where the buyer spends three seconds per subject line.

FROM CALVEN
- The persona canvas: goals, pains, objections, what they find credible.
- Each competitor's positioning and talk track from their battlecard.
- A persona review of my email.

SIMULATE
- Write eight realistic competitor emails from the battlecards, in each rival's own messaging, plus two generic category emails.
- Shuffle mine in. Play the persona triaging the inbox: subject and preview only, three seconds each. Open, archive or delete, with a one-line reason in their voice.
- For the emails they open, play the read: where do they stop, and do they reply?
- Run the triage five times with the order shuffled, so position doesn't decide the result.

OUTPUT
Mine versus the rest: open rate across the five runs, where the persona stopped reading, and the line that lost them. Then a rewrite and a rerun of the triage with it.

GROUNDING
Rival emails are simulated from battlecards and say so. Persona reactions come from the canvas and the review, cited. Don't invent a competitor claim the battlecard doesn't contain.
```

### Run an ablation on every sentence

```
Run an ablation study on my email: remove one sentence at a time and see which ones the persona would miss. Use Calven MCP for the persona review and the evidence behind each line.

FILL IN
- My email: [paste it]
- Persona: [persona]

CONTEXT
Every sentence in my email felt necessary when I wrote it. Most cold emails are twice as long as they should be. I want to know which sentences carry the reply and which are padding.

FROM CALVEN
- A persona review of the full email, then of each ablated version.
- The persona canvas: pains, objections, messaging hooks.
- Customer quotes that support any claim in the email.

METHOD
- Number the sentences. Create one version per sentence with that sentence removed.
- Review the full email and each version with the persona. Score each on the same 1 to 10 reply-likelihood scale, with one reason.
- A sentence's weight is the drop in score when it's removed. Negative weight means the email is better without it.
- Check each high-weight sentence against the Universe: is its claim backed?
- Build the shortest version that keeps every high-weight sentence, and review it once more.

OUTPUT
A table: sentence, weight, reason, evidence check. Then the short version with its score next to the original's.

GROUNDING
Label every score as from the persona review or your judgement. Cite every claim. Don't add a proof point that isn't in the Universe to replace a cut one.
```

### Measure how much of it is the buyer's language

```
Measure how much of my email uses the buyer's own words versus our internal language, and swap the gaps. Use Calven MCP for the customer quotes and our messaging vocabulary.

FILL IN
- My email: [paste it]
- Persona: [persona]
- Topic: [the pain or theme the email is about]

CONTEXT
We write in our messaging's words. Buyers describe the same problem differently, and they reply to their own words. I want the overlap measured, not guessed.

FROM CALVEN
- Customer quotes from the persona on the topic, verbatim, as many as exist.
- The messaging document's pillars and value propositions for the persona.
- Language gaps from the messaging dashboard, if reported.

METHOD
- Build two vocabularies: buyer language from the quotes, vendor language from the messaging. Use one- to three-word phrases.
- If you can run code, compute TF-IDF weights for each, then score my email: the share of its key phrases found in buyer language, in vendor language, or in neither.
- List the vendor phrases in my email with the buyer phrase that means the same thing, and the quote it comes from.
- Rewrite the email with the swaps and rescore it.

OUTPUT
A before and after score, the swap table with sources, and the rewritten email.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Buyer phrases come only from quotes. Don't invent a phrase a buyer never said.
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
- Which vendor phrase do we use that customers never say?
- Which pain does [competitor]'s talk track lead with, so I can avoid sounding the same?
- Which customer quote has a number in it that [persona] would trust?
- What's the most common objection to emails like mine, per the [persona] canvas?
- Which claim in our messaging has the weakest proof behind it?
- Which of our pillars do reps mention least on calls, per field adoption?

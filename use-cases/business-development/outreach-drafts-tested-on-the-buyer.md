# Outreach drafts tested on the buyer

**Team:** Business development · also demand generation, account executives
**Impact:** High. Every BDR sends dozens of emails a day; one that reads as the buyer's problem instead of a pitch changes the reply rate on all of them.
**Prerequisites:** personas approved, messaging approved. Better with call transcripts ingested (quotes, themes) and win/loss surveys running (proof from won deals).

## What the team is trying to do

Send a first email the persona reads to the end and answers. Done means the draft names a problem the buyer actually has, in words they use, with one proof they would believe, and no line that reads as every other vendor in their inbox. Without the company's own knowledge the BDR writes from the product's feature list and a generic persona slide, and "AI-powered platform" goes out again.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the angle | Decide which pain or trigger the email opens on for this persona | The persona's pains ranked by impact, the pains customers named most on calls, the buying triggers in the ICP | Persona canvas, themes, quotes, ICP (buying triggers) |
| 2 | Draft | Write subject, opener, one proof, one ask | Drafts in the customer's words from the persona's messaging hooks and verbatim quotes | Persona canvas, quotes, messaging matrix (awareness stage) |
| 3 | Test on the buyer | Read the draft as the persona would | Persona review: what lands, what reads as vendor marketing, the line they would delete at | `review_against_personas`, persona canvas |
| 4 | Rewrite | Fix the opener and the proof | A rewrite that leads with the problem and uses a proof from a won deal | Quotes, deal drivers (won, direction helped), messaging |
| 5 | Fact-check | Make sure the proof and the claim are true | The claim against the product brief; the proof against the quote or deal it came from | Product brief, quotes, surveyed deals |
| 6 | Send and track | Load into the sequencer, watch replies | Calven does not help here | |
| 7 | Learn | Note which angle got replies | Why a reply came: which pain, which proof, and whether it matches what buyers say on calls | Quotes, themes |

## Recommended prompts

### Step 1: pick the angle

```
Using Calven MCP, give me the three best openers for a cold email to [persona] at a [segment] account.

CONTEXT
First touch, no prior relationship. I want to open on a problem they already have, not on what we sell.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains ranked by impact, jobs to be done, messaging hooks.
- The pains customers in this persona named most on calls, with a verbatim quote for each.
- The buying triggers in our ICP for this segment.

BUILD
- Three opening angles, each: the pain in the buyer's words, the quote behind it, how often it came up, and the trigger that makes it timely.
- Rank them by how often the pain appears in calls.

OUTPUT
A short table with the three angles and their evidence.

GROUNDING
Use only pains, quotes and triggers from the Universe and cite them. Do not invent a pain the canvas or the calls do not support.

[name the persona and segment]
```

### Steps 2 to 4: test and rewrite

```
Using Calven MCP, read this cold email as [persona] and rewrite it in our customers' words.

CONTEXT
I am emailing [contact], [title] at [account]. The draft is at the bottom. I want the honest reaction first, then the rewrite.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the draft.
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

[paste your draft, and name the contact's persona]
```

### Step 5: fact-check a proof

```
Using Calven MCP, confirm the proof in this email is true and usable.

CONTEXT
The email claims "[proof line]". I need to know the quote or deal behind it and whether the wording overstates it.

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

[paste the proof line]
```

### Step 7: learn from replies

```
Using Calven MCP, explain why these two emails got different reply rates.

CONTEXT
Email A ([reply rate]) and email B ([reply rate]) went to the same persona and segment. Both are at the bottom.

PULL FROM THE UNIVERSE
- The [persona] canvas and the pains and objections customers raise most.
- The language gaps between our messaging and how customers talk.

DIAGNOSE
- Which pain, phrase or proof in A matches what buyers say, and which line in B triggers a known objection or reads as vendor language.

OUTPUT
Three lines of diagnosis and the rule to carry into the next sequence.

GROUNDING
Ground the diagnosis in the Universe and cite it. If the Universe does not explain the difference, say so.

[paste both emails with their numbers]
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

## Good practice

- Name the persona as Calven names it. The review runs against the approved canvas, not a job title.
- Ask for the reaction before the rewrite. The reaction tells you what to stop doing in every email after this one.
- Keep the rewrite under 90 words. Ask for it explicitly; the AI tool will pad otherwise.
- Use a customer name in a proof only when the quote is approved for use. Ask whether it is.
- Paste the contact's title so the AI tool picks the right persona when the title is ambiguous.
- Save the test-and-rewrite prompt as a snippet. It is the same for every email.

## Not covered today

- Sending, sequencing, open and reply tracking. Those stay in the sequencer.
- The prospect's news, hiring or site. Calven holds the CRM mirror and the triggers recorded on the account, not a live web read.
- Writing the reaction back into the CRM or the sequencer.

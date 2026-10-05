# Sequence reviews

**Team:** Business development · also demand generation, sales enablement
**Impact:** High. A sequence runs to hundreds of contacts for weeks; a claim that drifted, an objection it walks into or a message the persona deletes is multiplied every day it runs.
**Prerequisites:** messaging approved, product brief approved, personas approved. Better with competitors tracked and call transcripts ingested.

## What the team is trying to do

Check a whole sequence (four to seven touches across email, LinkedIn, phone) before it goes live or when replies drop. Done means every touch is on the approved story, true to the product, reads as the persona's problem, holds up against the incumbent, and the sequence does not repeat itself. Without the company's knowledge the review is one manager's taste on a Friday.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Lay out the sequence | Touch by touch: channel, day, job, message | Calven does not help here | |
| 2 | Message check | Is each touch on the approved story for this persona? | Lines that drift from the value props and pillars, language we moved away from | Messaging document, messaging dashboard (quality, language gaps) |
| 3 | Fact check | Are the claims true? | Every product, pricing and integration claim against the brief; stale claims after a product change | Product brief, product changes, claims |
| 4 | Persona read | Would the persona open touch two? | Persona review per touch and across the sequence: repetition, the touch they stop at | `review_against_personas`, persona canvas |
| 5 | Competitive check | Does it hold if the incumbent is [competitor]? | Loss reasons the sequence walks into, landmines it could set | Competitor battlecard, deal drivers |
| 6 | Gap check | What is the sequence missing? | Objections the persona raises that no touch pre-empts, proof the sequence never offers | Voice-of-customer (objections), positioning (proof points) |
| 7 | Rewrite the weak touches | Fix what the review flagged | Rewrites in the customer's words | Quotes, messaging |
| 8 | Load and run | Update the sequencer | Calven does not help here | |

## Recommended prompts

### Steps 2 to 4: the full review

```
Using Calven MCP, review this outbound sequence for [persona] in [segment] before it goes live.

CONTEXT
The full sequence is at the bottom, touch by touch with channel and day. I want it checked for message, facts and how the buyer reads it.

PULL FROM THE UNIVERSE
- Our approved messaging for this persona, and the language we have moved away from.
- The product brief, for every product, pricing and integration claim.
- The [persona] canvas, and run the persona review on the whole sequence.

CHECK
- Per touch: off-message lines, wrong or stale claims, the line the persona would delete at.
- Across the sequence: what repeats, where the ask escalates too early, the touch where the persona stops.

OUTPUT
The sequence annotated inline with flags and severity, then the three touches to fix first.

GROUNDING
Judge only against the messaging, product brief and persona in the Universe and cite what each flag conflicts with. If a touch is clean, say so.

[paste the sequence]
```

### Step 5: competitive check

```
Using Calven MCP, check this sequence for accounts where [competitor] is the incumbent.

CONTEXT
Most contacts on this list already use [competitor]. The sequence is at the bottom.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: where we win, where we lose, landmines, objection handling.
- The reasons we lost to [competitor], with the buyer's words.

CHECK
- Touches that walk into a known loss reason without handling it.
- The one touch where a landmine question fits without naming the competitor.
- Claims that would not survive the prospect comparing us side by side.

OUTPUT
The flagged touches with the suggested line for each.

GROUNDING
Use only the battlecard and win/loss evidence in the Universe and cite it. Do not invent competitor weaknesses.

[paste the sequence and name the competitor]
```

### Step 6: gap check

```
Using Calven MCP, tell me what this sequence is missing for [persona].

CONTEXT
The sequence is at the bottom. It gets opens but few replies.

PULL FROM THE UNIVERSE
- The objections and pains [persona] raises most, from the voice-of-customer read.
- The proof points in our positioning and the customer quotes behind them.

CHECK
- Objections the persona has that no touch pre-empts.
- Pains the persona ranks high that no touch names.
- Proof the sequence never offers.

OUTPUT
A gap list, each with the touch it belongs in and a suggested line.

GROUNDING
Use only objections, pains and proof from the Universe and cite them. Do not invent gaps if the sequence covers the persona well.

[paste the sequence]
```

### Step 7: rewrite a touch

```
Using Calven MCP, rewrite touch [n] of this sequence in our customers' words.

CONTEXT
Touch [n] was flagged for [reason]. Its job is [job]. Keep the channel and the ask.

PULL FROM THE UNIVERSE
- The [persona] canvas messaging hooks and the quotes customers gave on this pain.
- The product brief entry for anything the touch claims.

WRITE
- The rewrite, same length or shorter, leading with the pain in the customer's words.

OUTPUT
The rewrite and one line on what changed.

GROUNDING
Use only hooks, quotes and product facts from the Universe, cited.

[paste touch n]
```

## Ad hoc questions

- Is this sequence on-message for [persona]? [paste]
- Which claim in this email is not in our product brief? [paste]
- Does our product still do what touch 3 says, after the last release?
- Would [persona] open the fourth email after reading the first three?
- Which objection does this sequence never answer?
- Where in this sequence could I set a landmine for [competitor]?
- What repeats across these five emails?
- Which touch should carry the customer quote?
- Did we drop any of these phrases from our messaging? [paste]
- Give me a different opener for touch 2 using a pain from calls.
- Which loss reason against [competitor] does this sequence ignore?
- Rank the five touches by how likely [persona] is to reply.

## Good practice

- Paste the whole sequence with channel and day. Repetition and escalation only show across touches.
- Run the review before the sequence goes live and again when replies drop or after a product release.
- Ask for severity. Fix the touch the persona stops at before polishing subject lines.
- Keep the competitor check separate. It needs the battlecard, and one sequence rarely targets two incumbents.
- Keep the fix list to three touches. Rewriting all seven loses what was working.

## Not covered today

- Open, click and reply data. Paste the numbers if the review should weigh them.
- Changing the sequence in the sequencer.
- Reviewing the sequencer's own personalisation variables; the review works on the text as it will read.

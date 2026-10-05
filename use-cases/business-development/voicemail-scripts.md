# Voicemail scripts

**Team:** Business development · also account executives
**Impact:** Medium. Most cold calls land in voicemail; a twenty-second message on one pain the persona recognises earns the callback or at least the email open that follows.
**Prerequisites:** personas approved, messaging approved. Better with call transcripts ingested.

## What the team is trying to do

Leave a voicemail that names one problem in the buyer's words, one reason to believe, and tells them an email is coming. Done means a script per persona under 60 words that the BDR can say naturally, plus a second one for the follow-up attempt. Without the company's knowledge the voicemail is the elevator pitch, which nobody calls back.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the pain | One per voicemail | The persona's top pain in customer language | Persona canvas, quotes |
| 2 | Pick the proof | One line | A won-deal driver or a quantified-outcome quote | Deal drivers, quotes (highlight) |
| 3 | Write it | Under 60 words, name and number twice | The script | Persona canvas, messaging |
| 4 | Write the second attempt | New angle | A second pain or a trigger | Persona canvas, ICP |
| 5 | Pair with the email | The email that follows | Links to the outreach draft | Outreach drafts page |
| 6 | Dial and log | Run the block | Calven does not help here | |

## Recommended prompts

### Steps 1 to 4: two voicemails

```
Using Calven MCP, write two voicemails for [persona] in [segment].

CONTEXT
First and second attempt in a cold sequence. Under 60 words each, spoken, with my name and number said twice. An email follows each.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains by impact, hooks.
- The customer phrase for the top pain, with its quote.
- One proof from a won deal or a quantified-outcome quote.

WRITE
- Voicemail one: the pain in the customer's words, the proof, "I'll send a note".
- Voicemail two: a different pain or a trigger, one question, "I'll send a note".

OUTPUT
The two scripts with the source for the pain and proof.

GROUNDING
Use only canvas content, quotes and deals in the Universe. Do not invent a number or a customer name.

[name the persona and segment]
```

### Step 2: the proof line

```
Using Calven MCP, give me one spoken-length proof for [pillar] that [persona] would believe.

PULL FROM THE UNIVERSE
- Quotes with a quantified outcome or time-to-value highlight on [pillar].
- Deal drivers on won deals in [pillar]'s area.

OUTPUT
One sentence, under 20 words, with the source and whether the customer may be named.

GROUNDING
Verbatim or faithfully shortened, from the Universe, cited.

[name the pillar and persona]
```

### Review

```
Using Calven MCP, would [persona] call back after this voicemail? [paste]

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review.

OUTPUT
Yes or no, the line that decides it, and a rewrite under 60 words.

GROUNDING
React only from what the Universe says about this persona.
```

## Ad hoc questions

- What is the one pain [persona] would stop for in a voicemail?
- Give me a 50-word voicemail for [persona] on [pain].
- Which proof point fits in one spoken sentence for [pillar]?
- What should I never say in a voicemail to [persona]?
- Give me a second-attempt angle that is not [pain].
- Which customer quote on [pain] can I paraphrase aloud?
- What trigger could I mention for a [segment] account?
- Is "[claim]" something our brief backs?

## Good practice

- Say the word limit. Sixty words is twenty seconds.
- One pain, one proof. Two pains is a pitch.
- Match the voicemail to the email that follows; ask for both in one go when building the sequence.
- Read it aloud before the block; ask the AI tool for "spoken, not written".

## Not covered today

- Dialer, voicemail drop and call logging.
- Whether the call was returned.

# Voicemail scripts


You're about to leave a voicemail, and nobody calls back the elevator pitch. You get a script per persona under 60 words that names one problem in the buyer's words, gives one reason to believe and says an email will follow, plus a second one for the follow-up attempt. Calven adds the company's knowledge behind the problem and the proof.

## Prompts

### Write two voicemails for a cold sequence

```
Using Calven MCP, write two voicemails for the persona and segment below.

FILL IN
- Persona: [persona]
- Segment: [segment]

CONTEXT
First and second attempt in a cold sequence. Under 60 words each, spoken, with my name and number said twice. An email follows each.

PULL FROM THE UNIVERSE
- The persona's canvas: pains by impact, hooks.
- The customer phrase for the top pain, with its quote.
- One proof from a won deal or a quantified-outcome quote.

WRITE
- Voicemail one: the pain in the customer's words, the proof, "I'll send a note".
- Voicemail two: a different pain or a trigger, one question, "I'll send a note".

OUTPUT
The two scripts with the source for the pain and proof.

GROUNDING
Use only canvas content, quotes and deals in the Universe. Do not invent a number or a customer name.
```

### Find a spoken-length proof line

```
Using Calven MCP, give me one spoken-length proof for the pillar below that this persona would believe.

FILL IN
- Pillar: [pillar]
- Persona: [persona]

PULL FROM THE UNIVERSE
- Quotes with a quantified outcome or time-to-value highlight on the pillar.
- Deal drivers on won deals in the pillar's area.

OUTPUT
One sentence, under 20 words, with the source and whether the customer may be named.

GROUNDING
Verbatim or faithfully shortened, from the Universe, cited.
```

### Check whether the persona would call back

```
Using Calven MCP, would the persona below call back after this voicemail?

FILL IN
- Persona: [persona]
- Voicemail: [paste the voicemail]

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review.

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

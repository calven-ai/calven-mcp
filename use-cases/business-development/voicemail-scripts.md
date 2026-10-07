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

## Advanced prompts

### Test what the persona remembers after one listen

```
Test my voicemail for recall: play it to the persona once and see what they remember an hour later. Use Calven MCP for the persona and the language that sticks with them.

FILL IN
- My voicemail scripts: [paste one to three]
- Persona: [persona]

CONTEXT
A voicemail is heard once, at speed, between meetings. What matters is what's left an hour later: my name, the problem, the reason to call back. Most scripts are written to be read, not heard.

FROM CALVEN
- The persona canvas: pains, goals, objections.
- The top themes for the persona in customer quotes, with mention counts and a verbatim line each.
- A persona review of each script.

SIMULATE
- Count words and estimate spoken length at 150 words a minute. Flag anything over 30 seconds.
- Play the persona hearing it once, with a distraction (they're walking between meetings). Then an hour later, have them write what they recall, in their own words.
- Score recall on four items: who called, the problem named, the proof, the next step. Run it three times per script.
- Explain which features helped recall (a number, the buyer's own phrase, repetition of the name) and which didn't.
- Rewrite each script for recall and rerun the test.

OUTPUT
A recall scorecard per script, before and after, and the rewritten scripts with spoken length.

GROUNDING
Recall is simulated from the canvas and the review, and the output says so. Quotes verbatim. Don't invent a proof point for the rewrite.
```

### Plan a factorial voicemail test

```
Design a factorial test of my voicemails so one month of dials tells me which of three choices drives callbacks. Use Calven MCP for the options worth testing on each factor.

FILL IN
- Persona: [persona]
- Voicemails per week: [number]
- Current callback rate: [rate and how many voicemails it's from]

CONTEXT
Testing one change at a time takes a year at voicemail volumes. A factorial design tests three choices at once and shows whether they interact. I want the design, the scripts and an honest view of what my volume can detect.

FROM CALVEN
- The persona canvas: pains and messaging hooks, to pick the two problems to test.
- A buying trigger from the ICP that fits voicemail, for the trigger versus pain factor.
- One spoken-length proof line backed by a customer quote or a proof point.

METHOD
- Pick three factors with two levels each: lead with the pain or the trigger, include a proof line or not, mention an email will follow or not.
- Write the eight scripts, each under 30 seconds, with the same name and close.
- Assign them in rotation so each runs the same number of times across days and hours.
- Compute the sample needed to detect a main effect of a stated size at 80 percent power. If you can run code, simulate the design to check it. Say plainly if my volume only supports main effects, not interactions.
- Write the analysis plan before the first call.

OUTPUT
The eight scripts in a table, the rotation schedule, the power result, and the analysis plan.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a baseline callback rate.
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
- Which customer quote is short enough to say in a voicemail for [pain]?
- What's one number from our proof points a [persona] would remember?
- Which trigger on [account] could I mention in a voicemail?
- What does [persona] call [pain], in their own words, in five words or fewer?
- Which objection should a second voicemail pre-empt for [persona]?
- What's our one-liner, cut to ten spoken words?
- Which competitor's pitch is a [persona] most likely to have heard this week?

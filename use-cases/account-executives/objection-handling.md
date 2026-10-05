# Objection handling

**Team:** Account executives · also BDRs and SDRs, sales enablement, solutions engineering
**Impact:** High. Objections decide deals in the moment they are raised, and the response that won last quarter is the one nobody wrote down.
**Prerequisites:** messaging approved (objection handling section), win/loss surveys running, call transcripts ingested. Better with competitors tracked (battlecard objection handling).

## What the team is trying to do

Answer the objection with evidence instead of reassurance: what changed the mind of a buyer who said the same thing and then bought, in that buyer's words. Done means the rep has a response for each of the ten objections that come up most, knows which ones are real deal-breakers versus brush-offs, and can draft a written answer after the call that holds up when forwarded. Without the company's own evidence, every rep has a different answer and the best one lives in the head of the rep who left.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Recognise the objection | Name what the buyer actually said and the concern behind it | The quote library: how customers phrased this objection before, and how often | Quotes (category Objection), themes |
| 2 | Judge it | Brush-off, real concern or disqualifier | Whether this objection decided deals: deal drivers with rank, the loss reasons tied to it | Deal drivers, win/loss dashboard (costly objections) |
| 3 | Find the approved response | What messaging says to say | The objection handling section of messaging; the "they say, you say" section of the battlecard when it is competitive | Messaging document, competitor battlecard |
| 4 | Find the proof | A buyer who raised it and bought anyway | Won deals whose drivers mention the objection; quotes from those buyers; vendor quotes showing how the winning rep handled it | Deal drivers, quotes, vendor quotes |
| 5 | Respond live | The spoken answer on the call | Calven does not help in the moment beyond the prep. The rep asks the AI tool before or between calls | |
| 6 | Respond in writing | The follow-up answer, forwardable to the buying group | A drafted answer in the customer's words, with the proof attached and no claim outside the product brief | Messaging, quotes, product brief |
| 7 | Report the new one | An objection the talk track does not cover | Objections customers raise that messaging does not answer, with how often | Messaging dashboard (effectiveness, objections), themes |

## Recommended prompts

### Step 1 to 4: handle one objection

```
Using Calven MCP, help me answer an objection in [deal].

CONTEXT
A [persona] at [account] said: "[the objection, as close to verbatim as you have]". We are at the [stage] stage. [Competitor] is in the deal, if any.

PULL FROM THE UNIVERSE
- Our approved objection handling for this objection, from messaging and from the [competitor] battlecard.
- Whether this objection decided deals: the drivers that mention it, with direction and rank, and the win rate on deals where it came up.
- Buyers who raised it and then bought, with their words from calls or surveys.
- How our reps answered it on calls that went well.

BUILD
- What the buyer is really asking, in one line.
- The approved answer, then the version in the customer's words.
- The proof: one buyer who raised it and bought, verbatim and attributed.
- The question to ask back.
- Whether this is a brush-off, a real concern or a disqualifier, and the evidence for that call.

OUTPUT
A short card I can read before the next touch, with sources.

GROUNDING
Use only messaging, battlecards, deal drivers and quotes from the Universe, cited. Do not promise capabilities the product brief does not hold. If no buyer in the record has raised this objection, say so.

[paste the objection, name the deal, persona, stage and competitor]
```

### Step 6: the written answer

```
Using Calven MCP, draft the written answer to an objection for [contact] at [account].

CONTEXT
On the call [contact], a [persona], said "[objection]". I promised a written answer they can forward to [the other stakeholder]. Keep it under 150 words.

PULL FROM THE UNIVERSE
- The approved objection handling for this objection.
- The product brief entry for whatever the answer relies on.
- One customer quote from a buyer who had the same concern.

WRITE
- Acknowledge the concern in their words.
- The answer, with the one fact that settles it.
- The proof, attributed.
- The next step.

OUTPUT
The email body, then a line listing which product-brief and messaging sections it relies on.

GROUNDING
Every product claim must be in the product brief; cite the section. Verbatim quote only. If the brief does not cover the point, write "I will confirm with our product team" rather than a claim.

[paste the objection and name the contact, persona and stakeholder it will reach]
```

### Step 7: the gap check

```
Using Calven MCP, find the objections our talk track does not cover.

CONTEXT
I want to know which objections buyers raise that I have no approved answer for, so enablement can fix the gap.

PULL FROM THE UNIVERSE
- The objections customers raised in [window], from calls and surveys, with how often each appeared.
- The objection handling section of messaging and of each battlecard.
- The objections that decided lost deals.

CHECK
- Which raised objections have an approved answer, which do not.
- Which uncovered objections cost deals, with the count and the quotes.

OUTPUT
A table: objection, how often, decided deals, covered yes or no, the quote behind it. Then the three to fix first.

GROUNDING
Counts from the messaging and win/loss dashboards and the quote library only, with n and window. Do not invent objections to pad the list.

[name the window and the product if you have several]
```

### Review mode: check my answer

```
Using Calven MCP, check my answer to an objection.

CONTEXT
A [persona] said "[objection]". Below is how I plan to answer. Tell me where it is weak.

PULL FROM THE UNIVERSE
- The approved objection handling for this objection.
- The product brief for any claim I make.
- What buyers who raised this objection said they needed to hear.

CHECK
- Where my answer drifts from the approved handling.
- Any claim the product brief does not support.
- Whether it answers the concern behind the words or only the words.

OUTPUT
My answer annotated, then a tighter version.

GROUNDING
Judge against the Universe only and cite it. If my answer is sound, say so.

[paste your answer and the objection]
```

## Ad hoc questions

- How do we answer "we already use [competitor]"?
- What is our approved response to "[objection]"?
- Has "[objection]" ever decided a deal? How many, won or lost?
- Show me a buyer who said "[objection]" and then bought. What changed their mind?
- Is "[objection]" usually a brush-off or a real concern in our deals?
- What do buyers at the evaluation stage object to most?
- Which objections for [persona] does our messaging not answer?
- How did our best reps handle the pricing objection on calls?
- Does our product actually do [the thing the buyer doubts]?
- What does the [competitor] battlecard say when they claim [competitor's claim]?
- Which objection cost us the most pipeline this year?
- What did the last buyer who said "no budget" end up doing?

## Good practice

- Paste the objection as the buyer said it. "Price" returns the generic handling; "we got a quote 30% lower from [competitor]" returns the pricing drivers against that competitor.
- Ask whether it decided deals before you decide how hard to fight it.
- Keep the proof verbatim and attributed. A paraphrased quote in a forwardable email is a liability.
- Check every product claim in the written answer against the product brief. The objection you answer with a capability you do not have becomes next quarter's churn.
- Report uncovered objections to enablement. The gap check is the fastest way to improve the talk track for everyone.

## Not covered today

- The live response on the call. Calven preps it; the rep says it.
- New objection handling is written in Calven by the messaging agent and approved by product marketing. The AI tool flags the gap; it does not fill the messaging document.
- Objections from calls that were never ingested do not exist in the Universe. If reps' calls are not recorded or uploaded, the quote library is thin and the AI tool should say so.

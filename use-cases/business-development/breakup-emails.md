# Breakup emails

**Team:** Business development · also account executives
**Impact:** Medium. The last touch of a sequence often gets the highest reply rate; a breakup that leaves one real reason to answer, in the buyer's words, closes the loop with a meeting or a clean no.
**Prerequisites:** personas approved. Better with call transcripts ingested (customer language) and win/loss surveys running (what "not now" buyers said later).

## What the team is trying to do

End a sequence without a guilt trip. Done means a short email that restates the one problem, offers one thing of value, and asks a yes-or-no question. Without the company's knowledge the breakup is "should I close your file?", which reads as a trick.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Restate the problem | The pain the sequence opened on | The customer phrase for it | Quotes, persona canvas |
| 2 | Offer the one thing | A quote, a comparison, a customer story | A verbatim quote or a won-deal story | Quotes, surveyed deals |
| 3 | Ask the yes-or-no | Wrong time, wrong person, or no | The persona's likely reason for silence | Persona canvas (objections) |
| 4 | Test | Does it read as honest? | Persona review | `review_against_personas` |
| 5 | Send and close | Final step, mark outcome | Calven does not help here | |

## Recommended prompts

### Steps 1 to 3: the breakup

```
Using Calven MCP, write the breakup email for my sequence to [persona] at [account].

CONTEXT
Final touch after [number] attempts on [pain]. Under 70 words. One real reason to reply, a yes-or-no question, no guilt.

PULL FROM THE UNIVERSE
- The customer phrase for [pain], with its quote.
- One customer story or quote worth leaving them with.
- The persona's most likely reason for silence, from the canvas objections.

WRITE
- Restate the pain in one line, leave the one thing, ask whether it is wrong time, wrong person or not a problem.

OUTPUT
The email and the source for the quote.

GROUNDING
Use only quotes and canvas content in the Universe. Do not invent a customer name or an outcome.

[name the persona, the account, the pain and the number of attempts]
```

### Step 2: what "not now" buyers said later

```
Using Calven MCP, what did buyers who first said "not now" tell us after they bought?

PULL FROM THE UNIVERSE
- Won deals whose drivers or survey summary mention timing or a delayed start, with the buyer's words.

OUTPUT
Three quotes I could leave in a breakup email, with source and whether the customer can be named.

GROUNDING
Verbatim, from the Universe, cited. If none exist, say so.
```

### Step 4: test

```
Using Calven MCP, read this breakup email as [persona]. Does it read as honest or as a trick? [paste]

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review.

OUTPUT
The verdict, the line that decides it, a rewrite under 70 words.

GROUNDING
React only from what the Universe says about this persona.
```

## Ad hoc questions

- Give me a 60-word breakup email for [persona] on [pain].
- Which customer quote would a [persona] want to be left with?
- Why do [persona]s go silent, according to the canvas?
- Is "should I close your file" something [persona] would respond to?
- What is one thing of value I can leave for a [segment] account?
- Which won deal started with months of silence?
- Rewrite this breakup so it is not a guilt trip: [paste]
- What yes-or-no question should I end on for [persona]?

## Good practice

- One reason to reply. The quote or story is the email; the ask is one line.
- Make the yes-or-no easy to answer with "wrong person"; that reply is a referral.
- Keep the pain consistent with the sequence; do not introduce a new pitch at the end.
- Test it once as the persona, then reuse.

## Not covered today

- Sequence exit rules and CRM status updates.
- Reply tracking.

# Follow-up recaps

**Team:** Account executives · also BDRs and SDRs, solutions engineering
**Impact:** Medium. The recap is the one artifact the champion forwards, and it is written in the ten minutes between calls.
**Prerequisites:** messaging approved, product brief approved. Better with call transcripts ingested (customer language) and personas approved.

## What the team is trying to do

Send a recap that the champion forwards without editing: what we heard, in their words; what we showed; the answer to the question they asked; the proof they wanted; the next step with a date. Done means the recap goes out the same day, every claim in it is in the product brief, and the language is the buyer's. Without the company's own knowledge the recap repeats the pitch and the proof is a vague "customers like you".

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Capture what was said | Notes or transcript from the call | Calven does not help here; the rep pastes the notes | |
| 2 | Mirror their language | Restate the pain in the words the buyer and their peers use | The persona's pains and the quote library for the phrases customers use | Persona canvas, quotes, themes |
| 3 | Answer the open question | The product question left hanging | The product brief, with a plain no where needed | Product brief |
| 4 | Attach the proof | The story or quote they asked for | Quotes tagged quantified outcome, competitive win, time-to-value; displacement wins | Quotes, battlecard proof points |
| 5 | Stay on message | The value proposition for this persona at this stage | Messaging matrix | Messaging document |
| 6 | Set the next step | The mutual action with a date | Calven does not help here | |
| 7 | Send and log | The email, the CRM update | Calven does not help here | |

## Recommended prompts

### Step 2 to 5: the recap

```
Using Calven MCP, write the follow-up recap for my call with [contact] at [account].

CONTEXT
[Contact] is a [persona]. Below are my notes: what they said, what we showed, the question they asked, what they want to see next. Keep it under 200 words and forwardable.

PULL FROM THE UNIVERSE
- The [persona] pains and the words customers use for them.
- The product brief for the question they asked.
- One proof point matching what they care about, verbatim and attributed.
- The value proposition for this persona at the [stage] stage.

WRITE
- What we heard, in their words.
- What we showed and why it matters to them.
- The answer to their question, honest if it is a no.
- The proof.
- The next step with a date placeholder.

OUTPUT
The email, then a line on which brief and messaging sections it relies on.

GROUNDING
Product claims only from the brief, cited. Quotes verbatim. Do not add what the buyer did not say or we did not show.

[paste your notes and name the contact, persona and stage]
```

### Review mode: check the recap

```
Using Calven MCP, check this recap before I send it.

CONTEXT
Below is my recap to [persona] at [account].

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The [persona] canvas.

CHECK
- Any claim not in the brief.
- Any line that reads as pitch rather than recap.
- Whether the proof is verbatim and attributed.

OUTPUT
The recap annotated, then the clean version.

GROUNDING
Judge against the Universe only. If it is clean, say so.

[paste the recap]
```

### Gap mode: the proof I keep lacking

```
Using Calven MCP, which proof points do I keep needing and not having?

CONTEXT
Below are the last five things buyers asked me to prove. Tell me what the Universe has for each.

PULL FROM THE UNIVERSE
- Quotes and proof points for each request, by highlight tag.

BUILD
- For each request: the best verbatim proof or "nothing on record".

OUTPUT
A table, then the gaps to send to product marketing.

GROUNDING
Verbatim only, cited. Nothing invented to fill a gap.

[paste the five requests]
```

## Ad hoc questions

- How do customers describe [pain] in their own words?
- Which quote proves [outcome] for a [segment] buyer?
- What is the approved one-liner for a [persona] at the evaluation stage?
- Do we do [thing they asked about]? Give me the honest answer.
- Rewrite this recap in the customer's words: [paste]
- Which customer switched from [competitor] and what did they say?
- What proof do we have on time to value?
- What is the [persona]'s messaging hook?

## Good practice

- Paste your notes, not a summary of them. The recap is better when the AI tool sees what the buyer said.
- Ask for under 200 words. Recaps that get forwarded are short.
- Keep the proof verbatim. A tidied quote is no longer evidence when the buyer checks.
- Run the check when the recap will reach an executive or security.

## Not covered today

- Sending, logging and the next-step date. Those are the rep's tools.
- Transcribing the call. Calven ingests transcripts in the app for the quote library; the recap uses the rep's notes.

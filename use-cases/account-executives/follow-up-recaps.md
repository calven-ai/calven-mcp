# Follow-up recaps


The call's over and you want a recap the champion forwards without editing, sent the same day. You get what we heard in their words, what we showed, the answer to their question, the proof they wanted and a next step with a date, with every claim in the product brief. Calven adds the buyer's language and real proof, so the recap doesn't repeat the pitch or lean on a vague "customers like you".

## Prompts

### Write a forwardable follow-up recap

```
Using Calven MCP, write the follow-up recap for my call with the contact below.

FILL IN
- Contact: [contact]
- Account: [account]
- Persona: [persona]
- Stage: [deal stage]
- Notes: [paste your notes: what they said, what we showed, the question they asked, what they want to see next]

CONTEXT
The contact is the persona above. Keep the recap under 200 words and forwardable.

PULL FROM THE UNIVERSE
- The persona's pains and the words customers use for them.
- The product brief for the question they asked.
- One proof point matching what they care about, verbatim and attributed.
- The value proposition for this persona at the stage above.

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
```

### Check the recap before you send it

```
Using Calven MCP, check this recap before I send it.

FILL IN
- Persona: [persona]
- Account: [account]
- Recap: [paste the recap]

CONTEXT
The recap is going to the persona at the account.

PULL FROM THE UNIVERSE
- The product brief and the claims register.
- The persona canvas.

CHECK
- Any claim not in the brief.
- Any line that reads as pitch rather than recap.
- Whether the proof is verbatim and attributed.

OUTPUT
The recap annotated, then the clean version.

GROUNDING
Judge against the Universe only. If it is clean, say so.
```

### Find the proof points you keep lacking

```
Using Calven MCP, which proof points do I keep needing and not having?

FILL IN
- Requests: [paste the last five things buyers asked you to prove]

CONTEXT
Tell me what the Universe has for each request.

PULL FROM THE UNIVERSE
- Quotes and proof points for each request, by highlight tag.

BUILD
- For each request: the best verbatim proof or "nothing on record".

OUTPUT
A table, then the gaps to send to product marketing.

GROUNDING
Verbatim only, cited. Nothing invented to fill a gap.
```

## Advanced prompts

### Grade your last recaps against a rubric

```
Build a scoring rubric for what a great follow-up recap does, then grade my last ones against it. Use Calven MCP for the buyer's language, our approved messages and the proof I should've used.

FILL IN
- Recaps: [paste your last five recaps, with the persona each went to]
- Segment: [segment]

CONTEXT
I write a recap after every call in the ten minutes before the next one. I don't know which habits make them forwardable and which make the champion rewrite them. I want a rubric I can reuse and an honest grade.

FROM CALVEN
- The persona canvases for the recipients: pains, messaging hooks.
- The messaging matrix rows for those personas at the evaluation stage.
- Customer quotes from the segment on the main pains, verbatim, for the customer-language check.
- A persona review of each recap.

METHOD
- Write a rubric of six to eight criteria, each scored 0 to 3 with an anchor for every score: buyer's words used, next step with a date, proof matched to the pain, forwardable to someone not on the call, length, claims the brief supports.
- Grade each recap, citing the line that earned the score.
- Find the pattern: the criterion I miss in most recaps.
- Rewrite my lowest-scoring recap to a 3 on every criterion.

OUTPUT
The rubric as a table, a scores grid (recap by criterion), my recurring weak spot, and the rewritten recap.

GROUNDING
Label every judgement as from the rubric, the Universe (cited) or your opinion. Don't add proof to the rewrite that Calven doesn't hold.
```

### Find the critical path to the close date

```
Turn my mutual action plan into a critical path and tell me the real chance we close by the date. Use Calven MCP for how long these steps take in deals like this and what stalls them.

FILL IN
- Deal: [deal]
- Action plan: [paste the steps: owner, dependency, the date agreed]
- Target close: [date]

CONTEXT
The buyer agreed the plan on the call and my recap repeats it. Plans like this slip at security review and procurement, and I usually learn that two weeks too late. I want the risky step named in this recap, while there's time.

FROM CALVEN
- The deal record: stage, segment, competitors, contacts by role.
- The sales cycle for the segment and the stage where similar deals stall, from the dashboards, with n.
- Loss reasons and deal drivers on deals that slipped or ended in no decision, with n.
- The product brief's sections on security and integrations, for steps that hinge on them.

MODEL
- Give each step an optimistic, likely and pessimistic duration. Use my dates, the segment cycle and your labelled assumptions.
- Compute the PERT expected time and variance per step and find the critical path.
- Estimate the probability of closing by the target date. If you can run code, simulate it.
- Name the step with the most variance and what would shrink it.

OUTPUT
The plan as a table with durations and slack, the critical path, the close probability, and two lines for my recap that put the risky step in front of the buyer.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a stall pattern the record doesn't show.
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
- Which phrase do [persona] buyers use for [pain] that our messaging never does?
- What's the proof point closest to the metric [account] gave me?
- Which next steps do won deals in [segment] usually agree on after the first demo?
- What do buyers say we overpromised, in win/loss?
- Is [claim] something the product brief supports, word for word?
- Which customer in [segment] said the outcome in one sentence I can quote?
- What question did buyers ask after the demo on deals we lost?

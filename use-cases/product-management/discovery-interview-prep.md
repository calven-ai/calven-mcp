# Discovery interview prep


You've got a discovery interview and want to walk in with hypotheses from the evidence, questions that test them, and what this customer already told the company. You come away with an interview guide per persona, a one-page brief on the interviewee and a rehearsal. Calven holds both the evidence and the record of what this customer has said.

## Prompts

### Write the interview guide

```
Using Calven MCP, write the discovery interview guide for the persona and outcome below.

FILL IN
- Persona: [persona]
- Outcome: [outcome]

CONTEXT
We interview one customer a week. This round is about the outcome. I want hypotheses from our evidence and open questions that test them without leading.

PULL FROM THE UNIVERSE
- The persona's canvas: jobs to be done, pains, goals and KPIs.
- Themes and quotes from this persona related to the outcome.
- Deal drivers that touch it.

BUILD
- Five hypotheses, each with the evidence behind it.
- Ten open questions in the customer's language, mapped to the hypotheses, with follow-ups.
- The three things we do not know at all.

OUTPUT
The interview guide.

GROUNDING
Ground hypotheses in the canvas, quotes and drivers, cited. Do not write questions that lead to our product.
```

### Brief yourself on the interviewee

```
Using Calven MCP, brief me on the contact below before the interview.

FILL IN
- Contact: [contact]
- Account: [account]

CONTEXT
I am interviewing the contact tomorrow. I want to know their role, what their company has said to us before, and what not to ask again.

PULL FROM THE UNIVERSE
- The contact: title, role, lifecycle stage.
- The account: industry, size, fit tier, open and closed deals.
- Prior conversations with the account and the quotes from them.
- The persona that fits the contact's role.

BUILD
- Who they are and the persona that applies.
- What they or colleagues said before, with quotes.
- Three questions specific to them.

OUTPUT
A one-page brief.

GROUNDING
Use only the Universe, cited. If the pipeline category is restricted, brief from the persona and conversations only and say so.
```

### Rehearse the interview with a persona

```
Using Calven MCP, rehearse the discovery interview with me as the persona below.

FILL IN
- Persona: [persona]
- Guide: [paste the guide]

CONTEXT
I will run the guide. Play the persona: answer the way they would, go off track where they would, and push back where the question leads. After ten minutes, drop character and tell me which questions led the witness and which got nothing.

PULL FROM THE UNIVERSE
- The persona's canvas.

ROLE-PLAY
- Stay in character. Use their pains and vocabulary.
- Debrief: leading questions, dead questions, the follow-up I missed.

OUTPUT
The role-play, then the debrief.

GROUNDING
Stay true to the canvas. Do not make the persona more forthcoming than the profile supports.
```

## Advanced prompts

### Code your interviews twice and check agreement

```
Code my interview notes into an opportunity solution tree, then code them a second time independently and measure how far the two codings agree. Use Calven MCP for the outcome's existing themes and the personas' jobs.

FILL IN
- Outcome: [the product outcome the trio owns]
- Interview notes: [attach the notes or transcripts from this round]
- My tree: [paste the current opportunity tree, or "none"]

CONTEXT
Synthesis is where discovery goes wrong quietly: one person reads the notes and finds what they expected. I want a tree I can trust, and I want to know which branches only exist because of how I read the notes.

FROM CALVEN
- Themes and quotes related to the outcome, with mentions, role and account.
- The jobs, pains and gains from the canvases of the personas I interviewed.

METHOD
- Pass one: build a codebook from the canvases and themes, then code every note against it, adding codes only where nothing fits.
- Pass two: start fresh from the raw notes without looking at pass one, and code them again.
- Compare the passes. Report agreement per code and Cohen's kappa overall. If you can run code, compute it and show the confusion table.
- Keep the codes both passes agree on as opportunities. List the contested ones with the note excerpts that split them.
- Arrange the agreed opportunities into a tree under the outcome, and mark which are backed by Calven themes and which appear only in this round.

OUTPUT
The opportunity tree, the agreement table, and the three contested codes to settle in the next trio session.

GROUNDING
Label every count and score as Calven (cited, with n), mine, or your assumption. Don't attach a Calven quote to an opportunity it doesn't speak to. New opportunities from this round alone are marked "single round".
```

### Plan how many interviews you need

```
Work out how many more interviews each segment needs before new ones stop teaching me anything, and who to talk to next. Use Calven MCP for what we've already heard and from whom.

FILL IN
- Topic: [the opportunity or problem area]
- Segments: [segments or personas to cover]
- Interview notes: [attach notes from interviews Calven hasn't ingested, or "none"]

CONTEXT
I run a few interviews a week and stop when it feels done. I want a stopping rule I can defend, and I want to know which segment I'm under-sampling.

FROM CALVEN
- Conversations on the topic by account, role and date.
- Quotes and themes on the topic, with the conversation each came from.
- The accounts behind them, with segment and ICP fit tier.

METHOD
- Order the conversations by date. For each segment, count how many new codes (distinct needs, pains or workarounds) each conversation added. If you can run code, plot the cumulative curve.
- Apply a saturation rule: stop when three conversations in a row add nothing new. Say how close each segment is.
- Fit the curve and estimate the interviews each segment still needs.
- Flag segments whose evidence rests on one or two accounts, and name the next five accounts or roles to interview.

OUTPUT
A table per segment: conversations so far, codes found, estimated interviews left, and the next interviewees. Plus the curves.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The codes are your grouping of the quotes; list them. Don't claim saturation for a segment with fewer than five conversations.
```

## Ad hoc questions

- What are [persona]'s jobs to be done?
- Which pains does [persona] rate high impact?
- What has [account] said on calls before?
- Who at [account] is an end user?
- What do customers in [persona] say about [topic]? Quotes.
- Which hypotheses about [outcome] does our evidence already support?
- How does [persona] describe success in their own words?
- Which deal drivers in the Capability category touched [outcome] this year?
- Play [persona] and let me run my first three interview questions on you.
- Which of [persona]'s pains on the canvas have no customer quote behind them?
- What workarounds have customers described for [job]?
- Which lost deals mention [problem], and what did the buyer choose instead?
- What trigger made [account] start looking, according to the calls?
- Which canvas objections for [persona] do customers' own words contradict?
- When did [account] last mention [topic], and has their sentiment changed since?

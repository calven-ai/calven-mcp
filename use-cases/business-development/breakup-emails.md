# Breakup emails


You're on the last touch of a sequence, and "should I close your file?" reads as a trick. You get a short email that restates the one problem, offers one thing of value and asks a yes-or-no question, with no guilt trip. Calven adds a real reason to reply, drawn from customer quotes and the persona canvas.

## Prompts

### Write the breakup email

```
Using Calven MCP, write the breakup email for my sequence to the persona below at this account.

FILL IN
- Persona: [persona]
- Account: [account]
- Attempts: [number of attempts so far]
- Pain: [pain]

CONTEXT
Final touch after the attempts above on the pain. Under 70 words. One real reason to reply, a yes-or-no question, no guilt.

PULL FROM THE UNIVERSE
- The customer phrase for the pain, with its quote.
- One customer story or quote worth leaving them with.
- The persona's most likely reason for silence, from the canvas objections.

WRITE
- Restate the pain in one line, leave the one thing, ask whether it is wrong time, wrong person or not a problem.

OUTPUT
The email and the source for the quote.

GROUNDING
Use only quotes and canvas content in the Universe. Do not invent a customer name or an outcome.
```

### Find what "not now" buyers said later

```
Using Calven MCP, what did buyers who first said "not now" tell us after they bought?

PULL FROM THE UNIVERSE
- Won deals whose drivers or survey summary mention timing or a delayed start, with the buyer's words.

OUTPUT
Three quotes I could leave in a breakup email, with source and whether the customer can be named.

GROUNDING
Verbatim, from the Universe, cited. If none exist, say so.
```

### Test whether it reads as honest

```
Using Calven MCP, read this breakup email as the persona below. Does it read as honest or as a trick?

FILL IN
- Persona: [persona]
- Email: [paste the email]

PULL FROM THE UNIVERSE
- The persona's canvas, and run the persona review.

OUTPUT
The verdict, the line that decides it, a rewrite under 70 words.

GROUNDING
React only from what the Universe says about this persona.
```

## Advanced prompts

### Diagnose the silence with switching forces

```
Diagnose why this prospect went silent using the four forces of switching (push, pull, anxiety, habit), then write a breakup aimed at the force that's actually holding them. Use Calven MCP for the persona's pains, the anxieties buyers voiced and what tipped deals we won.

FILL IN
- Persona: [persona]
- Segment: [segment]
- The sequence they ignored: [paste the touches]

CONTEXT
Most breakup emails repeat the pitch louder. Silence usually means anxiety or habit is stronger than the pull, and more pitch doesn't touch either. I want the last email to address the real blocker.

FROM CALVEN
- The persona canvas: pains (push), gains (pull), objections.
- Customer quotes for this persona tagged Objection or Buying trigger, verbatim.
- Deal drivers on won deals in the segment, and quotes from customers who switched, on what made the change feel safe.

METHOD
- Score each force from 1 to 5 for this persona, citing the evidence for each score.
- Read the sequence and mark which forces it addressed. Most will be push and pull.
- Name the gap: the force the sequence never touched that the evidence says is strongest.
- Write two breakup emails under 80 words, each reducing that force: one lowers anxiety (a safe first step, a real quote), one breaks habit (a cost of staying put in the buyer's words).

OUTPUT
The four-force scorecard, the gap in one line, and the two emails with the evidence each one draws on.

GROUNDING
Label every score as Calven-backed (cited) or your judgement. Quotes verbatim. Don't invent a switching story or an outcome nobody recorded.
```

### Design a breakup test that can conclude

```
Design an A/B test of two breakup emails that can actually reach a conclusion, with a power calculation, before I split my list. Use Calven MCP for the two angles worth testing.

FILL IN
- Current breakup email: [paste it]
- Reply rate on the last touch: [rate and how many sends it's from]
- Contacts reaching the breakup per week: [number]
- Persona: [persona]

CONTEXT
We change the breakup email every month based on a few replies. That's noise. I want to know how many sends a test needs, how long it runs, and which challenger is worth the wait.

FROM CALVEN
- The persona canvas: pains and objections.
- The most mentioned themes for this persona in customer quotes, with mention counts.
- Messaging hooks for the persona from the messaging document.

METHOD
- Pick one challenger from the evidence: a single change to the angle, not five changes at once. Explain why it's the best bet.
- Compute the sample size per arm to detect a realistic lift (say from my rate to my rate plus 3 points) at 80 percent power and 5 percent significance. Show the formula. If you can run code, run it and plot sample size against lift.
- Turn it into weeks at my weekly volume. If it's longer than a quarter, say which bigger lift is worth testing instead.
- Write the stopping rule and the decision rule before launch, so nobody peeks and calls it early.

OUTPUT
A one-page test plan: hypothesis, the two emails, sample size per arm, run time, stopping and decision rules.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a baseline reply rate; use mine or state a labelled assumption.
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
- Which objection do [persona]s raise most often after going quiet?
- What do customers say made switching feel safe? Quote two.
- What did buyers in deals lost to "No decision" say about timing?
- What's the cost of doing nothing for [persona], in customers' own words?
- Which theme for [persona] grew most in the last quarter?
- Which of our messaging hooks for [persona] has no quote behind it?
- Give me a one-line reason to reply for a [segment] account that's lost to an incumbent before.

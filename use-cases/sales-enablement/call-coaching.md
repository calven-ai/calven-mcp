# Call coaching


You're coaching a rep and want to point at what they actually said, not the last call you happened to join. You walk away with a coaching note per rep (the pattern, the evidence, the one thing to practise) and a team view of which objections and pillars need a session. Calven holds what buyers and reps said on calls, so every line gets checked against the approved story and the product brief.

## Prompts

### Pull what was said on a rep's calls

```
Using Calven MCP, pull what buyers and the rep said on calls in the window.

FILL IN
- Rep: [rep name]
- Window: [time window, e.g. last month]

CONTEXT
I am preparing a coaching 1:1 for the rep. I need the evidence before I form a view.

PULL FROM THE UNIVERSE
- Conversations in the window where the rep is the vendor speaker, by account and deal context.
- Customer quotes from those calls, grouped by category (pain, objection, competitor mention, buying trigger).
- Vendor quotes from those calls, grouped by category (value claim, differentiation, proof point, discovery question, objection handling, pricing, caveat).

BUILD
- Per call: the objections raised and how the rep answered, side by side.
- Across calls: the three rep lines that recur and the three buyer objections that recur.

OUTPUT
A table per call, then the recurring lines.

GROUNDING
Use only quotes recorded in the Universe, verbatim and attributed. If a call has no vendor quotes recorded, say so.
```

### Check a rep's lines against the story

```
Using Calven MCP, check what the rep said against our messaging, our product brief and the buyer persona.

FILL IN
- Rep: [rep name]
- Lines: [paste the rep's lines and the persona per call]

CONTEXT
The lines are the rep's lines from recent calls, with the persona on each call. I want to know where the rep is on-message, off-message or over-claiming.

PULL FROM THE UNIVERSE
- The messaging document: value pillars, value propositions by persona, objection handling.
- The product brief: capabilities, integrations, pricing, known weaknesses.
- The persona canvas for each persona named: pains, KPIs, objections, messaging hooks.

CHECK
- For each rep line: on-message, off-message (name the pillar it should have used), or over-claiming (name the brief section it conflicts with).
- For each objection the rep answered: whether the answer matches the objection handling section, and the approved line if not.
- Whether the rep's discovery questions touch this persona's pains and KPIs.

OUTPUT
The annotated lines, then the two patterns to coach.

GROUNDING
Judge only against the documents in the Universe and cite the section. Do not invent an approved line where the messaging has none; flag the gap for PMM instead.
```

### Write the coaching note for one rep

```
Using Calven MCP, write a coaching note for the rep.

FILL IN
- Rep: [rep name]
- Window: [time window the calls cover]
- Evidence: [paste the evidence and your flags]

CONTEXT
Audience: the rep and their manager. One page. Tone: direct, specific, respectful. The evidence is what they said, what buyers said and what I flagged.

PULL FROM THE UNIVERSE
- Deal drivers on deals the rep worked in the window, with direction and rank, so the note connects behaviour to outcomes.
- The approved line for each objection in the evidence.

WRITE
- What is working, with one quote.
- The pattern to change, with two quotes and the deal it touched.
- The one thing to practise this week, and the approved line or question to use.

OUTPUT
The note.

GROUNDING
Every point cites a quote or a deal driver from the Universe. Do not generalise beyond the calls reviewed.
```

### Roll up what the team needs coached

```
Using Calven MCP, show me what the team needs coaching on this quarter.

CONTEXT
I plan the quarter's coaching sessions. I want the objections, pillars and claims to focus on, with the numbers.

PULL FROM THE UNIVERSE
- The messaging dashboard for this quarter: objections raised and covered, pillar pull-through in rep calls, weak flags.
- The voice-of-customer read: costly objections tied to lost deals.
- Vendor quotes with category Caveat or Pricing, to see how reps handle hard moments.

BUILD
- The five objections heard most, each with calls (n), whether the talk track covers it, and the deals it touched.
- The pillars reps say least, with the pull-through rate.
- Three session topics, ranked, each with the evidence.

OUTPUT
The two tables and the session plan.

GROUNDING
Numbers come from the dashboards with n and window cited. Do not add up rows yourself. If a dashboard section has no data, say so.
```

### List objections with no approved answer

```
Using Calven MCP, list the objections our reps are answering on their own.

FILL IN
- Window: [time window, e.g. last quarter]

CONTEXT
I want the objections buyers raise that the messaging document does not cover, so PMM can write the line and I can coach it.

PULL FROM THE UNIVERSE
- Customer objections from calls in the window, with frequency.
- The objection handling section of our messaging.
- Vendor quotes with category Objection handling, to see what reps say today.

BUILD
- Objections with no covering line, ranked by frequency, each with the buyer's words and the best rep answer heard so far.

OUTPUT
The gap list for PMM.

GROUNDING
Cite every quote. Do not write the missing lines; mark them as gaps.
```

## Advanced prompts

### Find the rep behaviours that predict wins

```
Find which rep behaviours on calls go with won deals, so coaching targets what moves outcomes instead of what managers like to hear. Use Calven MCP for what reps said on calls and how each deal ended.

FILL IN
- Window: [window, e.g. last 12 months]
- Segment: [segment, or "all"]

CONTEXT
Every manager has a theory of what good looks like on a call. I want to check the theories against outcomes before I build a coaching program on them.

FROM CALVEN
- Rep quotes from calls in the window, with category (value claim, differentiation, proof point, discovery question, objection handling, pricing, caveat, next step), author and deal.
- CRM deals in the window with status, amount, stage reached and segment.
- The overall win rate for the segment from the win/loss dashboard, with n, as the baseline.

MODEL
- Build one row per closed deal: counts of each rep-quote category, whether a proof point came before pricing, number of discovery questions, deal size band.
- Compare won and lost deals on each behaviour. Show the win rate with and without it and the gap.
- If you can run code, fit a logistic regression with deal size and segment as controls, report coefficients with confidence intervals, and flag anything resting on fewer than 15 deals.
- Name the confounders: big deals get more calls, so more of everything. Say how you handled it.

OUTPUT
A ranked table of behaviours: win rate with, without, gap, confidence, n. Then the three behaviours worth coaching, one call excerpt each that shows it done well, and the one manager theory the data doesn't support.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Say plainly where the sample is too small to conclude anything, and never call a correlation a cause.
```

### Calibrate managers on one call scorecard

```
Calibrate my managers so a 3 on the call scorecard means the same thing from every one of them. Use Calven MCP for what was actually said on the calls and the approved story to score against.

FILL IN
- Scorecard: [paste the scorecard criteria and scale]
- Manager scores: [attach a CSV: manager, call, criterion, score]
- Calls scored: [account names or call titles of the calls they all scored]

CONTEXT
Reps get different feedback depending on who coaches them, and they've noticed. Before I roll the scorecard out, I want to know where managers disagree and why.

FROM CALVEN
- For each scored call, the rep quotes and buyer quotes on record.
- The approved messaging: value pillars, objection handling and the persona's value proposition.
- The persona canvas for the buyer on each call.

METHOD
- Measure agreement per criterion. If you can run code, compute Cohen's or Fleiss' kappa and the spread of scores per call.
- For the three criteria with the worst agreement, go back to the call evidence: quote what the rep said and show which reading of the criterion each manager must have used.
- Rewrite those criteria with anchored examples: what a 1, 3 and 5 sound like, built from real rep quotes on these calls.
- Write a 20-minute calibration exercise: two calls, score alone, compare, discuss.

OUTPUT
An agreement table per criterion, the three rewritten criteria with anchors, and the calibration exercise ready to run.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Anchor examples must be verbatim rep quotes from the calls, never written lines dressed up as real ones.
```

### Drill the one moment a rep keeps fumbling

```
Run a deliberate practice loop on the one moment a rep keeps getting wrong: same objection, rising difficulty, scored every round. Use Calven MCP for the rep's real line, the buyer's real words and the approved answer.

FILL IN
- Rep: [rep]
- Moment: [the objection or question they fumble, e.g. "you're more expensive than the incumbent"]
- Persona: [persona they'll face]

CONTEXT
Coaching notes don't change muscle memory. Reps fix a moment by doing it again and again with feedback, which managers never have time for.

FROM CALVEN
- What the rep actually said on calls when this came up, verbatim.
- How buyers phrased it, from customer quotes tagged Objection.
- The approved answer from messaging objection handling, plus a proof point that supports it.
- The persona canvas: what they're measured on and what they distrust.

SIMULATE
- Round 1: you play the persona and raise the objection plainly. The rep answers. Stop.
- Score against a 4-point rubric: acknowledges, reframes to the persona's goal, proves with evidence, moves to a next step. One line of feedback, then the next round.
- Each round gets harder: a follow-up challenge, then a competitor named, then a sceptical second stakeholder, then a time-pressed buyer who gives the rep one sentence.
- Five rounds. Keep the persona in character and in their own words throughout.

OUTPUT
The scored transcript, a score trend across rounds, the rep's best answer cleaned up as their version of the line, and a 2-minute warm-up they can rerun before calls.

GROUNDING
The buyer's lines come from the canvas and real quotes, cited. Don't let the persona raise objections the evidence doesn't support, and mark any escalation you invented as practice, not evidence.
```

## Ad hoc questions

- What objections did [rep name] hear on calls this month?
- How did [rep name] answer "[objection]" on the [account] call, and what is our approved line?
- Which pillar does the team say least on calls?
- Show me the discovery questions reps asked [persona] last quarter.
- Which rep lines conflict with the product brief?
- What did the buyer at [account] push back on?
- Which objections are tied to the most lost deals this year?
- Did anyone over-promise on [capability] in the last 30 days?
- Which caveats do reps give about our product on calls?
- Give me three quotes where a rep handled the price objection well.
- What does [persona] care about that our reps are not asking about?
- Which deals did [rep name] lose, and what decided them?
- Which rep gives the most caveats on calls, and do those deals close at a lower rate?
- Which value claims do reps make on calls that no customer quote backs up?
- Which discovery questions did reps ask on won deals that never came up on lost ones?
- What do reps say about pricing before the buyer asks?
- Which objection do reps answer with a feature when the approved answer is an outcome?
- Show me the strongest rep quote on record for each value pillar.

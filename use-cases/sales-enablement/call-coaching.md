# Call coaching

**Team:** Sales enablement · also sales managers, product marketing
**Impact:** High. Coaching is the enablement activity that moves win rate, and it fails when the coach works from memory. Calven holds what buyers and reps actually said on calls, so coaching starts from evidence.
**Prerequisites:** call transcripts ingested (customer quotes, vendor quotes, conversations), strategy documents approved (messaging, positioning, product brief). Better with win/loss surveys running (deal drivers) and personas approved.

## What the team is trying to do

Help a rep sell the approved story better: handle the objections they actually hear, ask the discovery questions the persona responds to, stop making claims the product brief does not support. Done means a coaching note per rep per period with the pattern, the evidence and the one thing to practise, plus a view across the team of which objections and pillars need a session. Without the company's own knowledge the manager coaches on the last call they happened to join.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the calls | Choose which calls or reps to review this week | Which conversations happened in the window, by account and deal context | Customer conversations |
| 2 | Hear the objections | Listen for what buyers pushed back on | Objections buyers raised on those calls, verbatim, with how often each came up | Quotes (category Objection), themes |
| 3 | Hear what the rep said | Listen for the pitch, the claims, the questions | What our reps said, by category: value claims, differentiation, proof points, discovery questions, objection handling, pricing, caveats | Vendor quotes |
| 4 | Compare with the approved story | Judge whether the rep said what we agreed | Rep lines checked against the messaging pillars, the objection handling section and the product brief; pillar pull-through across calls | Messaging, product brief, messaging dashboard (field adoption) |
| 5 | Check against the buyer | Judge whether the rep spoke to what this persona cares about | The persona's pains, KPIs, objections and discovery questions | Persona canvas |
| 6 | Check against the outcome | Connect what was said to what happened | Deal drivers on deals the rep worked, direction and rank | Deal drivers, CRM deals |
| 7 | Write the coaching note | One page per rep: pattern, evidence, one thing to practise | A draft note with the quotes behind each point | All of the above |
| 8 | Roll up for the team | Find the objections and pillars that need a session | Objections most heard with no covering line, pillars reps skip | Messaging dashboard (objections, field adoption), themes |
| 9 | Deliver and follow up | Run the 1:1, assign role-play, recheck next period | Calven does not help here | |

## Recommended prompts

### Step 2 and 3: what was said on a rep's calls

```
Using Calven MCP, pull what buyers and [rep name] said on calls in [window].

CONTEXT
I am preparing a coaching 1:1 for [rep name]. I need the evidence before I form a view.

PULL FROM THE UNIVERSE
- Conversations in [window] where [rep name] is the vendor speaker, by account and deal context.
- Customer quotes from those calls, grouped by category (pain, objection, competitor mention, buying trigger).
- Vendor quotes from those calls, grouped by category (value claim, differentiation, proof point, discovery question, objection handling, pricing, caveat).

BUILD
- Per call: the objections raised and how the rep answered, side by side.
- Across calls: the three rep lines that recur and the three buyer objections that recur.

OUTPUT
A table per call, then the recurring lines.

GROUNDING
Use only quotes recorded in the Universe, verbatim and attributed. If a call has no vendor quotes recorded, say so.

[name the rep and the window]
```

### Step 4 and 5: compare with the approved story and the buyer

```
Using Calven MCP, check what [rep name] said against our messaging, our product brief and the buyer persona.

CONTEXT
Below are the rep's lines from recent calls, with the persona on each call. I want to know where the rep is on-message, off-message or over-claiming.

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

[paste the rep's lines and the persona per call]
```

### Step 6 and 7: the coaching note

```
Using Calven MCP, write a coaching note for [rep name].

CONTEXT
Audience: the rep and their manager. One page. Tone: direct, specific, respectful. The evidence is below (what they said, what buyers said, what I flagged).

PULL FROM THE UNIVERSE
- Deal drivers on deals [rep name] worked in [window], with direction and rank, so the note connects behaviour to outcomes.
- The approved line for each objection in the evidence.

WRITE
- What is working, with one quote.
- The pattern to change, with two quotes and the deal it touched.
- The one thing to practise this week, and the approved line or question to use.

OUTPUT
The note.

GROUNDING
Every point cites a quote or a deal driver from the Universe. Do not generalise beyond the calls reviewed.

[paste the evidence and your flags]
```

### Step 8: the team roll-up

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

### Gap mode: objections with no approved answer

```
Using Calven MCP, list the objections our reps are answering on their own.

CONTEXT
I want the objections buyers raise that the messaging document does not cover, so PMM can write the line and I can coach it.

PULL FROM THE UNIVERSE
- Customer objections from calls in [window], with frequency.
- The objection handling section of our messaging.
- Vendor quotes with category Objection handling, to see what reps say today.

BUILD
- Objections with no covering line, ranked by frequency, each with the buyer's words and the best rep answer heard so far.

OUTPUT
The gap list for PMM.

GROUNDING
Cite every quote. Do not write the missing lines; mark them as gaps.

[name the window]
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

## Good practice

- Start from the quotes, not from the manager's impression. Pull both sides of the call before judging.
- Name the persona on each call. The same line is right for a technical buyer and wrong for an economic buyer.
- Ask for the approved line beside every flagged line. A note that says "off-message" without the fix is not coaching.
- Keep rep quotes verbatim in the note. Paraphrase is where fairness is lost.
- Use the dashboard for team numbers and the quotes for individual coaching. Counting rows yourself produces wrong rates.
- Rerun the gap prompt quarterly and hand the result to PMM. The objection library is only as good as the lines it contains.

## Not covered today

- Call recording, transcription and the call library. Calven reads transcripts that were ingested; it does not record calls.
- Scoring and tracking coaching sessions. That stays in the enablement platform.
- Writing the missing objection lines into the messaging. The messaging agent and the PMM do that in Calven.
- Rep-level dashboards. Calven reports what was said and what buyers answered, not activity metrics per rep.

# Persona briefs


A writer, a rep or a product manager needs a current, specific read on a persona: what they're measured on, what hurts, how they decide, what they object to and how they talk. You walk away with a brief tailored to that reader, with quotes and the numbers that show the persona's role in deals. Calven keeps one maintained canvas next to the call record, so teams stop keeping their own versions that disagree.

## Prompts

### Write a persona brief for one reader

```
Using Calven MCP, write a persona brief on the persona below for the reader named.

FILL IN
- Persona: [persona]
- Reader: [a copywriter / an SDR / a product manager / a new hire]
- Task: [what the reader does with this buyer: write for / sell to / build for]

CONTEXT
The reader has never met this buyer. They take on the task next week.

PULL FROM THE UNIVERSE
- The persona's canvas: objectives, goals and KPIs, pains, gains, jobs to be done, objections, messaging hooks, watering holes.
- Customer quotes from people in this role, by category (pain, gain, objection, buying trigger).
- The persona's role in deals: win rate when they are in the buying group, how often they are, contact coverage.
- Our value propositions and messaging for this persona by stage.

BUILD
- Who they are and what they are measured on, in four lines.
- The three pains, each with a verbatim quote.
- What they want and how they decide; the objections and the approved response.
- How they talk: ten phrases they use.
- Their role in our deals, with the numbers and n.
- What we say to them, by stage.
- Where they learn.

OUTPUT
A one-page brief for the named reader; slides if I say deck.

GROUNDING
Ground every point in the canvas, quotes and dashboards and cite them. Numbers with n and window. Do not invent traits the canvas does not hold.
```

### Measure the persona's effect on deals

```
Using Calven MCP, show me how the persona below affects our deals.

FILL IN
- Persona: [persona]

CONTEXT
I want to know whether this persona is worth more attention from marketing and sales.

PULL FROM THE UNIVERSE
- The persona dashboard: win rate by persona, buying-group dynamics, engagement velocity, contact coverage, open pipeline gap.
- Contacts with this role in the CRM by lifecycle stage.

BUILD
- Win rate with and without this persona in the buying group, with n.
- How many open deals lack a contact in this role, and the pipeline amount if shown.
- Whether this persona moves faster or slower than others.

OUTPUT
Five lines with the numbers and a recommendation.

GROUNDING
Numbers from the dashboard only, with n and window. If the persona is below the floor, say so.
```

### Find what we don't know about the persona

```
Using Calven MCP, tell me what we do not know about the persona below.

FILL IN
- Persona: [persona]
- Window: [time window, e.g. last two quarters]

CONTEXT
Before the quarterly persona refresh I want to know where the canvas is thin.

PULL FROM THE UNIVERSE
- The persona's canvas, section by section.
- The count of quotes from this role in the window.
- Survey responses from respondents with this title.

CHECK
- Canvas sections that are short or generic.
- Pains, objections or hooks with no quote behind them.
- Whether calls and surveys include this role at all.

OUTPUT
A gap list for the persona agent, with the evidence source that would fill each.

GROUNDING
Report what the Universe holds. An empty quote list means no evidence, not a healthy persona.
```

### Check a campaign audience against personas

```
Using Calven MCP, check this audience description against our personas.

FILL IN
- Audience: [paste the audience description]

CONTEXT
The audience is how a campaign brief describes who it targets. I want to know whether it matches an approved persona and where it drifts.

PULL FROM THE UNIVERSE
- The persona roster and the canvases that match the roles named.

CHECK
- Which approved persona this is, or whether it mixes two.
- Where the brief's pains, goals and language differ from the canvas and the quotes.

OUTPUT
The brief's audience section annotated, then the corrected version.

GROUNDING
Judge only against the canvases and quotes in the Universe and cite them.
```

## Advanced prompts

### Map the persona's switching forces

```
Map the forces that push this persona to switch, or keep them stuck, using the jobs-to-be-done forces model. Use Calven MCP for their canvas, their own words and what decided their deals.

FILL IN
- Persona: [persona]

CONTEXT
Persona briefs list pains and goals. They rarely explain why a buyer with the pain still doesn't buy. The four forces do: the push of the current situation, the pull of the new solution, anxiety about the change, and the habit of the present.

FROM CALVEN
- The persona canvas: pains, gains, jobs to be done, objections.
- Quotes from people in this role tagged Pain, Buying trigger, Objection or Competitor mention.
- Deal drivers and survey answers from respondents with this persona's titles, won and lost.

METHOD
- Sort every piece of evidence into one of the four forces, keeping the quote.
- Rate each force's strength by how often it appears and whether it decided deals.
- Find the balance: in won deals, what tipped push and pull over anxiety and habit; in lost and no-decision deals, what held the buyer back.
- Name the moment of struggle: the trigger that turns a passive pain into an active search.
- Translate: for each force, one thing marketing or sales should do (amplify the push, sharpen the pull, reduce the anxiety, break the habit).

OUTPUT
The four forces as a table with the top three items each, the tipping-point story in one paragraph, and the four actions.

GROUNDING
Every item cites a quote, canvas entry or driver. Count, don't estimate. Don't invent an anxiety or habit the evidence doesn't show.
```

### Train reps against a persona simulator

```
Turn the persona into a discovery-call simulator reps can practise against, with a scoring rubric. Use Calven MCP to make the simulated buyer behave like our real buyers.

FILL IN
- Persona: [persona]
- Segment: [segment]
- Rep level: [new hire or experienced]

CONTEXT
New reps learn the persona from a slide, then meet them on a live call. I want them to meet a realistic version first: one that hides its real pain, raises the objections our buyers raise, and goes quiet when the rep pitches too early.

FROM CALVEN
- The persona canvas: goals, KPIs, pains, objections, the words they use.
- Quotes from people in this role in the segment, especially objections and buying triggers.
- The messaging matrix for this persona and the discovery questions in the battlecards.

BUILD
- A system prompt for the simulator: who the buyer is, their situation (picked from the canvas), what they reveal only when asked well, which objections they raise and when, and how they react to a pitch before discovery.
- Three scenarios of rising difficulty, pitched at the rep level.
- A scoring rubric: discovery depth, quantified pain uncovered, objection handling, use of the buyer's words, next step secured. Each scored 1 to 5 with anchors.
- A debrief prompt that scores a transcript and quotes the moments that won or lost points.

OUTPUT
The simulator prompt, the three scenarios, the rubric and the debrief prompt, ready to paste into a new chat.

GROUNDING
The buyer's behaviour comes from the canvas and quotes, cited in a note under the simulator prompt. Don't give the simulated buyer pains or objections the Universe doesn't record.
```

### Test the persona against who actually signs

```
Backtest the persona against the CRM: are the people we wrote it for the ones on our won deals? Use Calven MCP for the persona, the contacts on closed deals and the persona win rates.

FILL IN
- Persona: [persona]
- Window: [time window, e.g. last four quarters]

CONTEXT
Say the persona names a VP as the buyer. If contracts get signed by a Director and the VP never shows up, every campaign aimed at the persona is aimed at the wrong person.

FROM CALVEN
- The persona row and canvas: role title, seniority, department, buying role.
- Contacts on won and lost deals in the window, paged from the CRM mirror, with title and role (Champion, Economic buyer, Decision maker and so on).
- Win rate by persona and the threading read from the persona dashboard, with n.

BACKTEST
- Map each contact title to the persona or to none, and show the matching rule.
- For won and lost deals separately, count how often the persona appears and in which role.
- Compare the buying role the persona states with the one observed.
- List the titles that appear on won deals and map to no persona.
- Score the persona: supported, partly supported, or contradicted.

OUTPUT
A table of persona versus reality (title, seniority, role, presence on won and lost deals), the verdict, and the canvas edits for a PMM to make in Calven.

GROUNDING
Label every number as Calven (cited, with n) or your count from paged rows. Don't fill in contacts the CRM doesn't hold.
```

## Ad hoc questions

- What is [persona] measured on?
- What are [persona]'s top pains, with quotes?
- What objections does [persona] raise, and what is our response?
- How does [persona] talk about [topic]?
- Where does [persona] learn: events, communities, publications?
- What is our value proposition for [persona] at the evaluation stage?
- Is [persona] a buyer, a stakeholder or a user?
- How often is [persona] in the buying group on won deals?
- Which personas are missing from our open pipeline?
- Which persona did we hear from most on calls this quarter?
- What did respondents with the title [title] say about why they chose us?
- Which persona has no canvas?
- Which persona shows up on won deals but rarely on lost ones?
- What does [persona] say right before they buy, in their own words?
- Which [persona] objection has no approved response in the messaging?
- Which watering holes do [persona] and [persona] share?
- Which of [persona]'s pains show up in recent quotes but not on the canvas?
- Which contact titles on won deals map to no persona?

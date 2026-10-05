# Persona briefs

**Team:** Product marketing · also demand generation, content marketing, business development, sales enablement, product management
**Impact:** High. Everyone who writes, sells or builds for a buyer needs the same one-page read on them; a brief drawn from the approved canvas, the calls and the deals replaces the two-year-old persona slide.
**Prerequisites:** personas approved (rows and canvases). Better with transcripts ingested (quotes by role), CRM connected (contacts by role, persona win rates), win/loss surveys running (respondent answers by title).

## What the team is trying to do

Give any team a current, specific read on a persona: what they are measured on, what hurts, what they want, how they decide, what they object to, how they talk, and where they learn. Done means a brief tailored to the reader (a writer, a rep, a product manager) with quotes and the numbers that show the persona's role in deals. Without a maintained canvas and the call record, every team keeps its own version and they disagree.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the persona and the reader | Which persona, for which team | The persona roster by type and buying role | Personas |
| 2 | Read the canvas | Objectives, KPIs, pains, gains, jobs, objections, hooks, watering holes | The canvas | Persona canvas |
| 3 | Add the evidence | What people in this role said on calls | Quotes by speaker role, themes | Quotes, themes |
| 4 | Add the deal role | How this persona shows up in deals | Win rate by persona, buying-group dynamics, contact coverage | Persona dashboard, win/loss buying group |
| 5 | Add what they answered | Survey answers from respondents with this title | Survey responses by respondent title | Survey_responses, `get_insight_detail` answers |
| 6 | Add the messaging | What we say to them and at which stage | Value propositions by persona, messaging matrix | Messaging |
| 7 | Tailor to the reader | Writer, rep, PM, new hire | Drafted from the above | |
| 8 | Check gaps | What the canvas lacks | Thin sections, no quotes, no deal data | |

## Recommended prompts

### Step 2 to 6: the full brief

```
Using Calven MCP, write a persona brief on [persona] for [reader: a copywriter / an SDR / a product manager / a new hire].

CONTEXT
The reader has never met this buyer. They need to [write for / sell to / build for] them next week.

PULL FROM THE UNIVERSE
- The [persona] canvas: objectives, goals and KPIs, pains, gains, jobs to be done, objections, messaging hooks, watering holes.
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

[name the persona and the reader]
```

### Step 4: persona in the pipeline

```
Using Calven MCP, show me how [persona] affects our deals.

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

[name the persona]
```

### Step 8: persona gap check

```
Using Calven MCP, tell me what we do not know about [persona].

CONTEXT
Before the quarterly persona refresh I want to know where the canvas is thin.

PULL FROM THE UNIVERSE
- The [persona] canvas, section by section.
- The count of quotes from this role in the last [window].
- Survey responses from respondents with this title.

CHECK
- Canvas sections that are short or generic.
- Pains, objections or hooks with no quote behind them.
- Whether calls and surveys include this role at all.

OUTPUT
A gap list for the persona agent, with the evidence source that would fill each.

GROUNDING
Report what the Universe holds. An empty quote list means no evidence, not a healthy persona.

[name the persona]
```

### Review mode: brief for a campaign audience

```
Using Calven MCP, check this audience description against our personas.

CONTEXT
Below is how a campaign brief describes its audience. I want to know whether it matches an approved persona and where it drifts.

PULL FROM THE UNIVERSE
- The persona roster and the canvases that match the roles named.

CHECK
- Which approved persona this is, or whether it mixes two.
- Where the brief's pains, goals and language differ from the canvas and the quotes.

OUTPUT
The brief's audience section annotated, then the corrected version.

GROUNDING
Judge only against the canvases and quotes in the Universe and cite them.

[paste the audience description]
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
- Which persona has no canvas yet?

## Good practice

- Name the persona as approved in Calven and say who the reader is. A brief for an SDR and one for a PM differ in what comes first.
- Ask for quotes under every pain. A pain with no quote is an assumption.
- Add the deal numbers. They tell sales whether to multi-thread to this persona.
- Run the gap check before the refresh. The persona agent researches; the brief reads.
- Keep one brief per persona and regenerate it, rather than editing copies.

## Not covered today

- Researching a persona from the web or from LinkedIn. That is the persona agent in Calven.
- Editing the canvas. Approved in Calven, read from the AI tool.
- Named contacts' personal details beyond what the CRM mirror holds and the workspace allows.

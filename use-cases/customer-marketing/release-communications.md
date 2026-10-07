# Release communications


Something shipped, and existing customers need to hear what changed, why it matters to them and what to do next, without overstating it. You get a release note, an email and a CSM line that match the product and the messaging, plus the customers who asked for it. Calven keeps the story out of engineering's words and closes the loop with the people who requested it.

## Prompts

### Write the release note, email and CSM line

```
Using Calven MCP, write the customer communication for the release or change below.

FILL IN
- Change: [release or change]
- Persona: [persona]

CONTEXT
We shipped the change. I need a release note (80 words), a customer email (120 words) and a two-line CSM talking point.

PULL FROM THE UNIVERSE
- The product change record for the change: summary, what it replaces, evidence.
- The persona's jobs or pains the change serves, with their messaging hooks.
- The messaging pillar it supports, and the product brief entry it updates.

WRITE
- Release note: what changed, who it is for, what to do.
- Email: the pain in the persona's words, what changed, how to turn it on, one link.
- CSM line: what to say in the next check-in.

OUTPUT
The three pieces, each with the pillar it leans on.

GROUNDING
Use only the product change and brief in the Universe and cite them. Do not describe capabilities beyond the change record.
```

### Tell the customers who asked for it

```
Using Calven MCP, find the customers who asked for the capability below so we can tell them it shipped.

FILL IN
- Capability: [capability]

CONTEXT
The capability shipped this week. I want a personal note to every customer who requested it.

PULL FROM THE UNIVERSE
- Customer quotes tagged product feedback, job to be done or gain that mention the capability, with speaker, account and date.
- The contact's role from the CRM.

BUILD
- A table: contact, account, what they said and when.
- A three-sentence note template that quotes their own words back.

OUTPUT
The table and the template.

GROUNDING
Use only quotes in the Universe, verbatim and cited. Do not include accounts whose quote is about something else.
```

### Find what the change made wrong

```
Using Calven MCP, tell me which published materials the change below made wrong.

FILL IN
- Change: [release or change]

CONTEXT
Before we announce the change, I want to know what else now says the wrong thing.

PULL FROM THE UNIVERSE
- Drift findings linked to the product change, with the document, the verdict and the rationale.
- Claims that reference the old behaviour.

BUILD
- A list of documents and claims to fix, by severity.

OUTPUT
The list.

GROUNDING
Use only drift findings and claims in the Universe and cite them.
```

## Advanced prompts

### War-game the release against a competitor

```
War-game this release over three rounds: what our closest competitor tells our customers about it, and how we answer. Use Calven MCP for the competitor's recent moves, their battlecard and how our customers describe the problem.

FILL IN
- Release: [paste the release summary or name the product change]
- Competitor: [competitor]
- Segment hit hardest: [segment]

CONTEXT
When we ship something the competitor has had for a year, their reps call our customers that week. When we ship something they don't have, they reframe it. Customer comms is our first move in that game, and I want to see the next two before I send it.

FROM CALVEN
- The product change record and what the product brief says about the capability.
- The competitor's battlecard (where they win, objection handling, landmines) and their signals from the last 90 days.
- Quotes from customers in the segment that mention the competitor or the capability.

WAR-GAME
- Round 1: our release note goes out. Play the competitor's rep and write the one-paragraph message they send our customer, built from their recorded positioning and recent signals.
- Round 2: our CSM replies, using our battlecard's objection handling and customer quotes. The competitor counters.
- Round 3: the customer decides, played as the segment's persona, with the reason.
- After the rounds, rewrite our release note to pre-empt the competitor's strongest line.

OUTPUT
The three rounds as a short script, the move that hurt most, the rewritten release note, and one CSM talk track.

GROUNDING
The competitor's moves trace to their battlecard and recorded signals, cited; mark anything else as your extrapolation. Don't claim a capability the product brief doesn't list.
```

### Forecast adoption by persona and tier

```
Build an adoption forecast for this release as a spreadsheet, by persona and account tier, and use it to decide where the comms effort goes. Use Calven MCP for who the feature serves, which customer contacts match, and who asked for it.

FILL IN
- Release: [the product change]
- Account list: [attach a CSV: account, plan, seats, and usage of the area the feature touches if you have it]
- Past adoption: [the adoption curve of a comparable release, or write "none"]

CONTEXT
We send the same email to everyone and then wonder why adoption is flat. I want to know where adoption will come from, and which comms lever moves it most, before I write a word.

FROM CALVEN
- The persona the feature serves, and the customer contacts with that role, by account and ICP tier.
- Dated quotes from customer accounts asking for the capability.
- The product brief entry for the feature: what it does and who it's for.

BUILD
- One row per account: eligible users (my seats times the share of matching contacts), an asked-for-it flag, the tier, and an adoption probability built from visible input cells: base rate, lift for asked-for-it, lift for a CSM touch, lift for an in-app note.
- Totals by persona and tier at 30, 60 and 90 days.
- A sensitivity tab: which lever, moved by half in either direction, changes 90-day adoption most.
- Name the channel that deserves the effort and the accounts that get a personal touch.
- If you can run code, generate the workbook with live formulas.

OUTPUT
The workbook, a one-paragraph read of the forecast, and the personal-touch account list.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Seats and usage are mine; Calven holds no product telemetry. Don't present the lifts as measured unless I gave you a past release.
```

## Ad hoc questions

- What changed in our product in the last 30 days?
- Which persona uses [feature], and what pain does it answer?
- Has any customer asked for [capability] on a call?
- Which messaging pillar does [feature] support?
- Is [feature] in the product brief?
- Which documents went stale after [change]?
- Write a two-line CSM note about [change] for a [persona].
- Which accounts asked for [capability] and should hear about it first?
- Did [change] close a product gap that cost us deals? How many?
- Which competitor announced something like [change], and when?
- Which customer quotes complain about the exact thing [change] fixes?
- Which claims on our site does [change] make true, or untrue?
- Which [persona] objection does [change] answer?
- Which lost deals had [capability] in their product feedback?
- Which accounts described a workaround for [capability] on a call?

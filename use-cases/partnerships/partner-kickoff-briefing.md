# Partner kickoff briefing


A new partner's team needs to know who you are, who you're for, how you win and what to say, and the latest sales deck is written for your own reps and three months out of date. You give them one session and one document they keep, so their reps can describe the positioning in their own words, name the ICP and personas, and know the three competitors they'll meet. Calven builds it from your positioning and strips what should stay internal.

## Prompts

### Refresh yourself on positioning first

```
Using Calven MCP, brief me on our positioning before the reseller kickoff.

FILL IN
- Partner: [partner]

CONTEXT
I run the kickoff with the partner tomorrow. I want the current approved story in my head, not last quarter's deck.

PULL FROM THE UNIVERSE
- Our positioning: statement, category, competitive alternatives, unique attributes, value themes, why now.
- Our messaging: one-liner, value pillars, value propositions by persona.
- The ICP summary and segment tiers.

BUILD
- The story in five lines I could say out loud.
- The three things that changed most recently, if the documents show a version history.
- The two questions a partner will ask that the documents answer, and one they do not.

OUTPUT
A one-page refresher with document references.

GROUNDING
Use only the approved documents in the Universe and cite sections. Do not add positioning the documents do not contain.
```

### Build the partner kickoff briefing

```
Using Calven MCP, build the kickoff briefing document for the partner below.

FILL IN
- Partner: [partner]
- Partner type: [reseller, referral, implementation or technology]
- Readers: [sellers, SEs or marketing]

CONTEXT
The readers will read it after the session and keep it. Partner-safe: nothing internal.

PULL FROM THE UNIVERSE
- Positioning: statement, category, unique attributes, value themes, proof points.
- Messaging: one-liner, value pillars, value propositions by persona, boilerplate.
- ICP: summary, firmographics, segment tiers, priority verticals, disqualifiers.
- Personas: each buyer persona's goals, pains and messaging hooks.
- Product brief: overview, capabilities, use cases, integrations.
- The battlecards for the top three competitors: how we win and the talk track (not "where we lose").

BUILD
1. What we are and who we are for, in the partner's selling context.
2. The personas and what each cares about.
3. How to describe the product and its use cases.
4. The three competitors they will meet and the approved talk track against each.
5. Proof points they may quote.
6. What to disqualify and when to bring us in.

OUTPUT
The document in that order, with a short glossary of our terms.

GROUNDING
Use only approved documents and cite each section. Leave out anything marked internal, pricing floors and deal data. If a section is missing in the Universe (no canvas for a persona, no battlecard for a competitor), say so instead of filling it.
```

### Strip internal content from the briefing

```
Using Calven MCP, check this partner briefing for anything that should stay internal.

FILL IN
- Partner: [partner]
- Briefing: [paste the briefing]

CONTEXT
I am about to send the briefing to the partner. I want to catch internal-only content before it leaves.

PULL FROM THE UNIVERSE
- The battlecards, to identify "where we lose", landmines and internal talk-track notes.
- The product brief pricing section, to identify anything beyond list pricing.
- The ICP disqualifiers and blacklisted verticals, to decide what to phrase as "when to bring us in".

CHECK
- Flag each passage that is internal, overstated or stale against the current documents.
- Suggest the partner-safe version.

OUTPUT
The briefing annotated, then the clean version.

GROUNDING
Judge only against the documents in the Universe. If a passage is on-document, say so.
```

### Gather proof a partner can quote

```
Using Calven MCP, give me the customer proof a partner may quote.

CONTEXT
Partners repeat what we give them. I want proof that is approved, attributed and short.

PULL FROM THE UNIVERSE
- Marketing-ready quotes from the voice-of-customer read, approved state.
- Displacement wins from the battlecards' proof points.
- The proof points section of our positioning.

BUILD
- Ten lines of proof: the quote or fact, the attribution as we are allowed to state it, the pillar it supports.

OUTPUT
The list with sources.

GROUNDING
Include only quotes in an approved state and proof the positioning document lists. Do not paraphrase a quote into a stronger claim.
```

## Advanced prompts

### Certify reps with a scored role-play

```
Turn the kickoff into a certification role-play: you play our buyers, the partner's rep pitches, and you score every answer. Use Calven MCP for the buyers, their objections and the approved answers.

FILL IN
- Partner: [partner]
- Segment the partner sells into: [segment]
- Personas to play: [persona, persona]
- Pass mark: [e.g. 75 out of 100, or write "you set it"]

CONTEXT
After the kickoff, the partner's reps meet customers alone. A slide quiz tells me what they remember. A role-play tells me what they say when a buyer pushes back, and that's what I need to certify.

FROM CALVEN
- Each persona's canvas: goals, pains, objections and messaging hooks.
- The objection handling section of our messaging, and the partner-safe parts of the battlecard for the competitor most common in the segment.
- Two or three verbatim buyer quotes per persona, tagged Objection or Pain.

SIMULATE
- Write the scoring rubric first: discovery, value proposition for that persona, objection response, competitive handling, next step. Weight each one and describe what a 1, a 3 and a 5 look like, anchored to the approved answers.
- Prepare five scenarios of rising difficulty. In each, play the persona in the first person, open with a realistic situation, raise one objection from the canvas or the quotes, and wait for the rep's reply before you go on.
- After each reply, score it against the rubric, quote the line that cost points, and show the approved answer.
- If you can run code, keep a running scorecard and export it as a CSV at the end.

OUTPUT
The rubric, the five scenarios ready to run, and after the session a scorecard per rep with pass or fail and the two answers to practise.

GROUNDING
Label every score as rubric-based and every objection as Calven (persona canvas or quote, cited). Don't invent an objection the canvas and the quotes don't support, and never show the rep internal battlecard content.
```

### Red-team the kickoff as their sales VP

```
Red-team my partner kickoff as the partner's VP of sales, who decides whether their reps spend any time on us. Use Calven MCP for our positioning, our proof and our deal economics.

FILL IN
- Partner: [partner]
- Kickoff briefing: [paste the briefing or the deck outline]
- Other lines they resell: [paste the vendors in their bag, or write "unknown"]
- Their rep economics: [paste commission, quota or margin per deal, or write "unknown"]

CONTEXT
A reseller's reps sell whatever pays fastest. The kickoff competes for mindshare with every other vendor they carry, and their VP of sales judges it on one question: will my reps make money selling this?

FROM CALVEN
- Our positioning: competitive alternatives, unique attributes and proof points.
- Average deal size and sales cycle for the partner's segment from the ICP dashboard, with n.
- The best-fit customer characteristics and the disqualifiers from the ICP.

RED-TEAM
- Play the VP in the first person. Read the briefing cold and write the ten toughest questions they'd ask: time to first commission, how hard the sale is, who signs, what happens when a deal stalls, what we do when our direct reps want the account.
- Answer each from the evidence above. Where the evidence is thin, say so plainly instead of smoothing it over.
- Compare us with the other lines on deal size, cycle and effort per deal. If you can run code, build a small table with commission per rep-hour as the bottom line.
- End with the VP's verdict: prioritise, sell when asked, or ignore.

OUTPUT
The ten questions with answers and a confidence for each, the comparison table, the verdict, and the three slides to add or rewrite before the kickoff.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent figures for the other vendors. Where I didn't give them, use a labelled range or leave the cell blank.
```

### Forecast the partner's time to first deal

```
Forecast how long this partner will take to register and close their first deal, and what would shorten it. Use Calven MCP for how many target accounts sit in their patch and how our deals there usually run.

FILL IN
- Partner: [partner]
- Their patch: [segment, region and verticals they cover]
- Past partner history: [attach a CSV: partner, start date, first registration date, first closed-won date, or write "none"]
- Their planned effort: [reps assigned, accounts each can work per month]

CONTEXT
Leadership asks one question after every kickoff: when does this partner pay back? I want a forecast with a range and the levers I control, not a hopeful date.

FROM CALVEN
- The count of Tier 1 and Tier 2 CRM accounts in their segment and region, and how many already have an open direct deal.
- Win rate and sales cycle for that segment from the ICP dashboard, with n.
- The buying triggers in the ICP, so the partner starts with accounts showing them.

MODEL
- If I gave history, run a survival analysis on time from start to first registration and to first win, with a Kaplan-Meier curve and the median. If you can run code, do it in Python and plot the curve.
- Without history, build the funnel: accounts worked per month, meeting rate, registration rate, win rate, cycle. Use stated, ranged assumptions for the first three.
- Run low, expected and high scenarios and give the month of the first expected win in each.
- Show which lever moves the date most: more reps, a tighter Tier 1 list, or a higher meeting rate.

OUTPUT
A one-page forecast: the curve or the funnel, the three dates, the top lever, and the 90-day milestones I can hold the partner to.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't present a funnel assumption as a historical rate, and don't count accounts already in a direct deal as open territory.
```

## Ad hoc questions

- Brief me on our positioning before the reseller kickoff.
- What is our one-liner and our three value pillars?
- Who are we for, and who should a partner not bring us into?
- Which personas does a partner's rep need to know, and what does each care about?
- What are the three competitors a partner will meet and the talk track against each?
- Which proof points can a partner quote?
- What changed in our positioning since [date]?
- What is the approved boilerplate for a partner's website?
- Which verticals are priority and which are disqualified?
- How do we describe the product in one paragraph?
- What is internal in the battlecard that a partner must not see?
- Which buying trigger shows up most on calls in [segment], with a quote?
- In one sentence each, why did our last five won-deal buyers choose us?
- What's our sales cycle in [segment], so I can set the partner's expectations?
- Which competitor did we lose to most last quarter, and what decided those deals?
- Which positioning claim has no proof point behind it?
- Which known weakness in the product brief should a partner hear from us before a customer raises it?

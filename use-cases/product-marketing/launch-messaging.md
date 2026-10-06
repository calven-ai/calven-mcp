# Launch messaging


A new product or feature needs a story the whole company tells the same way: what it is, who it's for, why it matters now, how it fits the positioning, and what sales can claim. You're aiming for approved launch messaging, a launch kit (one-pager, FAQ, talk track, launch email, page copy) and an enablement session before the date. Calven saves you rebuilding the context every launch: the positioning, the personas and the quotes from buyers who asked for this are already there, so the field has less reason to rewrite the story.

## Prompts

### Gather the evidence buyers asked for this

```
Using Calven MCP, build the demand case for launching the feature below.

FILL IN
- Feature: [feature or product]
- Problem: [the problem it solves]
- Weeks to launch: [weeks]

CONTEXT
We are launching the feature in the weeks given. Before writing the story I want the evidence that buyers wanted it and that it costs us deals today.

PULL FROM THE UNIVERSE
- Customer quotes and themes about the problem, with who said them and when.
- Lost deals where the loss reason or product gap matches the feature, with the deal count and the buyer's words.
- Competitor signals in the same area, with dates.

BUILD
- The pain in the customer's words: the three strongest quotes.
- The deals at stake: how many losses named this gap, in which segments, against whom.
- Which personas raised it and which segments it matters to most.

OUTPUT
A one-page demand case with sources per claim.

GROUNDING
Ground every quote and count in the Universe and cite it. Do not invent demand. If the Universe holds no evidence for this feature, say so.
```

### Draft the launch positioning and messaging

```
Using Calven MCP, write the launch messaging for the feature below.

FILL IN
- Feature: [feature or product]
- Tier: [1/2/3]
- Date: [launch date]
- Personas: [personas]
- Segment: [segment]
- Demand case: [paste the demand case]

CONTEXT
A launch at the tier given, on the date, aimed at the personas in the segment. Build on the demand case.

PULL FROM THE UNIVERSE
- Our positioning: category, differentiation, value themes, proof points.
- Our messaging framework: narrative, pillars, value propositions by persona, objection handling.
- The persona canvases for the personas: pains, gains, jobs to be done, messaging hooks.
- The product brief entry for what ships, so every claim is accurate.

BUILD
- The launch narrative in one paragraph and the one-liner.
- Which pillar the feature strengthens and how.
- Value proposition per persona, in the words the persona uses.
- Three proof points and the quote behind each.
- The three objections to expect and the response.

OUTPUT
A launch messaging document with sources, ready for review.

GROUNDING
Ground every claim in the positioning, messaging and product brief and cite it. Do not add a capability the brief does not list. Do not create a new pillar.
```

### Fact-check every launch claim

```
Using Calven MCP, fact-check the launch messaging.

FILL IN
- Messaging: [paste the launch messaging]

CONTEXT
Every product, integration, pricing and competitive claim must hold.

PULL FROM THE UNIVERSE
- The product brief: capabilities, integrations, pricing and packaging.
- Recent product changes and documents they left stale.
- The claims register, for any claim already flagged as unsupported.

CHECK
Mark each claim correct, wrong, stale or not in the brief, and give the accurate wording for each flag.

OUTPUT
The messaging annotated inline, then the list of claims a human must verify with product.

GROUNDING
Confirm only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### See how each persona reads the messaging

```
Using Calven MCP, review the launch messaging as our personas.

FILL IN
- Messaging: [paste the launch messaging]
- Personas: [personas]

CONTEXT
I want the buyer's, the stakeholder's and the user's honest reaction before it ships.

PULL FROM THE UNIVERSE
- Run the persona review on the messaging, and read the canvases for the personas.

REACT
- For each persona: what lands, what reads as vendor marketing, the line they would not believe, the question left unanswered.
- The one change that would matter most to each.

OUTPUT
The findings by persona with severity, then the three edits to make.

GROUNDING
React only from what the Universe says about each persona. Do not invent reactions the canvases do not support.
```

### Build the launch kit

```
Using Calven MCP, build the launch kit for the feature below from the approved launch messaging.

FILL IN
- Feature: [feature]
- Messaging: [paste the approved launch messaging]
- Personas: [personas]
- Competitors: [competitors]

CONTEXT
I need the assets listed for the personas and the field.

PULL FROM THE UNIVERSE
- The product brief entry for the feature.
- The persona canvases for the personas.
- The battlecards for the competitors, where the feature changes how we win.

WRITE
- A one-pager: problem, what it does, three benefits, proof, CTA.
- A sales FAQ of ten questions, including "what it does not do".
- A 60-second talk track and two discovery questions.
- A launch email for customers and one for prospects.
- The page copy: hero, three sections, proof.

OUTPUT
Each asset under its own heading, with the pillar and proof it leans on noted at the end.

GROUNDING
Ground every claim in the approved messaging and the product brief and cite it. Do not invent customer names, numbers or integrations.
```

### Brief the field before launch

```
Using Calven MCP, write the field briefing for the feature launch below.

FILL IN
- Feature: [feature]
- Competitors: [competitors]

CONTEXT
Sales, success and support get 30 minutes. They need what changed, what to say, and what not to claim.

PULL FROM THE UNIVERSE
- The battlecards for the competitors: which "where we lose" and objection entries the feature changes.
- The objections customers raised on this topic, with quotes.
- The product brief, for the limits of what we claim.

BUILD
- What changed in one paragraph.
- The objections this feature now answers, old response and new response.
- Where it changes the competitive story, by competitor.
- What we still do not do.

OUTPUT
A one-page briefing and a five-question check reps can self-test with.

GROUNDING
Ground every point in the Universe and cite it. Do not promise capabilities outside the brief.
```

### Read how the launch landed

```
Using Calven MCP, tell me whether the launch story for the feature below is being used.

FILL IN
- Feature: [feature]
- Launch date: [launch date]

CONTEXT
We launched on the launch date. I want to know whether reps pitch it and whether buyers mention it.

PULL FROM THE UNIVERSE
- Messaging field adoption: pillar pull-through on calls, this period vs the one before.
- Vendor quotes mentioning the feature and how reps describe it.
- Customer quotes mentioning the feature since launch, with sentiment.

BUILD
- Whether the launch pillar shows up on calls, with n.
- How reps describe it versus the approved wording, with examples.
- What buyers say about it, grouped by sentiment.

OUTPUT
A half-page readout with the numbers and quotes, and the two corrections to make.

GROUNDING
Numbers from the dashboards only, with n and window. Quotes verbatim and cited. If there are too few calls, say so.
```

## Advanced prompts

### Pick the launch tier with an expected-value tree

```
Decide the launch tier with an expected-value decision tree instead of a gut call. Use Calven MCP for the deals the feature touches, the segment's win rate and deal size, and competitor moves in the same area.

FILL IN
- Feature: [feature or product]
- Tier costs: [paste what a Tier 1, 2 and 3 launch costs you in budget and team weeks]
- Launch history: [paste results from past launches, or write "none"]

CONTEXT
Every feature team wants Tier 1. I have budget for one big launch this half, and I want the tier set by what's at stake, not by who argues loudest.

FROM CALVEN
- Lost deals where the loss reason or product feedback matches the feature, with count and amount.
- Win rate, average deal size and sales cycle for the segments the feature serves, from the ICP dashboard, with n.
- Competitor signals in the same area over the last two quarters.

MODEL
- Build a tree: three tier choices, each branching into strong, moderate and weak market reception, with a probability and a payoff per branch.
- Payoff is incremental pipeline: deals the feature could flip, times the win-rate lift, times deal size, minus the tier's cost. State the lift as a range.
- Weight the reception probabilities by the demand evidence and by whether a competitor already owns the story.
- Compute expected value per tier. Then run a sensitivity: how far the lift or the chance of strong reception must move before a different tier wins.
- If you can run code, build it as a spreadsheet with formulas I can change.

OUTPUT
The tree as a table, expected value per tier, the break-even points, and a one-paragraph recommendation I can take to the launch review.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a win-rate lift: range it and show it in the sensitivity.
```

### War-game the competitor's answer to the launch

```
War-game how the competitor answers our launch over three rounds of move and counter-move. Use Calven MCP for the competitor's battlecard, their recent moves and what decides deals between us.

FILL IN
- Launch messaging: [paste the launch messaging]
- Competitor: [competitor]
- Launch date: [launch date]

CONTEXT
We'll own the story for about a week. Then the competitor responds, and the field needs to know what's coming before it arrives.

FROM CALVEN
- The competitor's battlecard and dossier: positioning, strengths, pricing, and how they answered past launches.
- Their competitive signals from the last two quarters, with dates, to read their tempo and habits.
- Deal drivers from deals against them, won and lost, to see what decides.

WAR-GAME
- Play two teams. Blue is us, launching on the date. Red is the competitor's PMM, acting only in ways their recorded history makes plausible.
- Round one: Red's response in the week after launch (a counter-message, a price move, a roadmap claim, a sales play). Then Blue's answer.
- Rounds two and three: escalate. Each move names the evidence that makes it likely.
- After each round, score who holds the deal drivers that matter, and what a rep in a live deal hears.
- End with the move Red would regret not making, and how we pre-empt it in the launch kit.

OUTPUT
A round-by-round table (Red move, likelihood, Blue counter, who's ahead), then three changes to the launch messaging and a one-paragraph heads-up for the field.

GROUNDING
Label every move as grounded in a recorded signal or battlecard entry (cited) or as your inference. Don't invent a competitor capability, price or announcement.
```

### Rank the launch claims with a MaxDiff panel

```
Find which launch claims carry weight by running a MaxDiff trade-off with synthetic buyers. Use Calven MCP to build each respondent from our personas and their own words.

FILL IN
- Candidate claims: [paste eight to twelve candidate headlines or value claims]
- Personas: [personas]
- Respondents per persona: [number, e.g. 30]

CONTEXT
Everyone on the launch team has a favourite claim. MaxDiff forces a choice: of four claims, which matters most and which least. That ranks claims on relative importance, not on how nice each sounds alone.

FROM CALVEN
- The persona canvases: goals and KPIs, pains, jobs to be done, objections.
- Quotes from each persona's role on the problem the feature solves.
- The product brief entry for the feature, so no claim promises more than ships.

SIMULATE
- Flag any claim the product brief doesn't support and drop it before the test.
- Generate a balanced design: sets of four claims, each claim shown an equal number of times.
- For each persona, create the respondents as variations grounded in the canvas (different priorities, seniority, maturity). Each picks most and least important per set, with a one-line reason in their own words.
- Score best minus worst and convert to a share of preference per persona. If you can run code, do it in Python and show the design and the scores.
- Note where personas disagree sharply. That's where the kit needs persona-specific copy.

OUTPUT
A ranked table of claims by persona with preference shares, the top claim per persona, the claims to cut, and five reasons quoted from the respondents.

GROUNDING
Label every score as simulated from Calven persona evidence, not measured. Don't invent respondent reasons the canvases and quotes don't support. Treat the ranking as a hypothesis to test with real buyers.
```

## Ad hoc questions

- Which lost deals this year named [capability] as the missing feature? Quote the buyers.
- Which persona raised [pain] most on calls?
- Which messaging pillar does [feature] strengthen?
- Does [competitor] offer [capability]? What does our dossier say?
- Write the one-liner for [feature] for [persona].
- Is [claim about the feature] in the product brief?
- Which battlecard sections change now that we ship [feature]?
- What do customers call [feature's problem] in their own words?
- Which proof point can I use for [feature]?
- Do reps mention [feature] on calls since launch?
- What did buyers say about [feature] since [date]?
- Which objections does [feature] answer?
- Which open deals stalled on a gap [feature] closes?
- Which competitor shipped or announced something in [feature]'s area in the last 90 days?
- Which segment lost the most deals over the missing [capability], and is it Tier 1?
- Which proof point in our positioning does [feature] make out of date?
- What did the messaging agent flag as weak in the pillar [feature] strengthens?
- Which pain on the [persona] canvas does [feature] solve that our messaging never mentions?

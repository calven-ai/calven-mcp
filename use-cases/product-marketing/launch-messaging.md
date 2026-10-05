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

# M&A and partnership evaluation


You're weighing a target or a partner, and the only first read on the table is their own deck. You get a one-page view before diligence starts (what they offer, how they're positioned, their strengths, weaknesses and recent trajectory, where they overlap or complement us) plus a list of diligence questions. Calven adds how buyers compared them with us; financials, legal and the data room stay outside.

## Prompts

### Get a first read on a target or partner

```
Using Calven MCP, give me a first read on the vendor below in the role below.

FILL IN
- Vendor: [vendor]
- Role: [target or partner]
- Window: [time window for signals, e.g. last 12 months]

CONTEXT
We are considering the vendor as an acquisition target or partner. I want what we have verified, how buyers see them, and where they overlap with us, before diligence.

PULL FROM THE UNIVERSE
- The vendor's dossier: company snapshot, product, pricing and packaging, positioning, analyst standing, strengths, weaknesses, feature comparison, sources and freshness.
- Their signals in the window.
- Deal drivers and quotes on deals against them.
- Our product brief and ICP, for overlap.

BUILD
- Who they are and what they sell, in five lines.
- Trajectory: the dated moves.
- Buyer view: why buyers chose them, why they chose us.
- Overlap and complement: product areas and ICP segments.
- Unknowns in the dossier, as diligence questions.

OUTPUT
A one-page first read.

GROUNDING
Use only the dossier, signals, drivers and quotes, cited with freshness. Never invent revenue, headcount or funding; use the snapshot and say unknown where it says unknown.
```

### List what our record can't answer

```
Using Calven MCP, list what we do not know about the vendor below.

FILL IN
- Vendor: [vendor]

CONTEXT
Diligence starts next week. I want the questions our own record cannot answer.

PULL FROM THE UNIVERSE
- The vendor's dossier and signals, noting every unknown, not disclosed or unconfirmed field.

BUILD
- A question per unknown, grouped: product, pricing, customers, standing, people.

OUTPUT
The question list.

GROUNDING
Draw only from gaps in the record.
```

### Check a partner's proposal claims

```
Using Calven MCP, check the claims in the vendor's partnership proposal.

FILL IN
- Vendor: [vendor]
- Claims: [paste the claims]

CONTEXT
The claims are the ones in their proposal about their product and market. I want each one compared with our dossier.

PULL FROM THE UNIVERSE
- The dossier and signals for the vendor.

CHECK
- Each claim: consistent with the dossier, contradicted, or not covered.

OUTPUT
The claims annotated.

GROUNDING
Compare only with the record, cited.
```

## Advanced prompts

### Play out build, partner or buy as a game

```
Compare building, partnering with or buying the target as a game against our main competitor's response, and pick the move that holds up. Use Calven MCP for the target's dossier, the competitor's recorded behaviour and how each has fared in our deals.

FILL IN
- Target: [vendor]
- Competitor: [competitor]
- Our options: [describe build, partner and buy: cost, time, what each gets us]

CONTEXT
A deal looks good on its own. It looks different once the competitor reacts: they partner with the next-best vendor, cut price or announce a roadmap. I want the payoffs with their response included.

FROM CALVEN
- The target's dossier and recent signals, and any deals where buyers mentioned or chose them.
- The competitor's dossier, their signals from the last two quarters and our win rate against them, with n.
- Market opportunities and trends that the target's capability addresses.

GAME THEORY
- Set up a payoff matrix: our three options against the competitor's three most plausible responses, drawn from what they've done before.
- Score each cell on revenue impact, time and risk, with ranges, and explain each score in one line.
- Find our dominant strategy if there is one, or else the option with the best worst case.
- Name the signal that would tell us which response the competitor chose.

OUTPUT
The 3x3 matrix with scores, the recommended option and why, the competitor signal to watch, and the one question for the target's management that would change the answer.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The competitor's responses trace to recorded signals or dossier sections; don't invent a move they've never made.
```

### Test the combined offer on our buyers

```
Put the combined offer (us plus the target) in front of our buyer personas and find out whether it's worth more together or just bigger. Use Calven MCP for the personas, what buyers said about the target and our positioning.

FILL IN
- Target: [vendor]
- Combined pitch: [paste the one-paragraph pitch for the combined product]
- Price idea: [how you'd package and price it, or write "not decided"]

CONTEXT
Most acquisition theses assume customers want the bundle. Our personas can tell us whether it solves a pain they have or only adds a line to the procurement review.

FROM CALVEN
- The buyer and user personas: goals, pains, jobs to be done, objections.
- Quotes and deal drivers that mention the target, and deals where they were in play.
- Our positioning: category, unique attributes, competitive alternatives.
- A persona review of the combined pitch.

METHOD
- Run a jobs-to-be-done forces read per persona: what pushes them toward the combined offer, what pulls, what makes them anxious, and what habit keeps them where they are.
- Classify the combination for each persona: solves a job they have, convenient but not decisive, or a new objection.
- Check whether the bundle blurs the category our positioning claims.

OUTPUT
A forces table per persona, the verdict per persona, the objection the bundle creates and how we'd answer it, and whether the thesis holds, in three lines.

GROUNDING
Forces trace to canvases, quotes or the persona review, cited. Where no buyer has mentioned the target, say so; don't create demand nobody recorded.
```

## Ad hoc questions

- Is [vendor] tracked in Calven, and how fresh is the dossier?
- What does [vendor] sell and to whom?
- What did [vendor] do in the last six months?
- Why did buyers pick [vendor] over us?
- Where does [vendor]'s product overlap with ours?
- Which of our customers mentioned [vendor]?
- What does the dossier say about [vendor]'s funding and size?
- Which analyst findings mention [vendor]?
- Which deals had both us and [vendor] in play, and who won?
- Which persona mentions [vendor] most on calls?
- What does [vendor]'s battlecard list as their weaknesses?
- Which trends make [vendor]'s capability more valuable over the next two years?
- Which known weakness in our product brief does [vendor] cover?
- Do any analyst findings mention [vendor] alongside our main competitors?
- Which of our accounts list [vendor] in their tech stack?

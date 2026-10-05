# M&A and partnership evaluation

**Team:** Leadership · also partnerships, product management, finance
**Impact:** Medium. The first read on an acquisition target or a partner is usually the vendor's own deck. If the company is a tracked competitor or adjacent vendor, Calven holds a verified dossier, their recent moves, how they fared against us in deals and what buyers said about them.
**Prerequisites:** competitors tracked (dossiers, signals). Better with win/loss surveys (deals against them) and call transcripts (customer mentions). Only vendors tracked in Calven are covered.

## What the team is trying to do

Form a first view on a target or partner from the company's own evidence before diligence starts: what they offer, how they are positioned, their strengths and weaknesses, how buyers compared them with us, their recent trajectory, and where they overlap or complement. Done means a one-page first read and a list of diligence questions. Financials, legal and the data room stay outside.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Is it tracked | Check whether Calven knows the vendor | The competitor roster and documents | Competitors, list of documents |
| 2 | The profile | Company, product, pricing, positioning, standing | The dossier | Competitor deep dive |
| 3 | Trajectory | Launches, pricing, hires, funding | Signals by date | Competitive signals |
| 4 | Buyer view | How buyers compared them with us | Drivers and verbatims on deals against them; quotes mentioning them | Deal drivers, quotes |
| 5 | Overlap and fit | Where products overlap or complement; shared ICP | Feature comparison; our product brief; ICP | Competitor deep dive, product brief, ICP document |
| 6 | Diligence questions | What to ask | Unknowns in the dossier | Competitor deep dive |
| 7 | Financial and legal diligence | The rest | Calven does not help here | |

## Recommended prompts

### Step 2 to 5: the first read

```
Using Calven MCP, give me a first read on [vendor] as a [target or partner].

CONTEXT
We are considering [vendor] as an acquisition target or partner. I want what we have verified, how buyers see them, and where they overlap with us, before diligence.

PULL FROM THE UNIVERSE
- [vendor]'s dossier: company snapshot, product, pricing and packaging, positioning, analyst standing, strengths, weaknesses, feature comparison, sources and freshness.
- Their signals in the last [window].
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

[name the vendor and whether target or partner]
```

### Step 6: diligence questions from the gaps

```
Using Calven MCP, list what we do not know about [vendor].

CONTEXT
Diligence starts next week. I want the questions our own record cannot answer.

PULL FROM THE UNIVERSE
- [vendor]'s dossier and signals, noting every unknown, not disclosed or unconfirmed field.

BUILD
- A question per unknown, grouped: product, pricing, customers, standing, people.

OUTPUT
The question list.

GROUNDING
Draw only from gaps in the record.

[name the vendor]
```

### Review mode: check a partner's claims

```
Using Calven MCP, check the claims in [vendor]'s partnership proposal.

CONTEXT
Below are the claims in their proposal about their product and market. I want each one compared with our dossier.

PULL FROM THE UNIVERSE
- The dossier and signals for [vendor].

CHECK
- Each claim: consistent with the dossier, contradicted, or not covered.

OUTPUT
The claims annotated.

GROUNDING
Compare only with the record, cited.

[paste the claims]
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

## Good practice

- Check tracking first. An untracked vendor returns nothing, and the AI tool must not fill the gap.
- Treat unknowns as diligence questions, not as problems to solve from memory.
- Separate buyer view from dossier view; both are in the record.
- Keep financial and legal diligence in its own track.

## Not covered today

- Vendors not tracked in Calven. Ask the competitive intelligence agent to track them first, in Calven.
- Financials, cap table, contracts, the data room.

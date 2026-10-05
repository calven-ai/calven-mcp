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

## Ad hoc questions

- Is [vendor] tracked in Calven, and how fresh is the dossier?
- What does [vendor] sell and to whom?
- What did [vendor] do in the last six months?
- Why did buyers pick [vendor] over us?
- Where does [vendor]'s product overlap with ours?
- Which of our customers mentioned [vendor]?
- What does the dossier say about [vendor]'s funding and size?
- Which analyst findings mention [vendor]?

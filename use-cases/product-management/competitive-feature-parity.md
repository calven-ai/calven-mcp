# Where to match rivals, and where not to


A competitor is ahead on something and you have to decide whether to match it, leapfrog it or ignore it. You get a parity map per Tier 1 competitor: where they're ahead, whether buyers care, whether the gap decides deals or just fills a checklist, and what to do. Calven grounds it in the deals you lost to them and the buyers' quotes, so parity work follows the buyer instead of the competitor's launch calendar.

## Prompts

### Build the parity map against one competitor

```
Using Calven MCP, build the parity map against the competitor below for our product.

FILL IN
- Competitor: [competitor]
- Product: [product]

CONTEXT
Sales keeps asking for capabilities the competitor has. I need to know where they are actually ahead, and whether buyers chose them for it.

PULL FROM THE UNIVERSE
- The competitor's dossier: the product and feature comparison sections.
- The deal drivers on deals we lost to the competitor, grouped by capability, with whether each decided the deal.
- The head-to-head survey results against the competitor.

BUILD
- A table: capability, their position (ahead, equal, behind) per the dossier, deals lost where buyers named it, decisive or not, the evidence quote.
- A second list: capabilities they are ahead on that no lost deal mentions.

OUTPUT
The parity map, with the dossier's freshness date and the win/loss sample size.

GROUNDING
Use only the dossier, drivers and surveys in the Universe and cite them. If the feature comparison does not cover a capability, say "not compared" instead of guessing. Do not infer their product from their marketing.
```

### Hear what buyers say about one capability

```
Using Calven MCP, tell me what buyers say about the capability below when comparing us with the competitor.

FILL IN
- Capability: [capability]
- Competitor: [competitor]

CONTEXT
The competitor is ahead on the capability per the dossier. Before I decide to match it I want the buyer's own words, from deals and calls.

PULL FROM THE UNIVERSE
- Customer quotes that mention the competitor and the capability.
- Win/loss verbatims about the capability on deals against the competitor.
- The deal drivers that name it: direction, rank, outcome.

BUILD
- Five verbatim quotes, each with role, outcome and whether it decided the deal.
- A one-line read: does it decide deals, tip them, or appear in checklists.

OUTPUT
The quotes and the read.

GROUNDING
Use only quotes recorded in the Universe. If fewer than five exist, give what exists and say so. Do not paraphrase a quote into a stronger claim.
```

### Test whether matching would erode your wins

```
Using Calven MCP, check whether matching the competitor on the capability below would erode where we win.

FILL IN
- Competitor: [competitor]
- Capability: [capability]

CONTEXT
I am leaning towards building the capability to match the competitor. I want to know whether they are still investing there and whether chasing it moves us off the reasons we win.

PULL FROM THE UNIVERSE
- Recent signals from the competitor about the capability: launches, pricing, messaging, with dates.
- The battlecard: how we win, where we lose, the landmines.
- Our positioning: unique attributes and value themes.

CHECK
- Whether the capability sits on their side of the "where we lose" line or ours.
- Whether a match conflicts with a unique attribute or a value theme.
- Whether recent signals show them moving the capability faster than we could match.

OUTPUT
A recommendation in one paragraph: match, leapfrog, reposition or ignore, with the evidence.

GROUNDING
Use only signals, the battlecard and the positioning in the Universe and cite them. Do not predict their roadmap beyond the recorded signals.
```

### Write the parity decision memo

```
Using Calven MCP, write the parity decision memo for the competitor below.

FILL IN
- Competitor: [competitor]
- Decisions: [paste the decisions]

CONTEXT
The decisions give my call per capability (match, leapfrog, reposition, ignore). The audience is leadership and sales. They want the evidence behind each call.

PULL FROM THE UNIVERSE
- Per capability: the dossier's assessment, lost deals that named it, decisive share, the strongest quote, the competitor's recent signals.
- The battlecard lines that change if we build it.

WRITE
- A paragraph per capability: their position, what buyers said, what we decided and why.
- A closing list of what sales should say in the meantime, taken from the battlecard's objection handling.

OUTPUT
A two-page memo with sources.

GROUNDING
Ground every claim in the Universe and cite it. Do not state what the competitor will do next. Do not promise dates in the sales lines.
```

### Give sales the interim answer

```
Using Calven MCP, give sales the interim answer on the capability below versus the competitor.

FILL IN
- Capability: [capability]
- Competitor: [competitor]

CONTEXT
We are not matching the capability this quarter. Sales needs an honest answer when a prospect raises it.

PULL FROM THE UNIVERSE
- The battlecard objection handling and landmines for the competitor.
- The product brief: what we do in this area, and the known weaknesses section.
- The deals we won against the competitor despite the gap, and what won them.

WRITE
- A three-line answer a rep can say, without claiming the capability.
- The question to ask next, from the landmines.
- One proof point from a won deal.

OUTPUT
The talk track block, ready for the battlecard.

GROUNDING
Use only wording the product brief supports. Do not claim the capability or a date. Cite the won deal.
```

## Ad hoc questions

- Where is [competitor] ahead of us according to their dossier?
- Which of those capabilities came up in deals we lost to them?
- Did any buyer say they chose [competitor] for [capability]?
- What has [competitor] launched in the last 90 days?
- What is our win rate against [competitor] this year, and the top loss reasons?
- Which capabilities do we lead on that buyers name when we win against [competitor]?
- Are there capabilities two or more competitors have that we do not?
- How does [competitor] price [capability]? Is it in their dossier?
- What do we tell prospects about [capability] today? Is that in the battlecard?
- Which Tier 1 competitor did we lose the most deals to this quarter?
- Which parity requests from sales have no deal evidence at all?

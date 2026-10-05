# Where to match rivals, and where not to

**Team:** Product management · also product marketing, leadership
**Impact:** High. Parity requests arrive as "they have it, we need it". The right question is whether buyers chose them for it. Calven answers with the dossier, the feature comparison and the deals.
**Prerequisites:** competitors tracked (dossiers with feature comparison, battlecards, signals), win/loss surveys running (deal drivers by competitor, head-to-head survey section). CRM connected adds competitor win rates by deal.

## What the team is trying to do

Decide which competitor capabilities to match, which to leapfrog and which to ignore. Done means a parity map per Tier 1 competitor: the capabilities where they are ahead, whether buyers care (from the deals we lost to them and the quotes), whether the gap decides deals or appears in a checklist, and the recommendation. Without the evidence, parity work follows the competitor's launch calendar instead of the buyer.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | List the deltas | Where each Tier 1 competitor is ahead, behind or equal | The feature comparison and product sections of each dossier | Competitor deep dive |
| 2 | Weigh each delta | Find whether the capability shows up as a reason we lost to them | Deal drivers against that competitor, the head-to-head survey section, loss reasons on deals lost to them | Deal drivers, win/loss dashboard (head-to-head), CRM deals |
| 3 | Hear the buyer | Read what buyers said about the capability, ours and theirs | Quotes with competitor mentions; survey verbatims | Quotes, win/loss verbatims |
| 4 | Check momentum | See whether the competitor is investing there | Recent competitive signals by type and severity | Competitive signals |
| 5 | Check where we win | Make sure parity work does not erode the reason we win | Battlecard "how we win", positioning unique attributes | Battlecard, positioning |
| 6 | Decide | Match, leapfrog, reposition or ignore, per delta | The parity map with evidence | All of the above |
| 7 | Brief the field | Tell sales how to handle the delta until the decision ships | Objection handling from the battlecard; the product brief's known weaknesses | Battlecard, product brief |

## Recommended prompts

### Step 1 and 2: the parity map

```
Using Calven MCP, build the parity map against [competitor] for [product].

CONTEXT
Sales keeps asking for capabilities [competitor] has. I need to know where they are actually ahead, and whether buyers chose them for it.

PULL FROM THE UNIVERSE
- [competitor]'s dossier: the product and feature comparison sections.
- The deal drivers on deals we lost to [competitor], grouped by capability, with whether each decided the deal.
- The head-to-head survey results against [competitor].

BUILD
- A table: capability, their position (ahead, equal, behind) per the dossier, deals lost where buyers named it, decisive or not, the evidence quote.
- A second list: capabilities they are ahead on that no lost deal mentions.

OUTPUT
The parity map, with the dossier's freshness date and the win/loss sample size.

GROUNDING
Use only the dossier, drivers and surveys in the Universe and cite them. If the feature comparison does not cover a capability, say "not compared" instead of guessing. Do not infer their product from their marketing.

[name the competitor and the product]
```

### Step 3: the buyer's words on one delta

```
Using Calven MCP, tell me what buyers say about [capability] when comparing us with [competitor].

CONTEXT
[competitor] is ahead on [capability] per the dossier. Before I decide to match it I want the buyer's own words, from deals and calls.

PULL FROM THE UNIVERSE
- Customer quotes that mention [competitor] and [capability].
- Win/loss verbatims about [capability] on deals against [competitor].
- The deal drivers that name it: direction, rank, outcome.

BUILD
- Five verbatim quotes, each with role, outcome and whether it decided the deal.
- A one-line read: does it decide deals, tip them, or appear in checklists.

OUTPUT
The quotes and the read.

GROUNDING
Use only quotes recorded in the Universe. If fewer than five exist, give what exists and say so. Do not paraphrase a quote into a stronger claim.

[name the capability and the competitor]
```

### Step 4 and 5: momentum and where we win

```
Using Calven MCP, check whether matching [competitor] on [capability] would erode where we win.

CONTEXT
I am leaning towards building [capability] to match [competitor]. I want to know whether they are still investing there and whether chasing it moves us off the reasons we win.

PULL FROM THE UNIVERSE
- Recent signals from [competitor] about [capability]: launches, pricing, messaging, with dates.
- The battlecard: how we win, where we lose, the landmines.
- Our positioning: unique attributes and value themes.

CHECK
- Whether [capability] sits on their side of the "where we lose" line or ours.
- Whether a match conflicts with a unique attribute or a value theme.
- Whether recent signals show them moving the capability faster than we could match.

OUTPUT
A recommendation in one paragraph: match, leapfrog, reposition or ignore, with the evidence.

GROUNDING
Use only signals, the battlecard and the positioning in the Universe and cite them. Do not predict their roadmap beyond the recorded signals.

[name the competitor and the capability]
```

### Step 6: the decision memo

```
Using Calven MCP, write the parity decision memo for [competitor].

CONTEXT
Below is my decision per capability (match, leapfrog, reposition, ignore). The audience is leadership and sales. They want the evidence behind each call.

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

[paste the decisions]
```

### Step 7: the interim talk track

```
Using Calven MCP, give sales the interim answer on [capability] versus [competitor].

CONTEXT
We are not matching [capability] this quarter. Sales needs an honest answer when a prospect raises it.

PULL FROM THE UNIVERSE
- The battlecard objection handling and landmines for [competitor].
- The product brief: what we do in this area, and the known weaknesses section.
- The deals we won against [competitor] despite the gap, and what won them.

WRITE
- A three-line answer a rep can say, without claiming the capability.
- The question to ask next, from the landmines.
- One proof point from a won deal.

OUTPUT
The talk track block, ready for the battlecard.

GROUNDING
Use only wording the product brief supports. Do not claim the capability or a date. Cite the won deal.

[name the capability and the competitor]
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

## Good practice

- Start from the dossier's feature comparison, not from a rep's list. Then check every delta against lost deals.
- Ask for "decided the deal" and "mentioned" separately. A checklist item is not a loss reason.
- Ask what won the deals you did win against them. Parity decisions that erode that are expensive.
- Check dossier freshness. The dossier's Sources & Freshness section says when it was last confirmed.
- Treat signals as recorded facts, not a roadmap. The Universe holds what the agent found, nothing predictive.
- Keep the interim talk track honest. The product brief's known weaknesses exist so sales does not overclaim.

## Not covered today

- Their product today, live. The dossier is what the competitive intelligence agent recorded; it is not a browse of their site from the AI tool.
- Effort to match. Engineering owns that.
- Editing the battlecard. The decision is written back in Calven by the competitive intelligence agent and approved by PMM.

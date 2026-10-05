# Competitive teardowns

**Team:** Product marketing · also product management, sales leadership, leadership
**Impact:** High. A teardown sets the battlecard, the roadmap conversation and the board's competitive slide for a quarter; one built from the dossier, the signals and every deal against that rival replaces weeks of reading.
**Prerequisites:** competitors tracked (rows, signals, deep dives, battlecards). Better with win/loss surveys running and CRM connected (deals against the rival), transcripts ingested (competitor mentions).

## What the team is trying to do

Understand one competitor completely: who they are, what they sell and charge, how they position, what moved recently, where they beat us and where we beat them, and what that means for the story, the product and the field. Done means a teardown document, an updated competitive position for the board, and a list of battlecard and roadmap changes. Without a current dossier and the deal record the teardown is a tour of the rival's website.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the competitor and the question | Which rival, and what decision the teardown feeds | Which competitors cost the most deals, tier and state | Competitive intelligence dashboard, competitors |
| 2 | Read the dossier | Company, product, pricing, positioning, strengths, weaknesses | The deep dive, section by section | Competitor deep dive |
| 3 | Read what moved | Launches, pricing changes, hires, messaging shifts | Signals with dates, severity and so-what | Competitive signals |
| 4 | Read the deal record | Win rate against them, why we lose, why we win | Competitor win rate, loss reasons, deals against them, deal drivers | Competitive intelligence, `get_insight_detail` competitor deals, deal_drivers |
| 5 | Read what buyers say | How customers describe them | Competitor mentions in quotes, head-to-head survey answers | Quotes (Competitor mention), win/loss head-to-head |
| 6 | Compare the products | Feature by feature, honest | Feature comparison in the dossier, our product brief | Deep dive, product brief |
| 7 | Compare pricing | Their packaging vs ours, buyer price verdicts | Pricing and packaging sections, pricing deals, price feedback | Deep dive, product brief, `get_insight_detail` pricing deals |
| 8 | Judge the battlecard | Does it still hold | Battlecard vs the above | Battlecard |
| 9 | Write the teardown | Narrative, implications, changes | Drafted from the above | |
| 10 | Update the battlecard, brief product and the board | Changes land in Calven and the roadmap | Calven does not help here from the AI tool | |

## Recommended prompts

### Step 1: which competitor

```
Using Calven MCP, tell me which competitor deserves the next teardown.

CONTEXT
I can do one deep teardown this quarter. I want the rival that is costing us most or moving fastest.

PULL FROM THE UNIVERSE
- Competitive performance: deals, win rate and change per competitor for [window].
- Competitive signals in [window], by competitor, with severity.
- Which competitors have a battlecard and a deep dive, and how fresh each is.

BUILD
A table: competitor, tier, deals, win rate and change, loss reason we hit most, signals this period, freshness of our documents. Then your pick and why.

OUTPUT
The table and a three-line recommendation.

GROUNDING
Rates from the dashboard with n. Mark competitors below the floor. Freshness from the document dates.

[name the window]
```

### Step 2 to 5: the full read

```
Using Calven MCP, build a teardown of [competitor].

CONTEXT
The audience is the PMM, product and sales leadership. The output feeds the battlecard, the roadmap conversation and the board's competitive slide.

PULL FROM THE UNIVERSE
- The deep dive for [competitor]: company, product, pricing, positioning, strengths, weaknesses, feature comparison.
- Their signals in [window], newest first.
- Our win rate against them, the loss reasons, and the deals we lost and won against them with the buyer's reason.
- Customer quotes that mention them.

BUILD
- Who they are and what they sell, in one paragraph.
- What moved in [window] and what it means for us.
- Where they beat us: the evidence from deals and quotes.
- Where we beat them: the evidence from deals and quotes.
- The three implications: for the story, for the product, for the field.

OUTPUT
A teardown document with sources per section; slides if I say deck.

GROUNDING
Ground every point in the Universe and cite the source and date. Do not invent moves, features or prices. Where the dossier is thin, say so.

[name the competitor and the window]
```

### Step 6 and 7: product and pricing comparison

```
Using Calven MCP, compare us to [competitor] on product and pricing.

CONTEXT
Product and finance want an honest side by side.

PULL FROM THE UNIVERSE
- The feature comparison and the product section of the [competitor] deep dive.
- Our product brief: capabilities, integrations, pricing and packaging.
- Their pricing and packaging section, and the deals where buyers compared price, with the verdict.

COMPARE
- A capability table: ours, theirs, who is ahead, whether buyers care (from deal drivers and quotes).
- A packaging table: tiers, what is included, list price where known.
- Where buyers found us pricier, on par or cheaper, with n.

OUTPUT
Two tables and five lines on what matters.

GROUNDING
Mark a cell "Unknown" when the dossier does not say. Price verdicts from the dashboard only, with n.

[name the competitor]
```

### Step 8: judge the battlecard

```
Using Calven MCP, check the [competitor] battlecard against the teardown.

CONTEXT
The teardown is below. I want to know what in the battlecard is now wrong, missing or stale.

PULL FROM THE UNIVERSE
- The battlecard for [competitor].

CHECK
- Each "how we win", "where we lose", landmine and objection entry: still true, now wrong, or missing evidence.
- Loss reasons from the teardown the battlecard does not address.
- Signals the battlecard predates.

OUTPUT
A change list for the battlecard: keep, change (with the new wording), add, remove.

GROUNDING
Judge only against the teardown and the Universe. Cite the evidence for each change.

[paste the teardown]
```

### Step 9: board slide

```
Using Calven MCP, write the competitive slide on [competitor] for the board.

CONTEXT
One slide, read in 90 seconds. The teardown is below.

BUILD
- Where we stand: win rate against them and change, with n.
- What they did this quarter, two lines.
- Where we win and where we lose, two lines each.
- What we are doing about it, three lines.

OUTPUT
The slide text and a speaker note.

GROUNDING
Numbers from the dashboard only. Nothing that is not in the teardown.

[paste the teardown]
```

## Ad hoc questions

- What did [competitor] do in the last 90 days?
- What is our win rate against [competitor], and how did it move?
- Why do we lose to [competitor]? Quote the buyers.
- Why do we win against [competitor]?
- What does [competitor] charge, and how do buyers compare it to ours?
- Which of our customers mentioned [competitor] on calls, and what did they say?
- Where is [competitor] ahead of us on features, and do buyers care?
- Which deals are we fighting [competitor] in right now?
- Which competitor has the most signals this quarter?
- Is the [competitor] battlecard current? When was it updated?
- What traps does the dossier suggest for [competitor]?
- Which competitors have no battlecard yet?
- Which of their claims does the dossier flag as unsupported?
- Which analyst reports mention [competitor]?

## Good practice

- One competitor per teardown. A landscape read is the market briefing, not a teardown.
- Read the deal record before the dossier. The deals tell you which sections to care about.
- Ask for "unknown" cells rather than guesses. A thin dossier is a research task for the competitive intelligence agent.
- Keep "where they beat us" honest. It is the part product and sales actually need.
- Finish with the battlecard change list. The teardown is only useful once the field has the result.

## Not covered today

- Researching the competitor on the web. That is the competitive intelligence agent in Calven; the teardown reads what it stored.
- Editing the battlecard or the dossier. Changes go through the agent and the PMM's approval in Calven.
- Roadmap decisions and the board meeting.
- Hands-on evaluation: trialling the competitor's product and reading their documentation. The dossier records what the agent found; the walkthrough is the team's.

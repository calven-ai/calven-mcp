# Partner battlecards

**Team:** Partnerships · also product marketing, sales enablement
**Impact:** High. Partner reps meet the same competitors as the company's own reps but with less context and no one to ask. A partner battlecard built for the conversations partners actually have, from the company's win/loss evidence, is the difference between a partner who defends the deal and one who folds.
**Prerequisites:** competitors tracked (battlecards, deep dives), win/loss surveys running (why we win and lose against each, in the buyer's words). Better with CRM connected (win rates by competitor).

## What the team is trying to do

Give partner reps a short, current, partner-safe version of the competitive position for each competitor they will meet: how we win, the traps to set, the objections and the answers, and proof. Done means a partner rep can find the right card in a minute and trust it. The internal battlecard has content a partner must not see ("where we lose", internal pricing notes) and detail a partner will not read, so it cannot be forwarded as is.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the competitors | Which ones partners meet in their segment | Competitors by tier; competitor win rates and which show up in deals in the partner's segment | Competitors, competitive intelligence dashboard, CRM deals |
| 2 | Read the internal card | How we win, where we lose, landmines, objections | The approved battlecard | Competitor battlecard |
| 3 | Decide what a partner sees | Partner-safe content only | The sections to keep (how we win, landmines, objection handling, talk track, proof) and drop (where we lose, internal notes) | Competitor battlecard |
| 4 | Add proof | Wins against this competitor, in the buyer's words | Deal drivers and quotes from deals won against the competitor | Deal drivers, quotes |
| 5 | Write the partner card | One page, scannable | A draft in the partner-card structure | Battlecard, deal drivers |
| 6 | Add recent moves | What the competitor did lately that a customer may raise | Competitive signals, newest first | Competitive signals |
| 7 | Review and publish | Check, load to the portal | Calven does not help here (portal) | |
| 8 | Refresh | Update when the competitor moves | High-severity signals as the trigger; the battlecard version date | Competitive signals, battlecard |

## Recommended prompts

### Step 1: which competitors a partner needs

```
Using Calven MCP, tell me which competitors [partner] will meet selling into [segment] and how we do against each.

CONTEXT
I am deciding which partner battlecards to build first.

PULL FROM THE UNIVERSE
- The competitors we track, with tier.
- The competitive performance read: win rate per competitor, fight or avoid, top loss reasons, over the last four quarters.
- Deals in [segment] and which competitors appear on them.

BUILD
- A ranked table: competitor, tier, how often they appear in [segment] deals, our win rate against them (with n), the top loss reason, build a card first / later.

OUTPUT
The table with sources and the window.

GROUNDING
Win rates only from the dashboard, with n. If a competitor has too few deals for a rate, say so.

[name the partner and the segment]
```

### Step 2 to 5: the partner battlecard

```
Using Calven MCP, write the partner-safe battlecard for [competitor].

CONTEXT
For a partner rep who meets [competitor] in a deal. One page. Nothing internal: no "where we lose", no pricing floors, no internal notes.

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: at-a-glance, how we win, landmines, objection handling, talk track, proof points.
- Deal drivers from deals we won against [competitor], with the buyer's evidence quote.
- The three most recent competitive signals for [competitor].

WRITE
- Who they are in two lines.
- How we win, in three bullets a partner can say.
- Three landmine questions to ask early.
- "They say / you say" for the four most common objections.
- Two proof points with attribution.
- What changed recently.

OUTPUT
The one-page card with sources, and a separate internal note listing what I removed and why.

GROUNDING
Use only the battlecard, deal drivers and signals in the Universe and cite them. Do not invent competitor weaknesses. If the battlecard is unpublished for this competitor, say so.

[name the competitor]
```

### Step 4: proof against one competitor

```
Using Calven MCP, what did buyers say when they chose us over [competitor]?

CONTEXT
I want the partner card to carry the buyer's words, not ours.

PULL FROM THE UNIVERSE
- Deal drivers from won deals where [competitor] was in play, direction helped, with the evidence quote.
- Survey responses on those deals, for the fuller answer.

BUILD
- The five strongest reasons, each with the quote and how often it recurs.

OUTPUT
The list with sources and n.

GROUNDING
Quote verbatim. Attribute only as workspace settings allow; if names are withheld, use the role.

[name the competitor]
```

### Step 8: refresh trigger

```
Using Calven MCP, did anything change for [competitor] since [date] that the partner card should reflect?

CONTEXT
The partner card was last updated on [date].

PULL FROM THE UNIVERSE
- Competitive signals for [competitor] since [date], with severity and so-what.
- The battlecard's version and updated date.

ANSWER
- The changes that matter for a partner conversation, and whether the battlecard itself was updated since.

OUTPUT
A short list with sources, or "no change".

GROUNDING
Report only recorded signals. Do not add moves from general knowledge.

[name the competitor and the date]
```

## Ad hoc questions

- Which competitors show up most in [segment] deals?
- What is our win rate against [competitor], with the sample?
- Give me the partner-safe "how we win" against [competitor].
- What are the landmines to set against [competitor]?
- What is "they say / you say" for "[competitor] is cheaper"?
- What did [competitor] do in the last 30 days?
- Which proof points can a partner quote against [competitor]?
- What is in the battlecard that a partner must not see?
- Did buyers who chose us over [competitor] mention [capability]?
- Is the [competitor] battlecard current?
- Which Tier 1 competitors have no battlecard yet?

## Good practice

- Build cards by competitor, not by partner. One partner-safe card per competitor serves every partner.
- Keep the internal note of what was removed. When the partner asks "where do you lose", the partner manager answers in person.
- Lead with the landmine questions. Partners set traps better than they argue features.
- Use the buyer's quote as proof and keep it verbatim.
- Refresh on high-severity signals. A card that misses the competitor's pricing change is the one the customer corrects.

## Not covered today

- The competitor's site or pricing right now. The competitive intelligence agent records moves; the AI tool reads them.
- Publishing to the partner portal, usage tracking.
- Partner win/loss data. Partner-sourced deals are only visible if they are in the CRM mirror.
- Editing the internal battlecard. A gap goes to the PMM.

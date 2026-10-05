# Win stories


Reps sell with stories, and the AE's version gets better every time it's told. You get a library of short win stories by persona, segment and competitor (who the buyer was, what they were fixing, what they weighed, why they chose us) that reps can quote on a call. Calven builds them from win/loss interviews, in the buyer's own words.

## Prompts

### Find the wins worth telling

```
Using Calven MCP, find the won deals in the window that make the strongest stories.

FILL IN
- Window: [time window, e.g. last two quarters]

CONTEXT
I want wins with a completed buyer survey where the buyer explains the decision, across our main personas and competitors.

PULL FROM THE UNIVERSE
- Surveyed deals with outcome won and at least one completed response in the window, with competitors in play and the AI summary.
- Deal drivers with direction helped and rank "decided" on those deals, with the evidence quote.

BUILD
- One row per deal: segment, persona of the respondent, competitor beaten, the deciding driver, the strongest quote.
- Mark the five that cover the widest spread of persona and competitor.

OUTPUT
The table and the shortlist.

GROUNDING
Use only surveyed deals and their drivers. Respect withheld fields: if deal names or amounts are restricted, say so and describe the deal by segment.
```

### Write the win story for a deal

```
Using Calven MCP, write the win story for the deal below.

FILL IN
- Deal: [deal]

CONTEXT
Format: situation (who, what they were trying to fix), alternatives (what they weighed), decision (why us, in their words), outcome (what they expect or have seen). Under 250 words, rep-facing. Then three lines a rep can quote on a call.

PULL FROM THE UNIVERSE
- The surveyed deal's summary and the completed responses, including the interview transcript.
- Deal drivers for the deal with direction and rank.
- Customer quotes tied to the deal or account with a highlight.

WRITE
The story in the format with verbatim quotes, then the three quotable lines.

OUTPUT
The story.

GROUNDING
Quote the buyer verbatim and cite the response. Do not add outcomes the buyer did not state. If the deal's name or amount is withheld, write the story without them.
```

### Match a win story to an open deal

```
Using Calven MCP, find the win story that fits the open deal below.

FILL IN
- Open deal: [open deal]

CONTEXT
A rep has a call on the open deal. I want the won deal that most resembles it and the lines to use.

PULL FROM THE UNIVERSE
- The open deal: account industry, size, persona of the primary contact, competitors in play.
- Won surveyed deals with the same competitor, segment or persona, with their deciding drivers and quotes.

BUILD
- The best match and why, then the two quotes to use and the driver they prove.

OUTPUT
A short brief for the rep.

GROUNDING
Match only on recorded attributes. Cite the deal and the response behind each quote.
```

## Ad hoc questions

- Why did we win [deal], in the buyer's words?
- Which wins against [competitor] have a completed buyer interview?
- Give me a quote from a buyer who chose us for time to value.
- What decided our wins in [segment] this year?
- Which win story fits a [persona] evaluating us against [competitor]?
- What did the buyer at [account] say about the alternatives they considered?
- How many won deals have a completed survey this quarter?
- Which deciding driver appears most in our wins?

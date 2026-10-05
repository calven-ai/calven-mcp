# Win stories

**Team:** Sales enablement · also product marketing, customer marketing
**Impact:** Medium. Reps sell with stories, and the stories that work are the ones buyers told in win/loss interviews. Packaging why we won, in the buyer's words, gives every rep the same proof.
**Prerequisites:** win/loss surveys running (surveyed deals, responses, deal drivers). Better with call transcripts ingested (quotes with highlights) and CRM connected (deal context).

## What the team is trying to do

Turn won deals into short, reusable stories: who the buyer was, what they were trying to fix, what they weighed, why they chose us, in their words. Done means a story library by persona, segment and competitor that reps can quote on a call. Without the company's own knowledge the win story is the AE's recollection, which gets better every time it is told.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the wins | Choose deals worth a story | Won deals with completed surveys, by segment, persona and competitor | Surveyed deals, CRM deals |
| 2 | Get the buyer's account | Read the interview | The deal summary, the respondent's answers and transcript, the drivers that decided it | Surveyed deals, survey responses, deal drivers |
| 3 | Write the story | Situation, alternatives, decision, outcome | A draft in the format with verbatim quotes | All of the above |
| 4 | Check what can be said | Respect confidentiality and claims | The deal's security settings decide whether names and amounts appear; claims checked against the brief | Workspace settings (withheld fields), product brief |
| 5 | Publish | Add to the library, brief reps | Calven does not help here | |
| 6 | Match to deals | Give reps the story that fits the deal in front of them | Stories by persona, competitor and segment, matched to an open deal | CRM deals, surveyed deals |

## Recommended prompts

### Step 1 and 2: the wins worth telling

```
Using Calven MCP, find the won deals in [window] that make the strongest stories.

CONTEXT
I want wins with a completed buyer survey where the buyer explains the decision, across our main personas and competitors.

PULL FROM THE UNIVERSE
- Surveyed deals with outcome won and at least one completed response in [window], with competitors in play and the AI summary.
- Deal drivers with direction helped and rank "decided" on those deals, with the evidence quote.

BUILD
- One row per deal: segment, persona of the respondent, competitor beaten, the deciding driver, the strongest quote.
- Mark the five that cover the widest spread of persona and competitor.

OUTPUT
The table and the shortlist.

GROUNDING
Use only surveyed deals and their drivers. Respect withheld fields: if deal names or amounts are restricted, say so and describe the deal by segment.

[name the window]
```

### Step 3: write the story

```
Using Calven MCP, write the win story for [deal].

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

[name the deal]
```

### Step 6: match a story to an open deal

```
Using Calven MCP, find the win story that fits [open deal].

CONTEXT
A rep has a call on [open deal]. I want the won deal that most resembles it and the lines to use.

PULL FROM THE UNIVERSE
- The open deal: account industry, size, persona of the primary contact, competitors in play.
- Won surveyed deals with the same competitor, segment or persona, with their deciding drivers and quotes.

BUILD
- The best match and why, then the two quotes to use and the driver they prove.

OUTPUT
A short brief for the rep.

GROUNDING
Match only on recorded attributes. Cite the deal and the response behind each quote.

[name the open deal]
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

## Good practice

- Start from deals with a completed interview. A win without the buyer's account is an anecdote.
- Keep quotes verbatim and attributed to the response. Polished quotes stop being proof.
- Check withheld fields before writing. A story that names a deal the workspace restricts cannot be shared.
- Tag stories by persona, competitor and segment so the match prompt works.
- Refresh quarterly as new surveys complete; the best story is usually the newest.

## Not covered today

- Customer permission for external use, case studies and public references. See customer marketing.
- Deals without a win/loss survey. The story then rests on the AE's notes, outside Calven.

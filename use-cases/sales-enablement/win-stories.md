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

## Advanced prompts

### Check a win story is a pattern, not a fluke

```
Before reps tell this win story in every deal, check whether its lesson is a pattern across our wins or a one-off. Use Calven MCP for the deal, the drivers across similar deals and the win rates.

FILL IN
- Deal: [deal]
- Lesson the story teaches: [e.g. "we win when the buyer has been burned by a long implementation"]

CONTEXT
A great story spreads fast. If its lesson only held for one buyer, reps will steer twenty deals by it and lose some of them.

FROM CALVEN
- The deal's surveyed-deal summary, the buyer's responses and its deal drivers.
- Deal drivers across all closed deals in the same segment and against the same competitor, won and lost.
- Win rate for the segment and against the competitor from the win/loss and competitive dashboards, with n.

METHOD
- Turn the lesson into a testable condition a deal either meets or doesn't, using drivers and deal fields.
- Count how many other deals meet it, and the win rate when they do versus the baseline.
- Look for counter-examples: lost deals that met the condition. Quote what decided them.
- Rate the lesson: robust (holds across many deals), conditional (holds in one segment or against one rival), or anecdote.
- If conditional, rewrite the lesson with its boundary: when to tell this story and when not to.

OUTPUT
The test result in a short table, the counter-examples, the verdict, and the story's "use when" line for the library.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. With fewer than ten comparable deals, call it unproven rather than true or false.
```

### Make the story survive three retellings

```
Find out what's left of a win story after it's been retold three times, and rebuild it so the true, persuasive part survives. Use Calven MCP for what the buyer actually said and why the deal was won.

FILL IN
- Deal: [deal]
- Current story: [paste the story as written, or write "draft it"]

CONTEXT
Reps don't send the story, they tell it. By the time it reaches a prospect, the numbers have grown, the competitor has changed and the buyer's real reason is gone. I want a version built to survive that.

FROM CALVEN
- The surveyed-deal summary, survey responses and interview transcript for the deal.
- Deal drivers ranked as deciding, with evidence quotes.
- Customer quotes from the account tagged Quantified outcome or Time-to-value.

SIMULATE
- Retelling 1: a rep who read the story once tells it to a colleague from memory, in 100 words.
- Retelling 2: that colleague tells it on a call to a prospect, in 60 words.
- Retelling 3: the prospect tells their boss, in 30 words.
- Keep each retelling realistic: people round numbers up, drop qualifiers, and swap in what they expected to hear.
- Compare each retelling with the record. Mark what survived, what was lost and what got exaggerated into something we can't claim.
- Rebuild the story around what naturally survives: one concrete before, one number, one buyer line, one reason. Test the rebuild with another three retellings.

OUTPUT
The three retellings with drift marked, the rebuilt story (under 120 words), its three retellings, and the one-sentence version reps should memorise.

GROUNDING
The rebuilt story uses only facts and quotes on record, cited. Retellings are simulation; label them, and flag any exaggeration that would become a false claim if a rep said it.
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
- Which won deal had the most competitors in it, and what tipped it?
- Which buyer in a won deal almost chose someone else, and what nearly cost us the deal?
- What do our wins against [competitor] have in common that our losses to them don't?
- Which won deal has a buyer quote with a hard number in it?
- Which segment do we win in but have no story reps can tell?
- What did the economic buyer say in a win where the champion was the [persona]?
- Which win story would land worst with a [persona], and why?

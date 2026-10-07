# Training sessions


You've got a session to run (30 to 60 minutes weekly, a product update monthly, a kickoff module quarterly), and it should teach one thing and leave reps with a line to practise. You get the outline, the teaching content with sources, the exercise and the check. Calven builds it from the current documents and real deals, so reps don't learn a slide that was only true when it was made.

## Prompts

### Pick the next three session topics

```
Using Calven MCP, tell me what the next three enablement sessions should cover.

CONTEXT
I run a weekly 45-minute session. I want the topics the evidence says the team needs.

PULL FROM THE UNIVERSE
- The messaging dashboard for the last quarter: objections raised and covered, pillar pull-through, weak flags.
- The competitive dashboard: win rate per competitor with n, and fight-or-avoid.
- The voice-of-customer read: costly objections and top pains.

BUILD
- Three topics, each with the number behind it (n and window), the deals at stake and the one outcome the session should change.

OUTPUT
The ranked list.

GROUNDING
Numbers from the dashboards only, cited with n and window. If a section has too few rows, say so and pick a topic the data does support.
```

### Build a 45-minute session

```
Using Calven MCP, build a 45-minute session on the topic below.

FILL IN
- Topic: [topic]
- Behaviour: [the behaviour every rep should show by the end]

CONTEXT
Audience: all AEs. Goal: by the end, every rep can show the behaviour. Structure: ten minutes of why, fifteen of what, fifteen of practice, five of check.

PULL FROM THE UNIVERSE
- The approved content for the topic: the messaging section, persona canvas, battlecard or product brief entry it lives in.
- Buyer quotes and rep quotes on the topic from the last two quarters.
- Deal drivers on the topic with direction and the deals they touched.

BUILD
- Why: the stakes, with two buyer quotes and the deal numbers.
- What: the approved content in rep terms, with the source per point.
- Practice: a role-play brief (I play the persona) and three objection drills with the approved lines.
- Check: three questions with the answer and source.

OUTPUT
The session outline with speaker notes.

GROUNDING
Everything cites the Universe. Do not invent quotes, lines or numbers; if the evidence is thin, say so in the notes.
```

### Build the kickoff's what-changed module

```
Using Calven MCP, build the "what changed this quarter" module for the kickoff.

CONTEXT
A 30-minute module for the quarterly kickoff: what moved in positioning, messaging, product, competitors and deals, and what reps do differently next quarter.

PULL FROM THE UNIVERSE
- Strategy documents and battlecards updated in the last quarter, with versions and dates.
- High-severity competitive signals and product changes in the quarter.
- The win/loss dashboard for the quarter against the prior one: win rate, top win and loss drivers, by competitor and segment.

BUILD
- Five slides: what changed in the story, what changed in the product, what changed in the market, what the deals told us, what to do next quarter.
- Speaker notes with sources.

OUTPUT
The module.

GROUNDING
Use recorded changes and dashboard numbers with n and window. Do not present an unchanged document as changed.
```

## Advanced prompts

### Rank topics by the win rate they could move

```
Pick next quarter's training topics by expected impact on win rate, not by who asked loudest. Use Calven MCP for the losses, objections and pillar gaps each topic would address.

FILL IN
- Candidate topics: [paste the list of topics you're considering]
- Sessions available: [how many sessions you can run this quarter]
- Open pipeline: [paste or write "pull it": total open pipeline by segment]

CONTEXT
I get a dozen topic requests a quarter and run six sessions. I want each one to earn its hour of the whole team's time.

FROM CALVEN
- Top loss reasons and deciding deal drivers from the win/loss dashboard, with n.
- Costly objections from the voice-of-customer dashboard, with n.
- Pillar pull-through on rep calls from the messaging dashboard, with n.
- Open CRM deals by segment and stage, if I asked you to pull pipeline.

MODEL
- Map each topic to the losses, objections or pillar gaps it would address. A topic that maps to nothing gets flagged, not scored.
- For each topic, estimate: share of open pipeline where the problem shows up, the win-rate lift if training works (low, expected, high, as your assumption), and the chance training fixes it at all (skills problems yes, product gaps no).
- Expected value = pipeline exposed × lift × chance training fixes it. Rank.
- Run a sensitivity check on the lift range. Which topics stay in the top set whatever the lift?

OUTPUT
A ranked table: topic, evidence it maps to, pipeline exposed, lift range, fixability, expected value. Then the quarter's sessions in order, and the requests to decline with a one-line reason I can send.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Lift estimates are assumptions and must be ranged; never present one as measured.
```

### Turn a lost deal into a case-method class

```
Turn one real lost deal into a case-method session: the class reads the case, makes the calls the rep made, and only then learns what the buyer actually said. Use Calven MCP for the deal, the calls and the buyer's account of why we lost.

FILL IN
- Deal: [deal]
- Session length: [e.g. 45 minutes]

CONTEXT
Reps learn more arguing about a real deal than listening to slides. The buyer's win/loss interview is the reveal no rep has heard.

FROM CALVEN
- The deal from the CRM: account, segment, stages, competitors, amount, loss reason.
- Customer and rep quotes from the calls on the deal, in order.
- The surveyed-deal summary, the buyer's responses and the deal drivers ranked as deciding.
- The battlecard for the competitor we lost to, if any.

BUILD
- Write the case in three parts, each ending at a decision point the rep faced: how to open discovery, how to answer the key objection, how to handle the competitor late. Use the real quotes, anonymise the account.
- At each decision point, three or four discussion questions and two or three options with no right answer marked.
- The reveal: the buyer's own account of what decided it, verbatim.
- A teaching note for the facilitator: timings, the arguments to draw out, the points the evidence supports, and how to close the session in five minutes.

OUTPUT
The case (under 900 words), the discussion questions, the reveal, and the teaching note.

GROUNDING
Every event and quote in the case comes from the record, cited in the teaching note. Mark anything you filled in for flow as fiction, and never write a buyer line they didn't say.
```

## Ad hoc questions

- Which objection should this week's session cover?
- Give me two buyer quotes about [topic] to open the session with.
- What is the approved line for [pillar] and the proof behind it?
- Write a role-play brief where I play [persona] pushing back on price.
- Which competitor should the next competitive session cover, and why?
- What changed in our messaging this quarter?
- Write three check questions on [topic] with answers.
- How did reps handle [objection] on calls last month?
- What did we release this month that needs a product update session?
- Which pillar has the lowest pull-through?
- Which objection did reps handle worse this quarter than last, judging by lost-deal drivers?
- Which pillar do our top-closing reps say on calls that the rest of the team doesn't?
- Which lost deal last quarter would make the best role-play, and why?
- What did we change in the messaging since the last kickoff deck was built?
- Which competitor's win rate dropped most this quarter, with n?
- What's one buyer quote that would make reps uncomfortable in a session, in a useful way?

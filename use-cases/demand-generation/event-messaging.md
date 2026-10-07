# Event messaging


The event's on the calendar and you need everything the team says there: the booth line, the talk abstract, pre-event outreach, the floor conversation, the competitive answers and the follow-up. You walk away with an event messaging kit by persona and a target list for outreach. With Calven the booth says more than the homepage, and the reps don't have to improvise.

## Prompts

### Build the event messaging kit

```
Using Calven MCP, build the messaging kit for the event below.

FILL IN
- Event: [event]
- Personas: [personas most attendees are]
- Talk: [a talk slot / none]
- Competitors: [rivals exhibiting]

CONTEXT
Attendees are mostly the personas above. We have a booth and the talk slot above, if any. The competitors above are exhibiting.

PULL FROM THE UNIVERSE
- The persona canvases for the personas: pains, hooks, objections.
- Our positioning and the messaging hooks and one-liner.
- Themes and trends relevant to this audience, with quotes.
- The battlecards for the competitors.

BUILD
- The booth line and two signage lines, in the attendees' words.
- A talk title and 100-word abstract built on a pain and a trend.
- The 30-second floor pitch per persona, three discovery questions, the three objections and responses.
- The competitive answers: the reply to "we already use them" for each rival on the floor.

OUTPUT
The kit by section, with sources.

GROUNDING
Language from quotes, claims from the brief, competitive lines from the battlecards, cited.
```

### Build the pre-event outreach list

```
Using Calven MCP, build the pre-event outreach for the event below.

FILL IN
- Event: [event]
- Attendees: [paste the attendee or sponsor list]

CONTEXT
The attendee or sponsor list is the one we have.

PULL FROM THE UNIVERSE
- Which of these companies are CRM accounts, with fit tier, triggers and any open or lost deal.
- Contacts we know at them by role.
- The persona messages for the roles we will meet.

BUILD
- The accounts ranked by fit with the reason and the history.
- A meeting-request note per persona, 60 words, opening on their pain.

OUTPUT
The ranked list and the notes.

GROUNDING
Only the CRM mirror and canvases, cited. Names follow the workspace security settings.
```

### Write the post-event follow-ups

```
Using Calven MCP, write the post-event follow-ups for the event below.

FILL IN
- Event: [event]
- Personas: [personas]
- Topics: [the topics that came up]

PULL FROM THE UNIVERSE
- The messaging for the consideration stage for the personas.
- Proof points and quotes on the topics that came up.

WRITE
Three follow-ups: met at the booth, attended the talk, requested a meeting, each with the next step.

GROUNDING
Claims from the brief, quotes verbatim, cited.
```

## Advanced prompts

### Decide whether the event is worth sponsoring

```
Decide whether to sponsor the event, speak only or skip it, with an expected-value decision tree. Use Calven MCP for how many of the right accounts will be there and what a deal with them is worth.

FILL IN
- Event: [event]
- Attendee list: [paste the attendee or sponsor list, or the organiser's audience breakdown]
- Options and costs: [paste sponsorship tiers, talk slot and travel costs]
- Past event results: [paste meetings and pipeline from past events, or write "none"]

CONTEXT
The sponsorship deadline is in two weeks and the package eats a big share of the event budget. I want the expected pipeline for each option, with the odds spelled out, before I sign.

FROM CALVEN
- How many listed companies are CRM accounts, by ICP tier, and how many have an open deal.
- Win rate, average deal size and sales cycle for those tiers from the ICP dashboard, with n.
- Which of our personas this audience covers, from the watering holes in their canvases.

METHOD
- Draw the tree: for each option, branches for meetings booked, opportunities opened and deals won, with probabilities from my history or a labelled assumption, and Calven's win rates and deal sizes.
- Count the open deals the event can move forward, not only new ones.
- Compute expected pipeline, expected revenue and cost per opportunity for each option, and the break-even number of meetings.
- If you can run code, run the tree as a simulation and show the range.

OUTPUT
The decision tree, a three-row comparison, the recommendation, and the break-even meetings target the team commits to if we go.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Count an attendee as an account only when the CRM match is clear; list the rest as unmatched.
```

### Train the booth team with scored role-plays

```
Turn the event into a training simulation: role-play booth conversations with our personas and score the rep. Use Calven MCP for the visitors, their objections and the approved answers.

FILL IN
- Event: [event]
- Personas: [personas expected at the booth]
- Competitor: [competitor also on the floor]
- Rep: [rep, or write "me"]

CONTEXT
Booth staff get a one-pager and about two minutes per visitor. Most conversations die at "we already use something". I want the team to rehearse the hard ones before they fly.

FROM CALVEN
- Each persona's canvas: pains, objections with the response, messaging hooks.
- The competitor's battlecard: objection handling and landmines.
- Discovery questions from the competitor's deep dive, and the persona value propositions from messaging.

SIMULATE
- Play six visitors, one at a time: two curious, two using the competitor, one who's the wrong fit, one senior buyer with ninety seconds. Stay in character and wait for the rep's reply each turn.
- After each conversation, score the rep 1 to 5 on qualifying fast, using the persona's language, handling the objection with the approved response, and getting a next step.
- Quote the rep's weakest line and give the stronger one.
- End with a scorecard across all six and the three lines the team should memorise.

OUTPUT
The role-plays run live in chat, then a scorecard and a half-page cheat sheet for the booth.

GROUNDING
Visitor objections and approved responses come from the canvases and the battlecard, cited. Mark any visitor detail beyond that as invented for the exercise.
```

## Ad hoc questions

- Which personas attend [event type] per our canvases?
- What is our one-liner for a booth banner?
- Which attending companies are Tier 1 accounts?
- How do we answer "we already use [competitor]" on the floor?
- What discovery questions work for [persona]?
- Give me a 30-second pitch for [persona].
- Which trend would make a good talk for [audience]?
- Which of the attendees have an open deal with us?
- Which signals from [competitor] in the last 30 days will come up in booth conversations?
- Which open deals stalled at a stage an in-person meeting could unblock?
- What objection does [persona] raise most, and what's our approved answer?
- Which customer quotes would work on a booth screen for [persona]?
- Which landmine can the booth team set against [competitor] without naming them?
- What trend does our positioning say makes this year different for [segment]?
- Which [persona] contacts at Tier 1 accounts have no open deal?

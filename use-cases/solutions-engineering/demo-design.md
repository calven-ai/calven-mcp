# Demo design


Discovery's done and you're building a demo that shows each persona the outcome they came for, in an order that keeps them, with proof where doubt shows up and one moment the competitor's demo can't match. You walk away with a storyline you build from and the AE narrates, plus a capability map tying each moment to a brief section. Calven supplies the evidence, so half the room isn't waiting for their part. (The AE's side of this is `use-cases/account-executives/demo-storylines.md`; this page is the SE's build view.)

## Prompts

### Design the demo storyline and capability map

```
Using Calven MCP, design the demo for the deal and account below.

FILL IN
- Deal: [deal]
- Account: [account]
- Attendees: [names, titles, persona each]
- Discovery: [pains, current tools, what they asked to see, success criteria]
- Competitor: [competitor]
- Order: [the competitor demos before or after us]
- Questions: [minutes reserved for questions]

CONTEXT
The attendees and discovery findings are as given. The competitor demos in the order given. 45 minutes, with the minutes for questions as given.

PULL FROM THE UNIVERSE
- The persona canvases for the attendees: pains, gains, jobs to be done.
- The product brief: the capabilities, use cases and integrations that answer those pains, with the section for each.
- What buyers said our demos won or lost on.
- The competitor's feature comparison and landmines.
- One proof quote per persona, verbatim.

BUILD
- Per attendee: the pain, the outcome to show, the capability behind it with its brief section.
- The opening: the outcome that matters most to the senior person in the room.
- The order and the cuts, with the reason.
- Proof placement: which quote at which moment.
- The competitive moment and how to set it up without naming the competitor.
- The closing question that moves to the POC.

OUTPUT
A storyline and a capability map (moment, capability, brief section, proof), with sources.

GROUNDING
Capabilities only from the brief, cited. No scripted feature the brief does not list. Quotes verbatim. If a persona has no canvas, say so.
```

### Fact-check your demo narration

```
Using Calven MCP, fact-check my demo narration.

FILL IN
- Narration: [paste the narration]

CONTEXT
The narration is what I say during the demo, moment by moment.

PULL FROM THE UNIVERSE
- The product brief, recent product changes and the claims register.

CHECK
- Each claim: in the brief, stale, overstated, or not in the brief.
- The accurate wording where needed.

OUTPUT
The narration annotated, then the clean version.

GROUNDING
Against the Universe only. Silence in the brief is "not in the brief".
```

### Update the demo after a release

```
Using Calven MCP, what changed in the product since the date below that my demo should reflect?

FILL IN
- Date: [date the demo was last refreshed]
- Segment: [segment]

CONTEXT
My standard demo for the segment was last refreshed on the date.

PULL FROM THE UNIVERSE
- Product changes since the date, with severity and the brief sections they touch.
- Drift findings on published documents from those changes.

BUILD
- Changes to show, changes to stop showing, wording to update.

OUTPUT
A dated list.

GROUNDING
Only recorded changes, cited.
```

### Find what buyers ask to see

```
Using Calven MCP, what do buyers ask to see in demos that our standard demo does not show?

FILL IN
- Segment: [segment]
- Window: [time window, e.g. last two quarters]

CONTEXT
I want to fix the standard demo for the segment.

PULL FROM THE UNIVERSE
- Quotes from evaluation-stage calls in the segment in the window that are requests to see something, by frequency.
- Product feedback tags on lost deals in the segment in the window.
- The product brief, to mark which requests we can show and which we cannot.

BUILD
- Requests we can show but do not; requests we cannot meet, with the honest line to use.

OUTPUT
Two lists with counts and quotes.

GROUNDING
Counts from the Universe only, with window.
```

## Ad hoc questions

- Which capability in the brief answers [pain]?
- What do [persona]s need to see before they believe it?
- What did buyers say our demos lost on?
- What should I show that [competitor] cannot, per the feature comparison?
- Which quote proves [outcome] for a [segment] buyer?
- What changed in the product since my last demo refresh?
- Is "[narration line]" supported by the brief?
- What is the use case in the brief closest to [account]'s situation?
- Which integration do [segment] buyers ask about most?

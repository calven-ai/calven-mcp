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

## Advanced prompts

### Dial-test the demo script per persona

```
Dial-test my demo script the way a research team tests an ad: each persona's interest, minute by minute. Use Calven MCP for the personas and what buyers said they needed to see.

FILL IN
- Demo script: [paste the script with rough timings]
- Audience: [personas attending]
- Segment: [segment]

CONTEXT
I have 30 minutes and a mixed audience. Somewhere in the middle I lose the economic buyer, and I don't know where.

FROM CALVEN
- The persona canvases for the audience: goals, pains, objections.
- Quotes from buyers in the segment about demos and what convinced them, and deal drivers in the Experience category.
- The product brief's capabilities behind each scene.

SIMULATE
- Split the script into scenes. For each persona, score interest from 0 to 10 at each scene, with a one-line reason in their voice.
- Mark the moments where any persona drops below 4: that's where they check their phone.
- Find the scene that lifts the most personas at once, and the one that lifts nobody.
- Reorder and cut so every persona has a peak in the first ten minutes. If you can run code, chart the curves before and after.

OUTPUT
The dial table (scene by persona), the before and after running order, and the scene to cut.

GROUNDING
Persona scores are simulated from canvases and quotes and labelled so. Every capability in the script must be in the brief. Don't invent a reaction the evidence doesn't support.
```

### Red-team the demo as their SE

```
Red-team my demo as the competitor's sales engineer, who'll get the buyer on a call the day after. Use Calven MCP for the competitor's playbook and where we're weak.

FILL IN
- Demo script: [paste the script]
- Competitor: [competitor]

CONTEXT
Whatever I show, they'll counter. I'd rather hear their counter while I can still change the demo.

FROM CALVEN
- The competitor's battlecard and dossier: landmines, talk track, bullshit detector, feature comparison.
- The product brief's known weaknesses.
- Deal drivers from deals we lost to them, with the evidence quotes.

RED-TEAM
- Watch the demo as their SE. For every scene, write what you'd say to the buyer tomorrow: the question you'd plant, the gap you'd point at, the claim you'd challenge.
- Rate each counter by how much it would hurt, using the drivers from deals we lost to them.
- For the top three counters, rewrite the scene to defuse them first: show the edge case, name the limit ourselves, or set a landmine of our own from the battlecard.

OUTPUT
A scene-by-scene table (their counter, damage, our fix), the three rewritten scenes, and one question for the buyer that makes their counter backfire.

GROUNDING
Every counter cites the battlecard, dossier or a lost-deal driver, or is labelled as your extrapolation. Don't invent a competitor capability the dossier doesn't record.
```

### Build a branching demo path

```
Build a branching demo plan I can use live: the first three answers from the room pick the path. Use Calven MCP for the personas, the use cases and the capability behind each branch.

FILL IN
- Segment: [segment]
- Demo environments: [paste what you can show: scenes and their length]

CONTEXT
I run the same demo for a data team and a marketing team. Half of it lands with each. I want a demo that adapts in the first five minutes without me improvising.

FROM CALVEN
- The personas likely in the room, with their goals and jobs to be done.
- The product brief's use cases and the capabilities behind each.
- The questions buyers in the segment ask most on calls, from quotes tagged Job to be done or Objection.

BUILD
- Write three opening questions whose answers sort the room: who's leading, what pain is sharpest, what they use at the moment.
- Build a decision tree: each combination of answers leads to an ordered set of scenes from my list, sized to 30 minutes.
- Each leaf gets the scene order, the proof quote to use, and the one question to close on.
- If you can run code, build it as a single HTML file with buttons for each answer that reveals the path; otherwise give it as a nested list.

OUTPUT
The opening questions, the tree, and the leaf for the most common combination written out in full.

GROUNDING
Every scene's claim maps to a capability in the brief, and every proof quote is cited. Don't invent a use case the brief doesn't list.
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
- Which capability do we show in demos that buyers never mention afterwards?
- What did buyers who said no after the demo say was missing?
- Which persona joins the demo late and asks the hardest question?
- What would [competitor]'s SE say about our [capability] scene?
- Which customer quote about [outcome] comes from a buyer in [segment]?
- Which demo claim would an economic buyer ask us to prove with a customer?

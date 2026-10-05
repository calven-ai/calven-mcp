# Demo design

**Team:** Solutions engineering · also account executives, product marketing
**Impact:** High. The demo is the SE's main deliverable and the point where a buying group decides whether the product is for them.
**Prerequisites:** personas approved, product brief approved. Better with call transcripts ingested (what buyers asked to see, what demos won on), competitors tracked (feature comparison, landmines), win/loss surveys running.

## What the team is trying to do

Turn discovery into a demo that shows the outcome each persona came for, in the order that keeps them, with proof placed where doubt appears and one moment the competitor's demo cannot match. Done means a storyline the SE builds from and the AE narrates to, plus the capability map that says which brief sections each moment relies on. Without the company's own evidence the demo is the standard path and half the room waits for their part. (The AE's side of this is `use-cases/account-executives/demo-storylines.md`; this page is the SE's build view.)

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Audience and pains | Who attends, what each came for | Persona canvases; discovery notes from the AE and SE | Persona canvas |
| 2 | Capability map | Which capability answers which pain, what the brief says it does | Product brief capabilities, use cases, integrations | Product brief |
| 3 | The "last thing first" | The outcome to open with per persona | Persona gains and jobs; quotes on outcomes | Persona canvas, quotes |
| 4 | Order and cuts | What to show, what to skip, where the room loses interest | Persona priorities; what demos won and lost on | Persona canvas, deal drivers, quotes |
| 5 | Proof placement | The customer evidence at each doubt | Quotes by highlight (time-to-value, quantified outcome, ease of use) | Quotes |
| 6 | Competitive moment | What to show that the rival cannot | Feature comparison and landmines | Deep dive, battlecard |
| 7 | Build | Environment, data, click path, timing | Calven does not help here | |
| 8 | Fact-check the script | Every claim in the narration | Product brief, claims, product changes | Product brief, claims, drift findings |
| 9 | Refresh after releases | What changed that the demo should show or stop showing | Product changes since the last refresh | Product changes |

## Recommended prompts

### Step 1 to 6: the storyline and capability map

```
Using Calven MCP, design the demo for [deal] at [account].

CONTEXT
Attendees: [names, titles, persona each]. Discovery findings: [pains, current tools, what they asked to see, success criteria]. [Competitor] demos [before or after] us. 45 minutes, [n] minutes for questions.

PULL FROM THE UNIVERSE
- The persona canvases for the attendees: pains, gains, jobs to be done.
- The product brief: the capabilities, use cases and integrations that answer those pains, with the section for each.
- What buyers said our demos won or lost on.
- The [competitor] feature comparison and landmines.
- One proof quote per persona, verbatim.

BUILD
- Per attendee: the pain, the outcome to show, the capability behind it with its brief section.
- The opening: the outcome that matters most to the senior person in the room.
- The order and the cuts, with the reason.
- Proof placement: which quote at which moment.
- The competitive moment and how to set it up without naming [competitor].
- The closing question that moves to the POC.

OUTPUT
A storyline and a capability map (moment, capability, brief section, proof), with sources.

GROUNDING
Capabilities only from the brief, cited. No scripted feature the brief does not list. Quotes verbatim. If a persona has no canvas, say so.

[paste the attendees and discovery findings; name the deal and competitor]
```

### Step 8: fact-check the demo script

```
Using Calven MCP, fact-check my demo narration.

CONTEXT
Below is what I say during the demo, moment by moment.

PULL FROM THE UNIVERSE
- The product brief, recent product changes and the claims register.

CHECK
- Each claim: in the brief, stale, overstated, or not in the brief.
- The accurate wording where needed.

OUTPUT
The narration annotated, then the clean version.

GROUNDING
Against the Universe only. Silence in the brief is "not in the brief".

[paste the narration]
```

### Step 9: refresh after a release

```
Using Calven MCP, what changed in the product since [date] that my demo should reflect?

CONTEXT
My standard demo for [segment] was last refreshed on [date].

PULL FROM THE UNIVERSE
- Product changes since [date], with severity and the brief sections they touch.
- Drift findings on published documents from those changes.

BUILD
- Changes to show, changes to stop showing, wording to update.

OUTPUT
A dated list.

GROUNDING
Only recorded changes, cited.

[name the date and segment]
```

### Gap mode: what buyers ask to see that the demo lacks

```
Using Calven MCP, what do buyers ask to see in demos that our standard demo does not show?

CONTEXT
I want to fix the standard demo for [segment].

PULL FROM THE UNIVERSE
- Quotes from evaluation-stage calls in [segment] that are requests to see something, by frequency.
- Product feedback tags on lost deals in [segment].
- The product brief, to mark which requests we can show and which we cannot.

BUILD
- Requests we can show but do not; requests we cannot meet, with the honest line to use.

OUTPUT
Two lists with counts and quotes.

GROUNDING
Counts from the Universe only, with window.

[name the segment and window]
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

## Good practice

- Build from discovery, not from the standard path. Paste the findings.
- Map every moment to a brief section. The map is also your fact-check.
- Put proof where doubt appears, not at the end.
- Refresh after each release using the product changes list.
- Run the gap prompt quarterly on the standard demo.

## Not covered today

- Demo environments, data, click paths and recording.
- Interactive demo tooling and analytics on demo engagement.
- Features not in the brief, in either direction. The AI tool should not speculate on what is or is not available beyond the brief.

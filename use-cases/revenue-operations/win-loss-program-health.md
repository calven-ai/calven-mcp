# Win/loss program health

**Team:** Revenue operations · also product marketing, sales leadership
**Impact:** Medium. Every loss readout and win rate is only as good as the program's coverage. Calven measures the program itself: how many decided deals got a survey, how many buyers answered, by which channel, how long it took, and which segments are under-covered. That is the number that says how much the win/loss analysis can be trusted.
**Prerequisites:** win/loss surveys running. Better with CRM connected (segment coverage).

## What the team is trying to do

Keep the win/loss program covering enough deals, across segments, with enough completed responses to support the analysis, and fix the leaks: bounced emails, unanswered reminders, abandoned interviews. Done means a monthly program read with coverage, funnel, channel mix and the segments to enrol more of. The enrolment and the sends happen in Calven's win/loss agent. Without the measurement, the program's coverage is assumed.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Measure coverage | Share of decided deals enrolled and analysed | Enrolment coverage, deals enrolled and analysed, coverage over time | Program health (scoreboard, enrollment coverage) |
| 2 | Measure the funnel | From sent to completed | Emails sent, bounce rate, response funnel, reminders, completion rate | Program health (email delivery, response funnel) |
| 3 | Measure the channel | AI interview versus online survey | Pick rate, satisfaction, median length, abandonment | Program health (AI interviews, respondent experience, timing) |
| 4 | Find under-covered segments | Where the analysis is thin | Coverage by segment with completion rates | Program health (segment coverage) |
| 5 | Decide the fixes | Enrol more, change timing, fix bounces | Calven does not decide; the agent manager acts in Calven | |
| 6 | Report | The program read for the quarter | The read with n | All of the above |

## Recommended prompts

### Step 1 to 4: the program read

```
Using Calven MCP, give me the win/loss program health read for [window].

CONTEXT
Monthly program review. I want coverage, the response funnel, the channel split and the segments we under-cover, each with the prior period.

PULL FROM THE UNIVERSE
- The win/loss program health dashboard for [window]: program scoreboard, volume and status, email delivery, response funnel, AI interviews, respondent experience, enrolment coverage, coverage by segment, timing. Every rate with n and the prior period.

BUILD
- Coverage: decided deals, enrolled, analysed, the share, versus the prior period.
- Funnel: sent, bounced, opened or started, completed, with the biggest drop.
- Channel: AI interview pick rate, satisfaction, median length, abandonment, versus the online survey.
- Segments: coverage and completion by segment, the two worst.
- Three fixes the numbers point to.

OUTPUT
The read on one page.

GROUNDING
Numbers from the program health dashboard with n and window. Report "cannot compare" with its reason. Do not count rows yourself.

[name the window]
```

### Gap mode: which decided deals have no survey

```
Using Calven MCP, list the decided deals in [window] without a completed win/loss response.

CONTEXT
I want the deals the analysis is missing, by segment and competitor, so the agent manager can enrol them.

PULL FROM THE UNIVERSE
- Decided deals in [window] with their win/loss enrolment and survey result.
- Surveyed deals with zero completed responses.

BUILD
- Not enrolled, enrolled with no response, by segment and competitor, with amount where allowed.

OUTPUT
The two lists.

GROUNDING
Use mirrored deals and surveyed deals. Respect withheld fields.

[name the window]
```

### Review mode: is the win/loss analysis trustworthy enough for this readout

```
Using Calven MCP, tell me how much to trust the win/loss numbers in the readout below.

CONTEXT
Below is the win/loss readout going to leadership: win rates, loss reasons and competitor cuts. Before it goes out I want each number checked against the program's coverage, so nothing rests on a handful of responses.

PULL FROM THE UNIVERSE
- The win/loss program health dashboard for the readout's window: coverage, completion rate, coverage by segment, channel mix.
- The win/loss dashboard for the same window: each rate with its n, and the segments reported below the floor.

CHECK
- For each number in the readout: the n behind it, the coverage of the segment it comes from, and a verdict (solid, thin, do not present).
- Segments the readout cuts that the program barely covers.
- Where a competitor cut rests on fewer responses than the floor.

OUTPUT
The readout annotated with a verdict per number, then the two lines to add about coverage.

GROUNDING
Use only the two dashboards for the same window, with n. A number with no n in the Universe is "unverified", never confirmed.

[paste the readout and name the window]
```

## Ad hoc questions

- What share of decided deals had a completed survey this quarter?
- What is the survey completion rate, and how did it change?
- What is the bounce rate on survey emails?
- How many buyers picked the AI interview over the online survey?
- What is the median AI interview length?
- Which segment has the lowest survey coverage?
- How many deals are enrolled but unanswered?
- Which lost deals above [amount] have no buyer response?
- How satisfied were respondents with the interview?

## Good practice

- Put coverage on the first slide of every win/loss readout. It tells the audience how much to trust the rest.
- Watch the funnel's biggest drop, not the whole funnel. One fix at a time.
- Compare channels on completion and satisfaction, not on preference.
- Send the unenrolled list to the agent manager monthly; enrolment is the lever.
- Track segment coverage against the segment win-rate pack so thin cells are explained.

## Not covered today

- Enrolling deals, sending or resending surveys, changing timing or templates. That is the win/loss agent and its manager in Calven.
- Fixing bounced email addresses in the CRM.

# Win/loss program health


Your win/loss analysis is only as good as the program behind it, and coverage usually gets assumed. Each month you get a read on coverage, the funnel, channel mix, the leaks (bounced emails, unanswered reminders, abandoned interviews) and the segments to enrol more of. Enrolment and sends happen in Calven's win/loss agent; this is how you measure it.

## Prompts

### Read the win/loss program's health

```
Using Calven MCP, give me the win/loss program health read for the window below.

FILL IN
- Window: [time window, e.g. last month]

CONTEXT
Monthly program review. I want coverage, the response funnel, the channel split and the segments we under-cover, each with the prior period.

PULL FROM THE UNIVERSE
- The win/loss program health dashboard for the window: program scoreboard, volume and status, email delivery, response funnel, AI interviews, respondent experience, enrolment coverage, coverage by segment, timing. Every rate with n and the prior period.

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
```

### List decided deals with no survey

```
Using Calven MCP, list the decided deals in the window below without a completed win/loss response.

FILL IN
- Window: [time window, e.g. last month]

CONTEXT
I want the deals the analysis is missing, by segment and competitor, so the agent manager can enrol them.

PULL FROM THE UNIVERSE
- Decided deals in the window with their win/loss enrolment and survey result.
- Surveyed deals with zero completed responses.

BUILD
- Not enrolled, enrolled with no response, by segment and competitor, with amount where allowed.

OUTPUT
The two lists.

GROUNDING
Use mirrored deals and surveyed deals. Respect withheld fields.
```

### Check how far to trust the numbers

```
Using Calven MCP, tell me how much to trust the win/loss numbers in the readout below.

FILL IN
- Readout: [paste the readout]
- Window: [time window the readout covers]

CONTEXT
The readout goes to leadership: win rates, loss reasons and competitor cuts. Before it goes out I want each number checked against the program's coverage, so nothing rests on a handful of responses.

PULL FROM THE UNIVERSE
- The win/loss program health dashboard for the window: coverage, completion rate, coverage by segment, channel mix.
- The win/loss dashboard for the same window: each rate with its n, and the segments reported below the floor.

CHECK
- For each number in the readout: the n behind it, the coverage of the segment it comes from, and a verdict (solid, thin, do not present).
- Segments the readout cuts that the program barely covers.
- Where a competitor cut rests on fewer responses than the floor.

OUTPUT
The readout annotated with a verdict per number, then the two lines to add about coverage.

GROUNDING
Use only the two dashboards for the same window, with n. A number with no n in the Universe is "unverified", never confirmed.
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

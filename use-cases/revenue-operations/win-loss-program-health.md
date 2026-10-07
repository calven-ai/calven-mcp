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

## Advanced prompts

### Correct the readout for non-response bias

```
Check whether the buyers who answer our win/loss surveys look like the deals we actually decide, and reweight the loss readout if they don't. Use Calven MCP for coverage by segment, the responses and the decided deals behind them.

FILL IN
- Window: [window]
- Readout to check: [paste the loss drivers or win/loss findings you're about to present]

CONTEXT
If winners answer more than losers, or SMB buyers more than Enterprise, the readout tells the story of whoever replied. Survey researchers fix that with weighting. Nobody does it for win/loss.

FROM CALVEN
- Decided deals in the window by outcome, segment, size band and competitor, from the win/loss program health dashboard's coverage by segment.
- Completed responses by the same cuts, with n.
- The deal drivers behind the readout, with outcome, segment and whether each decided the deal.

METHOD
- Compare response share with deal share per cell. Flag cells over- or under-represented by more than 1.5 times.
- Reweight each response by deal share over response share (rake on outcome and segment if two cuts matter).
- Recompute the top loss drivers with the weights and compare with the unweighted readout.
- If you can run code, show both rankings side by side.

OUTPUT
A representativeness table, the reweighted driver ranking next to the original, and a sentence for the readout that says how far to trust it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Cells with fewer than five responses get no weight; say which ones.
```

### Find the response count each cut needs

```
Work out how many completed responses each segment and competitor cut needs before its win/loss findings mean anything, and how long that takes at our pace. Use Calven MCP for completion rates, enrollment and responses per cut.

FILL IN
- Cuts that matter: [segments, competitors or personas leadership asks about]
- Precision wanted: [e.g. plus or minus 10 points on a driver share]

CONTEXT
Leadership asks for the loss reasons against every competitor. Half the cells have four responses. I want a clear rule for which questions the program can answer this quarter and what it would take for the rest.

FROM CALVEN
- Completion rate, deals enrolled and analyzed, and AI interview pick rate, from the program health dashboard, with n.
- Completed responses per cut in the last four quarters.
- Decided deals per cut per quarter, to project the inflow.

METHOD
- For each cut, compute the responses needed for the precision I asked for on a proportion (use 50% as the worst case).
- Project months to reach it at the current completion rate and deal volume.
- Show the lever: how much faster each cut gets there if completion rises by 10 points or enrollment covers every decided deal.
- If you can run code, build it as a small calculator I can rerun each quarter.

OUTPUT
A table: cut, responses held, responses needed, months to get there at current pace, months with each lever. Then the cuts to stop reporting until they're ready.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. The precision maths is yours; label it as such.
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
- Do lost deals or won deals answer the survey more often?
- Which competitor's losses have the fewest completed responses?
- How long after close does a typical response come in?
- Does the AI interview produce more deal drivers per response than the online survey?
- Which deal size band has the lowest enrollment coverage?
- How many decided deals this quarter were never enrolled?

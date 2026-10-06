# Buying signal plays


A buying signal just fired and you want outreach out within days, not the same email everyone else gets. You get a play per trigger type: the persona it hits, the pain it creates, the opener, the proof, and a ranked list of in-profile accounts where it fired. Calven adds the company's own data on which triggers come before the deals we win.

## Prompts

### Find the triggers that come before wins

```
Using Calven MCP, tell me which buying triggers show up before we win.

FILL IN
- Window: [time window, e.g. last 12 months]

CONTEXT
I want to spend my trigger-based outreach on the signals that actually lead to deals.

PULL FROM THE UNIVERSE
- The buying triggers and signals section of our ICP.
- The triggers recorded on accounts behind won deals in the window, and on lost ones.

BUILD
- A table: trigger · accounts with it that we won · that we lost · the persona it usually affects · the pain it creates.

OUTPUT
The table and a one-line recommendation on which two triggers to work first.

GROUNDING
Use only ICP content and CRM records in the Universe and cite counts with their sample. Do not infer a trigger the CRM does not record.
```

### List in-profile accounts where it fired

```
Using Calven MCP, list the in-profile accounts where the trigger below fired.

FILL IN
- Trigger: [trigger]
- Persona: [persona]
- Number: [how many accounts]

CONTEXT
I am running the play for this trigger this week and can work that number of accounts.

PULL FROM THE UNIVERSE
- CRM accounts with the trigger recorded, Tier 1 and Tier 2 fit, that have no open deal.
- The contacts we hold at each with the role that matches the persona.

BUILD
- A ranked list: account · fit tier and score · the contact to message (or "no contact on record") · any past deal and its loss reason.

OUTPUT
The ranked list, strongest fit first.

GROUNDING
Use only CRM records in the Universe. Say which accounts lack a contact rather than guessing one.
```

### Write a three-touch trigger play

```
Using Calven MCP, write the play for the trigger and persona below.

FILL IN
- Trigger: [trigger]
- Persona: [persona]
- Segment: [segment]

CONTEXT
When the trigger happens at an account in the segment, I want a three-touch play (email, LinkedIn, call opener) that speaks to what this persona faces right after it.

PULL FROM THE UNIVERSE
- The persona's canvas: goals, pains, jobs to be done, hooks.
- Customer quotes about what happened after the trigger (a migration, a new leader, a merger, new budget).
- A won deal where this trigger was in play and the driver that decided it.

WRITE
- Email under 90 words that opens on the situation the trigger creates, one proof, one question.
- A two-line LinkedIn note.
- A call opener and the first question.

OUTPUT
The three touches with the source for the pain and the proof.

GROUNDING
Use only the canvas, quotes and deals in the Universe and cite them. If the Universe holds no quote about this trigger, open on the persona's top pain instead and say so.
```

### Find accounts missing the right contact

```
Using Calven MCP, which of the accounts below have no contact on record for this persona?

FILL IN
- Persona: [persona]
- Accounts: [paste the account list]

CONTEXT
I need to know where to go find a name before I can run the play.

PULL FROM THE UNIVERSE
- Contacts at each account with their roles.

OUTPUT
Two lists: accounts with a matching contact (name, title), and accounts with none.

GROUNDING
Report only what the CRM mirror holds.
```

## Advanced prompts

### Measure each trigger's lift before you chase it

```
Measure how much each buying trigger actually lifts our odds of winning, with confidence intervals, before I build plays around any of them. Use Calven MCP for closed deals and the triggers recorded on their accounts.

FILL IN
- Window: [window]
- Segment: [segment, or "all"]

CONTEXT
Every trigger feels like a reason to call. Some come before our wins; some are just news. I want to spend my trigger plays on the ones that move the numbers.

FROM CALVEN
- Closed deals (won and lost) in the window and segment, paged in full, with their account.
- For those accounts, the triggers field, read from the account rows.
- The ICP dashboard's win rate and predictive attributes for the same window, with n, as the reference.
- The buying triggers the ICP document names.

BACKTEST
- Join deals to account triggers. For each trigger, compute the win rate with and without it, the lift, and a 90 percent confidence interval (Wilson or bootstrap).
- If you can run code, do the join and the intervals in a script and print the table.
- Flag triggers whose interval crosses zero lift as unproven, however popular.
- Compare with the ICP's named triggers: which ones it names that don't show up, which ones show up that it doesn't name.

OUTPUT
A ranked table of triggers with deals, win rate with and without, lift and interval, then a short verdict: build a play, test it, or drop it.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Trigger fields are read off rows and may be undated; say so. Don't claim a trigger came before the deal when the record doesn't show the timing.
```

### War-game the trigger against a rival's SDRs

```
War-game a buying trigger as a game between us and a competitor's SDR team who saw the same news. Use Calven MCP for the competitor's pitch, the buyer's reaction and how we fare against them.

FILL IN
- Trigger: [trigger, e.g. Recent funding]
- Competitor: [competitor]
- Target accounts: [paste the accounts where it fired]

CONTEXT
When an account raises money, every vendor in the category emails the same week. Being first matters less than being the one the buyer answers. I want the timing and angle that wins the game, not just a template.

FROM CALVEN
- The competitor's battlecard: positioning, talk track, where they win and lose.
- The competitor's signals from the last 90 days.
- The persona canvas for the role a trigger like this makes buy, and quotes about this trigger.
- Our win rate against the competitor, from the competitive dashboard, with n.

WAR-GAME
- Set up a payoff matrix: our moves (fast and generic, fast and specific, wait a week with proof) against theirs (the same three). Score each cell by the buyer's likely reply, using the persona and the competitor's known pitch.
- Play three rounds: their opening move, our response, their counter. Write their email in their voice from the battlecard.
- Find the dominant or best-response strategy and say how sure you are.

OUTPUT
The matrix with scores and reasons, the three-round transcript, and our play: timing, angle and the first email.

GROUNDING
Label every score as your judgement and every fact as Calven (cited, with n). Don't invent a competitor move or campaign nobody recorded.
```

### Model how many plays your week can hold

```
Model my trigger plays as a queue: triggers arrive, I have limited hours, and plays that wait too long lose value. Use Calven MCP for how many accounts carry each trigger and what each is worth.

FILL IN
- Hours per week for trigger plays: [hours]
- Time per play: [minutes per account for research plus first touch]
- Segment: [segment]

CONTEXT
I start every trigger play, then half of them sit for a week and go cold. I want to know how many I can actually run, which to drop at the door, and what that does to pipeline.

FROM CALVEN
- Tier 1 and Tier 2 accounts in the segment with each trigger, read from account rows, and how many have no open deal.
- Win rate and average deal size for the segment from the ICP dashboard, with n.
- The buying triggers the ICP names, as a priority hint.

MODEL
- Estimate arrival rate per trigger per week from the counts and a window you state.
- Value each play: win rate times deal size, with a decay for every week it waits (state the decay and range it).
- Compare arrival with my capacity. If I'm overloaded, rank triggers by value per hour and set an admission rule: which triggers to always work, which to work when there's slack, which to skip.
- If you can run code, simulate twelve weeks with random arrivals and show the backlog and captured value under my current habit and under the rule.

OUTPUT
A capacity table, the admission rule in three lines, and the twelve-week comparison of backlog and expected pipeline.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a trigger date the record doesn't hold; state the window you assumed.
```

## Ad hoc questions

- Which accounts had a funding trigger recorded this quarter and are Tier 1?
- What does [persona] worry about right after an M&A?
- Which trigger shows up most on accounts we won?
- Do we have a Head of [function] at any of the accounts with a tech-migration trigger?
- What did customers say about the migration that made them buy? Quote them.
- Which triggers does our ICP say to watch?
- Has any account with an exec-hire trigger been in our pipeline before?
- Give me the opener for a restructuring trigger, in [persona]'s words.
- Which Tier 2 accounts with a trigger have no open deal?
- Which product is the best fit for accounts with an expansion trigger?
- Which trigger appears on our lost deals as often as on our won ones?
- Which accounts with a trigger recorded already have a [competitor] deal lost against them?
- What did customers say about the week they started looking? Quote them.
- Which persona owns the problem after an exec-hire trigger, per the canvases?
- Which market trend makes a [trigger] more urgent for [segment] this quarter?
- Which Tier 1 accounts carry two triggers at once?

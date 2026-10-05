# Buying signal plays

**Team:** Business development · also revenue operations, demand generation
**Impact:** High. A trigger (funding, exec hire, M&A, migration) is the best reason to call this week; a play per trigger, aimed at the accounts where it fired and written for the persona it affects, turns signals into meetings instead of noise.
**Prerequisites:** CRM connected (account triggers, ICP fit), ICP approved (buying triggers), personas approved. Better with win/loss surveys running (which triggers precede won deals).

## What the team is trying to do

Turn a buying signal into outreach within days. Done means a play per trigger type: which persona it hits, the pain it creates, the opener, the proof, and a ranked list of in-profile accounts where the trigger fired. Without the company's data the BDR sees a funding announcement and sends the same email as to everyone else.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Decide which triggers matter | Pick the signals that precede deals | The buying triggers in the ICP; the trigger types recorded on won-deal accounts | ICP (buying triggers), CRM accounts, CRM deals |
| 2 | Find the accounts | Where did the trigger fire, and are they in profile? | Accounts with that trigger recorded, filtered by ICP tier, sorted by fit score | CRM accounts |
| 3 | Pick the persona | Who feels the trigger first? | The persona whose goals or pains the trigger touches | Persona canvas |
| 4 | Write the play | Opener, pain, proof, ask | A play per trigger in the persona's words, with a won-deal proof | Quotes, deal drivers, messaging |
| 5 | Check contacts | Do we have the right person at each account? | Contacts at each account with role | CRM contacts |
| 6 | Watch for new triggers | Catch next week's signals | Calven does not help here; triggers reach the CRM mirror from the CRM and enrichment, not from a live feed | |
| 7 | Run and measure | Send, track, report | Calven does not help here | |

## Recommended prompts

### Step 1: which triggers precede our deals

```
Using Calven MCP, tell me which buying triggers show up before we win.

CONTEXT
I want to spend my trigger-based outreach on the signals that actually lead to deals.

PULL FROM THE UNIVERSE
- The buying triggers and signals section of our ICP.
- The triggers recorded on accounts behind won deals in the last [window], and on lost ones.

BUILD
- A table: trigger · accounts with it that we won · that we lost · the persona it usually affects · the pain it creates.

OUTPUT
The table and a one-line recommendation on which two triggers to work first.

GROUNDING
Use only ICP content and CRM records in the Universe and cite counts with their sample. Do not infer a trigger the CRM does not record.
```

### Step 2: the accounts to work this week

```
Using Calven MCP, list the in-profile accounts where [trigger] fired.

CONTEXT
I am running the [trigger] play this week and can work [number] accounts.

PULL FROM THE UNIVERSE
- CRM accounts with [trigger] recorded, Tier 1 and Tier 2 fit, that have no open deal.
- The contacts we hold at each with the role that matches [persona].

BUILD
- A ranked list: account · fit tier and score · the contact to message (or "no contact on record") · any past deal and its loss reason.

OUTPUT
The ranked list, strongest fit first.

GROUNDING
Use only CRM records in the Universe. Say which accounts lack a contact rather than guessing one.

[name the trigger, the persona and how many accounts]
```

### Steps 3 and 4: the play

```
Using Calven MCP, write the [trigger] play for [persona].

CONTEXT
When [trigger] happens at a [segment] account, I want a three-touch play (email, LinkedIn, call opener) that speaks to what this persona faces right after it.

PULL FROM THE UNIVERSE
- The [persona] canvas: goals, pains, jobs to be done, hooks.
- Customer quotes about what happened after [trigger] (a migration, a new leader, a merger, new budget).
- A won deal where this trigger was in play and the driver that decided it.

WRITE
- Email under 90 words that opens on the situation the trigger creates, one proof, one question.
- A two-line LinkedIn note.
- A call opener and the first question.

OUTPUT
The three touches with the source for the pain and the proof.

GROUNDING
Use only the canvas, quotes and deals in the Universe and cite them. If the Universe holds no quote about this trigger, open on the persona's top pain instead and say so.

[name the trigger, persona and segment]
```

### Step 5: contact gaps

```
Using Calven MCP, which of these accounts have no [persona] contact on record?

CONTEXT
The account list is at the bottom. I need to know where to go find a name before I can run the play.

PULL FROM THE UNIVERSE
- Contacts at each account with their roles.

OUTPUT
Two lists: accounts with a matching contact (name, title), and accounts with none.

GROUNDING
Report only what the CRM mirror holds.

[paste the account list]
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

## Good practice

- Work triggers that precede wins, not the ones that are easiest to spot. Ask the trigger-to-outcome question first.
- Filter by tier before working the list. A trigger at an out-of-profile account is still out of profile.
- One play per trigger per persona. A funding play for a VP of Engineering and one for a CFO are different emails.
- Ask for the contact gap list. The play is only as good as the names you have.
- Rerun the account list weekly. Triggers are dated.

## Not covered today

- Detecting triggers. Calven reads the triggers the CRM and enrichment recorded on the account; it does not watch the news.
- Intent data, site visits and ad engagement.
- Sending, sequencing and CRM updates.

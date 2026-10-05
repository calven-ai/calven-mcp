# Multi-threading

**Team:** Account executives · also BDRs and SDRs, sales leadership
**Impact:** Medium. Single-threaded deals lose when the champion goes quiet, and the data on which personas win deals is rarely in front of the rep.
**Prerequisites:** CRM connected (pipeline category on for MCP), personas approved. Better with win/loss surveys running (buying group evidence).

## What the team is trying to do

Know which roles are on the deal, which are missing compared with the deals we win, and how to open each missing one in their own language. Done means every live deal has a thread to the economic buyer and the technical buyer, and the rep has a hook for each. Without the company's own evidence, multi-threading is a manager's reminder with no data behind it.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | See the thread | Who is on the deal and their role | Contacts on the account with buying role and lifecycle stage | CRM contacts, CRM deals |
| 2 | Compare with wins | Which personas sat on won deals in this segment | Win rate by persona, buying-group dynamics, contact coverage | Persona dashboard, win/loss buying group |
| 3 | Find the gap | The role missing that decides deals like this | The buying-group pattern against the deal's contacts | Persona dashboard, deal drivers |
| 4 | Read the missing persona | What they care about, how to open | Persona canvas: goals, pains, hooks, watering holes | Persona canvas |
| 5 | Write the opener | The message to the new contact, through the champion or direct | A draft in the persona's words with one proof | Persona canvas, quotes |
| 6 | Find the person | The actual name and contact details | Calven does not help here beyond CRM contacts already on record | |
| 7 | Track it | The CRM update | Calven does not help here | |

## Recommended prompts

### Step 1 to 5: the threading plan

```
Using Calven MCP, show me the threading gap in [deal] and how to close it.

CONTEXT
[Deal] at [account], [segment]. My champion is [contact], a [persona]. I want to know who else needs to be on this deal and how to open them.

PULL FROM THE UNIVERSE
- The contacts at [account] with buying role and lifecycle stage.
- Which personas sat on won deals in [segment], the win rate by persona and the single- versus multi-threaded win rate, with n.
- The canvases for the roles we lack: goals, pains, objections, hooks.
- One proof quote per missing persona.

BUILD
- The roles on the deal and the roles won deals usually have.
- For each gap: the persona, why they matter to the outcome, the hook, and whether to go through the champion or direct.
- A three-line opener per gap in the persona's words.

OUTPUT
A table of gaps with hooks and openers, with sources.

GROUNDING
Persona win rates from the dashboard only, with n. Do not invent contacts or names; if the CRM has no contact in that role, say "no contact on record".

[name the deal, account, segment and champion]
```

### Gap mode: single-threaded deals in my pipeline

```
Using Calven MCP, which of my open deals are single-threaded?

CONTEXT
I want the list before the pipeline review.

PULL FROM THE UNIVERSE
- My open deals with their contact roles and contact count band.
- The multi-threaded versus single-threaded win rate, with n.

BUILD
- Each single-threaded deal with the role it lacks most, by what won deals in its segment had.

OUTPUT
A ranked table: deal, amount, close date, missing role.

GROUNDING
Only CRM mirror and dashboard data, cited. No invented contacts.

[name yourself as owner if the CRM uses owner names, and the segment]
```

### Review mode: check my opener

```
Using Calven MCP, check my message to a [persona] I am trying to add to [deal].

CONTEXT
Below is the message. Read it as that persona.

PULL FROM THE UNIVERSE
- The [persona] canvas, and run the persona review on the text.

REACT
- Would they reply, and why or why not.
- The rewrite in their words.

OUTPUT
The verdict, the rewrite.

GROUNDING
Only from the canvas.

[paste the message and name the persona]
```

## Ad hoc questions

- Who is on [deal] and what role does each have?
- Which personas are on the deals we win in [segment]?
- What is our win rate on multi-threaded versus single-threaded deals?
- What does a [persona] care about, and how do I open a conversation with them?
- Where does a [persona] spend time, according to their canvas?
- Which of my deals has no technical buyer attached?
- Which role, when missing, costs us deals most often?
- Give me a three-line note to a [persona] from their champion's point of view.

## Good practice

- Ask for n on every persona win rate. Buying-group statistics over small samples mislead.
- Open the missing persona in their language, not yours. The canvas hook is the first line.
- Go through the champion when you can. Ask the AI tool for the version the champion forwards.
- Check your pipeline for single threads before the review, not during it.

## Not covered today

- Finding names and contact details not in the CRM. That is the rep's data tools.
- Updating contacts on the deal. Calven reads the mirror.

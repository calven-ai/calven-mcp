# Stakeholder mapping

**Team:** Customer success · also account management, sales
**Impact:** Medium. Single-threaded accounts churn when the champion leaves. Mapping every contact to a persona and a buying role, and naming who is missing, is a ten-minute task with Calven and a renewal risk without it.
**Prerequisites:** CRM connected (contacts with role and lifecycle stage), personas approved. Call transcripts ingested adds what each person said. Persona dashboard adds the multi-threading evidence.

## What the team is trying to do

Know who is on the account, what each person cares about, who holds the budget, and which role nobody on our side talks to. Done means a stakeholder map per account with the gaps and a plan to fill them. Without the company's own persona canvases and CRM mirror, the map is the CSM's memory.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | List the contacts | Who is on the account | Contacts with title, buying role, lifecycle stage | CRM contacts |
| 2 | Map to personas | What each person is measured on and cares about | The persona each maps to, with KPIs, pains, objections | Personas, persona canvas |
| 3 | Read what they said | Their own words | Quotes by speaker | Quotes |
| 4 | Find the gaps | Roles with no contact | The buying roles present on won deals in the segment; the personas usually in the buying group | Persona dashboard (buying group), CRM deals |
| 5 | Plan the outreach | How to reach the missing role | The persona's messaging hooks and watering holes | Persona canvas |
| 6 | Update the CRM | Add contacts and roles | Calven does not help here | |

## Recommended prompts

### Step 1 to 4: the map

```
Using Calven MCP, map the stakeholders at [account].

CONTEXT
I want to know who I have, what each cares about, and who is missing.

PULL FROM THE UNIVERSE
- The contacts at [account] with title, buying role and lifecycle stage.
- The persona each contact maps to, with goals and KPIs, pains and objections.
- Each contact's quotes.
- The buying-group dynamics from the persona dashboard: which personas sit on won deals in [segment], and the multi-threading win rate with n.

BUILD
- A table: contact, title, buying role, persona, what they care about, what they said.
- The gaps: buying roles and personas on a typical won deal in [segment] that have no contact here.
- A risk line: single-threaded or not.

OUTPUT
The map and the gaps.

GROUNDING
Use only the Universe and cite it. Mark a contact whose title fits no persona as unknown.

[name the account and segment]
```

### Step 5: reaching the missing role

```
Using Calven MCP, help me reach the [persona] at [account].

CONTEXT
We have no contact in that role. I want an angle and a message.

PULL FROM THE UNIVERSE
- The [persona] canvas: company objectives, KPIs, pains, messaging hooks, watering holes.
- Quotes from [account] that mention this role or its concerns.
- The value proposition for this persona.

WRITE
- The angle in two lines, a three-sentence intro message for the champion to forward, and the one question to ask in the first conversation.

OUTPUT
The three pieces.

GROUNDING
Use only the Universe and cite it.

[name the persona and account]
```

### Gap across the book

```
Using Calven MCP, show me which of my accounts are single-threaded.

CONTEXT
My accounts are listed below.

PULL FROM THE UNIVERSE
- Contacts per account by buying role.
- The persona dashboard: contact coverage and the multi-threading payoff, with n.

BUILD
- A table: account, contacts, roles covered, roles missing, renewal date.
- The accounts to multi-thread first.

OUTPUT
The table.

GROUNDING
Use only the Universe and cite it.

[paste the account list]
```

## Ad hoc questions

- Who is the economic buyer at [account]?
- Which persona is [contact]?
- What is [persona] measured on?
- Which roles are usually on a won deal in [segment]?
- Which of my accounts have only one contact?
- What has [contact] said on calls?
- Where does [persona] learn and gather?
- Write an intro message to a [persona] that my champion can forward.

## Good practice

- Map at kickoff and again before every QBR. Contacts change; the map should too.
- Use the buying-group data from won deals to define "complete". It is your segment's evidence, not a template.
- Ask the champion to make the introduction with a message in the missing persona's language.
- Add new contacts to the CRM so the next map sees them.

## Not covered today

- Org charts, LinkedIn and job changes are not in Calven; the CRM mirror holds what sales and CS entered.
- Updating contacts and roles happens in the CRM.

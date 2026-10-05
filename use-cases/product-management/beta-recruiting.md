# Beta recruiting

**Team:** Product management · also customer success, product marketing
**Impact:** Medium. The right beta customers are the ones who asked for the capability, fit the ICP and have a contact who will give feedback. Calven holds all three, so the invite list is evidence, not the CSM's favourites.
**Prerequisites:** CRM connected (accounts with ICP fit, contacts with roles, deals), personas approved. Better with call transcripts and win/loss (who asked for the capability).

## What the team is trying to do

Recruit eight to twenty customers for a beta who match the target segment, have the problem, and will respond. Done means an invite list with the reason per account, the contact to approach, and an invitation written in the persona's words.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the target | Which segment and persona the beta is for | ICP segments; persona canvases | ICP document, persona |
| 2 | Find who asked | Accounts whose people raised the problem | Quotes and deal drivers naming the capability, with account | Quotes, deal drivers |
| 3 | Score the candidates | Fit, relationship, likely engagement | Account ICP fit tier, lifecycle stage, contact roles (champion, end user) | CRM accounts, CRM contacts, CRM deals |
| 4 | Write the invite | In the persona's words, with what they get | Persona canvas (pains, gains), messaging | Persona, messaging |
| 5 | Run the beta | Onboard, collect feedback | Calven does not help here | |
| 6 | Synthesise | What beta customers said | Only if calls are ingested: quotes from those accounts | Quotes |

## Recommended prompts

### Step 2 and 3: the invite list

```
Using Calven MCP, build the beta invite list for [feature].

CONTEXT
I need up to [n] customer accounts for the [feature] beta. They should have the problem, fit [segment], and have a contact likely to engage.

PULL FROM THE UNIVERSE
- Customer quotes and deal drivers that mention the problem [feature] solves, with the account.
- Those accounts' ICP fit tier, industry and size.
- Contacts at those accounts with role champion or end user, and their titles.

BUILD
- A ranked table: account, why (the quote or driver), fit tier, contact and role, suggested approach.
- A second short list of accounts that fit the segment but have not raised the problem, as reserves.

OUTPUT
The invite list.

GROUNDING
Use only quotes, drivers, accounts and contacts in the Universe, cited. If the pipeline category is restricted, give the accounts from quotes only and say so.

[name the feature, the segment and the number]
```

### Step 4: the invitation

```
Using Calven MCP, write the beta invitation for [persona].

CONTEXT
The invite goes to [persona] at the accounts on my list. It should name their problem in their words, say what the beta gives them and what we ask in return. Under 120 words.

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, gains, messaging hooks.
- Customer quotes on the problem, for language.

WRITE
- Two versions: one for a champion who asked for it, one for an end user who has not.

OUTPUT
The two invitations.

GROUNDING
Use only the canvas and quotes, cited. Do not promise capabilities or dates beyond the beta scope I give you.

[name the persona and the beta scope]
```

### Step 6: what the beta said

```
Using Calven MCP, summarise what beta accounts said about [feature].

CONTEXT
The beta ran for [weeks]. The calls were ingested. I want the themes and quotes from those accounts only.

PULL FROM THE UNIVERSE
- Quotes from the accounts listed below in the beta window, about [feature].

BUILD
- Themes with mentions and sentiment, and the quotes under each.

OUTPUT
A beta feedback summary.

GROUNDING
Use only quotes from the named accounts in the window. If a call was not ingested, it is not here; say so.

[paste the account list and the window]
```

## Ad hoc questions

- Which customers asked for [capability] on calls or in deals?
- Which Tier 1 accounts in [segment] are customers?
- Who is the champion at [account]?
- Which contacts at [account] are end users?
- What does [persona] want in exchange for their time, according to the canvas?
- Which accounts mentioned [problem] with negative sentiment?
- Did any beta account raise [feature] on a call since the beta started?
- Which lost deals named [capability] as a driver, and is the account still in the CRM?
- Write the beta invite for [persona] in their own words, with what they get and what we ask.

## Good practice

- Rank by "asked for it" first, fit second. A fitting account that never raised the problem gives thin feedback.
- Ask for the contact's role. A champion forwards the invite; an end user tries the feature.
- Keep the invite in the persona's words and short.
- Ingest the beta calls if you want Calven to synthesise them.

## Not covered today

- Sending invites, tracking acceptance, running the beta. The beta tool and email own those.
- Product usage during the beta.

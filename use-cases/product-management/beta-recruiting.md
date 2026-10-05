# Beta recruiting


You need eight to twenty beta customers who match the target segment, have the problem and will respond. You walk away with an invite list with the reason per account, the contact to approach, and an invitation written in the persona's words. Calven brings the reasons and the persona's words from the company's own record.

## Prompts

### Build the beta invite list

```
Using Calven MCP, build the beta invite list for the feature below.

FILL IN
- Feature: [feature]
- Segment: [segment]
- Number: [n, the maximum number of accounts]

CONTEXT
I need up to the number of customer accounts above for the feature's beta. They should have the problem, fit the segment, and have a contact likely to engage.

PULL FROM THE UNIVERSE
- Customer quotes and deal drivers that mention the problem the feature solves, with the account.
- Those accounts' ICP fit tier, industry and size.
- Contacts at those accounts with role champion or end user, and their titles.

BUILD
- A ranked table: account, why (the quote or driver), fit tier, contact and role, suggested approach.
- A second short list of accounts that fit the segment but have not raised the problem, as reserves.

OUTPUT
The invite list.

GROUNDING
Use only quotes, drivers, accounts and contacts in the Universe, cited. If the pipeline category is restricted, give the accounts from quotes only and say so.
```

### Write the beta invitation

```
Using Calven MCP, write the beta invitation for the persona below.

FILL IN
- Persona: [persona]
- Beta scope: [the beta scope]

CONTEXT
The invite goes to the persona at the accounts on my list. It should name their problem in their words, say what the beta gives them and what we ask in return. Under 120 words.

PULL FROM THE UNIVERSE
- The persona's canvas: pains, gains, messaging hooks.
- Customer quotes on the problem, for language.

WRITE
- Two versions: one for a champion who asked for it, one for an end user who has not.

OUTPUT
The two invitations.

GROUNDING
Use only the canvas and quotes, cited. Do not promise capabilities or dates beyond the beta scope.
```

### Summarise what beta accounts said

```
Using Calven MCP, summarise what beta accounts said about the feature below.

FILL IN
- Feature: [feature]
- Duration: [weeks the beta ran]
- Accounts: [paste the account list]
- Window: [the beta window]

CONTEXT
The beta ran for the duration above. The calls were ingested. I want the themes and quotes from those accounts only.

PULL FROM THE UNIVERSE
- Quotes from the listed accounts in the beta window, about the feature.

BUILD
- Themes with mentions and sentiment, and the quotes under each.

OUTPUT
A beta feedback summary.

GROUNDING
Use only quotes from the named accounts in the window. If a call was not ingested, it is not here; say so.
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

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

## Advanced prompts

### Size the beta so the result means something

```
Design my beta like an experiment: how many accounts, which mix, and what result counts as success. Use Calven MCP for the pool of accounts that fit and the ones that asked for it.

FILL IN
- Feature: [feature]
- Success metric: [the metric that decides go or no-go, e.g. weekly active use in week four]
- Baseline: [your rate for a comparable feature, or "none"]
- Segment: [segment]

CONTEXT
Most betas are too small to tell us anything, and they're full of friendly accounts who'd say yes to anything. I want a beta whose result I'd trust enough to make the launch call on.

FROM CALVEN
- The count of customer accounts in the segment by ICP fit tier, size and region.
- The accounts whose people raised the problem the feature solves, from quotes and deal drivers.
- Contacts at those accounts with role champion or end user.

METHOD
- Set the decision first: what effect size would change the launch call. State it before any other numbers.
- Run a power calculation for the success metric at that effect size. If you can run code, do it and plot accounts needed against detectable effect.
- Stratify: split the sample between accounts that asked and accounts that fit but didn't, so we see whether the feature works beyond its fans.
- Check the pool can fill each stratum. If it can't, say what we can and can't conclude with the accounts that exist.

OUTPUT
A one-page beta design: sample size per stratum, the named accounts that fill it, the success threshold, and the result that would make us stop.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a baseline; if I gave none, use a stated range and show how the sample size moves across it.
```

### Build a beta candidate scorecard

```
Build me a working spreadsheet that scores every beta candidate and shows why. Use Calven MCP for the account, contact and evidence fields it scores on.

FILL IN
- Feature: [feature]
- Segment: [segment]
- Weights: [your weights for asked-for-it, fit, relationship and engagement, or "propose them"]
- Exclusions: [paste accounts to leave out: open escalations, renewals at risk]

CONTEXT
Beta lists get picked by whoever the CSM likes. I want a scorecard anyone on the team can rerun next quarter and get the same answer.

FROM CALVEN
- Customer accounts in the segment with ICP fit score, tier, size and triggers.
- Contacts per account with role and lifecycle stage.
- Quotes and deal drivers that mention the problem, with account, sentiment and date.

BUILD
- One row per account. A column per input, a points column per criterion with the formula visible, and a total.
- Score asked-for-it by recency and strength: a negative quote last month beats a neutral one a year ago.
- A penalty column for accounts with no champion or end user contact.
- A sensitivity tab: how the top fifteen change if each weight moves by half.
- If you can run code, produce an .xlsx with live formulas, not pasted values.

OUTPUT
The spreadsheet, a short readme of the scoring logic, and the top fifteen with a one-line reason each.

GROUNDING
Label every input as Calven (cited), mine, or your assumption. Don't score an account on evidence it doesn't have; leave the cell empty and say so.
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
- Which accounts asked for [capability] and also have an open renewal deal?
- Which segments have no account that raised [problem]?
- Who were the champions on deals we won in the last six months?
- What objections does [persona] raise about trying a new tool, according to the canvas?
- Which accounts in [segment] have a Tech migration trigger?
- Which quotes about [problem] come from end users rather than buyers?

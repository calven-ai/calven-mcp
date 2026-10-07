# Change and deprecation communication


Product tells customers about releases more reliably than it tells support, so you usually find out from the queue. You get a release brief for the team with what it made stale, and a deprecation note telling affected customers what's removed, why, when, what replaces it and how to migrate. Calven also shows which customers care about the change, so no agent learns about it from a ticket.

## Prompts

### Brief support on this release

```
Using Calven MCP, brief the support team on what changed in the product in the window below and what it made stale.

FILL IN
- Window: [week or month, e.g. this week]

CONTEXT
I want one note the team reads before the tickets arrive.

PULL FROM THE UNIVERSE
- Product changes in the window, with severity, summary and the evidence quote.
- Drift findings for those changes: which published documents are now wrong, and the verdict.

BUILD
- A table: change, severity, what a customer will notice, what to say.
- The list of stale documents with what needs fixing.

OUTPUT
The brief and the list, with sources.

GROUNDING
Use only the change and drift records. Do not describe changes the records do not contain; if the window is empty, say so.
```

### Draft a customer deprecation notice

```
Using Calven MCP, draft a deprecation notice for the feature below.

FILL IN
- Feature: [feature]
- Date: [removal date]

CONTEXT
We are removing the feature on the date. The audience is customers who use it. The notice goes by email and in-app.

PULL FROM THE UNIVERSE
- The product change record for this removal, with its so-what.
- The product brief for the replacement capability and how it works.
- Quotes from customers about the feature or the job it does, so the note addresses what they actually use it for.

WRITE
- What is being removed, why, the date, what replaces it, how to migrate, where to get help.
- Plain language, no apology spiral, under 200 words.

OUTPUT
The notice, and a list of the customer concerns from calls the note should pre-empt.

GROUNDING
State only what the change record and the brief support. Do not promise a migration path the brief does not describe; mark it "confirm with product".
```

### Find customers who care about a change

```
Using Calven MCP, which customers care about the feature we are changing?

FILL IN
- Feature: [feature]

CONTEXT
Before the notice goes out I want to warn customer success about the accounts most likely to object.

PULL FROM THE UNIVERSE
- Customer quotes and themes about the feature or the job it does, with the account and sentiment.
- Open deals or renewals on those accounts.

BUILD
- A table: account, what they said, sentiment, renewal or open deal, suggested handling.

OUTPUT
The table with sources.

GROUNDING
List only accounts with a recorded quote. Usage data is not in the Universe; say so.
```

## Advanced prompts

### Run a pre-mortem on the deprecation

```
Run a pre-mortem on a deprecation: it's sixty days after the change and it went badly. Tell me the stories of how. Use Calven MCP for what changed, who relies on it and what they've said about it.

FILL IN
- Change: [the feature being changed or removed]
- Plan: [paste the comms plan and dates]
- Affected accounts: [attach the list of accounts using the feature, or write "find from calls"]

CONTEXT
Deprecations go wrong in predictable ways: the wrong people hear about it, too late, in words that sound like a downgrade. I want the failures named while there's still time to change the plan.

FROM CALVEN
- The product change record: summary, so-what, severity, date.
- Drift findings: every document and article the change left stale.
- Customer quotes and conversations that mention the feature, with the accounts, and any open renewal at those accounts.

METHOD
- Write five short failure stories, each from a different cause: a key account learns from a broken workflow, a stale article contradicts the notice, a renewal lands mid-change, the replacement doesn't cover a use customers rely on, a competitor uses it in a pitch.
- Rate each for likelihood and damage from the evidence above.
- For the top two, name the signal in the first week and the change to the plan that prevents it.

OUTPUT
A table of the five failure modes (likelihood, damage, early signal, fix), the accounts to contact personally, and the plan with the fixes marked.

GROUNDING
Every failure cause cites Calven evidence or is labelled as your judgement. Don't invent a use case or an account no quote or record names.
```

### Forecast the ticket spike after a release

```
Forecast the ticket spike a release will cause, as a low, expected and high range, and staff for it. Use Calven MCP for what's changing, how much customer-facing content it breaks and how much customers care about the features involved.

FILL IN
- Release: [paste the release notes or list of changes]
- Past spikes: [attach daily ticket counts around two or three past releases, or write "none"]
- Team: [agents on shift and tickets per agent per day]

CONTEXT
Every release brings "what happened to X" tickets. We guess the staffing and usually guess low. I want a forecast built from how big the change is, not from hope.

FROM CALVEN
- The product changes in this release with severity and change type.
- Drift findings: how many published documents and articles each change left stale.
- Themes and quote mentions for the affected features, to weight how many customers use and care about each.

MODEL
- From the past spikes, estimate the extra tickets per release and how fast they decay. Without history, state an assumed range.
- Scale each change by severity, stale-content count and customer mentions, and sum to an expected spike curve over 14 days.
- Give low, expected and high. If you can run code, simulate it and plot the daily range against team capacity.
- Show the effect of fixing stale articles before launch on the high case.

OUTPUT
A daily forecast table for 14 days with the range, the days capacity is exceeded, the staffing call, and the three articles to fix first.

GROUNDING
Label every number as Calven (cited, with n), mine (past spikes, team), or your assumption. Don't invent a past spike.
```

## Ad hoc questions

- What changed in the product in the last 30 days?
- Which help articles did the last release make stale?
- What replaced [feature], according to the brief?
- Which customers mentioned [feature] on calls?
- Was [change] a deliberate change or is it a bug?
- What is the severity of the changes this week?
- Draft a two-line macro explaining the change to [feature].
- Does the product brief still describe [feature] the old way?
- Which accounts with a renewal this quarter raised [feature]?
- What is the so-what of the [change] record?
- Which product change this month has the most stale documents attached?
- Which customers praised [feature] on calls before we changed it?
- Do any open deals list [feature] in their tech stack requirements?
- What did the last change to [feature] say in its so-what, and did tickets follow?
- Which competitor could use [change] against us, according to their battlecard?
- Is there a theme that complained about [feature] before we changed it?

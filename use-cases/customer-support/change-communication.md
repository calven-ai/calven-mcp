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

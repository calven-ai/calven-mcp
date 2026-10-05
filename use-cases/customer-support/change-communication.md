# Change and deprecation communication

**Team:** Customer support · also product management, product marketing, customer success
**Impact:** Medium. Every release produces a spike of "what happened to X" tickets. A team briefed on what changed, with the stale articles already listed and a customer-facing note ready, absorbs the spike instead of generating it.
**Prerequisites:** own website and docs monitored (product changes, drift findings). Better with strategy documents approved (product brief for the replacement capability) and call transcripts ingested (customers who asked for the change).

## What the team is trying to do

Know what changed in the product before customers do, update what the change made wrong, and tell affected customers what is removed, why, when, what replaces it and how to migrate. Done means no agent learns about a change from a ticket. Product announces releases to customers more reliably than to support, so support usually finds out from the queue.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Learn what changed | Read the release notes, ask product | Dated product changes with severity, summary, so-what and evidence | Product changes |
| 2 | Find what it broke in the knowledge | Articles, macros, decks now wrong | Drift findings: each published document the change left stale, with the verdict | Drift findings |
| 3 | Understand the replacement | What customers should use instead | The product brief for the replacement capability | Product brief |
| 4 | Identify who cares | Which customers asked for this, or will object | Quotes and themes on the capability; accounts that raised it | Quotes, themes |
| 5 | Write the internal brief | What changed, what to say, what to update | A team brief from the change records | Product changes, drift findings, product brief |
| 6 | Write the customer note | Deprecation or change announcement | A draft with the five required elements: what, why, when, replacement, migration | Product changes, product brief |
| 7 | Send and track | Email, in-app, status page | Calven does not help here | |
| 8 | Update macros and articles | Fix the stale items | See help-centre-and-macros.md | |

## Recommended prompts

### Step 1 and 2: this release, for support

```
Using Calven MCP, brief the support team on what changed in the product this [week / month] and what it made stale.

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

[name the window]
```

### Step 6: the customer-facing deprecation note

```
Using Calven MCP, draft a deprecation notice for [feature].

CONTEXT
We are removing [feature] on [date]. The audience is customers who use it. The notice goes by email and in-app.

PULL FROM THE UNIVERSE
- The product change record for this removal, with its so-what.
- The product brief for the replacement capability and how it works.
- Quotes from customers about [feature] or the job it does, so the note addresses what they actually use it for.

WRITE
- What is being removed, why, the date, what replaces it, how to migrate, where to get help.
- Plain language, no apology spiral, under 200 words.

OUTPUT
The notice, and a list of the customer concerns from calls the note should pre-empt.

GROUNDING
State only what the change record and the brief support. Do not promise a migration path the brief does not describe; mark it "[confirm with product]".

[name the feature and the date]
```

### Step 4: who will care

```
Using Calven MCP, which customers care about [feature] we are changing?

CONTEXT
Before the notice goes out I want to warn customer success about the accounts most likely to object.

PULL FROM THE UNIVERSE
- Customer quotes and themes about [feature] or the job it does, with the account and sentiment.
- Open deals or renewals on those accounts.

BUILD
- A table: account, what they said, sentiment, renewal or open deal, suggested handling.

OUTPUT
The table with sources.

GROUNDING
List only accounts with a recorded quote. Usage data is not in the Universe; say so.

[name the feature]
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

## Good practice

- Run the release brief before every release goes out, not after the first ticket.
- Include the five elements in every change note: what, why, when, replacement, migration. Customers forgive the change; they do not forgive the surprise.
- Hand the stale-document list to whoever owns each document the same day.
- Cross-check the brief. If the brief still describes the old behaviour, the PMM needs to know before the notice goes out.

## Not covered today

- Who actually uses the feature. Usage data is in product analytics; Calven knows who talked about it.
- Sending the notice, in-app banners, status pages.
- Release notes themselves. Calven records the change it detected on the site and docs; product writes the notes.
- Editing the brief or the articles.

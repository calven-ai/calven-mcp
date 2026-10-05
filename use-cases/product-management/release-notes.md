# Release notes

**Team:** Product management · also product marketing, customer success, support
**Impact:** Medium. Release notes written from the ticket list describe the change. Written from the messaging and the customer's words, checked against the brief, they tell the buyer why it matters and stay true. The same recipe covers deprecation notices.
**Prerequisites:** strategy documents approved (product brief, messaging), own website and docs monitored (product changes, claims, drift). Better with call transcripts (quotes on the problem) and personas approved (the reader).

## What the team is trying to do

Tell customers what shipped and why it matters, in their words, without overclaiming, and tell them what is being removed with enough notice and a path. Done means release notes per release and a message map per deprecation, each checked against the product brief and the claims register.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | List what shipped | From the release, decide what customers need to know | Product changes recorded from our own site and docs, as a cross-check | Product changes |
| 2 | Write for the reader | Lead with the problem each item solves, for the persona who has it | Messaging pillars and value propositions; persona pains; customer quotes on the problem | Messaging, persona canvas, quotes |
| 3 | Fact-check | Confirm each claim | Product brief, claims register | Product brief, claims |
| 4 | Find the stale documents | Which published documents the release contradicts | Drift findings per product change | Product drift findings |
| 5 | Deprecations | Write the notice: what, when, why, the path, who is affected | Product brief for the replacement path; accounts and deals that use or asked for the capability; objections in messaging | Product brief, CRM deals, quotes, messaging |
| 6 | Publish | Docs, email, in-app | Calven does not help here | |

## Recommended prompts

### Step 2 and 3: write the notes

```
Using Calven MCP, write the release notes for [release].

CONTEXT
Below is the list of what shipped, in engineering's words. The readers are [persona] and [persona]. I want each item to open with the problem it solves, in the customer's words, and to claim nothing the brief does not support.

PULL FROM THE UNIVERSE
- The messaging pillar and value proposition each item supports.
- The persona pains each item addresses.
- A customer quote on each problem where one exists.
- The product brief for the accurate description of each capability.

WRITE
- Per item: a plain title, the problem in one line, what it does now, who it is for, one proof quote if available.
- A short "also fixed" list without marketing.

OUTPUT
The release notes, with the pillar per item noted for the PMM.

GROUNDING
Use only claims the product brief supports and quotes from the Universe, cited. No outcomes or numbers we have not recorded.

[paste the shipped list and name the personas]
```

### Step 4: what the release makes stale

```
Using Calven MCP, list the published documents that [release] makes stale.

CONTEXT
I want to fix documentation and sales material in the same week as the release.

PULL FROM THE UNIVERSE
- Product changes recorded for the release and the drift findings on each, with the document and the verdict.
- Claims about the affected areas.

BUILD
- A table: document, what it says, what changed, suggested fix, owner.

OUTPUT
The stale-documents table.

GROUNDING
Use only drift findings and claims in the Universe. If the change is not recorded yet, say so and list the documents mentioning the area as candidates.

[name the release and the areas it touches]
```

### Step 5: a deprecation notice

```
Using Calven MCP, write the deprecation notice for [capability].

CONTEXT
We are removing [capability] on [date]. I need the customer notice, the internal message map and the list of accounts most affected.

PULL FROM THE UNIVERSE
- The product brief: the replacement path and what the product does instead.
- Customer quotes and deal drivers that mention [capability], to see who relied on it and why.
- Accounts and deals that named it as a requirement.
- Objection handling in our messaging that applies.

WRITE
- The customer notice: what changes, when, why, the path, where to get help. No marketing.
- The internal message map: who needs to know, what they say, escalation path.
- The affected-accounts list with the quote or requirement behind each.

OUTPUT
The notice, the map and the list.

GROUNDING
Use only the brief, quotes and deals in the Universe, cited. If the pipeline category is restricted, say so and omit the account list.

[name the capability and the date]
```

### Review mode: fact-check drafted notes

```
Using Calven MCP, fact-check these release notes.

CONTEXT
Below are the notes as drafted. Every capability, integration and pricing claim must be right.

PULL FROM THE UNIVERSE
- The product brief and the claims register.

CHECK
- Mark each claim correct, overstated, stale or not in the brief, with the fix.

OUTPUT
The notes annotated.

GROUNDING
Confirm only against the Universe and cite the section.

[paste the notes]
```

## Ad hoc questions

- Which pillar does [feature] support?
- What problem does [feature] solve, in a customer's words?
- Is "[claim]" in the product brief?
- Which product changes were recorded in the last 30 days?
- Which published documents are flagged stale right now?
- Which accounts asked for [capability] in deals?
- Who relied on [capability], according to customer quotes?
- What is the replacement for [capability] in the brief?
- How would [persona] read this release note: "[paste]"?

## Good practice

- Write for the persona, not the ticket. Ask for the pain before the description.
- Fact-check the final text. Edits add claims.
- Run the stale-documents prompt on release day; drift findings are per document and easy to assign.
- For deprecations, get the affected accounts before writing the notice; the quotes tell you what they will ask.

## Not covered today

- Publishing to docs, email or in-app. Those tools own delivery.
- Updating the product brief and the documents flagged stale. The product intelligence agent and PMM do that in Calven.

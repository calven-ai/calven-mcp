# Release notes


Something shipped or something's being removed, and customers need to hear it in their words, without overclaiming, and with enough notice and a path for anything going away. You walk away with release notes per release and a message map per deprecation. Calven checks each one against the product brief and the claims register.

## Prompts

### Write the release notes

```
Using Calven MCP, write the release notes for the release below.

FILL IN
- Release: [release]
- Personas: [the two reader personas]
- Shipped list: [paste the shipped list]

CONTEXT
The shipped list is in engineering's words. The readers are the personas above. I want each item to open with the problem it solves, in the customer's words, and to claim nothing the brief does not support.

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
```

### List the documents the release makes stale

```
Using Calven MCP, list the published documents that the release below makes stale.

FILL IN
- Release: [release]
- Areas: [the product areas it touches]

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
Use only drift findings and claims in the Universe. If the change is not recorded yet, say so and list the documents mentioning the areas as candidates.
```

### Write a deprecation notice

```
Using Calven MCP, write the deprecation notice for the capability below.

FILL IN
- Capability: [capability]
- Date: [removal date]

CONTEXT
We are removing the capability on the date above. I need the customer notice, the internal message map and the list of accounts most affected.

PULL FROM THE UNIVERSE
- The product brief: the replacement path and what the product does instead.
- Customer quotes and deal drivers that mention the capability, to see who relied on it and why.
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
```

### Fact-check drafted release notes

```
Using Calven MCP, fact-check these release notes.

FILL IN
- Notes: [paste the notes]

CONTEXT
The notes are as drafted. Every capability, integration and pricing claim must be right.

PULL FROM THE UNIVERSE
- The product brief and the claims register.

CHECK
- Mark each claim correct, overstated, stale or not in the brief, with the fix.

OUTPUT
The notes annotated.

GROUNDING
Confirm only against the Universe and cite the section.
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

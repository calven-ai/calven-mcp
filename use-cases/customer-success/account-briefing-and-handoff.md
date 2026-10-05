# Account briefing and handoff

**Team:** Customer success · also sales, solutions engineering
**Impact:** High. The first CS call sets the tone for the whole contract. A CSM who walks in knowing why the customer bought, who was in the deal, what they said they needed and what the rep promised starts from trust instead of discovery.
**Prerequisites:** CRM connected (account, contacts, deal), call transcripts ingested (the sales calls), win/loss surveys running (the buyer's own account of the decision). Personas approved for the stakeholder read. Competitors tracked for who else they evaluated.

## What the team is trying to do

Get everything the company knows about a new (or newly reassigned) account into one brief before the first conversation: the deal, the people, the stated needs, the alternatives considered, the risks, the promises. Done means a one-page brief the CSM reads in five minutes and a handoff checklist with the rep. Without the company's own record, the handoff is a Slack message and the customer repeats themselves.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pull the deal | What they bought, amount, stage history, who owned it | The CRM deal: type, amount band, stage history, lead source, competitors, loss or win context, owner | CRM deals |
| 2 | Map the people | Who was in the deal and their role | Contacts with buying role and lifecycle stage; the persona each maps to | CRM contacts, personas |
| 3 | Read why they bought | The reasons in their words | Deal drivers for the won deal, the buyer's survey answers and summary, quotes from the sales calls | Deal drivers, surveyed deals, survey responses, quotes |
| 4 | Read what they worried about | Objections, competitors, risks | Objection and competitor-mention quotes; the battlecard for the rival they considered; drivers that hurt | Quotes, competitor battlecard, deal drivers |
| 5 | Check what was promised | Capabilities and timelines the rep claimed | Vendor quotes from the rep on the calls (value claims, caveats, next steps) against the product brief | Vendor quotes, product brief |
| 6 | Profile the account | Firmographics, fit, triggers | Account industry, size, region, ICP fit tier, triggers | CRM accounts |
| 7 | Write the brief | One page | The brief in the schema below | All above |
| 8 | Handoff meeting | Rep and CSM align | Calven does not help here beyond the checklist | |
| 9 | Log and plan | CRM notes, success plan | Calven does not help here (see onboarding kickoff) | |

## Recommended prompts

### Step 1 to 7: the one-page brief

```
Using Calven MCP, brief me on [account] before my first call as their CSM.

CONTEXT
[account] signed on [date]. I am taking over from the rep. I want everything the company knows, in one page.

PULL FROM THE UNIVERSE
- The CRM deal: what they bought, amount band, stage history, lead source, competitors in play, owner.
- The contacts on the account with buying role and the persona each maps to.
- The deal drivers that decided the deal, the buyer's survey answers if any, and the customer quotes from the sales calls, by category.
- Vendor quotes from our rep on those calls: value claims, caveats and next steps.
- The account's industry, size, region, ICP fit tier and triggers.

BUILD
- Why they bought, in their words (three drivers, each with the quote).
- Who is who: a table of contacts, role, persona, what each said.
- What they worried about: objections, the competitor they considered, what tipped it.
- What was promised: each rep claim with whether the product brief supports it.
- Risks I should watch, grounded in what was said.
- Five questions for the first call that build on the above instead of repeating it.

OUTPUT
A one-page brief with sources.

GROUNDING
Use only the Universe and cite it. Do not infer needs from the industry. If the account has no calls or survey, say so and give me the CRM facts alone.

[name the account]
```

### Step 5: promised versus true

```
Using Calven MCP, check what our rep promised [account] against the product brief.

CONTEXT
I want to know before the kickoff whether anything said in the sales cycle is not true or not shipped.

PULL FROM THE UNIVERSE
- Vendor quotes from the [account] calls tagged value claim, differentiation, proof point, pricing or next step.
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes since the deal closed.

CHECK
- For each rep claim: supported by the brief, overstated, or not in the brief.
- Anything that changed since the close that affects a promise.

OUTPUT
A table of claims with verdicts, then the two I should raise with the rep.

GROUNDING
Judge only against the Universe and cite the section. Where the brief is silent, say "not in the brief".

[name the account]
```

### Step 2: stakeholder read

```
Using Calven MCP, map the people on [account] to our personas.

CONTEXT
I want to know who I am talking to and what each cares about.

PULL FROM THE UNIVERSE
- The contacts on [account] with title, buying role and lifecycle stage.
- The persona canvas each maps to: goals and KPIs, pains, objections, messaging hooks.
- Each contact's own quotes from the calls.

BUILD
- A table: contact, role, persona, what the persona cares about, what this person actually said.
- Who is missing: personas we usually need on a healthy account that have no contact here.

OUTPUT
The table and the gap.

GROUNDING
Use only the Universe and cite it. Do not assign a persona to a contact whose title does not fit; say unknown.

[name the account]
```

### Handoff checklist

```
Using Calven MCP, write the handoff checklist for [account] between [rep] and me.

CONTEXT
We have a 30-minute handoff. I want to leave it with answers, not stories.

PULL FROM THE UNIVERSE
- The deal record, drivers and quotes for [account].
- The rep's own quotes on the calls.

BUILD
- Ten questions for the rep, each tied to something in the record: a promise, a worry, a person, a competitor, a timeline.
- Three facts I will confirm with the customer rather than the rep.

OUTPUT
The checklist.

GROUNDING
Use only the Universe and cite it.

[name the account and the rep]
```

## Ad hoc questions

- Why did [account] choose us? Quote the buyer.
- Who was the champion on the [account] deal, and who was the economic buyer?
- Which competitor did [account] evaluate, and what tipped it?
- What did [contact] at [account] say they needed in the first 90 days?
- Did our rep promise anything to [account] that is not in the product brief?
- What objections did [account] raise during the sale?
- What is [account]'s ICP fit tier and segment?
- Which persona is [contact]?
- What did [account] say about pricing?
- Has anything changed in the product since [account] signed?
- What lead source did the [account] deal come from?
- Summarise the [account] sales calls in five lines.

## Good practice

- Run the brief before the handoff meeting, not after. Use the meeting to confirm, not to collect.
- Ask for quotes, not summaries, on why they bought. The success plan will reuse the customer's words.
- Run the promise check every time. Most early churn starts with a sentence a rep said.
- Map contacts to personas and look for the missing one. A single-threaded account is a renewal risk from day one.
- Ingest the handoff call. It becomes the first CS conversation in the record.

## Not covered today

- Contract terms, entitlements, implementation tickets and the project plan are outside Calven.
- Product usage and health scores are not in Calven.
- Calven does not write the CRM note or the success plan; the AI tool drafts them and you paste.

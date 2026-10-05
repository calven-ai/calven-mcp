# Account briefing and handoff


You've just picked up an account, and without the record the handoff is a Slack message and the customer repeats themselves. You get a one-page brief you read in five minutes: the deal, the people, the stated needs, the alternatives considered, the risks and the promises, plus a handoff checklist for the rep. Calven pulls it from everything the company already knows about the account.

## Prompts

### Build a one-page account brief

```
Using Calven MCP, brief me on the account below before my first call as their CSM.

FILL IN
- Account: [account]
- Signed: [signature date]

CONTEXT
The account signed on the date above. I am taking over from the rep. I want everything the company knows, in one page.

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
```

### Check rep promises against the brief

```
Using Calven MCP, check what our rep promised the account below against the product brief.

FILL IN
- Account: [account]

CONTEXT
I want to know before the kickoff whether anything said in the sales cycle is not true or not shipped.

PULL FROM THE UNIVERSE
- Vendor quotes from the account's calls tagged value claim, differentiation, proof point, pricing or next step.
- The product brief: capabilities, integrations, pricing and packaging.
- Product changes since the deal closed.

CHECK
- For each rep claim: supported by the brief, overstated, or not in the brief.
- Anything that changed since the close that affects a promise.

OUTPUT
A table of claims with verdicts, then the two I should raise with the rep.

GROUNDING
Judge only against the Universe and cite the section. Where the brief is silent, say "not in the brief".
```

### Map the account's people to personas

```
Using Calven MCP, map the people on the account below to our personas.

FILL IN
- Account: [account]

CONTEXT
I want to know who I am talking to and what each cares about.

PULL FROM THE UNIVERSE
- The contacts on the account with title, buying role and lifecycle stage.
- The persona canvas each maps to: goals and KPIs, pains, objections, messaging hooks.
- Each contact's own quotes from the calls.

BUILD
- A table: contact, role, persona, what the persona cares about, what this person actually said.
- Who is missing: personas we usually need on a healthy account that have no contact here.

OUTPUT
The table and the gap.

GROUNDING
Use only the Universe and cite it. Do not assign a persona to a contact whose title does not fit; say unknown.
```

### Write the rep handoff checklist

```
Using Calven MCP, write the handoff checklist for the account below between the rep and me.

FILL IN
- Account: [account]
- Rep: [rep]

CONTEXT
We have a 30-minute handoff. I want to leave it with answers, not stories.

PULL FROM THE UNIVERSE
- The deal record, drivers and quotes for the account.
- The rep's own quotes on the calls.

BUILD
- Ten questions for the rep, each tied to something in the record: a promise, a worry, a person, a competitor, a timeline.
- Three facts I will confirm with the customer rather than the rep.

OUTPUT
The checklist.

GROUNDING
Use only the Universe and cite it.
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

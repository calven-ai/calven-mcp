# Inbound replies

**Team:** Business development · also demand generation, customer support
**Impact:** Medium. The first company to reply usually wins the inbound lead; a reply in minutes that answers the specific question and qualifies against the ICP beats a fast template.
**Prerequisites:** ICP approved, personas approved, product brief approved. Better with CRM connected (is the account known) and competitors tracked.

## What the team is trying to do

Answer an inbound lead fast and specifically: the question they asked, the next step that fits their persona and fit tier, and nothing the product does not do. Done means a reply under five minutes that qualifies as it answers. Without the company's knowledge the SDR sends the template and books a demo for everyone.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Triage | Support question, evaluation or active buying? | Calven does not help here | |
| 2 | Check fit | Is the account in profile? | Fit tier if known; the ICP attributes and disqualifiers if not | CRM accounts, ICP |
| 3 | Place the persona | Who is asking | The persona for the title and what they care about | Persona canvas |
| 4 | Answer the question | Pricing, integration, capability, comparison | The product brief for facts; the battlecard for comparisons | Product brief, competitor battlecard |
| 5 | Pick the next step | Demo, trial, call, content | The step that fits the persona and the stage | Messaging matrix (persona × stage) |
| 6 | Write the reply | Short, specific, one ask | The reply in the persona's words | Persona canvas, quotes |
| 7 | Send, log, route | Reply, update, hand off | Calven does not help here | |

## Recommended prompts

### Steps 2 to 6: the reply

```
Using Calven MCP, draft my reply to this inbound lead.

CONTEXT
[contact], [title] at [account], sent the message at the bottom through [form / chat / email]. I want to reply in the next five minutes with an answer to their question and the right next step.

PULL FROM THE UNIVERSE
- The account's ICP fit if we hold it; otherwise the ICP attributes I should check.
- The persona for this title: what they care about and what they find credible.
- The product brief for whatever they asked about; the battlecard if they named a competitor.

WRITE
- Under 100 words. Answer the question directly, one line on why it matters for their persona, one next step.
- One qualifying question woven in.

OUTPUT
The reply, plus one line on fit and the step to log.

GROUNDING
Use only the product brief, battlecard and persona in the Universe. Do not claim a capability or price the brief does not state; if it is silent, say what we can confirm on a call.

[paste the inbound message and name the contact's title and account]
```

### Step 4: a comparison question

```
Using Calven MCP, answer "how do you compare to [competitor]?" for an inbound [persona].

PULL FROM THE UNIVERSE
- The battlecard for [competitor]: where we win, where we lose, talk track.
- The product brief for the capabilities the comparison turns on.

WRITE
- Three honest lines: where we are stronger, where they are, the question to ask to find out which matters to them.

OUTPUT
The three lines and the follow-up question.

GROUNDING
Use only the battlecard and brief in the Universe. Be honest about where we lose.

[name the competitor and the persona]
```

### Step 2: fit when the account is unknown

```
Using Calven MCP, is a [industry], [size], [region] company that uses [tech] in our ICP?

PULL FROM THE UNIVERSE
- The ICP: firmographic and technographic attributes, segment tiers, disqualifiers.

OUTPUT
Likely tier, the attributes that put it there, and what to confirm on the call.

GROUNDING
Judge only against the ICP in the Universe.

[describe the account]
```

## Ad hoc questions

- Does our product do [capability]?
- What plan includes [feature]?
- How do we compare to [competitor] on [capability]?
- Is a [title] a buyer, a user or a stakeholder for us?
- What is the right next step for a [persona] at the evaluation stage?
- Is [account] in our CRM, and what is its fit?
- What integrations do we have?
- What should I ask a [persona] to qualify them?
- What do we say when someone asks about pricing before a call?
- Which disqualifier should I check for a [industry] lead?

## Good practice

- Paste the exact inbound message. The reply answers their question, not the category's.
- Ask for under 100 words. Speed and brevity are the point.
- Let the brief say no. "Not in the brief" is a better reply than a promise.
- Qualify in the reply, not after. One question is enough.
- Save the reply prompt as a snippet; it runs the same for every lead.

## Not covered today

- Routing, SLA timers, and CRM lifecycle updates.
- Chat and form tooling.
- The lead's own site or news.

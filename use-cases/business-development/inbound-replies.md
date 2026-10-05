# Inbound replies


An inbound lead just asked a question and you want to answer it in under five minutes. You send a reply that answers what they asked, proposes the next step for their persona and fit tier, and qualifies as it answers, without claiming anything the product doesn't do. Calven adds the company's knowledge, so you're not sending the template and booking a demo for everyone.

## Prompts

### Draft a reply to an inbound lead

```
Using Calven MCP, draft my reply to this inbound lead.

FILL IN
- Contact: [contact]
- Title: [title]
- Account: [account]
- Channel: [form / chat / email]
- Message: [paste the inbound message]

CONTEXT
The contact sent the message through the channel above. I want to reply in the next five minutes with an answer to their question and the right next step.

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
```

### Answer how we compare to a competitor

```
Using Calven MCP, answer "how do you compare to" the competitor below for an inbound lead from this persona.

FILL IN
- Competitor: [competitor]
- Persona: [persona]

PULL FROM THE UNIVERSE
- The competitor's battlecard: where we win, where we lose, talk track.
- The product brief for the capabilities the comparison turns on.

WRITE
- Three honest lines: where we are stronger, where they are, the question to ask to find out which matters to them.

OUTPUT
The three lines and the follow-up question.

GROUNDING
Use only the battlecard and brief in the Universe. Be honest about where we lose.
```

### Check ICP fit for an unknown account

```
Using Calven MCP, is the company below in our ICP?

FILL IN
- Industry: [industry]
- Size: [size]
- Region: [region]
- Tech: [tech they use]

PULL FROM THE UNIVERSE
- The ICP: firmographic and technographic attributes, segment tiers, disqualifiers.

OUTPUT
Likely tier, the attributes that put it there, and what to confirm on the call.

GROUNDING
Judge only against the ICP in the Universe.
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

# Escalation handling


An unhappy customer just wrote in, and the easy replies are defensive or over-promise. You get a response that acknowledges the specific problem, says what the product does and doesn't do and what changed or will be investigated, plus an internal brief and a note for the sponsor. Calven keeps all three consistent with the record.

## Prompts

### Draft the escalation reply

```
Using Calven MCP, help me respond to an escalation from the account below.

FILL IN
- Complaint: [paste the complaint]
- Account: [account]
- Contact: [contact]
- Topic: [topic]

CONTEXT
The contact wrote the complaint above. I want a reply that is honest about what the product does, acknowledges what they were promised, and names a next step.

PULL FROM THE UNIVERSE
- Quotes and deal drivers from the account on what they bought for, and any rep claim on this topic.
- The product brief on the topic, including known weaknesses, and product changes on it.
- Negative quotes on the topic from other accounts, to know if this is a pattern.

WRITE
- A reply under 150 words: acknowledge the specific problem, state what the product does and does not do, say what we will do and by when I decide, and offer a call.
- A line I must not write, because the brief does not support it.

OUTPUT
The reply and the warning.

GROUNDING
Use only the Universe and cite it. Do not promise a fix or a timeline; leave a placeholder for me.
```

### Write the internal escalation brief

```
Using Calven MCP, write the internal brief for the escalation from the account below.

FILL IN
- Account: [account]
- Topic: [topic]

CONTEXT
I need product, support and my lead aligned in five minutes of reading.

PULL FROM THE UNIVERSE
- What the account bought for and what was promised, from drivers, quotes and vendor quotes.
- The product brief on the topic and the relevant product changes.
- How many other accounts raised the same topic, with quotes.
- Stakeholders on the account by role.

BUILD
- The complaint in one line. The expectation, with the quote. The product truth. The pattern across accounts. The stakeholders at risk. What I need from each team.

OUTPUT
The brief.

GROUNDING
Use only the Universe and cite it. Do not estimate the fix.
```

### Write the note to the sponsor

```
Using Calven MCP, write a note to the sponsor below about the escalation.

FILL IN
- Sponsor: [sponsor]
- Account: [account]
- Persona: [sponsor's persona]

CONTEXT
The sponsor is the persona above. They have not been in the thread. I want them to hear it from us first.

PULL FROM THE UNIVERSE
- The persona's canvas: KPIs, pains, what they need to believe.
- What the account bought for, in the sponsor's own words if they spoke.

WRITE
- Four sentences: what happened, what it means for their goal, what we are doing, when they will hear from us.

OUTPUT
The note.

GROUNDING
Use only the Universe and cite it.
```

## Advanced prompts

### Build a fault tree of the escalation

```
Build a fault tree for this escalation and find its root cause before I reply. Use Calven MCP for what we promised, what the product does and what changed.

FILL IN
- Account: [account]
- The escalation: [paste the email or ticket summary]
- What I know: [anything from support, engineering or usage data]

CONTEXT
Escalations get answered at the symptom. If the cause is a promise our rep made, a fix to the product won't calm the sponsor, and vice versa.

FROM CALVEN
- Our reps' quotes on the account's sales calls: value claims and caveats.
- The product brief's capabilities and known weaknesses for the area.
- Product changes in the area in the last six months.
- Quotes from other customers about the same issue.

METHOD
- Put the failure the customer describes at the top. Branch into four causes: product gap, product change, expectation set in the sale, and onboarding or configuration.
- Under each, list the conditions that would have to be true, and mark each true, false or unknown from the evidence.
- Find the minimal cut set: the smallest combination of true conditions that explains the escalation.
- Say what to check to turn the biggest unknown into a known.

OUTPUT
The fault tree as an indented list with evidence on each node, the root cause in two lines, and the first sentence of the reply that addresses the cause rather than the symptom.

GROUNDING
Every node cites a quote, the brief or a change, or is marked unknown. Don't invent a promise or a product behaviour the record doesn't hold.
```

### Choose the remedy with a decision tree

```
Choose how to resolve this escalation by laying out the remedies as a decision tree. Use Calven MCP for what the account cares about, its renewal context and how similar complaints ended.

FILL IN
- Account: [account]
- The escalation: [paste the summary]
- Remedies on the table: [credit, workaround, exec call, roadmap conversation, re-onboarding, anything else]
- ARR and renewal date: [ARR, renewal date]

CONTEXT
Each remedy costs something and buys something. The loudest option, a credit, often buys the least.

FROM CALVEN
- Why the account bought, from deal drivers and buyer quotes.
- Quotes from other customers with the same complaint, and whether those accounts renewed.
- Deal drivers from lost renewals that match the issue.
- The sponsor persona's goals and objections.

MODEL
- For each remedy: cost, probability the customer accepts it, probability of renewal if they do and if they don't.
- Estimate the probabilities from the matched cases where they exist and a stated assumption where they don't.
- Roll back the tree to expected ARR retained minus cost. Show the tree as an indented list.
- Test the result: how wrong would the best remedy's acceptance probability have to be before the second best wins?

OUTPUT
The tree, the recommended remedy with its expected value, the break-even probability, and the message that offers it in the sponsor's terms.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a matched case; if there are none, say the probabilities are assumptions.
```

## Ad hoc questions

- What did [account] buy from us for?
- Did our rep promise [account] anything about [topic]?
- What does the product brief say about [topic], including weaknesses?
- Has anything changed in [area] recently?
- Have other customers complained about [topic]? Quote them.
- Which theme does this complaint belong to, and how many mentions does it have?
- Who is the sponsor at [account]?
- Write an honest two-line acknowledgement of a problem with [feature].
- Which customers raised the same issue as [account], and did they renew?
- Did any lost renewal list [topic] as a deciding driver?
- What did our rep say about [area] on the [account] deal, word for word?
- Which product change in [area] could have caused this?
- How did customers describe [feature] when it worked for them?
- Which escalation themes grew this quarter compared with last?
- What does the sponsor persona care about that the escalation threatens?

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

## Ad hoc questions

- What did [account] buy from us for?
- Did our rep promise [account] anything about [topic]?
- What does the product brief say about [topic], including weaknesses?
- Has anything changed in [area] recently?
- Have other customers complained about [topic]? Quote them.
- Which theme does this complaint belong to, and how many mentions does it have?
- Who is the sponsor at [account]?
- Write an honest two-line acknowledgement of a problem with [feature].

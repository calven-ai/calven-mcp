# Escalation handling

**Team:** Customer success · also support, leadership
**Impact:** Medium. An escalation is answered well when the CSM knows what the customer bought for, what the product actually does, what changed, and what we said before. Calven holds all four; the ticket history and the fix live elsewhere.
**Prerequisites:** call transcripts ingested (what this account said), product brief approved, own website and docs monitored (product changes). Win/loss surveys running adds the original expectations. CRM connected adds the stakeholders.

## What the team is trying to do

Respond to an unhappy customer with a reply that acknowledges the specific problem, states what the product does and does not do, says what changed or will be investigated, and keeps the sponsor informed. Done means a written response, an internal brief, and a sponsor note, all consistent with the record. Without the company's own record, the response is defensive or over-promises.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Understand the complaint | What exactly went wrong | Calven does not help here (the ticket) | |
| 2 | Recall the expectation | What they were told and bought for | Quotes and drivers from the deal; rep claims from the calls | Quotes, deal drivers, vendor quotes |
| 3 | Check the product truth | What the product does on this topic | Product brief including known weaknesses; product changes | Product brief, product changes |
| 4 | Check the pattern | Other customers with the same complaint | Negative quotes and product feedback on the topic across accounts; themes | Quotes, themes |
| 5 | Write the response | Honest, specific, next step | The reply in the approved voice with the honest caveat | Messaging, product brief |
| 6 | Brief internally | Product, support, leadership | An internal brief with the expectation, the truth and the pattern | All above |
| 7 | Inform the sponsor | Keep the buyer in the loop | A sponsor note in the persona's language | Persona canvas |
| 8 | Fix and follow up | Ticket, release, call | Calven does not help here | |

## Recommended prompts

### Step 2 to 5: the response

```
Using Calven MCP, help me respond to an escalation from [account].

CONTEXT
[contact] wrote: "[paste the complaint]". I want a reply that is honest about what the product does, acknowledges what they were promised, and names a next step.

PULL FROM THE UNIVERSE
- Quotes and deal drivers from [account] on what they bought for, and any rep claim on this topic.
- The product brief on [topic], including known weaknesses, and product changes on it.
- Negative quotes on [topic] from other accounts, to know if this is a pattern.

WRITE
- A reply under 150 words: acknowledge the specific problem, state what the product does and does not do, say what we will do and by when I decide, and offer a call.
- A line I must not write, because the brief does not support it.

OUTPUT
The reply and the warning.

GROUNDING
Use only the Universe and cite it. Do not promise a fix or a timeline; leave a placeholder for me.

[paste the complaint; name the account, contact and topic]
```

### Step 6: the internal brief

```
Using Calven MCP, write the internal brief for the [account] escalation.

CONTEXT
I need product, support and my lead aligned in five minutes of reading.

PULL FROM THE UNIVERSE
- What [account] bought for and what was promised, from drivers, quotes and vendor quotes.
- The product brief on [topic] and the relevant product changes.
- How many other accounts raised the same topic, with quotes.
- Stakeholders on the account by role.

BUILD
- The complaint in one line. The expectation, with the quote. The product truth. The pattern across accounts. The stakeholders at risk. What I need from each team.

OUTPUT
The brief.

GROUNDING
Use only the Universe and cite it. Do not estimate the fix.

[name the account and topic]
```

### Step 7: the sponsor note

```
Using Calven MCP, write a note to [sponsor] at [account] about the escalation.

CONTEXT
The sponsor is a [persona]. They have not been in the thread. I want them to hear it from us first.

PULL FROM THE UNIVERSE
- The [persona] canvas: KPIs, pains, what they need to believe.
- What [account] bought for, in the sponsor's own words if they spoke.

WRITE
- Four sentences: what happened, what it means for their goal, what we are doing, when they will hear from us.

OUTPUT
The note.

GROUNDING
Use only the Universe and cite it.

[name the sponsor, account and persona]
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

## Good practice

- Read the expectation before the complaint. Most escalations are a gap between a promise and the brief.
- State what the product does not do. A caveat now beats a second escalation later.
- Check the pattern. One complaint is a ticket; five is a product gap for the PMM and product.
- Tell the sponsor first, in their language, before they hear it sideways.
- Never promise a fix date from the AI tool. Product owns that.

## Not covered today

- Ticket history, root cause, fixes and release dates come from support and engineering.
- SLAs, credits and contract remedies are decided outside Calven.

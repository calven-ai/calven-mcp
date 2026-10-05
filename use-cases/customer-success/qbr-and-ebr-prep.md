# QBR and EBR prep

**Team:** Customer success · also account management, leadership
**Impact:** High. The business review is where value is proved and the renewal is set up. A deck built on what the customer said they wanted, what changed in the product and in their market, and what is next, takes an afternoon instead of a week and lands with the sponsor.
**Prerequisites:** CRM connected (account, contacts, deals), call transcripts ingested (what the customer said this quarter), own website monitored (product changes), strategy documents approved (messaging, product brief). Market research run adds the market slide. Usage, outcomes and support metrics come from outside.

## What the team is trying to do

Run a QBR with the day-to-day owner and an EBR with the sponsor that recap the goals, show the value, name the risks, and agree the next quarter. Done means a deck outline with evidence per slide, speaker notes, and the questions to ask. Without the company's own record, the deck is usage charts and a roadmap, and the sponsor stops coming.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Recap the goals | What they bought for, agreed in the success plan | The stated outcomes from the sales cycle and kickoff, verbatim | Quotes, survey responses, deal drivers |
| 2 | Show value delivered | Outcomes, usage, wins this quarter | Calven does not hold usage or outcomes. It supplies what the customer said went well this quarter | Quotes (positive, by account) |
| 3 | Name what changed | Product changes relevant to them | Product changes this quarter mapped to the customer's use cases | Product changes, product brief |
| 4 | Surface risks and asks | What they complained about, asked for, compared | Negative quotes, product feedback, competitor mentions from this account this quarter | Quotes |
| 5 | Market context (EBR) | What is moving in their market | Trends and opportunities with a so-what for their segment | Trends, market opportunities |
| 6 | Propose next quarter | Use cases to add, expansion, stakeholders to involve | Product brief use cases not yet in play; cross-sell paths; missing personas on the account | Product brief, personas, CRM contacts |
| 7 | Build the deck | Slides and notes | The outline and notes with sources | All above |
| 8 | Prep the sponsor read | What the sponsor cares about | The sponsor's persona canvas: KPIs, pains, objections | Persona canvas |
| 9 | Run and follow up | Deliver, capture actions | Calven does not help here (ingest the call after) | |

## Recommended prompts

### Step 1 to 7: the deck outline

```
Using Calven MCP, build the QBR outline for [account] for [quarter].

CONTEXT
The audience is [contact], [title], the day-to-day owner. 30 minutes, 10 slides. Usage and outcome numbers are pasted at the bottom; everything else should come from the Universe.

PULL FROM THE UNIVERSE
- The outcomes [account] said they wanted, from the sales calls and survey, verbatim.
- Positive and negative quotes from [account] this quarter, by category.
- Product changes this quarter, mapped to the use cases [account] bought.
- Product brief use cases and cross-sell paths they are not using yet.
- The contacts on the account and the personas missing.

BUILD
- Slide by slide: goals recap (their words), what we delivered (my numbers plus their quotes), what changed in the product (for them), what you told us this quarter (feedback and asks), risks and how we address them, next quarter plan, stakeholders to involve, actions and owners.
- Speaker notes per slide with the source.
- Three questions to ask them.

OUTPUT
The outline with notes.

GROUNDING
Use only the Universe for everything except the numbers I pasted, and cite it. Do not claim outcomes the customer did not state.

[name the account, quarter and attendee; paste usage and outcome numbers]
```

### Step 5 and 8: the EBR for the sponsor

```
Using Calven MCP, prepare the executive business review for [account].

CONTEXT
The audience is [sponsor], [title], the executive sponsor. 45 minutes, twice a year. They want business impact and direction, not features.

PULL FROM THE UNIVERSE
- The [persona] canvas for the sponsor: company objectives, KPIs, pains.
- The outcomes [account] bought for and what their team said this year, verbatim.
- Approved market trends and opportunities with a so-what for [segment].
- Our positioning and the proof points, for the direction slide.
- The expansion paths in the product brief.

BUILD
- Five sections: where you started (their words), what changed for your business (my numbers plus their quotes), what is moving in your market (trends), where we are going (positioning and relevant changes), what we propose next (expansion, stakeholders, a joint goal).
- The sponsor's likely objection to each proposal, from the canvas, and the answer.

OUTPUT
The outline with notes and the three decisions to ask for.

GROUNDING
Use only the Universe and the numbers I paste, cited. Do not present a trend as current if its last-seen date is old.

[name the account, sponsor, persona and segment; paste the numbers]
```

### Step 4: what they told us this quarter

```
Using Calven MCP, summarise what [account] said this quarter.

CONTEXT
I want the feedback, asks and comparisons from every call with [account] since [date], for the QBR.

PULL FROM THE UNIVERSE
- Customer quotes from [account] since [date], by category and sentiment, with speaker and date.
- Competitor mentions from those calls.
- Conversations with [account] since [date].

BUILD
- Positive, negative, asks, competitor mentions. Each with the quote and who said it.
- The one thing to address before the QBR.

OUTPUT
A short summary.

GROUNDING
Use only quotes and conversations in the Universe, verbatim and cited. If no calls were ingested, say so.

[name the account and the date]
```

### Review: an existing deck

```
Using Calven MCP, review my QBR deck for [account].

CONTEXT
Below is the deck text. I want to know whether it reflects what the customer said, whether product claims are right, and what the sponsor persona would push on.

PULL FROM THE UNIVERSE
- Quotes and survey answers from [account].
- The product brief and product changes.
- The persona canvas for the attendee.

CHECK
- Each goal and value statement: supported by what they said?
- Each product claim: in the brief?
- Each slide: what the persona would ask, and whether the deck answers it.

OUTPUT
The deck annotated, then the three edits.

GROUNDING
Use only the Universe and cite it.

[paste the deck text and name the account and persona]
```

## Ad hoc questions

- What did [account] say they wanted from us when they bought?
- What has [account] said on calls this quarter?
- What product changes this quarter affect [account]'s use cases?
- Which product use cases is [account] not using that fit their outcomes?
- Has anyone at [account] mentioned a competitor this year?
- What is [sponsor persona] measured on?
- Which personas are missing from the [account] contact list?
- What market trend should I show [account] in [segment]?
- What objection would [persona] raise to an expansion proposal?
- Write the goals-recap slide for [account] in their own words.

## Good practice

- Open with their words from the sales cycle. It proves the quarter was about their goal, not your product.
- Paste usage and outcome numbers into the prompt. Calven does not have them; the AI tool combines them with the record.
- Build the EBR from the sponsor's persona canvas. The KPIs on the canvas are the slide titles.
- Run the "what they told us" prompt before every review. The ask they made in week three is the one they remember.
- Ingest the QBR recording. Next quarter's recap starts from it.

## Not covered today

- Usage, adoption, outcome metrics, support history and health scores come from the product, CS and support tools.
- Internal roadmap commitments are not in Calven; product management confirms them.
- Deck design and delivery happen outside.

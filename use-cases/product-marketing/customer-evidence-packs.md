# Customer evidence packs

**Team:** Product marketing · also customer marketing, demand generation, sales enablement, content marketing
**Impact:** High. Every page, deck, email and call needs proof; a pack of verbatim quotes grouped by theme and tied to deals is reused by every team instead of each one re-reading calls.
**Prerequisites:** transcripts ingested (conversations, quotes, themes). Better with win/loss surveys running (deal drivers with evidence quotes, surveyed-deal summaries) and CRM connected (account and deal context).
**Related:** [Customer quotes](../customer-marketing/customer-quotes.md) is where quotes are sourced and approved for marketing use.

## What the team is trying to do

Assemble the customer's own words as proof: for a theme, a persona, a competitor, a feature or a campaign. Done means a pack of verbatim, attributed quotes grouped by theme, with the strongest first, how often the theme appears, and the context each quote came from, in the format the asset needs. Without a quote base the proof is the same two logos and a sentence the writer made up.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the ask | Which asset, which themes, which persona or segment | The themes customers raise most, with counts | Themes, voice-of-customer dashboard |
| 2 | Pull the quotes | Find the verbatims | Quotes by category, type, highlight, sentiment, persona role, competitor, account | Quotes |
| 3 | Pull the deal evidence | Why real deals were won | Deal drivers that helped, with evidence quotes; surveyed-deal summaries | Deal_drivers, surveyed_deals |
| 4 | Rank and group | Strongest first, grouped by theme | The AI tool ranks by specificity, outcome and recency | |
| 5 | Check attribution | Who said it, where, can it be used | Author role, account, conversation, date | Quotes, customer_conversations |
| 6 | Build the language bank | The recurring phrases, not just quotes | Phrases per theme with frequency | Quotes, themes |
| 7 | Format for the asset | Testimonial wall, objection doc, slide, proof section | Drafted from the above | |
| 8 | Get usage approval | Ask the customer for permission to publish | Calven does not help here | |

## Recommended prompts

### Step 1 and 2: evidence pack by theme

```
Using Calven MCP, assemble a customer-evidence pack on [theme or topic].

CONTEXT
I need real customer proof for [asset: a campaign, a slide, an objection-handling doc]. The audience is [persona].

PULL FROM THE UNIVERSE
- Themes about [topic], with how many mentions and the sentiment.
- Verbatim customer quotes under those themes, with the speaker's role, account, date and the conversation they came from.
- Quotes tagged quantified outcome, time to value or competitive win on this topic.

ASSEMBLE
- Group quotes by theme. Under each, the single strongest quote first, then supporting ones.
- Mark each quote with role, account and date.
- Note how often each theme appears, so common reads as common and rare as rare.

OUTPUT
The pack in the format I name, every quote verbatim and attributed.

GROUNDING
Use only quotes in the Universe. Never paraphrase a quote into something stronger. If a theme has no quotes, say so.

[name the topic, the persona and the asset]
```

### Step 3: proof from won deals

```
Using Calven MCP, give me the proof from deals we won against [competitor] or in [segment].

CONTEXT
Sales wants displacement proof for the battlecard and the deck.

PULL FROM THE UNIVERSE
- Deal drivers that helped us in won deals against [competitor] (or in [segment]), with the evidence quote and the deal.
- The surveyed-deal summaries for the three largest of those wins.

BUILD
- The reasons we won, ranked by how many deals they decided, each with the buyer's quote.
- Three win stories in four lines each: situation, alternative, why us, outcome in their words.

OUTPUT
A proof sheet, every quote cited to its deal and respondent.

GROUNDING
Quotes verbatim from responses and drivers. Deal names and amounts follow the workspace security settings; if withheld, say so. Do not invent outcomes.

[name the competitor or segment]
```

### Step 6: language bank

```
Using Calven MCP, build a customer language bank for [problem, outcome or category].

CONTEXT
Writers across marketing and sales will pull from this instead of inventing phrases.

PULL FROM THE UNIVERSE
- Quotes about [topic] by category: pain, gain, job to be done, goal, objection, buying trigger.
- The themes those quotes cluster into and their counts.

ORGANIZE
- For each theme: the recurring words and phrases, how often each appears, and one quote that uses it.
- The terms customers use for our product, the alternatives and the category.
- The words we use that customers never do.

OUTPUT
A language bank by theme, verbatim, with sources.

GROUNDING
Only language grounded in quotes. Do not polish customer wording into marketing wording.

[name the topic]
```

### Step 7: objection-handling doc from quotes

```
Using Calven MCP, build an objection-handling doc for [persona] from what customers actually said.

CONTEXT
Reps want the objections in the buyer's words and the response in a won customer's words.

PULL FROM THE UNIVERSE
- Quotes categorised as objection for [persona], ranked by theme frequency.
- Quotes from customers who had the same objection and bought anyway, and the deal drivers that answered it.
- Our messaging objection handling section.

BUILD
- For each objection: the buyer's phrasing, how often it appears, the approved response, and the customer quote that proves it.

OUTPUT
A table reps can read on a call.

GROUNDING
Objections and proof verbatim and cited. If an objection has no proof quote, say so and leave the slot empty.

[name the persona]
```

## Ad hoc questions

- What are the top three pains customers named this quarter, with quotes?
- Give me a quantified-outcome quote about [topic].
- What did [account] say about [feature]?
- Which customers mentioned [competitor], and what did they say?
- Show me positive quotes from [persona role] about onboarding.
- What is the most-mentioned theme in the last 90 days?
- Which buying triggers do customers name most?
- What do customers call [our category]?
- Which themes have negative sentiment and are growing?
- Give me three customer phrases for "[our marketing phrase]".
- Which quotes are marked as suggested marketing-ready?
- What did the buyer at [deal] say about why they chose us?

## Good practice

- Name the theme or topic, not the asset. The pack is the same whether it becomes a wall or a slide.
- Ask for role, account and date on every quote. Unattributed proof is not proof.
- Keep quotes verbatim and let the AI tool rank them. Specific beats glowing.
- Pull won-deal drivers for competitive proof; call quotes for pains and language.
- Rebuild the pack quarterly. New calls change what is common.

## Not covered today

- Permission to publish a quote with a name or logo. That is a customer marketing task outside Calven.
- Transcripts that are not ingested. Calls the voice-of-customer agent has not read do not exist to the pack.
- Deal names and amounts when the workspace withholds them.

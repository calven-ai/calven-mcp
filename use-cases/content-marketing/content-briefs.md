# Content briefs

**Team:** Content marketing · also product marketing, demand generation, agencies and freelancers
**Impact:** High. The brief decides whether a piece is on-message before a word is written. A writer with the persona, the approved message and the buyer's words produces a first draft the team can publish; one without them produces category copy the team rewrites.
**Prerequisites:** strategy documents approved (messaging, positioning, product brief, ICP), personas approved. Better with call transcripts ingested (quotes, themes) and competitors tracked (for competitive pieces). Keyword data, search intent and ranking pages stay in the SEO tool.

## What the team is trying to do

Hand a writer, agency or freelancer everything they need to write a piece the team will not have to rewrite: who it is for, the question it answers, the message it carries, the proof it uses, what the product does and does not do, and the words the reader uses. Done means the draft comes back on-message, factually right and in the buyer's language. The hard part is that the person writing the brief has the keyword and the deadline, and the knowledge about the buyer lives with the PMM, in call recordings and in the last sales deck.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Pick the topic and keyword | Keyword research, search intent, ranking pages | Calven does not help here. The SEO tool owns it | |
| 2 | Define the reader | Name the persona and funnel stage | The persona canvas: goals and KPIs, pains, jobs to be done, objections, how they talk, where they read | Persona |
| 3 | Set the angle | Decide the point of view and what the reader must believe by the end | The positioning (category frame, unique attributes), the message for this persona and stage, the trends behind the topic | Positioning, messaging, trends |
| 4 | Collect the evidence | Proof points, customer language, quotes, numbers | Verbatim quotes and themes on the topic, proof points from positioning, dashboard numbers where the company can publish them | Quotes, themes, positioning, Insights |
| 5 | State the product facts | What the product does for this topic, integrations, pricing where relevant | The product brief sections that touch the topic, and what it does not do | Product brief |
| 6 | Set the competitive frame | For comparison or category pieces, where we win and where we do not | Battlecards and dossiers for the competitors in scope | Competitor battlecard, deep dive |
| 7 | Write the outline | Headings, the questions each section answers, internal links, CTA | Buyer questions and objections to answer per section, the messaging hook for the opening | Persona canvas, messaging (objection handling) |
| 8 | Write the brief | Assemble it in the team's template | Draft the brief from steps 2 to 7 with sources per line | All of the above |
| 9 | Review the draft that comes back | Check the writer's draft | On-message check, claim check, persona reaction (see [claim checks](../product-marketing/claim-checks.md)) | Messaging, product brief, `review_against_personas` |

## Recommended prompts

### Step 2 and 3: reader and angle

```
Using Calven MCP, define the reader and the angle for a piece on [topic] aimed at [persona] at the [stage] stage.

CONTEXT
I am briefing a writer. The piece targets [keyword or question] and the reader is [persona]. I need the brief's audience and angle sections.

PULL FROM THE UNIVERSE
- The [persona] canvas: goals and KPIs, pains, jobs to be done, objections, messaging hooks, watering holes.
- Our positioning: the category frame, unique attributes and value themes that touch this topic.
- The message for this persona at this stage from the messaging matrix.

BUILD
- The reader in five lines: role, what they are measured on, the pain this topic touches, what they have tried, what they distrust.
- The angle: the one thing the reader must believe by the end, and why it follows from our positioning.
- The three questions the piece must answer, in the reader's words.
- The objection the piece should pre-empt.

OUTPUT
The audience and angle sections of a content brief, with the source for each line.

GROUNDING
Ground every line in the canvas, positioning and messaging in the Universe and cite it. Do not invent pains or goals the canvas does not list. If the persona has no canvas, say so and use the row attributes only.

[name the topic, keyword, persona and stage]
```

### Step 4: evidence and customer language

```
Using Calven MCP, collect the evidence and customer language for a piece on [topic].

CONTEXT
The writer needs real quotes, the phrases buyers use, and the proof points we are allowed to make. The reader is [persona].

PULL FROM THE UNIVERSE
- Customer quotes about [topic], the pain behind it and the outcome, with the speaker's role and account where the workspace shows them.
- The voice-of-customer themes this topic falls under and how many mentions each has.
- The proof points in our positioning that support the angle.

BUILD
- A language bank: the recurring words and phrases, grouped by problem, outcome and alternatives.
- Five quotes the writer may use verbatim, each attributed.
- The proof points, each with the quote or number behind it.

OUTPUT
The evidence section of the brief. Everything verbatim and attributed.

GROUNDING
Use only quotes and proof grounded in the Universe and cite the source for each. Do not polish customer language into marketing language. If the Universe holds fewer than five quotes on this topic, say how many it holds.

[name the topic and the persona]
```

### Step 5 and 6: product facts and competitive frame

```
Using Calven MCP, write the product-facts and competitive-frame sections of a brief on [topic].

CONTEXT
The writer must not overstate what we do or misstate a competitor. The piece mentions [product area] and may compare us with [competitor].

PULL FROM THE UNIVERSE
- The product brief sections on [product area]: capabilities, integrations, pricing where relevant, known weaknesses.
- The battlecard for [competitor]: where we win, where we lose, landmines, bullshit detector.

BUILD
- What the writer may claim about the product, in plain sentences, and what they may not.
- Where we beat [competitor] on this topic and where we do not, so the piece stays credible.
- Two trap-setting lines that expose the competitor's weakness without naming them.

OUTPUT
Two short sections for the brief, each line with its source.

GROUNDING
Ground every product fact in the product brief and every competitor fact in the battlecard, and cite them. Do not invent capabilities or competitor weaknesses. Where the brief is silent, write "not in the brief".

[name the product area and the competitor, or say "no competitor"]
```

### Step 7 and 8: outline and the full brief

```
Using Calven MCP, assemble the content brief for [working title].

CONTEXT
Below is what the SEO tool gave me: the primary keyword, secondary keywords, search intent, the ranking pages and their headings, target length, internal links and CTA. I need the rest of the brief from the Universe.

PULL FROM THE UNIVERSE
- The [persona] canvas and the message for this persona at the [stage] stage.
- Customer quotes and themes on [topic].
- The product brief sections the piece touches, and the battlecard for [competitor] if the piece compares.

BUILD
- Audience: who the reader is and what they need to believe.
- Angle and key message, tied to our positioning.
- Outline: H2 and H3 headings, the question each answers in the reader's words, the quote or proof to use in each.
- Product facts the writer may use, and the claims they may not make.
- Do-not-say list: words we avoid, claims without proof, competitor statements outside the battlecard.
- CTA and the next asset in the reader's path.

OUTPUT
The complete brief in our template, with the SEO inputs I pasted merged in and a source on every Universe line.

GROUNDING
Ground every line about the reader, the message, the product and the competitor in the Universe and cite it. Keep the SEO inputs as I gave them. Flag sections where the Universe gives the writer nothing.

[paste the SEO inputs and name the persona, stage, product area and competitor]
```

### Step 8: brief for an agency or freelancer with no context

```
Using Calven MCP, write a one-page company context sheet for an external writer.

CONTEXT
A freelancer is starting with us next week. They know nothing about the company. I want one page they read before every brief, so the briefs can stay short.

PULL FROM THE UNIVERSE
- Our positioning statement, category and one-liner.
- The value pillars and boilerplate from our messaging.
- The ICP summary and the personas we write for, with one line on each.
- The product overview and the competitors we are most often compared with.

BUILD
- Who we are and who we are for, in the writer's plain terms.
- The three things every piece should leave the reader believing.
- The personas: one paragraph each, with the words they use and the words they distrust.
- The claims we make and the claims we never make.
- The competitors: how to mention them (plain text, no links, no claims outside the battlecard).

OUTPUT
A one-page context sheet, with sources in a footnote list.

GROUNDING
Ground every line in the Universe and cite it. Do not add positioning or claims the documents do not contain.
```

### Step 9: review the draft against the brief

```
Using Calven MCP, review this draft against the brief and our approved story.

CONTEXT
Below is the writer's draft and the brief it was written from. I want to know what to send back.

PULL FROM THE UNIVERSE
- Our messaging for [persona] at the [stage] stage.
- The product brief sections the piece touches.
- The [persona] canvas, and run the persona review on the draft.

CHECK
- Where the draft drifts from the message or uses language we have moved away from.
- Every product, pricing and competitor claim: correct, wrong, stale or unverified.
- How the persona reads it: what lands, what reads as vendor copy, the line they would not believe.

OUTPUT
The draft annotated inline, then a short list of changes for the writer in priority order.

GROUNDING
Judge only against the Universe and cite what each flag conflicts with. If the draft is on-message and accurate, say so.

[paste the brief and the draft]
```

## Ad hoc questions

- Who is [persona], what are they measured on, and what do they distrust from vendors?
- What is our approved message for [persona] at the consideration stage?
- Give me the five phrases customers use most for [pain], with the quotes.
- Which proof points support the claim that [claim]?
- Does our product do [capability]? What exactly does the brief say?
- Where do we lose to [competitor] on [topic]?
- What are the top three objections from [persona] that a piece on [topic] should answer?
- Which themes from customer calls have the most mentions this quarter and no content yet?
- What words does our messaging say we avoid?
- Give me our boilerplate and one-liner for a writer's context sheet.
- Which trends in our market research are relevant to a piece on [topic]?
- What do customers say they tried before us?
- What terms do we use that customers never do?
- Can a "best [category] tools" page say [claim] about [competitor]?

## Good practice

- Paste the SEO inputs in and ask Calven only for what it holds: reader, angle, evidence, product facts, competitive frame. Mixing the two gives a thinner brief.
- Name the persona as Calven names it. "IT buyers" returns nothing; the approved persona name returns the canvas.
- Ask for quotes verbatim and attributed, and keep them that way in the brief. The writer should see the evidence, not a paraphrase.
- Give external writers the one-page context sheet once, then keep each brief to the piece.
- Ask what is missing. A brief that says "the Universe has no quotes on this topic" tells the writer to lead with the pain, not a stat.
- Run the review prompt on the draft that comes back. The brief sets the target; the review checks the hit.

## Not covered today

- Keyword research, search intent, SERP analysis, target length and internal link maps. The SEO tool owns them.
- The content library and the editorial calendar. Calven holds what a piece must say, not the pieces.
- Sending the brief or tracking the writer's progress.
- Updating the messaging when a brief exposes a gap. That happens in Calven with the messaging agent and the PMM who approves it.

# Joint value proposition


You're agreeing a joint value proposition with a partner and drafting your half before the negotiation. You come away with one page both companies can sign off on: the shared buyer, the problem only the two products solve together, the combined workflow, the proof and each side's messaging. Calven keeps your draft on positioning and true to the integration as the product brief describes it.

## Prompts

### Draft your half of the joint value prop

```
Using Calven MCP, draft our half of a joint value proposition with the partner below.

FILL IN
- Partner: [partner]
- Partner's product: [partner's product and what it does]
- Partnership type: [technology or integration]
- Persona: [likely shared buyer persona]
- Segment: [segment]

CONTEXT
We are a partner of the type above. The shared buyer is probably the persona in the segment. I need a draft on our positioning that is true to the integration as our product brief describes it.

PULL FROM THE UNIVERSE
- The ICP and the persona's canvas: jobs, pains, objections.
- The product brief: the integration with the partner's product if listed, the technical architecture, the use cases it serves.
- Our positioning: value themes, unique attributes; our messaging pillars.
- Trends or opportunities that touch the partner's category.
- Customer quotes that mention the partner, the workflow, or the combined job.

BUILD
- The shared buyer and the problem, in the buyer's words.
- What the two products do together that neither does alone, grounded in the integration the brief describes.
- Why now, from a tracked trend.
- Three joint messages, each tied to one of our pillars.
- Proof from customers, if any.

OUTPUT
A one-page draft with sources, plus a list of what I need from the partner's side.

GROUNDING
Use only the Universe for our side. If the brief does not list this integration, say so and describe only what the architecture section supports. Do not invent what the partner's product does; mark it for the partner to supply.
```

### Check what the integration actually does

```
Using Calven MCP, what does our product brief say about the integration with the partner's product below?

FILL IN
- Partner's product: [partner's product]

CONTEXT
I am about to claim things in a joint document and need the exact scope.

PULL FROM THE UNIVERSE
- The product brief integrations and technical architecture sections.
- Product changes in the last 180 days touching this integration.

ANSWER
- What the integration does, what it does not, any limits, and whether it changed recently.

OUTPUT
A short factual note with the brief section cited.

GROUNDING
Only the brief. If it does not mention the integration, say "not in the brief".
```

### Find customers who use both products

```
Using Calven MCP, which customers mention the partner's product or the combined workflow below on calls?

FILL IN
- Partner's product: [partner's product]
- Workflow: [the combined workflow]

CONTEXT
I want proof for the joint story and candidates for a joint case study.

PULL FROM THE UNIVERSE
- Quotes mentioning the partner's product or the workflow, with account, sentiment and date.
- Conversations where the topic came up.

BUILD
- A table: account, what they said, sentiment, whether it is a candidate for a case study.

OUTPUT
The table with sources, or "nothing recorded".

GROUNDING
Quote verbatim. Do not infer that an account uses the partner's product unless they said so.
```

### Check the draft against your positioning

```
Using Calven MCP, check this joint value proposition against our positioning and our competitive stance.

FILL IN
- Partner: [partner]
- Draft: [paste the draft]

CONTEXT
The draft is the version agreed with the partner. Before legal and marketing sign off I want to know where it drifts from our positioning or creates a competitive conflict.

PULL FROM THE UNIVERSE
- Our positioning and messaging.
- The competitors we track and any signal that the partner partners with one of them.

CHECK
- Lines that adopt a category frame or claim we do not use.
- Claims about our product the brief does not support.
- Any competitive conflict the signals reveal.

OUTPUT
The draft annotated, then the on-positioning version.

GROUNDING
Judge only against the Universe. If the draft is clean, say so.
```

## Advanced prompts

### Map the switching forces for the joint buyer

```
Map the four forces on a buyer deciding whether to adopt us and the partner's product together: push, pull, anxiety and habit. Use Calven MCP for the buyer's jobs, pains, triggers and fears.

FILL IN
- Partner: [partner]
- Partner's product: [partner's product]
- Persona: [persona]
- Segment: [segment]

CONTEXT
Most joint value props list what the integration does. Buyers don't switch for features. They switch when the push of the current situation and the pull of the new one beat their anxiety about change and the habit of the old way. Two vendors double the anxiety, so the message has to deal with it head-on.

FROM CALVEN
- The persona canvas: jobs to be done, pains with impact, objections.
- Customer quotes tagged Buying trigger, Pain or Objection in the segment, and any that mention the partner's product.
- The market trends tied to the persona or the segment.

METHOD
- Fill the four forces with three to five entries each, and attach a quote or a canvas line to every one.
- Split anxiety into what's specific to two vendors (who supports it, who owns the data, what breaks on an upgrade) and what's generic to any change.
- Rate each force's strength and pick the two the joint story must address first.
- Write the joint value prop so it strengthens push and pull and defuses the top anxiety by name.

OUTPUT
The forces as a four-quadrant table, the two priorities, and a joint value proposition (headline, three supporting lines, one anxiety-killer line) with every line traced to a force.

GROUNDING
Every force cites a quote, the canvas or a trend. Mark anything about the partner's product as coming from me, not Calven, and don't invent a customer who uses both.
```

### Build the joint ROI model

```
Build a joint ROI model for a customer buying us and the partner together, with a sensitivity analysis that shows what the number really hangs on. Use Calven MCP for the outcomes our customers report and the KPIs the buyer is judged on.

FILL IN
- Partner: [partner]
- Partner's product: [partner's product]
- Budget owner: [persona]
- Combined price: [our price plus theirs for a typical customer]
- Partner's outcome data: [paste what the partner can evidence for their product, or write "none"]

CONTEXT
A "better together" pitch loses to a CFO who asks what it's worth. I want a model we can both show, with the assumptions on the table and the break-even point visible.

FROM CALVEN
- Customer quotes highlighted Quantified outcome or Time-to-value, with account and date.
- The persona canvas: goals and KPIs, so the model measures what the buyer is judged on.
- Our pricing and packaging from the product brief.

MODEL
- Build the value tree: two or three outcome drivers for our product, the same for theirs, and the value of the integration on its own. Keep the three separate so nobody double-counts.
- Use the quoted outcomes as ranges, never single points.
- Calculate payback, first-year ROI and the break-even value for each driver.
- Run a tornado analysis over every input. If you can run code, build it as a spreadsheet with live formulas and the tornado chart.

OUTPUT
The model (spreadsheet or formulas), the tornado chart, the break-even line per driver, and a two-sentence ROI claim both companies can defend.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't turn one customer's quote into a typical result, and don't model the partner's value from anything but what I pasted.
```

### Price the bundle with a persona price ladder

```
Run a Van Westendorp price ladder on a joint bundle, answered by our personas, before we agree marketplace pricing with the partner. Use Calven MCP for the personas, our pricing and how buyers react to price.

FILL IN
- Partner: [partner]
- Bundle: [paste what's in it and the price options on the table]
- Personas: [persona, persona]
- Segment: [segment]

CONTEXT
A bundle priced at the sum of two list prices looks like no deal. Priced too low, it trains buyers to expect the discount. I want a defensible range before the pricing call with the partner.

FROM CALVEN
- Our pricing and packaging from the product brief.
- The persona canvases: goals, budget pains and objections.
- Price feedback on lost CRM deals in the segment, and customer quotes typed Pricing / cost.

METHOD
- For each persona, answer the four Van Westendorp questions in the first person (too cheap, a bargain, getting expensive, too expensive), reasoning from the canvas and the price evidence.
- Run each persona five times as companies of different sizes within the segment, so you get a spread, not a point.
- Plot the cumulative curves and find the acceptable range and the optimal price point. If you can run code, do it in Python and show the chart.
- Compare the range with the sum of list prices and say what discount the bundle needs, if any.

OUTPUT
The answers per persona, the curves, the acceptable range, and a recommended bundle price with the reasoning in three lines.

GROUNDING
This is a synthetic panel, so label it as one. Every price reaction cites a canvas line, a quote or deal price feedback. Don't invent a willingness to pay the evidence doesn't point to.
```

## Ad hoc questions

- Which of our personas has [partner's category] in their jobs or tools?
- What does the product brief say about our integration with [partner's product]?
- Which trend explains why a [partner's category] partnership matters now?
- Do any customers mention [partner's product] on calls?
- Which of our pillars does a joint story with [partner] support best?
- Is [partner] mentioned in any competitive signal?
- What is the approved way to describe our category next to a [partner's category] product?
- Which segment do we and [partner] both sell to, per our ICP?
- What proof points can appear in a joint one-pager?
- Did the integration with [partner's product] change recently?
- Which buying triggers in our ICP would also send a buyer looking for [partner's category]?
- Which customer quotes describe a manual step between our product and another tool?
- Which of our differentiators would a joint story blur?
- What do lost-deal buyers say about integrations, from product feedback and drivers?
- Which approved market opportunity could a joint offer with [partner] go after?
- Is there a known weakness in our product brief that [partner's product] covers?

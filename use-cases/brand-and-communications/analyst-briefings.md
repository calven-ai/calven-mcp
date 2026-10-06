# Analyst briefings and evaluations


You're briefing the four to six analysts who cover the category and answering their evaluation questionnaires, restating the same facts every cycle while the facts keep moving. You walk away with briefing content, questionnaire answers that match the product brief, and a readout that gets the analyst's view into the battlecards and the roadmap. Calven ties every answer to the positioning and the product brief, so the analyst ends up describing you the way you describe yourself.

## Prompts

### Prepare the briefing and the hard questions

```
Using Calven MCP, prepare the content for the analyst briefing below.

FILL IN
- Analyst: [analyst]
- Firm: [firm]
- Date: [date]
- Category: [the category the analyst covers]
- Months since last briefing: [months]

CONTEXT
First briefing in that many months. Agenda: company and strategy, market view, product, customers, roadmap direction (I will add roadmap myself). The analyst covers the category.

PULL FROM THE UNIVERSE
- Our positioning: category and frame of reference, unique attributes, competitive alternatives, proof points.
- The trends and market opportunities we track, with the "so what".
- The product brief: overview, capabilities, integrations, pricing and packaging, differentiators and known weaknesses.
- The ICP summary and segment tiers; customer evidence by segment with quotes.
- Analyst findings from this firm on record, if any.
- The battlecards' "where we lose" for the competitors the analyst also covers.

BUILD
- The company story in six bullets, in the positioning's terms.
- The market view: three trends and what they mean, with dates.
- The product in the analyst's categories, with the known weaknesses stated plainly.
- Customer evidence: three customers by segment with a quote each, flagged for approval.
- The ten hardest questions the analyst will ask and the honest answer with its source.

OUTPUT
A briefing outline with sources, ready to turn into slides.

GROUNDING
Ground every point in the Universe and cite it. Do not invent customer counts, market sizes or capabilities. Where the analyst has written something we disagree with, show the finding and our evidence side by side.
```

### Draft evaluation questionnaire answers

```
Using Calven MCP, draft answers to this evaluation questionnaire.

FILL IN
- Firm: [firm]
- Evaluation: [evaluation name]
- Questions: [paste the questions]

CONTEXT
The questions are a batch from the firm's questionnaire for the evaluation. Answers must be factual, consistent with what we have said before, and marked where a human must add a number or a roadmap statement.

PULL FROM THE UNIVERSE
- The product brief: every section.
- Our positioning and ICP.
- Customer accounts by segment, region and size, for customer-base questions.
- The competitive intelligence read, for competitive questions, only where the company shares those numbers.

ANSWER
- For each question: the answer from the Universe with its source, or "human input needed: <what>" where the Universe is silent.
- Flag answers that touch a known weakness and say how the brief states it.
- Keep answers to the length the questionnaire asks for.

OUTPUT
A table: question, draft answer, source, status (ready / needs human / needs number).

GROUNDING
Answer only from the Universe and cite. Never overstate a capability; the analyst will test it. Do not fill a number the Universe does not hold.
```

### Propose customer references for the evaluation

```
Using Calven MCP, propose customer references for the firm's evaluation below.

FILL IN
- Firm: [firm]
- References: [number]
- Segments: [segments or regions]
- Constraints: [paste the analyst's reference constraints]

CONTEXT
The analyst wants that many references across the segments, within the constraints they gave.

PULL FROM THE UNIVERSE
- Accounts by industry, size, region and ICP fit tier.
- Quotes on record per account with highlight tags (Quantified outcome, Time-to-value, Competitive win).
- Surveyed deals with a completed survey and a positive outcome summary.

BUILD
- A shortlist of accounts per segment with the evidence on record and the contact role, flagged where no quote exists.
- For each: the one-line story the analyst would hear.

OUTPUT
A table with sources, and the accounts to approach first.

GROUNDING
Use only accounts and quotes in the Universe and cite them. Do not promise a reference will agree; mark every one "to confirm".
```

### Turn briefing notes into an internal readout

```
Using Calven MCP, turn these analyst briefing notes into an internal readout.

FILL IN
- Analyst: [analyst]
- Competitors: [competitors]
- Notes: [paste the notes]

CONTEXT
The notes are mine from the analyst's briefing: what they said about us, about the competitors and about the market.

PULL FROM THE UNIVERSE
- Our positioning and the battlecards for the competitors named.
- The trends we track that the analyst commented on.
- Analyst findings from this firm on record.

BUILD
- Where the analyst agrees with our positioning and where they do not, with our evidence.
- Competitor remarks that the battlecards do not yet reflect.
- Market remarks that add to or contradict a tracked trend.
- Actions for the PMM, product and sales, each tied to a document to update.

OUTPUT
A one-page readout with sources.

GROUNDING
Compare only against the Universe and cite. Do not treat the analyst's view as fact; show both.
```

### Prepare an analyst inquiry

```
Using Calven MCP, help me prepare an analyst inquiry on the topic below.

FILL IN
- Topic: [topic]
- Analyst: [analyst]

CONTEXT
Thirty minutes with the analyst. I want to ask one sharp question and bring our own data.

PULL FROM THE UNIVERSE
- The trend or opportunity behind the topic, with our "so what".
- Competitive signals on the topic for the competitors the analyst covers.
- What we have seen from buyers on the topic: themes and quotes.

BUILD
- The question, in one sentence.
- Our evidence to share, in three bullets with sources.
- The two follow-ups depending on their answer.

OUTPUT
A half-page inquiry brief.

GROUNDING
Use only trends, signals and quotes in the Universe and cite them with dates.
```

## Advanced prompts

### Predict where the analyst places you

```
Predict where we land in the analyst's next evaluation and which criteria would move us. Use Calven MCP for our product facts, the competitors' documented strengths and our real head-to-head results.

FILL IN
- Firm and evaluation: [firm and evaluation name]
- Criteria and weights: [paste the published criteria and weights, or the last report's scoring]
- Competitors in scope: [competitors]

CONTEXT
The evaluation lands in a few months and we can still change what we brief. I want to know where we probably place, which criteria decide it, and where an hour of briefing effort buys the most movement.

FROM CALVEN
- The product brief: capabilities, integrations, pricing and known weaknesses.
- Each competitor's battlecard strengths and weaknesses, and the analyst standing from their dossier.
- Analyst findings on record from this firm about us and the competitors.
- Our win rate against each competitor from the competitive dashboard, with n.

MODEL
- Score us and each competitor 1 to 5 on every criterion, citing the evidence behind each score. Where evidence is thin, give a range.
- Weight the scores, compute each vendor's total, and rank.
- Run a sensitivity: for each criterion, how many points we'd need to gain to move up one place. If you can run code, vary every uncertain score across its range 1,000 times and show how often we finish in each position.
- Mark which criteria a better briefing could move (the evidence exists but the analyst hasn't seen it) and which only product work can move.

OUTPUT
A scoring table, our likely placement as a range, and the three criteria to brief hardest with the evidence to bring.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't score a competitor on a capability their dossier doesn't record; mark it unknown.
```

### Debate the category claim first

```
Run a structured debate on whether we brief the analyst as a new category or as a strong player in theirs, then judge it. Use Calven MCP for our positioning, the firm's own published views and what buyers call the problem.

FILL IN
- Firm and analyst: [firm and analyst]
- Their category: [the market the analyst covers, in their words]

CONTEXT
Claiming a new category can win a defining position or get us filed under "too early". Fitting their category is safer and may bury our difference. The briefing deck commits us one way.

FROM CALVEN
- Our positioning: market category, frame of reference, competitive alternatives and unique attributes.
- Analyst findings on record from this firm about the category and its horizon.
- The words customers use for the problem, from call quotes and themes.

DEBATE
- Advocate A argues for the new category, Advocate B for their category. Each opens with 200 words built from the evidence above, then two rounds of rebuttal.
- A judge playing the analyst scores both on four tests: does buyer language match, does the firm's own research support it, can we name three customers who bought it that way, and what happens to us in the next evaluation if they reject the framing.
- The judge picks one, or a hybrid, and says what evidence would change the verdict.

OUTPUT
The debate in under 800 words, the judge's scorecard, and the opening slide's headline and one-line category definition for the winning position.

GROUNDING
Cite the positioning, findings and quotes behind every argument. Don't invent what the analyst has said; if the firm has no findings on record, say so and judge on buyer language alone.
```

### Answer the questionnaire as your rival

```
Answer the evaluation questionnaire as our strongest competitor would, then show where their answers beat ours. Use Calven MCP for the competitor's product, claims and analyst standing, and for our own product facts.

FILL IN
- Questionnaire: [paste the questions, or the sections that carry the most weight]
- Our draft answers: [paste our answers]
- Competitor: [competitor]

CONTEXT
Analysts read every vendor's answers side by side. Ours read well alone. I want to see them next to the rival's best version before the deadline.

FROM CALVEN
- The competitor's dossier: product, pricing, positioning, analyst standing and the bullshit detector.
- Their competitive signals from the last two quarters.
- Our product brief, including known weaknesses, and the deal drivers from deals we lost to them.

RED-TEAM
- Write the competitor's answer to each question as their analyst relations team would: confident, on their positioning, using every capability their dossier records and nothing it doesn't.
- Score both answers per question 1 to 5 as the analyst would, on specificity, proof and fit to the question.
- For every question they win, say why (a real capability gap, better proof, or better writing) and what we can honestly change.

OUTPUT
A side-by-side table per question: their answer in brief, both scores, the reason, and our revised answer where writing or proof is the gap.

GROUNDING
Label each competitor statement as from their dossier or signals (cited) or your extrapolation. Never close a capability gap by rewording; mark it a product gap.
```

## Ad hoc questions

- What category do we claim, and how do we define the frame of reference?
- What are our known weaknesses, as the product brief states them?
- Which trends should the market section of an analyst deck lead with?
- Has [firm] published anything about us or our category that we have on record?
- How many customers do we have in [segment], by size band?
- Which customers have a Competitive win quote on record?
- What is our win rate against [competitor], with n, and may we share it?
- What does [competitor] claim about analyst standing, according to the dossier?
- Which capability questions can the product brief not answer?
- What did buyers say about [topic] on calls, for the analyst's "what customers tell you" question?
- What is our ICP summary in three sentences?
- Which competitors did the last analyst evaluation we uploaded rank above us, and on what?
- Which analyst findings mention us or our competitors?
- Which loss reasons against [competitor] would an analyst hear from a reference customer?
- Which of our claims have a concern flagged that an analyst could check?
- What changed in our product since the last briefing to [firm], as recorded?
- Which segment has our highest win rate, with n, for the "where we win" slide?
- Which of our tracked trends disagree with the last analyst report we uploaded?

# Certification quizzes


You need to know whether reps can apply the ICP, the personas, the product, the positioning and the competition to a real scenario. You get a question bank by topic with an answer key tied to document sections, refreshed when the documents change. Calven makes the quiz test the approved story instead of whatever the author remembered.

## Prompts

### Write a certification question bank

```
Using Calven MCP, write a certification question bank on the topic below.

FILL IN
- Topic: [topic: ICP / personas / product / positioning and messaging / competitor name]
- Questions: [number of questions]

CONTEXT
Write the number of questions given. Formats: multiple choice with four options, one correct; short answer; true or false. Every answer needs the document and section it comes from so any manager grades the same.

PULL FROM THE UNIVERSE
- The document for the topic: ICP, persona canvases, product brief, positioning and messaging, or the battlecard.

BUILD
- The questions, spread across the document's sections.
- The answer key with section references.
- For multiple choice, distractors that are plausible but contradicted by the document.

OUTPUT
The bank and the key.

GROUNDING
Every question is answerable from the document. Do not write questions about things the document does not state.
```

### Write scenario questions from real deals

```
Using Calven MCP, write five scenario questions from real objections and deal situations.

CONTEXT
Each scenario describes a buyer, a situation and what they said; the rep writes what they would say next. I need a model answer and the grading points.

PULL FROM THE UNIVERSE
- Customer objections from calls in the last two quarters, with persona and competitor where present.
- Deal drivers with rank "decided" on lost deals, with the evidence quote.
- The messaging objection handling and the relevant battlecard "They say, you say" lines.

BUILD
- Five scenarios in the buyer's words (anonymised), each with the persona and competitor if any.
- The model answer from the approved lines, and three grading points.

OUTPUT
The scenarios and the key.

GROUNDING
Scenarios come from recorded quotes and drivers; model answers from approved documents only. Mark any scenario where the messaging has no approved answer.
```

### Retire questions the documents changed

```
Using Calven MCP, check this question bank against the current documents.

FILL IN
- Bank: [paste the bank with its answer key and the document versions it was written against]
- Date: [the bank's date]

CONTEXT
The bank was written against the document versions it names, as of its date.

PULL FROM THE UNIVERSE
- Current versions and dates of the documents named.
- Product changes and drift findings since the bank's date.

CHECK
- Each question: still correct, answer changed (give the new answer and section), or retire.

OUTPUT
The annotated bank.

GROUNDING
Change a verdict only on a recorded document change or product change, cited.
```

## Advanced prompts

### Find the questions that don't measure anything

```
Run an item analysis on the last certification cohort so I can cut the questions that don't measure anything. Use Calven MCP to check each answer key against the current documents.

FILL IN
- Results: [attach a CSV: rep, question id, answer chosen, correct yes or no, total score]
- Question bank: [paste the questions with options and the answer key]

CONTEXT
Everyone passes, so the certification proves nothing. Some questions are trivia, some may have stale answers, and some might reward the reps who memorise over the ones who sell.

FROM CALVEN
- The current messaging, positioning, product brief and battlecards, to check every answer key.
- Product changes and drift findings since the bank was written.

METHOD
- If you can run code, compute for each question: difficulty (share correct), discrimination (point-biserial correlation with total score, or top third versus bottom third), and how often each wrong option was picked.
- Flag questions that nearly everyone gets right, that nobody gets right, or where strong reps do worse than weak ones.
- For flagged questions, check the answer key against the current documents. A "hard" question is often a stale one.
- Check distractors: a wrong option nobody picks isn't working; one that strong reps pick may be defensible.
- Estimate overall reliability (Cronbach's alpha) and how many questions you'd need to make the pass mark meaningful.

OUTPUT
A per-question table: difficulty, discrimination, distractor notes, answer key still current, verdict (keep, fix, cut). Then the reliability figure and the five replacement questions for the worst cuts.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Every answer-key check cites the document and section; with fewer than 15 reps, say the statistics are rough.
```

### Build an adaptive certification

```
Build an adaptive certification: it starts at medium, gets harder when the rep answers right, easier when they're wrong, and finds their real level in 12 questions instead of 40. Use Calven MCP for the content and the real buyer moments behind the hard questions.

FILL IN
- Scope: [what it certifies: pitch, personas, competitors, objections, a launch]
- Competitors: [competitors to include, or "Tier 1"]

CONTEXT
A fixed quiz bores the strong reps and crushes the new ones. An adaptive one is shorter and tells me more, and I can rerun it every quarter.

FROM CALVEN
- The ICP, messaging (pillars, objection handling, matrix) and product brief.
- The personas' canvases.
- The battlecards for the competitors.
- Real buyer quotes tagged Objection and Competitor mention, for the hardest scenario questions.

BUILD
- Write 45 questions in three levels. Easy: recall a fact. Medium: apply it to a persona or segment. Hard: a scenario built from a real buyer quote where the rep must choose the best response and the worst one is tempting.
- Each question carries its answer, the reason, and the source document.
- Adaptive rule: start at medium; two right in a row moves up, one wrong moves down. Score by level reached and accuracy at that level.
- If you can build files, make it a single self-contained HTML page: the rep takes it, sees feedback with the source after each answer, and gets a result they can screenshot.

OUTPUT
The question bank as a table and the HTML quiz (or, if you can't build files, the bank plus the scoring rule as a manager script).

GROUNDING
Every answer cites a document and section. Scenario questions quote the buyer verbatim; don't invent a buyer line or a competitor claim that isn't on record.
```

## Ad hoc questions

- Write ten multiple-choice questions on our ICP with answers.
- Give me five true-or-false questions on the [competitor] battlecard.
- Write a scenario where [persona] says "[objection]" and the model answer.
- Which section of the product brief should the pricing questions come from?
- Is the answer to "[question]" still right after the last release?
- Write three questions on what we do not do.
- Which personas should a certification cover, by buying role?
- Write a short-answer question on our positioning statement.
- Which facts in our product brief changed since last quarter's certification was written?
- Which competitor appears in the most deals but has the thinnest battlecard to quiz on?
- Which objection is hardest to answer well, judging by how reps handled it on calls?
- Write a scenario question from a real lost deal against [competitor].
- Which persona's canvas would make the toughest exam question, and what is it?
- Give me three wrong answers to "[question]" that a half-trained rep would find convincing.
- Which battlecard claims are most likely to be misremembered as stronger than they are?

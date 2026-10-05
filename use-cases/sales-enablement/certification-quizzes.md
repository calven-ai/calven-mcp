# Certification quizzes

**Team:** Sales enablement · also sales managers
**Impact:** Medium. A certification only proves something when its questions come from the current story and every answer has a source. Writing question banks from the approved documents takes minutes and keeps grading consistent across managers.
**Prerequisites:** strategy documents approved, competitors tracked. Better with personas approved and call transcripts ingested (scenario questions from real objections).

## What the team is trying to do

Test whether reps know the ICP, the personas, the product, the positioning and the competition, and can apply them to a scenario. Done means a question bank by topic with an answer key tied to document sections, refreshed when the documents change. Without the company's own knowledge the quiz tests whatever the author remembered.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Define the blueprint | Topics, weights, pass mark, formats | Calven does not set the blueprint; the workspace overview shows what there is to test | Workspace overview |
| 2 | Write the questions | Draft per topic | Questions and answers from the documents, with the section per answer | Strategy documents, persona canvases, battlecards |
| 3 | Write the scenarios | Realistic situations with a model answer | Scenarios from real objections and deal situations; model answers from the messaging and battlecards | Quotes, deal drivers, messaging, battlecards |
| 4 | Check for stale questions | Retire questions the documents no longer support | Document versions, product changes, drift findings | List documents, product changes, drift findings |
| 5 | Deliver and grade | Load into the LMS, grade, track pass rates | Calven does not help here | |

## Recommended prompts

### Step 2: the question bank

```
Using Calven MCP, write a [number]-question certification bank on [topic: ICP / personas / product / positioning and messaging / competitor name].

CONTEXT
Formats: multiple choice with four options, one correct; short answer; true or false. Every answer needs the document and section it comes from so any manager grades the same.

PULL FROM THE UNIVERSE
- The document for [topic]: ICP, persona canvases, product brief, positioning and messaging, or the battlecard.

BUILD
- The questions, spread across the document's sections.
- The answer key with section references.
- For multiple choice, distractors that are plausible but contradicted by the document.

OUTPUT
The bank and the key.

GROUNDING
Every question is answerable from the document. Do not write questions about things the document does not state.

[name the topic and the number of questions]
```

### Step 3: scenarios from real deals

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

### Step 4: retire stale questions

```
Using Calven MCP, check this question bank against the current documents.

CONTEXT
Below is the bank with its answer key and the document versions it was written against.

PULL FROM THE UNIVERSE
- Current versions and dates of the documents named.
- Product changes and drift findings since the bank's date.

CHECK
- Each question: still correct, answer changed (give the new answer and section), or retire.

OUTPUT
The annotated bank.

GROUNDING
Change a verdict only on a recorded document change or product change, cited.

[paste the bank and its date]
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

## Good practice

- Tie every answer to a section. Disagreements between graders end at the source.
- Use real objections for scenarios. Reps recognise them, and the model answer is the approved line they should already know.
- Weight the bank by what the dashboards say reps get wrong, not evenly by topic.
- Rerun the stale check after every document update or release.
- Keep distractors true-sounding. A quiz with obvious wrong answers certifies nothing.

## Not covered today

- Delivery, grading, pass tracking and reporting in the LMS.
- Skills certification (demo, discovery technique) that needs observation rather than knowledge.

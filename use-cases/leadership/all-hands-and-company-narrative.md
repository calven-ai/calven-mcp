# All-hands and company narrative


The company story drifts between the all-hands, the careers page and the sales pitch, and you want one version everyone tells. You get a company narrative that matches the approved positioning, plus a monthly all-hands segment: a customer quote, a win and why we won it, a competitor move, a market shift. Calven holds the positioning, messaging, boilerplate and win/loss evidence, so every telling starts from the same source.

## Prompts

### Align the company narrative with positioning

```
Using Calven MCP, align our company narrative with the approved positioning.

FILL IN
- Narrative: [paste the narrative]

CONTEXT
The narrative is the one we use in all-hands and recruiting. I want it checked against the positioning and messaging and rewritten where it drifts.

PULL FROM THE UNIVERSE
- The positioning: statement, category, unique attributes, value themes, proof points.
- The messaging: core narrative, one-liner, boilerplate.

CHECK AND REWRITE
- Flag each line that drifts from the positioning or uses language we moved away from, and say what it conflicts with.
- Rewrite the narrative, keeping its structure, on the approved story.

OUTPUT
The annotated draft, then the clean version.

GROUNDING
Judge only against the positioning and messaging in the Universe, cited. If the narrative is on-positioning, say so.
```

### Build this month's all-hands segment

```
Using Calven MCP, build the customer and market segment for this month's all-hands.

FILL IN
- Month: [month]

CONTEXT
Five minutes, same shape every month: what a customer said, a deal we won and why, what a competitor did, what moved in the market.

PULL FROM THE UNIVERSE
- One marketing-ready customer quote from last month, attributed as the workspace allows.
- A deal won last month with its summary and the drivers that decided it, in the buyer's words.
- The competitor move last month with the highest severity, with its so-what.
- One trend that strengthened, with its so-what.

BUILD
- Four slides, one line each, with the source on a notes line.

OUTPUT
The segment.

GROUNDING
Use only the Universe, cited. Keep quotes verbatim. Respect withheld deal names and amounts.
```

### Tell a win story in the buyer's words

```
Using Calven MCP, write the win story for the deal below for the all-hands.

FILL IN
- Deal: [deal]

CONTEXT
I want to tell the company why we won this deal in the buyer's words, not the rep's. Two minutes, no slides. The rep will stand up after, so leave them something to add.

PULL FROM THE UNIVERSE
- The surveyed deal: summary, outcome, the competitors in play and who we beat.
- The drivers that decided it, with the evidence quote behind each.
- The customer quotes from the deal's calls tagged Pain, Buying trigger or Gain.
- The contacts on the deal with buying role, as the workspace allows.

BUILD
- The situation they were in, in their words.
- What nearly stopped it and what settled it.
- The one driver that decided the deal, quoted.
- What it says about how we win, in one line tied to our positioning.

OUTPUT
A 200-word story with the sources on a notes line.

GROUNDING
Quotes verbatim and attributed as the workspace allows. Respect withheld deal names and amounts. Do not add a reason the survey or the calls do not record.
```

## Advanced prompts

### Run the telephone test on the narrative

```
Find out how the company story mutates as it gets retold, before the all-hands sends it out. Use Calven MCP for the approved positioning, the messaging and how our reps actually tell the story on calls.

FILL IN
- Narrative: [paste the all-hands narrative or the company story slide]
- Audiences: [list who retells it: new hire, engineer, recruiter, customer success]

CONTEXT
The story leaves the all-hands in one shape and reaches a customer in another. I want to see where it breaks while I can still fix the source.

FROM CALVEN
- The positioning statement, value themes and unique attributes.
- The one-liner and value pillars from the messaging.
- Vendor quotes tagged Value claim and Differentiation from the last 90 days: how reps tell the story on calls.

SIMULATE
- Run a chain of retellings. Each audience on my list hears the previous version and retells it in 80 words, in their own register, losing what people usually lose: nuance, proof, the category frame.
- After each hop, score the version against the positioning on four checks: category, who it's for, the differentiator, the proof. Show which element drops first.
- Compare the last hop with the real rep quotes. Where they match, the drift has already happened in the field.

OUTPUT
The chain of retellings, a drift table (hop by element), the element that dies first, and a rewrite of the narrative's weakest paragraph so that element survives three hops.

GROUNDING
Each check passes or fails against a cited Calven section. Rep quotes are verbatim and cited; don't paraphrase them to prove a drift.
```

### Build an eval set for every telling of the story

```
Write an eval set that grades any version of the company story against the approved narrative, so drift gets caught by a rubric, not by me. Use Calven MCP for the positioning, the messaging, the boilerplate and the claims we can back.

FILL IN
- Tellings to grade first: [paste two or three: the careers page, the pitch deck opener, last month's all-hands]
- Pass bar: [how strict: board-grade, public, internal]

CONTEXT
Recruiting, sales, product and I retell the story every month. I want one rubric any AI tool can apply, so each new telling gets a score before it goes out.

FROM CALVEN
- The positioning statement, market category and value themes.
- The core narrative, one-liner, pillars and boilerplate from the messaging.
- The claims list with each claim's status, so the rubric knows which ones are backed.

BUILD
- Turn the approved narrative into 8 to 12 graded criteria: each a yes/no question with a weight and a failing example.
- Add a hard-fail list: a claim with no backing, a category we don't use, a competitor framed in a way the positioning avoids.
- Write six test cases: three that should pass, three that should fail for different reasons. Run the rubric on them and fix any criterion that grades them wrong.
- Then grade my tellings.

OUTPUT
The rubric as a table (criterion, weight, pass example, fail example), the hard-fail list, the six test cases with expected grades, and a scorecard for each of my tellings with the three fixes that matter most.

GROUNDING
Every criterion cites the Calven section it comes from. Don't create a criterion the approved documents don't support; label any style preference as your own judgement.
```

## Ad hoc questions

- What is our one-liner, according to the messaging document?
- What is our boilerplate?
- Give me one customer quote about [outcome] from last month.
- Which deals did we win last month, and why, in the buyer's words?
- What did [competitor] do last month?
- Which trend strengthened last quarter?
- What are our value themes?
- Does this sentence match our positioning: "[sentence]"?
- Which value pillar do reps quote most on calls, and which least?
- Which claims in our boilerplate are not backed in the claims list?
- Which customer quote from last quarter explains why we exist better than our one-liner does?
- Which competitor's positioning sounds closest to ours, according to the dossiers?
- Which win last quarter had the clearest quantified outcome, in the buyer's words?
- What changed in the product last quarter that the company narrative doesn't mention?
- Which customer theme grew most last quarter, and on how many mentions?

# Media pitches and spokesperson prep


You want coverage in the publications your buyers read, but the journalist needs a story and you've got positioning. You walk away with pitch angles backed by evidence, a briefing document per interview, and hard-question answers agreed in advance so every spokesperson says the same true things. Calven supplies the evidence that turns a positioning point into an angle a journalist can use.

## Prompts

### Find three pitch angles with evidence

```
Using Calven MCP, give me three pitch angles for the publication or beat below.

FILL IN
- Publication: [publication or beat]
- Beat: [the beat the journalist covers]
- Audience: [the journalist's audience]

CONTEXT
I want stories, not product news. The journalist covers the beat for the audience.

PULL FROM THE UNIVERSE
- Trends and opportunities with a near horizon and high severity, with the "so what".
- Analyst findings on those subjects.
- Our positioning's point of view.
- Customer quotes on each topic, and the accounts behind them, for a customer who might talk.

BUILD
- Three angles. For each: the shift, the tension, our view, the customer evidence on record, the data point we hold, and the headline a journalist might write.

OUTPUT
The three angles with sources, and the one to lead with.

GROUNDING
Ground every angle in trends, findings and quotes in the Universe and cite them with dates. Do not invent a customer who will talk; mark every one "to ask".
```

### Write the pitch

```
Using Calven MCP, write the pitch for the story angle below.

FILL IN
- Angle: [angle]
- Journalist: [journalist]
- Publication: [publication]

CONTEXT
Email to the journalist at the publication, under 180 words. Lead with the shift, offer the spokesperson and a customer, end with one line on who we are.

PULL FROM THE UNIVERSE
- The trend behind the angle and its "so what".
- One customer quote on record, verbatim.
- Our one-liner from the messaging.

WRITE
- The pitch, plain, no superlatives.
- A subject line under 60 characters.

OUTPUT
The pitch with sources in a note below.

GROUNDING
Use only the trend, quote and one-liner in the Universe and cite them. Do not promise a customer interview before the customer agrees.
```

### Brief a spokesperson for an interview

```
Using Calven MCP, prepare the spokesperson below for an interview.

FILL IN
- Spokesperson: [spokesperson]
- Publication: [publication]
- Topic: [topic]
- Date: [date]
- Competitors: [competitors the journalist has written about]

CONTEXT
Thirty minutes with the publication on the topic, on the date given. The journalist has written about the competitors before. I need the briefing document.

PULL FROM THE UNIVERSE
- The trend and our point of view on the topic.
- The product brief: what we do on this topic and our known weaknesses.
- The battlecards for the competitors: what we may say and where they are stronger.
- Persona objections on the topic, for the "but buyers say" questions.
- Customer quotes we may cite, with approval state.

BUILD
- The three messages to land, in plain sentences.
- Twelve likely questions with the honest answer and its source, including the ones about weaknesses and competitors.
- The three things not to say.
- The customer examples allowed, with approval state.

OUTPUT
A two-page briefing with sources.

GROUNDING
Ground every answer in the Universe and cite it. Where the brief is silent, the answer is "we do not do that today" or "I would have to check", never an invention.
```

## Advanced prompts

### Backtest a newsworthiness score on old pitches

```
Build a newsworthiness score and backtest it on my past pitches before I send the next ones. Use Calven MCP for the evidence each pitch could have used: trends, customer stories and our point of view.

FILL IN
- Pitch log: [attach a CSV of past pitches: subject, angle, outlet, date, replied yes or no, covered yes or no]
- Next pitches: [paste the angles you're considering]

CONTEXT
I pitch on instinct and get a reply on maybe one in ten. I want to know what the ones that landed had in common, and score the next batch before I spend a week on them.

FROM CALVEN
- Trends with severity, horizon and the date each was first seen.
- Customer quotes and conversations on each pitch's subject, and which quotes are tagged Quantified outcome.
- Analyst findings on the same subjects.

BACKTEST
- Define five or six factors a journalist weighs: tied to a tracked trend, a customer who'll talk, a number, a contrarian view, timeliness, no product in the headline.
- Score every past pitch on the factors, using the Universe to check which evidence existed at the time.
- If you can run code, fit a simple logistic regression of reply and coverage on the factors and report which ones predict. With fewer than 30 pitches, call the result directional.
- Score the next pitches with the fitted weights and rank them.

OUTPUT
The factor weights with their strength, the backtest hit rate, and the next pitches ranked with the one change that would raise each score.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't claim a factor predicts on a sample too small to say; give the sample size.
```

### Run a murder board for the spokesperson

```
Run a murder board for our spokesperson: a panel of hostile journalists asking the hardest questions, scored, with a second round after coaching. Use Calven MCP for our weaknesses, the competitors' attack lines and the facts the answers can stand on.

FILL IN
- Spokesperson: [spokesperson]
- Story: [the story or announcement]
- Outlets: [the outlets and the reporters' beats]

CONTEXT
The interview is in a few days. The questions that hurt are about what we don't do, what a competitor says about us, and the number we won't give. I want them asked in rehearsal first.

FROM CALVEN
- The product brief's known weaknesses and the claims with a concern flagged.
- Each tracked competitor's talk track and landmines against us, from their dossier.
- Proof points, customer quotes approved for marketing, and the trends behind the story.

METHOD
- Play three journalists: a trade reporter who knows the category, a business reporter who wants the money story, and a skeptic who has talked to a competitor.
- Each asks four questions, hardest last, with a follow-up on any vague answer.
- I answer as the spokesperson. Score each answer on accuracy, directness and whether it gives the journalist a usable line. Then coach: show the answer that would have scored best, in the spokesperson's style.
- Run round two with the five weakest questions reworded.

OUTPUT
The question bank with scores for both rounds, three bridging lines, and the five facts the spokesperson must know cold.

GROUNDING
Every model answer cites the Universe. Don't give the spokesperson a fact or number we don't hold; mark it "don't answer, offer to follow up".
```

## Ad hoc questions

- Which trend with a near horizon do we have a view on?
- What is our point of view on [topic], in two sentences?
- Which customers have talked about [topic] on calls, and are their quotes approved?
- What should [spokesperson] say if asked how we compare with [competitor]?
- What are our known weaknesses on [topic]?
- Is there an analyst finding on [subject] we can cite?
- What data point do we hold on [topic] that we publish?
- What is our one-liner for the end of a pitch?
- What would [persona] push back on if they read this story?
- What has changed in our product on [topic] this quarter?
- Which trend did our market research flag before any analyst finding mentioned it?
- Which customers with a Quantified outcome quote also had a conversation this quarter, for a reporter who wants a reference?
- Which competitor signal this quarter gives a journalist a reason to call us?
- What is the strongest number we hold on [topic], and where does it come from?
- Which of our proof points could a skeptical reporter verify?

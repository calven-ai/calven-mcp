# Executive thought leadership


Your executive has forty minutes a month, and you need a month of posts, articles and talk abstracts in their voice. You come away with a batch they approve with light edits, every claim true, every point of view consistent with the positioning, and posts sales can reuse in conversations. Calven brings the evidence behind their opinions, so the session goes to the opinions themselves.

## Prompts

### Build the executive's quarterly topic agenda

```
Using Calven MCP, build the thought-leadership agenda for the executive below for the next quarter.

FILL IN
- Executive: [executive, title]
- Voice notes: [paste the voice notes]
- Sample posts: [paste three posts they are proud of]

CONTEXT
I want three to five themes they can own, each with a point of view the company stands behind.

PULL FROM THE UNIVERSE
- Trends and opportunities we track, with severity, horizon and "so what".
- Our positioning: category, unique attributes, "why now".
- The themes buyers raise most on calls, with a quote each.
- Analyst findings that agree or disagree with our view.

BUILD
- Three to five themes. For each: the trend behind it, our point of view, the buyer evidence, the analyst view if any, and the stance the executive would take in their own words.
- Themes to avoid: where our evidence is thin or the positioning is silent.

OUTPUT
The agenda as a table with sources, then a paragraph on the executive's angle across all of it.

GROUNDING
Ground every theme in trends, positioning and quotes in the Universe and cite them with dates. Do not propose a point of view the positioning contradicts.
```

### Write this month's session questions

```
Using Calven MCP, write the questions for this month's content session with the executive below.

FILL IN
- Executive: [executive]
- Themes: [paste the agenda themes]
- Window: [time window, e.g. last 30 days]

CONTEXT
Forty-five minutes, covering the agenda themes. I want twelve questions that draw out opinions and stories, each anchored in something that moved this month.

PULL FROM THE UNIVERSE
- Trends and competitive signals from the window, with dates.
- The voice-of-customer themes that moved most, with a quote each.
- New analyst findings.

BUILD
- Twelve questions grouped by theme, each with the fact that prompts it ("this month X happened; what do you make of it?") and its source.
- Two "what do we get wrong as an industry" questions.

OUTPUT
The question list with sources.

GROUNDING
Use only trends, signals, themes and findings in the Universe and cite them. Do not invent events.
```

### Draft LinkedIn posts from the session transcript

```
Using Calven MCP, draft LinkedIn posts for the executive below from this session transcript.

FILL IN
- Executive: [executive]
- Posts: [number of posts]
- Transcript: [paste the session transcript]
- Voice notes: [paste the voice notes]

CONTEXT
Write the number of posts given. Each post: one idea, under 180 words, no hashtags, no exclamation marks, opens with the opinion, closes with a question or a plain statement. The evidence is from the Universe, cited in a note under each post for the reviewer, not in the post.

PULL FROM THE UNIVERSE
- The trend or signal behind each idea.
- A customer quote or theme that supports it (paraphrased in the post, verbatim in the note).
- Our positioning, so the stance stays consistent.

WRITE
- The posts, each labelled with its theme.
- Under each: the evidence note with sources, and any claim the executive must confirm.

OUTPUT
The batch in plain text.

GROUNDING
Use only the transcript, voice notes and the Universe, and cite the Universe in the notes. Do not attribute a view to the executive that the transcript does not contain. Do not add statistics the Universe does not hold.
```

### Outline a bylined article or talk abstract

```
Using Calven MCP, outline a bylined article for the executive on the theme below.

FILL IN
- Executive: [executive]
- Theme: [theme]
- Publication: [publication or event]
- Length: [length in words]
- Voice notes: [paste the voice notes]

CONTEXT
For the publication, at the length given. The piece makes one argument from a market shift and ends with what the reader should do differently. Draft opening included.

PULL FROM THE UNIVERSE
- The trend and opportunity behind the theme, with the "so what" and dates.
- Analyst findings on the subject.
- What buyers say about it, with three verbatim quotes.
- Our positioning, so the argument is ours.

BUILD
- The argument in one sentence.
- The arc: the shift, the tension it creates, the common wrong answer, our answer, the so-what.
- Section outline with the evidence per section.
- A 150-word draft opening in the executive's voice, from the voice notes.

OUTPUT
The outline and the opening, with sources.

GROUNDING
Ground the argument in trends and quotes in the Universe and cite them. Mark speculation as speculation. Do not mention the product unless the brief allows one mention.
```

### Review a post batch before the executive does

```
Using Calven MCP, review these executive posts before they go to the executive.

FILL IN
- Executive: [executive]
- Batch: [paste the batch]

CONTEXT
Check the batch for positioning drift, factual claims and competitive risk.

PULL FROM THE UNIVERSE
- Our positioning.
- The product brief and claims register, for any product line.
- The battlecards for any competitor named or implied.

CHECK
- Lines that contradict or drift from the positioning.
- Factual claims: supported, unverified or wrong.
- Lines about or implying a competitor: within the battlecard, or to cut.
- Anything that states a product capability the brief does not list.

OUTPUT
Each post with a verdict and the specific edit, then the list for the executive to confirm.

GROUNDING
Judge only against the Universe and cite. If a post is clean, say so.
```

## Advanced prompts

### Map the topics the executive can own

```
Map the topics our executive could write about on a 2x2 of what buyers care about against what we can credibly own, and pick the quarter's three. Use Calven MCP for buyer pains, tracked trends and our point of view.

FILL IN
- Executive: [executive name and role]
- Candidate topics: [paste topics they want to write about, or write "suggest them"]
- Recent posts: [paste five recent posts]

CONTEXT
Most executive feeds drift to whatever was on their mind that week. A feed that keeps returning to two or three topics the market cares about, where we have something only we can say, builds authority.

FROM CALVEN
- Themes from customer calls with mention counts and how they moved this quarter.
- Trends with severity and horizon, and analyst findings on the same subjects.
- Our positioning's point of view, unique attributes and proof points.

METHOD
- Score each topic on buyer salience (theme mentions, trend severity) and on ownability (do we hold a view, proof and customer quotes others don't).
- Plot them on a 2x2: own it, contested, niche, avoid. If you can run code, draw the chart.
- For each contested topic, say what proof would move it to own it.
- Pick three topics for the quarter, each with a contrarian thesis in one sentence and the evidence behind it.

OUTPUT
The 2x2 with every topic placed and scored, then the three picks with thesis, evidence and a first post angle.

GROUNDING
Salience comes from Calven counts with n, cited. Don't give the executive a view our positioning doesn't hold; flag it as a new position that needs their sign-off.
```

### Write an eval set for the ghostwriter

```
Write an eval set that grades every ghostwritten post for sounding like our executive and saying something true. Use Calven MCP for the positioning, the claims we can make and the buyer language the posts should echo.

FILL IN
- Executive: [executive name]
- Their best posts: [paste ten posts they wrote themselves]
- Rejected drafts: [paste drafts they killed, with their reason if you know it]

CONTEXT
The ghostwriter, the agency and the AI tool all write for this executive. Without a shared test, approval depends on mood. I want a rubric anyone can run before a draft reaches them.

FROM CALVEN
- Our positioning and messaging pillars.
- Claims on record with their status and any concern flagged.
- Verbatim buyer quotes on the topics the executive writes about.

BUILD
- From the posts they wrote and the drafts they rejected, pull the voice markers: sentence length, openings, words they use and never use, how they take a stance.
- Write 12 to 15 test criteria in three groups: voice, substance (is there a claim a reader could disagree with) and truth (every fact traces to a claim or quote on record).
- For each criterion, a pass example and a fail example from the pasted posts.
- Grade three of their real posts and two rejected drafts to check the rubric separates them. Tune it until it does.

OUTPUT
The eval set as a table (criterion, test, pass, fail, weight), the calibration results, and a short prompt that runs the eval on a new draft.

GROUNDING
Voice markers come only from the pasted posts; truth tests cite the Universe. Don't invent a stance the executive hasn't taken.
```

### Put odds on the executive's prediction

```
Put a number on the executive's big public prediction and update it with the evidence we hold, before they stake their name on it. Use Calven MCP for the trends, analyst findings and buyer signals for and against.

FILL IN
- Prediction: [the claim, e.g. within two years most teams in our category will ...]
- Executive: [executive name]
- Their confidence: [how sure they are, as a percentage]

CONTEXT
A sharp prediction builds authority if it holds and costs it if it doesn't. I want honest odds and the evidence that would change them, so the post says it with the right strength.

FROM CALVEN
- Trends and market opportunities bearing on the prediction, with horizon and severity.
- Analyst findings that support or contradict it.
- Customer quotes and themes that show the shift happening, or not, with counts.

METHOD
- Start from the executive's confidence as the prior.
- Take each piece of evidence in turn: does it point for or against, and how strongly (a likelihood ratio, stated and justified)? Update the probability after each one. If you can run code, show the running number.
- Name the evidence that would move the number most if it appeared, and where it would show up first.
- Recommend the wording that matches the final number: "will", "is likely to", "might", or don't post it.

OUTPUT
An update table (evidence, direction, strength, running probability), the final number, and the prediction rewritten at the matching strength.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Likelihood ratios are your judgement; state each. Don't count one piece of evidence twice under two names.
```

## Ad hoc questions

- Which trends do we track with a near horizon that [executive] could have a view on?
- What is our stated point of view on [topic]?
- What did buyers say about [topic] this month? Three verbatim quotes.
- Which analyst finding disagrees with our view on [topic]?
- Which theme from customer calls moved most this quarter?
- Is this line consistent with our positioning: "[line]"?
- Does any battlecard cover what this post implies about [competitor]?
- What is the "why now" in our positioning, in one sentence?
- Which of our proof points could an executive cite publicly?
- What has [competitor] done this month that is worth a comment?
- Which persona does this post speak to, and what would they object to?
- Give me the three customer pains our positioning answers, in the customers' words.
- Which customer pain rose most this quarter, and does our positioning take a view on it?
- Which analyst finding would make the strongest contrarian post for [executive]?
- Which trends have we marked as acted on that [executive] could write about from experience?
- What do [persona] buyers get wrong about [topic], judging by our calls?
- Which phrase do buyers use for [topic] that our messaging never does?

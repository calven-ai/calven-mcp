# Social posts


You're filling a weekly calendar of five posts on LinkedIn and the other channels buyers use, written fast, often by someone who isn't the PMM. You get a plan and a batch where every post is on-message, true, in the audience's language and traceable to a pillar, across the personas and stages you sell to. Calven keeps the volume from drifting off the story.

## Prompts

### Plan next week's posts

```
Using Calven MCP, plan next week's company social posts.

FILL IN
- Personas: [personas]
- Pieces: [paste the pieces to promote]
- Last week: [paste last week's plan, or leave blank]

CONTEXT
Five posts, LinkedIn first. Mix: one launch or product post, one customer proof, one point of view, two content promotions (the pieces). Audience: the personas.

PULL FROM THE UNIVERSE
- Our messaging pillars, and which personas and stages each serves.
- Product changes recorded this month.
- Customer quotes approved for marketing use, with highlight tags, newest first.
- The themes and trends that moved most this week.

BUILD
- Five slots: type, persona, pillar, the idea in one line, the evidence from the Universe, the piece it promotes if any.
- A note on which pillar or persona had no post last week, if last week's plan is given.

OUTPUT
The plan as a table with sources.

GROUNDING
Use only pillars, changes, quotes and trends in the Universe and cite them. Do not invent a product change or a customer line.
```

### Write the week's five posts

```
Using Calven MCP, write the five posts from this plan.

FILL IN
- Plan: [paste the plan]
- Persona: [persona]

CONTEXT
Each post: under 150 words, opens with the point not the company name, no hashtags, no exclamation marks, one link at most, in the words the persona uses. Company voice, plain.

PULL FROM THE UNIVERSE
- The persona's canvas: messaging hooks and how they talk.
- The message for the pillar each post serves.
- The quote or product change each post cites.

WRITE
- The five posts, each labelled with its slot.
- Under each, the source for the claim or quote.

OUTPUT
The batch in plain text.

GROUNDING
Use only messaging, quotes and product changes in the Universe and cite them. Keep quotes verbatim. Do not add claims the product brief does not support.
```

### Write a launch post

```
Using Calven MCP, write a launch post for the feature below.

FILL IN
- Feature: [feature or change]
- Persona: [persona]

CONTEXT
LinkedIn, under 120 words. Lead with what changes for the buyer, not the feature name. Audience: the persona.

PULL FROM THE UNIVERSE
- The product change recorded for the feature, with its summary and "so what".
- The product brief section it belongs to.
- The pain it addresses, with a customer quote.

WRITE
- Three openings, each a different angle (the pain, the outcome, the before and after).
- The post, with the one capability line from the brief.

OUTPUT
The openings and the post, with sources.

GROUNDING
Use only the product change and brief in the Universe and cite them. Do not promise an outcome the brief does not state.
```

### Check posts before they're scheduled

```
Using Calven MCP, check these posts before they are scheduled.

FILL IN
- Batch: [paste the week's batch]
- Persona: [persona]

CONTEXT
The batch is the week's posts.

PULL FROM THE UNIVERSE
- The product brief and claims register.
- Our messaging and positioning.
- The battlecard for any competitor implied.
- The persona's canvas, and run the persona review on the batch.

CHECK
- Each post: claims correct, wrong, stale or unverified; on-message or drifting; competitor lines within the battlecard.
- The persona's reaction to each: would they stop scrolling, what reads as vendor copy.

OUTPUT
Each post with a verdict and the edit, then the two to fix first.

GROUNDING
Judge only against the Universe and cite. If a post is clean, say so.
```

### Draft a reply to a comment

```
Using Calven MCP, draft a reply to this comment.

FILL IN
- Comment: [paste the comment]
- Role: [the commenter's role]

CONTEXT
Someone in that role left the comment on our post. I want a short, honest reply.

PULL FROM THE UNIVERSE
- The objection handling in our messaging that matches the comment.
- The product brief section it touches.
- The battlecard, if the comment names a competitor.

WRITE
- A reply under 60 words, direct, no defensiveness, one fact from the brief if needed.
- A note on whether to take it to a private message instead.

OUTPUT
The reply and the note, with sources.

GROUNDING
Use only the messaging, brief and battlecard in the Universe and cite them. Do not claim what the brief does not state. If the comment is right about a weakness, say so in the reply.
```

## Advanced prompts

### Find what drives engagement on your posts

```
Find what drives engagement on our company posts, using our own post data tagged against the messaging. Use Calven MCP for the pillars, themes and buyer language to tag each post with.

FILL IN
- Post export: [attach a CSV of the last six months of posts: text, date, format, impressions, reactions, comments, clicks]

CONTEXT
We post daily and judge by the last post's likes. I want to know which pillars, angles and formats earn engagement from the right people, so next quarter's calendar leans on them.

FROM CALVEN
- The value pillars and the messaging hooks per persona.
- Themes from customer calls and verbatim quotes, so posts can be tagged for using buyer language.
- Product changes in the same window, to tag launch posts.

METHOD
- Tag each post: pillar, persona it speaks to, uses a customer quote or buyer phrase (yes or no), format, launch post or not, has a number.
- Normalise engagement by impressions.
- If you can run code, run a regression of engagement rate on the tags with day of week as a control, and report effects with confidence intervals. Otherwise compare medians by tag.
- Name the two tags that matter most, and the one everyone believes in that doesn't.

OUTPUT
A driver table (tag, effect, confidence, n), a chart of engagement by pillar, and five rules for next quarter's calendar.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Engagement numbers come only from my export. Don't claim a driver on fewer than 20 posts; call it directional.
```

### Design a post test that can conclude

```
Design an A/B test for our social posts with enough posts to reach a real answer. Use Calven MCP for the two message variants worth testing and the persona each should reach.

FILL IN
- Question: [what you want to learn, e.g. customer-quote posts versus product posts]
- Baseline: [your average engagement rate and posts per week]
- Smallest effect worth knowing: [e.g. a 20% lift]

CONTEXT
We test by posting two things and comparing likes, which tells us nothing with a sample of two. I want a design that answers the question in a set number of weeks, or tells me it can't.

FROM CALVEN
- The pillar and persona the test targets, with the messaging hook.
- Three customer quotes approved for marketing on the theme, for the variant that uses buyer language.
- A persona review of the two variants' first lines.

METHOD
- Turn the question into one hypothesis with one variable changed. Write two matched variant templates and four posts per variant from the Universe.
- Run a power calculation: posts needed per variant to detect the smallest effect at 80% power and 5% significance, given my baseline. If you can run code, show it.
- Translate that into weeks at my posting rate. If it takes longer than a quarter, propose a bigger effect, a pooled metric or a different question.
- Write the rules: what counts as a result, when to stop, what we'll do with each outcome.

OUTPUT
A one-page test plan: hypothesis, variants with example posts, sample size and duration, decision rules.

GROUNDING
Label every number as Calven (cited, with n), mine, or your assumption. Don't invent a baseline; use mine or say the plan needs one.
```

### Drill replies to hostile comments

```
Drill me on replying to hostile comments under our posts, in a scored practice round with the comments we're most likely to get. Use Calven MCP for the objections, the competitors' attack lines and the approved answers.

FILL IN
- Post: [paste the post that will draw comments]
- Who replies: [your name or the community manager's]

CONTEXT
The post is safe. The replies under it are where we get into trouble: a competitor's employee, an unhappy customer, a sharp critic. I want to have answered each kind before it happens in public.

FROM CALVEN
- Objection handling from the messaging, and the objections on the target personas' canvases.
- The competitors' talk tracks against us and their recent signals.
- The product brief's known weaknesses and claims with a concern flagged.

SIMULATE
- Write eight comments the post is likely to draw, mild to hostile: a competitor's employee, a skeptical practitioner, a customer with a complaint, a pricing question, a troll.
- Give me one at a time. I reply. Score my reply 1 to 5 on accuracy, tone, brevity and whether it helps the people reading along.
- After each, show the reply that would have scored 5, and say whether this one belongs in a DM or should be left alone.

OUTPUT
The eight comments, my scored replies, the model replies, and a one-page reply guide for this post.

GROUNDING
Model replies cite the Universe. Don't concede a weakness the product brief doesn't record, and don't deny one it does.
```

## Ad hoc questions

- Which messaging pillar has had no post this month?
- What product changes were recorded this week, in buyer terms?
- Give me three customer quotes approved for marketing use about [theme].
- What is the messaging hook for [persona]?
- Which theme from customer calls moved most this week?
- Rewrite this post in the words [persona] uses: [paste]
- Is "[claim]" in the product brief?
- What does the battlecard say I may say about [competitor] in public?
- Which trend is worth a point-of-view post this week?
- How would [persona] react to this post: [paste]
- What is our one-liner, for the profile and the pinned post?
- Which objection does this comment raise, and what is our approved answer?
- Did any competitor make a move worth commenting on this week, and what does the battlecard let me say?
- Which customer quote approved for marketing has the sharpest number in it?
- Which persona's messaging hook has the fewest customer quotes behind it?
- What does [competitor] say about us that a post could answer without naming them?
- Which rising trend does no pillar in our messaging speak to?
- What did customers say on calls this week that would make a good first line?

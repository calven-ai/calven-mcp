# Social posts

**Team:** Brand and communications · also demand generation, content marketing, customer marketing
**Impact:** High. The company page posts daily and every post is a claim in public. Posts written in the persona's words from the approved message, with a customer line and a checked fact, earn replies and get reused by sales; posts written from the feature list earn nothing and occasionally a correction.
**Prerequisites:** strategy documents approved (messaging, positioning, product brief), personas approved. Better with call transcripts ingested (quotes, themes), own website monitored (product changes for launch posts) and competitors tracked (for anything competitive).

## What the team is trying to do

Keep a weekly calendar of company posts on LinkedIn and the other channels buyers use: launches, customer proof, points of view, event coverage, content promotion, replies. Done means every post is on-message, true, in the audience's language and traceable to a pillar, and the calendar covers the personas and stages the company sells to. The hard part is volume without drift: five posts a week, written fast, by someone who is not the PMM.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Plan the week | Mix of post types by persona and pillar | The messaging pillars and the personas with the least coverage; themes that moved this week; product changes to announce | Messaging, persona canvases, themes, product changes |
| 2 | Write the posts | One idea per post, in the audience's words | Drafts from the message, a quote, the persona's hooks | Messaging, quotes, persona canvas |
| 3 | Launch and product posts | What shipped, for whom | Product changes and the product brief in buyer terms | Product changes, product brief |
| 4 | Customer proof posts | A quote or an outcome | Quotes approved for marketing use, with highlight tags | Quotes |
| 5 | Point-of-view posts | The company's take on a shift | Trends with the "so what", positioning | Trends, positioning |
| 6 | Check | Claims, drift, persona reaction | Claim check and persona review on the batch | Product brief, `review_against_personas` |
| 7 | Schedule and publish | The social tool | Calven does not help here | |
| 8 | Reply | Comments and questions | Answers from the objection handling and the product brief | Messaging (objection handling), product brief |
| 9 | Measure | Reach, engagement, clicks | Calven does not help here | |

## Recommended prompts

### Step 1: the weekly plan

```
Using Calven MCP, plan next week's company social posts.

CONTEXT
Five posts, LinkedIn first. Mix: one launch or product post, one customer proof, one point of view, two content promotions (pieces listed below). Audience: [personas].

PULL FROM THE UNIVERSE
- Our messaging pillars, and which personas and stages each serves.
- Product changes recorded this month.
- Customer quotes approved for marketing use, with highlight tags, newest first.
- The themes and trends that moved most this week.

BUILD
- Five slots: type, persona, pillar, the idea in one line, the evidence from the Universe, the piece it promotes if any.
- A note on which pillar or persona had no post last week, if I paste last week's plan.

OUTPUT
The plan as a table with sources.

GROUNDING
Use only pillars, changes, quotes and trends in the Universe and cite them. Do not invent a product change or a customer line.

[name the personas; paste the pieces to promote and last week's plan]
```

### Step 2: write the batch

```
Using Calven MCP, write the five posts from this plan.

CONTEXT
Below is the plan. Each post: under 150 words, opens with the point not the company name, no hashtags, no exclamation marks, one link at most, in the words [persona] uses. Company voice, plain.

PULL FROM THE UNIVERSE
- The [persona] canvas: messaging hooks and how they talk.
- The message for the pillar each post serves.
- The quote or product change each post cites.

WRITE
- The five posts, each labelled with its slot.
- Under each, the source for the claim or quote.

OUTPUT
The batch in plain text.

GROUNDING
Use only messaging, quotes and product changes in the Universe and cite them. Keep quotes verbatim. Do not add claims the product brief does not support.

[paste the plan and name the persona]
```

### Step 3: a launch post

```
Using Calven MCP, write a launch post for [feature or change].

CONTEXT
LinkedIn, under 120 words. Lead with what changes for the buyer, not the feature name. Audience: [persona].

PULL FROM THE UNIVERSE
- The product change recorded for [feature], with its summary and "so what".
- The product brief section it belongs to.
- The pain it addresses, with a customer quote.

WRITE
- Three openings, each a different angle (the pain, the outcome, the before and after).
- The post, with the one capability line from the brief.

OUTPUT
The openings and the post, with sources.

GROUNDING
Use only the product change and brief in the Universe and cite them. Do not promise an outcome the brief does not state.

[name the feature and the persona]
```

### Step 6: check the batch

```
Using Calven MCP, check these posts before they are scheduled.

CONTEXT
Below is the week's batch.

PULL FROM THE UNIVERSE
- The product brief and claims register.
- Our messaging and positioning.
- The battlecard for any competitor implied.
- The [persona] canvas, and run the persona review on the batch.

CHECK
- Each post: claims correct, wrong, stale or unverified; on-message or drifting; competitor lines within the battlecard.
- The persona's reaction to each: would they stop scrolling, what reads as vendor copy.

OUTPUT
Each post with a verdict and the edit, then the two to fix first.

GROUNDING
Judge only against the Universe and cite. If a post is clean, say so.

[paste the batch and name the persona]
```

### Step 8: reply to a comment

```
Using Calven MCP, draft a reply to this comment.

CONTEXT
A [role] commented on our post: "[comment]". I want a short, honest reply.

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

[paste the comment and the role]
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

## Good practice

- Plan by pillar and persona, not by post type. The gap shows in the plan before it shows in reach.
- Write five at once and check five at once. The batch review catches repetition and drift.
- Use quotes verbatim and only those approved for marketing use.
- Lead launch posts with the product change's "so what", not the feature name.
- Answer comments from the objection handling. Admit a weakness the brief lists; do not argue it.
- Keep competitor names in plain text and inside the battlecard.

## Not covered today

- The social tool, scheduling, publishing, monitoring and engagement numbers.
- Images, video and design.
- Social listening and what competitors post. Competitive signals cover what the competitive intelligence agent recorded, not the competitor's feed.
- Replying from the AI tool. Draft there, post from the social tool.

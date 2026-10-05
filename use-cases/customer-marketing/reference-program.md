# Reference program

**Team:** Customer marketing · also sales, customer success
**Impact:** High. A reference call at the right moment closes deals; a mismatched one stalls them. Matching references to a live deal by persona, segment and competitor, from evidence, is the difference between a pool and a program.
**Prerequisites:** CRM connected (deals, accounts, contacts), call transcripts ingested (quotes), win/loss surveys running (what the reference account said when they bought). Reference consent and fatigue tracking stay in the CRM or advocacy tool.

## What the team is trying to do

Keep a pool of customers willing to speak to prospects, and match the right one to each request: same persona, same segment, ideally the same competitor beaten, with a story the prospect will recognise. Done means sales gets a match with a brief on what the reference will say, and the reference gets asked no more than agreed. Without the company's own deal and call evidence, matching is by memory and the same three customers get burned out.

## The work, end to end

| # | Step | What the team does | Where Calven helps | Pulls from |
|---|---|---|---|---|
| 1 | Build the pool | Find customers with a strong story and a willing contact | Won accounts with positive quotes, competitive wins and named drivers; the contacts who spoke | CRM deals, quotes, deal drivers, CRM contacts |
| 2 | Profile each reference | Record segment, persona, products, competitor beaten, the story in a line | Account firmographics, the deal's competitors and drivers, the persona of the contact | CRM accounts, surveyed deals, personas |
| 3 | Take the request | Sales asks for a reference for a live deal | The live deal's segment, persona, stage and competitor from the CRM | CRM deals, CRM contacts |
| 4 | Match | Pick the reference closest to the prospect | Reference accounts ranked by match on segment, persona, competitor and the objection the prospect raised | CRM accounts, deal drivers, quotes |
| 5 | Brief both sides | Tell the reference what the prospect cares about, tell the rep what the reference will say | What the prospect's persona asks about; the reference's own words on those topics | Persona canvas, quotes |
| 6 | Schedule and run | Introduce, schedule, follow up | Calven does not help here | |
| 7 | Track and thank | Log usage, manage fatigue, recognise the advocate | Calven does not help here | |
| 8 | Refresh the pool | Add new wins, retire tired references | New won deals with quotes since the last refresh | CRM deals, quotes |

## Recommended prompts

### Step 1 and 2: build and profile the pool

```
Using Calven MCP, build a reference candidate list.

CONTEXT
I am setting up the reference program. I want every customer account with evidence of a strong story, profiled so I can match them to deals later.

PULL FROM THE UNIVERSE
- Won deals over [window] with the account's industry, size, region, the competitors in play and who we beat.
- The deal drivers that decided each, and the buyer survey summary where one exists.
- Positive customer quotes from each account, especially competitive wins and quantified outcomes, with speaker and role.
- The contacts on each account with their buying role.

BUILD
- One row per account: segment, products, competitor beaten, the story in one line, the best quote, the likely reference contact and their role, evidence strength (survey, calls, both).
- Group by segment and by competitor beaten.

OUTPUT
The profiled list as a table I can load into our reference tracker.

GROUNDING
Use only deals, drivers, quotes and contacts in the Universe and cite them. Willingness to be a reference is not in Calven; leave that column empty.

[name the window and any segment to focus on]
```

### Step 3 and 4: match a reference to a live deal

```
Using Calven MCP, find the best reference for the [deal] opportunity.

CONTEXT
Sales needs a reference call for [deal] at [account]. The prospect's contact is a [persona], they are weighing [competitor], and their main concern is [concern]. Our reference pool is pasted below.

PULL FROM THE UNIVERSE
- The [deal] record: segment, size, stage, competitors, contact roles.
- For each account in my pool: its segment, the competitor it chose us over, its deal drivers, and its quotes on [concern].
- The [persona] canvas: what this persona asks a peer.

MATCH
- Rank the pool by match on segment, persona of the reference contact, competitor beaten and whether they spoke to [concern].
- For the top three: why they match, the quote that shows it, and the risk (different size, different product, old deal).

OUTPUT
The ranked top three with reasons, then your recommendation.

GROUNDING
Match only on evidence in the Universe and cite it. Do not claim a reference said something about [concern] unless a quote shows it.

[paste the reference pool as account names; name the deal, persona, competitor and concern]
```

### Step 5: brief the reference and the rep

```
Using Calven MCP, write the two briefs for the reference call between [reference account] and [prospect account].

CONTEXT
[reference contact] at [reference account] will speak to [prospect contact], a [persona] at [prospect account], who is weighing [competitor].

PULL FROM THE UNIVERSE
- The [persona] canvas: pains, objections and what they need to believe.
- The reference account's quotes and deal drivers on those topics.
- The battlecard for [competitor]: the landmines and where we win, so the rep knows what a peer can say that we cannot.

WRITE
- For the reference: three things the prospect will probably ask, and a reminder of what they told us at the time (verbatim).
- For the rep: what the reference is likely to say, the one topic not to push, and the two questions to suggest the prospect asks.

OUTPUT
Two short briefs, five lines each.

GROUNDING
Use only the Universe and cite it. Do not script the reference; remind them of their own words.

[name both accounts, both contacts, the persona and the competitor]
```

### Step 8: refresh the pool

```
Using Calven MCP, find new reference candidates since [date].

CONTEXT
I refresh the reference pool quarterly. Show me won accounts since [date] that look like strong references.

PULL FROM THE UNIVERSE
- Won deals closed after [date], with segment and competitor beaten.
- Positive quotes from those accounts, especially competitive wins and quantified outcomes.
- The champion or decision maker contact on each.

BUILD
- A table of candidates with the story in one line, the best quote and the contact.
- Which segments or competitors in the current pool they would strengthen.

OUTPUT
The table and a note on gaps the new candidates do not fill.

GROUNDING
Use only the Universe and cite it. Do not include accounts with no quotes or drivers.

[name the date]
```

## Ad hoc questions

- Which customers in [segment] chose us over [competitor]?
- Who at [account] was the champion, and what did they say about why they bought?
- Do we have a customer in [industry] who talked about [concern] positively?
- Which reference candidates have a quantified outcome in their quotes?
- What does the prospect on [deal] care about, based on their persona?
- Which accounts won in the last six months have a [persona] as a contact?
- What did [reference account] say about implementation time?
- Which of our pool accounts beat the same competitor the [deal] prospect is weighing?
- Which segments have no reference candidate with quotes?
- Give me the three best quotes from [reference account] for a prospect worried about [concern].

## Good practice

- Profile the pool once and keep the profile with the tracker. The match prompt works best when it reads a named list.
- Match on the prospect's persona first, then competitor, then segment. A peer in the same role beats a logo in the same industry.
- Brief the reference with their own words. They will say it again, and it will be true.
- Ask Calven what the reference said before you ask them to speak to a concern. A reference who never mentioned security should not be the security reference.
- Keep willingness, consent and usage counts in the tracker. Calven supplies the evidence, not the permission.

## Not covered today

- Reference consent, usage counts, fatigue rules and incentives live in the CRM or the advocacy tool.
- Scheduling, introductions and follow-up happen outside.
- Health of the reference account is not in Calven; check with the CSM.

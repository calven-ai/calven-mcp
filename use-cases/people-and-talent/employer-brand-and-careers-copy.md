# Employer brand and careers copy


You're writing the careers page, the candidate-facing story and outreach to passive candidates, and you want it to sound like the company customers know. You get an employer narrative consistent with positioning, a proof section in real customer language, and outreach a candidate in the market finds specific. Calven keeps the careers page from saying "fast-growing startup" while the real story waits for the interview.

## Prompts

### Write the careers page company story

```
Using Calven MCP, write the company story section of our careers page.

CONTEXT
A candidate who has never heard of us reads this first. Under 200 words: what we do, for whom, why it matters now, and one piece of proof. Same story the website tells.

PULL FROM THE UNIVERSE
- Our positioning statement, category and "why now" trends.
- The core narrative and one-liner from messaging.
- Two customer quotes about outcomes, attributed as our settings allow.

WRITE
- The story in three short paragraphs, then the proof in one.

OUTPUT
The section with the sources below it.

GROUNDING
Use only positioning, messaging and quotes in the Universe, cited. Do not claim traction, growth or customer names the Universe does not hold.
```

### Write outreach to a passive candidate

```
Using Calven MCP, write an outreach message to a passive candidate for the role below.

FILL IN
- Role: [role]

CONTEXT
LinkedIn message, under 120 words. The candidate works in our market and should recognise the job from the buyers, the category and the competitive context.

PULL FROM THE UNIVERSE
- The persona this role sells to or supports, in one line.
- Our category and the one-liner.
- The competitive alternatives from positioning, described without naming rivals.

WRITE
- Three variants: lead with the buyer, lead with the category, lead with the problem.

OUTPUT
The three messages.

GROUNDING
Use only the Universe for the market facts and cite them. No claims about growth, funding or customers beyond the boilerplate.
```

### Check the careers page against positioning

```
Using Calven MCP, check our careers page against our positioning and claims.

FILL IN
- Copy: [paste the careers page copy]

CONTEXT
The copy is the current careers page. I want anything off-message or unsupported flagged.

PULL FROM THE UNIVERSE
- Positioning, messaging boilerplate, the claims register.

CHECK
- Flag lines that describe a different category or buyer, or that make claims with no support.
- Suggest the on-message version.

OUTPUT
The copy annotated, then a clean version.

GROUNDING
Judge only against the Universe and cite each flag.
```

## Advanced prompts

### Test the story on candidates who know our buyers

```
Test the careers page and outreach on a synthetic panel of candidates who already know our buyers. Use Calven MCP for the buyers they sold to, the competitors they might work at and our real story.

FILL IN
- Careers copy: [paste the page or outreach message]
- Roles we're hiring: [roles]
- Candidate profiles: [describe two or three, e.g. "AE at a competitor, three years", "SDR from a bigger vendor"]

CONTEXT
Strong GTM candidates have sold to our buyers and heard every pitch in the category. They read a careers page like a buyer reads a website. I want to know who'd apply, who'd scroll past and why.

FROM CALVEN
- Our positioning: category, unique attributes, proof points.
- The personas candidates would sell to, with goals and pains.
- The battlecards for the competitors a candidate might be at: strengths and weaknesses.
- Customer quotes that show the product working.

SIMULATE
- Build each candidate from their profile plus what the Universe says about the buyers and rivals they know. Give each a reason to stay where they are.
- Each reads the copy cold and reacts in the first person: what they believe, what sounds like every startup, what they'd check, and whether they'd apply.
- Then each asks the three questions they'd ask in a first call. Answer them from the Universe and note what the copy should have said.

OUTPUT
The panel's reactions, a table of lines that landed and lines that lost them, the questions they asked, and a revised version of the copy.

GROUNDING
Candidate panellists are simulated and labelled as such; their market knowledge comes from the Universe, cited. Don't invent a customer, metric or growth claim for the rewrite.
```

### Fact-check the careers page like a sharp candidate

```
Fact-check the careers page as a sceptical senior candidate doing diligence before an interview. Use Calven MCP for the claims we can back and the ones we can't.

FILL IN
- Careers copy: [paste the page]

CONTEXT
Senior candidates check claims. They ask their network, read the reviews and test the story in the first interview. Any claim we can't back costs us the candidate and the next one they talk to.

FROM CALVEN
- Our positioning and proof points.
- Claims from our own documents and site, with their status (supported, unsupported, concerning).
- Customer quotes tagged with a quantified outcome or competitive win.
- Analyst findings that name us, if any.

RED-TEAM
- Play the candidate. List every claim on the page: about the market, the product, customers, traction, the team.
- Sort each: backed by the Universe (cite it), plausible but unbacked internally, or contradicted.
- For each unbacked claim, write the question the candidate will ask in the interview and say whether the hiring manager has an answer in the Universe.
- Rewrite the page so every claim is either backed or cut, keeping the voice.

OUTPUT
The claim table with verdict and source, the interview questions the page invites, and the rewritten page.

GROUNDING
Cite every backed claim. Don't upgrade a claim from unsupported to supported, and don't invent a number to replace a vague one; flag it for the founder.
```

## Ad hoc questions

- What is our one-liner for a candidate who has never heard of us?
- Which trends make this the right time to join, per our positioning?
- Give me two customer quotes I can put on the careers page.
- What is the category we claim?
- How would I describe the buyer an AE here sells to, in one line?
- Are there analyst findings that name us?
- Is "[claim]" on the careers page supported anywhere in the Universe?
- What problem do we solve, in customers' words?
- Which customer outcome would impress a candidate who knows our market?
- What do we do differently from [competitor], in one line a candidate would repeat?
- Which market trend explains why our category exists, per our positioning?
- Which claims about us are marked unsupported in Calven?
- Who are our buyers, described so a candidate who has never sold to them gets it?
- What's the hardest objection a new rep here faces, as a candidate would see it?
- Which proof point works on a careers page without naming the customer?

---
name: competitive-brief
description: Build a sourced competitive brief from Calven when the user asks how the company compares, wins, loses, positions, handles objections, or responds to a named competitor.
---

# Competitive brief

Ground the analysis in the connected Calven workspace. Separate documented evidence from inference and gaps.

1. Call `get_competitor` with the competitor name. Request only the needed parts from `deep_dive`, `battlecard`, and `signals`; request all three for a full brief.
2. Read the company's relevant positioning or messaging with `get_strategy_document`.
3. Use `list_records` for additional evidence when needed:
   - `competitive_signals` for dated moves by the competitor;
   - `deal_drivers` for reasons real deals were won or lost;
   - `quotes` for customer language;
   - `claims` for assertions made in the company's own published material.
4. Use `get_record` only to expand a returned record that matters to the conclusion.
5. Preserve dates and source references. Prefer current evidence when two sources conflict, and name the conflict.

Structure a full brief as:

- executive read;
- where we win;
- where the competitor wins;
- proof points and objections;
- recent changes;
- recommended talk track;
- evidence gaps.

Do not invent pricing, capabilities, proof points, or customer claims. Do not turn an inference into a sourced fact.

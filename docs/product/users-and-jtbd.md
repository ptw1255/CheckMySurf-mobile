# Users and jobs-to-be-done

## User map

### Primary: local recreational surfer

- **Context:** has one or a few feasible beaches, limited free time, and personal condition thresholds.
- **Trigger:** a possible session opens before work, after work, or on a weekend.
- **Functional job:** decide whether, where, and when to surf.
- **Emotional job:** feel prepared rather than second-guessing a wasted trip.
- **Social job:** coordinate responsibly without appearing unreliable or reckless.
- **Evidence:** home spot, skill, wave range, and cold tolerance are modeled in settings ([`app/(tabs)/settings.tsx`](../../app/(tabs)/settings.tsx)).
- **Inference:** these settings imply repeat local use; no user research is present.

### Secondary: learning or occasional surfer

Needs terminology translated into decision meaning and must not infer that a high generic score is appropriate for their ability. Skill level exists as stored state, but current detail rendering does not consume it.

### Secondary: household or session coordinator

Compares a plan against another person’s availability, equipment, and tolerance. Sharing and multi-person fit are hypotheses, not shipped capabilities.

### Negative users

- Emergency or maritime operators requiring authoritative observations.
- Travelers requiring comprehensive global coverage.
- Competitive forecasters needing model layers and expert controls.
- Anyone seeking a safety guarantee.

Designing for these users would dilute the focused consumer decision job and create unsupported reliability expectations.

## JTBD statements

1. **When** a short free-time window appears, **I want to** check whether my home spot fits my ability and tolerance, **so I can** commit or make another plan quickly.
2. **When** nearby beaches differ, **I want to** compare the few conditions that drive the decision, **so I can** choose without opening several sources.
3. **When** a forecast score looks promising, **I want to** understand the inputs and freshness, **so I can** judge how much confidence to place in it.
4. **When** the preferred spot is poor, **I want to** see the next viable window or alternative, **so I can** preserve the opportunity rather than abandon it.
5. **When** data is unavailable, **I want to** know what failed and what information is still trustworthy, **so I can** avoid acting on false certainty.
6. **When** my comfort or skill changes, **I want to** update thresholds once, **so I can** interpret future forecasts consistently.

## User stories and acceptance intent

| Story | Outcome-oriented acceptance intent |
|---|---|
| As a repeat user, I want my home spot first | Home spot persists, is identifiable without color alone, and has a clear fallback |
| As a cautious learner, I want fit explained | Recommendation cites preference/input mismatches and avoids safety guarantees |
| As a commuter, I want a best window | Time, time zone, freshness, and missing periods are explicit |
| As an error-state user, I want recovery | Retry is reachable, stale data is labeled, and failure does not masquerade as empty |
| As an assistive-tech user, I want equivalent meaning | Cards, score, star, sliders, and charts have labels, values, focus order, and large-text resilience |

## Journey

| Stage | User question | Current evidence | Desired progress | Failure risk |
|---|---|---|---|---|
| Trigger | “Could I go?” | App launch | Answer begins within seconds | Slow/blank startup |
| Orient | “Which spot?” | Beach list and home marker | Rank by relevance, not unsupported certainty | Generic score dominates |
| Evaluate | “Does it fit me?” | Detail cards and timelines | Explain fit and tradeoffs | Preferences unused |
| Commit | “When and where?” | Forecast views | Save/share a decision snapshot | Data changes unnoticed |
| Recheck | “Has it changed?” | Pull-to-refresh | Show what changed and freshness | Refresh ambiguity |
| Learn | “Were my thresholds right?” | No evidence | Optional private feedback loop | Engagement pressure |

## Forces of progress

| Force | Examples to validate |
|---|---|
| Push of current situation | Too many tabs, uncertain interpretation, wasted travel |
| Pull of new solution | One local view, personal thresholds, explainable timing |
| Habit of present | Familiar weather/surf sites, checking messages or cameras |
| Anxiety of new solution | Accuracy, hidden model logic, battery/data use, safety |

Adoption requires reducing anxiety and switching cost, not merely adding forecast detail.

## Research plan

- Observe 6–8 decision sessions across experience levels; ask participants to narrate inputs and stopping rules.
- Run concept tests comparing raw detail, generic score, and explainable personal fit.
- Diary-test changes in plan, data freshness expectations, and alert tolerance.
- Include screen-reader, large-text, low-connectivity, and color-vision scenarios.
- Treat sample sizes as learning tools, not statistical proof; record contradictions by segment.

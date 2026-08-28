# Product brief

## WHY: the decision problem

People deciding whether and where to surf must combine changing conditions, personal tolerance, travel effort, and a narrow time window. Raw forecasts transfer the integration burden to the user. A mobile product earns trust when it makes uncertainty legible and helps a person reach a timely go / wait / choose-another-spot decision without pretending certainty.

**Evidence:** the app consolidates beach, wave, weather, hourly, and daily information and exposes a quality score and rating ([`app/(tabs)/detail.tsx`](../../app/(tabs)/detail.tsx)). **Inference:** reducing decision effort is the coherent product intent. **Hypothesis:** users value a transparent personalized recommendation more than additional raw variables.

## Product thesis

For recreational surfers choosing among supported beaches, CheckMySurf should turn fragmented, time-sensitive conditions into a fast, explainable, preference-aware decision. It wins through focused local comparison and clarity, not breadth of global forecasting.

## Product promise

“Know whether a nearby session fits you, why, and when to go.”

The promise is aspirational. Current repository evidence supports condition review and stored preferences, but not a preference-aware recommendation.

## Outcomes

1. Reduce time and context switching required to decide.
2. Increase confidence that the selected window fits personal wave and cold tolerance.
3. Preserve trust when data is delayed, unavailable, or ambiguous.
4. Avoid nudging users into unsafe decisions; forecasts remain inputs, not guarantees.

## Scope

**Current evidence-backed scope**

- List supported beaches and select a home spot ([`app/(tabs)/index.tsx`](../../app/(tabs)/index.tsx)).
- Show current surf/weather, hourly conditions, and multi-day forecasts ([`app/(tabs)/detail.tsx`](../../app/(tabs)/detail.tsx)).
- Persist skill, wave range, cold tolerance, and home spot locally ([`context/AppContext.tsx`](../../context/AppContext.tsx)).
- Refresh from API endpoints with a timeout and surfaced failures ([`services/api.ts`](../../services/api.ts)).

**Candidate scope, subject to validation**

- Explainable “fit for me” assessment using preferences.
- Freshness, source, and confidence cues.
- Beach comparison and shareable decision snapshot.
- Opt-in alerts for a user-defined window.
- Graceful last-known-data behavior with explicit staleness.

## Non-goals

- Replacing official hazard guidance, local judgment, or emergency information.
- Claiming real-time observation or forecast accuracy without provenance.
- Social feeds, public ranking, commerce, travel booking, or broad weather coverage.
- Silent background tracking or default push notifications.
- Optimizing “sessions started” at the expense of safety or informed choice.

## Principles

1. **Decision before data density:** lead with fit, timing, and reason.
2. **Uncertainty is product content:** show freshness and missing inputs.
3. **Safety over engagement:** never frame a score as permission.
4. **Personalization is inspectable:** show which preference affected the result.
5. **Local and fast:** optimize a repeat home-spot ritual.
6. **Accessible by default:** do not encode quality only through color or emoji.
7. **Privacy-minimal:** preferences can remain local unless sync creates validated value.

## Constraints and dependencies

| Item | Type | Product implication |
|---|---|---|
| Configured backend and three API routes | Evidence: [`services/api.ts`](../../services/api.ts) | Availability and semantics are external dependencies |
| Local AsyncStorage | Evidence: [`context/AppContext.tsx`](../../context/AppContext.tsx) | Settings are device-local; storage failures are currently silent |
| Supported beach catalog | Evidence: API response consumed by app | Geographic breadth depends on backend coverage |
| Quality score semantics | Assumption | Must be documented before recommendation language grows stronger |
| Safety/provenance content | Hypothesis | Requires source policy and UX validation |

## Key risks

- **Trust:** opaque scores can overstate confidence.
- **Data:** stale or partial API results can look current.
- **Safety:** users may mistake convenience guidance for hazard assessment.
- **Cold start:** empty beach data provides little recovery context.
- **Personalization:** collecting preferences without using them creates false expectations.
- **Accessibility:** compact visual cards may not provide sufficient labels or focus order.

## Open decisions

Validate score meaning, source freshness, preference impact, alert tolerance, supported geography, and the smallest safe recommendation vocabulary before expanding features.

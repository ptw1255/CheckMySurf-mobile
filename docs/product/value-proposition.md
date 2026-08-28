# Value proposition

## Value proposition canvas

| Customer side | Product response |
|---|---|
| **Jobs:** decide go/wait/where/when; interpret fit; coordinate; recover from missing data | **Products/services:** local beach list, condition detail, preferences, refresh; proposed comparison and explainable fit |
| **Pains:** fragmented sources, generic scores, stale data, terminology, wasted travel, unsafe overconfidence | **Pain relievers:** consolidated view; explicit freshness; preference deltas; failure recovery; non-guarantee language |
| **Gains:** quick confidence, better timing, fewer checks, transparent tradeoffs, repeat ritual | **Gain creators:** home-first summary; best-window explanation; change cues; optional threshold alerts |

## Alternatives

| Alternative | Why users choose it | Opportunity for CheckMySurf |
|---|---|---|
| General weather app | Familiar, fast, broad | Connect weather to surf-specific decisions |
| Specialist surf forecast | Rich models and coverage | Offer simpler local interpretation |
| Cameras / firsthand observation | High immediacy | Complement with planning horizon and provenance |
| Group messages / local knowledge | Trusted context | Make a forecast snapshot easy to discuss |
| Do nothing / drive and see | Zero setup | Make decision cost lower than uncertainty cost |

## Differentiation hypothesis

CheckMySurf should not compete on the number of maps or forecast layers. Its defensible wedge is a preference-aware, explainable local decision loop: home spot → personal fit → best window → refresh/change. This remains a **hypothesis** until preference use improves task completion or confidence against a non-personalized control.

## Proof available today

- **Evidence:** beach selection and home marking exist ([`app/(tabs)/index.tsx`](../../app/(tabs)/index.tsx)).
- **Evidence:** current, hourly, and daily surf/weather detail exists ([`app/(tabs)/detail.tsx`](../../app/(tabs)/detail.tsx)).
- **Evidence:** personal thresholds persist locally ([`context/AppContext.tsx`](../../context/AppContext.tsx)).
- **Evidence:** network failures and loading are represented.
- **Not proven:** forecast validity, recommendation usefulness, user demand, retention, safety impact, alert value, or reduced travel waste.

## Assumptions to retire

| Assumption | Test | Pass signal |
|---|---|---|
| A single quality score speeds decisions | Moderated comparison | Faster correct interpretation without lower confidence calibration |
| Preferences are decision-critical | Prototype threshold explanation | Users can explain why a spot fits or fails |
| Home-spot use is frequent | Opt-in event analysis | Repeated sessions center on a small set of spots |
| Alerts create value | Concierge alert diary | Alerts lead to useful rechecks without unacceptable mute/uninstall intent |
| Last-known data helps outages | Error-state test | Users distinguish stale from live data and choose appropriately |

## Product narrative

**Before:** “I have a possible window, but each source tells part of the story.”

**After:** “I can see whether this spot fits me, which window is strongest, what changed, and how fresh the inputs are.”

**Boundary:** “This helps me plan; it does not certify conditions or replace official guidance.”

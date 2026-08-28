# CheckMySurf product portfolio

## Why this portfolio exists

Surf decisions are perishable: a useful answer must arrive before conditions, schedules, or travel constraints change. The portfolio frames CheckMySurf as a decision-support product, not merely a forecast display.

| Artifact | Decision it supports |
|---|---|
| [Product brief](product-brief.md) | Why the product should exist and what it should not become |
| [Users and JTBD](users-and-jtbd.md) | Whose progress matters, in which situations |
| [Value proposition](value-proposition.md) | Which gains to create and alternatives to beat |
| [Pain points and opportunity costs](pain-points-and-opportunity-costs.md) | Which pains deserve priority and how to measure them |
| [Wireframes](wireframes.md) | How the decision journey behaves across states |
| [Roadmap and success metrics](roadmap-and-success-metrics.md) | How to learn, sequence work, instrument, and guard quality |

## Evidence discipline

- **Evidence** means observable repository behavior or documentation, cited with a safe repo-relative path.
- **Inference** is a conclusion supported by evidence but not directly validated with users.
- **Hypothesis** is a falsifiable product belief requiring research or measurement.
- **Assumption** is an unverified dependency or constraint.

Safe evidence anchors: beach list and navigation in [`app/(tabs)/index.tsx`](../../app/(tabs)/index.tsx); condition detail in [`app/(tabs)/detail.tsx`](../../app/(tabs)/detail.tsx); stored preferences in [`app/(tabs)/settings.tsx`](../../app/(tabs)/settings.tsx) and [`context/AppContext.tsx`](../../context/AppContext.tsx); API endpoints, timeout, and errors in [`services/api.ts`](../../services/api.ts). No user counts, conversion rates, forecast accuracy, or outcome improvements are asserted.

## Current status

**Evidence:** a mobile client exists with beach selection, detail, refresh, settings, loading, and error paths. **Inference:** it is an early functional product rather than a validated product-market fit. **Gap:** there is no repository evidence of analytics, alerting, confidence provenance, offline freshness, or preference-based recommendation logic.

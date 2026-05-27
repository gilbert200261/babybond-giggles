# Architecture

> **Last updated:** 2026-05-27
> **Version:** v1 (static, no backend)

## Diagram

```mermaid
flowchart TD
    User([Parent / Caregiver])

    subgraph Browser["Browser (React App)"]
        App["App.tsx\nHeader + layout"]
        Home["Home.tsx\nForm state & submit logic"]
        Inputs["Form Inputs\nAgeDropdown · MoodChips\nTimeDropdown · ActivityChips"]
        Mock["mockActivities.ts\nStatic lookup table\n(bundled with app)"]
        Card["ActivityCard.tsx\nDisplays result"]
    end

    CDN["Cloudflare Pages\n(static file hosting)"]

    User -->|opens app| CDN
    CDN -->|serves HTML + JS bundle| Browser
    App --> Home
    Home --> Inputs
    Home -->|pickActivity(age, type)| Mock
    Mock -->|returns Activity object| Home
    Home -->|activity state set| Card
    Card -->|onReset| Home
```

## How it works

The parent opens the app, which is served as a static bundle from Cloudflare Pages. Everything after that happens entirely in the browser — no server calls, no API. The parent fills in four fields; `Home.tsx` holds that form state. When they click Generate, `pickActivity()` looks up a matching entry in `mockActivities.ts` (a plain JavaScript object bundled into the app). The result gets stored in React state, which causes the form to disappear and `ActivityCard` to appear. Clicking "Try a different activity" resets that state and brings the form back.

## Key decisions

| Decision | Reason |
|---|---|
| No backend in v1 | The PRD explicitly rules out AI-generated suggestions and user accounts for v1. A static app is simpler to ship and host. |
| Activity data as a bundled JS object | With ~20 activities, a database would be overkill. Bundling the data means zero network requests and instant results. |
| Cloudflare Pages for hosting | Free tier is sufficient for v1. The static build output from Vite deploys directly with no server configuration needed. |

## What changes in future phases

- **Phase 2 (AI generation):** A `functions/api/suggest.ts` Cloudflare Pages Function will replace `mockActivities.ts`. The browser will POST form data to `/api/suggest`, which calls the Claude API server-side and returns a generated activity. The Claude API key stays secret in a Cloudflare environment variable.
- **Phase 3 (Favorites):** Saved favorites will use `localStorage` in v1. If cross-device sync is added later, Cloudflare D1 (relational) or KV (simple key-value) are the natural choices on this stack.

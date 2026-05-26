# Build Plan

> **Status:** In Progress
> **Last updated:** 2026-05-25
> **Current phase:** Phase 0

---

## Strategy

- **Slicing principle:** Vertical slices by user story — each phase ships one parent-visible outcome end-to-end.
- **Critical path:** Phase 0 (scaffolding) and Phase 2 (AI generation) unblock everything else. Nothing is shippable without the form working and the API returning results.
- **What was deferred:** Saving favorites (Phase 3) was pushed after the core loop works. Dark mode, animations, logo, and sharing are out of scope for v1.
- **Context rule:** Start every phase with `/clear`. Load only the files and doc sections listed in that phase's "Context to load." Don't load the full repo.

---

## Phases

### Phase 0 — Scaffolding

**Goal:** A React + Tailwind app is deployed to Cloudflare Pages and loads in a browser.

**Context to load:** `CLAUDE.md`, `docs/DESIGN.md` §3 (component approach).

**Files this phase creates/modifies:**
- `package.json` — Vite + React + Tailwind + Heroicons dependencies
- `vite.config.ts` — Vite config
- `tailwind.config.js` — Tailwind config with Nunito font
- `index.html` — root HTML with Nunito Google Font link
- `src/main.tsx` — React entry point
- `src/App.tsx` — shell with app name header in baby blue
- `src/index.css` — Tailwind base styles
- `README.md` — add deployed Cloudflare Pages URL when live

**Tests this phase adds:** App renders without crashing (Vitest + React Testing Library smoke test).

**Done-when:**
- [ ] `npm run dev` serves the app locally with no errors.
- [ ] App header shows "BabyBond & Giggles" in Nunito font on a white background.
- [ ] Deployed to Cloudflare Pages at a public URL.
- [ ] Public URL is linked in `README.md`.

**Session budget:** 1 session.

**Risks / unknowns:** Cloudflare Pages setup requires a Cloudflare account and `wrangler login`. Resolve before starting.

---

### Phase 1 — Input Form

**Goal:** A parent can fill out all 4 inputs on the home screen and see their selections clearly.

**Context to load:** `CLAUDE.md`, `docs/PRD.md` §3 (user inputs), `docs/DESIGN.md` §2 (IA), §3 (component approach), §4 (visual tokens), `src/App.tsx`.

**Files this phase creates/modifies:**
- `src/components/AgeDropdown.tsx` — Headless UI `Listbox` for baby age (0–24 months)
- `src/components/TimeDropdown.tsx` — Headless UI `Listbox` for available time (5, 10, 15, 20, 30 min)
- `src/components/MoodChips.tsx` — tap chip buttons for baby mood (Happy, Fussy, Sleepy, Curious, Calm)
- `src/components/ActivityChips.tsx` — tap chip buttons for activity type (Tummy Time, Sensory, Music, Reading, Bonding)
- `src/pages/Home.tsx` — home screen assembling all 4 inputs + a "Get Activity Idea" submit button
- `src/App.tsx` — render Home page

**Tests this phase adds:**
- Each dropdown renders and shows options.
- Mood chip shows baby blue `2px solid` border when selected.
- Activity chip shows baby blue `2px solid` border when selected.
- Submit button is disabled when no inputs are selected.

**Done-when:**
- [ ] Parent can select a baby age from the dropdown.
- [ ] Parent can select available time from the dropdown.
- [ ] Parent can tap a mood chip and see it highlighted with a border.
- [ ] Parent can tap an activity type chip and see it highlighted with a border.
- [ ] "Get Activity Idea" button is visible and styled in baby blue (`#A8D8EA`).
- [ ] Layout is single-column and usable on a phone screen.

**Session budget:** 1 session.

**Risks / unknowns:** Chip selected state must use border + not color alone (accessibility). Flag if contrast on white background fails WCAG AA.

---

### Phase 2 — AI Activity Generation

**Goal:** A parent submits the form and gets a full activity suggestion card from the AI.

**Context to load:** `CLAUDE.md`, `docs/PRD.md` §4 (example output), §6 (tech shape), `docs/DESIGN.md` §2 (hero screen), §4 (visual tokens), `src/pages/Home.tsx`, `src/components/`.

**Files this phase creates/modifies:**
- `functions/api/suggest.ts` — Cloudflare Pages Function that calls the Claude API (keeps API key secret server-side)
- `src/components/ActivityCard.tsx` — results card showing activity name, supplies, steps, learning benefit, safety reminder; styled with soft palette and `rounded-2xl`
- `src/components/LoadingSpinner.tsx` — shown while AI is generating
- `src/pages/Home.tsx` — add submit handler, loading state, and results display

**Tests this phase adds:**
- `suggest` function returns a valid activity object for valid inputs.
- `ActivityCard` renders all 5 fields (name, supplies, steps, learning benefit, safety reminder).
- Loading spinner appears while fetch is in progress.

**Done-when:**
- [ ] Parent submits form → loading spinner appears.
- [ ] AI returns an activity and the card renders with all 5 fields.
- [ ] Safety reminder is always visible on the card.
- [ ] Card uses `rounded-2xl`, `shadow-sm`, and the soft color palette.
- [ ] Claude API key is stored as a Cloudflare secret (not in code).

**Session budget:** 1–2 sessions.

**Risks / unknowns:** Claude API key must be set via `wrangler secret put ANTHROPIC_API_KEY` before deploy. AI prompt needs testing to ensure output is consistently structured for all input combinations.

---

### Phase 3 — Save Favorites

**Goal:** A parent can save an activity and view their saved favorites.

**Context to load:** `CLAUDE.md`, `docs/PRD.md` §4 (feature 10), `docs/DESIGN.md` §8 (out of scope note on localStorage), `src/components/ActivityCard.tsx`, `src/App.tsx`.

**Files this phase creates/modifies:**
- `src/hooks/useFavorites.ts` — custom hook managing favorites in `localStorage`
- `src/components/FavoriteButton.tsx` — heart/star button on the activity card to save/unsave
- `src/pages/Favorites.tsx` — page listing all saved activities as cards
- `src/App.tsx` — add routing to `/favorites`

**Tests this phase adds:**
- Saving an activity persists it in localStorage.
- Favorites list renders saved activities.
- Removing a favorite updates the list immediately.
- Favorites persist after page refresh.

**Done-when:**
- [ ] "Save" button appears on the activity card.
- [ ] Tapping save adds the activity to favorites.
- [ ] Parent can navigate to a favorites screen and see saved activities.
- [ ] Removing a favorite works.
- [ ] Favorites survive a page refresh.

**Session budget:** 1 session.

**Risks / unknowns:** localStorage has a ~5MB limit — fine for v1. Cross-device sync is explicitly out of scope.

---

## Decision log

| Date | Phase touched | Change | Reason |
|---|---|---|---|
| 2026-05-25 | — | Initial plan created | PRD and DESIGN.md complete |

---

## Handoff notes

- Public Cloudflare Pages URL deployed and linked from `README.md`.
- All Must-have user stories from `docs/PRD.md` §4 covered by passing tests.
- Architecture diagram generated and committed to `docs/architecture.md`.
- Demo video (≤5 min) and PRD explainer video (≤5 min) linked from `README.md`.

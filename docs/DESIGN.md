# Design Brief

_This file is the source of truth for UI/UX decisions on this project. Fill it out with the `design-brief` skill after the PRD is solid. Keep it short — a design brief is a compass, not a spec._

## 1. Visual identity

**Mood (3–5 adjectives):** Soft, calm, cute, parent-friendly, simple

**Reference apps:**
- **BabyCenter** — borrow the warm, safe, trustworthy tone. Soft colors, nothing clinical or alarming. Parents should feel like the app is on their side.
- **Pinterest** — borrow the card-based layout. Activity ideas show up as clean, browsable cards so parents can quickly scan the activity, supplies, steps, and safety reminder.

**Anti-references:** Clinical medical sites — no cold white-on-white layouts, no dense medical text, nothing that feels like a hospital form.

**Brand constraints:** None — starting fresh, no existing logo or colors.

## 2. Information architecture

**Primary screens (top-level routes):**
- `/` — Home: input form where parents enter baby age, mood, available time, and activity type
- `/result` — Results: the activity suggestion card (name, supplies, steps, learning benefit, safety reminder)

**Navigation model:** Single page app, no persistent nav needed. A simple header with the app name is enough. No side nav or hamburger menu for v1.

**The hero screen:** The results card. In 3 seconds it should communicate: "This is exactly what I needed, and it's safe for my baby."

## 3. Component approach

- **Framework:** React.
- **Component library:** [Headless UI](https://headlessui.com/) — `Listbox` for age and time dropdowns; simple styled button chips for mood and activity type selection.
- **Styling:** Tailwind CSS.
- **Icons:** Heroicons.
- **Custom components:** Mood chip buttons and activity type chip buttons (not covered by Headless UI — build from scratch as styled `<button>` elements). Selected state shown with a `2px solid` border in the primary baby blue `#A8D8EA`, so selection is clear without relying on color alone.

**Why this stack:** Headless UI gives accessibility (focus management, ARIA, keyboard nav) for free; Tailwind makes the styling decisions explicit in markup. Together they let an AI-assisted developer move fast without shipping inaccessible junk.

## 4. Visual tokens

- **Color:**
  - Primary (baby blue): `#A8D8EA` — buttons, header, key highlights
  - Accent (soft pink): `#F9C0CB` — cute accent areas, chip selections
  - Background (white): `#FFFFFF` — page background
  - Highlight (soft yellow): `#FFF3B0` — cheerful highlights, learning benefit section
  - Decorative (light purple): `#D4B8E0` — small decorative details, borders
  - Text (dark neutral): `#3D3D3D` — all body text, readable on cream
  - Muted text: `#8A8A8A` — captions, labels
  - Success: `#A8D8A8` — safety reminder badge (soft green)

- **Type:**
  - Display font: [Nunito](https://fonts.google.com/specimen/Nunito) — rounded, friendly, cute. Use for headings and the app name.
  - Body font: Nunito (same) — keeps the look unified and soft.
  - Sizes: h1 `text-3xl`, h2 `text-xl`, body `text-base`, small `text-sm`

- **Spacing scale:** Tailwind defaults.

- **Radius:** `rounded-2xl` everywhere — soft and rounded to match the cute, calm mood. Cards, buttons, inputs all use the same value.

- **Shadow:** `shadow-sm` only — one subtle elevation for cards. No heavy drop shadows.

## 5. Accessibility floor

- Keyboard navigable end-to-end.
- WCAG AA contrast on all text.
- Forms have visible labels (no placeholder-as-label).
- Focus states are visible and not removed.
- Color is never the only way to convey information.

## 6. Responsive strategy

- **Breakpoints:** Tailwind defaults (`sm`, `md`, `lg`).
- **Smallest target:** Phone first — designed for one-handed use by a parent holding a baby.
- **What changes at each breakpoint:**
  - Mobile (default): single column, full-width cards, large tap targets on all buttons and chips.
  - `sm` (640px+): centered content with comfortable side padding.
  - `md` (768px+): max-width container, results card gets a bit more breathing room.

## 7. Risks & unknowns

- The soft color palette (baby blue, pink, cream, yellow, purple) needs careful contrast checking — pastel colors often fail WCAG AA on white/cream backgrounds. Use a contrast checker before finalizing text colors.
- Mood and activity type chips need a clear selected state that doesn't rely on color alone (add a checkmark icon or border change).
- Saved favorites need a storage decision — browser localStorage is simplest for v1; revisit if users want cross-device sync later.

## 8. Out of scope (for v1)

- Dark mode
- Animations or confetti on activity generation
- Custom logo or baby illustrations
- Sharing activities (copy link, share to WhatsApp)
- Cross-device favorites sync (localStorage only for v1)

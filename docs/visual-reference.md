# Linemate — Visual Reference

Companion document to the PRD. Read both before building.

This document translates aesthetic decisions into concrete specifications. Where the PRD describes intent, this document describes execution. Where they disagree, this document wins on visual matters and the PRD wins on product matters.

---

## 1. Aesthetic thesis

Linemate is a junior hockey team's stat sheet, redesigned by someone who reads The Athletic's longform features and shops at Aesop. It's a modern SaaS landing page wearing editorial restraint — cream paper, condensed display type with jersey-nameplate energy, hairline rules instead of cards, and a single hit of deep red used exactly once on the primary CTA. The page should feel printed, not rendered. A 17-year-old should open it and feel that someone took it seriously without trying to sell to him; a parent should open it and feel that the product respects their kid.

The editorial leak is the hero photograph — a documentary still of a player on a bus — sitting against a page that otherwise has the discipline of a product launch.

---

## 2. References

The references below are not a mood board. Each is a source of specific, named techniques to pull forward. Everything outside what's named is to be ignored.

### Spine reference: modern indie SaaS landing pages (Linear, Raycast, Arc)
**URLs:** linear.app, raycast.com, arc.net

**Pull forward:**
- **The single-page top-to-bottom structure with clear section rhythm.** Section header → content block → hairline divider → next section. No carousels, no tabs, no accordions on the marketing page.
- **The discipline of using one accent color exactly once.** Linear uses its purple sparingly on a single CTA per viewport. We do the same with `--blood` red.
- **Generous left/right margins on desktop (80–120px gutters at 1440px viewport).** The page should feel like a printed publication, not a stretched-to-edge web app.

**Leave behind:**
- Their cool blue-to-purple gradient backgrounds. Linemate's background is warm cream, never a gradient.
- The animated background gradients / mesh blobs. We have a hockey rink schematic instead, and only behind the hero.
- The SaaS-feature-grid pattern of "icon + headline + paragraph + Learn More link." Our features grid has no Learn More links — the line copy is the whole pitch.
- Their type choices (mostly Inter at default settings). We use a condensed display face for headlines and a tight humanist sans for body. See section 4.

### Editorial register: The Athletic longform features
**URL:** theathletic.com (any feature-length piece, not the homepage)

**Pull forward:**
- **The way a single hero photograph is given room to breathe — wide aspect ratio, no overlay text on top of it, generous whitespace below before the body copy starts.** The photo carries the mood; the type doesn't fight it.
- **Numbered or labeled sections (`01 / 02 / 03`) treated as small, quiet eyebrows separate from the section H2.** We use roman numerals (i / ii / iii) in the features grid for the same effect.
- **The use of hairline rules between sections instead of background-color blocks or card containers.** The page reads as one continuous document.

**Leave behind:**
- The newspaper-style multi-column body copy. Linemate's body text is single-column at a reading measure.
- The author byline / publication-date metadata bar. Not applicable.
- Their image-caption typography. We don't need photo captions.

### Restraint register: Aesop product pages
**URL:** aesop.com

**Pull forward:**
- **Cream / off-white page background, never pure white.** Pure white is for the demo card surface only — everything else sits on `--cream` (#F4EFE6).
- **The willingness to leave large amounts of empty space and trust the reader to scan slowly.** Section vertical padding is 160px+ on desktop. Don't compress.
- **The way they pair a condensed display face with a clean, slightly warm body sans without ever mixing in a third typeface.** Two fonts, full stop.

**Leave behind:**
- The serif body type (Aesop uses a serif; we don't — see section 4).
- The product-shot photography aesthetic (clinical, isolated objects on neutral backgrounds). Linemate's photography is documentary, not clinical.
- The luxury-skincare register of the copy. Linemate's copy is direct and hockey-fluent, not aspirational.

---

## 3. Aesthetic thesis, applied: three "don't" rules

These are specific defaults a code-generation tool would reach for that would be wrong for this product.

1. **Don't reach for a card-based layout with rounded corners, drop shadows, and white backgrounds inside a colored page.** That's the Vercel-template default and it will instantly read as "another AI startup." Linemate's sections are separated by hairline rules (0.5px, `--ink` at 20–40% opacity), not by cards. The only true card on the page is the live demo chat surface, and it has a 0.5px border, no shadow, and minimal corner radius (4px max).

2. **Don't add any color other than `--ink`, `--cream`, `--rink`, `--puck`, and `--blood`. Don't introduce blue links, green success states, or amber warnings, even where convention suggests them.** Hover states use opacity changes or underlines, not color shifts. Form validation uses `--ink` text and a 0.5px `--ink` border at higher opacity, not red error states (the red is reserved). The waitlist success state replaces the form with copy in `--ink` — no green check, no celebration color.

3. **Don't use rounded corners above 4px on any element except the demo chat message bubbles (where 6px is the ceiling). No pill-shaped buttons. No `rounded-2xl` anything.** The CTA button is a hard rectangle. The waitlist form's email input and submit button share a hard-rectangle wrapper with no internal radius. This is a deliberate aesthetic call — soft corners read as consumer-app, and Linemate is not a consumer app.

---

## 4. Typography

### Fonts

**Display: Bagoss Condensed (preferred) or Tusker Grotesk.** If neither is available or licensable, the open-source fallback is **Oswald** at weight 500, with letter-spacing tightened to `-0.01em` at display sizes. Do not use Oswald at its default letter-spacing — it reads too web-y.

*Why:* The condensed grotesque with sharp terminals reads as a jersey nameplate without being a literal jersey font. It carries the hockey association at a register that doesn't feel costume-y. It also pairs well with a humanist body sans without competing.

**Body: Inter Tight at weight 400 and 500.** Specifically Inter *Tight*, not the regular Inter — the tighter tracking reads cleaner at body sizes and avoids the "every SaaS landing page in 2024" look. If Inter Tight isn't available, use Söhne or GT America Standard.

*Why:* It's clean, slightly warm, and readable on a phone (where most of the target audience will read this). It stays out of the display face's way.

**Do not use:** Space Grotesk, default Inter, Roboto, DM Sans, Geist, or any of the typefaces currently appearing on every AI startup landing page.

### Type scale (desktop)

| Role | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 (`Linemate.`) | 88px | 0.95 | 500 (display) | -0.015em |
| Hero descriptor (`The junior hockey nutrition coach.`) | 26px | 1.2 | 400 (display) | 0.005em |
| Section H2 | 32px | 1.1 | 500 (display) | -0.005em |
| Final CTA headline | 56px | 1.05 | 500 (display) | -0.01em |
| Features grid H3 | 20px | 1.2 | 500 (display) | 0 |
| Body | 16px | 1.55 | 400 (body) | 0 |
| Small / metadata | 13px | 1.5 | 400 (body) | 0.02em |
| Eyebrow / label | 11px | 1.4 | 400 (body) | 0.12em uppercase |

### Mobile

Scale H1 down to 56px, section H2 to 26px, final CTA headline to 40px. Everything else stays the same. Mobile body remains 16px — do not drop to 14px.

---

## 5. Color tokens

The PRD's palette stands. Adjustments and additions below.

```css
:root {
  /* Core */
  --ink: #14161A;        /* Near-black, slightly cool. All body type, dividers, dark sections. */
  --cream: #F4EFE6;      /* Warm off-white. Page background. */
  --rink: #BFD6DB;       /* Pale cold blue. Rink schematic accent lines (the non-red ones). */
  --puck: #1F1F1F;       /* True black. Logo mark, demo card "Send" button. */
  --blood: #B23A2E;      /* Deep red. PRIMARY CTA ONLY. And the rink schematic's red lines (center line, faceoff circles), but at the same low opacity as the rest of the schematic. */

  /* Derived — derived from --ink at opacities, not separate hex values */
  --ink-muted: rgba(20, 22, 26, 0.75);    /* Subhead body copy */
  --ink-quiet: rgba(20, 22, 26, 0.55);    /* Eyebrows, metadata */
  --ink-hint:  rgba(20, 22, 26, 0.40);    /* Captions, footer */
  --ink-rule:  rgba(20, 22, 26, 0.20);    /* Section dividers */
  --ink-hair:  rgba(20, 22, 26, 0.12);    /* Within-section hairlines (demo card internal dividers, etc.) */

  /* On dark sections (features grid, final CTA band) */
  --cream-muted: rgba(244, 239, 230, 0.70);
  --cream-quiet: rgba(244, 239, 230, 0.50);
  --cream-rule:  rgba(244, 239, 230, 0.20);
}
```

**Hover states.** Primary CTA: opacity drops to 0.92 and a 1px downward translate on hover (the "puck slap" from the PRD). Text links: a 1px underline draws in left-to-right over 200ms. No color shifts on hover anywhere.

**Focus rings.** All interactive elements get a 2px `--ink` outline at 40% opacity, offset by 2px, on `:focus-visible`. Never use the browser default blue focus ring.

---

## 6. Spacing system

Base unit: **8px.** Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 120, 160.

Do not use Tailwind's default spacing scale. Configure Tailwind to use this scale or use raw CSS values.

**Key vertical rhythms:**
- Section vertical padding (desktop): 120px top, 120px bottom. Hero and final CTA get 160px.
- Section vertical padding (mobile): 80px top, 80px bottom.
- Headline to subhead: 24px
- Subhead to CTA: 32px
- Section H2 to first content row: 48px

**Key horizontal rhythms:**
- Page gutter (desktop, 1440px viewport): 80px each side
- Page gutter (mobile): 24px each side
- Within the features grid, the gap between cells is 0 (cells share borders)

---

## 7. Layout grid

- **Max content width:** 1280px
- **Page gutters:** 80px each side at 1440px+, scaling down to 24px at <640px
- **Columns:** 12-column grid with 24px gutters between columns
- **Hero layout:** Two columns, 50/50 split. The hero image's right edge extends past the right page gutter by 48px on desktop (the asymmetry call from the PRD). On mobile, hero stacks: descriptor + headline + subhead + CTAs first, then image below.
- **Features grid:** 3 columns × 2 rows on desktop, 2 columns × 3 rows on tablet, 1 column on mobile. Cells share 0.5px `--cream-rule` borders within the dark band.
- **Knowledge-base contrast section:** 3 columns (player says / knowledge base / Linemate) on desktop, stacked on mobile with each row labeled.

**Breakpoints:**
- Mobile: <640px
- Tablet: 640–1023px
- Desktop: 1024px+
- Wide: 1440px+ (no layout changes, just larger gutters)

---

## 8. Motion

**Page load (orchestrated, under 1.2s total):**
1. `0ms`: Cream page background paints.
2. `100ms`: Rink schematic fades in over 400ms (opacity 0 → 0.08).
3. `200ms`: Hero image fades up over 500ms (opacity 0 → 1, no translate).
4. `400ms`: H1 reveals — clip-path inset from bottom, 400ms, ease-out. ("Linemate." appears as if being printed downward.)
5. `600ms`: Descriptor line fades in over 300ms.
6. `750ms`: Subhead paragraph fades in over 300ms.
7. `900ms`: CTAs fade in over 300ms.

**Scroll reveals (each major section, when 20% into viewport):**
- Subtle: 12px translate-up + opacity 0→1 over 500ms with `cubic-bezier(0.16, 1, 0.3, 1)` (a soft ease-out).
- Stagger child elements (e.g., features grid cells) by 60ms each.

**Demo chat first message:**
- When the demo section is 40% into viewport, the scripted first message types in character-by-character at ~28 chars/second. Caret blinks during typing, disappears after.

**Hover:**
- Primary CTA: 1px downward translate + opacity 0.92, transition 120ms. On release, return takes 80ms (slightly faster than the press — feels like a slap).
- Secondary link underline: draws in from left to right over 200ms via `background-size` animation on a 1px linear-gradient underline.

**Reduced motion (`prefers-reduced-motion: reduce`):**
- Skip the orchestrated load reveals. Everything renders at final state.
- Skip scroll reveals. Everything renders at final state.
- Demo first message appears instantly, no typewriter effect.
- Keep the CTA's translate-down hover (it's tactile feedback, not decoration).

**Easing curves:**
- Primary: `cubic-bezier(0.16, 1, 0.3, 1)` — soft ease-out, used for reveals.
- Tactile: `cubic-bezier(0.4, 0, 0.2, 1)` — used for hover states and the CTA slap.
- Linear: only for opacity fades.

---

## 9. Visual texture

**Rink schematic background (hero section only):**
- A top-down hockey rink diagram rendered as inline SVG, positioned absolutely behind the hero content at `opacity: 0.08`.
- Rendered at the full width of the hero section, vertically centered.
- Schematic includes: outer boards (rounded rectangle), center line (in `--blood`), center faceoff circle and dot (in `--blood`), two blue lines (in `--ink`), four end-zone faceoff circles and dots (in `--blood`), two goal creases (in `--ink`), two goalie nets (in `--ink`).
- Stroke weights: 2px for boards and lines, 1.5px for circles, 1px for nets.
- The schematic appears behind the hero only. Subsequent sections have a plain `--cream` background (or `--ink` for the dark bands).

**Photographs:**
- The hero image is the only photograph on the page. It's described in PRD section 6 — a player on a team bus, documentary, slightly desaturated, with grain. Treat the grain as a non-negotiable: if the image doesn't have grain, add a subtle film-grain CSS filter or SVG noise overlay at ~5% opacity over the image only.
- The PRD's optional "schedule sheet" image in the How It Works section: skip it for v1. The page is stronger with one photograph than two.

**Gradients:** None. Anywhere. No gradient buttons, no gradient backgrounds, no gradient text.

**Shadows:** None on cards, sections, or CTAs. The only shadow on the page is the focus ring on interactive elements (which is technically an outline, not a shadow). The CTA's hover translate is not accompanied by a shadow change.

**Borders:**
- Section dividers: 0.5px solid `--ink-rule` (20% opacity).
- Within-section hairlines (e.g., demo card internal dividers, knowledge-base contrast row borders): 0.5px solid `--ink-hair` (12% opacity).
- Demo card outer border: 0.5px solid `--ink-rule`.
- Waitlist email input + button wrapper: 0.5px solid `--cream-rule` (since it sits in the dark final-CTA band).
- No borders on the CTA button itself. No borders on the hero image.

**Corner radius:**
- 0px (hard rectangle) on: CTA button, secondary CTA underline, waitlist form wrapper, demo card outer container, section dividers (they're 1D, but for clarity: no rounded line caps).
- 2px on: demo card "Send" button, demo card "Try one of these" prompt buttons.
- 4px on: hero image corners (so subtle it's almost a hard rectangle, but enough to soften the photo's edges against the cream).
- 6px on: demo chat message bubbles.
- Never use radius above 6px on any element.

---

## 10. Component-specific notes

### Primary CTA button (Join the waiting list)
- Background: `--blood`. Text: `--cream`. Hard rectangle, 0 radius.
- Padding: 14px vertical, 22px horizontal.
- Type: body sans, 13px, weight 500, letter-spacing 0.06em, UPPERCASE.
- Small puck icon (a 7px circle in `--cream`) to the left of the label, 10px gap between icon and text.
- Hover: opacity 0.92, translate Y +1px, transition 120ms.

### Secondary CTA (Try a 60-second conversation →)
- Text link in `--ink`. 13px, weight 400, letter-spacing 0.02em, sentence case.
- 1px solid `--ink` underline with 2px padding above it.
- The arrow (→) is part of the text, not an SVG. Use the actual character.
- Hover: underline animates by sliding a thin highlight rule below; or simply no change (the underline is already there). Designer's call.

### Logo
- Wordmark + mark, both in `--puck` on light backgrounds and `--cream` on dark.
- Mark: two horizontal lines, each 22px wide × 2px tall, stacked with a 3px vertical gap.
- Wordmark: "LINEMATE" set in the display face at 22px, weight 500, letter-spacing 0.01em.
- 10px gap between mark and wordmark.
- The mark sits vertically centered against the wordmark's cap-height.

### Demo card
- White background (`#FFFFFF` — the only true white on the page). 0.5px solid `--ink-rule` border, 0 radius. Padding 24px.
- Max width 520px, centered in the demo section.
- Header row: small logo (14px lines + small wordmark) on left, "3 turns left" indicator on right. 0.5px `--ink-hair` divider below.
- Coach messages: `--cream` background, 6px radius, max-width 90% of card width.
- User messages: `--ink` background, `--cream` text, 6px radius, right-aligned, max-width 80% of card width.
- "Try one of these" pill row: hard-rectangle outline buttons (0 radius, 0.5px `--ink-rule` border, 6px vertical / 10px horizontal padding, 12px text).
- Input area: 0.5px `--ink-hair` top border, then a flex row with a borderless text input and a small `--ink` "Send" button (2px radius, 12px text, UPPERCASE).

### Final CTA band
- Background: `--ink`. Type: `--cream`. Full bleed, no horizontal padding constraint on the band itself (content within is centered and respects the max-width).
- Vertical padding: 160px top and bottom.
- Headline centered, 56px display face.
- Email form is a single horizontal row: bordered wrapper (0.5px `--cream-rule`) containing a borderless email input on the left and a `--blood` submit button on the right. No corner radius. Max-width 440px.

---

## 11. Browser support and tech notes

- Build target: evergreen browsers. No IE11.
- The page should work without JavaScript except for the demo (which obviously requires JS).
- CSS variables (custom properties) are used throughout. No fallbacks needed.
- Use system font stack as the immediate fallback while web fonts load. Use `font-display: swap` to avoid invisible-text flash.
- Preload the hero image and the display font.

---

## 12. What "done" looks like

Pull this page up on a phone in a billet kitchen at 10pm. A 17-year-old looks at it for four seconds. He doesn't think "another AI app." He thinks "oh — this one's for me."

That's the bar.

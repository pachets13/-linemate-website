# Campaign Pages PRD — For Coaches and For Front Offices

> Hand-off doc for Claude Code. Two short, focused B2B landing pages that share Linemate's existing design system. These are campaign destinations — coaches and front office staff click through from outreach (email, ads, LinkedIn) and land on a page that speaks to them specifically.

> **Companion documents:**
> - `landing-page-brief.md` — the original player-facing page PRD. Authoritative for product positioning, brand voice, and the demo backend contract. These two B2B pages are built within the same product, with the same brand.
> - `visual-reference.md` — the visual reference. Authoritative for all design decisions. These two B2B pages use the same design system. No new design work required.

> Read both companion documents before this one.

---

## 1. What these pages are

Two short campaign-destination landing pages, one per audience:

- **`/for-coaches`** — for junior head coaches, assistant coaches, performance staff
- **`/for-front-offices`** — for junior GMs, directors of operations, team presidents

Each page is ~4 sections (not eight like the player page). Each page has one job: convert the reader from cold to *"I want to talk to someone."*

The CTA on both pages is the same idea — *Request a pilot* — framed slightly differently per audience.

---

## 2. What these pages are NOT

- Not a replacement for the player-facing page at the root URL. The root page stays as-is.
- Not full landing pages. They're shorter and more focused.
- Not a place for a live demo card. The B2B reader doesn't want to chat-test a tool on a marketing page. The "what it actually looks like" section does that work in a more appropriate register.
- Not visual experiments. The design system is locked. Use the visual reference exactly.

---

## 3. Design direction

**The design system from the player page applies in full.** Same typography, color tokens, spacing scale, layout grid, motion, visual texture, and component specs as defined in `visual-reference.md`.

**No hero image on either page.** This is a deliberate departure from the player page. These pages lean hardest into editorial restraint: the wordmark, the descriptor, the hook, and the argument. The page is its type and its rhythm. No photograph.

**Why no image:** The player page's bus photograph is player-coded — it's a kid on a team bus with headphones in. A coach or GM reader sees that image and recognizes it as not-for-them. Rather than chase a coach- or GM-coded image (which would feel staged), the B2B pages drop the image entirely and let the type carry the page. This also makes the B2B pages feel distinct from the player page in a way that's appropriate to their job.

**Hero region layout (both pages):**
- Single column, centered or left-aligned (designer's call — try both and pick what feels more confident on the page).
- Wordmark "Linemate." at the H1 size from the visual reference (88px desktop, 56px mobile).
- Descriptor "The junior hockey nutrition coach." directly below at the descriptor size (26px desktop).
- Audience eyebrow above or below the descriptor — small body sans, 11px uppercase, letter-spacing 0.12em, in `--ink-quiet`. The eyebrow reads either *"FOR COACHES"* or *"FOR FRONT OFFICES"* respectively. This is what tells the reader the page is for them.
- Hook (the audience-specific H2-equivalent) sits below the descriptor at the Section H2 size (32px desktop).
- Spine paragraphs follow.

**Section dividers:** Same hairline rules as the player page — 0.5px solid `--ink-rule`. Sections share the same vertical rhythm (120px top and bottom).

**Final CTA band:** Same `--ink` dark band treatment as the player page. Same email-form-as-final-CTA pattern, but with the CTA copy tuned per audience (see section 5 and section 6 below for exact strings).

---

## 4. Page structure (both pages)

Both pages follow the same four-block structure. Only the copy changes between audiences.

1. **Hero** — wordmark, descriptor, audience eyebrow, hook, spine paragraphs, CTA
2. **What it actually looks like** — the scenarios section (shared between both pages, identical copy)
3. **What Linemate stays out of** — the lane section (slightly different per audience)
4. **Final CTA band** — full-bleed dark band, audience-specific CTA copy

Plus footer (same as player page footer).

The two pages should also link to each other from the footer or from a small in-page link, so a coach who lands on the coach page can find the front office page if his GM forwards him there (or vice versa).

---

## 5. `/for-coaches` — full copy

### Hero region

**Wordmark:** Linemate.
**Descriptor:** The junior hockey nutrition coach.
**Eyebrow:** FOR COACHES

**Hook (H2-size):**
> Your players know how to play hockey. They don't always know how to eat.

**Spine paragraphs (body size):**
> Linemate is for the ones who want to be better at this — the self-starters, the guys looking at the next level.
>
> You don't run it. They do. Nothing to set up, nothing to administer, nothing new on your week. It lives with your players.

**Primary CTA button:**
> Request a pilot for your team

**Trust line under CTA (small):**
> Built on Anthropic's Claude.

### Section: What it actually looks like

**Section H2:** What it actually looks like.

**Body:**
> A player checks in before a game and asks what to eat. A player heading into a road trip plans what to bring and what to eat along the way. A player who felt heavy in the second period asks why, and what to try next time. A player who's been losing weight he didn't want to lose asks for help getting it back.
>
> Over time, Linemate remembers what worked and what didn't, for each player specifically. Each player gets better at fueling for the work he's trying to do — the energy he wants to bring to the rink, the recovery between games. That's the help.

### Section: What Linemate stays out of

**Section H2:** What Linemate stays out of.

**Body:**
> Linemate doesn't coach weight cuts. Doesn't recommend supplements. Doesn't pretend to be a dietitian. Doesn't coach sleep, stress, or the mental side of the game.
>
> When a player asks about something outside the lane, Linemate names what it sees and points the player at the right person — a registered dietitian, a team doctor, a trusted adult.
>
> If your trainer is already in the picture on nutrition, Linemate sits next to him, not in front. Same with a team dietitian if you've got one.

### Final CTA band

**Headline:** Request a pilot for your team.
**Subhead:** We're working with a small set of teams this season. If you'd like yours to be one of them, leave your email and we'll be in touch.
**Form fields:** Email only. One field, one button.
**Button label:** Get in touch
**Post-submit state:** *"Thanks — we'll be in touch."*

---

## 6. `/for-front-offices` — full copy

### Hero region

**Wordmark:** Linemate.
**Descriptor:** The junior hockey nutrition coach.
**Eyebrow:** FOR FRONT OFFICES

**Hook (H2-size):**
> The piece of player development most programs don't have a real answer for.

**Spine paragraphs (body size):**
> You watch these guys grow up in your program. The nutrition piece is one of the few things you haven't been able to do much about — not because you don't care, but because nutrition and food prep happen away from the rink.
>
> Linemate is the answer. Players use it directly. You don't have to be a nutrition expert to put it in front of them, and you don't have to administer it once it's there.

**Primary CTA button:**
> Request a pilot for your program

**Trust line under CTA (small):**
> Built on Anthropic's Claude.

### Section: What it actually looks like

**Section H2:** What it actually looks like.

**Body:** (identical to the coaches page — shared content)
> A player checks in before a game and asks what to eat. A player heading into a road trip plans what to bring and what to eat along the way. A player who felt heavy in the second period asks why, and what to try next time. A player who's been losing weight he didn't want to lose asks for help getting it back.
>
> Over time, Linemate remembers what worked and what didn't, for each player specifically. Each player gets better at fueling for the work he's trying to do — the energy he wants to bring to the rink, the recovery between games. That's the help.

### Section: What Linemate stays out of

**Section H2:** What Linemate stays out of.

**Body (shorter than the coaches version — no trainer/dietitian paragraph):**
> Linemate doesn't coach weight cuts. Doesn't recommend supplements. Doesn't pretend to be a dietitian. Doesn't coach sleep, stress, or the mental side of the game.
>
> When a player asks about something outside the lane, Linemate names what it sees and points the player at the right person — a registered dietitian, a team doctor, a trusted adult.

### Final CTA band

**Headline:** Request a pilot for your program.
**Subhead:** We're working with a small set of programs this season. If you'd like yours to be one of them, leave your email and we'll be in touch.
**Form fields:** Email only. One field, one button.
**Button label:** Get in touch
**Post-submit state:** *"Thanks — we'll be in touch."*

---

## 7. Cross-linking

Both pages should reference each other for cases where a reader on one page wants to forward the other page to a colleague (a coach forwarding the GM page to his GM, a GM sharing the coach page with his head coach).

**Suggested placement:** A small line above the footer, in `--ink-quiet`, body size:

- On `/for-coaches`: *"Looking for the front office version? Read /for-front-offices →"*
- On `/for-front-offices`: *"Looking for the coach version? Read /for-coaches →"*

The arrow is a real character. The link is a standard text link with the secondary-CTA underline treatment from the visual reference.

The root URL (the player page) is not linked from these pages. The B2B pages exist for B2B campaigns; sending a coach or GM back to a player-facing page mid-flow would dilute the call.

---

## 8. SEO and meta

Each page gets its own meta title and Open Graph image.

- `/for-coaches` meta title: *"Linemate for Coaches — The junior hockey nutrition coach."*
- `/for-front-offices` meta title: *"Linemate for Front Offices — The junior hockey nutrition coach."*

OG images: same template as the root page (wordmark + descriptor on cream), but with a small eyebrow above the wordmark reading *FOR COACHES* or *FOR FRONT OFFICES*. This makes a shared link in Slack or iMessage immediately legible as which page it is.

Meta description: pull from the hook line on each page.

---

## 9. Routing and structure

Both pages live in the same React app as the player page. Add two routes:

- `/for-coaches`
- `/for-front-offices`

Shared components between the three pages: header (if any), footer, wordmark, color tokens, type styles, final CTA band, the lane section structure, the scenarios section structure.

Each page is its own top-level component (e.g. `ForCoachesPage.tsx`, `ForFrontOfficesPage.tsx`), composed of shared sub-components plus its audience-specific copy.

Form submissions from the final CTA band on both B2B pages go to the same stub endpoint as the player page's waitlist form (`/api/waitlist`), with an additional `source` field in the payload:

```json
{
  "email": "coach@example.com",
  "source": "for-coaches"  // or "for-front-offices" or "player"
}
```

This lets the backend (once implemented) distinguish where the lead came from.

---

## 10. What's out of scope

- No live demo card on these pages
- No hero image on these pages
- No pricing copy on these pages
- No real backend for the form (stub it, same as the player page)
- No analytics beyond a simple pageview ping
- No A/B testing infrastructure
- No additional B2B audience pages (a leagues page was considered and cut)

---

## 11. What "done" looks like

A junior head coach gets an email about Linemate, clicks through to `/for-coaches`, reads three short paragraphs of hook + spine, sees what the tool actually does for his players, sees what it refuses to do, and either fills in his email or doesn't. The whole reading time is under 90 seconds. He doesn't feel sold to. He feels respected, recognized, and given a real next step.

Same bar for the GM on `/for-front-offices`. Different reader, same posture from the page.

If a competition judge reads all three pages (player + coach + GM) side by side, the takeaway should be: *they understood that talking to a 17-year-old, his coach, and his GM are three different conversations — and they wrote three different pages.*

That's the bar.

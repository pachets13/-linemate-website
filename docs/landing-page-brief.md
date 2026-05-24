# Landing Page PRD — Junior Hockey Nutrition Coach

> Hand-off doc for Claude Code. Build a single-page marketing site that positions an AI coach as if it were a real product. The coach itself already exists as a folder-based system. This page sells it.

> **Companion document:** `visual-reference.md` accompanies this PRD. It is authoritative for all visual decisions — typography, color, spacing, layout grid, motion, visual texture, and per-component specs. Where this PRD and the visual reference describe the same thing, the visual reference wins on execution and this PRD wins on product/copy/structure. Read both before starting.

---

## 1. What the product is (in one breath)

A nutrition coach in your pocket for junior hockey players living the bus-and-billet life. It's not an app full of meal plans — it's a coach you actually talk to. Asks before it answers. Remembers what you said last week. Stays in its lane.

**Target user:** Hockey players 16–20. Billet houses, road trips, hotel breakfasts, team-mandated Chicken Chef. First time away from home, first time feeding themselves.

**Secondary audience:** Hockey parents and team staff (dietitians, trainers, GMs) who'd recommend it.

---

## 2. Product naming

Product name: **Linemate**.

Official descriptor: **the junior hockey nutrition coach**.

Full positioning line: **"Linemate — the junior hockey nutrition coach."**

- **Linemate** stands alone as the product name. Use it on its own in body copy, the logo, buttons, and anywhere the product is referenced after first mention.
- **The descriptor goes next to the name on key surfaces** — hero, footer, meta title, OG image, and the first time the name appears in any new section of copy. After that first mention, just "Linemate."
- "Linemate" — your linemates are the players you play alongside, who know your tendencies, cover for you, and call you out when you're floating. The coach plays that same role on the nutrition side: it's beside the player, not above them.
- Tagline candidate (separate from the descriptor): **"The nutrition coach that lines up next to you."**
- Alt tagline: **"Eat like you mean it. On the road, in the billet, before the bus."**

Keep the product name and descriptor as separate CSS variables / constants so either can be updated independently without code churn.

---

## 3. The big positioning bet

The page sells **one idea**: this is a coach, not a knowledge base.

Every section should reinforce that. Knowledge bases give you five strategies. Coaches ask what happened. The whole page lives or dies on that distinction being felt — not just stated.

The visual / copy device for this: **a recurring "knowledge base says / Linemate says" contrast.** Use it in the hero. Use it again in the features section. Don't overuse it elsewhere.

---

## 4. Page structure

Single page, top to bottom:

1. **Hero** — image left or right, headline + subhead + CTA, demo entry point
2. **The "knowledge base vs. coach" contrast** — three side-by-side examples
3. **How it works** — three steps: drop the folder in, onboard once, coach forever
4. **What it coaches** (six recurring situations as a grid)
5. **What it doesn't do** — anti-features, on purpose. This builds trust.
6. **Live demo** — embedded chat with the coach in a card, OR a "Try the coach" button that opens a modal
7. **For parents & team staff** — a short reassurance block
8. **Waiting list CTA** — full-bleed, the second and final ask
9. **Footer** — built on Claude, methodology credit, contact

---

## 5. Hero section

### Layout
Two-column on desktop. Image right, text left. Single column on mobile, descriptor + H1 + subhead + CTAs first, image below. Asymmetric — the image's right edge bleeds 48px past the right page gutter on desktop. Don't center everything. See visual reference, section 7, for the precise grid.

### Hero structure (top to bottom)

1. **H1 — the wordmark itself:** **Linemate.**
   - This is *not* a tagline H1. The wordmark serves as the headline. Set at the display H1 size in the visual reference (88px desktop, 56px mobile).
   - The trailing period is intentional. Keep it.

2. **Descriptor (sits directly under the H1):** **The junior hockey nutrition coach.**
   - Set per the visual reference's "Hero descriptor" type spec (26px display face, weight 400).
   - No additional eyebrow line above the H1. The descriptor under the wordmark replaces it.

3. **Subhead (sits below the descriptor):**
   > Nutrition is the edge most junior players leave on the table. Linemate helps you take it on the bus, at the billet's, and the night before games... All without turning nutrition into a second job.

4. **CTAs (sit below the subhead):** Primary + secondary, side by side on desktop, stacked on mobile.

5. **Trust line (below the CTAs, smaller):** *Built on Anthropic's Claude.*

### Primary CTA button
**Join the waiting list**

See visual reference section 10 for the precise component spec (background `--blood`, hard rectangle, puck icon to the left of the label, "puck slap" hover).

### Secondary CTA
**Try a 60-second conversation →**

Text link with permanent 1px underline. See visual reference section 10 for the component spec. Anchors to / opens the live demo. See section 8.

### Trust line under the CTAs
*Built on Anthropic's Claude.*

---

## 6. Hero image (description for asset generation)

**Concept:** A junior hockey player sitting on a team bus, headphones in, eating something out of a Tupperware container. Visible: the back of the seat in front of him, a window with snow streaks, his bag on the seat beside him, jersey colors not identifiable (we don't want to imply any specific team). Lighting is late-afternoon-into-evening — that grey-blue winter light hockey players know. Mood is quiet. He's not posing. He's just on the bus.

**Aesthetic direction:** Editorial photography, not stock. Slightly desaturated. Grain present but not heavy. Should feel like a documentary still from a hockey doc on TSN or HBO, not a brochure.

**What it should NOT be:**
- A player in full gear on the ice
- A close-up of food
- A coach-figure pointing at a player
- Three smiling teenagers around a salad bowl
- Any stock photography aesthetic

**Crop:** Tall-ish portrait or 4:5. Subject occupies right two-thirds of frame. Left third is breathing room — this is where the headline overlaps the image edge on desktop.

**Fallback if illustration is preferred:** A flat illustration of the same scene — bus seat, headphones, Tupperware, window with snow. Limited palette (see section 11). Avoid friendly cartoon vibes; lean editorial.

---

## 7. Logo direction

The logo concept is a wordmark + small mark. The mark is two short parallel horizontal lines stacked tight together — two players skating side by side, abstracted to their bare lines. The concept reads as "linemates" without being literal.

**See visual reference section 10 ("Logo") for precise specs** — exact dimensions of the mark, line weight, spacing, type size, and how the mark sits against the wordmark. The visual reference is authoritative for execution.

**File outputs needed from Claude Code:**
- Inline SVG component for the header (and a small variant for the demo card header — see visual reference section 10)
- Favicon (32×32 PNG and SVG)
- Open Graph image (1200×630) showing the wordmark with the descriptor *"The junior hockey nutrition coach."* set below it on the cream background

---

## 8. The live demo (most important interactive element)

A small chat surface where a visitor can have a real exchange with the coach without signing up. This is the page's proof-of-claim.

**Important context for Claude Code:** the real coach already exists as a folder-based system (identity.md, rules.md, examples.md, plus a reference/ folder). The demo on this page is *the real coach*, lightly turn-limited. Claude Code is **not** building a coach. Claude Code is building the **frontend shell** that talks to a backend endpoint the user runs. Do not stub in a system prompt, do not call the Anthropic API client-side, do not approximate the coach with a simplified version.

### Behavior

- A card sits in section 6 of the page (mid-scroll). On scroll-into-view, the coach's first message animates in like it's being typed.
- The first message is **scripted, not server-generated** — guarantees a consistent first impression. It reads:
  > *"Hey — I'm Linemate. Before I can actually be useful, tell me one thing: when's your next game, and what does the day before it usually look like for you?"*
- The user types a reply. From the user's second message onward, the frontend sends the full message history to a **backend endpoint** (see integration contract below). The backend runs the real coach and returns the assistant's reply.
- A small "Try one of these" row above the input shows three pre-canned prompts the user can tap to autofill the input:
  - *"I felt heavy in the third last night."*
  - *"I'm in a billet. They cook dinner but I'm on my own for the rest."*
  - *"Long bus trip Saturday. What do I do?"*

### Layout

**Inline card (preferred):** A chat card embedded directly in section 6. Around 480px wide on desktop, full-width on mobile. ~6 messages of vertical room before it scrolls inside the card.

**Fallback — modal:** A "Try the coach" button opens a full-screen modal with the same chat surface. Use this only if inline feels cramped at the chosen layout.

Build the inline card. Keep modal in your back pocket. **See visual reference section 10 ("Demo card") for the complete component spec** — card dimensions, header row with logo and "3 turns left" indicator, message bubble styling, input row with the Send button, and the "Try one of these" prompt pills.

### Demo guardrails the frontend enforces

These are frontend responsibilities — Claude Code implements them in the UI layer, not the backend.

- **Session is ephemeral.** No login, no persistence between page loads. Make this explicit in a small line of copy under the chat: *"This is a 60-second taste. Your conversation isn't saved."*
- **Cap the conversation at 3 user turns.** After turn 3, the frontend stops accepting new input, shows a closing message — *"This is where the demo wraps. The real version remembers what we just talked about and picks up next time. Want in?"* — and replaces the input area with the **Join the waiting list** CTA.
- **Rate-limit the frontend** to prevent obvious abuse: one in-flight request at a time, a 2-second floor between user turns. The backend will also rate-limit, but the frontend should be polite about it.
- **Token / character cap on user messages.** 1,000 characters per message, enforced in the input with a soft counter.

### Backend integration contract

The user will implement the backend separately. Claude Code's job is to build the frontend to this contract, exactly.

**Endpoint:** `POST /api/coach`

**Request body (JSON):**
```json
{
  "messages": [
    { "role": "assistant", "content": "Hey — I'm Linemate. Before I can actually be useful, tell me one thing: when's your next game, and what does the day before it usually look like for you?" },
    { "role": "user", "content": "I've got a game Saturday." }
  ],
  "sessionId": "uuid-v4-generated-client-side-on-first-message"
}
```

- `messages` is the full conversation history including the scripted first message.
- `sessionId` is generated client-side on the first user turn and reused for the duration of that page session. It lets the backend rate-limit / log without needing auth.

**Response body (JSON), success case:**
```json
{
  "reply": "Got it. Walk me through your usual Friday — when do you usually eat dinner, and what does it look like?",
  "turnsRemaining": 2
}
```

- `reply` is the assistant's message text. Render as-is.
- `turnsRemaining` is the backend's view of how many user turns are left. Frontend should trust the backend's number over its own count if they disagree (backend wins).

**Response body, error / limit case:**
```json
{
  "error": "limit_reached" | "rate_limited" | "internal_error",
  "message": "Optional human-readable note the frontend can display."
}
```

- `limit_reached` → frontend immediately shows the closing message and waitlist CTA.
- `rate_limited` → frontend shows *"One sec — give the coach a moment."* and re-enables input after 3 seconds.
- `internal_error` → frontend shows *"The demo's having a moment. Try again, or hop on the waiting list below."*

**Endpoint configuration:** The backend URL goes in a single environment variable (`VITE_COACH_API_URL` or equivalent). Default in dev to `http://localhost:8787/api/coach`. Never hardcode the URL in components.

**No streaming required for v1.** A single JSON response is fine. The frontend should still show a typing indicator while the request is in-flight to make the wait feel natural.

### What Claude Code should NOT do

- Do not call the Anthropic API directly from the frontend
- Do not write a system prompt for the coach
- Do not bundle any coach files (identity.md, rules.md, etc.) into the frontend
- Do not invent a fallback "demo personality" if the backend isn't reachable — show the error state instead
- Do not log conversation contents anywhere client-side beyond the in-memory state needed to render the chat

---

## 9. Section-by-section copy

### Section 2 — Knowledge base vs. coach

Three rows. Left column: "A knowledge base says…" Right column: "Linemate says…"

| Player says | Knowledge base says | Linemate says |
|---|---|---|
| "I felt slow in the third." | "Here are five strategies to improve game-day energy." | "Walk me through the day. What'd you eat, when'd you eat it, how'd you sleep?" |
| "What should I eat before a game?" | "Carbs 3 hours out, protein 1 hour out, hydrate throughout." | "What did you eat before your last game? How did you feel? Let's start there." |
| "My billet cooks dinner but I'm on my own otherwise." | "Make sure to include protein, complex carbs, and vegetables at every meal." | "Got it. What's working right now, and what's the meal you're least sure about?" |

### Section 3 — How it works

Three steps, illustrated simply.

1. **Drop the folder into a Claude project.** Linemate is a folder, not an app. Five files. Drop them in and you're ready.
2. **Onboard once.** Linemate asks a handful of questions — your living situation, your schedule, what you're hoping to get out of this. Conversational, not a form.
3. **Coach forever.** Every conversation after that, Linemate remembers. Last week's experiments. The road trip that wrecked your stomach. The pregame meal that finally worked.

### Section 4 — What it coaches

A 2×3 grid. Each cell has an icon, a title, and a one-liner.

- **Game-day fueling** — At home or on the bus. What works, what doesn't, why.
- **Postgame recovery** — The window matters. The food matters less than people think.
- **Practice-day eating** — Two-a-days, off-ice, the day before a back-to-back.
- **Billet life** — Whatever your billet cooks, and whatever they don't.
- **Road trips** — Hotels, team meals, the gas-station stop on a five-hour bus.
- **"I felt heavy"** — When the food is the problem, and when it isn't.

### Section 5 — What it doesn't do

A short, blunt list. This is the trust-builder.

> **Linemate doesn't:**
> - Build rigid meal plans
> - Coach weight cuts or body composition
> - Push supplements
> - Pretend to be a dietitian
> - Coach sleep, stress, or the mental side of the game
>
> If any of those come up, Linemate names what it sees and stays in its lane. A real dietitian becomes more valuable next to Linemate, not less.

### Section 7 — For parents & team staff

> **Parents:** Linemate is built for a 17-year-old, not a 7-year-old. It talks to your kid like an adult. It doesn't push diets, doesn't moralize about food, and tells the player when something is outside its lane.
>
> **Coaches, trainers, dietitians:** Linemate handles the day-to-day pattern work — the bus food, the billet rhythm, the pregame meal experiments. Your clinical time gets spent on what actually needs clinical eyes.

### Section 8 — Final CTA

Full-bleed band. One headline, one button.

**Headline:** Join the waiting list.
**Subhead:** Linemate is opening up access in waves. Get in early, talk to the coach, help shape it.
**Form fields:** Email only. One field, one button.
**Button label:** **Get on the list**
**Post-submit state:** Replace the form with: *"You're in. We'll be in touch — and don't worry, we won't fill your inbox."*

---

## 10. Tone & voice (for any copy not explicit above)

- **Direct.** No hedging.
- **Specific.** "Hotel waffles" beats "breakfast on the road."
- **No moralizing.** Food is food. Don't say "junk."
- **Hockey-fluent without being insider-cringe.** "Bus trip" yes, "barnburner" no.
- **Confident, never cute.** No emoji in copy. (Icons in the grid are fine.)
- **Short.** If a sentence runs over two lines on desktop, cut it.

---

## 11. Visual direction

**This section is superseded by the visual reference document (`visual-reference.md`).** That document is authoritative for all design decisions — typography, color tokens, spacing scale, layout grid, motion specs, visual texture, and per-component specs.

The aesthetic in one line for context: *editorial sports documentary, restrained, slightly cold. Cream paper, condensed display type with jersey-nameplate energy, hairline rules instead of cards, one hit of deep red used exactly once on the primary CTA.*

For anything not covered in the visual reference, default to:
- Icons in the "What it coaches" grid: thin-stroke line icons. **Phosphor Icons** at light weight, recolored to `--cream` (since the features grid sits on a dark band — see visual reference section 7), is the right pick. Not Font Awesome, not Heroicons defaults.
- Anything that needs a visual call not in either document: ask before guessing. Better to surface a decision than to freelance.

---

## 12. Technical stack (recommended)

- Single-page React app (Vite) is the right call here — the demo's request/response cycle and state management are cleaner in React than in plain HTML/JS.
- Tailwind is fine for utility classes, but ALL color and typography goes through CSS variables, not Tailwind defaults.
- The demo talks to a backend endpoint the user is implementing separately. See section 8 for the contract. Backend URL goes in `VITE_COACH_API_URL` (environment variable, never hardcoded).
- Waiting-list form: POST to a stub endpoint at `/api/waitlist` — leave the endpoint unimplemented with a clear TODO comment for the backend hookup. On the front end, simulate success after 800ms.
- Accessibility: real semantic HTML (`<button>`, not divs with onClick), focus rings preserved, contrast ratios checked against the cream background.
- No client-side API keys anywhere. The demo's only network calls are to the user's own backend.

---

## 13. What success looks like

A junior hockey player's parent lands on this page, scrolls once, has a 60-second conversation with the coach in the demo, and gets on the waiting list — all without ever feeling like they were marketed to.

A dietitian or coach lands on this page and feels respected, not threatened. They send it to a player.

Nobody who reads this page thinks "another AI chatbot."

---

## 14. Out of scope (for v1)

- User accounts / dashboard
- Payment / pricing page
- Blog / content marketing
- Multi-language
- Real backend for the waitlist (stub it)
- **The coach backend itself.** Claude Code is building the frontend shell only. The `/api/coach` endpoint is implemented separately by the user, who owns the coach files. Do not attempt to build, mock with realistic content, or otherwise fill in the backend.
- Analytics beyond a simple pageview ping

Build v1 tight. Ship it. Iterate from real waitlist signups.

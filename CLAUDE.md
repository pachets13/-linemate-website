# CLAUDE.md — Linemate Website

You are building the marketing site for **Linemate, the junior hockey nutrition coach**. This file tells you how to work in this project. Read it before touching any code.

The site has three pages:

- `/` — the player-facing landing page (the main page)
- `/for-coaches` — a campaign destination for junior hockey coaches
- `/for-front-offices` — a campaign destination for junior hockey GMs and front office staff

All three pages share the same brand, design system, and underlying components. The player page is the full main landing page (eight sections). The two B2B campaign pages are shorter and more focused (four sections each).

## What lives in this project

Three documents in `docs/`. **Read them in this order, end-to-end, before writing any code.** Not skim — read. They were written for you.

1. **`docs/landing-page-brief.md`** — PRD for the player-facing main page (`/`). Authoritative for product decisions, page structure, copy, demo behavior, the backend integration contract, and what's in/out of scope.
2. **`docs/visual-reference.md`** — the visual reference. Authoritative for all design decisions across all three pages: typography, color tokens, spacing scale, layout grid, motion specs, visual texture, and per-component specs.
3. **`docs/campaign-pages-prd.md`** — PRD for the two B2B campaign pages (`/for-coaches`, `/for-front-offices`). Authoritative for the structure and copy of those two pages. Refers back to the player PRD and the visual reference for anything shared.

## How the documents relate

When two documents describe the same thing:

- **The visual reference wins** on execution: type sizes, colors, spacing, motion, exact component specs.
- **The relevant PRD wins** on product: structure, copy, behavior, scope. Use `landing-page-brief.md` for questions about the player page. Use `campaign-pages-prd.md` for questions about the two B2B pages.

If you can't tell which document covers a question, the visual reference covers visual/aesthetic execution and the PRDs cover everything else. If all three are silent, **ask before guessing.**

The two B2B pages reuse the design system from the player page in full. Same colors, same type, same spacing scale, same layout grid, same motion, same final CTA band pattern, same footer. The B2B pages do not have a hero image or a demo card — that's a deliberate departure from the player page documented in the campaign PRD.

## Stack and conventions

- React + Vite. TypeScript preferred but not required.
- Three routes: `/`, `/for-coaches`, `/for-front-offices`. Use a router (React Router) — don't reach for Next.js or anything heavier than necessary.
- Tailwind for utility classes is fine, but **configure Tailwind to use the visual reference's color tokens, spacing scale, and breakpoints — not Tailwind's defaults.** All custom values go through CSS variables defined in a single `tokens.css` file at the root of the styles.
- Semantic HTML. Real `<button>` elements, not `<div onClick>`. Real `<form>` elements. Real heading hierarchy.
- One component per file. Keep files small.
- **Build shared components once, reuse across pages.** The wordmark, the final CTA band, the lane section structure, the scenarios section, and the footer are shared between the player page and the B2B pages. Don't duplicate them per page.
- No global state library. `useState`/`useReducer` is sufficient for everything in this project including the demo.

## Out of scope — do not build

- The coach itself or any system prompt for it. The demo on the player page talks to a backend the user implements separately. See `landing-page-brief.md` section 8 for the contract.
- A real waitlist backend. Stub all three pages' email forms per the PRDs. All form submissions go to the same stub `/api/waitlist` endpoint with a `source` field distinguishing player / for-coaches / for-front-offices (see `campaign-pages-prd.md` section 9).
- A demo card on the B2B pages. Only the player page has the demo card.
- A hero image on the B2B pages. Only the player page has a hero image.
- Anything else listed in either PRD's out-of-scope section.

## Mandatory before declaring a section done

1. **It renders on mobile and desktop.** Open the dev server, resize the browser, check both.
2. **It matches the visual reference's spacing, type sizes, and color tokens.** Eyeballing is not enough — open the visual reference and confirm.
3. **No console errors and no accessibility warnings** in the browser dev tools.
4. **Reduced motion is respected** if the section has any motion (see visual reference section 8).

## How to work with me

- **When you discover ambiguity between any of the three docs, surface it instead of guessing.** Ask: "I see X in the player PRD and Y in the campaign PRD — confirming X applies because we're on the player page?" Then proceed.
- **When you finish a section, summarize what you built in one paragraph** and tell me what to look at. Don't dump diffs.
- **Build the player page first, then the two B2B pages.** The B2B pages depend on shared components that come out of the player page work. Don't try to build all three pages in parallel — finish the player page's component library, then compose the B2B pages from it.
- **If you find a font, icon set, or library that isn't named in either doc but you need it, propose it before installing.** I want to know what's going into the bundle.
- **Don't optimize for cleverness over clarity.** These pages read as straightforward, well-crafted, restrained. The code should be the same.

## What the site is selling

A coach, not a chatbot. A product made for junior hockey players who live the billet-and-bus life. Respectful, hockey-fluent, direct.

Three audiences, three pages, three conversations — but one brand. The site should feel:

- Confident, restrained, well-made — on every page
- Player-coded on the player page, coach-coded on `/for-coaches`, GM-coded on `/for-front-offices` — without changing the design system
- Like the work of people who actually understand junior hockey

A 17-year-old should look at the player page and think *"this one's for me."* A junior head coach should look at the coaches page and think *"this isn't trying to sell me on a problem I don't have."* A GM should look at the front offices page and think *"this gives me an answer I didn't have before."* None of them should think *"another AI app."*

That's the bar.

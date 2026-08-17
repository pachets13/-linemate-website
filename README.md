# Linemate — the junior hockey nutrition coach

Marketing site for **Linemate**, a folder-based AI nutrition coach built for junior hockey players (ages 16-20) living the bus-and-billet life. Built as a competition entry for the [CliefNotes](https://www.skool.com/cliefnotes) Interpretable Context Methodology (ICM) community.

The coach itself is a separate project — a Claude Code folder-as-architecture system where the folder structure *is* the product. This repo is just the website that explains and sells it.

## Pages

- **`/`** — Player-facing landing page. The main page: hero, coach-vs-knowledge-base contrast, how it works, situations grid, anti-features, waitlist CTA.
- **`/for-coaches`** — Campaign page for junior hockey head coaches and staff.
- **`/for-front-offices`** — Campaign page for GMs and front office decision-makers.

All three pages share one design system and component library. The B2B pages are shorter and more focused — no hero image, no demo card.

## Stack

- React + Vite + TypeScript
- Tailwind CSS (custom tokens, not defaults)
- React Router
- Phosphor Icons

## Running locally

```
npm install
npm run dev
```

## What this isn't

This is a competition build, not a production product. The waitlist form is stubbed. There is no backend. The coach doesn't live here — it lives in its own ICM folder and runs in Claude Code.

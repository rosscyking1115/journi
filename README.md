# Journi

> *"may the Journi be with you"*

AI-powered, intent-first travel planning with seasonal intelligence.

Type the one thing you want to experience — a tulip field, a quiet café, a mountain hut — and Journi builds your trip outward from that intent, with seasonal smarts, crowd warnings, and verified practical context.

---

## Quick start

```bash
cp .env.example .env.local   # fill in keys
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

| Layer       | Tech                                  |
| ----------- | ------------------------------------- |
| Framework   | Next.js 16 (App Router)               |
| Language    | TypeScript                            |
| Styling     | Tailwind CSS v4 + shadcn/ui           |
| API         | tRPC                                  |
| DB / Auth   | Supabase (PostgreSQL) + Prisma        |
| AI          | Anthropic Claude (`claude-sonnet-4-6`) |
| Mindmap     | React Flow                            |
| Payments    | Stripe                                |
| Email       | Resend                                |
| Deployment  | Vercel                                |

## Project layout

```
src/
├── app/                  # Next.js App Router routes
│   ├── api/              # tRPC + AI + webhook handlers
│   ├── layout.tsx
│   └── page.tsx          # Landing + intent input
├── components/
│   ├── planning/         # IntentInput, sidebar, export
│   ├── mindmap/          # React Flow canvas + nodes
│   ├── ui/               # shadcn primitives
│   └── shared/
├── lib/
│   ├── ai/               # Claude prompts + trip builder
│   ├── supabase/
│   ├── trpc/
│   ├── places/
│   ├── weather/
│   └── stripe/
├── types/                # Trip, Node, Edge domain types
└── middleware.ts         # Auth protection
prisma/
└── schema.prisma
```

## Phase 1 MVP

- [x] Scaffolded Next.js + Tailwind v4 + TypeScript
- [x] Landing page with intent input (UI only)
- [ ] Claude trip-builder API route (streaming)
- [ ] React Flow mindmap renderer
- [ ] Node detail sidebar
- [ ] Supabase auth + Prisma migration
- [ ] Stripe subscription (free 1/mo, Pro unlimited)
- [ ] Trip dashboard

## Design principles

The intent input is the hero. The mindmap is the wow moment. Confidence is transparent — every fact is tagged AI-estimated, verified, or live. Warm wanderlust palette, never tech-corporate.

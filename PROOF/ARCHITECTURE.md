# Architecture

## Overview
- Next.js App Router frontend with Tailwind + shadcn/ui.
- Supabase Postgres for data, auth, RLS, and audit logs.
- Automation engine lives in `lib/automation.ts` with API handler `app/api/automation/route.ts`.

## Key modules
- `app/page.tsx`: dashboard UI
- `lib/automation.ts`: automation rules (checklists, repurpose tasks, follow-ups)
- `supabase/migrations/0001_init.sql`: database schema + RLS
- `supabase/seed.sql`: demo data generation

## Automation triggers
- Deal → PAID: create fulfillment checklist
- Content → POSTED: create repurpose task in 2 days
- Task → DONE: create follow-up task next day
- Daily 6am Today’s 5 Moves generator (scheduled job placeholder)

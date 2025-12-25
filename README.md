diff --git a/README.md b/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..e73fbf59a5fb7abcc6e5668e194f80117274e4bb
--- /dev/null
+++ b/README.md
@@ -0,0 +1,41 @@
+# Command Center CRM
+
+Brain-friendly CRM for solo founders running multiple brands.
+
+## Stack
+- Next.js App Router + TypeScript + Tailwind
+- shadcn/ui primitives
+- Supabase Postgres + Auth + Storage
+- Vitest + Playwright
+
+## Setup
+1. Clone repo and install deps:
+   ```bash
+   npm install
+   ```
+2. Create a Supabase project and set env vars:
+   ```bash
+   cp .env.example .env.local
+   ```
+3. Apply migrations and seed data:
+   ```bash
+   supabase db reset
+   ```
+   or
+   ```bash
+   psql $DATABASE_URL -f supabase/migrations/0001_init.sql
+   psql $DATABASE_URL -f supabase/seed.sql
+   ```
+4. Run the app:
+   ```bash
+   npm run dev
+   ```
+
+## Scripts
+- `npm run test:unit`
+- `npm run test:e2e`
+- `npm run lint`
+- `npm run db:seed`
+
+## Proof Pack
+See `/PROOF` for acceptance checklist, demo script, testing instructions, architecture, RLS policies, and screenshots list.

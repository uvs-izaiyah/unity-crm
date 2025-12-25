# RLS Policies

All tables enforce ownership via `auth.uid()`.

- `users`, `profiles`: self-only access
- `tags`, `contacts`, `interactions`, `offers`, `deals`, `content_items`, `tasks`, `checklists`, `audit_logs`: owner access
- `checklist_items`: access scoped through parent checklist ownership

See: `supabase/migrations/0001_init.sql`.

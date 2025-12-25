create extension if not exists "pgcrypto";

create type content_status as enum (
  'IDEA',
  'SCRIPTED',
  'RECORDED',
  'POSTED',
  'REPURPOSED',
  'ARCHIVED'
);

create type deal_status as enum (
  'NEW',
  'CONTACTED',
  'QUALIFIED',
  'BOOKED',
  'PAID',
  'DELIVERING',
  'COMPLETE',
  'UPSELL',
  'LOST'
);

create type task_status as enum (
  'TODO',
  'DOING',
  'DONE',
  'BLOCKED'
);

create type pillar as enum (
  'AUTOMATION_AUTHORITY',
  'INCOME_CLARITY',
  'FAITH_LEADERSHIP',
  'CHAOS_TO_CLARITY'
);

create type cta as enum (
  'CLARITY_COMPASS',
  'ACADEMY',
  'TAX',
  'LIVE_NETWORK',
  'OTHER'
);

create type brain_mode as enum (
  'POST_MODE',
  'SALES_MODE',
  'DELIVERY_MODE',
  'ADMIN_MODE'
);

create table users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create table profiles (
  id uuid primary key references users(id) on delete cascade,
  full_name text,
  avatar_url text,
  timezone text default 'UTC',
  created_at timestamptz not null default now()
);

create table tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  label text not null,
  color text default '#94a3b8',
  created_at timestamptz not null default now()
);

create table contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  full_name text not null,
  email text,
  phone text,
  source text,
  status text default 'active',
  notes text,
  created_at timestamptz not null default now()
);

create table interactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  contact_id uuid references contacts(id) on delete cascade,
  channel text,
  summary text,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create table offers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10,2) default 0,
  pillar pillar,
  cta cta,
  created_at timestamptz not null default now()
);

create table deals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  contact_id uuid references contacts(id) on delete set null,
  offer_id uuid references offers(id) on delete set null,
  title text not null,
  value numeric(10,2) default 0,
  status deal_status not null default 'NEW',
  close_date date,
  notes text,
  created_at timestamptz not null default now()
);

create table content_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  pillar pillar,
  status content_status not null default 'IDEA',
  cta cta,
  platform text,
  due_date date,
  created_at timestamptz not null default now()
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  title text not null,
  status task_status not null default 'TODO',
  brain_mode brain_mode,
  due_date date,
  linked_content_id uuid references content_items(id) on delete set null,
  linked_deal_id uuid references deals(id) on delete set null,
  created_at timestamptz not null default now()
);

create table checklists (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  deal_id uuid references deals(id) on delete cascade,
  title text not null,
  created_at timestamptz not null default now()
);

create table checklist_items (
  id uuid primary key default gen_random_uuid(),
  checklist_id uuid references checklists(id) on delete cascade,
  title text not null,
  is_complete boolean not null default false,
  sort_order integer not null default 0
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  action text not null,
  entity text not null,
  entity_id uuid,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index idx_contacts_user on contacts(user_id);
create index idx_deals_user_status on deals(user_id, status);
create index idx_content_user_status on content_items(user_id, status);
create index idx_tasks_user_status on tasks(user_id, status);
create index idx_audit_logs_user on audit_logs(user_id);
create index idx_checklists_deal on checklists(deal_id);

alter table users enable row level security;
alter table profiles enable row level security;
alter table tags enable row level security;
alter table contacts enable row level security;
alter table interactions enable row level security;
alter table offers enable row level security;
alter table deals enable row level security;
alter table content_items enable row level security;
alter table tasks enable row level security;
alter table checklists enable row level security;
alter table checklist_items enable row level security;
alter table audit_logs enable row level security;

create policy "Users are self managed" on users
  for all using (id = auth.uid()) with check (id = auth.uid());

create policy "Profiles are self managed" on profiles
  for all using (id = auth.uid()) with check (id = auth.uid());

create policy "Tags by owner" on tags
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Contacts by owner" on contacts
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Interactions by owner" on interactions
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Offers by owner" on offers
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Deals by owner" on deals
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Content by owner" on content_items
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Tasks by owner" on tasks
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Checklists by owner" on checklists
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

create policy "Checklist items by checklist owner" on checklist_items
  for all using (
    exists (
      select 1 from checklists
      where checklists.id = checklist_items.checklist_id
      and checklists.user_id = auth.uid()
    )
  )
  with check (
    exists (
      select 1 from checklists
      where checklists.id = checklist_items.checklist_id
      and checklists.user_id = auth.uid()
    )
  );

create policy "Audit logs by owner" on audit_logs
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

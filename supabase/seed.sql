with new_user as (
  insert into users (email, role)
  values ('founder@commandcenter.test', 'admin')
  returning id
),
profile_row as (
  insert into profiles (id, full_name, timezone)
  select id, 'Solo Founder', 'America/New_York' from new_user
),
offer_rows as (
  insert into offers (user_id, name, description, price, pillar, cta)
  select
    (select id from new_user),
    concat('Offer ', series),
    'Signature offer package',
    250 * series,
    (array['AUTOMATION_AUTHORITY','INCOME_CLARITY','FAITH_LEADERSHIP','CHAOS_TO_CLARITY'])[1 + (series % 4)]::pillar,
    (array['CLARITY_COMPASS','ACADEMY','TAX','LIVE_NETWORK','OTHER'])[1 + (series % 5)]::cta
  from generate_series(1,6) as series
  returning id
),
contact_rows as (
  insert into contacts (user_id, full_name, email, phone, source, notes)
  select
    (select id from new_user),
    concat('Contact ', series),
    concat('contact', series, '@example.com'),
    concat('+1555', lpad(series::text, 7, '0')),
    (array['TikTok','Instagram','Referral','Email','Podcast'])[1 + (series % 5)],
    'Auto-seeded lead'
  from generate_series(1,50) as series
  returning id
),
content_rows as (
  insert into content_items (user_id, title, pillar, status, cta, platform, due_date)
  select
    (select id from new_user),
    concat('Content idea ', series),
    (array['AUTOMATION_AUTHORITY','INCOME_CLARITY','FAITH_LEADERSHIP','CHAOS_TO_CLARITY'])[1 + (series % 4)]::pillar,
    (array['IDEA','SCRIPTED','RECORDED','POSTED','REPURPOSED'])[1 + (series % 5)]::content_status,
    (array['CLARITY_COMPASS','ACADEMY','TAX','LIVE_NETWORK','OTHER'])[1 + (series % 5)]::cta,
    (array['TikTok','Instagram','YouTube','LinkedIn'])[1 + (series % 4)],
    current_date + (series % 7)
  from generate_series(1,30) as series
  returning id
),
deal_rows as (
  insert into deals (user_id, contact_id, offer_id, title, value, status, close_date)
  select
    (select id from new_user),
    c.id,
    (select id from offer_rows order by id limit 1 offset ((row_number() over ()) - 1) % 6),
    concat('Deal ', row_number() over ()),
    500 + (row_number() over () * 75),
    (array['NEW','CONTACTED','QUALIFIED','BOOKED','PAID','DELIVERING','COMPLETE','UPSELL','LOST'])[1 + ((row_number() over ()) % 9)]::deal_status,
    current_date + ((row_number() over ()) % 14)
  from contact_rows c
  limit 25
  returning id
)
insert into tasks (user_id, title, status, brain_mode, due_date, linked_content_id, linked_deal_id)
select
  (select id from new_user),
  concat('Task ', series),
  (array['TODO','DOING','DONE','BLOCKED'])[1 + (series % 4)]::task_status,
  (array['POST_MODE','SALES_MODE','DELIVERY_MODE','ADMIN_MODE'])[1 + (series % 4)]::brain_mode,
  current_date + (series % 10),
  (select id from content_rows order by id limit 1 offset ((series - 1) % 30)),
  (select id from deal_rows order by id limit 1 offset ((series - 1) % 25))
from generate_series(1,100) as series;

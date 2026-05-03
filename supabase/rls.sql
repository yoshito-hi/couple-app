-- 1. RLS (Row Level Security) の有効化
alter table comics enable row level security;
alter table events enable row level security;

-- 2. comics テーブルのポリシー
-- 認証済みユーザーは読み取り(SELECT)のみ可能
create policy "Allow read access for authenticated users" on comics
  for select
  to authenticated
  using (true);

-- 3. events テーブルのポリシー
-- 認証済みユーザーは読み取り(SELECT)のみ可能
create policy "Allow read access for authenticated users" on events
  for select
  to authenticated
  using (true);

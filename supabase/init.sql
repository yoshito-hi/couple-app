-- 1. 拡張機能の有効化 (UUID生成用)
create extension if not exists "uuid-ossp";

-- 2. comics テーブル (漫画メタデータ)
create table comics (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  cover_image_url text, -- サムネイル用
  image_urls text[] not null default '{}', -- Storage内のパス配列
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- 3. events テーブル (タイムラインに表示される各エピソード)
create table events (
  id uuid primary key default uuid_generate_v4(),
  event_date date not null,
  title text not null,
  description text,
  image_url text, 
  comic_id uuid references comics(id) on delete set null,
  created_at timestamp with time zone default now() not null,
  updated_at timestamp with time zone default now() not null
);

-- 4. インデックスの作成 (パフォーマンス最適化)
-- タイムライン画面で日付順に並べるため
create index idx_events_event_date on events (event_date desc);

-- 外部キーのルックアップ用
create index idx_events_comic_id on events (comic_id);

-- 5. updated_at を自動更新するための関数とトリガー
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- comics 用
create trigger set_updated_at_comics
before update on comics
for each row
execute function update_updated_at_column();

-- events 用
create trigger set_updated_at_events
before update on events
for each row
execute function update_updated_at_column();

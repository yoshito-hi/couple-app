-- 1. comics テーブルのサンプルデータ
insert into comics (id, title, cover_image_url, image_urls) values
(
  'e2b50e2d-dc99-43ef-b387-052637738f61', 
  '初めての料理失敗', 
  'https://placehold.jp/300x200.png?text=Cooking+Fail+Cover', 
  array[
    'https://placehold.jp/600x400.png?text=Frame+1',
    'https://placehold.jp/600x400.png?text=Frame+2',
    'https://placehold.jp/600x400.png?text=Frame+3',
    'https://placehold.jp/600x400.png?text=Frame+4'
  ]
),
(
  '98b50e2d-dc99-43ef-b387-052637738f62', 
  '散歩中の出会い', 
  'https://placehold.jp/300x200.png?text=Walk+Cover', 
  array[
    'https://placehold.jp/600x400.png?text=Walk+1',
    'https://placehold.jp/600x400.png?text=Walk+2',
    'https://placehold.jp/600x400.png?text=Walk+3',
    'https://placehold.jp/600x400.png?text=Walk+4'
  ]
);

-- 2. events テーブルのサンプルデータ
insert into events (event_date, title, description, image_url, comic_id) values
(
  '2024-01-01', 
  '初日の出', 
  '近所の公園で綺麗な初日の出を見ました。寒かったけど感動！', 
  'https://placehold.jp/800x600.png?text=Sunrise+Photo', 
  null
),
(
  '2024-02-14', 
  'バレンタインの悲劇', 
  '張り切って作ったケーキがオーブンの中で爆発しました。', 
  null, 
  'e2b50e2d-dc99-43ef-b387-052637738f61' -- 「初めての料理失敗」に紐付け
),
(
  '2024-03-20', 
  '春の散歩道', 
  '桜が咲き始めたので散歩に行きました。途中で可愛い猫に遭遇。', 
  'https://placehold.jp/800x600.png?text=Cat+Photo', 
  '98b50e2d-dc99-43ef-b387-052637738f62' -- 「散歩中の出会い」に紐付け
),
(
  '2024-05-02', 
  '開発スタート', 
  'このアプリの開発を始めました。良い思い出が残せますように。', 
  null, 
  null
);

# ユーザーテーマ切り替え設計

## 1. 方針概要

ユーザーごとのテーマカラー切り替えは、Supabase Auth の `user_metadata` に保存された値を基に、フロントエンドで CSS クラスを切り替えることで実現します。

## 2. データ構造

Supabase Auth の `raw_user_meta_data` に以下のキーと値を設定します。

| キー    | 型       | 値                      | 備考           |
| :------ | :------- | :---------------------- | :------------- |
| `theme` | `string` | `"yoshito"` \| `"naho"` | テーマの識別子 |

## 3. 実装詳細

### CSS 変数

`app/globals.css` に、各ユーザー用のテーマ定義を追加します。

```css
.theme-yoshito {
  --primary: oklch(...); /* よしと用のメインカラー */
  /* 他の変数も必要に応じて定義 */
}

.theme-naho {
  --primary: oklch(...); /* なほ用のメインカラー */
}
```

### テーマ適用ロジック

1. ログイン成功時、`supabase.auth.getUser()` から `user_metadata.theme` を取得。
2. 取得した値を `next-themes` 等のライブラリ、または Root Layout の `body` クラスに適用。
3. クラス名 `theme-${theme}` が付与されることで、CSS 変数がオーバーライドされる。

## 4. 設定方法 (管理用)

### Supabase ダッシュボードからの設定

1. Supabase の `Authentication` > `Users` 画面を開く。
2. 対象ユーザーを選択し、`User Metadata` セクションに JSON 形式で以下を追加して保存する。

   ```json
   {
     "theme": "yoshito"
   }
   ```

### SQL (ローカル開発時など) からの設定

ローカルの `supabase/seed.sql` 等でユーザーを作成する場合、以下のようにメタデータを付与します。

```sql
-- 既存ユーザーのメタデータを更新する例
UPDATE auth.users
SET raw_user_meta_data = raw_user_meta_data || '{"theme": "yoshito"}'::jsonb
WHERE email = 'yoshito@example.com';
```

## 5. Storybook での確認

`.storybook/preview.tsx` のツールバー機能を利用し、開発中に各テーマの見た目を即座に切り替えられるように設定します。

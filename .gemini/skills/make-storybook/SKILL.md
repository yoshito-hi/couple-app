---
name: storybook-story
description: >
  Use this skill when asked to create, generate, or add Storybook stories for
  React (or Vue / Svelte) components. Triggered by phrases like "write a story
  for", "add Storybook stories", "create stories", "story ファイルを作って",
  "Storybook に追加して". Generates idiomatic CSF 3 stories with Controls,
  a11y addon support, and realistic mock data following project conventions.
---

# Storybook Story 作成ガイド

## 概要

このスキルはコンポーネントファイルを受け取り、**Component Story Format 3 (CSF 3)**
に準拠した Story ファイルを生成する。

ユーザーが提供するもの:

- 対象コンポーネントのソースコード（またはファイルパス）

## ステップ 1 — コンポーネント解析

Story を書く前に必ず以下を把握する:

1. **Props の洗い出し**: 型定義・PropTypes・JSDoc から全 props を抽出する
2. **必須 vs オプション**: required props は全 Story に必ず含める
3. **バリアント軸の特定**: `variant`, `size`, `disabled`, `loading` など状態を変化させる props
4. **子要素・スロット**: `children` や named slot の有無
5. **コールバック**: `onClick`, `onChange` 等のイベントハンドラ
6. **依存 Context**: Provider でのラップが必要か確認

## ステップ 2 — Story の設計

以下の Story は必ず作成する:

| Story 名  | 目的                   |
| --------- | ---------------------- |
| `Default` | 最もシンプルな使用例。 |

＋コンポーネントの情報から読み取れるStory

Story が 5 つを超える場合は最も代表的な 5 つに絞り、残りはコメントで示す。

## ステップ 3 — ファイル生成ルール

### ファイル命名

例：

```
# コンポーネントと同ディレクトリに配置
Button.stories.tsx        # TypeScript プロジェクト
```

### CSF 3 テンプレート（TypeScript / React）

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { ComponentName } from "./ComponentName";

const meta = {
  title: "カテゴリ/ComponentName", // ← ディレクトリ構造に合わせる
  component: ComponentName,
  tags: ["autodocs"], // ← 必ず付与
  argTypes: {
    // Controls の表示をカスタマイズしたい場合のみ記述
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost"],
    },
    onClick: { action: "clicked" }, // ← action は argTypes で宣言
  },
  parameters: {
    layout: "centered", // 'fullscreen' | 'padded' | 'centered'
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // 必須 props の最小セット
  },
};
```

## ステップ 4 — 品質チェックリスト

Story 生成後に以下を確認する:

- [ ] `export default meta` が最初の export である
- [ ] 全 Story が `StoryObj<typeof meta>` 型を持つ（TS の場合）
- [ ] `args` に `undefined` をセットしない（Controls が壊れる）
- [ ] コールバック props は `{ action: '...' }` で宣言している
- [ ] 画像・アイコン等の asset は実在するパスを使うか、プレースホルダー URL にする
- [ ] `decorators` でラップが必要な Provider（ThemeProvider 等）を忘れていない
- [ ] `autodocs` タグが付与されている

## プロジェクト規約の検出

以下のファイルが存在する場合は内容を読んで規約に従う:

```
scripts/detect-conventions.mjs  ← 自動検出スクリプト
references/csf-examples.md      ← 手動で書いたサンプル
```

規約が見つからない場合は CSF 3 デフォルトを使用する。

### Next.js (App Router)

- Server Component は Story 化できない → Client Component に切り出しを提案する
- `next/image` を使う場合は `@storybook/nextjs` アドオンが必要な旨を伝える

## よくあるミスと対処

| ミス                                         | 対処                                        |
| -------------------------------------------- | ------------------------------------------- |
| `args` に関数を直接書く                      | `argTypes` で `{ action: '...' }` を使う    |
| Story ごとに `render` を書く                 | `args` だけで表現できないか先に検討する     |
| `decorators` を meta ではなく各 Story に書く | 共通 decorator は必ず meta に書く           |
| `parameters.docs.description` を省略         | `autodocs` 用に 1 行コメントを JSDoc で書く |

## 参照ドキュメント

詳細なサンプルは `references/csf-examples.md` を参照。
プロジェクト規約の自動検出は `scripts/detect-conventions.mjs` を実行する。

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Timeline } from "./Timeline";

const meta: Meta<typeof Timeline> = {
  title: "Features/Timeline/Timeline",
  component: Timeline,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    event: {
      id: "1",
      title: "江ノ島水族館に行った",
      event_date: "2024-05-01",
      description: null,
      image_url: null,
      comic_id: null,
      created_at: "2024-05-01T00:00:00Z",
      updated_at: "2024-05-01T00:00:00Z",
    },
  },
};

export const WithDescription: Story = {
  args: {
    event: {
      id: "2",
      title: "浅草で食べ歩き",
      event_date: "2024-05-03",
      description: "雷門からスタートして、メンチカツやメロンパンを食べて回った。とても美味しかったし楽しかった！",
      image_url: null,
      comic_id: null,
      created_at: "2024-05-03T00:00:00Z",
      updated_at: "2024-05-03T00:00:00Z",
    },
  },
};

export const LongTitle: Story = {
  args: {
    event: {
      id: "3",
      title: "すごく長くて詳細なタイトルをつけてみた場合の表示テスト。どこまで表示されるのか、折り返しは綺麗にいくのかを確認したい。",
      event_date: "2024-05-05",
      description: "詳細もそれなりに長い文章を入れてみて、全体のバランスが崩れないかを確認するためのテストケースです。",
      image_url: null,
      comic_id: null,
      created_at: "2024-05-05T00:00:00Z",
      updated_at: "2024-05-05T00:00:00Z",
    },
  },
};

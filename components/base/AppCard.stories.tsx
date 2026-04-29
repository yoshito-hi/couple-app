import type { Meta, StoryObj } from "@storybook/react"
import {
  AppCard,
  AppCardHeader,
  AppCardFooter,
  AppCardTitle,
  AppCardDescription,
  AppCardContent,
  AppCardAction,
} from "./AppCard"
import { AppButton } from "./AppButton"
import { MoreHorizontal } from "lucide-react"
import { TypographyH1, TypographyP } from "../typography/typography"

const meta: Meta<typeof AppCard> = {
  title: "Base/AppCard",
  component: AppCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof AppCard>

export const Default: Story = {
  render: (args) => (
    <AppCard className="w-87.5" {...args}>
      <AppCardHeader>
        <AppCardTitle><TypographyH1 className="text-lg">ヘッダー</TypographyH1></AppCardTitle>
        <AppCardDescription><TypographyP>説明部分</TypographyP></AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium leading-none">名前</p>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <p className="text-sm font-medium leading-none">フレームワーク</p>
            <div className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
          </div>
        </div>
      </AppCardContent>
      <AppCardFooter className="flex justify-between">
        <AppButton variant="outline">キャンセル</AppButton>
        <AppButton>デプロイ</AppButton>
      </AppCardFooter>
    </AppCard>
  ),
}

export const ShadcnDefault = {
  args: {
    isAppStyle: false,
  },
  render: (args) => (
    <AppCard className="w-[350px] border" {...args}>
      <AppCardHeader>
        <AppCardTitle>標準スタイル</AppCardTitle>
        <AppCardDescription>isAppStyle=false の場合です。</AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p>shadcn/ui のデフォルトに近い外観になります。</p>
      </AppCardContent>
    </AppCard>
  ),
}

export const WithImage: Story = {
  render: (args) => (
    <AppCard className="w-[350px]" {...args}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcd27f1dcd?w=800&dpr=2&q=80"
        alt="Sample"
        className="aspect-video object-cover"
      />
      <AppCardHeader>
        <AppCardTitle>ギャラリー</AppCardTitle>
        <AppCardDescription>画像付きのカードデザインです。</AppCardDescription>
      </AppCardHeader>
      <AppCardContent>
        <p>画像が最初にある場合、上部のパディングが自動的に調整されます。</p>
      </AppCardContent>
      <AppCardFooter>
        <AppButton className="w-full">
          詳細を見る
        </AppButton>
      </AppCardFooter>
    </AppCard>
  ),
}

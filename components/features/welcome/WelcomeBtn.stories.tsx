import type { Meta, StoryObj } from "@storybook/nextjs"
import { WelcomeBtn } from "./WelcomeBtn"

const meta: Meta<typeof WelcomeBtn> = {
  title: "Features/Welcome/WelcomeBtn",
  component: WelcomeBtn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof WelcomeBtn>

export const Default: Story = {
  args: {
    label: "ユーザー名",
  },
}

export const LongLabel: Story = {
  args: {
    label: "非常に長い名前のユーザーまたは長いメッセージがここに入ります",
  },
}

import type { Meta, StoryObj } from "@storybook/react"
import { AppButton } from "./AppButton"

const meta: Meta<typeof AppButton> = {
  title: "Base/AppButton",
  component: AppButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      // basic を削除
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon"],
    },
    isAppStyle: {
      control: "boolean",
      description: "アプリ固有のスタイル（丸角、影、浮き上がり等）を適用するかどうか",
    },
  },
}

export default meta
type Story = StoryObj<typeof AppButton>

export const AppDefault: Story = {
  args: {
    variant: "default",
    children: "App Button (Default)",
  },
}

export const ShadcnDefault: Story = {
  args: {
    variant: "default",
    children: "Shadcn Style Button",
    isAppStyle: false,
  },
}

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
}

import type { Meta, StoryObj } from "@storybook/nextjs"
import { AppInput } from "./AppInput"

const meta: Meta<typeof AppInput> = {
  title: "Base/AppInput",
  component: AppInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
  },
}

export default meta
type Story = StoryObj<typeof AppInput>

export const Default: Story = {
  args: {
    placeholder: "テキストを入力してください",
  },
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "パスワードを入力してください",
  },
}

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "0",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "入力できません",
    value: "無効な状態の値",
  },
}

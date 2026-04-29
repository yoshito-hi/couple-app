
import type { Meta, StoryObj } from "@storybook/nextjs"
import { AuthInputPassword } from "./AuthInput"

const meta = {
  title: "Features/Auth/AuthInputPassword",
  component: AuthInputPassword,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AuthInputPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}

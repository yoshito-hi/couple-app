import type { Meta, StoryObj } from "@storybook/nextjs"
import { AuthInputMailAddress } from "./AuthInput"

const meta = {
  title: "Features/Auth/AuthInputMailAddress",
  component: AuthInputMailAddress,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof AuthInputMailAddress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
}

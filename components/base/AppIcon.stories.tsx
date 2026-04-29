import type { Meta, StoryObj } from "@storybook/nextjs"
import { BookOpen, Heart, Star, Settings } from "lucide-react"
import { AppIcon } from "./AppIcon"

const meta: Meta<typeof AppIcon> = {
  title: "Base/AppIcon",
  component: AppIcon,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["fill", "ghost", "secondary"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    icon: {
      control: "select",
      options: ["BookOpen", "Heart", "Star", "Settings"],
      mapping: {
        BookOpen: BookOpen,
        Heart: Heart,
        Star: Star,
        Settings: Settings,
      },
    },
    iconSize: {
      control: { type: "number" },
    },
  },
}

export default meta
type Story = StoryObj<typeof AppIcon>

export const Default: Story = {
  args: {
    icon: BookOpen,
    variant: "fill",
    size: "md",
  },
}

export const Ghost: Story = {
  args: {
    icon: Heart,
    variant: "ghost",
    size: "md",
  },
}

export const Secondary: Story = {
  args: {
    icon: Star,
    variant: "secondary",
    size: "lg",
  },
}

export const CustomIconSize: Story = {
  args: {
    icon: Settings,
    variant: "fill",
    size: "md",
    iconSize: 40,
  },
}

import { LucideIcon } from "lucide-react"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const appIconVariants = cva(
  "flex items-center justify-center shrink-0",
  {
    variants: {
      variant: {
        fill: "rounded-full bg-primary text-primary-foreground",
        ghost: "text-primary",
        secondary: "rounded-full bg-secondary text-secondary-foreground",
      },
      size: {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
      },
    },
    defaultVariants: {
      variant: "fill",
      size: "md",
    },
  }
)

export interface AppIconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof appIconVariants> {
  icon: LucideIcon
  iconSize?: number | string
}

export function AppIcon({
  icon: Icon,
  variant,
  size,
  className,
  iconSize,
  ...props
}: AppIconProps) {
  const defaultIconSize = {
    sm: 16,
    md: 24,
    lg: 32,
  }[size || "md"]

  return (
    <div
      className={cn(appIconVariants({ variant, size }), className)}
      {...props}
    >
      <Icon size={iconSize || defaultIconSize} />
    </div>
  )
}

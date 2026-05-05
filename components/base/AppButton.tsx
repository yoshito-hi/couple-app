import * as React from "react"
import { Button } from "@/components/ui/button"
import { type VariantProps } from "class-variance-authority"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface AppButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * アプリの基本となるボタンコンポーネント。
 * shadcn/ui の Button をラップし、アプリ固有のスタイルを管理します。
 */
export function AppButton({
  variant = "default",
  size = "default",
  className,
  ...props
}: AppButtonProps) {
  // アプリ固有の基本スタイル
  const appBaseStyles = "font-zen-maru font-bold rounded-full shadow-basic transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 px-6 py-2 h-auto"

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(appBaseStyles, className)}
      {...props}
    />
  )
}

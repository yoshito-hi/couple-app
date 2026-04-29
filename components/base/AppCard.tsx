import * as React from "react"
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

export type AppCardProps = React.ComponentProps<typeof Card>

/**
 * アプリの基本となるカードコンポーネント。
 * shadcn/ui の Card をラップし、12-16pxの角丸と柔らかな影を適用します。
 */
export function AppCard({
  className,
  ...props
}: AppCardProps) {
  // アプリ固有のスタイル：16px角丸(rounded-2xl)と柔らかな影(shadow-basic)
  const appBaseStyles = "shadow-basic rounded-2xl border-none bg-card text-card-foreground"

  return (
    <Card
      className={cn(appBaseStyles, className)}
      {...props}
    />
  )
}

// サブコンポーネントを再エクスポート
export {
  CardHeader as AppCardHeader,
  CardFooter as AppCardFooter,
  CardTitle as AppCardTitle,
  CardDescription as AppCardDescription,
  CardContent as AppCardContent,
  CardAction as AppCardAction,
}

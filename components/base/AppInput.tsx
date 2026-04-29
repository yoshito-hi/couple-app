import * as React from "react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export type AppInputProps = React.ComponentProps<typeof Input>

/**
 * アプリの基本となる入力コンポーネント。
 * shadcn/ui の Input をラップし、アプリ固有のスタイルを管理します。
 */
export function AppInput({
  className,
  ...props
}: AppInputProps) {
  const appBaseStyles = "font-not-sans-jp rounded-sm px-3 py-3 focus-visible:ring-0 h-auto"

  return (
    <Input
      className={cn(appBaseStyles, className)}
      {...props}
    />
  )
}

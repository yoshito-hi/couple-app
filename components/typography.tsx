import { cn } from "@/lib/utils" // shadcn標準のユーティリティ

export function TypographyH1({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h1 className={cn(
      // 1. 基本の配置と余白（shadcnのTypographyを参考）
      "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-8 pb-2",

      // 2. デザインシステム独自のスタイル
      "font-zen-maru",          // Zen Maru Gothicを適用
      "text-primary",           // モードに応じて切り替わる主色
      "border-bottom-2",        // HTMLプレビューにあった下線スタイル
      "border-primary/20",      // 下線の色は薄く primary を混ぜる

      // 3. アニメーション
      "transition-colors duration-1000", // テーマ切り替え時の1秒フェード

      className
    )}>
      {children}
    </h1>
  )
}

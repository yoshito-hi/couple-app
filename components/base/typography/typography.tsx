import { cn } from "@/lib/utils" // shadcn標準のユーティリティ

export function TypographyH1({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl",
        "font-zen-maru",          // Tailwindクラスも残しておく
        "text-primary",           // モードに応じて切り替わる主色
        "transition-colors duration-1000", // テーマ切り替え時の1秒フェード
        className
      )}
      style={{ fontFamily: 'var(--font-zen-maru-gothic)', ...style }}
    >
      {children}
    </h1>
  )
}

export function TypographyP({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  return (
    <p
      className={cn(
        "scroll-m-20 text-md tracking-tight lg:text-lg",
        "font-noto-sans-jp",
        "text-primary",           // モードに応じて切り替わる主色
        "transition-colors duration-1000", // テーマ切り替え時の1秒フェード
        className
      )}
      style={{ fontFamily: 'var(--font-noto-sans-jp-font)', ...style }}
    >
      {children}
    </p>
  )
}

export function TypographyMuted({
  children,
  className,
  style,
  as: Component = "p" // デフォルトは p タグ
}: {
  children: React.ReactNode,
  className?: string,
  style?: React.CSSProperties,
  as?: "p" | "span" | "time"
}) {
  return (
    <Component
      className={cn(
        // 1. デザインシステム指定のフォントとウェイト
        "font-noto-sans-jp font-light", // Noto Sans JP / Light 300

        // 2. スタイル（サイズと色）
        "text-sm",                   // 補足なので少し小さめ
        "text-sub",                  // ライトグレー (#757575)

        // 3. アニメーション
        "transition-colors duration-1000", // 1秒の滑らかなフェード

        className
      )}
      style={{ fontFamily: 'var(--font-noto-sans-jp-font)', ...style }}
    >
      {children}
    </Component>
  )
}

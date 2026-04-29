import { AppCard } from "@/components/base/AppCard"
import { AppIcon } from "@/components/base/AppIcon"
import { User, ArrowRight } from "lucide-react"
import { TypographyP } from "@/components/base/typography/typography"

export const WelcomeBtn = () => {
  return (
    <div>
      <AppCard className="flex flex-row items-center justify-center p-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5">
        <AppIcon icon={User} />
        <TypographyP className="text-lg font-zen-maru">
          ＊＊としてログイン
        </TypographyP>
        <AppIcon icon={ArrowRight} variant="ghost" />
      </AppCard>
    </div>
  )
}

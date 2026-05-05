import { AppCard } from "@/components/base/AppCard"
import { AppIcon } from "@/components/base/AppIcon"
import { User, ArrowRight } from "lucide-react"
import { TypographyH1 } from "@/components/base/typography/typography"

interface WelcomeBtnProps {
  label: string
}

export const WelcomeBtn = ({ label }: WelcomeBtnProps) => {
  return (
    <div>
      <AppCard className="grid grid-cols-[3rem_1fr_3rem] items-center p-4 cursor-pointer transition-all duration-200 hover:-translate-y-0.5">
        <AppIcon icon={User} className="justify-self-start" />
        <TypographyH1 className="text-center text-base lg:text-lg px-2 break-words">
          {label}
        </TypographyH1>
        <AppIcon icon={ArrowRight} variant="ghost" className="justify-self-end" />
      </AppCard>
    </div>
  )
}

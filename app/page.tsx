import { AppIcon } from "@/components/base/AppIcon";
import { TypographyH1, TypographyMuted, TypographyP } from "@/components/base/typography/typography";
import { WelcomeBtn } from "@/components/features/welcome/WelcomeBtn";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <header className="flex flex-col items-center gap-5">
        <AppIcon icon={Heart} />
        <TypographyH1>おかえりなさい</TypographyH1>
        <TypographyP>思い出のアルバムを開きましょう。<br />どちらのアカウントで入りますか？</TypographyP>
      </header>
      <div className="flex flex-col gap-4">
        <WelcomeBtn label="よすとしてログイン"></WelcomeBtn>
        <WelcomeBtn label="なほとしてログイン"></WelcomeBtn>
      </div>
      <TypographyMuted>思い出アプリ</TypographyMuted>
    </div >
  );
}

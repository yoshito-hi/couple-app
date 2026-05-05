import { TypographyH1, TypographyP, TypographyMuted } from "@/components/base/typography/typography";
import { AppCard } from "@/components/base/AppCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tables } from "@/lib/database.types";
import { AppIcon } from "@/components/base/AppIcon";
import { AppButton } from "@/components/base/AppButton";
import Image from "next/image";
import { BookOpen } from "lucide-react";

type Event = Tables<"events">;

interface TimelineProps {
  event: Event;
}

export const Timeline = ({ event }: TimelineProps) => {
  return (
    <div className="flex flex-row gap-4">
      {/* 左側の線 */}
      <div className="flex flex-col items-center">
        <div className="rounded-full w-3 h-3 bg-primary shrink-0" />
        <div className="w-0.5 bg-primary bg-gradient-to-b from-primary to-transparent flex-1 mt-2" />
      </div>

      {/* イベントの内容 */}
      <div className="flex flex-col pb-10">
        <TypographyMuted className="mb-5 leading-none">
          {event.event_date ? new Date(event.event_date).getMonth() + 1 : ""}月
        </TypographyMuted>
        <TypographyH1 className="mb-4 text-xl">{event.title}</TypographyH1>
        <TypographyP>
          {event.description}
        </TypographyP>
        <AppCard className="mt-7 flex flex-row items-center justify-start p-4 gap-5">
          <div className="w-22 shrink-0">
            <AspectRatio ratio={1 / 1} className="rounded-lg bg-muted">
              <Image
                src="https://avatar.vercel.sh/shadcn1"
                alt="Photo"
                fill
                className="rounded-lg object-cover grayscale dark:brightness-20"
              />
            </AspectRatio>
          </div>
          <div className="flex flex-col gap-3">
            <TypographyH1 className="text-lg">漫画タイトル</TypographyH1>
            <AppButton className="w-fit"><AppIcon icon={BookOpen} variant="ghost" size="sm" className="text-white" /> 漫画を見る</AppButton>
          </div>
        </AppCard>
      </div >
    </div >
  );
};

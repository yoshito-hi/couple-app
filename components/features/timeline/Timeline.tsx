import { TypographyH1, TypographyP, TypographyMuted } from "@/components/base/typography/typography";

import { Tables } from "@/lib/database.types";

type Event = Tables<"events">;

interface TimelineProps {
  event: Event;
}

export const Timeline = ({ event }: TimelineProps) => {
  return (
    <div>
      <TypographyMuted>{event.created_at}</TypographyMuted>
    </div>
  );
};

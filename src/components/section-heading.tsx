import { cn } from "../lib/utils";

interface SectionHeadingProps {
  title: string;
  deck?: string;
  className?: string;
}

export function SectionHeading({ title, deck, className }: SectionHeadingProps) {
  return (
    <header className={cn("grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-8", className)}>
      <h2 className="font-display text-[clamp(2.2rem,5.2vw,4rem)] font-medium leading-[0.98] tracking-[-0.035em] lg:col-span-7">
        {title}
      </h2>
      {deck ? (
        <p className="max-w-[38ch] text-[15px] leading-[1.7] text-ink-soft lg:col-span-4 lg:col-start-9">
          {deck}
        </p>
      ) : null}
    </header>
  );
}

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({
  badge,
  title,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        // Centers text/items by default, switches to left at 'sm' breakpoint
        "flex flex-col gap-2 items-left text-left md:items-center md:text-center",
        className,
      )}
    >
      <h2 className="font-bold  text-muted text-lg md:text-xl tracking-wide">
        {badge}
      </h2>
      <p className="font-bold text-2xl max-w-xl sm:text-3xl md:text-5xl text-primary-foreground leading-tight">
        {title}
      </p>
    </div>
  );
};

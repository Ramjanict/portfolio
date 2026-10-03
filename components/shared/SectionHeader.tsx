import { cn } from "@/lib/utils"; // your clsx/tailwind-merge helper
import { Sparkles, type LucideIcon } from "lucide-react";
import type { ElementType, ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface SectionHeaderProps {
  /** Small text shown with lines on both sides */
  subtitle?: ReactNode;
  /** Main heading */
  title: ReactNode;
  /** Paragraph below the heading */
  description?: ReactNode;
  /** Any lucide icon component (default: Sparkles) */
  icon?: LucideIcon;
  /** Toggle the corner icon (default: true) */
  showIcon?: boolean;
  /** Heading tag (default: "h1") */
  as?: HeadingTag;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  icon: Icon = Sparkles,
  showIcon = true,
  as = "h1",
  className,
  titleClassName,
  subtitleClassName,
  descriptionClassName,
}: SectionHeaderProps) {
  const Heading: ElementType = as;

  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-16", className)}>
      {/* Subtitle + Title in one row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-center gap-2 sm:gap-3">
        {subtitle && (
          <div className="flex items-center gap-3 sm:gap-4 sm:pb-2 lg:pb-3">
            <span className="w-8 sm:w-10 h-[1.5px] bg-main/70 rounded-full" />
            <span
              className={cn(
                "text-sm sm:text-base font-medium text-main whitespace-nowrap",
                subtitleClassName,
              )}
            >
              {subtitle}
            </span>
            <span className="w-8 sm:w-10 h-[1.5px] bg-main/70 rounded-full" />
          </div>
        )}

        <div className="relative inline-block">
          <Heading
            className={cn(
              "text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-none",
              titleClassName,
            )}
          >
            {title}
          </Heading>
          {showIcon && (
            <Icon
              aria-hidden="true"
              className="h-7 w-7 sm:h-9 sm:w-9 text-main absolute -top-4 -right-8 sm:-right-10 stroke-[2]"
            />
          )}
        </div>
      </div>

      {description && (
        <p
          className={cn(
            "text-sm sm:text-base text-muted-foreground leading-relaxed mt-4 sm:mt-6 max-w-2xl mx-auto",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

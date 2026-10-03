import Image from "next/image";
import { Testimonial } from "../TestimonialsSlider";

function TestimonialCard({
  item,
}: {
  item: Testimonial;
  isActive?: boolean;
}) {
  return (
    <div className="testimonial-card relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between min-h-[220px] bg-white dark:bg-[#1a1a2a] border border-border/70 dark:border-white/10 shadow-xs">
      {/* User Info Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden shrink-0 border-2 border-main/20">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-bold text-base sm:text-lg text-foreground leading-snug">
            {item.name}
          </h4>
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">
            {item.role}
          </span>
        </div>
      </div>

      {/* Quote Content */}
      <p className="text-xs sm:text-sm text-foreground/80 font-normal leading-relaxed">
        {item.quote}
      </p>
    </div>
  );
}

export default TestimonialCard;

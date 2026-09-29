import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background border-t border-border/40 transition-colors">
      <div className="">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span>🎯</span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-main uppercase">
              What Our Clients Say
            </span>
          </div>
        </div>

        <div className="relative bg-card border border-border/80 rounded-3xl p-8 sm:p-12 shadow-sm hover:shadow-lg transition-all max-w-2xl mx-auto">
          {/* Subtle Quote Watermark */}
          <div className="absolute right-6 top-6 text-main/10 pointer-events-none">
            <Quote className="h-20 w-20" />
          </div>

          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-amber-500 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-500" />
            ))}
          </div>

          {/* Quote text */}
          <p className="text-base sm:text-lg text-foreground/90 font-normal leading-relaxed italic mb-8">
            &ldquo;Impressive work! He was responsive, delivered top-tier clean
            code, and was always proactive in resolving edge cases. He
            understood our project requirements thoroughly and delivered well
            ahead of schedule. Looking forward to our next collaboration!&rdquo;
          </p>

          {/* Author info */}
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-main/15 text-main flex items-center justify-center font-bold text-base ring-2 ring-main/30">
              OS
            </div>
            <div>
              <h4 className="font-bold text-base text-foreground">
                Om Shankar
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Co-founder, HealthCRAD
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

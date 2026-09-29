import LearningProjectsList from "@/components/client/LearningProjectsList";

export default function LearningProjectsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background border-t border-border/40 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Server Rendered */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span>🎯</span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-main uppercase">
              Projects & Repositories
            </span>
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mt-2">
            Explore live applications, interactive visualizers, and open-source
            GitHub repositories built with modern stacks.
          </p>
        </div>

        {/* Client Interactive Filter & Grid Island */}
        <LearningProjectsList />
      </div>
    </section>
  );
}

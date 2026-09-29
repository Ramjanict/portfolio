import ClientProjectsList from "@/components/client/ClientProjectsList";

export default function ClientProjectsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Server Rendered */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-main uppercase mb-2">
            — Real-World Impact —
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Client Projects
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Production-grade systems built and deployed for clients across AI,
            healthcare, logistics, and high-volume e-commerce.
          </p>
        </div>

        {/* Client Interactive Filter & Grid Island */}
        <ClientProjectsList />
      </div>
    </section>
  );
}

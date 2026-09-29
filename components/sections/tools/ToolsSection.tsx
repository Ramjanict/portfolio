import ToolActionBtn from "@/components/client/ToolActionBtn";
import { Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";

interface ToolItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: typeof ImageIcon;
  link: string;
}

const TOOLS: ToolItem[] = [
  {
    id: "screenshot-enhancer",
    title: "Screenshot Enhancer",
    description:
      "Transform plain screenshots into beautiful mockups with device frames, backgrounds, and styling options.",
    tags: ["Image", "Design", "Preview"],
    icon: ImageIcon,
    link: "#",
  },
];

export default function ToolsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background transition-colors min-h-[70vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-main mb-3">
            — Productivity & Creativity —
          </p>

          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Tools
            </h1>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-main" />
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
            Discover a collection of powerful web tools designed to enhance your
            productivity and creativity. Each tool is built with modern
            technology and user experience in mind.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="max-w-md mx-auto mb-16">
          {TOOLS.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="bg-card border border-border/80 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Tags */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-xl bg-[#FDE2D2] dark:bg-main/20 text-main flex items-center justify-center transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {tool.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-border/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-main transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {tool.description}
                  </p>
                </div>

                {/* CTA Button Island */}
                <div>
                  <ToolActionBtn toolTitle={tool.title} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Suggestion & Coming Soon Banner */}
        <div className="max-w-md mx-auto text-center bg-card/60 border border-dashed border-border rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-bold text-foreground mb-1">
            🎉 More Tools Coming Soon! 🎉
          </p>
          <p className="text-xs text-muted-foreground">
            Have a suggestion for a new tool?{" "}
            <Link
              href="/contact"
              className="text-main font-semibold hover:underline"
            >
              Let me know
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

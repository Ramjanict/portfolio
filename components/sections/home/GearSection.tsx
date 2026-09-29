import {
  Check,
  ExternalLink,
  Keyboard,
  Laptop,
  Monitor,
  Mouse,
} from "lucide-react";

interface GearItem {
  title: string;
  icon: typeof Laptop;
  points: string[];
  link: string;
}

const GEAR: GearItem[] = [
  {
    title: "16 Inch M3 Max MacBook Pro",
    icon: Laptop,
    points: [
      "My main machine for development that I've been using for over 6 months now.",
      "Such a beast of a machine with effortless multitasking.",
      "I love it.",
    ],
    link: "https://apple.com/macbook-pro",
  },
  {
    title: "Logitech MX Mechanical",
    icon: Keyboard,
    points: [
      "My main keyboard for development.",
      "I love the clicky tactile keys and the compact form factor.",
      "I use it seamlessly with a Logitech MX Master 3 mouse.",
    ],
    link: "https://logitech.com",
  },
  {
    title: "Logitech MX Master 3S",
    icon: Mouse,
    points: [
      "My main mouse for development and productivity.",
      "I love the electromagnetic scroll wheel and thumb gestures.",
      "I pair it directly with the MX Mechanical.",
    ],
    link: "https://logitech.com",
  },
  {
    title: "BenQ 4K Monitor",
    icon: Monitor,
    points: [
      "Main monitor I use for writing code and debugging.",
      "I love the crisp color calibration and 4K real estate.",
      "Really good for high-density multi-window setups.",
    ],
    link: "https://benq.com",
  },
];

export default function GearSection() {
  return (
    <section
      id="gear"
      className="w-full py-16 md:py-24 bg-background border-t border-border/40 transition-colors"
    >
      <div className="">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span>🎯</span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-main uppercase">
              My Gear Setup
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Tools & Hardware I Rely On
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Everyday setup powering high-performance development, low latency
            prototyping, and daily engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {GEAR.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-main/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-main/10 text-main">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-main transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-main transition-colors p-1"
                      aria-label={item.title}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="space-y-2 mt-4">
                    {item.points.map((pt, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                      >
                        <Check className="h-3.5 w-3.5 text-main shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

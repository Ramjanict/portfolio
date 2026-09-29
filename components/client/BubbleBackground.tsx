"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BubbleItem {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
  isTranslucentBubble: boolean;
}

export default function BubbleBackground() {
  const [bubbles, setBubbles] = useState<BubbleItem[]>([]);

  useEffect(() => {
    // Generate 95 floating water bubbles & coral dots
    const generated: BubbleItem[] = Array.from({ length: 95 }, (_, i) => {
      const isTranslucent = i % 4 === 0; // ~25% larger translucent water bubbles
      const size = isTranslucent
        ? Math.floor(Math.random() * 10) + 8 // 8px - 18px
        : Math.floor(Math.random() * 4) + 2.5; // 2.5px - 6.5px

      return {
        id: i,
        size,
        left: Math.random() * 99,
        duration: Math.random() * 8 + 7, // 7s to 15s rise
        delay: Math.random() * 14, // staggered across 14 seconds
        drift: (Math.random() - 0.5) * 45, // horizontal wobble
        opacity: isTranslucent
          ? Math.random() * 0.35 + 0.3 // translucent bubble opacity
          : Math.random() * 0.45 + 0.45, // solid dot opacity
        isTranslucentBubble: isTranslucent,
      };
    });
    setBubbles(generated);
  }, []);

  if (bubbles.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
    >
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
          }}
          initial={{
            y: "105vh",
            x: 0,
            opacity: 0,
            scale: 0.6,
          }}
          animate={{
            y: ["105vh", "-12vh"],
            x: [0, b.drift, -b.drift * 0.7, b.drift * 0.4, 0],
            opacity: [0, b.opacity, b.opacity * 0.95, 0],
            scale: [0.6, 1, 1.15, 0.85],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {b.isTranslucentBubble ? (
            <div className="relative w-full h-full rounded-full border border-main/50 bg-gradient-to-tr from-main/15 via-main/5 to-white/30 shadow-[0_0_8px_rgba(242,107,77,0.25)]">
              {/* Glossy water bubble shine */}
              <span className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-white/80 blur-[0.3px]" />
            </div>
          ) : (
            <div
              className="w-full h-full rounded-full bg-main"
              style={{
                boxShadow: `0 0 ${Math.max(b.size * 2, 6)}px rgba(242, 107, 77, 0.6)`,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

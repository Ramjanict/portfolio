"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth, precise spring physics without jitter or overshoot
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 right-0 bottom-0 w-[2px] z-[60] pointer-events-none"
    >
      {/* Subtle crisp track */}
      <div className="absolute inset-0 bg-neutral-200/50 dark:bg-neutral-800/50" />

      {/* Crisp, razor-thin solid progress line - no blurry fat shadows or fading */}
      <motion.div
        className="w-full h-full bg-main origin-top"
        style={{ scaleY }}
      />
    </div>
  );
}

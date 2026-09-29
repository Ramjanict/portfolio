"use client";

import { motion } from "framer-motion";

const HEADING_WORDS = ["Let's", "Work", "Together."];

export default function ContactHeading() {
  return (
    <div className="relative inline-block my-2">
      {/* Animated highlight background that starts from left to right smoothly and stays visible */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "left center" }}
        className="absolute inset-0 z-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FFA86A] via-[#F2C4A2] to-[#D5D9E0] dark:from-[#EA580C] dark:via-[#C2410C] dark:to-[#374151] shadow-xs"
      />

      {/* Staggered word-by-word reveal on top of background */}
      <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-tight px-3 sm:px-4 py-1.5 sm:py-2 flex flex-wrap gap-x-3">
        {HEADING_WORDS.map((word, idx) => (
          <span key={word} className="inline-block overflow-hidden py-0.5">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.4 + idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>
    </div>
  );
}

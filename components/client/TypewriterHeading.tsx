"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PREFIX_TEXT = "Trust me, I'm a ";
const HIGHLIGHT_TEXT = "software engineer";
const FULL_TEXT = PREFIX_TEXT + HIGHLIGHT_TEXT;

export default function TypewriterHeading() {
  const [displayedCount, setDisplayedCount] = useState(0);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedCount((prev) => {
          if (prev < FULL_TEXT.length) {
            return prev + 1;
          }
          clearInterval(interval);
          return prev;
        });
      }, 42);
      return () => clearInterval(interval);
    }, 250);

    return () => clearTimeout(initialTimeout);
  }, []);

  const prefixLength = PREFIX_TEXT.length;
  const currentPrefix = FULL_TEXT.slice(
    0,
    Math.min(displayedCount, prefixLength),
  );
  const currentHighlight =
    displayedCount > prefixLength
      ? FULL_TEXT.slice(prefixLength, displayedCount)
      : "";

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight min-h-[4rem] sm:min-h-[4.5rem]">
      <span>{currentPrefix}</span>
      {currentHighlight && (
        <span className="text-main">{currentHighlight}</span>
      )}

      {/* Vertical cursor icon leading the text */}
      <motion.span
        className="inline-block w-[3px] sm:w-1 h-7 sm:h-9 bg-main ml-1 align-middle rounded-full shadow-[0_0_8px_#F26B4D]"
        animate={{ opacity: [1, 0.15, 1] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </h1>
  );
}

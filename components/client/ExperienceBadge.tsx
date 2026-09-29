"use client";

import { motion } from "framer-motion";

export default function ExperienceBadge() {
  return (
    <span className="relative inline-block align-baseline font-semibold text-slate-900 dark:text-slate-100 rounded-md px-2.5 py-0.5 mx-0.5">
      {/* Animated background that starts from left to right smoothly and stays visible */}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "left center" }}
        className="absolute inset-0 z-0 rounded-md bg-gradient-to-r from-[#FFA86A] via-[#F2C4A2] to-[#D5D9E0] dark:from-[#EA580C] dark:via-[#C2410C] dark:to-[#374151]"
      />

      <span className="relative z-10">
        2+ years building and scaling products end-to-end.
      </span>
    </span>
  );
}

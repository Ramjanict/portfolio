"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 50;

export default function ScrollHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full  transition-colors duration-300 ${
        scrolled
          ? "bg-white dark:bg-background shadow-md"
          : "bg-[#FEF9F5] dark:bg-[#212131] "
      }`}
    >
      {children}
    </header>
  );
}

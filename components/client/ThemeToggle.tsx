"use client";

import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RxMoon } from "react-icons/rx";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" />;
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="cursor-pointer"
    >
      {isDark ? (
        <div className="flex items-center justify-center border border-[#2E2F48] rounded-full p-2">
          <RxMoon className="h-5 w-5" />
        </div>
      ) : (
        <div className="flex items-center justify-center border border-[#FBDEDA] rounded-full p-2">
          <Sun className="h-5 w-5" />
        </div>
      )}
    </Button>
  );
}

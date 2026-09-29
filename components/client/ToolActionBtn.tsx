"use client";

import { ArrowRight } from "lucide-react";

export default function ToolActionBtn({ toolTitle }: { toolTitle: string }) {
  return (
    <button
      type="button"
      onClick={() => alert(`${toolTitle} tool is launching soon! Stay tuned.`)}
      className="w-full inline-flex items-center justify-center gap-2 bg-main hover:bg-[#e05a3c] text-white font-medium py-2.5 px-5 rounded-full text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
    >
      <span>Use Tool</span>
      <ArrowRight className="h-3.5 w-3.5" />
    </button>
  );
}

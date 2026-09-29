import type { Metadata } from "next";
import ToolsSection from "@/components/sections/tools/ToolsSection";

export const metadata: Metadata = {
  title: "Tools - Md Ramjan Ali",
  description:
    "Discover a collection of powerful web utilities and productivity tools designed with modern technology and user experience in mind.",
};

export default function ToolsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ToolsSection />
    </main>
  );
}

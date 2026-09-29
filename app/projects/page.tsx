import type { Metadata } from "next";
import ClientProjectsSection from "@/components/sections/projects/ClientProjectsSection";
import LearningProjectsSection from "@/components/sections/projects/LearningProjectsSection";

export const metadata: Metadata = {
  title: "Projects - Md Ramjan Ali",
  description:
    "Explore real-world client projects and technical learning projects built with MERN, Next.js, and autonomous AI systems.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ClientProjectsSection />
      <LearningProjectsSection />
    </main>
  );
}

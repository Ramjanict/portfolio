import type { Metadata } from "next";
import BlogListSection from "@/components/sections/blog/BlogListSection";

export const metadata: Metadata = {
  title: "Blog - Md Ramjan Ali",
  description:
    "Explore technical articles, deep dives, and tutorials on Agentic AI, LLM & RAG systems, backend architectures, and cloud DevOps.",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <BlogListSection />
    </main>
  );
}

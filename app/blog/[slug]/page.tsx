import { getAllBlogSlugs, getBlogPostBySlug } from "@/data/blogs";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailView from "@/components/client/BlogDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${post.title} - Md Ramjan Ali`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <BlogDetailView post={post} />
    </main>
  );
}

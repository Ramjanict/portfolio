import {
  getAllProjectSlugs,
  getClientProjectBySlug,
  getLearningProjectBySlug,
} from "@/data/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailView from "@/components/client/ProjectDetailView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const client = getClientProjectBySlug(slug);
  const learning = getLearningProjectBySlug(slug);
  const project = client || learning;

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} - Md Ramjan Ali`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const clientProject = getClientProjectBySlug(slug);
  const learningProject = getLearningProjectBySlug(slug);

  if (!clientProject && !learningProject) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <ProjectDetailView
        clientProject={clientProject ?? null}
        learningProject={learningProject ?? null}
      />
    </main>
  );
}

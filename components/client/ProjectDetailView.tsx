"use client";

import ProjectGallery from "./ProjectGallery";
import type { ClientProject, LearningProject } from "@/data/projects";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Globe,
  Lightbulb,
  MessageSquare,
  Rocket,
  Shield,
  Star,
  Target,
  User,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

interface Props {
  clientProject: ClientProject | null;
  learningProject: LearningProject | null;
}

export default function ProjectDetailView({
  clientProject,
  learningProject,
}: Props) {
  const isClient = !!clientProject;
  const project = clientProject ?? learningProject;

  if (!project) return null;

  const title = project.title;
  const description = project.description;
  const overview = project.overview;
  const tags = project.tags;
  const keyFeatures = project.keyFeatures;
  const timeline = project.timeline;
  const role = project.role;

  const liveUrl = isClient ? clientProject.liveUrl : learningProject!.demoUrl;
  const githubUrl = isClient
    ? clientProject.githubUrl
    : learningProject!.codeUrl;
  const status = isClient ? clientProject.status : "Completed";
  const category = isClient
    ? clientProject.category
    : learningProject!.category;

  const images =
    project.images && project.images.length > 0
      ? project.images
      : [project.image];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-main transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all projects</span>
      </Link>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10 relative">
        {/* ─── Left Column: Scrollable Content ─── */}
        <div className="flex-1 min-w-0">
          {/* Multi-Image Gallery & Title Header */}
          <ProjectGallery
            title={title}
            category={category}
            images={images}
          />

          {/* Overview */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="h-5 w-5 text-main" />
              Overview
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {overview}
            </p>
          </section>

          {/* Developer's Note (client projects only) */}
          {isClient && clientProject.developersNote && (
            <section className="mb-10 bg-main/5 dark:bg-main/10 border border-main/20 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-main" />
                Developer&apos;s Note
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {clientProject.developersNote}
              </p>
            </section>
          )}

          {/* Key Features */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Star className="h-5 w-5 text-main" />
              Key Features
            </h2>
            <div className="space-y-3">
              {keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-main mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What We Delivered (client only) */}
          {isClient && clientProject.deliverables.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-main" />
                What We Delivered
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {clientProject.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-muted/50 dark:bg-white/5 rounded-xl px-4 py-3 border border-border/50"
                  >
                    <span className="w-6 h-6 rounded-full bg-main/15 text-main text-xs font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges Overcome (client only) */}
          {isClient && clientProject.challenges.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-main" />
                Challenges Overcome
              </h2>
              <div className="space-y-3">
                {clientProject.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-main mt-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {challenge}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Future Plans (client only) */}
          {isClient && clientProject.futurePlans.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-main" />
                Future Plans
              </h2>
              <div className="space-y-3">
                {clientProject.futurePlans.map((plan, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Rocket className="h-4 w-4 text-main mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {plan}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Team (client only) */}
          {isClient && clientProject.teamMembers.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-main" />
                Project Team
              </h2>
              <div className="flex flex-wrap gap-4">
                {clientProject.teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-muted/50 dark:bg-white/5 rounded-xl px-4 py-3 border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-main/15 text-main flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {member.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technologies Used */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-main/10 text-main border border-main/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ─── Right Column: Sticky Sidebar ─── */}
        <div className="lg:w-[340px] shrink-0 lg:sticky lg:top-20 space-y-6">
          {/* Project Details Card */}
          <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-5">
              Project Details
            </h3>

            <div className="space-y-4">
              {/* Timeline */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-main/10 text-main">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Timeline
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {timeline}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Status
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {status}
                  </p>
                </div>
              </div>

              {/* Live Status */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Live Status
                  </p>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-main hover:underline"
                  >
                    View Live Project
                  </a>
                </div>
              </div>

              {/* My Role */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-500">
                  <User className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    My Role
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {role}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-main hover:bg-[#e05a3c] text-white font-semibold px-5 py-3 rounded-xl text-sm shadow-sm hover:shadow-md transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              View Live Project
            </a>

            {/* GitHub Button */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-semibold px-5 py-3 rounded-xl text-sm border border-border/60 transition-all"
            >
              <FaGithub className="h-4 w-4" />
              View Source Code
            </a>
          </div>

          {/* Team Members Card (client only) */}
          {isClient && clientProject.teamMembers.length > 0 && (
            <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-bold text-foreground mb-4">
                Team Members
              </h3>
              <div className="flex flex-wrap gap-2">
                {clientProject.teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-muted/50 dark:bg-white/5 rounded-lg px-3 py-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-main/15 text-main flex items-center justify-center">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {member.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-main/5 to-main/10 dark:from-main/10 dark:to-main/5 border border-main/20 rounded-2xl p-6">
            <h3 className="text-base font-bold text-foreground mb-2">
              Interested in similar work?
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              Let&apos;s discuss how I can help with your next project.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 bg-main hover:bg-[#e05a3c] text-white font-semibold px-5 py-3 rounded-xl text-sm shadow-sm hover:shadow-md transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

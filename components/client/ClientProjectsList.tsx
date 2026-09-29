"use client";

import { CLIENT_PROJECTS } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCategory =
  | "All Projects"
  | "AI & Automation"
  | "Healthcare"
  | "Transportation"
  | "Ecommerce"
  | "SaaS";

const CATEGORIES: ProjectCategory[] = [
  "All Projects",
  "AI & Automation",
  "Healthcare",
  "Transportation",
  "Ecommerce",
  "SaaS",
];

export default function ClientProjectsList() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All Projects");

  const filtered =
    activeCategory === "All Projects"
      ? CLIENT_PROJECTS
      : CLIENT_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === cat
                ? "bg-main text-white shadow-md"
                : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj, idx) => (
          <div
            key={idx}
            className="bg-card border border-[#FDE2D2] dark:border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-300 group"
          >
            {/* Top Browser Image Header */}
            <div className="relative h-56 w-full bg-slate-900 overflow-hidden">
              {/* Browser control dots */}
              <div className="absolute top-0 inset-x-0 h-7 bg-slate-800/90 backdrop-blur-xs z-20 flex items-center px-3 gap-1.5 border-b border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>

              {/* Status Badge */}
              <div className="absolute top-9 right-3 z-20">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-lg shadow-sm text-white ${
                    proj.status === "Ongoing"
                      ? "bg-[#f59e0b]"
                      : proj.status === "Completed"
                        ? "bg-[#22c55e]"
                        : "bg-[#3b82f6]"
                  }`}
                >
                  {proj.status}
                </span>
              </div>

              {/* Screenshot Image */}
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500 pt-7"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

              {/* Category & Title on Image */}
              <div className="absolute bottom-3 left-3 z-20">
                <span className="bg-main text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider block w-fit mb-1 shadow-xs">
                  {proj.category}
                </span>
                <h3 className="text-xl font-extrabold text-white drop-shadow-sm">
                  {proj.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                {proj.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted/80 dark:bg-white/10 text-foreground text-xs font-medium px-2.5 py-1 rounded-md border border-border/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Row */}
            <div className="px-5 py-3.5 border-t border-border/40 flex items-center justify-between">
              <Link
                href={`/projects/${proj.slug}`}
                className="text-xs sm:text-sm font-bold text-main hover:underline flex items-center gap-1"
              >
                <span>View Details</span>
                <span className="text-base">↗</span>
              </Link>

              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-foreground/80 hover:text-main transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  bannerTitle: string;
  bannerSubtitle: string;
  bannerGradient: string;
  slug: string;
}

const ARTICLES: Article[] = [
  {
    title: "Your AI Agent Works in Demo. Will It Survive Production?",
    excerpt:
      "An AI agent is not just an LLM with tools. It is a distributed system with an LLM inside it. A practical guide to building production-grade AI agents — from idempotency and circuit breakers to telemetry.",
    date: "2025-08-31",
    readTime: "15 Min Read",
    bannerTitle: "YOUR AI AGENT WORKS IN DEMO",
    bannerSubtitle: "DIES IN PRODUCTION?",
    bannerGradient: "from-rose-950 via-zinc-900 to-black text-rose-300",
    slug: "ai-agent-in-production",
  },
  {
    title:
      "Why Every Developer Should Own a VPS - And How Hostinger Saved My Wallet",
    excerpt:
      "I host multiple projects, APIs, and side hustles on a single Hostinger VPS for less than the cost of a Netflix subscription. Here's why you need one too — and how to set it up right.",
    date: "2025-08-30",
    readTime: "10 Min Read",
    bannerTitle: "VPS CHANGED EVERYTHING",
    bannerSubtitle: "Hostinger & Cloud Deployments",
    bannerGradient: "from-indigo-950 via-zinc-900 to-black text-indigo-300",
    slug: "why-every-developer-should-own-vps",
  },
  {
    title:
      "From RAG to Agentic RAG: What I Learned Building AI Systems in Production",
    excerpt:
      "A battle-tested engineering guide to RAG, its real failures in production, and why Agentic RAG is the architecture that actually holds up — from someone who's built it end-to-end.",
    date: "2025-08-27",
    readTime: "11 Min Read",
    bannerTitle: "FROM RAG TO AGENTIC RAG",
    bannerSubtitle: "Production-Grade AI Architecture",
    bannerGradient: "from-teal-950 via-zinc-900 to-black text-teal-300",
    slug: "from-rag-to-agentic-rag",
  },
];

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="w-full py-16 md:py-24 bg-background border-t border-border/40 transition-colors"
    >
      <div className="">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span>🎯</span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-main uppercase">
                Latest Articles
              </span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              Thoughts and insights on web development, React, Next.js, and
              autonomous AI systems.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-main transition-colors self-start sm:self-auto"
          >
            <span>View All Blogs</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="bg-card border border-border/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className={`p-6 h-44 bg-gradient-to-br ${article.bannerGradient} flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/90">
                      Technical Deep Dive
                    </span>
                    <span className="h-2 w-2 rounded-full bg-main animate-ping" />
                  </div>

                  <div>
                    <h4 className="text-base font-black tracking-tight leading-tight text-white mb-1">
                      {article.bannerTitle}
                    </h4>
                    <p className="text-xs text-white/70">
                      {article.bannerSubtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta date & read time */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-foreground leading-snug mb-3 group-hover:text-main transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-main hover:underline"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

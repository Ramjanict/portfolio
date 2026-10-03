import ActionButton from "@/components/shared/ActionButton";
import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";
import blogImg from "@/public/images/agent-production.webp";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
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
  img?: string | StaticImageData;
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
    img: blogImg,
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
    img: blogImg,
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
    img: blogImg,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full">
      <CommonSpace>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <CommonHeader
            title="Latest Articles"
            description="Thoughts and insights on modern frontend frameworks, RESTful API design, Node.js, and database engineering."
          />

          <ActionButton
            href="/blog"
            variant="primary"
            className="flex items-center gap-2"
          >
            View All Blogs
            <ArrowRight className="h-4 w-4" />
          </ActionButton>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article, idx) => (
            <article
              key={idx}
              className="bg-card border border-border/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 group"
            >
              <div>
                {/* Visual Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                  {article.img ? (
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className={`p-6 h-full bg-gradient-to-br ${article.bannerGradient} flex flex-col justify-between relative overflow-hidden`}
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
                  )}

                  {/* Gradient Overlay & Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="text-[10px] uppercase font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                      Technical Deep Dive
                    </span>
                    <span className="h-2 w-2 rounded-full bg-main animate-ping" />
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
      </CommonSpace>
    </section>
  );
}

"use client";

import blogImg from "@/public/images/agent-production.webp";
import type { BlogPost } from "@/data/blogs";
import {
  ArrowLeft,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Link2,
  Sparkles,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  post: BlogPost;
}

export default function BlogDetailView({ post }: Props) {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const imageSrc = post.img || blogImg;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Back button */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-main transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to all articles</span>
      </Link>

      {/* ─── Top Featured Image Hero Banner ─── */}
      <div className="w-full relative min-h-[300px] sm:min-h-[420px] rounded-3xl overflow-hidden mb-10 shadow-xl border border-border/60">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-6 sm:p-10 text-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-rose-300 uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
              Technical Deep Dive
            </span>
            <span className="h-2.5 w-2.5 rounded-full bg-main animate-ping" />
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white mb-2 max-w-4xl">
            {post.bannerTitle}
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 font-mono">
            {post.bannerSub}
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300 mt-4 pt-4 border-t border-white/20">
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
              ✔ Reliability
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
              State & Recovery
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
              Idempotency
            </span>
            <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
              Verification
            </span>
          </div>
        </div>
      </div>

      {/* Article Header Info */}
      <div className="mb-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-main tracking-tight leading-snug mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-main" />
            <span>{post.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-main" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-main/10 text-main border border-main/20 flex items-center gap-1"
            >
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── Two-Column Layout ─── */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 relative">
        {/* ─── Left Column: Main Article Body ─── */}
        <div className="flex-1 min-w-0 space-y-12">
          {post.sections.map((sec) => (
            <section key={sec.id} id={sec.id} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-4 flex items-center gap-2">
                <Link2 className="h-5 w-5 text-main shrink-0" />
                <span>{sec.title}</span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {sec.content}
              </p>

              {/* Note / Callout Box */}
              {sec.note && (
                <div className="bg-main/5 dark:bg-main/10 border-l-4 border-main p-4 sm:p-5 rounded-r-2xl my-6">
                  <p className="text-sm font-semibold text-foreground italic flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-main shrink-0" />
                    <span>{sec.note}</span>
                  </p>
                </div>
              )}

              {/* Bullet Points */}
              {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                <div className="space-y-2.5 my-6 bg-card/60 dark:bg-white/5 border border-border/80 rounded-2xl p-5">
                  {sec.bulletPoints.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4.5 w-4.5 text-main mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dark Code / Diagram Blocks */}
              {sec.codeBlocks &&
                sec.codeBlocks.map((block, bIdx) => {
                  const blockId = `${sec.id}-${bIdx}`;
                  const isCopied = copiedIndex === blockId;
                  return (
                    <div
                      key={bIdx}
                      className="relative bg-[#181824] dark:bg-[#0d0d15] text-emerald-400 font-mono text-xs sm:text-sm rounded-2xl p-5 my-6 shadow-md border border-white/10 overflow-x-auto"
                    >
                      <button
                        onClick={() => handleCopy(block.code, blockId)}
                        className="absolute top-3 right-3 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 transition-colors"
                        title="Copy code"
                      >
                        {isCopied ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </button>

                      <pre className="whitespace-pre leading-relaxed pr-10">
                        <code>{block.code}</code>
                      </pre>
                    </div>
                  );
                })}
            </section>
          ))}
        </div>

        {/* ─── Right Column: Sticky Table of Contents ─── */}
        <div className="lg:w-[320px] shrink-0 lg:sticky lg:top-24">
          <div className="bg-card border border-border/80 rounded-2xl p-6 shadow-xs max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 text-main font-bold text-base border-b border-border/60 pb-3">
              <Link2 className="h-4.5 w-4.5" />
              <h3>Table of Contents</h3>
            </div>

            <nav className="space-y-2">
              {post.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block text-xs sm:text-sm text-muted-foreground hover:text-main hover:translate-x-1 transition-all py-1 leading-snug"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

import { BLOG_POSTS } from "@/data/blogs";
import { ArrowRight, Calendar, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  bannerTitle: string;
  bannerSub: string;
  bannerGradient: string;
  year: "2026" | "2025";
}

const ARTICLES_2026: Article[] = [
  {
    id: "ai-agent-in-production",
    slug: "ai-agent-in-production",
    title: "Your AI Agent Works in Demo. Will It Survive Production?",
    excerpt:
      "An AI agent is not just an LLM with tools. It is a distributed system with an LLM inside it. A practical guide to building production-grade AI agents — from idempotency and circuit breakers to durable state and evaluation.",
    date: "2026-08-31",
    readTime: "15 Minutes",
    bannerTitle: "YOUR AI AGENT WORKS IN DEMO",
    bannerSub: "DIES IN PROD: From Demos to Reliable Systems",
    bannerGradient: "from-rose-950 via-zinc-900 to-black text-rose-300",
    year: "2026",
  },
  {
    id: "why-every-developer-should-own-vps",
    slug: "ai-agent-in-production",
    title:
      "Why Every Developer Should Own a VPS - And How Hostinger Saved My Wallet",
    excerpt:
      "I host multiple projects, APIs, and side hustles on a single Hostinger VPS for less than the cost of a Netflix subscription. Here's why you need one too — and how to set it up right.",
    date: "2026-08-30",
    readTime: "10 Minutes",
    bannerTitle: "VPS CHANGED EVERYTHING",
    bannerSub: "Save ₹1700+/mo with Hostinger VPS",
    bannerGradient: "from-indigo-950 via-zinc-900 to-black text-indigo-300",
    year: "2026",
  },
  {
    id: "from-rag-to-agentic-rag",
    slug: "ai-agent-in-production",
    title:
      "From RAG to Agentic RAG: What I Learned Building AI Systems in Production",
    excerpt:
      "A battle-tested engineering guide to RAG, its real failures in production, and why Agentic RAG is the architecture that actually holds up — from someone who's built it end-to-end.",
    date: "2026-08-27",
    readTime: "11 Minutes",
    bannerTitle: "FROM RAG TO AGENTIC RAG",
    bannerSub: "Production AI Systems That Actually Scale",
    bannerGradient: "from-teal-950 via-zinc-900 to-black text-teal-300",
    year: "2026",
  },
  {
    id: "how-i-own-devops-at-startup",
    slug: "ai-agent-in-production",
    title:
      "How I Own DevOps at a Startup: AWS, Docker, CI/CD, and 99.9% Uptime",
    excerpt:
      "A real-world DevOps playbook from a full stack engineer who owns infra end-to-end — EC2, ECR, Terraform, GitHub Actions, Nginx, Auto Scaling, and Grafana observability at growth-stage scale.",
    date: "2026-07-15",
    readTime: "14 Minutes",
    bannerTitle: "HOW I OWN DEVOPS AT A STARTUP",
    bannerSub: "AWS, Docker, CI/CD, and 99.9% Uptime",
    bannerGradient: "from-amber-950 via-zinc-900 to-black text-amber-300",
    year: "2026",
  },
];

const ARTICLES_2025: Article[] = [
  {
    id: "multiple-git-accounts",
    slug: "ai-agent-in-production",
    title:
      "How to Use Multiple Git Accounts (Personal + Work) on the Same Laptop with Verified SSH",
    excerpt:
      "A complete beginner-friendly guide to using multiple Git accounts (personal + work) on one laptop, with SSH & GPG verification — for Windows, macOS, and Linux.",
    date: "2025-10-04",
    readTime: "7 Minutes",
    bannerTitle: "MULTIPLE GIT ACCOUNTS",
    bannerSub: "Personal + Work on Same Laptop",
    bannerGradient: "from-blue-950 via-slate-900 to-black text-blue-300",
    year: "2025",
  },
  {
    id: "publish-ios-app-expo-eas",
    slug: "ai-agent-in-production",
    title: "How to Publish Your First iOS App to the App Store using Expo EAS",
    excerpt:
      "A complete beginner-friendly guide to publishing your React Native Expo app on the Apple App Store using EAS Build and Submit.",
    date: "2025-06-22",
    readTime: "9 Minutes",
    bannerTitle: "PUBLISH AN IOS APP",
    bannerSub: "App Store using Expo EAS",
    bannerGradient: "from-yellow-950 via-neutral-900 to-black text-yellow-300",
    year: "2025",
  },
  {
    id: "why-mongodb-over-postgresql",
    slug: "ai-agent-in-production",
    title:
      "Why I Ditched PostgreSQL for MongoDB as a Self-Funded Startup Founder",
    excerpt:
      "Choosing a database is like choosing your co-founder — make the wrong choice, and you'll cry in a dark room at 2 AM. Here's why MongoDB won my heart over PostgreSQL for early-stage products.",
    date: "2025-06-16",
    readTime: "8 Minutes",
    bannerTitle: "DATABASE SHOWDOWN",
    bannerSub: "MongoDB vs PostgreSQL",
    bannerGradient: "from-emerald-950 via-zinc-900 to-black text-emerald-300",
    year: "2025",
  },
  {
    id: "websocket-vs-webrtc",
    slug: "ai-agent-in-production",
    title: "WebSocket vs WebRTC: What's the Real Difference?",
    excerpt:
      "A detailed comparison between WebSocket and WebRTC with real-world use cases, pros, cons, and how to choose the right one for your application.",
    date: "2025-05-25",
    readTime: "8 Minutes",
    bannerTitle: "WEBSOCKET VS WEBRTC",
    bannerSub: "Real-time communication showdown",
    bannerGradient: "from-cyan-950 via-slate-900 to-black text-cyan-300",
    year: "2025",
  },
  {
    id: "30-system-design-concepts",
    slug: "ai-agent-in-production",
    title:
      "30 System Design Concepts Every Engineer Should Know (Without Losing Their Mind)",
    excerpt:
      "A developer-friendly and detailed walkthrough of the top 30 system design concepts every backend wizard and frontend ninja should understand. Learn it, love it, use it.",
    date: "2025-05-13",
    readTime: "12 Minutes",
    bannerTitle: "30 SYSTEM DESIGN CONCEPTS",
    bannerSub: "Essential guide for high-throughput apps",
    bannerGradient: "from-red-950 via-zinc-900 to-black text-red-300",
    year: "2025",
  },
  {
    id: "convert-aab-to-apk",
    slug: "ai-agent-in-production",
    title: "How to Convert .AAB to .APK on Windows and macOS",
    excerpt:
      "Learn how to convert an .aab file to an .apk for testing on Android devices before uploading to the Play Store.",
    date: "2025-02-15",
    readTime: "2 Minutes",
    bannerTitle: "HOW TO CONVERT .AAB TO .APK",
    bannerSub: "Windows & macOS developer guide",
    bannerGradient: "from-sky-950 via-zinc-900 to-black text-sky-300",
    year: "2025",
  },
  {
    id: "secure-website-ssl-fun-way",
    slug: "ai-agent-in-production",
    title: "How to Secure Your Website with SSL (The Fun Way!)",
    excerpt:
      "A beginner-friendly, hilarious guide to installing an SSL certificate using Let's Encrypt and Certbot on Nginx. No more 'Not Secure' warnings!",
    date: "2025-02-13",
    readTime: "4 Minutes",
    bannerTitle: "SECURE YOUR WEBSITE WITH SSL",
    bannerSub: "Let's Encrypt & Certbot on Nginx",
    bannerGradient: "from-teal-950 via-zinc-900 to-black text-teal-300",
    year: "2025",
  },
  {
    id: "create-apk-expo-play-store",
    slug: "ai-agent-in-production",
    title:
      "How to Create an APK for Production Using Expo and Submit It to the Play Store",
    excerpt:
      "Learn how to generate a production-ready APK file with Expo and submit it to the Google Play Store.",
    date: "2025-02-05",
    readTime: "5 Minutes",
    bannerTitle: "CREATE PRODUCTION APK",
    bannerSub: "Expo to Google Play Store submission",
    bannerGradient: "from-purple-950 via-zinc-900 to-black text-purple-300",
    year: "2025",
  },
];

export default function BlogListSection() {
  const featured = BLOG_POSTS[0];

  return (
    <section className="w-full py-16 md:py-24 bg-background transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-main mb-3">
            — Insights & Tutorials —
          </p>

          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Blog
            </h1>
            <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-main" />
          </div>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mt-2">
            Explore my technical articles, deep dives, and tutorials on Agentic
            AI, LLM & RAG systems, backend architectures, and cloud DevOps.
          </p>
        </div>

        {/* Featured Post Header & Card */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lg">⭐</span>
            <h2 className="text-lg sm:text-xl font-extrabold text-foreground tracking-tight">
              Featured Post
            </h2>
          </div>

          <Link
            href={`/blog/${featured.slug}`}
            className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 grid md:grid-cols-12 gap-0 group block"
          >
            {/* Left Graphic Banner (6 cols) */}
            <div className="md:col-span-6 p-8 sm:p-10 bg-gradient-to-br from-rose-950 via-zinc-900 to-black text-white flex flex-col justify-between relative overflow-hidden min-h-[260px]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-rose-300 uppercase px-3 py-1 rounded-full bg-white/10">
                  Featured Deep Dive
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-main animate-ping" />
              </div>

              <div className="my-6">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-2 text-white">
                  YOUR AI AGENT WORKS IN DEMO.
                </h3>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight text-main">
                  DIES IN PROD
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-3 font-mono">
                  Lessons Learned Building Production-Ready AI Agents
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-400">
                <span className="bg-white/10 px-2 py-0.5 rounded">
                  Reliability
                </span>
                <span className="bg-white/10 px-2 py-0.5 rounded">
                  State & Recovery
                </span>
                <span className="bg-white/10 px-2 py-0.5 rounded">
                  Idempotency
                </span>
                <span className="bg-white/10 px-2 py-0.5 rounded">
                  Evaluation
                </span>
              </div>
            </div>

            {/* Right Content (6 cols) */}
            <div className="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 text-main" />
                  <span>{featured.date}</span>
                  <span>•</span>
                  <Clock className="h-4 w-4 text-main" />
                  <span>{featured.readTime}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 leading-snug group-hover:text-main transition-colors">
                  {featured.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-main group-hover:underline">
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* 2026 Archive */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-border/80">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              2026
            </h2>
            <span className="text-xs font-bold text-main bg-main/10 px-2.5 py-0.5 rounded-full">
              {ARTICLES_2026.length} Articles
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES_2026.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-card border border-border/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 group block"
              >
                <div>
                  {/* Banner */}
                  <div
                    className={`p-6 h-40 bg-gradient-to-br ${article.bannerGradient} flex flex-col justify-between relative overflow-hidden`}
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/90 self-start">
                      Engineering
                    </span>
                    <div>
                      <h4 className="text-base font-black tracking-tight leading-tight text-white mb-1">
                        {article.bannerTitle}
                      </h4>
                      <p className="text-[11px] text-white/70 line-clamp-1">
                        {article.bannerSub}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
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

                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-main group-hover:underline">
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2025 Archive */}
        <div>
          <div className="flex items-center gap-3 mb-8 pb-3 border-b border-border/80">
            <h2 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
              2025
            </h2>
            <span className="text-xs font-bold text-main bg-main/10 px-2.5 py-0.5 rounded-full">
              {ARTICLES_2025.length} Articles
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES_2025.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="bg-card border border-border/80 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 group block"
              >
                <div>
                  {/* Banner */}
                  <div
                    className={`p-6 h-40 bg-gradient-to-br ${article.bannerGradient} flex flex-col justify-between relative overflow-hidden`}
                  >
                    <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/90 self-start">
                      Guide & Tutorial
                    </span>
                    <div>
                      <h4 className="text-base font-black tracking-tight leading-tight text-white mb-1">
                        {article.bannerTitle}
                      </h4>
                      <p className="text-[11px] text-white/70 line-clamp-1">
                        {article.bannerSub}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
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

                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-main group-hover:underline">
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

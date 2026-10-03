import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";
import Container from "@/components/shared/Container";
import { BLOG_POSTS } from "@/data/blogs";
import agentProdImg from "@/public/images/agent-production.webp";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string | StaticImageData;
  categoryTag: string;
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
    readTime: "15 Min Read",
    img: agentProdImg,
    categoryTag: "AI Engineering",
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
    readTime: "10 Min Read",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=80",
    categoryTag: "DevOps & Cloud",
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
    readTime: "11 Min Read",
    img: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=600&auto=format&fit=crop&q=80",
    categoryTag: "GenAI & RAG",
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
    readTime: "14 Min Read",
    img: "https://images.unsplash.com/photo-1667372335854-c522b0450531?w=600&auto=format&fit=crop&q=80",
    categoryTag: "DevOps & Infrastructure",
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
    readTime: "7 Min Read",
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Git & Developer Workflow",
    year: "2025",
  },
  {
    id: "publish-ios-app-expo-eas",
    slug: "ai-agent-in-production",
    title: "How to Publish Your First iOS App to the App Store using Expo EAS",
    excerpt:
      "A complete beginner-friendly guide to publishing your React Native Expo app on the Apple App Store using EAS Build and Submit.",
    date: "2025-06-22",
    readTime: "9 Min Read",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Mobile App Development",
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
    readTime: "8 Min Read",
    img: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Databases & Backend",
    year: "2025",
  },
  {
    id: "websocket-vs-webrtc",
    slug: "ai-agent-in-production",
    title: "WebSocket vs WebRTC: What's the Real Difference?",
    excerpt:
      "A detailed comparison between WebSocket and WebRTC with real-world use cases, pros, cons, and how to choose the right one for your application.",
    date: "2025-05-25",
    readTime: "8 Min Read",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Real-time Protocols",
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
    readTime: "12 Min Read",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
    categoryTag: "System Architecture",
    year: "2025",
  },
  {
    id: "convert-aab-to-apk",
    slug: "ai-agent-in-production",
    title: "How to Convert .AAB to .APK on Windows and macOS",
    excerpt:
      "Learn how to convert an .aab file to an .apk for testing on Android devices before uploading to the Play Store.",
    date: "2025-02-15",
    readTime: "2 Min Read",
    img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Android Development",
    year: "2025",
  },
  {
    id: "secure-website-ssl-fun-way",
    slug: "ai-agent-in-production",
    title: "How to Secure Your Website with SSL (The Fun Way!)",
    excerpt:
      "A beginner-friendly, hilarious guide to installing an SSL certificate using Let's Encrypt and Certbot on Nginx. No more 'Not Secure' warnings!",
    date: "2025-02-13",
    readTime: "4 Min Read",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Security & Web Dev",
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
    readTime: "5 Min Read",
    img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&auto=format&fit=crop&q=80",
    categoryTag: "Mobile Publishing",
    year: "2025",
  },
];

export default function BlogListSection() {
  const featured = BLOG_POSTS[0];

  return (
    <section className="w-full bg-background transition-colors">
      <CommonSpace>
        <Container>
        {/* Main Header Centered */}
        <div className="flex justify-center mb-12 text-center">
          <CommonHeader
            title="Blog"
            description="Insights on my technical journey, deep-dives into modern frontend frameworks, backend architecture, and lessons learned from building web products."
          />
        </div>

        {/* ─── Featured Post Section ─── */}
        <div className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <span className="text-main font-mono">⭐</span> Featured Post
          </h2>

          <Link
            href={`/blog/${featured.slug}`}
            className="bg-card border border-border/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-main/50 transition-all duration-300 grid md:grid-cols-12 gap-0 group block"
          >
            {/* Featured Image Thumbnail (Left 6 cols) */}
            <div className="md:col-span-6 relative h-64 sm:h-80 md:h-auto min-h-[300px] overflow-hidden bg-muted">
              <Image
                src={agentProdImg}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                  Featured Deep Dive
                </span>
                <span className="h-2 w-2 rounded-full bg-main animate-ping" />
              </div>
            </div>

            {/* Featured Details (Right 6 cols) */}
            <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between bg-card">
              <div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-main" />
                    <span>{featured.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-main" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground mb-4 leading-snug group-hover:text-main transition-colors">
                  {featured.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {featured.excerpt}
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-main group-hover:underline">
                  <span>Read Post</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* ─── 2026 Archive ─── */}
        <div className="mb-16">
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
                  {/* Article Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {article.categoryTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-main" />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-main" />
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
                    <span>Read Post</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── 2025 Archive ─── */}
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
                  {/* Article Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {article.categoryTag}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-main" />
                        <span>{article.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-main" />
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
                    <span>Read Post</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        </Container>
      </CommonSpace>
    </section>
  );
}

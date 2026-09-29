import BubbleBackground from "@/components/client/BubbleBackground";
import ScrollProgress from "@/components/client/ScrollProgress";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Ramjan Ali - Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of professional experience building scalable web applications using React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL.",
  keywords: [
    "Md Ramjan Ali",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Bangladesh",
  ],
  authors: [{ name: "Md Ramjan Ali", url: "https://github.com/Ramjanict" }],
  openGraph: {
    title: "Md Ramjan Ali - Full Stack Developer",
    description:
      "Full Stack Developer building scalable web applications, REST APIs, and microservices with modern technologies.",
    url: "https://ramjan-portfolio.vercel.app",
    siteName: "Md Ramjan Ali Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/ku04x3pn/image/upload/v1790141498/github_banner_final.jpg",
        width: 1200,
        height: 630,
        alt: "Md Ramjan Ali - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", outfit.variable)}
    >
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider>
          <ScrollProgress />
          <BubbleBackground />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

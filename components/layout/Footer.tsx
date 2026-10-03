import NewsletterForm from "@/components/client/NewsletterForm";
import avatarImg from "@/public/images/ramjan-logo.jpg";
import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Container from "../shared/Container";

const QUICK_LINKS = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const SOCIALS = [
  { icon: FaGithub, href: "https://github.com/Ramjanict", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/mdramjanict/",
    label: "LinkedIn",
  },
  { icon: FaXTwitter, href: "https://x.com", label: "Twitter" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-[15px] font-semibold text-foreground mb-2">
        {children}
      </h3>
      <div className="w-6 h-0.5 bg-[#FF7A66]/60 mb-5 rounded-full" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-background py-6 transition-colors">
      <Container>
        {/* Main Enclosed Card */}
        <div className="relative overflow-hidden rounded-3xl border border-main/20 bg-[#F5F5F7] dark:bg-[#181824] dark:border-white/10 px-8 sm:px-14 pt-12 pb-8 transition-colors">
          {/* Top gradient accent line */}
          <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-main/30 via-[#FF7A66] to-main/30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: Brand & Bio */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full shrink-0">
                  <Image
                    src={avatarImg}
                    alt="Md Ramjan Ali"
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-xl font-semibold text-[#FF7A66]">
                  Md Ramjan Ali
                </span>
              </div>

              <p className="text-sm text-muted-foreground  mb-5 max-w-[290px]">
                Full Stack Developer with 2+ years of experience engineering
                scalable web systems and APIs using React, Next.js, Node.js, and
                PostgreSQL.
              </p>

              <div className="flex items-center gap-3.5">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-[#FF7A66] hover:text-[#e05a3c] transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <span className="text-[#FF7A66]">
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="space-y-3.5 pl-4">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-main transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <ColumnHeading>Contact</ColumnHeading>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-[#FF7A66] shrink-0" />

                  <a
                    href="mailto:mdramjan.ict@gmail.com"
                    className="hover:text-foreground transition-colors truncate"
                  >
                    mdramjan.ict@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-[#FF7A66] shrink-0" />

                  <a
                    href="tel:+917050741633"
                    className="hover:text-foreground transition-colors"
                  >
                    +8801303488984
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#FF7A66] shrink-0" />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Stay Updated */}
            <div>
              <ColumnHeading>Stay Updated</ColumnHeading>
              <p className="text-sm text-muted-foreground mb-4 leading-7">
                Subscribe to receive updates on my latest projects and tech
                articles.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom Divider & Legal */}
          <div className="mt-14 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-[#FF7A66] font-semibold">
                Md Ramjan Ali
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#FF7A66]/50">·</span>
              <Link
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

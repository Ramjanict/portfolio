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
    <h3 className="text-sm sm:text-base font-bold text-foreground mb-4">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full bg-background pt-8 pb-4 transition-colors">
      <Container>
        {/* Main Enclosed Card Container */}
        <div className="relative overflow-hidden rounded-3xl border border-[#FCE6E1] dark:border-white/10 bg-[#f9f9fc] dark:bg-[#181827] px-6 sm:px-12 pt-10 pb-6 transition-colors shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: Brand & Bio */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="relative h-9 w-9 overflow-hidden rounded-full shrink-0 border border-main/20">
                  <Image
                    src={avatarImg}
                    alt="Md Ramjan Ali"
                    fill
                    sizes="36px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="text-lg font-extrabold text-[#FF7A66]">
                  Md Ramjan Ali
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5 max-w-[280px]">
                Full Stack Engineer with 3+ years building and scaling products
                end-to-end across backend, mobile, and web platforms.
              </p>

              <div className="flex items-center gap-3.5 text-[#FF7A66]">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:text-[#e05a3c] transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
                <span>
                  <Sparkles className="h-4 w-4" />
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <ColumnHeading>Quick Links</ColumnHeading>
              <ul className="space-y-2.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-main transition-colors"
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
              <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
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
                    href="tel:+8801303488984"
                    className="hover:text-foreground transition-colors"
                  >
                    +8801303488984
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-[#FF7A66] shrink-0" />
                  <span>Kushtia, Bangladesh</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Stay Updated */}
            <div>
              <ColumnHeading>Stay Updated</ColumnHeading>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Subscribe to receive updates on my latest projects and tech
                articles.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* Bottom Divider & Legal */}
          <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()}{" "}
              <span className="text-[#FF7A66] font-semibold">
                Md Ramjan Ali
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-3">
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

        {/* Giant Bottom Email Watermark */}
        {/* <div className="w-full text-center pt-8 pb-4 overflow-hidden select-none pointer-events-none">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-[#FF7A66]/15 dark:text-[#FF7A66]/10 tracking-tight lowercase">
            mdramjan.ict@gmail.com
          </h1>
        </div> */}
      </Container>
    </footer>
  );
}

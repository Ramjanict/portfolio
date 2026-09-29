import DesktopNav from "@/components/client/DesktopNav";
import MobileMenu from "@/components/client/MobileMenu";
import ScrollHeader from "@/components/client/ScrollHeader";
import ThemeToggle from "@/components/client/ThemeToggle";
import Container from "@/components/shared/Container";
import avatarImg from "@/public/images/ramjan-logo.jpg";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <ScrollHeader>
      <Container>
        <div className="mx-auto flex h-20 items-center justify-between relative">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
          >
            <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0">
              <Image
                src={avatarImg}
                alt="Md Ramjan Ali"
                fill
                sizes="56px"
                className="object-cover object-top"
                priority
              />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-foreground">
              Md Ramjan Ali
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <DesktopNav navItems={navItems} />
            <ThemeToggle />
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </Container>
    </ScrollHeader>
  );
}

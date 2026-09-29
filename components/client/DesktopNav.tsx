"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

export default function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 md:flex"
    >
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`relative py-1 text-sm font-medium transition-colors ${
              isActive
                ? "text-main font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-[-6px] left-0 right-0 h-[2.5px] rounded-full bg-main animate-in fade-in zoom-in-50 duration-200" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

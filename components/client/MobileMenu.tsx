"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { RiCloseLine } from "react-icons/ri";

interface NavItem {
  label: string;
  href: string;
}

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden cursor-pointer"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenuOpen ? <RiCloseLine size={20} /> : <GrMenu size={20} />}
      </Button>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 border-b border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-2 shadow-lg md:hidden">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? "bg-main/10 text-main font-semibold"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

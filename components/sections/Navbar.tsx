"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { useRegion } from "@/components/RegionProvider";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const region = useRegion();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="التنقل الرئيسي"
      >
        <Link href="#hero" className="group flex flex-col">
          <span className="font-display text-xl font-bold leading-snug text-charcoal transition-colors group-hover:text-gold md:text-2xl">
            {region.navbarTitle}
          </span>
          <span className="text-xs text-muted">د. شيرين منصور مختار</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="#booking" size="sm">
            احجزي استشارتك
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-charcoal transition-colors hover:bg-beige-light lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 top-[72px] z-30 bg-white lg:hidden">
          <ul className="flex flex-col gap-1 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-charcoal transition-colors hover:bg-beige-light hover:text-gold"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 px-4">
              <Button href="#booking" className="w-full">
                احجزي استشارتك
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";
import { cn } from "@/lib/utils";

const REGIONS_NAV = [
  { id: "eg" as const, href: "/", flag: "🇪🇬", label: "مصر" },
  { id: "sa" as const, href: "/sa", flag: "🇸🇦", label: "السعودية" },
];

export function RegionSwitcher() {
  const region = useRegion();

  return (
    <nav
      aria-label="اختيار الدولة"
      className="fixed top-24 end-4 z-40 md:top-28 md:end-6"
    >
      <div className="flex items-center gap-1 rounded-full border border-beige bg-white p-1 shadow-md">
        {REGIONS_NAV.map((item) => {
          const isActive = region.id === item.id;

          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 md:px-4",
                isActive
                  ? "gold-gradient text-white shadow-sm"
                  : "text-muted hover:bg-beige-light hover:text-charcoal"
              )}
            >
              <span className="text-base leading-none" aria-hidden="true">
                {item.flag}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useRegion } from "@/components/RegionProvider";

export function RegionSwitcher() {
  const region = useRegion();

  return (
    <Link
      href={region.switchHref}
      className="fixed top-24 end-4 z-40 flex items-center gap-2 rounded-full border border-beige bg-white px-4 py-2.5 text-sm font-medium text-charcoal shadow-md transition-all duration-300 hover:border-gold hover:text-gold md:top-28 md:end-6"
      aria-label={`الانتقال إلى صفحة ${region.switchLabel}`}
    >
      <span className="text-lg leading-none" aria-hidden="true">
        {region.switchFlag}
      </span>
      <span>{region.switchLabel}</span>
    </Link>
  );
}

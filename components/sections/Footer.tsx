"use client";

import Link from "next/link";
import {
  NAV_LINKS,
  CLINIC_SERVICES,
  WHATSAPP_LABEL,
  CALL_LABEL,
} from "@/lib/constants";
import { useRegion } from "@/components/RegionProvider";

export function Footer() {
  const region = useRegion();

  return (
    <footer className="border-t border-beige bg-beige-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-bold text-charcoal">
              Aspects Clinica
            </p>
            <p className="mt-2 text-sm text-muted">د. شيرين منصور مختار</p>
            <p className="mt-1 text-sm text-muted">{region.titleShort}</p>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-charcoal">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-charcoal">
              خدمات المركز
            </h3>
            <ul className="space-y-2">
              {CLINIC_SERVICES.map((service) => (
                <li key={service} className="text-sm text-muted">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-base font-semibold text-charcoal">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={region.phoneHref}
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {CALL_LABEL}
                </a>
              </li>
              <li>
                <a
                  href={region.whatsappMessage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-gold"
                >
                  {WHATSAPP_LABEL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-start">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Aspects Clinica — د. شيرين منصور
            مختار. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-muted">{region.footerLocation}</p>
        </div>
      </div>
    </footer>
  );
}

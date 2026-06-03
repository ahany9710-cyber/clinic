"use client";

import Image from "next/image";
import {
  Award,
  Globe,
  Users,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { IMAGES, TRUST_INDICATORS, WHATSAPP_LABEL } from "@/lib/constants";
import { useRegion } from "@/components/RegionProvider";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const trustIcons = [Calendar, Award, Globe, Users];

export function Hero() {
  const region = useRegion();

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-beige-light pt-24 md:pt-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(199,162,83,0.08)_0%,_transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <FadeIn className="order-2 lg:order-1">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gold shadow-sm">
            {region.heroBadge}
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.2] text-charcoal md:text-5xl lg:text-[3.25rem]">
            جمالك في أيدٍ خبيرة
            <span className="block gold-text">نتائج طبيعية بثقة عالمية</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            {region.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#booking" size="lg">
              احجزي استشارتك
            </Button>
            <Button
              href={region.whatsappMessage}
              external
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TRUST_INDICATORS.map((item, i) => {
              const Icon = trustIcons[i];
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center rounded-2xl bg-white p-4 text-center card-shadow"
                >
                  <Icon className="mb-2 h-5 w-5 text-gold" />
                  <span className="font-display text-lg font-bold text-charcoal">
                    {item.value}
                  </span>
                  <span className="mt-0.5 text-xs text-muted">{item.label}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 to-beige/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] card-shadow">
              <Image
                src={IMAGES.doctor}
                alt={`د. شيرين منصور مختار — ${region.titleShort}`}
                width={640}
                height={800}
                priority
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 to-transparent p-6 pt-20">
                <p className="font-display text-xl font-bold text-white">
                  د. شيرين منصور مختار
                </p>
                <p className="mt-1 text-sm text-white/80">{region.titleShort}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

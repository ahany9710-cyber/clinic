"use client";

import { MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_LABEL, CALL_LABEL } from "@/lib/constants";
import { useRegion } from "@/components/RegionProvider";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function FinalCTA() {
  const region = useRegion();

  return (
    <Section id="contact" background="white" className="!py-16 md:!py-20">
      <FadeIn>
        <div className="relative overflow-hidden rounded-[2rem] bg-charcoal px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(199,162,83,0.15)_0%,_transparent_70%)]" />

          <div className="relative">
            <p className="mb-4 text-sm font-medium tracking-wide text-gold">
              ابدئي رحلتك الجمالية اليوم
            </p>

            <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              جمالك يستحق رعاية
              <span className="block gold-text">تثقين بها</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              احجزي استشارتك مع د. شيرين منصور مختار — واكتشفي خطة علاجية
              مصممة خصيصاً لكِ في Aspects Clinica.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              <Button
                href={region.phoneHref}
                external
                variant="secondary"
                size="lg"
              >
                <Phone className="h-5 w-5" />
                {CALL_LABEL}
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

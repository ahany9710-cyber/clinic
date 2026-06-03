"use client";

import {
  Sparkles,
  Syringe,
  Droplets,
  Heart,
  ArrowLeft,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { useRegion } from "@/components/RegionProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";

const iconMap = {
  Sparkles,
  Syringe,
  Droplets,
  Heart,
} as const;

export function Services() {
  const region = useRegion();

  return (
    <Section id="services" background="white">
      <FadeIn>
        <SectionHeading
          eyebrow="خدماتنا المتميزة"
          title="علاجات تجميلية بمعايير عالمية"
          subtitle="نركّز على أربعة علاجات أساسية تمنحكِ نتائج طبيعية وآمنة — بخبرة تتجاوز ربع قرن في الطب التجميلي."
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {SERVICES.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <StaggerItem key={service.id}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-beige/60 bg-white p-8 transition-all duration-300 hover:border-gold/30 card-shadow hover:card-shadow-hover">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-beige-light transition-colors group-hover:bg-gold/10">
                  <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-2xl font-bold text-charcoal">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-base leading-relaxed text-muted">
                  {service.description}
                </p>

                <div className="mt-6">
                  <Button
                    href={region.whatsappMessage}
                    external
                    variant="outline"
                    size="sm"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    اعرفي المزيد
                  </Button>
                </div>

                <div className="absolute -start-20 -top-20 h-40 w-40 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}

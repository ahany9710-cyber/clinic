"use client";

import { MapPin, ExternalLink, Building2 } from "lucide-react";
import { useRegion } from "@/components/RegionProvider";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Locations() {
  const region = useRegion();
  const location = region.location;

  return (
    <Section id="locations" background="beige">
      <FadeIn>
        <SectionHeading
          eyebrow="موقعنا"
          title={`${location.clinic} — ${location.city}`}
          subtitle="مركز طبي تجميلي متكامل — الجلدية، التجميل، الليزر، التغذية، والجراحة."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <article className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-white card-shadow transition-all duration-300 hover:card-shadow-hover">
          <div className="bg-gradient-to-l from-gold/10 to-beige-light p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white card-shadow">
                <Building2 className="h-6 w-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-charcoal">
                  {location.city}
                </h3>
                <p className="text-sm text-muted">{location.country}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="font-display text-lg font-semibold text-charcoal">
              {location.clinic}
            </p>

            <div className="mt-4 flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <p className="text-base text-muted">{location.address}</p>
            </div>

            <div className="mt-6">
              <Button href={location.mapUrl} external variant="outline" size="md">
                <ExternalLink className="h-4 w-4" />
                افتح الخريطة
              </Button>
            </div>
          </div>
        </article>
      </FadeIn>
    </Section>
  );
}

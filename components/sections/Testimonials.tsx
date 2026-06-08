import Image from "next/image";
import { Star, Quote, BadgeCheck, ExternalLink, MapPin } from "lucide-react";
import {
  BEFORE_AFTER_RESULTS,
  FEATURED_REAL_REVIEW,
  GOOGLE_REVIEWS,
  TESTIMONIALS,
} from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

function GoogleReviewsHighlight() {
  return (
    <FadeIn>
      <a
        href={GOOGLE_REVIEWS.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative mx-auto mb-10 block max-w-3xl overflow-hidden rounded-3xl border-2 border-gold/40 bg-gradient-to-br from-white via-beige-light/30 to-gold/5 p-6 shadow-[0_0_0_1px_rgba(199,162,83,0.15),0_8px_32px_rgba(199,162,83,0.12)] transition-all duration-300 hover:border-gold hover:shadow-[0_0_0_2px_rgba(199,162,83,0.25),0_12px_40px_rgba(199,162,83,0.2)] md:p-8"
      >
        <div className="absolute -end-6 -top-6 h-24 w-24 rounded-full bg-gold/10 blur-2xl transition-all duration-300 group-hover:bg-gold/20" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                <MapPin className="h-3.5 w-3.5" />
                Google Maps
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-charcoal shadow-sm">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                ))}
              </span>
            </div>

            <h3 className="font-display text-xl font-bold text-charcoal md:text-2xl">
              {GOOGLE_REVIEWS.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
              {GOOGLE_REVIEWS.subtitle}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 self-start rounded-full bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-white sm:self-center">
            {GOOGLE_REVIEWS.cta}
            <ExternalLink className="h-4 w-4" />
          </div>
        </div>
      </a>
    </FadeIn>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
}) {
  return (
    <blockquote className="relative flex h-full flex-col rounded-3xl bg-white p-8 card-shadow transition-all duration-300 hover:card-shadow-hover">
      <Quote className="absolute start-6 top-6 h-8 w-8 text-gold/20" />

      <div className="mb-4 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <p className="relative flex-1 text-base leading-relaxed text-charcoal">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <footer className="mt-6 flex items-center gap-3 border-t border-beige pt-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige-light font-display text-sm font-bold text-gold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <cite className="not-italic font-medium text-charcoal">
            {testimonial.name}
          </cite>
          <p className="text-xs text-muted">{testimonial.location}</p>
        </div>
      </footer>
    </blockquote>
  );
}

function FeaturedRealReview() {
  return (
    <article className="relative mx-auto max-w-xl overflow-hidden rounded-3xl border border-gold/20 bg-white card-shadow transition-all duration-300 hover:card-shadow-hover md:max-w-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-beige bg-beige-light/50 px-5 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <BadgeCheck className="h-5 w-5 text-gold" />
          <span className="text-sm font-semibold text-gold">
            {FEATURED_REAL_REVIEW.badge}
          </span>
        </div>
        <span className="text-xs text-muted">
          {FEATURED_REAL_REVIEW.source}
        </span>
      </div>

      <div className="relative bg-white p-4 md:p-6">
        <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-beige/80 shadow-inner">
          <Image
            src={FEATURED_REAL_REVIEW.image}
            alt={FEATURED_REAL_REVIEW.alt}
            width={600}
            height={800}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <footer className="flex items-center justify-between gap-3 border-t border-beige px-5 py-4 md:px-6">
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold text-gold" />
          ))}
        </div>
        <p className="text-xs text-muted">{FEATURED_REAL_REVIEW.location}</p>
      </footer>
    </article>
  );
}

export function Testimonials() {
  return (
    <Section id="testimonials" background="rose">
      <FadeIn>
        <SectionHeading
          eyebrow="نتائج حقيقية"
          title="قبل وبعد — نتائج طبيعية تتحدث عن نفسها"
          subtitle="صور حقيقية لمرضى راضين — نفتخر بكل نتيجة طبيعية وكل كلمة ثقة."
        />
      </FadeIn>

      <StaggerContainer className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {BEFORE_AFTER_RESULTS.map((item) => (
          <StaggerItem
            key={item.id}
            className={cn(item.span === "wide" && "col-span-2 row-span-2")}
          >
            <figure className="group relative overflow-hidden rounded-2xl bg-white card-shadow transition-all duration-300 hover:card-shadow-hover md:rounded-3xl">
              <div
                className={cn(
                  "relative overflow-hidden",
                  item.span === "wide" ? "aspect-[4/3]" : "aspect-[3/4]"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes={
                    item.span === "wide"
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <figcaption className="flex items-center justify-between gap-2 px-4 py-3 md:px-5 md:py-4">
                <span className="font-display text-sm font-semibold text-charcoal md:text-base">
                  {item.treatment}
                </span>
                <span
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1 text-xs font-medium",
                    item.type === "before-after"
                      ? "bg-gold/10 text-gold"
                      : "bg-beige-light text-muted"
                  )}
                >
                  {item.type === "before-after" ? "قبل وبعد" : "بعد الجلسة"}
                </span>
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn>
        <div className="section-divider mx-auto mb-14 w-24" />
        <SectionHeading
          eyebrow="آراء المرضى"
          title="ثقة بنيناها مع آلاف المرضى"
          subtitle="مراجعات حقيقية من Google — تجارب مرضى راضين نفتخر بكل كلمة ثقة فيها."
          className="mb-8 md:mb-10"
        />
      </FadeIn>

      <GoogleReviewsHighlight />

      <div className="mb-10 md:mb-12">
        <FadeIn>
          <FeaturedRealReview />
        </FadeIn>
      </div>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <StaggerItem key={testimonial.name}>
            <TestimonialCard testimonial={testimonial} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

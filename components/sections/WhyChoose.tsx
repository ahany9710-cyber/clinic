import { STATS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  AnimatedCounter,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/FadeIn";

export function WhyChoose() {
  return (
    <Section id="why-choose" background="beige">
      <FadeIn>
        <SectionHeading
          eyebrow="لماذا تختارين د. شيرين؟"
          title="خبرة تُبنى على الثقة"
          subtitle="عقود من العمل السريري والتدريب الدولي — لنمنحكِ رعاية تجميلية تستحقينها."
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-3xl bg-white p-8 text-center card-shadow transition-all duration-300 hover:card-shadow-hover">
              <AnimatedCounter
                value={stat.value}
                className="font-display text-4xl font-bold gold-text md:text-5xl"
              />
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                {stat.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stat.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

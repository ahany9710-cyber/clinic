import { CONFERENCES, WHY_CHOOSE_ITEMS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function WhyChoose() {
  return (
    <Section id="why-choose" background="beige">
      <FadeIn>
        <SectionHeading
          eyebrow="لماذا تختارين د. شيرين؟"
          title="مؤهلات وخبرة موثّقة"
          subtitle="أكثر من 25 عاماً من العمل السريري، تدريب دولي متقدم، وشهادات معتمدة من أرقى المؤسسات الطبية العالمية."
        />
      </FadeIn>

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_CHOOSE_ITEMS.map((item) => (
          <StaggerItem key={item.title}>
            <div className="rounded-3xl bg-white p-8 text-center card-shadow transition-all duration-300 hover:card-shadow-hover">
              <span className="font-display text-3xl font-bold gold-text md:text-4xl">
                {item.highlight}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.1}>
        <div className="section-divider mx-auto my-14 w-24" />
        <SectionHeading
          eyebrow="التعليم المستمر"
          title="مؤتمرات وفعاليات دولية"
          subtitle="مشاركة سنوية في أرقى المؤتمرات العالمية للجلدية والطب التجميلي — لمواكبة أحدث التقنيات والمعايير."
          className="mb-10"
        />
      </FadeIn>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONFERENCES.map((conference) => (
          <StaggerItem key={conference.abbr}>
            <div className="flex h-full items-start gap-4 rounded-2xl border border-gold/15 bg-white p-5 card-shadow transition-all duration-300 hover:border-gold/30 hover:card-shadow-hover">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 font-display text-sm font-bold text-gold">
                {conference.abbr}
              </span>
              <div>
                <h3 className="font-display text-sm font-semibold leading-snug text-charcoal md:text-base">
                  {conference.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {conference.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}

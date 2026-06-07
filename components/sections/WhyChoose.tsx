import { WHY_CHOOSE_ITEMS } from "@/lib/constants";
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
    </Section>
  );
}

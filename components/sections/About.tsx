import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { CREDENTIALS, IMAGES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <Section id="about" background="white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/20" />
            <div className="relative overflow-hidden rounded-[2rem] bg-beige-light card-shadow">
              <Image
                src={IMAGES.doctorAlt}
                alt="د. شيرين منصور مختار في العيادة"
                width={576}
                height={1024}
                sizes="(max-width: 1024px) 90vw, 400px"
                className="aspect-[9/16] h-auto w-full object-contain object-center"
              />
            </div>
            <div className="absolute -bottom-6 -start-6 rounded-2xl bg-white px-6 py-4 card-shadow">
              <p className="font-display text-3xl font-bold gold-text">+25</p>
              <p className="text-sm text-muted">سنة خبرة</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <SectionHeading
            eyebrow="عن الدكتورة"
            title="د. شيرين منصور مختار"
            subtitle="استشارية الجلدية والطب التجميلي والليزر — تجمع بين الخبرة السريرية العميقة والتدريب الدولي المتقدم."
            align="start"
            className="mb-8"
          />

          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              تتمتع الدكتورة شيرين منصور مختار بخبرة سريرية تتجاوز 25 عاماً في
              مجال الجلدية والطب التجميلي وعلاجات الليزر. خريجة جامعة عين شمس
              المرموقة، وحاصلة على الدبلومة الأمريكية في الطب التجميلي والليزر،
              وعضو في الجمعية الأمريكية للطب التجميلي والليزر.
            </p>
            <p>
              عملت نائبة استشارية للجلدية والتجميل في الرياض بالمملكة العربية
              السعودية، حيث اكتسبت خبرة واسعة في التعامل مع احتياجات المرضى
              بمختلف أنماط البشرة. اليوم، تقود فريق Aspects Clinica في تقديم
              رعاية تجميلية فاخرة تجمع بين الدقة الطبية واللمسة الجمالية
              الراقية.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {CREDENTIALS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-charcoal">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </Section>
  );
}

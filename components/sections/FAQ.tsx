"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" background="white">
      <FadeIn>
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="إجابات على أهم استفساراتك"
          subtitle="نجيب على الأسئلة الأكثر شيوعاً حول علاجاتنا — وإن لم تجدي إجابتك، تواصلي معنا مباشرة."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto max-w-3xl divide-y divide-beige">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-5 text-start transition-colors hover:bg-beige-light/50"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span className="font-display text-base font-semibold text-charcoal md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-gold transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="px-4 pb-5 text-base leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </Section>
  );
}

"use client";

import { useEffect, useState, type FormEvent } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import {
  BOOKING_BRANCHES,
  BOOKING_SERVICES,
  BOOKING_SOURCES,
  CALL_LABEL,
  FORM_SUBMIT_ACTION,
  FORM_SUBMIT_SUBJECT,
  PHONE_HREF,
  WHATSAPP_LABEL,
  WHATSAPP_MESSAGE,
} from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border border-beige bg-white px-4 py-3 text-base text-charcoal transition-colors placeholder:text-muted/60 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20";

const labelClass = "mb-2 block text-sm font-medium text-charcoal";

const optionalLabel = (
  <span className="text-xs font-normal text-muted">(اختياري)</span>
);

interface FormState {
  name: string;
  phone: string;
  branch: string;
  service: string;
  serviceOther: string;
  source: string;
  sourceOther: string;
  notes: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  branch: "",
  service: "",
  serviceOther: "",
  source: "",
  sourceOther: "",
  notes: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {}
  );
  const [thankYouUrl, setThankYouUrl] = useState("");

  useEffect(() => {
    setThankYouUrl(`${window.location.origin}/thank-you`);
  }, []);

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) next.name = "يرجى إدخال الاسم";
    if (!form.phone.trim()) next.phone = "يرجى إدخال رقم الهاتف";
    if (!form.branch) next.branch = "يرجى اختيار الفرع";
    if (!form.service) next.service = "يرجى اختيار الخدمة";
    if (form.service === "أخرى" && !form.serviceOther.trim()) {
      next.serviceOther = "يرجى تحديد الخدمة";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!validate()) {
      e.preventDefault();
    }
  };

  return (
    <Section id="booking" background="beige">
      <FadeIn>
        <SectionHeading
          eyebrow="احجزي استشارتك"
          title="نموذج حجز الكشف"
          subtitle="املئي البيانات وسنرد عليكِ في أقرب وقت لتأكيد موعدك."
        />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mx-auto max-w-2xl">
          <form
            action={FORM_SUBMIT_ACTION}
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl bg-white p-6 card-shadow md:p-10"
          >
            <input type="hidden" name="_subject" value={FORM_SUBMIT_SUBJECT} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            {thankYouUrl && (
              <input type="hidden" name="_next" value={thankYouUrl} />
            )}

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  الاسم <span className="text-gold">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={cn(inputClass, errors.name && "border-red-400")}
                  placeholder="الاسم الكامل"
                  autoComplete="name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  الهاتف <span className="text-gold">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  dir="ltr"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={cn(
                    inputClass,
                    "text-end",
                    errors.phone && "border-red-400"
                  )}
                  placeholder="01xxxxxxxxx"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="branch" className={labelClass}>
                  الفرع <span className="text-gold">*</span>
                </label>
                <select
                  id="branch"
                  name="branch"
                  required
                  value={form.branch}
                  onChange={(e) => update("branch", e.target.value)}
                  className={cn(inputClass, errors.branch && "border-red-400")}
                >
                  <option value="">اختر الفرع</option>
                  {BOOKING_BRANCHES.map((branch) => (
                    <option key={branch.value} value={branch.label}>
                      {branch.label}
                    </option>
                  ))}
                </select>
                {errors.branch && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.branch}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  الخدمة <span className="text-gold">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className={cn(inputClass, errors.service && "border-red-400")}
                >
                  <option value="">اختر الخدمة</option>
                  {BOOKING_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1.5 text-sm text-red-500">{errors.service}</p>
                )}

                {form.service === "أخرى" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="service_other"
                      value={form.serviceOther}
                      onChange={(e) => update("serviceOther", e.target.value)}
                      className={cn(
                        inputClass,
                        errors.serviceOther && "border-red-400"
                      )}
                      placeholder="حددي الخدمة المطلوبة"
                    />
                    {errors.serviceOther && (
                      <p className="mt-1.5 text-sm text-red-500">
                        {errors.serviceOther}
                      </p>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="source" className={labelClass}>
                  ازاي عرفتنا {optionalLabel}
                </label>
                <select
                  id="source"
                  name="source"
                  value={form.source}
                  onChange={(e) => update("source", e.target.value)}
                  className={inputClass}
                >
                  <option value="">اختر...</option>
                  {BOOKING_SOURCES.map((source) => (
                    <option key={source} value={source}>
                      {source}
                    </option>
                  ))}
                </select>

                {form.source === "أخرى" && (
                  <div className="mt-3">
                    <input
                      type="text"
                      name="source_other"
                      value={form.sourceOther}
                      onChange={(e) => update("sourceOther", e.target.value)}
                      className={inputClass}
                      placeholder="كيف سمعتِ عنا؟"
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="notes" className={labelClass}>
                  طلب إضافي {optionalLabel}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className={cn(inputClass, "resize-none")}
                  placeholder="أي تفاصيل إضافية تودين مشاركتها..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="gold-gradient mt-8 flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:text-lg"
            >
              <Send className="h-5 w-5" />
              إرسال طلب الحجز
            </button>

            <p className="mt-4 text-center text-xs text-muted">
              بالضغط على إرسال، سيتم إرسال طلبك وسنتواصل معكِ في أقرب وقت.
            </p>
          </form>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={WHATSAPP_MESSAGE} external variant="whatsapp" size="md">
              <MessageCircle className="h-5 w-5" />
              {WHATSAPP_LABEL}
            </Button>
            <Button href={PHONE_HREF} external variant="outline" size="md">
              <Phone className="h-5 w-5" />
              {CALL_LABEL}
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

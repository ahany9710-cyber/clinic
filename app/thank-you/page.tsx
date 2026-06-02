"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-beige-light px-4 py-20">
      <FadeIn className="mx-auto max-w-lg text-center">
        <div className="rounded-3xl bg-white p-10 card-shadow md:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
            <CheckCircle2 className="h-8 w-8 text-gold" />
          </div>

          <h1 className="font-display text-3xl font-bold text-charcoal md:text-4xl">
            شكراً لتواصلكِ
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {mounted
              ? "تم استلام طلب الحجز بنجاح. سيتواصل معكِ فريق Aspects Clinica في أقرب وقت لتأكيد موعدك."
              : "..."}
          </p>

          <div className="mt-8">
            <Button href="/" size="lg">
              <Home className="h-5 w-5" />
              العودة للرئيسية
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted">
            <Link href="/#booking" className="text-gold transition-colors hover:underline">
              إرسال طلب آخر
            </Link>
          </p>
        </div>
      </FadeIn>
    </main>
  );
}

import type { Metadata } from "next";
import { El_Messiri, Tajawal } from "next/font/google";
import "./globals.css";
import { PHONE, WHATSAPP_HREF } from "@/lib/constants";

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "د. شيرين منصور مختار | استشارية الجلدية والتجميل — Aspects Clinica",
  description:
    "استشارية الجلدية والطب التجميلي والليزر — أكثر من 25 عاماً من الخبرة. حقن الفيلر، البوتوكس، السكين بوستر، ومحفزات الكولاجين في الرياض والقاهرة.",
  keywords: [
    "جلدية",
    "طب تجميلي",
    "فيلر",
    "بوتوكس",
    "سكين بوستر",
    "كولاجين",
    "دكتورة شيرين منصور",
    "Aspects Clinica",
    "الرياض",
    "القاهرة",
  ],
  openGraph: {
    title: "د. شيرين منصور مختار | Aspects Clinica",
    description:
      "استشارية الجلدية والتجميل والليزر — نتائج طبيعية بثقة عالمية في الرياض والقاهرة.",
    locale: "ar_EG",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      name: "د. شيرين منصور مختار",
      jobTitle: "استشارية الجلدية والتجميل والليزر",
      description:
        "استشارية الجلدية والطب التجميلي والليزر بخبرة تتجاوز 25 عاماً.",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "جامعة عين شمس",
      },
      memberOf: {
        "@type": "Organization",
        name: "الجمعية الأمريكية للطب التجميلي والليزر",
      },
      telephone: PHONE,
      url: WHATSAPP_HREF,
    },
    {
      "@type": "MedicalBusiness",
      name: "Aspects Clinica",
      description:
        "مركز طبي تجميلي متكامل — الجلدية، التجميل، الليزر، التغذية، الجراحة التجميلية.",
      telephone: PHONE,
      address: [
        {
          "@type": "PostalAddress",
          addressLocality: "الرياض",
          addressCountry: "SA",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "القاهرة",
          addressCountry: "EG",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${elMessiri.variable} ${tajawal.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-charcoal font-body">
        {children}
      </body>
    </html>
  );
}

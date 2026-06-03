import type { Metadata } from "next";
import { El_Messiri, Tajawal } from "next/font/google";
import "./globals.css";

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
  title: "د. شيرين منصور مختار | Aspects Clinica",
  description:
    "الجلدية والطب التجميلي والليزر — Aspects Clinica في مصر والسعودية.",
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
      <body className="min-h-full bg-background text-charcoal font-body">
        {children}
      </body>
    </html>
  );
}

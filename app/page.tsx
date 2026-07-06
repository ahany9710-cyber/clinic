import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getRegion } from "@/lib/regions";

const region = getRegion("eg");

export const metadata: Metadata = {
  title: region.metadata.title,
  description: region.metadata.description,
  keywords: [
    "جلدية",
    "طب تجميلي",
    "فيلر",
    "بوتوكس",
    "القاهرة الجديدة",
    "دكتورة شيرين منصور",
  ],
  openGraph: {
    title: region.metadata.title,
    description: region.metadata.description,
    locale: region.metadata.locale,
    type: "website",
  },
};

export default function EgyptPage() {
  return <LandingPage regionId="eg" />;
}

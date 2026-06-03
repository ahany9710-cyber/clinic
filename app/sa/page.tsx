import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getRegion } from "@/lib/regions";

const region = getRegion("sa");

export const metadata: Metadata = {
  title: region.metadata.title,
  description: region.metadata.description,
  openGraph: {
    title: region.metadata.title,
    description: region.metadata.description,
    locale: region.metadata.locale,
    type: "website",
  },
};

export default function SaudiPage() {
  return <LandingPage regionId="sa" />;
}

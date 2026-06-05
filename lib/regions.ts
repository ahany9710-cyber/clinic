export type RegionId = "eg" | "sa";

export interface RegionConfig {
  id: RegionId;
  path: string;
  switchHref: string;
  switchLabel: string;
  switchFlag: string;
  phoneE164: string;
  phoneHref: string;
  whatsappHref: string;
  whatsappMessage: string;
  title: string;
  titleShort: string;
  heroBadge: string;
  heroSubtitle: string;
  aboutSubtitle: string;
  aboutParagraphs: readonly string[];
  credentials: readonly string[];
  location: {
    city: string;
    country: string;
    clinic: string;
    address: string;
    mapUrl: string;
  };
  bookingBranchLabel: string;
  footerLocation: string;
  navbarTitle: string;
  metadata: {
    title: string;
    description: string;
    locale: string;
  };
}

const whatsappText = (regionLabel: string) =>
  encodeURIComponent(
    `مرحباً، أود حجز استشارة مع الدكتورة شيرين منصور مختار في Aspects Clinica — ${regionLabel}.`
  );

export const REGIONS: Record<RegionId, RegionConfig> = {
  eg: {
    id: "eg",
    path: "/",
    switchHref: "/sa",
    switchLabel: "السعودية",
    switchFlag: "🇸🇦",
    phoneE164: "201200799993",
    phoneHref: "tel:+201200799993",
    whatsappHref: "https://wa.me/201200799993",
    whatsappMessage: `https://wa.me/201200799993?text=${whatsappText("مصر")}`,
    title: "استشارية الجلدية والتجميل والليزر في مصر",
    titleShort: "استشارية الجلدية والتجميل والليزر في مصر",
    heroBadge: "استشارية الجلدية والتجميل والليزر في مصر",
    heroSubtitle:
      "أكثر من 25 عاماً من الخبرة في الجلدية والطب التجميلي والليزر — في Aspects Clinica بالتجمع، القاهرة الجديدة. نقدّم لكِ رعاية طبية فاخرة ونتائج تُبرز جمالك الطبيعي.",
    aboutSubtitle:
      "استشارية الجلدية والتجميل والليزر في مصر — تجمع بين الخبرة السريرية العميقة والتدريب الدولي المتقدم.",
    aboutParagraphs: [
      "تتمتع الدكتورة شيرين منصور مختار بخبرة سريرية تتجاوز 25 عاماً في مجال الجلدية والطب التجميلي وعلاجات الليزر. خريجة جامعة عين شمس المرموقة، وحاصلة على الدبلومة الأمريكية في الطب التجميلي والليزر، وعضو في الجمعية الأمريكية للطب التجميلي والليزر.",
      "تقدّم في Aspects Clinica بالتجمع، القاهرة الجديدة، رعاية تجميلية فاخرة تجمع بين الدقة الطبية واللمسة الجمالية الراقية — مع خطط علاجية مصممة لاحتياجات كل مريضة.",
    ],
    credentials: [
      "استشارية الجلدية والتجميل والليزر في مصر",
      "خريجة جامعة عين شمس",
      "دبلومة أمريكية في الطب التجميلي والليزر",
      "عضو الجمعية الأمريكية للطب التجميلي والليزر",
      "أكثر من 25 عاماً من الخبرة السريرية",
    ],
    location: {
      city: "القاهرة الجديدة",
      country: "جمهورية مصر العربية",
      clinic: "Aspects Clinica",
      address: "Aspects Clinica — التجمع، القاهرة الجديدة",
      mapUrl: "https://maps.app.goo.gl/RkLvQGh6KkrYnQCz9",
    },
    bookingBranchLabel: "Aspects Clinica — التجمع، القاهرة الجديدة",
    footerLocation: "التجمع، القاهرة الجديدة · مصر",
    navbarTitle: "Aspects Clinica",
    metadata: {
      title: "د. شيرين منصور مختار | استشارية الجلدية والتجميل والليزر في مصر",
      description:
        "استشارية الجلدية والتجميل والليزر في مصر — Aspects Clinica بالتجمع، القاهرة الجديدة. حقن الفيلر، البوتوكس، السكين بوستر، ومحفزات الكولاجين.",
      locale: "ar_EG",
    },
  },
  sa: {
    id: "sa",
    path: "/sa",
    switchHref: "/",
    switchLabel: "مصر",
    switchFlag: "🇪🇬",
    phoneE164: "966501659014",
    phoneHref: "tel:+966501659014",
    whatsappHref: "https://wa.me/966501659014",
    whatsappMessage: `https://wa.me/966501659014?text=${whatsappText("السعودية")}`,
    title: "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية",
    titleShort: "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية",
    heroBadge: "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية",
    heroSubtitle:
      "أكثر من 25 عاماً من الخبرة في الجلدية والطب التجميلي والليزر — في Aspects Clinica بالرياض. نقدّم لكِ رعاية طبية فاخرة ونتائج طبيعية بثقة عالمية.",
    aboutSubtitle:
      "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية — تجمع بين الخبرة السريرية العميقة والتدريب الدولي المتقدم.",
    aboutParagraphs: [
      "تتمتع الدكتورة شيرين منصور مختار بخبرة سريرية تتجاوز 25 عاماً في مجال الجلدية والطب التجميلي وعلاجات الليزر. خريجة جامعة عين شمس، وحاصلة على الدبلومة الأمريكية في الطب التجميلي والليزر، وعضو في الجمعية الأمريكية للطب التجميلي والليزر.",
      "تعمل نائباً للجلدية والتجميل والليزر في Aspects Clinica بالرياض، المملكة العربية السعودية، حيث تقدّم رعاية تجميلية فاخرة ونتائج طبيعية بثقة عالمية.",
    ],
    credentials: [
      "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية",
      "خريجة جامعة عين شمس",
      "دبلومة أمريكية في الطب التجميلي والليزر",
      "عضو الجمعية الأمريكية للطب التجميلي والليزر",
      "أكثر من 25 عاماً من الخبرة السريرية",
    ],
    location: {
      city: "الرياض",
      country: "المملكة العربية السعودية",
      clinic: "Aspects Clinica",
      address: "Aspects Clinica — الرياض",
      mapUrl: "https://maps.google.com/?q=24.753500,46.723900",
    },
    bookingBranchLabel: "Aspects Clinica — الرياض، السعودية",
    footerLocation: "الرياض · المملكة العربية السعودية",
    navbarTitle: "الرياض المملكة العربية السعودية",
    metadata: {
      title: "د. شيرين منصور مختار | نائب الجلدية والتجميل والليزر — الرياض",
      description:
        "نائب الجلدية والتجميل والليزر بالرياض المملكة العربية السعودية — Aspects Clinica. حقن الفيلر، البوتوكس، السكين بوستر، ومحفزات الكولاجين.",
      locale: "ar_SA",
    },
  },
};

export function getRegion(id: RegionId): RegionConfig {
  return REGIONS[id];
}

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
      "أكثر من 30 عاماً من الخبرة في الجلدية والطب التجميلي والليزر — في Aspects Clinica بالتجمع، القاهرة الجديدة. نقدّم لكِ رعاية طبية فاخرة ونتائج تُبرز جمالك الطبيعي.",
    aboutSubtitle:
      "استشارية الجلدية والتجميل والليزر في مصر — ماجستير جلدية وتناسلية، تدريب دولي متقدم، وأكثر من 30 عاماً من الخبرة السريرية.",
    aboutParagraphs: [
      "الدكتورة شيرين منصور مختار خريجة كلية الطب بجامعة عين شمس عام 1994، وحاصلة على ماجستير الجلدية والتناسلية من نفس الجامعة عام 2011. تتمتع بأكثر من 30 عاماً من الخبرة السريرية في الجلدية والطب التجميلي وعلاجات الليزر، مع دبلومة أمريكية في الطب التجميلي والليزر من جامعة عين شمس بالتعاون مع الأكاديمية الأمريكية الدولية.",
      "تعمل استشارية للجلدية التجميل والليزر في Aspects Clinica بالتجمع، القاهرة الجديدة، منذ 2019. حاصلة على شهادات متقدمة في خيوط EPLINE (المستوى الرابع — باريس)، ومنتدى خبراء البوتوكس من Allergan بالمملكة المتحدة، وحضور مؤتمرات IMCAS وEADV العالمية.",
    ],
    credentials: [
      "استشارية الجلدية التجميل والليزر — Aspects Clinica، القاهرة",
      "ماجستير الجلدية والتناسلية — جامعة عين شمس",
      "دبلومة أمريكية في الطب التجميلي والليزر",
      "شهادة معدات الليزر الطبي وسلامة الليزر — قصر العيني",
      "المستوى الرابع — خيوط EPLINE — باريس 2020",
      "أكثر من 30 عاماً من الخبرة السريرية",
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
        "استشارية الجلدية والتجميل والليزر في مصر — Aspects Clinica بالتجمع. خيوط EPLINE، بوتوكس Allergan، فيلر، سكين بوستر، ومحفزات الكولاجين. أكثر من 30 عاماً خبرة.",
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
    title: "أخصائية الجلدية والتجميل بالرياض المملكة العربية السعودية",
    titleShort: "أخصائية الجلدية والتجميل بالرياض المملكة العربية السعودية",
    heroBadge: "أخصائية الجلدية والتجميل بالرياض المملكة العربية السعودية",
    heroSubtitle:
      "أكثر من 30 عاماً من الخبرة في الجلدية والطب التجميلي والليزر — في مركز بنان بلاستيك وAspects Clinica بالرياض. نقدّم لكِ رعاية طبية فاخرة ونتائج طبيعية بثقة عالمية.",
    aboutSubtitle:
      "أخصائية الجلدية والتجميل بالرياض — خبرة 9 سنوات في مستشفى الإيمان، تدريب دولي متقدم، وأكثر من 30 عاماً من العمل السريري.",
    aboutParagraphs: [
      "الدكتورة شيرين منصور مختار خريجة كلية الطب بجامعة عين شمس عام 1994، وحاصلة على ماجستير الجلدية والتناسلية عام 2011. عملت أخصائية جلدية في مستشفى الإيمان بالرياض لأكثر من 9 سنوات (2007–2016)، ورئيسة قسم التدقيق السريري في المستشفى (2013–2016)، قبل أن تتخصص في الطب التجميلي والليزر.",
      "تعمل أخصائية للجلدية والتجميل في مركز بنان بلاستيك بالرياض منذ 2016، وحاصلة على شهادات متقدمة في خيوط EPLINE (المستوى الرابع — باريس)، ومنتدى خبراء البوتوكس من Allergan، وحضور مؤتمرات IMCAS وEADV العالمية.",
    ],
    credentials: [
      "أخصائية الجلدية والتجميل — مركز بنان بلاستيك، الرياض",
      "أخصائية جلدية سابقة — مستشفى الإيمان، الرياض (9 سنوات)",
      "ماجستير الجلدية والتناسلية — جامعة عين شمس",
      "دبلومة أمريكية في الطب التجميلي والليزر",
      "المستوى الرابع — خيوط EPLINE — باريس 2020",
      "أكثر من 30 عاماً من الخبرة السريرية",
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
      title: "د. شيرين منصور مختار | أخصائية الجلدية والتجميل — الرياض",
      description:
        "أخصائية الجلدية والتجميل بالرياض — بنان بلاستيك. خيوط EPLINE، بوتوكس Allergan، فيلر، سكين بوستر، ومحفزات الكولاجين. أكثر من 30 عاماً خبرة.",
      locale: "ar_SA",
    },
  },
};

export function getRegion(id: RegionId): RegionConfig {
  return REGIONS[id];
}

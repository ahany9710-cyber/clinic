export type RegionId = "eg" | "sa";

export interface RegionConfig {
  id: RegionId;
  path: string;
  switchHref: string;
  switchLabel: string;
  switchFlag: string;
  phoneE164: string;
  phonePlaceholder: string;
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

const HERO_SUBTITLE =
  "أكثر من 25 عاماً من الخبرة في الجلدية والطب التجميلي والليزر في الرياض بالمملكة العربية السعودية، و Aspects Clinica بمصر. نقدّم لكِ رعاية طبية فاخرة ونتائج طبيعية بثقة عالمية.";

export const REGIONS: Record<RegionId, RegionConfig> = {
  eg: {
    id: "eg",
    path: "/",
    switchHref: "/sa",
    switchLabel: "السعودية",
    switchFlag: "🇸🇦",
    phoneE164: "201200799993",
    phonePlaceholder: "01xxxxxxxxx",
    phoneHref: "tel:+201200799993",
    whatsappHref: "https://wa.me/201200799993",
    whatsappMessage: `https://wa.me/201200799993?text=${whatsappText("مصر")}`,
    title: "استشارية الجلدية والتجميل والليزر في مصر",
    titleShort: "استشارية الجلدية والتجميل والليزر في مصر",
    heroBadge: "استشارية الجلدية والتجميل والليزر في مصر",
    heroSubtitle: HERO_SUBTITLE,
    aboutSubtitle:
      "استشارية الجلدية والتجميل والليزر في مصر — ماجستير جلدية وتناسلية، تدريب دولي متقدم، وأكثر من 25 عاماً من الخبرة السريرية.",
    aboutParagraphs: [
      "الدكتورة شيرين منصور مختار خريجة كلية الطب بجامعة عين شمس، وحاصلة على ماجستير الجلدية والتناسلية من نفس الجامعة عام 2011. تتمتع بأكثر من 25 عاماً من الخبرة السريرية في الجلدية والطب التجميلي وعلاجات الليزر، مع دبلومة أمريكية في الطب التجميلي والليزر من جامعة عين شمس بالتعاون مع الأكاديمية الأمريكية الدولية.",
      "تعمل استشارية للجلدية التجميل والليزر في Aspects Clinica بالتجمع، القاهرة الجديدة، منذ 2019. حاصلة على شهادات متقدمة في خيوط EPLINE (المستوى الثاني — جدة)، ومنتدى خبراء البوتوكس من Allergan بالمملكة المتحدة، وحضور مؤتمرات IMCAS وEADV العالمية.",
    ],
    credentials: [
      "استشارية الجلدية التجميل والليزر — Aspects Clinica، القاهرة",
      "ماجستير الجلدية والتناسلية — جامعة عين شمس",
      "شهادة معدات الليزر الطبي وسلامة الليزر — قصر العيني",
      "المستوى الثاني — خيوط EPLINE — جدة 2019",
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
        "استشارية الجلدية والتجميل والليزر في مصر — Aspects Clinica بالتجمع. خيوط EPLINE، بوتوكس Allergan، فيلر، سكين بوستر، ومحفزات الكولاجين. أكثر من 25 عاماً خبرة.",
      locale: "ar_EG",
    },
  },
  sa: {
    id: "sa",
    path: "/sa",
    switchHref: "/",
    switchLabel: "مصر",
    switchFlag: "🇪🇬",
    phoneE164: "966509219266",
    phonePlaceholder: "05xxxxxxxx",
    phoneHref: "tel:+966509219266",
    whatsappHref: "https://wa.me/966509219266",
    whatsappMessage: `https://wa.me/966509219266?text=${whatsappText("السعودية")}`,
    title: "نائب الجلدية والتجميل بالرياض المملكة العربية السعودية",
    titleShort: "نائب الجلدية والتجميل بالرياض المملكة العربية السعودية",
    heroBadge: "نائب الجلدية والتجميل بالرياض المملكة العربية السعودية",
    heroSubtitle: HERO_SUBTITLE,
    aboutSubtitle:
      "نائبة الجلدية والتجميل بالرياض — خبرة 9 سنوات في مستشفى الإيمان، تدريب دولي متقدم، وأكثر من 25 عاماً من العمل السريري.",
    aboutParagraphs: [
      "الدكتورة شيرين منصور مختار خريجة كلية الطب بجامعة عين شمس، وحاصلة على ماجستير الجلدية والتناسلية عام 2011. عملت نائبة جلدية في مستشفى الإيمان بالرياض لأكثر من 9 سنوات (2007–2016)، ومراكز بنان الطبية منذ 2016.",
      "تعمل نائبة للجلدية والتجميل في الرياض منذ 2016، وحاصلة على شهادات متقدمة في خيوط EPLINE (المستوى الثاني — جدة)، ومنتدى خبراء البوتوكس من Allergan، وحضور مؤتمرات IMCAS وEADV العالمية.",
    ],
    credentials: [
      "نائبة الجلدية والتجميل — الرياض",
      "نائبة جلدية سابقة — مستشفى الإيمان، الرياض (9 سنوات)، ومراكز بنان الطبية (10 سنوات)",
      "ماجستير الجلدية والتناسلية — جامعة عين شمس",
      "المستوى الثاني — خيوط EPLINE — جدة 2019",
      "أكثر من 25 عاماً من الخبرة السريرية",
    ],
    location: {
      city: "الرياض",
      country: "المملكة العربية السعودية",
      clinic: "مركز بنان",
      address: "مركز بنان بالرياض",
      mapUrl: "https://maps.app.goo.gl/NQYowkuSTp2Ks5Wa6?g_st=iwb",
    },
    bookingBranchLabel: "مركز بنان بالرياض",
    footerLocation: "الرياض · المملكة العربية السعودية",
    navbarTitle: "الرياض المملكة العربية السعودية",
    metadata: {
      title: "د. شيرين منصور مختار | نائب الجلدية والتجميل — الرياض",
      description:
        "نائب الجلدية والتجميل بالرياض — Aspects Clinica. خيوط EPLINE، بوتوكس Allergan، فيلر، سكين بوستر، ومحفزات الكولاجين. أكثر من 25 عاماً خبرة.",
      locale: "ar_SA",
    },
  },
};

export function getRegion(id: RegionId): RegionConfig {
  return REGIONS[id];
}

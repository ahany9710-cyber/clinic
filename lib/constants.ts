/** الرقم المصري الموحّد — مصدر واحد لكل روابط الاتصال والواتساب في الموقع */
export const PHONE_E164 = "201200799993";

export const PHONE = "+20 12 00799993";

export const PHONE_HREF = `tel:+${PHONE_E164}`;

export const WHATSAPP_HREF = `https://wa.me/${PHONE_E164}`;

export const WHATSAPP_MESSAGE =
  `${WHATSAPP_HREF}?text=` +
  encodeURIComponent(
    "مرحباً، أود حجز استشارة مع الدكتورة شيرين منصور مختار في Aspects Clinica."
  );

export const WHATSAPP_LABEL = "واتساب";

export const CALL_LABEL = "اتصل بنا";

export const FORM_SUBMIT_EMAIL = "sohailaaehabb@gmail.com";
export const FORM_SUBMIT_ACTION = `https://formsubmit.co/${FORM_SUBMIT_EMAIL}`;
export const FORM_SUBMIT_SUBJECT = "New Lead From Website";

export const MAPS = {
  riyadh: "https://maps.google.com/?q=24.753500,46.723900",
  cairo: "https://maps.app.goo.gl/RkLvQGh6KkrYnQCz9",
} as const;

export const IMAGES = {
  doctor: "/doctor.png",
  doctorAlt: "/doctor-about.png",
  clinic:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
} as const;

export const NAV_LINKS = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الخدمات", href: "#services" },
  { label: "عن الدكتورة", href: "#about" },
  { label: "آراء المرضى", href: "#testimonials" },
  { label: "الأسئلة الشائعة", href: "#faq" },
  { label: "الفروع", href: "#locations" },
  { label: "احجزي الآن", href: "#booking" },
] as const;

export const TRUST_INDICATORS = [
  { label: "سنوات الخبرة", value: "+25" },
  { label: "دبلومة أمريكية", value: "معتمدة" },
  { label: "خبرة دولية", value: "الرياض" },
  { label: "مرضى راضون", value: "آلاف" },
] as const;

export const SERVICES = [
  {
    id: "filler",
    title: "حقن الفيلر",
    description:
      "نعيد تعريف ملامح الوجه بتوازن طبيعي، مع تعزيز الحجم ونحت الخطوط بأعلى معايير الأمان والجمال.",
    icon: "Sparkles",
  },
  {
    id: "botox",
    title: "حقن البوتوكس",
    description:
      "نخفّف تجاعيد التعبير بلمسة خفيفة تحافظ على حركة الوجه، لتبدين أكثر شباباً وانتعاشاً دون مظهر مصطنع.",
    icon: "Syringe",
  },
  {
    id: "skin-booster",
    title: "حقن السكين بوستر",
    description:
      "نغذّي البشرة من الداخل لترطيب عميق وإشراقة فورية، مع تحسين ملمس الجلد ومرونته على المدى الطويل.",
    icon: "Droplets",
  },
  {
    id: "collagen",
    title: "محفزات الكولاجين",
    description:
      "نحفّز تجدد الكولاجين الطبيعي لبشرة أكثر تماسكاً وشباباً، مع نتائج تدريجية وطبيعية تدوم طويلاً.",
    icon: "Heart",
  },
] as const;

export const STATS = [
  {
    value: "+25",
    label: "سنة خبرة",
    description: "في الجلدية والطب التجميلي والليزر",
  },
  {
    value: "دولية",
    label: "خبرة عالمية",
    description: "استشارية في الرياض وعضوية أمريكية",
  },
  {
    value: "100%",
    label: "تقنيات متقدمة",
    description: "أحدث أساليب الطب التجميلي المعتمدة عالمياً",
  },
  {
    value: "فردية",
    label: "رعاية شخصية",
    description: "خطة علاجية مصممة لاحتياجاتك الفريدة",
  },
] as const;

export const CREDENTIALS = [
  "استشارية الجلدية والتجميل والليزر",
  "نائبة استشارية الجلدية والتجميل — الرياض، المملكة العربية السعودية",
  "خريجة جامعة عين شمس",
  "دبلومة أمريكية في الطب التجميلي والليزر",
  "عضو الجمعية الأمريكية للطب التجميلي والليزر",
  "أكثر من 25 عاماً من الخبرة السريرية",
] as const;

export const TESTIMONIALS = [
  {
    name: "نورا أ.",
    location: "الرياض",
    text: "كنتُ قلقة من نتيجة الفيلر، لكن الدكتورة شيرين ناقشتني بكل هدوء ووضّحت الخطة بالتفصيل. النتيجة طبيعية جداً — أصدقائي يسألونني عن إشراقة بشرتي دون أن يشعروا أنني أجريت أي إجراء.",
    rating: 5,
  },
  {
    name: "سارة م.",
    location: "القاهرة",
    text: "تجربة احترافية من أول لحظة. الدكتورة شيرين دقيقة جداً في التفاصيل، والعياد نظيفة وراقية. حقن البوتوكس كانت بدون ألم تقريباً، والنتيجة فاقت توقعاتي.",
    rating: 5,
  },
  {
    name: "لمى خ.",
    location: "الرياض",
    text: "بعد جلسات السكين بوستر، بشرتي أصبحت أكثر نعومة وإشراقة. أشعر بثقة أكبر في نفسي. أنصح كل من تبحث عن نتائج طبيعية وطبيبة تستحق الثقة.",
    rating: 5,
  },
  {
    name: "هند ع.",
    location: "القاهرة",
    text: "محفزات الكولاجين غيّرت ملمس بشرتي خلال أسابيع. الدكتورة شيرين تتابع معك بعد الجلسة وتجيب على كل استفساراتك. هذا ما يميّزها — اهتمام حقيقي بالمريض.",
    rating: 5,
  },
] as const;

export const FEATURED_REAL_REVIEW = {
  image: "/results/review-story.png",
  alt: "مراجعة حقيقية من مريضة — ستوري واتساب/انستغرام للدكتورة شيرين منصور",
  badge: "مراجعة حقيقية",
  source: "من ستوري مريضة",
  location: "الرياض",
} as const;

export const BEFORE_AFTER_RESULTS = [
  {
    id: "face-filler",
    image: "/results/face-before-after.png",
    alt: "نتائج فيلر الوجه — قبل وبعد مع الدكتورة شيرين منصور",
    treatment: "فيلر الوجه",
    type: "before-after" as const,
    span: "wide" as const,
  },
  {
    id: "lips-filler-1",
    image: "/results/lips-before-after-2.png",
    alt: "نتائج فيلر الشفاه — قبل وبعد",
    treatment: "فيلر الشفاه",
    type: "before-after" as const,
    span: "normal" as const,
  },
  {
    id: "lips-result-1",
    image: "/results/lips-result-1.png",
    alt: "نتيجة فيلر الشفاه بعد الجلسة",
    treatment: "فيلر الشفاه",
    type: "result" as const,
    span: "normal" as const,
  },
  {
    id: "lips-result-2",
    image: "/results/lips-result-2.png",
    alt: "نتيجة فيلر الشفاه — مظهر طبيعي ومتوازن",
    treatment: "فيلر الشفاه",
    type: "result" as const,
    span: "normal" as const,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "هل حقن البوتوكس آمن؟ ومتى تظهر النتائج؟",
    answer:
      "نعم، البوتوكس إجراء آمن ومعتمد عالمياً عند إجرائه على يد استشارية متخصصة. تبدأ النتائج بالظهور خلال 3–5 أيام، وتكتمل خلال أسبوع إلى أسبوعين. نناقش معك كل التفاصيل في الاستشارة الأولى.",
  },
  {
    question: "ما الفرق بين الفيلر ومحفزات الكولاجين؟",
    answer:
      "الفيلر يضيف حجماً فورياً ويملأ التجاعيد والخطوط، بينما محفزات الكولاجين تحفّز الجسم على إنتاج كولاجين طبيعي تدريجياً. كلاهما يمنح نتائج طبيعية، والاختيار يعتمد على احتياجات بشرتك وأهدافك الجمالية.",
  },
  {
    question: "كم جلسة أحتاج من السكين بوستر؟",
    answer:
      "عادةً نوصي بـ 2–3 جلسات على فترات شهرية للحصول على أفضل نتائج. تختلف الخطة حسب حالة البشرة، ونضع لك برنامجاً مخصصاً بعد الفحص الأول.",
  },
  {
    question: "هل الإجراءات مؤلمة؟ وما مدة التعافي؟",
    answer:
      "نستخدم تقنيات تخدير موضعي لتقليل أي إزعاج. معظم الإجراءات لا تتطلب فترة تعافٍ، ويمكنك العودة لأنشطتك اليومية فوراً. قد يظهر بعض التورم الخفيف لساعات قليلة فقط.",
  },
  {
    question: "كيف أحجز استشارة مع الدكتورة شيرين؟",
    answer:
      "يمكنك ملء نموذج الحجز في أسفل الموقع، أو التواصل عبر زر الواتساب أو اتصل بنا. فريقنا يرد عليك في أقرب وقت ويحدد موعداً يناسبك في فرع الرياض أو القاهرة.",
  },
] as const;

export const LOCATIONS = [
  {
    city: "الرياض",
    country: "المملكة العربية السعودية",
    clinic: "Aspects Clinica",
    address: "مركز Aspects Clinica — الرياض",
    mapUrl: MAPS.riyadh,
  },
  {
    city: "القاهرة",
    country: "جمهورية مصر العربية",
    clinic: "Aspects Clinica",
    address: "مركز Aspects Clinica — القاهرة",
    mapUrl: MAPS.cairo,
  },
] as const;

export const CLINIC_SERVICES = [
  "الجلدية",
  "العلاجات التجميلية",
  "علاجات الليزر",
  "التغذية",
  "الجراحة التجميلية",
  "جراحة السمنة",
] as const;

export const BOOKING_BRANCHES = [
  {
    value: "cairo",
    label: "Aspects Clinica — التجمع، القاهرة الجديدة",
  },
  {
    value: "riyadh",
    label: "Aspects Clinica — الرياض، السعودية",
  },
] as const;

export const BOOKING_SERVICES = [
  "حقن الفيلر",
  "حقن البوتوكس",
  "حقن السكين بوستر",
  "محفزات الكولاجين",
  "الجلدية",
  "العلاجات التجميلية",
  "علاجات الليزر",
  "التغذية",
  "الجراحة التجميلية",
  "جراحة السمنة",
  "أخرى",
] as const;

export const BOOKING_SOURCES = [
  "انستغرام",
  "فيسبوك",
  "سناب شات",
  "تيك توك",
  "جوجل",
  "توصية صديقة أو قريبة",
  "أخرى",
] as const;

export function buildBookingWhatsAppUrl(data: {
  name: string;
  phone: string;
  branch?: string;
  service?: string;
  serviceOther?: string;
  source?: string;
  sourceOther?: string;
  notes?: string;
}) {
  const lines = [
    "مرحباً، أود حجز استشارة في Aspects Clinica.",
    "",
    `الاسم: ${data.name}`,
    `الهاتف: ${data.phone}`,
  ];

  if (data.branch) {
    const branchLabel =
      BOOKING_BRANCHES.find((b) => b.value === data.branch)?.label ??
      data.branch;
    lines.push(`الفرع: ${branchLabel}`);
  }

  if (data.service) {
    const serviceText =
      data.service === "أخرى" && data.serviceOther
        ? `أخرى: ${data.serviceOther}`
        : data.service;
    lines.push(`الخدمة: ${serviceText}`);
  }

  if (data.source) {
    const sourceText =
      data.source === "أخرى" && data.sourceOther
        ? `أخرى: ${data.sourceOther}`
        : data.source;
    lines.push(`كيف عرفتم عنا: ${sourceText}`);
  }

  if (data.notes?.trim()) {
    lines.push(`طلب إضافي: ${data.notes.trim()}`);
  }

  return `${WHATSAPP_HREF}?text=${encodeURIComponent(lines.join("\n"))}`;
}

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
  { label: "سنوات الخبرة", value: "+30" },
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

export const WHY_CHOOSE_ITEMS = [
  {
    highlight: "+30",
    title: "سنة خبرة سريرية",
    description: "منذ تخرجها من كلية الطب بجامعة عين شمس عام 1994",
  },
  {
    highlight: "ماجستير",
    title: "جلدية وتناسلية",
    description: "ماجستير من جامعة عين شمس — 2011 بتقدير جيد جداً",
  },
  {
    highlight: "أمريكية",
    title: "دبلومة تجميل وليزر",
    description:
      "جامعة عين شمس بالتعاون مع الأكاديمية الأمريكية الدولية",
  },
  {
    highlight: "المستوى 4",
    title: "خيوط EPLINE",
    description: "International Master Course — باريس، فرنسا 2020",
  },
  {
    highlight: "Allergan",
    title: "خبيرة بوتوكس",
    description:
      "Botox Expert Forum — المعهد الطبي Allergan، المملكة المتحدة",
  },
  {
    highlight: "IMCAS",
    title: "مؤتمرات عالمية",
    description: "IMCAS 2019 باريس + المؤتمر الأوروبي للجلدية مدريد 2019",
  },
  {
    highlight: "القاهرة",
    title: "Aspects Clinica",
    description: "استشارية الجلدية التجميل والليزر منذ 2019",
  },
  {
    highlight: "الرياض",
    title: "بنان بلاستيك",
    description: "أخصائية الجلدية والتجميل منذ 2016",
  },
] as const;

export const CREDENTIALS = [
  "ماجستير الجلدية والتناسلية — جامعة عين شمس",
  "دبلومة أمريكية في الطب التجميلي والليزر",
  "شهادة معدات الليزر الطبي وسلامة الليزر — قصر العيني",
  "المستوى الرابع — خيوط EPLINE — باريس 2020",
  "خبيرة بوتوكس — Allergan Medical Institute",
  "أكثر من 30 عاماً من الخبرة السريرية",
] as const;

export const TESTIMONIALS = [
  {
    name: "ناتاشا كوزلوفا",
    location: "الرياض",
    text: "أود أن أعبّر عن امتناني للدكتورة شيرين على احترافيتها واهتمامها الدقيق. تنفّذ الإجراءات بحذر وثقة، وتمنحكِ شعوراً بالراحة والاطمئنان طوال الجلسة.",
    rating: 5,
  },
  {
    name: "ماريا بزhevets",
    location: "الرياض",
    text: "أجريتُ إجراء رفع وجه ثلاثي الأبعاد مع الدكتورة شيرين، وأنا سعيدة جداً بالنتيجة. كل شيء يبدو طبيعياً وجميلاً — ملامح وجهي أصبحت أكثر تحديداً دون أي مظهر مصطنع.",
    rating: 5,
  },
  {
    name: "سارة",
    location: "الرياض",
    text: "الدكتورة شيرين استثنائية — على دراية كبيرة، لطيفة ومحترفة. تقنيتها ممتازة، وفهمها للنهج الصحيح والرعاية المطلوبة يجعلها من أفضل الأطباء الذين تعاملت معهم.",
    rating: 5,
  },
  {
    name: "Gerryfi Arthur",
    location: "الرياض",
    text: "الدكتورة شيرين هي الأفضل في المجال. سعيدة جداً ببوتوكسي وفيلري. أنا عميلة لديها منذ سنوات عديدة ولا أحد يقارن بها في الدقة والنتائج الطبيعية.",
    rating: 5,
  },
  {
    name: "مشاعل الرشيد",
    location: "الرياض",
    text: "الدكتورة شيرين الأفضل من الأفضل، يداها ذهبية. راضية جداً، والتحول الذي حصل يفوق كل ما توقعته — نتائج طبيعية وجميلة بكل المقاييس.",
    rating: 5,
  },
  {
    name: "روان الدوسري",
    location: "الرياض",
    text: "الدكتورة لطيفة وعطوفة. عملت لي فيلر وكان جميلاً؛ عملها كان مثالياً ومتقناً. أختي حقنت بأسلوب المشاهير عندها، وكانت النتيجة مذهلة.",
    rating: 5,
  },
  {
    name: "منيرة العتيبي",
    location: "الرياض",
    text: "الدكتورة شيرين من أفضل الأطباء الذين تعاملت معهم. أخلاقية بشكل لا يصدق. أتابع معها عناية البشرة منذ خمس سنوات، وجربت أطباء آخرين لكنني دائماً أعود إليها.",
    rating: 5,
  },
  {
    name: "جواهر العنزي",
    location: "الرياض",
    text: "بصراحة، من أفضل العيادات، خاصة الدكتورة شيرين. بارك الله فيها على معاملتها وعملها الممتاز. الإجراء كان مثالياً، والنتائج فاقت التوقعات.",
    rating: 5,
  },
  {
    name: "أريج البلوي",
    location: "الرياض",
    text: "شكراً جزيلاً، أنتِ أروع دكتورة! أقسم عملك رائع، جعلني أبدو أصغر بعشر سنوات. أنصح بها بكل ثقة لكل من تبحث عن نتائج طبيعية ومميزة.",
    rating: 5,
  },
  {
    name: "Mrom K",
    location: "الرياض",
    text: "لا أعتقد أن رأيي فيكِ يحتاج تقييماً؛ فهو متحيّز أصلاً. أما الدكتورة شيرين، ملكة البوتوكس والفيلر، فهي واحدة من أفضل من تعاملت معهم في المجال.",
    rating: 5,
  },
  {
    name: "نودي رام",
    location: "الرياض",
    text: "الدكتورة شيرين من أفضل الأطباء الذين تعاملت معهم. عملها طبيعي وجميل، والبوتوكس مذهل! أنصح بها لكل من تريد نتائج راقية دون مبالغة.",
    rating: 5,
  },
  {
    name: "روابي",
    location: "الرياض",
    text: "أروع دكتورة أجريت عندها إجراءات منذ 2018 — فيلر الذقن والشفاه! لا أثق إلا بالدكتورة شيرين. إنها لطيفة جداً وتحرص على راحة مريضتها.",
    rating: 5,
  },
  {
    name: "راما الشقاعي",
    location: "الرياض",
    text: "أسلوب الدكتورة ممتاز، يدها خفيفة جداً، وتعرف بالضبط ما يحتاجه كل وجه، دون أي مبالغة. تجربة احترافية من البداية للنهاية.",
    rating: 5,
  },
  {
    name: "شيخة التركي",
    location: "الرياض",
    text: "عملها طبيعي وتحليلها للوجه دقيق. تفهم احتياجات كل مريضة وتقدّم الحل الأنسب بثقة وخبرة واضحة.",
    rating: 5,
  },
  {
    name: "M'Almutairi",
    location: "الرياض",
    text: "أفضل دكتورة، تعمل بجد وضمير، ولديها لمسة لطيفة. النتائج دائماً طبيعية ومتوازنة — هذا ما يميّزها عن غيرها.",
    rating: 5,
  },
  {
    name: "BTOO",
    location: "الرياض",
    text: "الدكتورة شيرين، أتابع معها منذ ثلاث سنوات ولن أفكّر بالذهاب لأي شخص آخر. إنها فنانة مبدعة وعملها رائع، بارك الله فيها.",
    rating: 5,
  },
  {
    name: "هند المطيري",
    location: "الرياض",
    text: "بصراحة، الدكتورة شيرين مذهلة. أجريتُ أكثر من إجراء عندها. يداها رقيقة جداً، وتعرف بالضبط ما هو الأنسب لك دون أن تحتاجي للقلق.",
    rating: 5,
  },
  {
    name: "أميرة المطيري",
    location: "الرياض",
    text: "أنصح بالدكتورة شيرين للبوتوكس والفيلر. عملها مذهل، خاصة البوتوكس، ولديها لمسة لطيفة. بارك الله فيها على احترافيتها واهتمامها.",
    rating: 5,
  },
  {
    name: "لولو عبدالعزيز",
    location: "الرياض",
    text: "أفضل دكتورة، ملكة البوتوكس بالنسبة لي. النتائج دائماً طبيعية وجميلة، وأثق بها تماماً في كل إجراء.",
    rating: 5,
  },
  {
    name: "عهود",
    location: "الرياض",
    text: "أمي تتابع مع الدكتورة شيرين منذ سنوات. معروفة بعملها ومعاملتها الرائعة. أجريتُ فيلر الشفاه والتكبير والرفع المائي عندها، والنتائج كانت ممتازة.",
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

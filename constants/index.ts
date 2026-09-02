export type JourneyIcon = "activity" | "shield" | "refresh";
export type Locale = "en" | "ar";
export type SolutionDetail = {
  title: string;
  intro: string;
  image: { src: string; alt: string };
  secondaryImages?: { src: string; alt: string }[];
  problem: { eyebrow: string; title: string; description: string };
  outcomes: { value: string; label: string }[];
  steps: { title: string; description: string }[];
};
export type SolutionSlug =
  | "end-to-end-fulfilment"
  | "delivery-aggregation"
  | "cross-border-trade"
  | "sales"
  | "flexcash";

export const siteConfig = {
  brand: "flextock",
  logoAlt: "Flextock",
  menuLabel: "Open navigation",
  closeMenuLabel: "Close navigation",
  mainNavLabel: "Main navigation",
  solutionsLabel: "Solutions",
  solutionsOverviewLabel: "View all solutions",
  playVideoLabel: "Play video",
  pauseVideoLabel: "Pause video",
  primaryCta: "Get Quote",
  secondaryCta: "Explore the platform",
  contactHref: "/quote",
  contactEmail: "info@flextock.com",
};

export const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/Flextock.eg/",
    icon: "/icons/facebook.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/flextock.co/?hl=en",
    icon: "/icons/instagram.png",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/flextock/posts/?feedView=all",
    icon: "/icons/linkedin.png",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@flextock.eg",
    icon: "/icons/tik-tok.png",
  },
] as const;

export const localeConfig = {
  en: { label: "EN", switchLabel: "العربية", direction: "ltr" },
  ar: { label: "عربي", switchLabel: "English", direction: "rtl" },
} satisfies Record<Locale, { label: string; switchLabel: string; direction: "ltr" | "rtl" }>;

export const navigation = {
  primary: [
    { label: "Technology", href: "/technology" },
    { label: "Resources", href: "/resources" },
    { label: "Company", href: "/company" },
  ],
  solutions: [
    {
      name: "End to End Fulfillment",
      slug: "end-to-end-fulfilment" as SolutionSlug,
      description: "Receiving, storage, packing, delivery, and returns.",
    },
    {
      name: "Flexship",
      slug: "delivery-aggregation" as SolutionSlug,
      description: "Choose and manage couriers from one workflow.",
    },
    {
      name: "Flexborders",
      slug: "cross-border-trade" as SolutionSlug,
      description: "Coordinate the work behind Egypt–Saudi expansion.",
    },
    {
      name: "Flexshops",
      slug: "sales" as SolutionSlug,
      description: "Select products, run campaigns, and outsource operations.",
    },
    {
      name: "Flexcash",
      slug: "flexcash" as SolutionSlug,
      description: "Connect collections, deductions, and available cash.",
    },
  ],
};

export const heroContent = {
  eyebrow: "Commerce infrastructure for growing brands",
  title: "Make every order easier to operate.",
  description:
    "Flextock brings fulfillment, delivery, inventory, and cash workflows into one accountable operation.",
  supportingText:
    "Start with the service you need. Add the next one when the business is ready.",
};

export const heroSignals = [
  {
    label: "Orders",
    value: "Connected",
    detail: "Keep every order visible from source to return.",
  },
  {
    label: "Inventory",
    value: "Live",
    detail: "Know what is available before the next campaign starts.",
  },
  {
    label: "Delivery",
    value: "Orchestrated",
    detail: "Choose the service that fits the customer promise.",
  },
];

export const videoContent = {
  eyebrow: "Inside Flextock",
  title: "See what happens between order and delivery.",
  description:
    "A short look at the people, processes, and technology that keep commerce moving.",
  source: "/videos/Flextock v04.mp4",
  poster: "/pictures/2 copy 10.png",
  label: "Flextock explainer video",
};

export const brandAssets = {
  growth: {
    src: "/pictures/2 copy 5.png",
    alt: "Flextock campaign image showing a growing brand surrounded by parcels",
  },
  merchantGrowth: {
    src: "/pictures/2 copy 9.png",
    alt: "Merchant standing among Flextock inventory boxes",
  },
  warehouse: {
    src: "/pictures/2 copy 16.png",
    alt: "Flextock labels and shipping equipment on an operations desk",
  },
  fulfillment: {
    src: "/pictures/2 copy 10.png",
    alt: "Product selection workflow on a tablet",
  },
  fulfillmentSecondary: {
    src: "/pictures/2 copy 8.png",
    alt: "Flextock commerce operation shown in a city market",
  },
  omnichannel: {
    src: "/pictures/2 copy 15.png",
    alt: "Retail team using a connected inventory workflow",
  },
  productSelection: {
    src: "/pictures/2 copy 7.png",
    alt: "Merchant holding a Flextock parcel in a dropshipping-style operation",
  },
  delivery: {
    src: "/pictures/2 copy 13.png",
    alt: "Flextock delivery milestone shown from inside a vehicle",
  },
  market: {
    src: "/pictures/2 copy 6.png",
    alt: "Flextock operator standing in front of organized inventory",
  },
  technology: {
    src: "/pictures/2 copy 11.png",
    alt: "Operations dashboard showing sales and fulfillment activity",
  },
};

export const showcaseContent = {
  eyebrow: "How the operation works",
  title: "The right signal at the right moment.",
  description:
    "From inventory risk to delivery exceptions, Flextock gives teams the information they need before a small issue becomes a costly one.",
  systemLabel: "Flextock OS",
  signalLabel: "Operating signal",
};

export const journeySteps = [
  {
    number: "01",
    icon: "activity" as JourneyIcon,
    label: "Operating layer",
    title: "Beyond Fulfillment",
    description:
      "Flextock is the e-commerce operating system for fulfillment, delivery-only, and cross-border growth—managed from one unified portal.",
    visualLabel: "Connected operation",
    visualValue: "1",
    visualUnit: "unified portal",
    visualBars: [38, 52, 46, 68, 58, 78, 72, 88],
  },
  {
    number: "02",
    icon: "activity" as JourneyIcon,
    label: "Inventory intelligence",
    title: "Predictive Supply & Demand",
    description:
      "Stop guessing. Our dashboard calculates real-time SKU Run Rates and days remaining, flagging stock at risk before you lose sales.",
    visualLabel: "SKU Run Rate",
    visualValue: "Live",
    visualUnit: "days remaining",
    visualBars: [82, 76, 68, 58, 50, 42, 34, 28],
  },
  {
    number: "03",
    icon: "shield" as JourneyIcon,
    label: "COD risk control",
    title: "Make the decision before dispatch.",
    description:
      "Screen COD orders against known non-receipt patterns before dispatch, giving your team a reasoned decision before cost is incurred.",
    visualLabel: "COD risk detected",
    visualValue: "Risk",
    visualUnit: "before dispatch",
    visualBars: [24, 30, 28, 44, 36, 62, 48, 70],
  },
  {
    number: "04",
    icon: "refresh" as JourneyIcon,
    label: "Reverse logistics",
    title: "Transparent Reverse Logistics",
    description:
      "Give every return a clear next state—repackage, investigate missing parts, or record as scrap—so sellable and non-sellable inventory stay visible and accountable.",
    visualLabel: "Returns classified",
    visualValue: "RTM",
    visualUnit: "classification",
    visualBars: [72, 64, 58, 48, 42, 36, 30, 24],
  },
];

export const solutionCards = [
  {
    title: "End to End Fulfillment",
    slug: "end-to-end-fulfilment" as SolutionSlug,
    description:
      "Bring receiving, storage, picking, packing, dispatch, and returns into one managed workflow.",
  },
  {
    title: "Flexship",
    slug: "delivery-aggregation" as SolutionSlug,
    description:
      "Aggregate couriers and give every order the right delivery path.",
  },
  {
    title: "Flexborders",
    slug: "cross-border-trade" as SolutionSlug,
    description:
      "Coordinate the operational work behind moving proven products from Egypt into Saudi Arabia.",
  },
  {
    title: "Flexshops",
    slug: "sales" as SolutionSlug,
    description:
      "Select products, run campaigns, and outsource operations.",
  },
  {
    title: "Flexcash",
    slug: "flexcash" as SolutionSlug,
    description:
      "Connect collections, deductions, and available cash.",
  },
];

export const ecosystemContent = {
  en: {
    eyebrow: "The Flextock ecosystem",
    title: "Services that fit the way you sell.",
    description:
      "Choose the service you need now. Add another when the operation is ready.",
    linkLabel: "Learn more",
    interactionHint: "Select a service",
    cards: [
      {
        name: "Flexcash",
        label: "Liquidity",
        description:
          "Keep eligible liquidity, deductions, and collections visible in one financial flow.",
        href: "/solutions/flexcash",
        visualSteps: ["Collections", "Deductions", "Available cash"],
      },
      {
        name: "Flexship",
        label: "Delivery orchestration",
        description:
          "Compare courier options and route each order against the promised service level.",
        href: "/solutions/delivery-aggregation",
        visualSteps: ["Order", "Courier", "Delivered"],
      },
      {
        name: "Flexborders",
        label: "Regional expansion",
        description:
          "Coordinate the practical steps behind Egypt–Saudi commerce, from shipping to documentation.",
        href: "/solutions/cross-border-trade",
        visualSteps: ["Egypt", "Border", "Saudi Arabia"],
      },
      {
        name: "Flexshops",
        label: "KSA commerce model",
        description:
          "Select products and run acquisition while Flextock manages the operation behind the sale.",
        href: "/solutions/sales",
        visualSteps: ["Product", "Campaign", "Order"],
      },
    ],
  },
  ar: {
    eyebrow: "منظومة فلكستوك",
    title: "اختر نموذج التشغيل الذي يناسب طموحك.",
    description:
      "ابدأ بالقدرة التي تحتاجها اليوم، وأضف البنية التحتية التي تحافظ على حركة النمو غدًا.",
    linkLabel: "اعرف المزيد",
    interactionHint: "اختر طبقة التشغيل",
    cards: [
      {
        name: "Flexcash",
        label: "السيولة",
        description:
          "احصل على رأس مال عامل من مبيعاتك بشكل أسرع، مع تسوية الخصومات تلقائيًا من التحصيلات.",
        href: "/solutions/flexcash",
        visualSteps: ["التحصيل", "الخصومات", "السيولة المتاحة"],
      },
      {
        name: "Flexship",
        label: "تنسيق التوصيل",
        description:
          "اجمع شركات الشحن ووجّه كل طلب حسب الوجهة وجودة العنوان وأداء الخدمة.",
        href: "/solutions/delivery-aggregation",
        visualSteps: ["الطلب", "المندوب", "تم التوصيل"],
      },
      {
        name: "Flexborders",
        label: "التوسع الإقليمي",
        description:
          "انقل منتجاتك الناجحة إلى السعودية مع تنسيق الشحن والعمليات العابرة للحدود.",
        href: "/solutions/cross-border-trade",
        visualSteps: ["مصر", "الحدود", "السعودية"],
      },
      {
        name: "Flexshops",
        label: "نموذج تجارة في السعودية",
        description:
          "اختر المنتجات وأدر اكتساب العملاء، بينما تتولى فلكستوك التوريد والتنفيذ والتأكيد والتحصيل.",
        href: "/solutions/sales",
        visualSteps: ["المنتج", "الحملة", "الطلب"],
      },
    ],
  },
} as const;

export const solutionPageContent = {
  eyebrow: "Flextock solution",
  cta: "Talk to our team",
  howItWorks: "How it works",
};

export const solutionsOverviewContent = {
  eyebrow: "Solutions",
  title: "Choose the capability your operation needs next.",
  description:
    "Start with one service or combine the pieces that keep your customer promise, margins, and regional growth on track.",
  ctaTitle: "Tell us what the operation needs next.",
  cta: "Talk to our team",
};

export const solutionDetails: Record<string, SolutionDetail> = {
  "end-to-end-fulfillment": {
    title: "Operate every order from one control layer.",
    intro:
      "Give your team one reliable workflow for receiving, storing, picking, packing, dispatching, and managing returns.",
    image: brandAssets.fulfillment,
    secondaryImages: [brandAssets.fulfillmentSecondary],
    problem: {
      eyebrow: "The operational gap",
      title: "Growth should not create more places to lose control.",
      description:
        "When orders, inventory, and returns live in separate tools, every new channel adds friction. Flextock brings the full order lifecycle into one accountable operation.",
    },
    outcomes: [
      { value: "Full cycle", label: "from receive to return" },
      { value: "Live", label: "inventory movement" },
      { value: "One view", label: "for operational decisions" },
    ],
    steps: [
      { title: "Connect your channels", description: "Bring storefronts, marketplaces, and order sources into one queue." },
      { title: "Store with confidence", description: "Track every SKU, location, and movement in real time." },
      { title: "Pick and pack precisely", description: "Use a consistent workflow designed for speed without sacrificing accuracy." },
      { title: "Close the loop", description: "Keep delivery outcomes and returns visible after dispatch." },
    ],
  },
  flexship: {
    title: "Deliver on the promise your customer remembers.",
    intro:
      "Aggregate couriers, offer same-day service where it fits, and give customers the flexibility to choose what they keep at the door.",
    image: brandAssets.delivery,
    problem: {
      eyebrow: "The delivery gap",
      title: "A dispatched order is not a delivered order.",
      description:
        "Flextock brings courier choice, address quality, order confirmation, and delivery performance into one operating view—so your team can act before a failed delivery becomes lost revenue.",
    },
    outcomes: [
      { value: "Same day", label: "delivery capability" },
      { value: "Pick & choose", label: "at the door" },
      { value: "1 view", label: "across couriers" },
    ],
    steps: [
      { title: "Route by intent", description: "Match each order to the service level, destination, and promise that fits." },
      { title: "Track the handoff", description: "See delivery progress without switching between courier systems." },
      { title: "Resolve earlier", description: "Surface delivery risk while there is still time to protect the customer experience." },
      { title: "Learn from outcomes", description: "Use performance data to improve the next dispatch." },
    ],
  },
  flexborders: {
    title: "Take your best sellers across MENA.",
    intro:
      "Enter the Saudi market with a coordinated operating layer for cross-border shipping, customs documentation, and customer expectations.",
    image: brandAssets.market,
    problem: {
      eyebrow: "The expansion gap",
      title: "New markets should feel like growth, not guesswork.",
      description:
        "Flextock helps coordinate the operational and documentation requirements involved in expansion, including SFDA, SABER, and SASO where applicable.",
    },
    outcomes: [
      { value: "MENA", label: "expansion ready" },
      { value: "1 layer", label: "for cross-border operations" },
      { value: "Clearer", label: "landed-cost decisions" },
    ],
    steps: [
      { title: "Choose the right market", description: "Use operational and commercial signals to prioritize where to grow next." },
      { title: "Connect the demand", description: "Bring new storefronts and order sources into a familiar workflow." },
      { title: "Fulfill locally", description: "Coordinate inventory and delivery around the customer’s market." },
      { title: "Scale with signal", description: "See what is working before you commit more capital." },
    ],
  },
  flexshops: {
    title: "Run the growth engine. We operate the commerce layer.",
    intro:
      "A KSA-focused model for media buyers and performance marketers: choose the products and run acquisition while Flextock manages the operation behind the sale.",
    image: brandAssets.productSelection,
    problem: {
      eyebrow: "The performance commerce model",
      title: "Move from campaign to collected order without building the backend.",
      description:
        "Flextock brings sourcing, warehousing, shipping, order confirmation, and cash collection into one workflow, with faster visibility into the profit your campaigns create.",
    },
    outcomes: [
      { value: "KSA", label: "focused operating model" },
      { value: "1 layer", label: "from product to collection" },
      { value: "Clearer", label: "profit visibility" },
    ],
    steps: [
      { title: "Choose the product", description: "Select the products with the clearest commercial potential." },
      { title: "Run acquisition", description: "Focus your media and performance campaigns on creating demand." },
      { title: "Let the operation run", description: "Flextock manages storage, confirmation, shipping, and collection." },
      { title: "Read the result", description: "Use collection and order signals to decide what to scale next." },
    ],
  },
  flexcash: {
    title: "Put working capital closer to the next opportunity.",
    intro:
      "A liquidity layer designed to help eligible merchants access funds from sales sooner, while deductions stay connected to collection and reconciliation.",
    image: brandAssets.technology,
    problem: {
      eyebrow: "The cash gap",
      title: "Growth slows when cash is trapped in the collection cycle.",
      description:
        "Flexcash helps eligible merchants bring sales activity, available liquidity, deductions, and collection visibility into a more organized financial flow.",
    },
    outcomes: [
      { value: "Sooner", label: "access to working capital" },
      { value: "Clearer", label: "collection reconciliation" },
      { value: "More", label: "room to reinvest" },
    ],
    steps: [
      { title: "Connect sales to cash", description: "See how order activity translates into collection events." },
      { title: "Access what is available", description: "Explore liquidity options based on eligible sales activity." },
      { title: "Reconcile automatically", description: "Keep deductions organized against the collections that follow." },
      { title: "Reinvest with clarity", description: "Put available capital toward inventory, acquisition, or the next market." },
    ],
  },
};

solutionDetails["end-to-end-fulfilment"] =
  solutionDetails["end-to-end-fulfillment"];
solutionDetails["delivery-aggregation"] = solutionDetails.flexship;
solutionDetails["cross-border-trade"] = solutionDetails.flexborders;
solutionDetails["cross-boarder-trade"] =
  solutionDetails["cross-border-trade"];
solutionDetails.sales = {
  ...solutionDetails.flexshops,
  title: "Run the growth engine. We operate the commerce layer.",
  intro:
    "A KSA-focused model for media buyers and performance marketers: choose the products and run acquisition while Flextock manages the operation behind the sale.",
  image: brandAssets.productSelection,
  problem: {
    eyebrow: "The performance commerce model",
    title: "Move from campaign to collected order without building the backend.",
    description:
      "Flextock brings sourcing, warehousing, shipping, order confirmation, and cash collection into one workflow, with faster visibility into the profit your campaigns create.",
  },
  outcomes: [
    { value: "KSA", label: "focused operating model" },
    { value: "1 layer", label: "from product to collection" },
    { value: "Clearer", label: "profit visibility" },
  ],
  steps: [
    { title: "Choose the product", description: "Select the products with the clearest commercial potential." },
    { title: "Run acquisition", description: "Focus your media and performance campaigns on creating demand." },
    { title: "Let the operation run", description: "Flextock manages storage, confirmation, shipping, and collection." },
    { title: "Read the result", description: "Use collection and order signals to decide what to scale next." },
  ],
};

export const technologyContent = {
  eyebrow: "Designed to connect",
  title: "See the work. Connect the tools.",
  description:
    "Bring storefronts, warehouses, couriers, and finance workflows into one product view, with the detail your team needs to act.",
  capabilities: ["Inventory control", "Delivery control", "Exception control"],
  capabilityDetails: [
    "Know what is available, moving, and at risk before it affects the customer.",
    "Compare courier performance and act on delivery exceptions from one view.",
    "Turn order, inventory, and return activity into decisions your team can act on.",
  ],
  integrations: ["Storefronts", "Marketplaces", "Couriers", "Warehouse workflows", "Finance workflows", "API access"],
  integrationsLabel: "Connect what already works",
  integrationsNote: "Available connections depend on market, service scope, and operating model.",
};

export const networkContent = {
  eyebrow: "Delivery choices",
  title: "Give customers a better finish.",
  description:
    "Use the service level that fits the order, from same-day delivery to Pick & Choose at the door.",
  points: [
    { value: "One view", label: "across orders, inventory, delivery, and returns" },
    { value: "Same-day", label: "delivery where the customer promise demands it" },
    { value: "Pick & choose", label: "a more considered experience at the door" },
  ],
};

export const reviewsContent = {
  en: {
    eyebrow: "Customer proof",
    title: "What brands say about Flextock.",
    description:
      "Real feedback from businesses using Flextock to keep fulfillment, delivery, and cash moving.",
    sourceLabel: "Reviews from Flextock Egypt",
    sourceCta: "Read more customer reviews",
    sourceHref: "https://www.google.com/search?q=Flextock+Head+Office",
    reviews: [
      {
        name: "Reham Khaled",
        meta: "7 weeks ago",
        quote: "An excellent experience 🤍🤍",
        initial: "R",
      },
      {
        name: "Mohamed Sherif",
        meta: "7 weeks ago",
        quote: "The best experience.",
        initial: "M",
      },
      {
        name: "Ahmed El Wardany",
        meta: "15 weeks ago",
        quote: "Excellent service and a professional team.",
        initial: "A",
      },
    ],
  },
  ar: {
    eyebrow: "آراء العملاء",
    title: "ماذا يقول عملاء فلكستوك؟",
    description:
      "آراء حقيقية من شركات تستخدم فلكستوك للحفاظ على حركة التنفيذ والتوصيل والتحصيل.",
    sourceLabel: "آراء من فلكستوك مصر",
    sourceCta: "اقرأ المزيد من آراء العملاء",
    sourceHref: "https://www.google.com/search?q=Flextock+Head+Office",
    reviews: [
      {
        name: "Reham Khaled",
        meta: "منذ 7 أسابيع",
        quote: "تجربة ممتازة جدًا 🤍🤍",
        initial: "R",
      },
      {
        name: "Mohamed Sherif",
        meta: "منذ 7 أسابيع",
        quote: "أفضل تجربة.",
        initial: "M",
      },
      {
        name: "Ahmed El Wardany",
        meta: "منذ 15 أسبوعًا",
        quote: "خدمة ممتازة وفريق محترف.",
        initial: "A",
      },
    ],
  },
} as const;

export const supportingPages = {
  resources: {
    eyebrow: "Resources",
    title: "Practical guidance for better operations.",
    description:
      "Short, useful guidance for teams managing inventory, delivery, returns, and customer expectations.",
    image: brandAssets.merchantGrowth,
    sections: [
      {
        eyebrow: "Merchant playbook",
        title: "Make inventory and delivery easier to manage.",
        description:
          "Simple checks that help teams reduce avoidable delays, failed deliveries, and stock surprises.",
        items: ["Inventory planning", "COD review", "Returns handling"],
      },
      {
        eyebrow: "From the operation",
        title: "Understand the cost of every handoff.",
        description:
          "A practical look at the operational moments that affect customer experience and margin.",
        items: ["Order status", "Delivery exceptions", "Cash reconciliation"],
      },
    ],
  },
  company: {
    eyebrow: "Company",
    title: "People and systems that keep commerce moving.",
    description:
      "Flextock combines experienced operators and useful technology for brands working across Egypt and Saudi Arabia.",
    image: brandAssets.warehouse,
    sections: [
      {
        eyebrow: "Our role",
        title: "Operations first. Technology where it helps.",
        description:
          "Our job is to make the daily work reliable, visible, and easier for merchants to improve.",
        items: ["Experienced operators", "Accountable systems", "Responsive support"],
      },
      {
        eyebrow: "Where we operate",
        title: "Operating across Egypt and Saudi Arabia.",
        description:
          "Our regional footprint gives merchants a clear operating path as they enter their next market.",
        items: ["Egypt", "Saudi Arabia"],
      },
    ],
  },
  technology: {
    ...technologyContent,
    sections: [
      {
        eyebrow: "Live control",
        title: "See the order from first scan to final settlement.",
        description:
          "Bring the main operational events together so teams can spot issues and act without switching between systems.",
        items: ["Inventory status", "Order and delivery events", "Cash and exception signals"],
      },
      {
        eyebrow: "Designed to connect",
        title: "Add visibility without replacing everything.",
        description:
          "Connect existing commerce channels, marketplaces, couriers, and finance workflows at the scope your operation needs.",
        items: ["Storefronts", "Marketplaces and couriers", "API and manual options"],
      },
    ],
  },
};

export const resourceEntries = {
  en: [
    {
      type: "Playbook",
      title: "The order-to-delivery checklist",
      description:
        "A practical starting point for mapping the handoffs that affect customer experience.",
      meta: "Operations / 06 min",
    },
    {
      type: "Guide",
      title: "A better way to review COD orders",
      description:
        "Questions teams can ask before dispatching an order with collection risk.",
      meta: "Delivery / 05 min",
    },
    {
      type: "Field note",
      title: "What a return should tell you",
      description:
        "How to turn return reasons into clearer inventory and product decisions.",
      meta: "Returns / 04 min",
    },
  ],
  ar: [
    {
      type: "دليل عملي",
      title: "قائمة مراجعة الطلب حتى التوصيل",
      description: "بداية عملية لرسم نقاط التسليم التي تؤثر في تجربة العميل.",
      meta: "العمليات / 06 دقائق",
    },
    {
      type: "إرشاد",
      title: "طريقة أفضل لمراجعة طلبات الدفع عند الاستلام",
      description: "أسئلة يمكن للفريق طرحها قبل شحن الطلبات المعرضة لمخاطر التحصيل.",
      meta: "التوصيل / 05 دقائق",
    },
    {
      type: "ملاحظة ميدانية",
      title: "ما الذي يخبرك به المرتجع؟",
      description: "حوّل أسباب المرتجعات إلى قرارات أوضح للمخزون والمنتجات.",
      meta: "المرتجعات / 04 دقائق",
    },
  ],
} as const;

export const companyTimeline = {
  en: [
    {
      year: "01",
      title: "Start with the hard part",
      description: "Build reliable fulfillment around the work merchants cannot afford to lose visibility on.",
    },
    {
      year: "02",
      title: "Connect the handoffs",
      description: "Bring inventory, delivery, returns, and cash signals closer to the teams making daily decisions.",
    },
    {
      year: "03",
      title: "Grow with the market",
      description: "Give brands an operating path across Egypt and Saudi Arabia as their customer promise expands.",
    },
  ],
  ar: [
    {
      year: "01",
      title: "نبدأ من الجزء الأصعب",
      description: "نبني تنفيذًا موثوقًا حول العمل الذي لا يستطيع التجار تحمل فقدان رؤيته.",
    },
    {
      year: "02",
      title: "نربط نقاط التسليم",
      description: "نقرّب إشارات المخزون والتوصيل والمرتجعات والنقد من الفرق التي تتخذ القرارات اليومية.",
    },
    {
      year: "03",
      title: "ننمو مع السوق",
      description: "نمنح العلامات طريقًا تشغيليًا في مصر والسعودية مع توسع وعدها للعميل.",
    },
  ],
} as const;

export const supportingVisualContent = {
  en: {
    resources: {
      kicker: "The operator’s desk",
      title: "Small signals make the next decision clearer.",
      note: "Field notes / 03 practical checks",
      imageAlt: "Flextock packages arranged across a workspace",
      labels: ["Plan", "Pack", "Dispatch"],
      statuses: ["Review stock", "Seal the order", "Confirm the handoff"],
    },
    company: {
      kicker: "Inside the network",
      title: "People, parcels, and decisions moving together.",
      note: "Operating footprint / Egypt + Saudi Arabia",
      imageAlt: "Flextock team member working among warehouse packages",
      labels: ["Receive", "Store", "Move"],
      statuses: ["Counted in", "Located", "On route"],
    },
    technology: {
      kicker: "Live system map",
      title: "Every handoff leaves a signal.",
      note: "Operating view / 04 connected streams",
      imageAlt: "Flextock operator preparing shipping labels at a work desk",
      labels: ["Orders", "Inventory", "Delivery", "Cash"],
      statuses: ["Connected", "Tracked", "Routed", "Reconciled"],
    },
  },
  ar: {
    resources: {
      kicker: "مكتب المشغل",
      title: "الإشارات الصغيرة تجعل القرار التالي أوضح.",
      note: "ملاحظات عملية / 03 فحوصات أساسية",
      imageAlt: "طرود فلكستوك مرتبة في مساحة العمل",
      labels: ["خطط", "جهز", "اشحن"],
      statuses: ["راجع المخزون", "أغلق الطلب", "أكد التسليم"],
    },
    company: {
      kicker: "داخل الشبكة",
      title: "الأشخاص والطرود والقرارات تتحرك معًا.",
      note: "نطاق التشغيل / مصر + السعودية",
      imageAlt: "عضو من فريق فلكستوك يعمل بين طرود المستودع",
      labels: ["استلم", "خزن", "حرك"],
      statuses: ["تم الاستلام", "تم تحديد الموقع", "في الطريق"],
    },
    technology: {
      kicker: "خريطة النظام المباشرة",
      title: "كل عملية تسليم تترك إشارة.",
      note: "رؤية التشغيل / 04 مسارات متصلة",
      imageAlt: "موظف فلكستوك يجهز ملصقات الشحن على مكتب العمل",
      labels: ["الطلبات", "المخزون", "التوصيل", "النقد"],
      statuses: ["متصل", "متتبع", "موجه", "تمت التسوية"],
    },
  },
} as const;

export const supportingVisualAssets = {
  resources: "/pictures/2 copy 12.png",
  company: null,
  technology: null,
} as const;

export const integrationLogos = [
  { name: "Shopify", src: "/icons/shopify.png" },
  { name: "WooCommerce", src: "/icons/woocommerce.png" },
  { name: "Salla", src: "/icons/salla.png" },
  { name: "Zid", src: "/icons/Zid-En-01.png" },
] as const;

export const ecosystemLogos = [
  {
    name: "Flexshops",
    src: "/logos/shops.png",
    href: "/solutions/sales",
  },
  {
    name: "Flexship",
    src: "/logos/ship.png",
    href: "/solutions/delivery-aggregation",
  },
  {
    name: "Flexborders",
    src: "/logos/boarders.png",
    href: "/solutions/cross-border-trade",
  },
  {
    name: "Flexcash",
    src: "/logos/cash.png",
    href: "/solutions/flexcash",
  },
] as const;

export const partnerLogos = [
  {
    name: "Cleo Laboratories",
    src: "/partners/cleo.webp",
  },
  {
    name: "Eva",
    src: "/partners/eva.svg",
  },
  {
    name: "Infinity",
    src: "/partners/infinity.avif",
  },
] as const;

export const supportingCtaContent = {
  en: {
    eyebrow: "Ready for the next step?",
    title: "Let’s talk about the operation you want to build.",
  },
  ar: {
    eyebrow: "جاهز للخطوة التالية؟",
    title: "لنتحدث عن العملية التي تريد بناءها.",
  },
} satisfies Record<Locale, { eyebrow: string; title: string }>;

export const ctaContent = {
  eyebrow: "Let’s build what’s next",
  title: "Turn operational complexity into momentum.",
  description:
    "Tell us where your business is going. We’ll show you how Flextock can help you get there.",
  cta: "Get Quote",
};

export const quotePage = {
  eyebrow: "Start a conversation",
  title: "Request pricing built around your operation.",
  description:
    "Share a few details about your business. Our team will recommend the right operating model, scope, and next step.",
  proofPoints: ["One connected operating layer", "Flexible service scope", "Built for MENA growth"],
  submitLabel: "Request a quote",
  submittingLabel: "Sending request...",
  backLabel: "Back to homepage",
  successTitle: "Your request is on its way.",
  successDescription:
    "A member of the Flextock team will be in touch shortly.",
  responseNote: "We usually respond during the next business day.",
  privacyLabel: "I agree to Flextock using these details to respond to my request.",
  businessNeedLabel: "What would you like to solve?",
  businessNeedPlaceholder: "Tell us briefly about your operation",
  fields: {
    name: { label: "Full name", placeholder: "Your name" },
    brand: { label: "Brand name", placeholder: "Your brand" },
    phone: { label: "Phone number", placeholder: "+20 000 000 0000" },
    industry: { label: "Industry", placeholder: "Select your industry" },
    volume: { label: "Daily order volume", placeholder: "Select your volume" },
    interest: { label: "Interested in", placeholder: "Select a solution" },
    tax: { label: "Tax card and commercial registration", placeholder: "Select an option" },
    businessType: { label: "Business type", placeholder: "Select your business type" },
    sellingMethod: { label: "How do you sell?", placeholder: "Select your main channel" },
    referral: { label: "How did you hear about us?", placeholder: "Select an option" },
    email: { label: "Work email", placeholder: "you@company.com" },
  },
  taxOptions: ["Yes", "No"],
  industries: ["Fashion", "Beauty", "Grocery", "Electronics", "Other"],
  volumes: ["0–50 orders", "51–250 orders", "251–1,000 orders", "1,000+ orders"],
  businessTypes: ["Brand", "Affiliate", "Marketplace"],
  sellingMethods: ["Social media page", "Website", "Other"],
  referralSources: ["Google", "Instagram / Facebook", "Snapchat", "Referral", "Exhibition", "Other"],
  interests: [
    "End to End Fulfillment",
    "Flexship",
    "Flexborders",
    "Flexshops",
    "Flexcash",
  ],
};

export const arabicCopy = {
  site: {
    logoAlt: "فلكستوك",
    primaryCta: "اطلب عرض سعر",
    secondaryCta: "اكتشف المنصة",
    menuLabel: "افتح القائمة",
    closeMenuLabel: "أغلق القائمة",
    mainNavLabel: "القائمة الرئيسية",
    solutionsLabel: "الحلول",
    solutionsOverviewLabel: "عرض كل الحلول",
    playVideoLabel: "تشغيل الفيديو",
    pauseVideoLabel: "إيقاف الفيديو",
    capabilitiesLabel: "الإمكانيات",
    navigation: ["المنصة", "الإمكانيات", "الشركة"],
  },
  navigation: {
    primary: [
      { label: "التكنولوجيا", href: "/technology" },
      { label: "المصادر", href: "/resources" },
      { label: "الشركة", href: "/company" },
    ],
    solutions: [
      { name: "التنفيذ من البداية للنهاية", slug: "end-to-end-fulfilment", description: "الاستلام والتخزين والتجهيز والتوصيل والمرتجعات." },
      { name: "Flexship", slug: "delivery-aggregation", description: "اختر شركات الشحن وأدرها من سير عمل واحد." },
      { name: "التجارة العابرة للحدود", slug: "cross-border-trade", description: "نسّق العمل خلف التوسع بين مصر والسعودية." },
      { name: "Flexshops", slug: "sales", description: "اختر المنتجات وأدر الحملات واترك التشغيل لفلكستوك." },
      { name: "Flexcash", slug: "flexcash", description: "اربط التحصيلات والخصومات والنقد المتاح." },
    ],
  },
  hero: {
    eyebrow: "بنية التجارة للعلامات النامية",
    title: "اجعل تشغيل كل طلب أسهل.",
    description: "تجمع فلكستوك عمليات التنفيذ والتوصيل والمخزون والنقد في عملية واحدة واضحة ومسؤولة.",
    supportingText: "ابدأ بالخدمة التي تحتاجها، وأضف التالية عندما يصبح عملك جاهزًا.",
  },
  heroSignals: [
    {
      label: "الطلبات",
      value: "متصلة",
      detail: "تابع كل طلب من مصدره حتى المرتجع.",
    },
    {
      label: "المخزون",
      value: "مباشر",
      detail: "اعرف المتاح قبل بدء الحملة التالية.",
    },
    {
      label: "التوصيل",
      value: "منسق",
      detail: "اختر الخدمة التي تناسب وعد العميل.",
    },
  ],
  video: {
    eyebrow: "داخل فلكستوك",
    title: "شاهد ما يحدث بين الطلب والتوصيل.",
    description: "نظرة قصيرة على الأشخاص والعمليات والتكنولوجيا التي تحافظ على حركة التجارة.",
    source: "/videos/Flextock v04.mp4",
    poster: "/pictures/2 copy 10.png",
    label: "فيديو تعريفي عن فلكستوك",
  },
  showcase: {
    eyebrow: "كيف تعمل العملية",
    title: "الإشارة الصحيحة في الوقت المناسب.",
    description: "من مخاطر المخزون إلى استثناءات التوصيل، تحصل الفرق على المعلومات قبل أن تتحول المشكلة الصغيرة إلى تكلفة كبيرة.",
    systemLabel: "نظام فلكستوك",
    signalLabel: "إشارة تشغيلية",
  },
  journeySteps: [
    {
      label: "طبقة تشغيل موحدة",
      title: "أبعد من التنفيذ",
      description: "فلكستوك هي نظام تشغيل التجارة الإلكترونية للتنفيذ والتوصيل فقط والتوسع عبر الحدود، وكل ذلك من بوابة موحدة.",
      visualLabel: "عملية متصلة",
      visualValue: "1",
      visualUnit: "بوابة موحدة",
      visualBars: [38, 52, 46, 68, 58, 78, 72, 88],
    },
    {
      label: "ذكاء المخزون",
      title: "التنبؤ بالعرض والطلب",
      description: "توقف عن التخمين. تحسب لوحة التحكم معدلات دوران المنتجات والأيام المتبقية لحظيًا، وتنبهك للمخزون المعرض للخطر قبل خسارة المبيعات.",
      visualLabel: "معدل دوران المنتج",
      visualValue: "مباشر",
      visualUnit: "أيام متبقية",
      visualBars: [82, 76, 68, 58, 50, 42, 34, 28],
    },
    {
      label: "التحكم في مخاطر الدفع",
      title: "اتخذ القرار قبل الشحن.",
      description: "افحص طلبات الدفع عند الاستلام مقابل أنماط عدم الاستلام المعروفة قبل الشحن، ليحصل فريقك على أساس واضح لاتخاذ القرار.",
      visualLabel: "تم رصد مخاطر الدفع",
      visualValue: "خطر",
      visualUnit: "عملاء تم رصدهم",
      visualBars: [24, 30, 28, 44, 36, 62, 48, 70],
    },
    {
      label: "اللوجستيات العكسية",
      title: "لوجستيات عكسية شفافة",
      description: "امنح كل مرتجع حالة واضحة: إعادة تغليف، فحص الأجزاء الناقصة، أو تسجيله كخردة، لتظل المنتجات القابلة للبيع وغير القابلة للبيع واضحة ومسؤولة.",
      visualLabel: "تم تصنيف المرتجعات",
      visualValue: "RTM",
      visualUnit: "تصنيف",
      visualBars: [72, 64, 58, 48, 42, 36, 30, 24],
    },
  ],
  solutionPage: {
    eyebrow: "حل من فلكستوك",
    cta: "تحدث مع فريقنا",
    howItWorks: "كيف تعمل",
  },
  solutionsOverview: {
    eyebrow: "الحلول",
    title: "اختر القدرة التي تحتاجها عملياتك بعد ذلك.",
    description: "ابدأ بخدمة واحدة أو اجمع الأجزاء التي تحافظ على وعد العميل والهامش والنمو الإقليمي.",
    ctaTitle: "أخبرنا بما تحتاجه عملياتك بعد ذلك.",
    cta: "تحدث مع فريقنا",
  },
  solutionDetails: {
    "end-to-end-fulfillment": {
      title: "أدر كل طلب من طبقة تحكم واحدة.",
      intro: "امنح فريقك سير عمل موحدًا للاستلام والتخزين والتجهيز والتعبئة والشحن وإدارة المرتجعات.",
      problem: {
        eyebrow: "الفجوة التشغيلية",
        title: "النمو لا يجب أن يخلق أماكن أكثر لفقدان السيطرة.",
        description: "تجمع فلكستوك دورة الطلب كاملة في عملية واحدة واضحة ومسؤولة.",
      },
      outcomes: [
        { value: "دورة كاملة", label: "من الاستلام إلى المرتجع" },
        { value: "مباشر", label: "لحركة المخزون" },
        { value: "رؤية واحدة", label: "للقرارات التشغيلية" },
      ],
      steps: [
        { title: "اربط قنواتك", description: "اجمع المتاجر والأسواق ومصادر الطلب في قائمة واحدة." },
        { title: "خزّن بثقة", description: "تابع كل منتج وموقع وحركة لحظيًا." },
        { title: "جهّز بدقة", description: "استخدم سير عمل ثابتًا للسرعة والدقة." },
        { title: "أغلق الحلقة", description: "تابع نتائج التوصيل والمرتجعات بعد الشحن." },
      ],
    },
    flexship: {
      title: "نفّذ وعد التوصيل الذي يتذكره عميلك.",
      intro: "اجمع شركات الشحن، وقدم التوصيل في نفس اليوم حيث يناسب، وامنح العملاء مرونة اختيار ما يحتفظون به عند الباب.",
      problem: {
        eyebrow: "فجوة التوصيل",
        title: "الطلب المشحون ليس طلبًا تم توصيله.",
        description: "تساعدك فلكستوك على اختيار المسار المناسب والتدخل قبل أن يتحول فشل التوصيل إلى إيراد مفقود.",
      },
      outcomes: [
        { value: "نفس اليوم", label: "إمكانية التوصيل" },
        { value: "اختيار", label: "ما يحتفظ به العميل عند الباب" },
        { value: "عرض واحد", label: "لجميع شركات الشحن" },
      ],
      steps: [
        { title: "وجّه حسب الهدف", description: "طابق كل طلب مع مستوى الخدمة والوجهة المناسبين." },
        { title: "تابع التسليم", description: "راقب تقدم الطلب دون التنقل بين أنظمة متعددة." },
        { title: "تدخل مبكرًا", description: "اكتشف المخاطر بينما لا يزال بإمكانك حماية تجربة العميل." },
        { title: "تعلم من النتائج", description: "استخدم الأداء لتحسين الشحنة التالية." },
      ],
    },
    flexborders: {
      title: "خذ منتجاتك الأفضل إلى أسواق المنطقة.",
      intro: "ادخل أسواقًا جديدة مع رؤية تشغيلية لإدارة الطلبات والشركاء وتوقعات العملاء.",
      problem: {
        eyebrow: "فجوة التوسع",
        title: "الأسواق الجديدة يجب أن تعني نموًا، لا تخمينًا.",
        description: "توفر فلكستوك الأساس التشغيلي للتوسع بوضوح أكبر في المخزون والتوصيل والتحصيل.",
      },
      outcomes: [
        { value: "MENA", label: "جاهز للتوسع" },
        { value: "طبقة واحدة", label: "للعمليات العابرة للحدود" },
        { value: "قرارات أوضح", label: "للتكلفة النهائية" },
      ],
      steps: [
        { title: "اختر السوق المناسب", description: "رتّب الأسواق حسب الإشارات التجارية والتشغيلية." },
        { title: "اربط الطلب", description: "أدخل المتاجر ومصادر الطلب الجديدة في سير عمل مألوف." },
        { title: "نفّذ محليًا", description: "نسّق المخزون والتوصيل حول سوق العميل." },
        { title: "توسع بإشارة واضحة", description: "اعرف ما ينجح قبل استثمار رأس مال إضافي." },
      ],
    },
    flexshops: {
      title: "شغّل محرك النمو. ونحن ندير طبقة التجارة.",
      intro: "نموذج يركز على السعودية لمسوقي الأداء: اختر المنتجات وأدر الحملات، بينما تتولى فلكستوك العملية خلف البيع.",
      problem: {
        eyebrow: "نموذج تجارة الأداء",
        title: "انتقل من الحملة إلى الطلب المحصل دون بناء البنية الخلفية.",
        description: "تجمع فلكستوك التوريد والتخزين والشحن وتأكيد الطلب والتحصيل في سير عمل واحد، مع رؤية أسرع للنتيجة التي تصنعها حملاتك.",
      },
      outcomes: [
        { value: "السعودية", label: "نموذج تشغيل مركز" },
        { value: "طبقة واحدة", label: "من المنتج إلى التحصيل" },
        { value: "أوضح", label: "رؤية للربح" },
      ],
      steps: [
        { title: "اختر المنتج", description: "اختر المنتجات ذات الإمكانات التجارية الأكثر وضوحًا." },
        { title: "أدر اكتساب العملاء", description: "ركز حملات الأداء والإعلانات على خلق الطلب." },
        { title: "دع العملية تعمل", description: "تتولى فلكستوك التخزين والتأكيد والشحن والتحصيل." },
        { title: "اقرأ النتيجة", description: "استخدم إشارات التحصيل والطلبات لتقرر ما الذي ستوسعه لاحقًا." },
      ],
    },
    flexcash: {
      title: "حوّل حركة النقد إلى إشارة للنمو.",
      intro: "اجمع رؤية الطلب والتوصيل والتحصيل والتسوية لتصبح قراراتك القادمة مبنية على الواقع.",
      problem: {
        eyebrow: "فجوة النقد",
        title: "الإيراد مفيد فقط عندما تراه وتثق به.",
        description: "تربط فلكستوك النشاط التشغيلي بالرؤية النقدية لتعرف ما تحرك وما يستحق المتابعة.",
      },
      outcomes: [
        { value: "لحظية", label: "رؤية النقد" },
        { value: "أقل", label: "مفاجآت التسوية" },
        { value: "أفضل", label: "قرارات رأس المال" },
      ],
      steps: [
        { title: "اتبع الطلب", description: "اربط نشاط الطلب بالأحداث المالية التي تليه." },
        { title: "اعرف المستحق", description: "اجعل حالة التحصيل والتسوية واضحة للفريق." },
        { title: "اكتشف الاستثناءات", description: "حدد الفروقات قبل أن تتحول إلى مفاجآت." },
        { title: "خطط للخطوة التالية", description: "اتخذ قرارات النمو برؤية أوضح للنقد المتاح." },
      ],
    },
  },
  capabilities: {
    eyebrow: "مصمم لطريقة تشغيلك الحقيقية",
    title: "التفوق يكمن في التفاصيل.",
    cards: [
      { title: "توصيل في نفس اليوم", description: "امنح العملاء وعدًا أسرع واجعل السرعة جزءًا من ميزتك." },
      { title: "اختيار الطلب عند الباب", description: "امنح العملاء حرية اختيار ما يريدون الاحتفاظ به عند وصول الطلب." },
      { title: "تحكم في مرتجعات RTM", description: "صنّف الطلبات المرتجعة إلى قابلة للبيع وغير قابلة للبيع قبل أن تصبح نقطة عمياء." },
      { title: "كل عمليات التكامل متصلة", description: "اربط منصات التجارة الإلكترونية والأسواق وموقعك المباشر." },
      { title: "تنفيذ فقط عند الحاجة", description: "استخدم طبقة التشغيل التي تحتاجها بدون إدارة عملية توصيل كاملة." },
    ],
  },
  technology: {
    eyebrow: "مصمم للاتصال",
    title: "شاهد العمل واربط أدواتك.",
    description: "اجمع المتاجر والمستودعات وشركات الشحن والعمليات المالية في رؤية واحدة، مع التفاصيل التي يحتاجها فريقك للتصرف.",
    capabilities: ["تحكم في المخزون", "تحكم في التوصيل", "تحكم في الاستثناءات"],
    capabilityDetails: [
      "اعرف ما هو متاح وما يتحرك وما هو معرض للخطر قبل أن يؤثر على العميل.",
      "قارن أداء شركات الشحن وتعامل مع استثناءات التوصيل من رؤية واحدة.",
      "حوّل نشاط الطلبات والمخزون والمرتجعات إلى قرارات عملية لفريقك.",
    ],
    integrations: ["المتاجر", "الأسواق", "شركات الشحن", "عمليات المستودع", "العمليات المالية", "الوصول عبر API"],
    integrationsLabel: "اربط ما يعمل بالفعل",
    integrationsNote: "تختلف الاتصالات المتاحة حسب السوق ونطاق الخدمة ونموذج التشغيل.",
  },
  network: {
    eyebrow: "خيارات التوصيل",
    title: "امنح العميل نهاية أفضل.",
    description: "استخدم مستوى الخدمة المناسب لكل طلب، من التوصيل في نفس اليوم إلى اختيار ما يحتفظ به العميل عند الباب.",
    points: [
      { value: "عرض واحد", label: "للطلبات والمخزون والتوصيل والمرتجعات" },
      { value: "نفس اليوم", label: "للتوصيل عندما يتطلب وعد العميل ذلك" },
      { value: "اختيار", label: "لتجربة أكثر مرونة عند الباب" },
    ],
  },
  pages: {
    resources: {
      eyebrow: "المصادر",
      title: "إرشادات عملية لعمليات أفضل.",
      description: "إرشادات قصيرة ومفيدة للفرق التي تدير المخزون والتوصيل والمرتجعات وتوقعات العملاء.",
      sections: [
        {
          eyebrow: "دليل التاجر",
          title: "اجعل المخزون والتوصيل أسهل في الإدارة.",
          description: "فحوصات بسيطة تساعد الفرق على تقليل التأخيرات وفشل التوصيل ومفاجآت المخزون.",
          items: ["تخطيط المخزون", "مراجعة الدفع عند الاستلام", "إدارة المرتجعات"],
        },
        {
          eyebrow: "من قلب العمليات",
          title: "افهم تكلفة كل عملية تسليم.",
          description: "نظرة عملية على اللحظات التشغيلية التي تؤثر في تجربة العميل والهامش.",
          items: ["حالة الطلب", "استثناءات التوصيل", "تسوية النقد"],
        },
      ],
    },
    company: {
      eyebrow: "الشركة",
      title: "أشخاص وأنظمة تحافظ على حركة التجارة.",
      description: "تجمع فلكستوك بين المشغلين ذوي الخبرة والتكنولوجيا المفيدة للعلامات العاملة في مصر والسعودية.",
      sections: [
        {
          eyebrow: "دورنا",
          title: "العمليات أولًا. والتكنولوجيا حيث تساعد.",
          description: "مهمتنا أن نجعل العمل اليومي موثوقًا وواضحًا وأسهل للتحسين.",
          items: ["مشغلون ذوو خبرة", "أنظمة مسؤولة", "دعم سريع"],
        },
        {
          eyebrow: "مواقع التشغيل",
          title: "نعمل في مصر والسعودية.",
          description: "يمنح نطاقنا الإقليمي العلامات طريقًا واضحًا للتشغيل عند دخول سوقها التالي.",
          items: ["مصر", "السعودية"],
        },
      ],
    },
    technology: {
      eyebrow: "التكنولوجيا",
      title: "رؤية أوضح للعمل من البداية إلى النهاية.",
      description: "اربط متجرك ومستودعاتك وشركات الشحن والعمليات المالية في رؤية واحدة يمكن لفريقك استخدامها.",
      capabilities: ["رؤية المخزون", "تنسيق التوصيل", "الإشارات التشغيلية"],
      sections: [
        {
          eyebrow: "تحكم مباشر",
          title: "تابع الطلب من أول مسح حتى التسوية.",
          description: "اجمع الأحداث التشغيلية الأساسية لتكتشف المشكلات وتتصرف دون التنقل بين أنظمة متعددة.",
          items: ["حالة المخزون", "أحداث الطلب والتوصيل", "إشارات النقد والاستثناءات"],
        },
        {
          eyebrow: "مصمم للاتصال",
          title: "أضف الرؤية دون استبدال كل شيء.",
          description: "اربط قنوات التجارة والأسواق وشركات الشحن والعمليات المالية الحالية ضمن النطاق الذي تحتاجه.",
          items: ["المتاجر", "الأسواق وشركات الشحن", "خيارات API والرفع اليدوي"],
        },
      ],
    },
  },
  cta: {
    eyebrow: "لنبنِ ما هو قادم",
    title: "حوّل التعقيد التشغيلي إلى زخم.",
    description: "أخبرنا إلى أين يتجه عملك، وسنوضح لك كيف تساعدك فلكستوك على الوصول.",
    cta: "اطلب عرض سعر",
  },
  footer: {
    description: "نظام تشغيل التجارة الإلكترونية للعلامات الطموحة في منطقة الشرق الأوسط وشمال أفريقيا.",
    copyright: "© 2026 فلكستوك. جميع الحقوق محفوظة.",
  },
  quote: {
    eyebrow: "ابدأ محادثة",
    title: "اطلب تسعيرًا يناسب عملياتك.",
    description: "شاركنا بعض التفاصيل عن عملك، وسيرشح لك فريقنا نموذج التشغيل والنطاق والخطوة التالية المناسبة.",
    proofPoints: ["طبقة تشغيل واحدة متصلة", "نطاق خدمة مرن", "مصمم للنمو في المنطقة"],
    submitLabel: "اطلب عرض سعر",
    submittingLabel: "جارٍ إرسال الطلب...",
    backLabel: "العودة إلى الصفحة الرئيسية",
    successTitle: "تم إرسال طلبك.",
    successDescription: "سيتواصل معك أحد أعضاء فريق فلكستوك قريبًا.",
    responseNote: "نرد عادة خلال يوم العمل التالي.",
    privacyLabel: "أوافق على استخدام فلكستوك لهذه البيانات للرد على طلبي.",
    businessNeedLabel: "ما الذي تريد حله؟",
    businessNeedPlaceholder: "أخبرنا باختصار عن عملياتك",
    fields: {
      name: { label: "الاسم بالكامل", placeholder: "اسمك" },
      brand: { label: "اسم العلامة التجارية", placeholder: "علامتك التجارية" },
      phone: { label: "رقم الهاتف", placeholder: "+20 000 000 0000" },
      industry: { label: "المجال", placeholder: "اختر مجالك" },
      volume: { label: "حجم الطلبات اليومي", placeholder: "اختر حجم الطلبات" },
      interest: { label: "مهتم بـ", placeholder: "اختر الحل" },
      tax: { label: "البطاقة الضريبية والسجل التجاري", placeholder: "اختر إجابة" },
      businessType: { label: "نوع النشاط", placeholder: "اختر نوع النشاط" },
      sellingMethod: { label: "كيف تبيع؟", placeholder: "اختر قناتك الرئيسية" },
      referral: { label: "كيف سمعت عنا؟", placeholder: "اختر إجابة" },
      email: { label: "البريد الإلكتروني للعمل", placeholder: "you@company.com" },
    },
    taxOptions: ["نعم", "لا"],
    industries: ["الأزياء", "التجميل", "البقالة", "الإلكترونيات", "أخرى"],
    volumes: ["0–50 طلبًا", "51–250 طلبًا", "251–1,000 طلب", "أكثر من 1,000 طلب"],
    businessTypes: ["علامة تجارية", "مسوق بالعمولة", "سوق إلكتروني"],
    sellingMethods: ["صفحة على وسائل التواصل", "موقع إلكتروني", "أخرى"],
    referralSources: ["Google", "Instagram / Facebook", "Snapchat", "ترشيح", "معرض", "أخرى"],
    interests: ["التنفيذ من البداية للنهاية", "تجميع التوصيل", "التجارة العابرة للحدود", "Flexshops", "Flexcash"],
  },
};

export const localizedSolutionDetails =
  arabicCopy.solutionDetails as unknown as Record<
    string,
    Omit<SolutionDetail, "image">
  >;

localizedSolutionDetails["end-to-end-fulfilment"] =
  localizedSolutionDetails["end-to-end-fulfillment"];
localizedSolutionDetails["delivery-aggregation"] =
  localizedSolutionDetails.flexship;
localizedSolutionDetails["cross-border-trade"] =
  localizedSolutionDetails.flexborders;
localizedSolutionDetails["cross-boarder-trade"] =
  localizedSolutionDetails["cross-border-trade"];
localizedSolutionDetails.sales = {
  ...localizedSolutionDetails.flexshops,
  title: "شغّل محرك النمو. ونحن ندير طبقة التجارة.",
  intro: "نموذج يركز على السعودية لمسوقي الأداء: اختر المنتجات وأدر اكتساب العملاء، بينما تتولى فلكستوك العملية خلف البيع.",
  problem: {
    eyebrow: "نموذج تجارة الأداء",
    title: "انتقل من الحملة إلى الطلب المحصل دون بناء البنية الخلفية.",
    description: "تجمع فلكستوك التوريد والتخزين والشحن وتأكيد الطلب والتحصيل في سير عمل واحد، مع رؤية أسرع للربح الذي تصنعه حملاتك.",
  },
  outcomes: [
    { value: "السعودية", label: "نموذج تشغيل مركز" },
    { value: "طبقة واحدة", label: "من المنتج إلى التحصيل" },
    { value: "وضوح أكبر", label: "للربح" },
  ],
  steps: [
    { title: "اختر المنتج", description: "اختر المنتجات ذات الإمكانات التجارية الأكثر وضوحًا." },
    { title: "أدر اكتساب العملاء", description: "ركز حملات الأداء والإعلانات على خلق الطلب." },
    { title: "دع العملية تعمل", description: "تتولى فلكستوك التخزين والتأكيد والشحن والتحصيل." },
    { title: "اقرأ النتيجة", description: "استخدم إشارات التحصيل والطلبات لتقرر ما الذي ستوسعه لاحقًا." },
  ],
};

export const footerContent = {
  description:
    "The E-commerce Operating System for ambitious brands across MENA.",
  copyright: "© 2025 Flextock. All rights reserved.",
};

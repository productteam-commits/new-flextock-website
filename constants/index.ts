export type IconName = "box" | "route" | "sparkles";

export const siteConfig = {
  brand: "flextock",
  eyebrow: "The invisible layer behind commerce",
  title: "Fulfillment that moves at the speed of ambition.",
  description:
    "A flexible fulfillment network for brands that refuse to stand still. Store less, ship smarter, and make every delivery feel effortless.",
  primaryCta: "Build your flow",
  secondaryCta: "See how it works",
  navigation: ["Solutions", "Our network", "Resources"],
  contactEmail: "hello@flextock.com",
  menuLabel: "Open navigation",
  footerTagline: "fulfillment, reimagined.",
  copyrightYear: "2025",
};

export const journeySection = {
  eyebrow: "One connected journey",
  title: "Commerce is a journey.",
  titleAccent: "We make it flow.",
  scrollLabel: "Scroll to explore",
  stepCount: "01 / 03",
};

export const fulfillmentStages = [
  {
    number: "01",
    icon: "box" as IconName,
    label: "Store",
    title: "Your inventory, in the right place.",
    description:
      "Distributed storage puts your products closer to the people who want them, without locking you into a rigid footprint.",
    accent: "from-lime-300/30 to-transparent",
  },
  {
    number: "02",
    icon: "route" as IconName,
    label: "Move",
    title: "Every order finds its fastest route.",
    description:
      "Our orchestration layer connects your storefront to the best carrier, warehouse, and delivery option in real time.",
    accent: "from-cyan-300/25 to-transparent",
  },
  {
    number: "03",
    icon: "sparkles" as IconName,
    label: "Delight",
    title: "The last mile becomes your advantage.",
    description:
      "Keep customers coming back with reliable delivery, thoughtful unboxing, and an experience that feels unmistakably yours.",
    accent: "from-fuchsia-300/25 to-transparent",
  },
];

export const services = [
  {
    title: "Warehousing",
    description: "Flexible space that scales with your next chapter.",
  },
  {
    title: "Same-day delivery",
    description: "A faster promise, delivered across the city.",
  },
  {
    title: "Returns",
    description: "Turn the journey back into a reason to stay.",
  },
];

export const solutionsSection = {
  eyebrow: "Built for movement",
  title: "More than a warehouse.",
  titleAccent: "Your unfair advantage.",
};

export const metrics = [
  { value: "99.2%", label: "orders shipped on time" },
  { value: "24h", label: "average time to go live" },
  { value: "36+", label: "cities in our network" },
];

export const footerContent = {
  title: "Ready to move",
  titleAccent: "forward?",
  cta: "Start a conversation",
};

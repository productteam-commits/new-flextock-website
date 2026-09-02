import type { Metadata } from "next";

import { SolutionsOverview } from "@/components/SolutionsOverview";

export const metadata: Metadata = {
  title: "Solutions — Flextock",
  description:
    "Explore Flextock capabilities across fulfillment, delivery, regional expansion, Flexshops, and Flexcash.",
};

export default function SolutionsPage() {
  return <SolutionsOverview />;
}

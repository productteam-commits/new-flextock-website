import type { Metadata } from "next";

import { QuotePageContent } from "@/components/QuotePageContent";
import { quotePage } from "@/constants";

export const metadata: Metadata = {
  title: "Get Quote — Flextock",
  description: quotePage.description,
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return <QuotePageContent />;
}

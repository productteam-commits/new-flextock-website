import type { Metadata } from "next";

import { ContentPage } from "@/components/ContentPage";
import { supportingPages } from "@/constants";

export const metadata: Metadata = {
  title: "Technology — Flextock",
  description: supportingPages.technology.description,
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return <ContentPage pageKey="technology" />;
}

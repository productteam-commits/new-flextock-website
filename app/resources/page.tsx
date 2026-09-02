import type { Metadata } from "next";

import { ContentPage } from "@/components/ContentPage";
import { supportingPages } from "@/constants";

export const metadata: Metadata = {
  title: "Resources — Flextock",
  description: supportingPages.resources.description,
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return <ContentPage pageKey="resources" />;
}

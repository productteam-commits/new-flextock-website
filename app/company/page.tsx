import type { Metadata } from "next";

import { ContentPage } from "@/components/ContentPage";
import { supportingPages } from "@/constants";

export const metadata: Metadata = {
  title: "Company — Flextock",
  description: supportingPages.company.description,
  alternates: { canonical: "/company" },
};

export default function CompanyPage() {
  return <ContentPage pageKey="company" />;
}

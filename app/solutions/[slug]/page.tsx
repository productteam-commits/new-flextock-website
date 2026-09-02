import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SolutionPageContent } from "@/components/SolutionPageContent";
import { solutionCards, solutionDetails } from "@/constants";

type SolutionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionCards.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionCards.find((item) => item.slug === slug);

  return {
    title: solution ? `${solution.title} — Flextock` : "Solution — Flextock",
    description: solution?.description,
    alternates: solution
      ? { canonical: `/solutions/${solution.slug}` }
      : undefined,
    openGraph: solution
      ? {
          images: [{ url: solutionDetails[solution.slug].image.src }],
        }
      : undefined,
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutionCards.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return <SolutionPageContent slug={solution.slug} />;
}

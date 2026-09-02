import type { MetadataRoute } from "next";

import { solutionCards } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/solutions", "/technology", "/resources", "/company", "/quote"];
  const solutions = solutionCards.map(
    (solution) => `/solutions/${solution.slug}`,
  );

  return [...pages, ...solutions].map((path) => ({
    url: `https://www.flextock.com${path}`,
  }));
}

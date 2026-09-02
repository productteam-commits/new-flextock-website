import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flextock",
    short_name: "Flextock",
    description: "Commerce infrastructure for growing brands.",
    start_url: "/",
    display: "standalone",
    background_color: "#071522",
    theme_color: "#071522",
    icons: [
      {
        src: "/logos/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

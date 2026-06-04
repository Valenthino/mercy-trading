import type { MetadataRoute } from "next";
import { NAV, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV.map(({ href }) => {
    const path = href === "/" ? "/" : `${href}/`;
    return {
      url: `${SITE.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: href === "/" ? 1 : 0.7,
    };
  });
}

import type { MetadataRoute } from "next";
import { SITE_URL, treatments } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/tratamientos/", priority: 0.9, freq: "monthly" },
    { path: "/beneficios/", priority: 0.7, freq: "monthly" },
    { path: "/faq/", priority: 0.7, freq: "monthly" },
    { path: "/historia/", priority: 0.5, freq: "yearly" },
    { path: "/contacto/", priority: 0.8, freq: "yearly" },
  ];

  const treatmentPages = treatments.map((t) => ({
    path: `/${t.slug}/`,
    priority: 0.85,
    freq: "monthly" as const,
  }));

  return [...staticPages, ...treatmentPages].map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}

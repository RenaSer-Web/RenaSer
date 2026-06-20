import type { Metadata } from "next";
import { getTreatment, type TreatmentSlug } from "./site";

export function treatmentMetadata(slug: TreatmentSlug): Metadata {
  const t = getTreatment(slug)!;
  const title = `${t.shortName} en Acassuso, San Isidro`;
  const url = `/${t.slug}/`;
  return {
    title,
    description: t.metaDescription,
    keywords: t.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${t.shortName} | Rena.Ser`,
      description: t.metaDescription,
      images: [{ url: t.image, alt: t.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.shortName} | Rena.Ser`,
      description: t.metaDescription,
      images: [t.image],
    },
  };
}

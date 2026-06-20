import type { Metadata } from "next";
import { TreatmentLanding } from "@/components/treatment-landing";
import { JsonLd } from "@/components/json-ld";
import { getTreatment } from "@/lib/site";
import { treatmentMetadata } from "@/lib/seo";
import { treatmentJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const t = getTreatment("terapia-colonica")!;

export const metadata: Metadata = treatmentMetadata("terapia-colonica");

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          treatmentJsonLd(t),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Tratamientos", path: "/tratamientos/" },
            { name: t.shortName, path: `/${t.slug}/` },
          ]),
        ]}
      />
      <TreatmentLanding t={t} />
    </>
  );
}

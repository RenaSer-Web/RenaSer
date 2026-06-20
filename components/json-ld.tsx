import { jsonLdString } from "@/lib/jsonld";

/** Inserta uno o varios objetos JSON-LD en un <script type="application/ld+json">. */
export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // El contenido está escapado en jsonLdString (sin < sin escapar).
          dangerouslySetInnerHTML={{ __html: jsonLdString(item) }}
        />
      ))}
    </>
  );
}

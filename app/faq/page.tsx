import type { Metadata } from "next";
import Link from "next/link";
import { faqs } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import { WhatsAppCta } from "@/components/cta";
import { ChevronDown } from "@/components/icons";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes sobre la Terapia Colónica",
  description:
    "Resolvemos las dudas más comunes sobre la hidroterapia colónica: si duele, contraindicaciones, cuánto dura, preparación previa, material descartable y más. Centro Rena.Ser, Olivos, Vicente López.",
  keywords: [
    "preguntas frecuentes terapia colónica",
    "hidroterapia colónica duele",
    "contraindicaciones terapia colónica",
    "cómo prepararse terapia colónica",
    "FAQ hidroterapia de colon",
  ],
  alternates: { canonical: "/faq/" },
  openGraph: {
    type: "article",
    url: "/faq/",
    title: "Preguntas Frecuentes | Rena.Ser",
    description:
      "Todo lo que necesitás saber sobre la hidroterapia colónica: dolor, seguridad, contraindicaciones, duración y preparación.",
  },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(),
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Preguntas frecuentes", path: "/faq/" },
          ]),
        ]}
      />

      <section className="grain bg-gradient-to-b from-[var(--color-mist)] to-[var(--color-cream)]">
        <div className="container-rs py-16 text-center lg:py-20">
          <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
            <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
            <span className="mx-1.5">/</span>
            <span className="text-[var(--color-ink-soft)]">Preguntas frecuentes</span>
          </nav>
          <span className="eyebrow">Resolvemos tus dudas</span>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-forest)] md:text-5xl">
            Preguntas frecuentes
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            Reunimos las consultas más habituales sobre la hidroterapia colónica. Si te queda
            alguna duda, escribinos y te respondemos sin cargo.
          </p>
        </div>
      </section>

      <section className="container-rs py-16">
        <div className="mx-auto max-w-5xl grid gap-4 md:grid-cols-2 items-start">
          {/* Columna 1 */}
          <div className="space-y-3">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[var(--color-line)] bg-white px-5 shadow-[var(--shadow-soft)] open:border-[var(--color-sage)] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg text-[var(--color-forest)]">
                  {f.q}
                  <ChevronDown
                    width={20}
                    height={20}
                    className="shrink-0 text-[var(--color-gold-deep)] transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="space-y-3 pb-5 text-[var(--color-ink-soft)]">
                  {f.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>

          {/* Columna 2 */}
          <div className="space-y-3">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-[var(--color-line)] bg-white px-5 shadow-[var(--shadow-soft)] open:border-[var(--color-sage)] [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg text-[var(--color-forest)]">
                  {f.q}
                  <ChevronDown
                    width={20}
                    height={20}
                    className="shrink-0 text-[var(--color-gold-deep)] transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="space-y-3 pb-5 text-[var(--color-ink-soft)]">
                  {f.a.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-cream-2)] p-8 text-center">
          <h2 className="font-display text-2xl text-[var(--color-forest)]">
            ¿Tenés otra pregunta?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-[var(--color-ink-soft)]">
            Escribinos por WhatsApp y un especialista te responde a la brevedad.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCta source="faq_cta">Hacé tu consulta</WhatsAppCta>
          </div>
        </div>
      </section>
    </>
  );
}

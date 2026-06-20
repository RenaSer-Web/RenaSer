import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { TreatmentsGrid } from "@/components/sections";
import { WhatsAppCta, CallCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Tratamientos de Hidroterapia Colónica y Depurativos",
  description:
    "Conocé todos los tratamientos de Rena.Ser en Acassuso, San Isidro: terapia colónica, limpieza colónica profunda, limpieza hepática, desparasitación natural y detox de luna llena. Pedí tu asesoría gratuita.",
  keywords: [
    "tratamientos hidroterapia colónica",
    "limpieza de colon",
    "limpieza hepática",
    "desparasitación natural",
    "detox",
    "Acassuso",
    "San Isidro",
  ],
  alternates: { canonical: "/tratamientos/" },
  openGraph: {
    type: "website",
    url: "/tratamientos/",
    title: "Tratamientos | Rena.Ser",
    description:
      "Terapia colónica, limpieza hepática, desparasitación natural y detox. Programas depurativos personalizados en Acassuso, Zona Norte.",
  },
};

export default function TratamientosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Tratamientos", path: "/tratamientos/" },
        ])}
      />

      <section className="grain bg-gradient-to-b from-[var(--color-mist)] to-[var(--color-cream)]">
        <div className="container-rs py-16 text-center lg:py-20">
          <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
            <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
            <span className="mx-1.5">/</span>
            <span className="text-[var(--color-ink-soft)]">Tratamientos</span>
          </nav>
          <span className="eyebrow">Programas depurativos</span>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-forest)] md:text-5xl">
            Tratamientos para depurar tu cuerpo y recuperar tu energía
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            En Rena.Ser combinamos la hidroterapia colónica con programas naturales de
            desintoxicación. Cada tratamiento es indoloro, seguro y se adapta a tu objetivo,
            con acompañamiento profesional de principio a fin.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCta source="tratamientos_hero">Pedí tu asesoría gratuita</WhatsAppCta>
            <CallCta source="tratamientos_hero" />
          </div>
        </div>
      </section>

      <section className="container-rs py-16">
        <TreatmentsGrid />
      </section>

      <section className="container-rs pb-20">
        <div className="grain overflow-hidden rounded-[var(--radius-xl2)] bg-[var(--color-forest)] px-8 py-12 text-center text-[var(--color-cream)] md:px-12">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">
            ¿No sabés cuál elegir?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--color-sage-soft)]">
            Escribinos y te asesoramos sin cargo para encontrar el tratamiento ideal según tu
            historia y tus objetivos.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppCta source="tratamientos_cta">Hablar con un especialista</WhatsAppCta>
          </div>
        </div>
      </section>
    </>
  );
}

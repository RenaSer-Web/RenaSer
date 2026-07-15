import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppCta, CallCta } from "@/components/cta";
import { MapEmbed } from "@/components/sections";
import { MapPin, Mail, Phone } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contacto y Turnos",
  description:
    "Pedí tu turno o consultá por la terapia colónica en Rena.Ser. Estamos en Salvador Debenedetti 2781, Olivos (Vicente López), Zona Norte de Buenos Aires. WhatsApp, teléfono y email.",
  keywords: [
    "contacto Rena.Ser",
    "turnos terapia colónica",
    "hidroterapia colónica Olivos",
    "hidroterapia colónica Vicente López",
    "consultorio Zona Norte",
  ],
  alternates: { canonical: "/contacto/" },
  openGraph: {
    type: "website",
    url: "/contacto/",
    title: "Contacto y Turnos | Rena.Ser",
    description:
      "Pedí tu turno en Olivos, Vicente López. Escribinos por WhatsApp y recibí una asesoría gratuita.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto/" },
        ])}
      />

      <section className="grain bg-gradient-to-b from-[var(--color-mist)] to-[var(--color-cream)]">
        <div className="container-rs py-16 text-center lg:py-20">
          <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
            <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
            <span className="mx-1.5">/</span>
            <span className="text-[var(--color-ink-soft)]">Contacto</span>
          </nav>
          <span className="eyebrow">Estamos para ayudarte</span>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-forest)] md:text-5xl">
            Pedí tu turno o tu asesoría gratuita
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            Escribinos por WhatsApp para una respuesta inmediata o completá el formulario y te
            contactamos a la brevedad.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCta source="contacto_hero" />
            <CallCta source="contacto_hero" />
          </div>
        </div>
      </section>

      <section className="container-rs py-16">
        <div className="container-rs px-0">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="font-display text-2xl text-[var(--color-forest)]">Datos de contacto</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-pine)]">
                    <MapPin width={22} height={22} />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--color-forest)]">Ubicación</p>
                    <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                      {business.address.street} ({business.address.neighborhood})<br />
                      {business.address.locality}, {business.address.region}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-pine)]">
                    <Phone width={22} height={22} />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--color-forest)]">Teléfono / WhatsApp</p>
                    <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                      {business.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-pine)]">
                    <Mail width={22} height={22} />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--color-forest)]">Correo electrónico</p>
                    <a href={`mailto:${business.email}`} className="break-all text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                      {business.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 font-display text-2xl text-[var(--color-forest)]">
                Dejanos tu consulta
              </h2>
              <ContactForm />
            </div>
          </div>

          <div className="mt-12 h-[380px]">
            <MapEmbed url={business.mapsEmbed} />
          </div>
        </div>
      </section>
    </>
  );
}

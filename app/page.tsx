import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, therapist, trustBadges, testimonials } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { reviewsJsonLd } from "@/lib/jsonld";
import { ContactForm } from "@/components/contact-form";
import { WhatsAppCta, CallCta } from "@/components/cta";
import { TreatmentsGrid, Stats, BenefitsList, MapEmbed, CertificateCard } from "@/components/sections";
import { ArrowRight, Star, MapPin, Mail, Phone, iconMap, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rena.Ser | Terapia Colónica y Tratamientos Depurativos en Acassuso",
  description:
    "Decile adiós a los problemas digestivos con la hidroterapia colónica. Terapia colónica indolora y segura en Acassuso, San Isidro (Zona Norte, Buenos Aires). Asesoría gratuita: pedí tu turno.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd(testimonials)} />

      {/* HERO */}
      <section className="grain relative overflow-clip bg-gradient-to-b from-[var(--color-mist)] via-[var(--color-cream)] to-[var(--color-cream)]">
        <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[var(--color-sage-soft)] opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[var(--color-gold)] opacity-10 blur-3xl" />
        <div className="container-rs relative grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-sage-soft)] bg-white/60 px-4 py-1.5 text-xs font-semibold text-[var(--color-pine)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
              Hidroterapia colónica · Acassuso, Zona Norte
            </span>
            <h1 className="mt-5 text-[2.6rem] font-semibold leading-[1.03] text-[var(--color-forest)] sm:text-6xl">
              Decile adiós a los problemas digestivos con la{" "}
              <em className="not-italic text-[var(--color-gold-deep)]">terapia colónica</em>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
              Con el tiempo, la acumulación de toxinas y residuos en el colon puede provocar
              estreñimiento, fatiga crónica y múltiples problemas digestivos. Te ayudamos a
              recuperar tu bienestar físico y emocional, de forma natural y profesional.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tratamientos/" className="btn btn-primary">
                Ver tratamientos <ArrowRight width={18} height={18} />
              </Link>
              <WhatsAppCta source="hero_home">Pedí tu turno</WhatsAppCta>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-0.5 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width={18} height={18} />
                ))}
              </div>
              <p className="text-sm font-medium text-[var(--color-ink-soft)]">
                <strong>100%</strong> de nuestros pacientes nos recomienda
              </p>
            </div>
          </div>

          <div className="reveal relative" style={{ animationDelay: "0.12s" }}>
            <div className="overflow-hidden rounded-[var(--radius-xl2)] border-4 border-white shadow-[var(--shadow-card)]">
              <Image
                src={therapist.photo}
                alt="Sesión de hidroterapia colónica en Rena.Ser, Acassuso"
                width={720}
                height={820}
                priority
                className="aspect-[5/6] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white/95 px-5 py-3.5 shadow-[var(--shadow-card)] backdrop-blur">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-forest)]">
                <Check width={22} height={22} />
              </span>
              <div className="text-sm leading-tight">
                <p className="font-semibold text-[var(--color-forest)]">Tratamiento indoloro</p>
                <p className="text-[var(--color-ink-soft)]">y 100% seguro</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-[var(--color-line)] bg-[var(--color-cream-2)]">
        <div className="container-rs grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {trustBadges.map((b) => {
            const Icon = iconMap[b.icon as keyof typeof iconMap];
            return (
              <div key={b.title} className="flex flex-col items-center gap-2 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--color-pine)] shadow-[var(--shadow-soft)]">
                  <Icon width={24} height={24} />
                </span>
                <span className="text-sm font-semibold text-[var(--color-forest)]">{b.title}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* TRATAMIENTOS */}
      <section className="container-rs py-20" id="tratamientos">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nuestros tratamientos</span>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
            Programas depurativos para cada necesidad
          </h2>
          <p className="mt-4 text-[var(--color-ink-soft)]">
            Desde una primera sesión descubrimiento hasta programas profundos de
            desintoxicación. Te acompañamos a elegir el ideal para vos.
          </p>
        </div>
        <div className="mt-12">
          <TreatmentsGrid />
        </div>
      </section>

      {/* POR QUÉ + BENEFICIOS */}
      <section className="bg-[var(--color-cream-2)] py-20">
        <div className="container-rs">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Beneficios</span>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
              ¿Por qué hacerse una terapia colónica?
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Las toxinas acumuladas en el tracto gastrointestinal pueden generar diversos
              problemas de salud. Una limpieza de colon ayuda a eliminarlas, mejorando la
              energía, el sistema inmunológico y la salud en general, y es un método eficaz
              para prevenir enfermedades.
            </p>
          </div>
          <div className="mt-12 rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-12">
            <BenefitsList />
          </div>
          <div className="mt-8 text-center">
            <Link href="/beneficios/" className="btn btn-ghost">
              Ver todos los beneficios <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TERAPEUTA */}
      <section className="container-rs grid items-center gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <CertificateCard
          photo={therapist.photo}
          certificate={therapist.certificate}
          name={therapist.name}
          role={therapist.jobTitle}
          license={therapist.license}
        />
        <div>
          <span className="eyebrow">El terapeuta</span>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
            {therapist.name}
          </h2>
          <p className="mt-2 font-medium text-[var(--color-pine)]">
            Miembro de la {therapist.memberOf} · {therapist.license}
          </p>
          <div className="mt-6 space-y-4 text-[var(--color-ink-soft)]">
            <p>
              Hace más de cinco años que acompaño a las personas como terapeuta colónico y, en
              paralelo, en procesos depurativos a través de diferentes formas de ayuno.
            </p>
            <p>
              Soy profesor de Hatha Yoga desde hace quince años y practicante hasta el día de
              hoy, y facilito sesiones grupales de Respiración Consciente (Rebirthing o
              Renacimiento). También soy masajista californiano Esalen, egresado de la escuela
              Oasis hace veinte años, además de músico y compositor.
            </p>
            <p>
              Siento profundamente la vocación de acompañar a las personas hacia un cambio
              auténtico y sustentable a través del cuerpo, la alimentación consciente y la
              depuración corporal. Contás conmigo para acompañarte en esta maravillosa
              experiencia de cambio y transformación.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCta source="therapist">Reservá tu sesión</WhatsAppCta>
            <Link href="/historia/" className="btn btn-ghost">
              Conocé la historia
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grain bg-[var(--color-forest)] py-20">
        <div className="container-rs">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow !text-[var(--color-gold)]">Resultados reales</span>
            <h2 className="mt-2 font-display text-3xl text-[var(--color-cream)] md:text-4xl">
              Opiniones de nuestros pacientes
            </h2>
            <p className="mt-4 text-[var(--color-sage-soft)]">
              Entendemos los desafíos del bienestar digestivo y la salud integral. Por eso
              ofrecemos tratamientos seguros y personalizados que alivian síntomas y promueven
              una mejora duradera en tu calidad de vida.
            </p>
          </div>
          <div className="mt-12">
            <Stats />
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="container-rs py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Experiencias</span>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
            Lo que cuentan quienes ya se trataron
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((rev) => (
            <figure key={rev.name} className="flex flex-col rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <div className="flex gap-0.5 text-amber-500">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width={16} height={16} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-[var(--color-ink-soft)]">
                “{rev.text}”
              </blockquote>
              <figcaption className="mt-4 font-display text-lg text-[var(--color-forest)]">
                — {rev.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA + CONTACTO */}
      <section id="contacto" className="bg-[var(--color-cream-2)] py-20">
        <div className="container-rs grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Asesoría gratuita</span>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
              Accedé a una asesoría 100% gratuita
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              Contanos qué te pasa y te ayudamos a elegir el tratamiento ideal. Dejanos tus
              datos o escribinos directamente por WhatsApp.
            </p>

            <div className="mt-7 space-y-4">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                <MapPin width={22} height={22} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                <span>
                  <strong className="block text-[var(--color-forest)]">Ubicación</strong>
                  {business.address.street} ({business.address.neighborhood}) — {business.address.locality}, Buenos Aires
                </span>
              </a>
              <a href={business.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                <Phone width={22} height={22} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                <span>
                  <strong className="block text-[var(--color-forest)]">Teléfono / WhatsApp</strong>
                  {business.phoneDisplay}
                </span>
              </a>
              <a href={`mailto:${business.email}`} className="flex items-start gap-3 text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]">
                <Mail width={22} height={22} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                <span>
                  <strong className="block text-[var(--color-forest)]">Correo electrónico</strong>
                  {business.email}
                </span>
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <WhatsAppCta source="contact_home" />
              <CallCta source="contact_home" />
            </div>

            <div className="mt-8">
              <MapEmbed url={business.mapsEmbed} />
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Treatment } from "@/lib/site";
import { business, therapist, trustBadges, testimonials } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { WhatsAppCta, CallCta } from "./cta";
import { Check, Drop, Star, ArrowRight, iconMap } from "./icons";
import { GoogleReviewCard } from "@/components/sections";

/**
 * Landing de tratamiento optimizada para Google Ads:
 * - Formulario de captación ARRIBA (above the fold).
 * - Un único objetivo de conversión (lead) reforzado con WhatsApp y llamada.
 * - Señales de confianza + prueba social cerca del formulario.
 * - Contenido SEO en profundidad más abajo.
 */
export function TreatmentLanding({ t }: { t: Treatment }) {
  return (
    <div className="overflow-clip">
      {/* HERO con formulario arriba */}
      <section className="grain relative bg-gradient-to-b from-[var(--color-mist)] via-[var(--color-cream)] to-[var(--color-cream)]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--color-sage-soft)] opacity-40 blur-3xl" />
        <div className="container-rs relative grid items-start gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          {/* Columna de copy */}
          <div className="reveal">
            <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
              <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
              <span className="mx-1.5">/</span>
              <Link href="/tratamientos/" className="hover:text-[var(--color-forest)]">Tratamientos</Link>
              <span className="mx-1.5">/</span>
              <span className="text-[var(--color-ink-soft)]">{t.shortName}</span>
            </nav>

            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="mt-3 text-4xl font-semibold leading-[1.05] text-[var(--color-forest)] md:text-5xl">
              {t.heroHeadline}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-ink-soft)]">{t.claim}.</p>

            <ul className="mt-7 space-y-3">
              {t.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-forest)] text-[var(--color-cream)]">
                    <Check width={15} height={15} />
                  </span>
                  <span className="text-[var(--color-ink-soft)]">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppCta source={`hero_${t.slug}`}>Pedí tu turno</WhatsAppCta>
              <CallCta source={`hero_${t.slug}`} />
            </div>

            {/* Confianza */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-line)] pt-6">
              {trustBadges.map((b) => {
                const Icon = iconMap[b.icon as keyof typeof iconMap];
                return (
                  <span key={b.title} className="flex items-center gap-2 text-sm font-medium text-[var(--color-ink-soft)]">
                    <Icon width={18} height={18} className="text-[var(--color-pine)]" />
                    {b.title}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Columna del formulario (above the fold) */}
          <div className="reveal lg:sticky lg:top-24" style={{ animationDelay: "0.1s" }}>
            <div className="mb-3 flex items-center justify-center gap-2 text-amber-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} width={18} height={18} />
              ))}
              <span className="ml-1 text-sm font-semibold text-[var(--color-ink-soft)]">
                100% de nuestros pacientes nos recomienda
              </span>
            </div>
            <div className="rounded-[var(--radius-xl2)] border border-[var(--color-sage-soft)] bg-white p-6 shadow-[var(--shadow-card)] md:p-7">
              <h2 className="text-center font-display text-2xl text-[var(--color-forest)]">
                Asesoría gratuita
              </h2>
              <p className="mt-1 text-center text-sm text-[var(--color-ink-soft)]">
                Dejanos tus datos y te contamos si <strong>{t.shortName}</strong> es para vos.
              </p>
              <div className="mt-5">
                <ContactForm treatment={t.shortName} variant="plain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO en profundidad (SEO) */}
      <section className="container-rs grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <article className="max-w-2xl">
          <span className="eyebrow">{t.shortName}</span>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
            ¿En qué consiste {t.name.toLowerCase()}?
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {t.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {t.sections?.map((s) => (
            <div key={s.title} className="mt-10">
              <h3 className="text-xl font-semibold text-[var(--color-forest)]">{s.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[var(--color-ink-soft)]">
                    <Check width={20} height={20} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="mt-9 flex items-center gap-2 rounded-2xl bg-[var(--color-mist)] px-5 py-4 text-sm font-medium italic text-[var(--color-forest)]">
            <Drop width={20} height={20} className="shrink-0" />
            Todos nuestros tratamientos tienen un cuidado exhaustivo en la calidad y
            purificación del agua.
          </p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] shadow-[var(--shadow-soft)]">
            <Image
              src={t.image}
              alt={t.imageAlt}
              width={720}
              height={520}
              className="h-60 w-full object-cover"
            />
          </div>

          {t.duration && (
            <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-sage)]">
                Duración
              </p>
              <p className="mt-1 font-display text-xl text-[var(--color-forest)]">{t.duration}</p>
            </div>
          )}

          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5">
            <div className="flex items-center gap-3">
              <Image
                src={therapist.photo}
                alt={`${therapist.name}, ${therapist.jobTitle}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-[var(--color-forest)]">{therapist.name}</p>
                <p className="text-sm text-[var(--color-ink-soft)]">
                  {therapist.jobTitle} · {therapist.license}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink-soft)]">
              Miembro de la {therapist.memberOf}.
            </p>
          </div>
        </aside>
      </section>

      {/* PRUEBA SOCIAL */}
      <section className="bg-[var(--color-cream-2)] py-14">
        <div className="container-rs">
          <h2 className="text-center font-display text-2xl text-[var(--color-forest)] md:text-3xl">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((rev) => (
              <GoogleReviewCard key={rev.name} name={rev.name} text={rev.text} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="grain bg-[var(--color-forest)] py-16 text-center text-[var(--color-cream)]">
        <div className="container-rs max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">¡Transformá tu salud hoy mismo!</h2>
          <p className="mt-4 text-[var(--color-sage-soft)]">
            Escribinos y recibí un asesoramiento totalmente gratis para saber si{" "}
            {t.shortName} es el tratamiento ideal para vos.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <WhatsAppCta source={`footer_${t.slug}`}>Quiero mi asesoría gratuita</WhatsAppCta>
            <Link href="/tratamientos/" className="btn btn-ghost !border-[var(--color-cream)] !text-[var(--color-cream)] hover:!bg-[var(--color-cream)] hover:!text-[var(--color-forest)]">
              Ver todos los tratamientos <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

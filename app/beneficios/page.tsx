import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { BenefitsList } from "@/components/sections";
import { WhatsAppCta } from "@/components/cta";
import { Drop, Shield, Leaf, Sparkle } from "@/components/icons";

export const metadata: Metadata = {
  title: "Beneficios de la Terapia Colónica",
  description:
    "Descubrí los beneficios de la hidroterapia colónica: mejor digestión, más energía, defensas reforzadas, bienestar emocional y desintoxicación. Tratamiento indoloro y seguro en Olivos, Vicente López.",
  keywords: [
    "beneficios terapia colónica",
    "beneficios hidroterapia de colon",
    "limpieza de colon beneficios",
    "desintoxicación",
    "salud digestiva",
  ],
  alternates: { canonical: "/beneficios/" },
  openGraph: {
    type: "article",
    url: "/beneficios/",
    title: "Beneficios de la Terapia Colónica | Rena.Ser",
    description:
      "Mejor digestión, más energía y defensas reforzadas: conocé todos los beneficios de la hidroterapia colónica.",
  },
};

const pillars = [
  { icon: Drop, title: "Desintoxica", text: "Elimina toxinas y residuos acumulados en el colon, aliviando la carga sobre el resto de los órganos de filtración." },
  { icon: Leaf, title: "Reequilibra", text: "Ayuda a restablecer la flora intestinal y a regularizar el tránsito, especialmente tras antibióticos o malos hábitos." },
  { icon: Shield, title: "Fortalece", text: "Buena parte del sistema inmunitario vive en el intestino: una limpieza adecuada contribuye a reforzar tus defensas." },
  { icon: Sparkle, title: "Revitaliza", text: "Más energía, mejor descanso y claridad mental, con un impacto positivo también en la piel y el bienestar emocional." },
];

export default function BeneficiosPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Beneficios", path: "/beneficios/" },
        ])}
      />

      <section className="grain bg-gradient-to-b from-[var(--color-mist)] to-[var(--color-cream)]">
        <div className="container-rs py-16 text-center lg:py-20">
          <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
            <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
            <span className="mx-1.5">/</span>
            <span className="text-[var(--color-ink-soft)]">Beneficios</span>
          </nav>
          <span className="eyebrow">Por qué hacerlo</span>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-forest)] md:text-5xl">
            Beneficios de la hidroterapia colónica
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            La acumulación de toxinas en el tracto gastrointestinal puede afectar tu salud de
            muchas maneras. Una limpieza de colon ayuda a eliminarlas y a recuperar energía,
            defensas y bienestar general, además de ser un método eficaz de prevención.
          </p>
        </div>
      </section>

      <section className="container-rs py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-pine)]">
                <p.icon width={24} height={24} />
              </span>
              <h3 className="mt-4 font-display text-xl text-[var(--color-forest)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-cream-2)] py-20">
        <div className="container-rs">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">En detalle</span>
            <h2 className="mt-2 text-3xl font-semibold text-[var(--color-forest)] md:text-4xl">
              ¿En qué casos se aconseja?
            </h2>
            <p className="mt-4 text-[var(--color-ink-soft)]">
              La terapia colónica acompaña una gran variedad de situaciones. Estos son los
              beneficios más buscados por nuestros pacientes.
            </p>
          </div>
          <div className="mt-12 rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-soft)] md:p-12">
            <BenefitsList />
          </div>
        </div>
      </section>

      <section className="container-rs py-20">
        <div className="grain overflow-hidden rounded-[var(--radius-xl2)] bg-[var(--color-forest)] px-8 py-12 text-center text-[var(--color-cream)] md:px-12">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">
            Empezá a sentirte mejor hoy
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[var(--color-sage-soft)]">
            Pedí una asesoría gratuita y descubrí cómo la hidroterapia colónica puede ayudarte.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <WhatsAppCta source="beneficios_cta">Quiero mi asesoría gratuita</WhatsAppCta>
            <Link href="/tratamientos/" className="btn btn-ghost !border-[var(--color-cream)] !text-[var(--color-cream)] hover:!bg-[var(--color-cream)] hover:!text-[var(--color-forest)]">
              Ver tratamientos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

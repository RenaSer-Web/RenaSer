import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { WhatsAppCta } from "@/components/cta";

export const metadata: Metadata = {
  title: "Historia de la Hidroterapia Colónica",
  description:
    "Origen e historia de la hidroterapia de colon, desde el antiguo Egipto hasta la actualidad, y cómo funciona la fisiología del colon. Conocé la base de los tratamientos depurativos de Rena.Ser.",
  keywords: [
    "historia hidroterapia colónica",
    "origen terapia colónica",
    "fisiología del colon",
    "qué es el colon",
    "autointoxicación",
  ],
  alternates: { canonical: "/historia/" },
  openGraph: {
    type: "article",
    url: "/historia/",
    title: "Historia de la Hidroterapia Colónica | Rena.Ser",
    description:
      "Del antiguo Egipto a la actualidad: la historia de la hidroterapia de colon y cómo funciona el intestino grueso.",
  },
};

export default function HistoriaPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Historia", path: "/historia/" },
        ])}
      />

      <section className="grain bg-gradient-to-b from-[var(--color-mist)] to-[var(--color-cream)]">
        <div className="container-rs py-16 text-center lg:py-20">
          <nav aria-label="Migas" className="mb-5 text-xs font-medium text-[var(--color-sage)]">
            <Link href="/" className="hover:text-[var(--color-forest)]">Inicio</Link>
            <span className="mx-1.5">/</span>
            <span className="text-[var(--color-ink-soft)]">Historia</span>
          </nav>
          <span className="eyebrow">Origen y fundamentos</span>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-forest)] md:text-5xl">
            La historia de la hidroterapia colónica
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[var(--color-ink-soft)]">
            Una práctica milenaria que, gracias a la tecnología actual, hoy se realiza de forma
            profunda, indolora y sencilla.
          </p>
        </div>
      </section>

      <article className="container-rs py-16">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-display text-3xl text-[var(--color-forest)]">Origen</h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                Los primeros registros históricos provienen del antiguo Egipto, donde los
                médicos-sacerdotes practicaban enemas o lavativas con fines terapéuticos. Más
                tarde, los romanos adoptaron esa tradición, que se mantuvo a lo largo del
                tiempo hasta llegar a nuestros días.
              </p>
              <p>
                La hidroterapia de colon, tal como la conocemos, se desarrolló a comienzos del
                siglo XX, sobre la base de la importancia de la nutrición y los hábitos
                alimentarios en el origen de ciertas enfermedades. Hoy, gracias al avance de la
                tecnología médica, la terapia puede realizarse de manera profunda, indolora y
                sencilla.
              </p>
              <p>
                La hidrocolonterapia moderna surge en los Estados Unidos y se extiende
                rápidamente a otros continentes, en especial a Europa (Alemania, Inglaterra y
                España). Gracias a su difusión y eficacia, el tratamiento llega también a la
                Argentina.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-3xl text-[var(--color-forest)]">
              El colon y su fisiología
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-[var(--color-ink-soft)]">
              <p>
                El colon, o intestino grueso, se ubica en el abdomen y constituye la última
                sección del sistema digestivo. Está formado por distintas porciones: el ciego,
                el colon ascendente, el colon transverso, el colon descendente y el recto.
              </p>
              <p>
                Una vez digerido el alimento, la absorción de nutrientes ocurre en el intestino
                delgado; los restos no digeridos pasan al intestino grueso, donde la flora
                bacteriana los modifica y los transforma en heces. El colon reabsorbe el agua y
                ciertos nutrientes y vitaminas hacia las vías sanguínea y linfática.
              </p>
              <p>
                En el colon reside una parte muy importante del sistema inmunitario, por lo que
                una limpieza adecuada contribuye a reforzar las defensas del organismo. Además,
                conviven en él una enorme cantidad de bacterias cuyo equilibrio se ve afectado
                por la mala alimentación, el abuso de medicamentos y el estrés, factores que
                pueden alterar el pH intestinal y favorecer la disbiosis.
              </p>
              <p>
                Cuando los desechos permanecen demasiado tiempo en el intestino grueso, pueden
                fermentar y generar sustancias tóxicas que se reabsorben hacia el organismo, en
                un proceso que suele denominarse autointoxicación. Una limpieza periódica del
                colon ayuda a reducir esa carga de toxinas y a mantener el equilibrio con el
                resto de los órganos de filtración —hígado, riñones, pulmones—, contribuyendo a
                la prevención de distintas enfermedades.
              </p>
            </div>
          </section>

          <aside className="rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-[var(--color-cream-2)] p-8 text-center">
            <h2 className="font-display text-2xl text-[var(--color-forest)]">
              Viví la experiencia Rena.Ser
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[var(--color-ink-soft)]">
              Una práctica con siglos de historia, hoy a tu alcance de forma segura y
              profesional. Pedí tu asesoría gratuita.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <WhatsAppCta source="historia_cta">Pedí tu turno</WhatsAppCta>
              <Link href="/tratamientos/" className="btn btn-ghost">
                Ver tratamientos
              </Link>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { treatments, stats, homeBenefits } from "@/lib/site";
import { ArrowRight, Drop, Sparkle, Leaf } from "./icons";

const treatmentIcons = [Drop, Sparkle, Leaf, Leaf, Sparkle];

export function TreatmentsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {treatments.map((t, i) => {
        const Icon = treatmentIcons[i % treatmentIcons.length];
        return (
          <Link
            key={t.slug}
            href={`/${t.slug}/`}
            className="group relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-pine)] transition group-hover:bg-[var(--color-forest)] group-hover:text-[var(--color-cream)]">
              <Icon width={24} height={24} />
            </span>
            <span className="eyebrow mt-5">{t.eyebrow}</span>
            <h3 className="mt-1.5 font-display text-2xl text-[var(--color-forest)]">{t.shortName}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">{t.claim}.</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-gold-deep)]">
              Ver tratamiento
              <ArrowRight width={16} height={16} className="transition group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid gap-px overflow-hidden rounded-[var(--radius-xl2)] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-[var(--color-forest)] p-7 text-center">
          <div className="font-display text-5xl font-semibold text-[var(--color-gold)]">{s.value}</div>
          <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-[var(--color-sage-soft)]">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export function BenefitsList({ limit }: { limit?: number }) {
  const items = limit ? homeBenefits.slice(0, limit) : homeBenefits;
  return (
    <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
      {items.map((b) => (
        <div key={b.title} className="flex gap-4">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rotate-45 rounded-[3px] bg-[var(--color-gold)]" />
          <div>
            <h3 className="font-semibold text-[var(--color-forest)]">{b.title}</h3>
            <p className="mt-1 text-[var(--color-ink-soft)]">{b.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function MapEmbed({ url }: { url: string }) {
  return (
    <div className="h-full min-h-[280px] overflow-hidden rounded-[var(--radius-xl2)] border border-[var(--color-line)] shadow-[var(--shadow-soft)]">
      <iframe
        src={url}
        title="Ubicación de Rena.Ser en Acassuso, San Isidro"
        className="h-full w-full"
        style={{ minHeight: 280, border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export function CertificateCard({ photo, certificate, name, role, license }: {
  photo: string;
  certificate: string;
  name: string;
  role: string;
  license: string;
}) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius-xl2)] border-4 border-white shadow-[var(--shadow-card)]">
        <Image src={photo} alt={`${name}, ${role}`} width={560} height={680} className="aspect-[4/5] w-full object-cover" />
      </div>
      <a
        href={certificate}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute -bottom-5 -right-3 hidden w-40 rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-[var(--shadow-card)] transition hover:rotate-0 sm:block"
      >
        <Image src={certificate} alt={`Certificado de ${name} — ${license}`} width={320} height={420} className="w-full object-cover" />
      </a>
    </div>
  );
}

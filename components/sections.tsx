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
        title="Ubicación de Rena.Ser en Olivos, Vicente López"
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
  certificate?: string;
  name: string;
  role: string;
  license: string;
}) {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[var(--radius-xl2)] border-4 border-white shadow-[var(--shadow-card)]">
        <Image src={photo} alt={`${name}, ${role}`} width={560} height={680} className="aspect-[4/5] w-full object-cover" />
      </div>
      {certificate && (
        <a
          href={certificate}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-5 -right-3 hidden w-40 rotate-3 overflow-hidden rounded-xl border-4 border-white shadow-[var(--shadow-card)] transition hover:rotate-0 sm:block"
        >
          <Image src={certificate} alt={`Certificado de ${name} — ${license}`} width={320} height={420} className="w-full object-cover" />
        </a>
      )}
    </div>
  );
}

export function GoogleReviewCard({ name, text }: { name: string; text: string }) {
  const firstLetter = name.charAt(0).toUpperCase();
  const colors = [
    "bg-red-500",
    "bg-blue-600",
    "bg-emerald-600",
    "bg-amber-500",
    "bg-indigo-600",
    "bg-pink-500"
  ];
  const colorIndex = (name.charCodeAt(0) + (name.charCodeAt(1) || 0)) % colors.length;
  const avatarBg = colors[colorIndex];

  return (
    <figure className="flex flex-col rounded-[var(--radius-xl2)] border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-semibold text-sm ${avatarBg}`}>
            {firstLetter}
          </div>
          <div>
            <h4 className="font-semibold text-sm text-[var(--color-forest)]">{name}</h4>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[10px] font-medium text-gray-400">Usuario verificado</span>
              <span className="h-1 w-1 rounded-full bg-gray-300" />
              <span className="text-[10px] text-gray-400">Reseña de Google</span>
            </div>
          </div>
        </div>
        <span className="shrink-0 pt-0.5 opacity-90">
          <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
        </span>
      </div>

      <div className="flex gap-0.5 mt-3 text-amber-500">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-3.5 flex-1 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        “{text}”
      </blockquote>
    </figure>
  );
}

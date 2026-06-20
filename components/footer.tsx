import Link from "next/link";
import { business, mainNav, navTreatments } from "@/lib/site";
import { MapPin, Mail, Clock } from "./icons";
import { WhatsAppCta } from "./cta";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain mt-24 bg-[var(--color-forest)] text-[var(--color-cream)]">
      <div className="container-rs grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cream)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3c0 4-3.5 6-3.5 10A3.5 3.5 0 0 0 12 16.5 3.5 3.5 0 0 0 15.5 13C15.5 9 12 7 12 3z" fill="var(--color-pine)" />
                <path d="M5 13c1.8.4 3 1.8 3.3 4M19 13c-1.8.4-3 1.8-3.3 4" stroke="var(--color-forest)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-display text-2xl font-semibold">
              Rena<span className="text-[var(--color-pine)]">Ser</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-sage-soft)]">
            {business.tagline}. Hidroterapia colónica indolora, segura y profesional en
            Acassuso, Zona Norte de Buenos Aires.
          </p>
          <div className="mt-6">
            <WhatsAppCta className="btn btn-wa !py-2.5 text-sm" source="footer">
              Pedí tu turno
            </WhatsAppCta>
          </div>
        </div>

        <nav aria-label="Tratamientos">
          <h3 className="font-display text-lg text-[var(--color-cream)]">Tratamientos</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navTreatments.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-[var(--color-sage-soft)] transition hover:text-[var(--color-gold)]">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Secciones">
          <h3 className="font-display text-lg text-[var(--color-cream)]">El centro</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav
              .filter((m) => !m.children)
              .map((m) => (
                <li key={m.href}>
                  <Link href={m.href} className="text-[var(--color-sage-soft)] transition hover:text-[var(--color-gold)]">
                    {m.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/contacto/" className="text-[var(--color-sage-soft)] transition hover:text-[var(--color-gold)]">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg text-[var(--color-cream)]">Contacto</h3>
          <ul className="mt-4 space-y-4 text-sm text-[var(--color-sage-soft)]">
            <li className="flex gap-3">
              <MapPin width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[var(--color-gold)]">
                {business.address.street}, {business.address.neighborhood} — {business.address.locality}, Buenos Aires
              </a>
            </li>
            <li className="flex gap-3">
              <Mail width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
              <a href={`mailto:${business.email}`} className="break-all transition hover:text-[var(--color-gold)]">
                {business.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock width={18} height={18} className="mt-0.5 shrink-0 text-[var(--color-gold)]" />
              <span>
                Lun a Vie 9–19 h · Sáb 9–13 h
                <br />
                <span className="text-[var(--color-sage)]">Atención con turno previo</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-rs flex flex-col items-center justify-between gap-2 py-6 text-xs text-[var(--color-sage)] sm:flex-row">
          <p>© {year} Rena.Ser. Todos los derechos reservados.</p>
          <p>
            Terapeuta Maximiliano Quinta · Matrícula Nro 32 · Asociación de Hidroterapia
            Colónica de la Región Sur
          </p>
        </div>
      </div>
    </footer>
  );
}

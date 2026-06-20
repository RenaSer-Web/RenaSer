import Link from "next/link";
import { WhatsAppCta } from "@/components/cta";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="container-rs flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-3 font-display text-5xl text-[var(--color-forest)] md:text-6xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-[var(--color-ink-soft)]">
        La página que buscás no existe o fue movida. Volvé al inicio o escribinos para
        ayudarte a encontrar lo que necesitás.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn btn-primary">
          Volver al inicio <ArrowRight width={18} height={18} />
        </Link>
        <WhatsAppCta source="404">Escribinos</WhatsAppCta>
      </div>
    </section>
  );
}

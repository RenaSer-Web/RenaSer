"use client";

import { business } from "@/lib/site";
import { WhatsApp, Phone } from "./icons";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Empuja un evento a dataLayer (GTM) para usarlo como conversión en Google Ads. */
export function trackConversion(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function WhatsAppCta({
  children = "Pedí tu turno por WhatsApp",
  className = "btn btn-wa",
  source = "cta",
}: {
  children?: React.ReactNode;
  className?: string;
  source?: string;
}) {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackConversion("whatsapp_click", { source })}
    >
      <WhatsApp width={20} height={20} />
      {children}
    </a>
  );
}

export function CallCta({
  children,
  className = "btn btn-ghost",
  source = "cta",
}: {
  children?: React.ReactNode;
  className?: string;
  source?: string;
}) {
  return (
    <a
      href={`tel:${business.phoneE164}`}
      className={className}
      onClick={() => trackConversion("call_click", { source })}
    >
      <Phone width={18} height={18} />
      {children ?? `Llamar ${business.phoneDisplay}`}
    </a>
  );
}

/** Botón flotante de WhatsApp, presente en todo el sitio. */
export function WhatsAppFloat() {
  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      onClick={() => trackConversion("whatsapp_click", { source: "float" })}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <WhatsApp width={30} height={30} />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
    </a>
  );
}

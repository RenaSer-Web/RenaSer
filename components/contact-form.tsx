"use client";

import { useState } from "react";
import { business } from "@/lib/site";
import { trackConversion } from "./cta";
import { Check } from "./icons";

type Status = "idle" | "loading" | "ok" | "error";

export function ContactForm({
  treatment,
  variant = "card",
}: {
  /** Nombre del tratamiento, para prellenar la consulta en landings de Ads */
  treatment?: string;
  variant?: "card" | "plain";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot anti-spam: si está completo, descartamos en silencio.
    if (data.get("company")) {
      setStatus("ok");
      return;
    }

    const nombre = String(data.get("nombre") || "").trim();
    const telefono = String(data.get("telefono") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mensaje = String(data.get("mensaje") || "").trim();

    if (!nombre || !telefono || !email || !mensaje) {
      setError("Por favor completá todos los campos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("El correo electrónico no parece válido.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contacto/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, telefono, email, mensaje, treatment }),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      trackConversion("generate_lead", {
        form: "contacto",
        treatment: treatment ?? "general",
      });
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "No pudimos enviar el formulario. Escribinos por WhatsApp y te respondemos al instante."
      );
    }
  }

  if (status === "ok") {
    return (
      <div
        className={
          variant === "card"
            ? "rounded-[var(--radius-xl2)] border border-[var(--color-sage-soft)] bg-white p-8 text-center shadow-[var(--shadow-card)]"
            : "text-center"
        }
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-forest)]">
          <Check width={28} height={28} />
        </div>
        <h3 className="text-xl text-[var(--color-forest)]">¡Gracias por escribirnos!</h3>
        <p className="mt-2 text-[var(--color-ink-soft)]">
          Recibimos tu consulta y te vamos a contactar a la brevedad. Si querés una
          respuesta inmediata, escribinos por WhatsApp.
        </p>
        <a
          href={business.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-wa mt-5"
          onClick={() => trackConversion("whatsapp_click", { source: "form_success" })}
        >
          Continuar por WhatsApp
        </a>
      </div>
    );
  }

  const fieldCls =
    "w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] px-4 py-3 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-pine)] focus:bg-white";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={
        variant === "card"
          ? "rounded-[var(--radius-xl2)] border border-[var(--color-sage-soft)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8"
          : ""
      }
    >
      {/* Honeypot oculto */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink-soft)]">
            Nombre
          </label>
          <input id="nombre" name="nombre" type="text" required autoComplete="name" className={fieldCls} placeholder="Tu nombre" />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="telefono" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink-soft)]">
            Teléfono
          </label>
          <input id="telefono" name="telefono" type="tel" required autoComplete="tel" inputMode="tel" className={fieldCls} placeholder="Cód. de área + número" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink-soft)]">
            Correo electrónico
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldCls} placeholder="tucorreo@ejemplo.com" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold text-[var(--color-ink-soft)]">
            Tu consulta
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={4}
            className={fieldCls}
            placeholder={
              treatment
                ? `Quiero más información sobre ${treatment}…`
                : "Contanos en qué te podemos ayudar…"
            }
            defaultValue={treatment ? `Hola, quiero más información sobre ${treatment}.` : ""}
          />
        </div>
      </div>

      {error && (
        <p className="mt-3 text-sm font-medium text-[var(--color-clay)]" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn btn-gold mt-5 w-full disabled:opacity-60">
        {status === "loading" ? "Enviando…" : "Quiero mi asesoría gratuita"}
      </button>
      <p className="mt-3 text-center text-xs text-[var(--color-sage)]">
        Respuesta a la brevedad. Tus datos se usan solo para responder tu consulta.
      </p>
    </form>
  );
}
